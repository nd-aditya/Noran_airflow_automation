#!/usr/bin/env python3

"""
find_diff_database.py (v6, threaded + ALLERGY-safe)
------------------------------------------------------
Resumable MSSQL ↔ MySQL comparison engine.

- Uses ONLY threads (no multiprocessing) to avoid resource_tracker/semaphore issues.
- Uses multiple worker threads per table (chunks / hash-buckets).
- SPECIAL handling for ALLERGY (big transaction table):
    * small chunks
    * single worker (sequential chunks)
- Skips audit / log / backup tables by rule.
- Keeps JSON resume state and same behaviour as earlier versions.
- STATE_DIR is relative to this file and created automatically.
"""

import os
import json
import time
import hashlib
import traceback
import urllib.parse
import csv
import signal
import sys
from datetime import datetime
from concurrent.futures import ThreadPoolExecutor, as_completed

from sqlalchemy import create_engine, text
import pyodbc
import threading
import pandas as pd
from tqdm import tqdm
import gc

# ---------------- CONFIGURATION ----------------
SOURCE_DB_TYPE = "mssql"
TARGET_DB_TYPE = "mysql"

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
MYSQL_CONN_URL = f"mysql+pymysql://ndadmin:{pw}@localhost:3306/centricityps_original_16oct"

DIFF_DB = "CentricityPS_incremental"

# Global defaults (per-table values can override)
DEFAULT_CHUNK_SIZE = 200000          # range size per numeric PK chunk
DEFAULT_HASH_BUCKETS = 32             # buckets for hash-based comparison
DEFAULT_MAX_WORKERS = 4               # worker threads per table
MAX_RETRIES = 3

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
STATE_DIR = os.path.join(BASE_DIR, "state")
os.makedirs(STATE_DIR, exist_ok=True)

CHECKSUM_FILE = os.path.join(STATE_DIR, "checksum_state.json")
PROGRESS_FILE = os.path.join(STATE_DIR, "progress_state.json")
SUMMARY_CSV = os.path.join(
    STATE_DIR,
    f"comparison_summary_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
)

# Tables / patterns to skip (we do NOT skip ALLERGY here)
EXCLUDED_TABLES = {
    "ACCESSAUDIT",
    # add any exact table names you never want to process here
}

