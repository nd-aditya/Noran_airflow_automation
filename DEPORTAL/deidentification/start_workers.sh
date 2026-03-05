#!/bin/bash

# Number of workers to launch (defaults to 1)
n=${1:-1}

# Paths
PROJECT_DIR="/Users/$USER/Documents/DEPORTAL/deidentification/deIdentification"
VENV_PATH="deid"

# Loop to launch each worker in a new Terminal window
for ((i = 1; i <= n; i++)); do
  osascript <<EOF
tell application "Terminal"
    do script "conda activate '$VENV_PATH' && cd '$PROJECT_DIR' && python manage.py start_worker"
end tell
EOF
  sleep 1  # Optional: delay between opening terminals
done

echo "$n workers started in separate Terminal windows with deid activated."
