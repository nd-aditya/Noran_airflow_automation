#!/usr/bin/env bash
# Run Airflow with DAGs and config from this project.

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$SCRIPT_DIR"

export AIRFLOW_HOME="$PROJECT_ROOT"
export AIRFLOW__CORE__DAGS_FOLDER="$PROJECT_ROOT/dags"
export AIRFLOW__CORE__PLUGINS_FOLDER="$PROJECT_ROOT/plugins"

cd "$PROJECT_ROOT"

echo "AIRFLOW_HOME=$AIRFLOW_HOME"
echo "DAGS_FOLDER=$AIRFLOW__CORE__DAGS_FOLDER"
echo "Starting Airflow (standalone: webserver + scheduler)..."
echo ""

exec airflow standalone