SKIP_PATTERNS = ("AUDIT", "BACKUP", "LOG")  # case-insensitive
ONLY_TABLES =[
    "WaitingList_new",
    "USRGROUP_new",
    "TransactionColumnSet_new",
    "TM_QueueAccess_new",
    "TM_Queue_new",
    "SERVPROVORG_new",
    "ServerSetupLog",
    "ServerSetupEvent_new",
    "ReportSelect_new",
    "ReportErrorLog_new",
    "ReportCriteria_new",
    "RcopiaSynchronizationMessage",
    "RcopiaSynchronizationClinical",
    "RcopiaSynchronization",
    "RcopiaPrescriptionStatusCode_new",
    "RcopiaPrescriptionStatus",
    "RcopiaMessageStatusReason",
    "RcopiaMessage",
    "RcopiaMapUser",
    "RcopiaMapProblem",
    "RcopiaMapPrescription",
    "RcopiaMapPharmacy",
    "RcopiaMapPatient",
    "RcopiaMapMedication",
    "RcopiaMapLocation",
    "RcopiaMapAllergy",
    "ProceduresSpecialty",
    "ProceduresInventory",
    "ProceduresFeeSchedule",
    "Procedures_Backup",
    "Procedures",
    "PROBLEM",
    "PreUpgrade_SecurityNodes",
    "PreUpgrade_ReportSecurity",
    "PreUpgrade_ReportParameter",
    "PreUpgrade_ReportNodes",
    "PreUpgrade_ReportCriteria_new",
    "PreUpgrade_ReportControlProperty",
    "PreUpgrade_ReportControl",
    "PreUpgrade_ComponentSensitiveReport_new",
    "PRESCRIB",
    "PMPGETPATIENTRESPONSE",
    "PlugIn_new",
    "Pharmacy",
    "PayorTable",
    "PaymentPlan",
    "PaymentMethod",
    "PatientVisitResource",
    "PatientVisitProcsAgg",
    "PatientVisitProcs",
    "PatientVisitPaperClaim",
    "PatientVisitInsurance",
    "PatientVisitFilingConditionCodes",
    "PatientVisitFiling",
    "PatientVisitDiagsRelatedCodes",
    "PatientVisitDiags",
    "PatientVisitAmbulance",
    "PatientVisitAgg",
    "PatientVisit",
    "PatientRelationship",
    "PatientRegistry",
    "PatientRace",
    "PatientProfileAgg",
    "PatientProfile_BAK",
    "PatientProfile",
    "PatientInsurance",
    "PatientInfoLog",
    "PatientEthnicity",
    "PatientCorrespondence_20250224",
    "PatientCorrespondence",
    "PatientContacts",
    "Patient_Race_latest_Record",
    "ORDERS",
    "ORDERLETTERS_new",
    "ORDER_ENTRY_MODIFIERS",
    "ORDDX",
    "Occupation",
    "OBSHEAD",
    "OBS",
    "MS_MESSAGE_DELTA",
    "MS_MESSAGE",
    "MS_ICD9XREF_DELTA",
    "MS_DRUGDIS_DELTA",
    "MS_DRUG_DOSING_DELTA",
    "MS_DRUG_DOSING",
    "MS_DOSING_PROFILES_DELTA",
    "MS_DOSING_PROFILES",
    "mostusedproblem_spr68501_2018",
    "MostUsedProblem",
    "MM_CEM_EventQueue",
    "MIKPatientVisitProcs",
    "MIKPatientVisitDiags",
    "MIKPatientVisit",
    "Medlists_PreUpgrade",
    "MedLists_BAK",
    "MedLists",
    "MedInteractionOverride",
    "MEDICATE_CPI_BACKUP",
    "MEDICATE",
    "MEDDX_BK_4768_new",
]
def should_skip_table(table_name: str) -> bool:
    """
    Decide whether to skip a table entirely.

    Rules:
    - Skip anything whose UPPER(name) is in EXCLUDED_TABLES.
    - Skip anything whose name CONTAINS any of SKIP_PATTERNS.
    NOTE: We intentionally DO NOT include 'ALLERGY' here.
    """
    t = table_name.upper()
    if t in EXCLUDED_TABLES:
        return True
    return any(p in t for p in SKIP_PATTERNS)

# ------------------------------------------------

# logging (thread-safe small helper)
_log_lock = threading.Lock()
def log(msg):
    with _log_lock:
        print(f"[{datetime.now().strftime('%H:%M:%S')}] {msg}", flush=True)

def md5_df(df):
    if df is None or df.empty:
        return "empty"
    return hashlib.md5(df.to_csv(index=False).encode("utf-8")).hexdigest()

def load_json(path):
    try:
        return json.load(open(path)) if os.path.exists(path) else {}
    except Exception:
        return {}

def save_json(path, data):
    with open(path, "w") as f:
        json.dump(data, f, indent=2)

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

# ---------- ENGINE FACTORY ----------
def create_engine_safe(db_type):
    if db_type == "mssql":
        mssqlengine = create_engine(
            "mssql+pyodbc://",
            creator=lambda: create_mssql_pyodbc_conn(),
            pool_pre_ping=True,
            pool_size=5,
            max_overflow=10
        )
        log("✅ MSSQL engine created (creator returns new pyodbc connection per connect)")
        return mssqlengine
    elif db_type == "mysql":
        engine = create_engine(
            MYSQL_CONN_URL,
            pool_pre_ping=True,
            pool_recycle=1800,
            pool_size=5,
            max_overflow=10
        )
        try:
            with engine.connect() as conn:
                conn.execute(text("SET GLOBAL max_allowed_packet=1073741824"))
        except Exception as e:
            log(f"⚠️ Could not set GLOBAL max_allowed_packet (may need privileges): {e}")
        log("✅ MySQL engine created")
        return engine
    else:
        raise ValueError("Unsupported DB type")

def recreate_engine_if_needed(engines, db_key):
    try:
        if engines.get(db_key):
            engines[db_key].dispose()
    except Exception:
        pass
    engines[db_key] = create_engine_safe(db_key)
    return engines[db_key]

# ---------- Graceful shutdown ----------
def dispose_engines(engines):
    for k, eng in list(engines.items()):
        try:
            if eng:
                eng.dispose()
                log(f"🔌 Disposed engine: {k}")
        except Exception as e:
            log(f"⚠️ Error disposing engine {k}: {e}")

