#!/usr/bin/env python3

"""
init_max_dates.py
-----------------
One-time initializer.

Reads all tables from MySQL database `centricityps_original_16oct`,
detects the date column (Created, ModifiedDate, DTS_Export_Date, DB_Create_Date),
computes MAX() date per table, and stores result into:

    B.table_sync_status (table_name, last_sync)

This prepares the incremental sync engine to start from a clean baseline.
"""

import pandas as pd
import urllib.parse
from sqlalchemy import create_engine, text
import traceback

# -----------------------------------------------------
# CONFIG
# -----------------------------------------------------

MYSQL_SRC_DB = "centricityps_original_16oct"
TARGET_SCHEMA = "CentricityPS_incremental"
TARGET_TABLE = "table_sync_status"

DATE_CANDIDATES = [
    "Created",
    "ModifiedDate",
    "DTS_Export_Date",
    "DB_Create_Date",
]

# MySQL connection
pw = urllib.parse.quote_plus("ndADMIN@2025")
MYSQL_URL = f"mysql+pymysql://ndadmin:{pw}@localhost:3306"


# -----------------------------------------------------
# CONNECT
# -----------------------------------------------------

engine = create_engine(
    MYSQL_URL,
    pool_pre_ping=True,
    pool_recycle=1800
)

# -----------------------------------------------------
# TRACKING TABLE HANDLERS
# -----------------------------------------------------

def ensure_tracking_table():
    sql = f"""
    CREATE TABLE IF NOT EXISTS `{TARGET_SCHEMA}`.`{TARGET_TABLE}` (
        table_name VARCHAR(200) PRIMARY KEY,
        last_sync DATETIME NULL
    );
    """
    with engine.connect() as conn:
        conn.execute(text(f"CREATE DATABASE IF NOT EXISTS `{TARGET_SCHEMA}`"))
        conn.execute(text(sql))


def upsert_last_sync(table_name, dt):
    sql = text(f"""
        INSERT INTO `{TARGET_SCHEMA}`.`{TARGET_TABLE}` (table_name, last_sync)
        VALUES (:t, :dt)
        ON DUPLICATE KEY UPDATE last_sync = VALUES(last_sync)
    """)

    with engine.begin() as conn:   # <-- THIS FIXES THE ISSUE
        conn.execute(sql, {"t": table_name, "dt": dt})
        print(f"Updated sync → {table_name} = {dt}")


# -----------------------------------------------------
# METADATA HELPERS
# -----------------------------------------------------

def get_tables():
    #sql = text(f"SHOW TABLES FROM `{MYSQL_SRC_DB}` where table_name='ALLERGY' ")
    sql= text(f"SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='centricityps_original_16oct' ")
    with engine.connect() as conn:
        df = pd.read_sql(sql, conn)
        return df.iloc[:, 0].tolist()


def get_columns(table):
    sql = text(f"""
        SELECT COLUMN_NAME 
        FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA = :db AND TABLE_NAME = :t
    """)
    with engine.connect() as conn:
        df = pd.read_sql(sql, conn, params={"db": MYSQL_SRC_DB, "t": table})
        return df["COLUMN_NAME"].tolist()


def detect_date_column(cols):
    normalized_cols = [c.strip().lower() for c in cols]
    for col in DATE_CANDIDATES:
        if col.lower() in normalized_cols:
            # return actual name (preserve original case)
            idx = normalized_cols.index(col.lower())
            return cols[idx]

    return None

def get_max_date(table, date_col):
    sql = text(f"""
        SELECT MAX(`{date_col}`) AS maxdt
        FROM `{MYSQL_SRC_DB}`.`{table}`
    """)
    with engine.connect() as conn:
        df = pd.read_sql(sql, conn)
        return df["maxdt"].iloc[0]


# -----------------------------------------------------
# MAIN PROCESS
# -----------------------------------------------------

def process_table(table):
    print(f"\n⏳ Processing table: {table}")

    cols = get_columns(table)
    date_col = detect_date_column(cols)

    if not date_col:
        print(f"⚠ {table}: No date column → storing NULL (full load on first run)")
        upsert_last_sync(table, None)
        return

    maxdt = get_max_date(table, date_col)

    print(f"✓ {table}: {date_col} → MAX = {maxdt}")

    upsert_last_sync(table, maxdt)


if __name__ == "__main__":
    print("🚀 Initializing max sync timestamps from centricityps_original_16oct")
    ensure_tracking_table()

    tables = get_tables()
    print(f"📌 Found {len(tables)} tables")

    for t in tables:
        try:
            process_table(t)
        except Exception as e:
            print(f"❌ ERROR in table {t}: {e}")
            traceback.print_exc()

    print("\n=====================================")
    print("🎉 Initialization complete!")
    print("Your incremental sync engine is ready to run.")
    print("=====================================")
