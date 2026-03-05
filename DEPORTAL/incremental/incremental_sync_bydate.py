#!/usr/bin/env python3

"""
incremental_sync.py (Version A)
--------------------------------
Incremental MSSQL → MySQL sync engine.

FEATURES:
- Auto-detects date columns: Created, ModifiedDate, DTS_Export_Date, DB_Create_Date
- Tracks last sync timestamp per table in B.table_sync_status
- Pulls only incremental rows from MSSQL
- Inserts into MySQL schema CentricityPS_incremental
- Creates schema/tables if missing
- Reliable for millions of rows (chunked reading)
"""

import os
import pandas as pd
import urllib.parse
from datetime import datetime
from sqlalchemy import create_engine, text
import pyodbc
import traceback

# -----------------------------------------------------
# 1. CONFIGURATION
# -----------------------------------------------------

# Schema for tracking table
TRACKING_SCHEMA = "master"
TRACKING_TABLE = "table_sync_status"

# Target incremental schema
INCREMENTAL_SCHEMA = "CentricityPS_incremental_24_01_2026"

# Date columns to detect
DATE_CANDIDATES = [
    "Created",
    "ModifiedDate",
    "DTS_Export_Date",
    "DB_Create_Date",
    "Mshdate",
    "OrderRequestedDate",
    "DB_Updated_Date",
    "LastModified"
]

# MSSQL connection params
# MSSQL connection parameters
MSSQL_CONN_PARAMS = {
    "driver": "ODBC Driver 17 for SQL Server",
    "server": "172.22.252.18",
    "database": "centricityps",
    "uid": "neuroai",
    "pwd": "MhDR@*hR39Y5$tme!",
    "encrypt": "no",
    "trustservercertificate": "yes",
}
# MySQL connection
pw = urllib.parse.quote_plus("ndADMIN@2025")
MYSQL_URL = f"mysql+pymysql://ndadmin:{pw}@localhost:3306"

# -----------------------------------------------------
# 2. ENGINE FACTORIES
# -----------------------------------------------------


# ---------- MSSQL connection factory ----------
def make_mssql_conn_string(params):
    parts = [
        f"Driver={{{params['driver']}}}",
        f"Server={params['server']}",
        f"Database={params['database']}",
        f"Uid={params['uid']}",
        f"PWD={params['pwd']}",
        f"Encrypt={params.get('encrypt','no')}",
        f"TrustServerCertificate={params.get('trustservercertificate','yes')}"
    ]
    return ";".join(parts)

MSSQL_ODBC_STR = make_mssql_conn_string(MSSQL_CONN_PARAMS)

def create_mssql_pyodbc_conn():
    """
    Always create a NEW pyodbc connection. Do NOT reuse a global connection object.
    This prevents 'connection busy' / 'function sequence' errors when using threads.
    """
    return pyodbc.connect(MSSQL_ODBC_STR, autocommit=False)




def mssql_engine():
     mssqlengine = create_engine(
            "mssql+pyodbc://",
            creator=lambda: create_mssql_pyodbc_conn(),
            pool_pre_ping=True,
            pool_size=5,
            max_overflow=10)
     return mssqlengine

def mysql_engine():
    return create_engine(
        MYSQL_URL,
        pool_pre_ping=True,
        pool_recycle=1800
    )

eng_mssql = mssql_engine()
eng_mysql = mysql_engine()

# -----------------------------------------------------
# 3. TRACKING TABLE
# -----------------------------------------------------

def ensure_tracking_table():
    sql = f"""
    CREATE TABLE IF NOT EXISTS `{TRACKING_SCHEMA}`.`{TRACKING_TABLE}` (
        table_name VARCHAR(200) PRIMARY KEY,
        last_sync DATETIME NULL
    );
    """
    with eng_mysql.connect() as conn:
        conn.execute(text(sql))


def get_last_sync(table_name):
    if table_name=="DOCDATA":
        table_name="DOCUEMNT"
    
    sql = text(f"""
        SELECT last_sync
        FROM `{TRACKING_SCHEMA}`.`{TRACKING_TABLE}`
        WHERE table_name = :t
    """)
    print (eng_mysql)
    with eng_mysql.connect() as conn:
        print ("inside fetch date")
        row = conn.execute(sql, {"t": table_name}).fetchone()
        return row[0] if row else None