_terminate_now = False
def request_terminate(signum=None, frame=None):
    global _terminate_now
    log(f"⚠️ Received termination signal ({signum}); will attempt graceful shutdown...")
    _terminate_now = True

def register_signal_handlers(engines):
    signal.signal(signal.SIGINT, request_terminate)
    signal.signal(signal.SIGTERM, request_terminate)
    try:
        signal.signal(signal.SIGHUP, request_terminate)
    except Exception:
        pass

# ---------- METADATA ----------
def get_table_list(engine, db_type):
    if db_type == "mssql":
        q = text("SELECT name FROM sys.tables WHERE is_ms_shipped=0 ORDER BY name")
        with engine.connect() as conn:
            rows = conn.execute(q).fetchall()
            return [r[0] for r in rows]
    else:
        try:
            df = pd.read_sql(text("SHOW TABLES"), engine)
            return df.iloc[:, 0].tolist()
        except Exception as e:
            log(f"⚠️ get_table_list (mysql) failed: {e}")
            return []

def get_primary_key(engine, db_type, table):
    if db_type == "mssql":
        q = text("""
        SELECT c.COLUMN_NAME
        FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS t
        JOIN INFORMATION_SCHEMA.KEY_COLUMN_USAGE c
          ON t.CONSTRAINT_NAME=c.CONSTRAINT_NAME
        WHERE t.TABLE_NAME=:table AND t.CONSTRAINT_TYPE='PRIMARY KEY'
        """)
        with engine.connect() as conn:
            r = conn.execute(q, {"table": table}).fetchone()
            return r[0] if r else None
    else:
        q = text("""
        SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS
        WHERE TABLE_SCHEMA=DATABASE() AND TABLE_NAME=:table
        AND COLUMN_KEY='PRI' LIMIT 1
        """)
        try:
            df = pd.read_sql(q, engine, params={"table": table})
            return df.iloc[0, 0] if not df.empty else None
        except Exception as e:
            log(f"⚠️ get_primary_key (mysql) for {table} failed: {e}")
            return None

def get_columns(engine, db_type, table):
    if db_type == "mssql":
        q = text("""
            SELECT COLUMN_NAME
            FROM INFORMATION_SCHEMA.COLUMNS
            WHERE TABLE_NAME=:table
            ORDER BY ORDINAL_POSITION
        """)
        with engine.connect() as conn:
            rows = conn.execute(q, {"table": table}).fetchall()
            return [r[0] for r in rows]
    else:
        try:
            df = pd.read_sql(text(f"SHOW COLUMNS FROM `{table}`"), engine)
            return df["Field"].tolist()
        except Exception as e:
            log(f"⚠️ get_columns: unable to read columns for `{table}` on mysql: {e}")
            return []

def get_min_max(engine, db_type, table, pk):
    if db_type == "mssql":
        q = text(f"SELECT MIN([{pk}]) as mn, MAX([{pk}]) as mx FROM [{table}]")
        df = pd.read_sql(q, engine)
        return tuple(df.iloc[0])
    else:
        q = text(f"SELECT MIN(`{pk}`) as mn, MAX(`{pk}`) as mx FROM `{table}`")
        df = pd.read_sql(q, engine)
        return tuple(df.iloc[0])

def get_row_count(engine, table):
    """
    Use DMVs to get row count without scanning the table.
    Falls back to COUNT_BIG(*) if DMVs unavailable.
    """
    try:
        q = text("""
            SELECT SUM(p.row_count) AS rc
            FROM sys.dm_db_partition_stats p
            JOIN sys.tables t ON t.object_id = p.object_id
            WHERE t.name = :table AND p.index_id IN (0,1)
        """)
        df = pd.read_sql(q, engine, params={"table": table})
        if not df.empty and pd.notna(df.iloc[0, 0]):
            return int(df.iloc[0, 0])
    except Exception as e:
        log(f"⚠️ get_row_count via DMVs failed for {table}: {e}")

    try:
        q2 = text(f"SELECT COUNT_BIG(1) AS rc FROM [{table}]")
        df2 = pd.read_sql(q2, engine)
        return int(df2.iloc[0, 0]) if not df2.empty else 0
    except Exception as e:
        log(f"⚠️ get_row_count COUNT_BIG failed for {table}: {e}")
        return 0

