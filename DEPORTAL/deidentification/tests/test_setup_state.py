import os
import django
import sys

# Set up Django environment
sys.path.append(
    "/Users/rohitchouhan/Documents/Code/backend/deidentification/deIdentification"
)
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "deIdentification.settings")
os.environ["DJANGO_ALLOW_ASYNC_UNSAFE"] = "true"
django.setup()
import requests
from nd_api.views.de_identification_task import create_deidentification_task
from nd_api.models import Clients, ClientDataDump, Table, IgnoreRowsDeIdentificaiton
from worker.models import Task, Chain
from django.contrib.auth.models import User
from keycloakauth.rolemodel import RoleModel, get_default_permissions
from nd_scripts.create_account import create_account
from nd_api.views.dump_view import create_tasks_after_new_dump_registered, run_stats_generation_task
from nd_api.views.de_identification_task import create_deidentification_task
from django.urls import reverse
import json


def update_config():
    client_obj, created = Clients.objects.get_or_create(
        client_name="test_local_1"
    )
    client_obj.config = {"admin_connection_str": 'mysql+mysqlconnector://root:123456789@localhost/nddenttest'}
    client_obj.save()

def wait_task():
    # breakpoint()
    tables = ["enc_table", "enc_table2", "users", "users2"]
    for table in tables:
        table_obj = Table.objects.get(table_name=table)
        for t in Task.objects.filter(arguments__table_id=table_obj.id).exclude(status=2):
            t.status = 8
            t.failure_count = 8
            t.save()
        

def test_register_new_db():
    # Clients.objects.all().delete()
    client_config = {"admin_connection_str": 'mysql+mysqlconnector://root:123456789@localhost/nddenttest'}
    master_db_config = {
        "connection_str": "mysql+pymysql://root:123456789@localhost/nddenttest_master",
        "tables": {
            "pii_data_table": {
                "primary_column_name": "patient_id",
                "upsert_instea qd_of_append": True,
                "tables": {
                    "users2": {
                        "primary_col": "uid",
                        "other_required_columns": [
                            "uid",
                            "patient_name",
                            "uname",
                            "upwd",
                            "first_name",
                            "last_name",
                            "city",
                            "state",
                            "address",
                            "zipcode",
                            "dob",
                            "email",
                            "ssn",
                            "phone",
                            "sex",
                            "register_date",
                            "notes",
                            "UserType",
                            "medical_note",
                        ],
                    }
                },
            }
        },
    }
    mapping_db_config = {
        "connection_str": "mysql+pymysql://root:123456789@localhost/nddenttest_helper",
        "ndid_start_value": 100100011100000,
        "mapping_query": "select u.uid AS client_patient_id, e.date  AS client_visit_date, e.encounterID AS client_encounter_id, u.register_date AS patient_registration_date from nddenttest.users2 as u left join nddenttest.enc_table2 as e on u.uid = e.patientID  where u.UserType = 3 order by 1, 2, 3",
    }
    client_obj, created = Clients.objects.get_or_create(
        client_name="test_local_1",
        emr_type="athenone",
        config=client_config,
        mapping_db_config=mapping_db_config,
        master_db_config=master_db_config,
    )

    # Use full URL instead of reverse() directly
    base_url = (
        "http://127.0.0.1:8000"  # Adjust if your server runs on another host/port
    )
    endpoint = reverse("client_dump", kwargs={"client_id": client_obj.id})
    url = f"{base_url}{endpoint}"

    payload = {
        "dump_name": "test_dumps",
        "source_db_config": json.dumps({
            "connection_str": "mysql+pymysql://root:123456789@localhost/nddenttest"
        }),
        "admin_db_config": json.dumps({
            "connection_str": "mysql+pymysql://root:123456789@localhost/nddenttest"
        }),
        "run_config": json.dumps({}),
        "pii_config": json.dumps({}),
        "qc_config": json.dumps({})
    }
    # payload = {
    #     "dump_name": "test_dumps",
    #     "source_db_config": {
    #         "connection_str": "mysql+pymysql://root:123456789@localhost/nddenttest"
    #     },
    #     "admin_db_config": {
    #         "connection_str": "mysql+pymysql://root:123456789@localhost/nddenttest"
    #     },
    #     "run_config": {},
    #     "pii_config": {},
    #     "qc_config": {},
    # }
    file_path = "/Users/rohitchouhan/Documents/Code/backend/deidentification/tests/assets/primary_key_mapping.csv"

    with open(file_path, 'rb') as f:
        files = {
            'file': ('primary_key_mapping.csv', f, 'text/csv')
        }
        response = requests.post(url, data=payload, files=files)
    # response = requests.post(url, data=payload, files=files)
    # response = requests.post(url, json=payload, files=files)
    print(response.status_code)
    print(response.json())  # response = self.client.post(url, payload, format='json')

# test_register_new_db()
wait_task()