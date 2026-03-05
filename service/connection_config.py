"""
Connection details for MSSQL and MySQL (used to build engines in the sync DAG).

For production, consider moving secrets to environment variables or a file
excluded from version control (e.g. .env or config_local.py in .gitignore).
"""

# MSSQL (CentricityPS) – same as original script
MSSQL_CONN_PARAMS = {
    "driver": "ODBC Driver 17 for SQL Server",
    "server": "172.22.252.18",
    "database": "centricityps",
    "uid": "neuroai",
    "pwd": "MhDR@*hR39Y5$tme!",
    "encrypt": "no",
    "trustservercertificate": "yes",
    "port": 1433,
}

# MySQL – same as original script
MYSQL_CONN_PARAMS = {
    "host": "localhost",
    "port": 3306,
    "user": "ndadmin",
    "password": "ndADMIN@2025",
    "database": "",  # sync uses its own schema
}

# Sync / incremental schema config (used by mssql_mysql_sync and DAG)
TRACKING_SCHEMA = "master"
TRACKING_TABLE = "table_sync_status"
INCREMENTAL_SCHEMA = "dump_daily"
# Schema used to get row count for nd_auto_increment_id starting value (post-sync step)
ORIGINAL_SCHEMA = "centricityps_original_16oct"