# ---------- Additional helpers ----------
def detect_pk_column(engine, table):
    pk = get_primary_key(engine, SOURCE_DB_TYPE, table)
    if pk:
        return pk
    cols = get_columns(engine, SOURCE_DB_TYPE, table)
    if not cols:
        return None
    lower_cols = [c.lower() for c in cols]
    candidates = []
    if "id" in lower_cols:
        candidates.append(cols[lower_cols.index("id")])
    tbl_id = f"{table.lower()}id"
    if tbl_id in lower_cols:
        candidates.append(cols[lower_cols.index(tbl_id)])
    return candidates[0] if candidates else cols[0]

def get_column_dtype(engine, table, column):
    try:
        q = text("""
            SELECT DATA_TYPE FROM INFORMATION_SCHEMA.COLUMNS
            WHERE TABLE_NAME = :table AND COLUMN_NAME = :col
        """)
        df = pd.read_sql(q, engine, params={"table": table, "col": column})
        if df.empty:
            return None
        return df.iloc[0, 0].lower()
    except Exception as e:
        log(f"⚠️ get_column_dtype failed for {table}.{column}: {e}")
        return None

def get_column_types(engine, db_type, table, columns):
    """Get data types for all columns in a table."""
    column_types = {}
    if db_type == "mssql":
        q = text("""
            SELECT COLUMN_NAME, DATA_TYPE
            FROM INFORMATION_SCHEMA.COLUMNS
            WHERE TABLE_NAME = :table
            ORDER BY ORDINAL_POSITION
        """)
        with engine.connect() as conn:
            rows = conn.execute(q, {"table": table}).fetchall()
            for row in rows:
                column_types[row[0]] = row[1].lower()
    else:
        try:
            df = pd.read_sql(text(f"SHOW COLUMNS FROM `{table}`"), engine)
            for _, row in df.iterrows():
                column_types[row["Field"]] = row["Type"].lower()
        except Exception as e:
            log(f"⚠️ get_column_types failed for {table}: {e}")
    return column_types

# ---------- READ CHUNKS ----------
def col_expr(db_type, col):
    return f"[{col}]" if db_type == "mssql" else f"`{col}`"

def table_expr(db_type, table):
    return f"[{table}]" if db_type == "mssql" else f"`{table}`"

def read_chunk(engine, db_type, table, cols, pk, start, end):
    col_str = ",".join([col_expr(db_type, c) for c in cols])
    q = text(
        f"SELECT {col_str} FROM {table_expr(db_type, table)} "
        f"WHERE {col_expr(db_type, pk)}>=:start AND {col_expr(db_type, pk)}<:end"
    )
    df = pd.read_sql(q, engine, params={"start": start, "end": end})
    return df

def read_hash_bucket(engine, db_type, table, cols, pk, bucket, nbuckets):
    col_str = ",".join([col_expr(db_type, c) for c in cols])
    if db_type == "mssql":
        q = text(
            f"SELECT {col_str} FROM [{table}] "
            f"WHERE ABS(CHECKSUM([{pk}])) % :nb = :b"
        )
    else:
        q = text(
            f"SELECT {col_str} FROM `{table}` "
            f"WHERE MOD(ABS(CRC32(`{pk}`)), :nb) = :b"
        )
    df = pd.read_sql(q, engine, params={"nb": nbuckets, "b": bucket})
    return df

# ---------- DIFF STORAGE ----------
def ensure_diff_db(mysql_engine):
    with mysql_engine.connect() as conn:
        conn.execute(text(f"CREATE DATABASE IF NOT EXISTS `{DIFF_DB}`"))

def ensure_diff_table_from_schema(mysql_engine, table, columns, column_types=None):
    """Create diff table from column names and types (without needing a DataFrame)."""
    if not columns:
        return
    cols_sql = []
    for col in columns:
        if column_types and col in column_types:
            dtype = column_types[col]
            if "int" in dtype:
                t = "BIGINT"
            elif "float" in dtype or "double" in dtype or "decimal" in dtype or "numeric" in dtype:
                t = "DOUBLE"
            elif "datetime" in dtype or "date" in dtype or "time" in dtype:
                t = "DATETIME"
            elif "varchar" in dtype or "char" in dtype or "text" in dtype or "nvarchar" in dtype:
                t = "TEXT"
            else:
                t = "TEXT"
        else:
            # Default to TEXT if type unknown
            t = "TEXT"
        cols_sql.append(f"`{col}` {t}")
    if "difference_created_date" not in columns:
        cols_sql.append("`difference_created_date` DATETIME")
    if cols_sql:
        with mysql_engine.connect() as conn:
            conn.execute(
                text(
                    f"CREATE TABLE IF NOT EXISTS `{DIFF_DB}`.`{table}` "
                    f"({', '.join(cols_sql)})"
                )
            )

