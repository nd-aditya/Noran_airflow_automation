"""
DAG: Trigger bulk deidentification for a hardcoded list of tables.

Prerequisites (done once from UI):
- Dump registered for the client.
- Primary key config (e.g. use previous mapping) done.

This DAG only calls the deidentification API to enqueue tasks. Start workers
manually (e.g. start_workers.sh or python manage.py start_worker) to process them.
"""

import logging
import sys
from datetime import datetime, timedelta
from pathlib import Path

_project_root = Path(__file__).resolve().parent.parent
if str(_project_root) not in sys.path:
    sys.path.insert(0, str(_project_root))

from airflow import DAG
from airflow.models import Variable
from airflow.operators.python import PythonOperator

from service.deidentification_api import start_bulk_deidentification

# --- Hardcoded config: set to your client, dump, and table list ---
DEID_CLIENT_ID = 1
DEID_DUMP_ID = 7  # match your UI path /clients/1/dumps/7/
# API base URL: backend (daphne) on 13800. Django routes are at root (e.g. deid/start/...), no /api prefix.
# Override with Airflow Variable "deid_api_base_url" if needed.
DEID_API_BASE_URL_DEFAULT = "http://10.1.64.35:13800"
DEID_TABLE_NAMES = [
    "PatientProfile",
    # Add more table names as needed.
]
# Optional: if your API requires auth, set e.g. {"Authorization": "Bearer <token>"}
DEID_AUTH_HEADERS = None


def run_bulk_deidentification(**context):
    base_url = Variable.get("deid_api_base_url", default_var=DEID_API_BASE_URL_DEFAULT)
    result = start_bulk_deidentification(
        client_id=DEID_CLIENT_ID,
        dump_id=DEID_DUMP_ID,
        table_names=DEID_TABLE_NAMES,
        base_url=base_url,
        auth_headers=DEID_AUTH_HEADERS,
    )
    logging.info("Deidentification API response: %s", result)
    if not result.get("success", True):
        raise RuntimeError(f"Deidentification API returned success=False: {result}")
    return result


with DAG(
    dag_id="deidentification_bulk",
    start_date=datetime(2025, 1, 1),
    schedule=None,
    catchup=False,
    tags=["deidentification", "bulk"],
) as dag:
    trigger_bulk_deid = PythonOperator(
        task_id="trigger_bulk_deidentification",
        python_callable=run_bulk_deidentification,
        retries=3,
        retry_delay=timedelta(seconds=30),
    )
