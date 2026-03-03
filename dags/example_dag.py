"""
Example DAG - replace or add your own DAGs in this folder.
"""
from datetime import datetime

from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.empty import EmptyOperator


def say_hello():
    print("Hello from Airflow!")


with DAG(
    dag_id="example_dag",
    start_date=datetime(2025, 1, 1),
    schedule=None,
    catchup=False,
    tags=["example"],
) as dag:
    start = EmptyOperator(task_id="start")
    hello = PythonOperator(
        task_id="hello",
        python_callable=say_hello,
    )
    end = EmptyOperator(task_id="end")

    start >> hello >> end