def ensure_diff_table(mysql_engine, table, df):
    # Always attempt to create the diff table, even if df is empty or None (use columns only if possible)
    if df is None or getattr(df, 'columns', None) is None:
        # Can't create table: no schema information available.
        return
    # columns present, possibly empty DataFrame
    cols_sql = []
    for c, dtype in zip(df.columns, getattr(df, 'dtypes', [])):
        if "int" in str(dtype):
            t = "BIGINT"
        elif "float" in str(dtype):
            t = "DOUBLE"
        elif "datetime" in str(dtype):
            t = "DATETIME"
        else:
            t = "TEXT"
        cols_sql.append(f"`{c}` {t}")
    if "difference_created_date" not in df.columns:
        cols_sql.append("`difference_created_date` DATETIME")
    if cols_sql:
        with mysql_engine.connect() as conn:
            conn.execute(
                text(
                    f"CREATE TABLE IF NOT EXISTS `{DIFF_DB}`.`{table}` "
                    f"({', '.join(cols_sql)})"
                )
            )

def insert_diff(mysql_engine, table, df):
    if df is None or df.empty:
        return 0
    for chunksize in (2000, 1000, 250, 50):
        try:
            df.to_sql(
                table,
                mysql_engine,
                schema=DIFF_DB,
                if_exists="append",
                index=False,
                chunksize=chunksize,
                method="multi"
            )
            return len(df)
        except Exception as e:
            msg = str(e).lower()
            log(f"⚠️ insert_diff failed (chunksize={chunksize}): {e}")
            try:
                mysql_engine.dispose()
            except Exception:
                pass
            time.sleep(1)
            if (
                "max_allowed_packet" in msg
                or "lost connection" in msg
                or "packet" in msg
            ):
                continue
            else:
                raise
    log("❌ insert_diff giving up after retries")
    return 0

# ---------- COMPARISON ----------
def compare_chunk(table, cols, pk, start, end,
                  src_type, tgt_type, engines, checksum_state):
    key = f"{table}_{start}_{end}"
    for attempt in range(1, MAX_RETRIES + 1):
        if _terminate_now:
            log(f"✂️ Terminating compare_chunk early for {key}")
            return None
        try:
            df_src = read_chunk(engines[src_type], src_type, table, cols, pk, start, end)
            df_tgt = read_chunk(engines[tgt_type], tgt_type, table, cols, pk, start, end)

            for c in cols:
                if c in df_src.columns and c in df_tgt.columns:
                    if df_src[c].dtype != df_tgt[c].dtype:
                        df_src[c] = df_src[c].astype(str)
                        df_tgt[c] = df_tgt[c].astype(str)

            chk_tgt = md5_df(df_tgt)
            if checksum_state.get(key) == chk_tgt:
                # Return a DataFrame with the columns of df_src but no rows
                return df_src.iloc[0:0].copy()

            merged = df_tgt.merge(df_src, how="left", on=cols, indicator=True)
            diff = merged[merged["_merge"] == "left_only"].drop(columns=["_merge"])
            print(f"diff: {diff.shape}")
            print(f"src: {df_src.shape}")
            print(f"tgt: {df_tgt.shape}")
            print(f"chunk start: {start}, end: {end}, checksum: {chk_tgt}")
            del merged
            if not diff.empty:
                diff["difference_created_date"] = datetime.now()
            checksum_state[key] = chk_tgt

            del df_src, df_tgt
            gc.collect()

            return diff
        except Exception as e:
            msg = str(e).lower()
            log(f"⚠️ Retry {attempt}/{MAX_RETRIES} for chunk {key}: {e}")

            if (
                "connection is busy" in msg
                or "function sequence" in msg
                or "closed connection" in msg
                or "the cursor's connection has been closed" in msg
            ):
                log("🔁 MSSQL DBAPI issue — recreating MSSQL engine")
                recreate_engine_if_needed(engines, src_type)
            if (
                "login timeout expired" in msg
                or "tcp provider" in msg
                or "08s01" in msg
            ):
                log("🔁 Network/timeout issue — recreating both engines")
                recreate_engine_if_needed(engines, src_type)
                recreate_engine_if_needed(engines, tgt_type)
            time.sleep(1 + attempt * 0.5)
    log(f"❌ Skipped chunk {key} after {MAX_RETRIES} retries.")
    return None

