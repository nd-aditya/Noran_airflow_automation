import pandas as pd
import json
import csv
import logging
import time
import os
from sqlalchemy import create_engine, text, inspect
from sqlalchemy.dialects.mysql import LONGTEXT

# ==========================================
# 1. CONFIGURATION & LOGGING
# ==========================================
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    handlers=[logging.FileHandler("migration.log"), logging.StreamHandler()]
)

SOURCE_DB = "mysql+pymysql://ndadmin:ndADMIN%402025@localhost:3306/deidentified"
TARGET_DB = "mysql+pymysql://ndadmin:ndADMIN%402025@localhost:3306/CentricityPS_deidentified_20260114"

source_engine = create_engine(SOURCE_DB)
target_engine = create_engine(TARGET_DB)

FAILED_CSV = "failed_tables.csv"
PROGRESS_JSON = "migration_progress.json"

# ==========================================
# 2. UTILITY FUNCTIONS
# ==========================================
def update_progress(table_name, status, rows=0):
    progress = {}
    if os.path.exists(PROGRESS_JSON):
        with open(PROGRESS_JSON, 'r') as f:
            progress = json.load(f)
    
    progress[table_name] = {
        "status": status,
        "rows_migrated": rows,
        "last_updated": time.strftime("%Y-%m-%d %H:%M:%S")
    }
    
    with open(PROGRESS_JSON, 'w') as f:
        json.dump(progress, f, indent=4)

def log_failure(table_name, error_msg):
    file_exists = os.path.isfile(FAILED_CSV)
    with open(FAILED_CSV, 'a', newline='') as f:
        writer = csv.writer(f)
        if not file_exists:
            writer.writerow(["Timestamp", "Table Name", "Error Message"])
        writer.writerow([time.strftime("%Y-%m-%d %H:%M:%S"), table_name, error_msg])

# ==========================================
# 3. MIGRATION LOGIC
# ==========================================
def migrate_with_tracking():
    source_inspector = inspect(source_engine)
    target_inspector = inspect(target_engine)
    
    tables = source_inspector.get_table_names()
    existing_target_tables = target_inspector.get_table_names()
    
    total_tables = len(tables)
    logging.info(f"Starting tracking migration for {total_tables} tables.")

    for idx, table_name in enumerate(tables, 1):
        # SKIP LOGIC
        if table_name in existing_target_tables:
            logging.info(f"[{idx}/{total_tables}] Skipping: {table_name}")
            update_progress(table_name, "Skipped/Already Exists")
            continue

        try:
            logging.info(f"[{idx}/{total_tables}] Streaming: {table_name}...")
            rows_migrated = 0
            
            with source_engine.connect().execution_options(stream_results=True) as conn:
                query = text(f"SELECT * FROM `{table_name}`")
                # Using 50k chunksize for your 280M row table
                chunk_iter = pd.read_sql(query, conn, chunksize=50000)

                first_chunk = True
                for chunk in chunk_iter:
                    chunk['nd_active_flag'] = 'N'
                    mode = 'replace' if first_chunk else 'append'
                    
                    chunk.to_sql(
                        name=table_name, 
                        con=target_engine, 
                        if_exists=mode, 
                        index=False,
                        method='multi' 
                    )
                    
                    rows_migrated += len(chunk)
                    if rows_migrated % 500000 == 0:
                        logging.info(f"   -> {table_name}: {rows_migrated:,} rows...")
                    
                    first_chunk = False
            
            logging.info(f"✅ Success: {table_name}")
            update_progress(table_name, "Completed", rows_migrated)

        except Exception as e:
            error_str = str(e).replace('\n', ' ')
            logging.error(f"❌ Failed: {table_name} | Error: {error_str[:100]}")
            log_failure(table_name, error_str)
            update_progress(table_name, "Failed")
            continue

if __name__ == "__main__":
    migrate_with_tracking()