def update_last_sync(table_name, dt):
    sql = text(f"""
        INSERT INTO `{TRACKING_SCHEMA}`.`{TRACKING_TABLE}` (table_name, last_sync)
        VALUES (:t, :dt)
        ON DUPLICATE KEY UPDATE last_sync = VALUES(last_sync)
    """)
    with eng_mysql.begin() as conn:   # <-- THIS FIXES THE ISSUE
        conn.execute(sql, {"t": table_name, "dt": dt})
        print(f"Updated sync → {table_name} = {dt}")


# -----------------------------------------------------
# 4. METADATA HELPERS
# -----------------------------------------------------

def get_tables():
    sql = text("""
        SELECT name 
        FROM sys.tables 
        WHERE is_ms_shipped = 0 and name not like '%%AUDIT%%' AND name not like '%%Log%%' and name not like '%%Backup%%' and name not like '%%bkp%%'
               and name in ('DOCDATA2') ORDER BY name
    """)
    with eng_mssql.connect() as conn:
        rows = conn.execute(sql).fetchall()
        return [r[0] for r in rows]

#('PatientProfile', 'PatientRace', 'PatientEthnicity', 'PatientVisit', 'PatientVisitProcs', 'PROBLEM', 'MEDICATE', 'PRESCRIB', 'MEDINFO', 'OBS', 'OBSHEAD', 'HIERGRPS',
# 'DOCUMENT', 'DOCDATA', 'DOCDATA2', 'DOCOVERLAYINFO', 'DOCCONTB', 'MedLists', 'MasterDiagnosis', 'MasterProcedures', 'Procedures', 'ORDERCODES', 'ORDERCAT', 'CONFTYPES', 
# 'DOCTYPES', 'EXT_CODE', 'REL_OBS_EXT_CODE', 'LabOrderPanel', 
# 'L3TASKTYPE', 'ORDERS', 'Appointments', 'DoctorFacility', 'LOCREG', 'LinkLogic_Export_Flowsheet', 'CONVRATIO','ALLERGY')
        
    
def get_columns(table):
    sql = text("""
        SELECT COLUMN_NAME
        FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_NAME = :t
    """)
    with eng_mssql.connect() as conn:
        df = pd.read_sql(sql, conn, params={"t": table})
        return df["COLUMN_NAME"].tolist()


def detect_date_column(cols):
    normalized_cols = [c.strip().lower() for c in cols]
    print(normalized_cols)
    for col in DATE_CANDIDATES:
        if col.lower() in normalized_cols:
            # return actual name (preserve original case)
            idx = normalized_cols.index(col.lower())
            return cols[idx]

    return None


# -----------------------------------------------------
# 5. SYNC LOGIC
# -----------------------------------------------------
def ensure_diff_db():
    with eng_mysql.connect() as conn:
        conn.execute(text(f"CREATE DATABASE IF NOT EXISTS `{INCREMENTAL_SCHEMA}`"))

def ensure_incremental_table(table, df):
    """Create table if missing with matching column types, including BLOB for binary data."""
    if df.empty:
        return

    columns = []
    for c, dtype in zip(df.columns, df.dtypes):
        dtype_str = str(dtype).lower()
        
        if "int" in dtype_str:
            t = "BIGINT"
        #elif "float" in dtype_str or "decimal" in dtype_str:
        #    t = "DOUBLE"
        elif "float" in dtype_str or "decimal" in dtype_str or  "numeric" in dtype_str :
            # Check if values are integer-like
            series = df[c].dropna()
            if not series.empty and series.apply(lambda x: float(x).is_integer()).all():
                # Decide BIGINT vs DECIMAL based on size
                max_val = series.astype(int).abs().max()
                if max_val <= 9223372036854775807:
                    t = "BIGINT"
                else:
                    t = "DECIMAL(38,0)"
            else:
                t = "DECIMAL(38,10)"
        elif "datetime" in dtype_str:
            t = "DATETIME"
       # elif "object" in dtype_str:
            # Check if the column actually contains binary data
            # We look at the first non-null value to determine the type
        #    sample = df[c].dropna().iloc[0] if not df[c].dropna().empty else None
        #    if isinstance(sample, (bytes, bytearray)):
        #        t = "LONGBLOB"  # Necessary for binary images/pictures
        #    else:
        #        t = "LONGTEXT"
        elif "object" in dtype_str:
            non_null = df[c].dropna()

            if non_null.empty:
                # default safely to TEXT if column is empty
                t = "LONGTEXT"
            else:
                # check first N rows, not just one
                sample_size = min(20, len(non_null))
                samples = non_null.iloc[:sample_size]

                if samples.apply(lambda x: isinstance(x, (bytes, bytearray))).all():
                    t = "LONGBLOB"
                elif samples.apply(lambda x: isinstance(x, str)).all():
                    t = "LONGTEXT"
                else:
                # mixed types → force LONGBLOB (safest)
                    t = "LONGBLOB"
        else:
            t = "LONGTEXT"
        columns.append(f"`{c}` {t}")

    sql = f"""
    CREATE TABLE IF NOT EXISTS `{INCREMENTAL_SCHEMA}`.`{table}` (
        {', '.join(columns)}
    )
    """
    with eng_mysql.connect() as conn:
        conn.execute(text(sql))