def compare_hash_bucket(table, cols, pk, bucket, nbuckets,
                        src_type, tgt_type, engines, checksum_state):
    key = f"{table}_hash_{bucket}"
    for attempt in range(1, MAX_RETRIES + 1):
        if _terminate_now:
            log(f"✂️ Terminating compare_hash_bucket early for {key}")
            return None
        try:
            df_src = read_hash_bucket(
                engines[src_type], src_type, table, cols, pk, bucket, nbuckets
            )
            df_tgt = read_hash_bucket(
                engines[tgt_type], tgt_type, table, cols, pk, bucket, nbuckets
            )

            for c in cols:
                if c in df_src.columns and c in df_tgt.columns:
                    if df_src[c].dtype != df_tgt[c].dtype:
                        df_src[c] = df_src[c].astype(str)
                        df_tgt[c] = df_tgt[c].astype(str)

            chk_tgt = md5_df(df_tgt)
            if checksum_state.get(key) == chk_tgt:
                # Return a DataFrame with the columns of df_src but no rows
                return df_src.iloc[0:0].copy()

            merged = df_tgt.merge(df_src, how="left", on=cols, indicator=True)
            diff = merged[merged["_merge"] == "left_only"].drop(columns=["_merge"])
            del merged
            if not diff.empty:
                diff["difference_created_date"] = datetime.now()
            checksum_state[key] = chk_tgt

            del df_src, df_tgt
            gc.collect()

            return diff
        except Exception as e:
            msg = str(e).lower()
            log(f"⚠️ Retry {attempt}/{MAX_RETRIES} for hash bucket {key}: {e}")
            if (
                "connection is busy" in msg
                or "function sequence" in msg
                or "closed connection" in msg
            ):
                log("🔁 MSSQL DBAPI issue — recreating MSSQL engine")
                recreate_engine_if_needed(engines, src_type)
            time.sleep(1 + attempt * 0.5)
    log(f"❌ Skipped hash bucket {key} after {MAX_RETRIES} retries.")
    return None

# ---------- TABLE SETTINGS ----------
def choose_table_settings(table, row_count):
    """
    Decide CHUNK_SIZE and MAX_WORKERS per table based on row count.
    ALLERGY gets special treatment: smaller chunks & single worker.
    """
    t = table.upper()

    # Special-case ALLERGY: keep memory extremely low
    if t == "ALLERGY":
        chunk_size = 2000
        max_workers = 2    # sequential chunks
        hash_buckets = 16  # for hash-based path if used
        log(f"⚙️ {table}: ALLERGY-safe tuning → rows={row_count}, chunk_size={chunk_size}, workers={max_workers}")
        return chunk_size, max_workers, hash_buckets

    # Default behaviour for other tables
    chunk_size = DEFAULT_CHUNK_SIZE
    max_workers = DEFAULT_MAX_WORKERS
    hash_buckets = DEFAULT_HASH_BUCKETS

    # Some gentle tuning for very large tables
    if row_count > 10_000_000:
        chunk_size = 50_000
        max_workers = 2
    elif row_count > 2_000_000:
        chunk_size = 100_000
        max_workers = 3
    elif row_count > 500_000:
        chunk_size = 150_000
        max_workers = 4

    log(f"⚙️ {table}: table settings → rows={row_count}, chunk_size={chunk_size}, workers={max_workers}")
    return chunk_size, max_workers, hash_buckets

