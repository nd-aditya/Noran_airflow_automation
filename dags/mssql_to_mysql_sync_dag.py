"""
DAG: Incremental sync from MSSQL (CentricityPS) to MySQL.

Connection details are in service/connection_config.py; engines are built from there.
"""

import logging
import sys
import urllib.parse
from datetime import datetime
from pathlib import Path

# Ensure project root is on path so "service" package is importable
_project_root = Path(__file__).resolve().parent.parent
if str(_project_root) not in sys.path:
    sys.path.insert(0, str(_project_root))

from airflow import DAG
from airflow.operators.python import PythonOperator
from sqlalchemy import create_engine

from service.connection_config import (
    MSSQL_CONN_PARAMS,
    MYSQL_CONN_PARAMS,
    INCREMENTAL_SCHEMA,
    ORIGINAL_SCHEMA,
)
from service.mssql_mysql_sync import run_sync, add_nd_auto_increment_id_step

# Optional: sync only these tables (None = discover from MSSQL)
SYNC_TABLES = ["ALLERGY"]  # test on ALLERGY only; set to None to sync all tables


def _make_mssql_engine():
    import pyodbc  # Import here so DAG parses without pyodbc; required when task runs

    p = MSSQL_CONN_PARAMS
    port = p.get("port", 1433)
    parts = [
        f"Driver={{{p['driver']}}}",
        f"Server={p['server']},{port}",
        f"Database={p['database']}",
        f"Uid={p['uid']}",
        f"PWD={p['pwd']}",
        f"Encrypt={p.get('encrypt', 'no')}",
        f"TrustServerCertificate={p.get('trustservercertificate', 'yes')}",
    ]
    odbc_str = ";".join(parts)

    def creator():
        return pyodbc.connect(odbc_str, autocommit=False)

    return create_engine(
        "mssql+pyodbc://",
        creator=creator,
        pool_pre_ping=True,
        pool_size=5,
        max_overflow=10,
    )


def _make_mysql_engine():
    p = MYSQL_CONN_PARAMS
    host = p.get("host", "localhost")
    port = p.get("port", 3306)
    user = p["user"]
    password = urllib.parse.quote_plus(p.get("password", ""))
    database = p.get("database", "")
    url = f"mysql+pymysql://{user}:{password}@{host}:{port}/{database}"
    return create_engine(url, pool_pre_ping=True, pool_recycle=1800)


def run_mssql_to_mysql_sync(**context):
    eng_mssql = _make_mssql_engine()
    eng_mysql = _make_mysql_engine()
    try:
        total = run_sync(
            eng_mssql,
            eng_mysql,
            tables=SYNC_TABLES,
            log_fn=logging.info,
        )
        logging.info("Sync complete. Total rows inserted: %s", total)
        return total
    finally:
        eng_mssql.dispose()
        eng_mysql.dispose()


def run_add_nd_auto_increment_id(**context):
    """Post-extraction step: add and backfill nd_auto_increment_id for synced tables."""
    tables = SYNC_TABLES
    if not tables:
        logging.info("SYNC_TABLES is empty or None; skipping nd_auto_increment_id step.")
        return []
    eng_mysql = _make_mysql_engine()
    try:
        report = add_nd_auto_increment_id_step(
            eng_mysql,
            tables,
            original_schema=ORIGINAL_SCHEMA,
            incremental_schema=INCREMENTAL_SCHEMA,
            log_fn=logging.info,
        )
        for r in report:
            logging.info("nd_auto_increment_id: %s", r)
        return report
    finally:
        eng_mysql.dispose()


with DAG(
    dag_id="mssql_to_mysql_sync",
    start_date=datetime(2025, 1, 1),
    schedule=None,
    catchup=False,
    tags=["sync", "mssql", "mysql"],
) as dag:
    sync_task = PythonOperator(
        task_id="run_incremental_sync",
        python_callable=run_mssql_to_mysql_sync,
    )
    add_nd_id_task = PythonOperator(
        task_id="add_nd_auto_increment_id",
        python_callable=run_add_nd_auto_increment_id,
    )
    sync_task >> add_nd_id_task
