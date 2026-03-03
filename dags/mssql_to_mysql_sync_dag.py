"""
DAG: Incremental sync from MSSQL (CentricityPS) to MySQL.

Uses Airflow Connections for credentials. Create these in Airflow UI (Admin → Connections):

1. mssql_centricity (type: Microsoft SQL Server or Generic)
   - Host: your MSSQL server (e.g. 172.22.252.18)
   - Schema: centricityps (database name)
   - Login: your user
   - Password: your password
   - Port: 1433 (if not default)
   - Extra (JSON): {"driver": "ODBC Driver 17 for SQL Server", "encrypt": "no", "trustservercertificate": "yes"}

2. mysql_centricity (type: MySQL)
   - Host: localhost (or your MySQL host)
   - Schema: (leave empty or set default DB; sync uses its own schema)
   - Login: ndadmin
   - Password: your password
   - Port: 3306
"""

import sys
import urllib.parse
from datetime import datetime
from pathlib import Path

# Ensure project root is on path so "service" package is importable
_project_root = Path(__file__).resolve().parent.parent
if str(_project_root) not in sys.path:
    sys.path.insert(0, str(_project_root))

import pyodbc
from airflow import DAG
from airflow.hooks.base import BaseHook
from airflow.operators.python import PythonOperator
from sqlalchemy import create_engine

from service.mssql_mysql_sync import run_sync

# Connection IDs configured in Airflow
MSSQL_CONN_ID = "mssql_centricity"
MYSQL_CONN_ID = "mysql_centricity"

# Optional: sync only these tables (None = discover from MSSQL)
SYNC_TABLES = None  # e.g. ["DOCDATA", "DOCDATA2"] to limit tables


def _make_mssql_engine(conn_id: str):
    conn = BaseHook.get_connection(conn_id)
    extra = conn.extra_dejson if hasattr(conn, "extra_dejson") else {}
    driver = extra.get("driver", "ODBC Driver 17 for SQL Server")
    encrypt = extra.get("encrypt", "no")
    trust = extra.get("trustservercertificate", "yes")
    port = conn.port or 1433
    parts = [
        f"Driver={{{driver}}}",
        f"Server={conn.host},{port}",
        f"Database={conn.schema or ''}",
        f"Uid={conn.login}",
        f"PWD={conn.password}",
        f"Encrypt={encrypt}",
        f"TrustServerCertificate={trust}",
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


def _make_mysql_engine(conn_id: str):
    conn = BaseHook.get_connection(conn_id)
    host = conn.host or "localhost"
    port = conn.port or 3306
    user = conn.login
    password = urllib.parse.quote_plus(conn.password or "")
    schema = conn.schema or ""
    url = f"mysql+pymysql://{user}:{password}@{host}:{port}/{schema}"
    return create_engine(url, pool_pre_ping=True, pool_recycle=1800)


def run_mssql_to_mysql_sync(**context):
    eng_mssql = _make_mssql_engine(MSSQL_CONN_ID)
    eng_mysql = _make_mysql_engine(MYSQL_CONN_ID)
    try:
        total = run_sync(
            eng_mssql,
            eng_mysql,
            tables=SYNC_TABLES,
            log_fn=lambda msg: context["ti"].log.info(msg) if context.get("ti") else print(msg),
        )
        if context.get("ti"):
            context["ti"].log.info(f"Sync complete. Total rows inserted: {total}")
        return total
    finally:
        eng_mssql.dispose()
        eng_mysql.dispose()


with DAG(
    dag_id="mssql_to_mysql_sync",
    start_date=datetime(2025, 1, 1),
    schedule="@daily",
    catchup=False,
    tags=["sync", "mssql", "mysql"],
) as dag:
    sync_task = PythonOperator(
        task_id="run_incremental_sync",
        python_callable=run_mssql_to_mysql_sync,
    )