# ---------- TABLE PROCESS ----------
def process_table(table, checksum_state, engines):
    log(f"📘 Processing table: {table}")
    src_engine, tgt_engine = engines[SOURCE_DB_TYPE], engines[TARGET_DB_TYPE]

    row_count = get_row_count(src_engine, table)
    chunk_size, table_workers, hash_buckets = choose_table_settings(table, row_count)

    pk = get_primary_key(src_engine, SOURCE_DB_TYPE, table)
    src_cols = get_columns(src_engine, SOURCE_DB_TYPE, table)
    tgt_cols = get_columns(tgt_engine, TARGET_DB_TYPE, table)
    common_cols = [c for c in src_cols if c in tgt_cols]
    if not common_cols:
        log(f"⚠️ Skipping {table}: no common columns.")
        return (table, 0)

    ensure_diff_db(engines["mysql"])
    
    # Create the diff table schema upfront using source table metadata
    # This ensures the table exists even if all chunks return empty diffs
    src_column_types = get_column_types(src_engine, SOURCE_DB_TYPE, table, common_cols)
    ensure_diff_table_from_schema(engines["mysql"], table, common_cols, src_column_types)
    log(f"✅ Ensured diff table schema exists for {table}")
    
    inserted_total = 0

    pk_col = detect_pk_column(src_engine, table)
    pk_dtype = get_column_dtype(src_engine, table, pk_col) if pk_col else None

    numeric_pk = False
    if pk:
        try:
            q_dtype = text("""
                SELECT DATA_TYPE
                FROM INFORMATION_SCHEMA.COLUMNS
                WHERE TABLE_NAME = :table AND COLUMN_NAME = :col
            """)
            dtype = pd.read_sql(q_dtype, src_engine, params={"table": table, "col": pk})
            if (
                not dtype.empty
                and dtype.iloc[0, 0].lower()
                in ["int", "bigint", "smallint", "tinyint", "decimal", "numeric"]
            ):
                numeric_pk = True
        except Exception:
            numeric_pk = False

    if numeric_pk:
        try:
            q_test = text(f"""
                SELECT TOP 1 [{pk}] FROM [{table}]
                WHERE TRY_CAST([{pk}] AS INT) IS NULL
            """)
            df_test = pd.read_sql(q_test, src_engine)
            if not df_test.empty:
                log(f"⚠️ {table}: Non-numeric PK values detected → switching to hash-based comparison.")
                numeric_pk = False
        except Exception as e:
            log(f"⚠️ {table}: Unable to validate PK values ({e}) → switching to hash-based mode.")
            numeric_pk = False

    # -------- HASH-BASED PATH (no numeric PK) --------
    if not pk or not numeric_pk:
        log(f"🔸 {table}: No numeric PK → hash-based comparison (workers={table_workers}, buckets={hash_buckets}).")
        if not pk_col:
            log(f"⚠️ {table}: No pk candidate found for hash-bucketing — skipping.")
            return (table, 0)

        with ThreadPoolExecutor(max_workers=table_workers) as ex:
            futures = [
                ex.submit(
                    compare_hash_bucket,
                    table,
                    common_cols,
                    pk_col,
                    b,
                    hash_buckets,
                    SOURCE_DB_TYPE,
                    TARGET_DB_TYPE,
                    engines,
                    checksum_state,
                )
                for b in range(hash_buckets)
            ]
            for fut in tqdm(
                as_completed(futures),
                total=len(futures),
                desc=f"{table}",
                unit="bucket"
            ):
                try:
                    diff_df = fut.result()
                except Exception as e:
                    log(f"⚠️ compare_hash_bucket future raised: {e}")
                    diff_df = None
                if diff_df is not None and not getattr(diff_df, 'empty', False):
                    ensure_diff_table(engines["mysql"], table, diff_df)
                    inserted_total += insert_diff(engines["mysql"], table, diff_df)
                    del diff_df
                    gc.collect()
                elif diff_df is not None and getattr(diff_df, 'empty', False):
                    # diff_df is empty: ensure the table exists with correct schema but add zero rows
                    ensure_diff_table(engines["mysql"], table, diff_df)
                    # nothing to insert, because it is empty
        log(f"✅ {table}: Hash-based comparison done with {inserted_total} diffs.")
        return (table, inserted_total)

    # -------- NUMERIC-PK PATH (chunking) --------
    mn, mx = get_min_max(src_engine, SOURCE_DB_TYPE, table, pk)
    if pd.isna(mn) or pd.isna(mx):
        return (table, 0)

    ranges = [
        (s, min(s + chunk_size, mx + 1))
        for s in range(int(mn), int(mx + 1), chunk_size)
    ]
    log(f"🔹 {table}: Numeric PK ({pk}), {len(ranges)} chunks, workers={table_workers}, chunk_size={chunk_size}.")

    with ThreadPoolExecutor(max_workers=table_workers) as ex:
        futures = [
            ex.submit(
                compare_chunk,
                table,
                common_cols,
                pk,
                s,
                e,
                SOURCE_DB_TYPE,
                TARGET_DB_TYPE,
                engines,
                checksum_state,
            )
            for s, e in ranges
        ]
        for fut in tqdm(
            as_completed(futures),
            total=len(futures),
            desc=f"{table}",
            unit="chunk"
        ):
            try:
                diff_df = fut.result()
            except Exception as e:
                log(f"⚠️ compare_chunk future raised: {e}")
                diff_df = None
            if diff_df is not None and not getattr(diff_df, 'empty', False):
                ensure_diff_table(engines["mysql"], table, diff_df)
                inserted_total += insert_diff(engines["mysql"], table, diff_df)
                del diff_df
                gc.collect()
            elif diff_df is not None and getattr(diff_df, 'empty', False):
                # diff_df is empty: ensure the table exists with correct schema but add zero rows
                ensure_diff_table(engines["mysql"], table, diff_df)
                # nothing to insert, because it is empty

    log(f"✅ Completed {table}: {inserted_total} diff rows.")
    return (table, inserted_total)

