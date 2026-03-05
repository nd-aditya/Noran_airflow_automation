import os
import django
import sys
import json
# Set up Django environment
sys.path.append(
    "/Users/ndaineurocenterpa/Desktop/De-dentification_inc/deidentification/deIdentification"
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
from nd_api.views.db_views import create_tasks_after_new_dump_registered
from core.process.main import start_de_identification_for_table
from nd_api.views.de_identification_task import create_deidentification_task
from nd_api.views.db_views import run_stats_generation_task
from django.urls import reverse


def clean_db():
    RoleModel.objects.all().delete()
    User.objects.all().delete()
    DbDetailsModel.objects.all().delete()
    Chain.objects.all().delete()


def test_register_new_db():
    
    
    # Use full URL instead of reverse() directly
    base_url = (
        "http://127.0.0.1:8000"  # Adjust if your server runs on another host/port
    )
    endpoint = reverse("register_new_db", kwargs={"client_id": 1})
    url = f"{base_url}{endpoint}"

    payload = {
        "dump_name": "test_dumps",
        "source_db_config": json.dumps({
            "connection_str": "mysql+mysqlconnector://ndadmin:ndADMIN%402025@localhost:3306/dump_07102025"
        
        }),
        "run_config": json.dumps({}),
        "pii_config": json.dumps({}),
        "qc_config": json.dumps({
            "PATIENT_ID": {"prefix_value": "1001000", "length_of_value": 15},
            "ENCOUNTER_ID": {"prefix_value": "1001000", "length_of_value": 19},

        })
    }
    
    file_path = "/Users/ndaineurocenterpa/Desktop/De-dentification_inc/deidentification/tests/dummy_data_generator/primary_key_mapping.csv"

    with open(file_path, 'rb') as f:
        files = {
            'file': ('primary_key_mapping.csv', f, 'text/csv')
        }
        response = requests.post(url, data=payload, files=files)
    # response = requests.post(url, data=payload, files=files)
    # response = requests.post(url, json=payload, files=files)
    print(response.status_code)
    print(response.json())  # response = self.client.post(url, payload, format='json')


test_register_new_db()