def fetch_incremental(table, date_col, last_sync):
    """Pull incremental rows from MSSQL."""
    with eng_mssql.connect() as conn:
        if date_col is None:
            print(f"⚠ {table}: No date column — FULL LOAD running...")
            if (table=="DOCDATA" or table=="DOCDATA2" or table=="DOCCONTB"): 
                sql=text(f"select * from [{table}] where sdid in (select sdid from DOCUMENT WHERE  DTS_EXPORT_DATE>='2025-04-19') ")
            else:
                sql = text(f"SELECT * FROM [{table}]")
            return pd.read_sql(sql, conn)

        if last_sync:
            sql = text(f"""
                SELECT * 
                FROM [{table}]
                WHERE [{date_col}] > :dt
            """)
            return pd.read_sql(sql, conn, params={"dt": last_sync})
        else:
            print(f"ℹ {table}: First run — loading ALL rows")
            sql = text(f"SELECT * FROM [{table}]")
            return pd.read_sql(sql, conn)


def insert_incremental(table, df):
    if df.empty:
        return 0
    ensure_incremental_table(table, df)
    
    # Ensure binary columns remain as bytes and aren't forced to strings
    for col in df.columns:
        if df[col].dtype == 'object':
            # This preserves bytes while allowing normal strings to be handled by SQLAlchemy
            pass 

    conn = None
    trans = None

    try:
        # 🔐 explicitly own the connection
        conn = eng_mysql.connect()
        trans = conn.begin()

        df.to_sql(
            table,
            conn,   # ✅ CONNECTION, not engine
            schema=INCREMENTAL_SCHEMA,
            if_exists="append",
            index=False,
            chunksize=2000,
            method=None
        )

        trans.commit()
        return len(df)

    except Exception as e:
        print(f"❌ Insert failed for {table}: {e}")

        # rollback if possible
        if trans is not None:
            try:
                trans.rollback()
            except Exception:
                pass

        # close broken connection
        if conn is not None:
            try:
                conn.close()
            except Exception:
                pass

        # 🔥 KILL ALL POISONED CONNECTIONS
        eng_mysql.dispose()

        raise   # or return 0 if you want to continue

    finally:
        if conn is not None:
            try:
                conn.close()
            except Exception:
                pass
    #return len(df)

# -----------------------------------------------------
# 6. MAIN EXECUTION
# -----------------------------------------------------

def process_table(table):
    print(f"\n=== Processing {table} ===")

    cols = get_columns(table)
    date_col = detect_date_column(cols)
    last_sync = get_last_sync(table)
    print(f"{t}, {last_sync}, {date_col} ...lastsync,date columns")

    df = fetch_incremental(table, date_col, last_sync)
    print(f"{t} ...started")
    inserted = insert_incremental(table, df)
    print("inserted")
    if date_col:
        max_dt = df[date_col].max() if not df.empty else last_sync
    else:
        max_dt = datetime.now()

    update_last_sync(table, max_dt)

    print(f"✓ {table}: Inserted {inserted} rows. Last sync updated to {max_dt}")
    return inserted


if __name__ == "__main__":
    print("🚀 Incremental Sync Engine Started")
    ensure_diff_db()
    ensure_tracking_table()

    tables = get_tables()
    tables = ['DOCDATA']
    tables = ['DOCDATA2']
    total_rows = 0

    for t in tables:
        try:
            print(f"{t} ...started")
            total_rows += process_table(t)
        except Exception as e:
            print(f"❌ ERROR in {t}: {e}")
            traceback.print_exc()

    print("\n=====================================")
    print(f"✔ Sync complete, total rows inserted: {total_rows}")
    print("=====================================")