# ---------- MAIN ----------
if __name__ == "__main__":
    log("🚀 Starting Diff Engine v6 (threads only, ALLERGY-safe, resume enabled)")

    engines = {
        "mssql": create_engine_safe("mssql"),
        "mysql": create_engine_safe("mysql"),
    }

    register_signal_handlers(engines)

    checksum_state = load_json(CHECKSUM_FILE)
    progress_state = load_json(PROGRESS_FILE)
    completed_tables = set(progress_state.get("completed", []))

    src_engine = engines[SOURCE_DB_TYPE]
    tables = get_table_list(src_engine, SOURCE_DB_TYPE)
    tables = ONLY_TABLES if ONLY_TABLES else tables

    pending_tables = [
        t for t in tables
        if t not in completed_tables and not should_skip_table(t)
    ]
    skipped_tables = [t for t in tables if should_skip_table(t)]

    if skipped_tables:
        log(f"⏭ Skipping {len(skipped_tables)} tables by rule (AUDIT/BACKUP/LOG/explicit): "
            + ", ".join(skipped_tables))

    if not pending_tables:
        log("🎉 All tables already processed (or skipped by rule).")
        dispose_engines(engines)
        sys.exit(0)

    log(f"Total tables: {len(tables)}, pending (after skip): {len(pending_tables)}")
    summary = []

    try:
        for table in pending_tables:
            if _terminate_now:
                log("✂️ Termination requested: stopping before starting next table.")
                break
            start_time = datetime.now()
            try:
                t, ins = process_table(table, checksum_state, engines)
                summary.append((t, "SUCCESS", ins, str(datetime.now() - start_time)))
                completed_tables.add(t)
                log(f"✅ Table {t} processed successfully with {ins} rows.")
            except Exception as e:
                err_msg = str(e).replace("\n", " ")[:300]
                summary.append((table, f"ERROR: {err_msg}", 0, str(datetime.now() - start_time)))
                log(f"❌ Error in {table}: {err_msg}")
                traceback.print_exc()

            try:
                save_json(CHECKSUM_FILE, checksum_state)
                save_json(PROGRESS_FILE, {"completed": list(completed_tables)})
            except Exception as e:
                log(f"⚠️ Failed to persist state: {e}")

            try:
                with open(SUMMARY_CSV, "a", newline="") as f:
                    writer = csv.writer(f)
                    if os.stat(SUMMARY_CSV).st_size == 0:
                        writer.writerow(["Table", "Status", "RowsInserted", "Duration"])
                    writer.writerow(summary[-1])
            except Exception as e:
                log(f"⚠️ Failed to write summary CSV row: {e}")

    finally:
        dispose_engines(engines)

    total_success = sum(1 for t in summary if "SUCCESS" in t[1])
    total_errors = sum(1 for t in summary if "ERROR" in t[1])
    total_rows = sum(t[2] for t in summary if isinstance(t[2], int))

    log("=" * 60)
    log(f"✅ Completed run: {total_success} tables succeeded, {total_errors} failed")
    log(f"📁 Summary CSV exported: {SUMMARY_CSV}")
    log(f"🕒 Total diff rows inserted: {total_rows}")
