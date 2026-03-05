import os
import json
import pandas as pd
from sqlalchemy import create_engine, text
from sqlalchemy.engine import Engine


"""
SET GLOBAL max_connections = 500;
[mysqld]
max_allowed_packet = 512M
wait_timeout = 28800
interactive_timeout = 28800
net_write_timeout = 600

"""
# === CONFIGURATION ===
#MSSQL_CONN_STRING = "mssql+pymssql://sa:ndADMIN2025@localhost:1433/centricityps"
MSSQL_CONN_STRING = {
    "driver": "ODBC Driver 17 for SQL Server",
    "server": "172.22.252.18",
    "database": "centricityps",
    "uid": "neuroai",
    "pwd": "MhDR@*hR39Y5$tme!",
    "encrypt": "no",
    "trustservercertificate": "yes",
}
MYSQL_CONN_STRING = "mysql+pymysql://ndadmin:ndADMIN%402025@localhost:3306/CentricityPS_incremental"

CHUNK_SIZE = 1000
PROGRESS_FILE = "progress.json"

# === SQLAlchemy Engines ===
mssql_engine = create_engine(MSSQL_CONN_STRING)
mysql_engine = create_engine(MYSQL_CONN_STRING)

# === Map SQL Server types to MySQL types ===
def map_sqlserver_to_mysql(sql_type: str, max_len: int, precision: int, scale: int,
                           observed_max_length: int = None) -> str:
    sql_type = sql_type.lower()

    if sql_type in ["int", "smallint", "tinyint"]:
        return "INT"
    elif sql_type in ["bigint"]:
        return "BIGINT"

    elif sql_type in ["numeric", "decimal", "money", "smallmoney"]:
        return f"DECIMAL({precision},{scale})"

    elif sql_type in ["float", "real"]:
        return "FLOAT"

    elif sql_type == "bit":
        return "TINYINT(1)"

    elif sql_type in ["datetime", "smalldatetime", "date", "datetime2"]:
        return "DATETIME"
    
    elif sql_type in ["time"]:
        return "TIME"

    elif sql_type in ["text", "ntext"]:
        return "LONGTEXT"

    elif sql_type in ["char", "nchar", "varchar", "nvarchar"]:
        if observed_max_length and observed_max_length > 65535:
            return "LONGTEXT"
        if max_len == -1 or max_len > 65535:
            return "LONGTEXT"
        elif max_len > 255:
            return "TEXT"
        else:
            return f"VARCHAR({max_len})"

    elif sql_type in ["binary", "varbinary", "image", "timestamp", "rowversion"]:
        if max_len == -1 or (observed_max_length and observed_max_length > 65535):
            return "LONGBLOB"
        elif max_len <= 255:
            return f"VARBINARY({max_len})"
        elif max_len <= 65535:
            return "BLOB"
        elif max_len <= 16777215:
            return "MEDIUMBLOB"
        else:
            return "LONGBLOB"

    # ✅ GUID
    elif sql_type in ["uniqueidentifier"]:
        return "CHAR(36)"

    else:
        return "LONGTEXT"

# === Load schema from MSSQL ===
def load_table_schema(engine: Engine, table_name: str):
    query = f"""
    SELECT c.name AS column_name,
           ty.name AS data_type,
           c.max_length,
           c.precision,
           c.scale
    FROM sys.columns c
    JOIN sys.tables t ON c.object_id = t.object_id
    JOIN sys.types ty ON c.user_type_id = ty.user_type_id
    JOIN sys.schemas s ON t.schema_id = s.schema_id
    WHERE t.name = '{table_name.split('.')[-1]}' AND s.name = '{table_name.split('.')[0]}'
    ORDER BY c.column_id;
    """
    return pd.read_sql(query, engine)

# === Create table dynamically ===
def create_mysql_table_from_chunk(engine: Engine, table_name: str, schema_df: pd.DataFrame, chunk: pd.DataFrame):
    col_defs = []
    for _, row in schema_df.iterrows():
        col_name = row["column_name"]
        max_len = row["max_length"]
        precision = row["precision"]
        scale = row["scale"]
        sql_type = row["data_type"].lower()
    

        # Determine observed_max_length only for text-like columns
        if not chunk.empty and col_name in chunk.columns and sql_type not in ["binary", "varbinary", "image", "timestamp", "rowversion"]:
            observed_max_length = chunk[col_name].astype(str).map(len).max()
        else:
            observed_max_length = None
        
        # if col_name == "nd_auto_increment_id":
        #     breakpoint()

        data_type = map_sqlserver_to_mysql(
            sql_type,
            max_len,
            precision,
            scale,
            observed_max_length
        )

        col_defs.append(f"`{col_name}` {data_type}")

    create_sql = f"CREATE TABLE `{table_name}` ({', '.join(col_defs)}) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;"
    with engine.begin() as conn:
        conn.execute(text(create_sql))
    print(f"✅ Table {table_name} created successfully in MySQL.")


from sqlalchemy.exc import SQLAlchemyError
# === Insert chunk ===
def insert_chunk(engine: Engine, table_name: str, chunk: pd.DataFrame):
    # ✅ Clean binary/object columns
    for col in chunk.columns:
        if chunk[col].dtype == "object":
            if chunk[col].apply(lambda x: isinstance(x, (bytes, bytearray))).any():
                chunk[col] = chunk[col].apply(
                    lambda x: x if isinstance(x, (bytes, bytearray)) else None
                )

    # ✅ Use explicit connection + transaction handling
    with engine.connect() as connection:
        trans = connection.begin()
        try:
            # connection.execute(text("SET SESSION max_allowed_packet=536870912"))  # 512 MB
            # connection.execute(text("SET SESSION net_write_timeout=600"))
            # connection.execute(text("SET SESSION wait_timeout=28800"))
            chunk.to_sql(
                table_name,
                connection,
                if_exists="append",
                index=False,
                method="multi"
            )
            trans.commit()
            print(f"✅ Inserted {len(chunk)} rows into {table_name}.")
        except SQLAlchemyError as e:
            trans.rollback()
            print(f"❌ Error inserting chunk into {table_name}: {e}")
            raise e
        finally:
            connection.close()
# === Progress helpers ===
def load_progress():
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, "r") as f:
            return json.load(f)
    return {}

def save_progress(progress):
    with open(PROGRESS_FILE, "w") as f:
        json.dump(progress, f, indent=4)

# === Main migration ===
def move_table(source_engine: Engine, target_engine: Engine,
               source_table: str, target_table: str):
    progress = load_progress()
    last_processed = progress.get(source_table, {}).get("last_processed", -1)
    table_created = progress.get(source_table, {}).get("table_created", False)
    table_completed = progress.get(source_table, {}).get("table_completed", False)

    if table_completed:
        print(f"✅ Table {source_table} already completed. Skipping.")
        return

    try:
        schema_df = load_table_schema(source_engine, source_table)
        if schema_df.empty:
            print(f"❌ No schema found for {source_table}")
            return
        dbo, table_name = source_table.split(".")
        chunk_iter = pd.read_sql(
            f"SELECT * FROM {dbo}.[{table_name}] ORDER BY (SELECT NULL)",
            source_engine, chunksize=CHUNK_SIZE
        )

        total_rows, chunk_index = 0, 0

        for chunk in chunk_iter:
            chunk_index += 1
            start_index = (chunk_index - 1) * CHUNK_SIZE
            if start_index <= last_processed:
                print(f"➡ Skipping chunk {chunk_index} (already processed)")
                continue

            if not table_created:
                with target_engine.begin() as conn:
                    conn.execute(text(f"DROP TABLE IF EXISTS `{target_table}`"))
                    print(f"✅ Dropped existing table {target_table} if it existed.")
                create_mysql_table_from_chunk(target_engine, target_table, schema_df, chunk)
                table_created = True
                progress[source_table] = {
                    "last_processed": last_processed,
                    "table_created": True,
                    "table_completed": False
                }
                save_progress(progress)

            insert_chunk(target_engine, target_table, chunk)
            last_processed = start_index + len(chunk) - 1
            total_rows += len(chunk)

            progress[source_table] = {
                "last_processed": last_processed,
                "table_created": table_created,
                "table_completed": False
            }
            save_progress(progress)

        if not table_created:  # empty table
            with target_engine.begin() as conn:
                conn.execute(text(f"DROP TABLE IF EXISTS  `{target_table}`"))
            create_mysql_table_from_chunk(target_engine, target_table,
                                          schema_df, schema_df.iloc[0:0])
            progress[source_table] = {
                "last_processed": 0,
                "table_created": True,
                "table_completed": True
            }
            save_progress(progress)
            print(f"✅ Created empty table {target_table} (0 rows).")

        progress[source_table] = {
            "last_processed": last_processed,
            "table_created": table_created,
            "table_completed": True
        }
        save_progress(progress)
        print(f"✅ Finished moving {total_rows} rows from {source_table} to {target_table}.")

    except Exception as e:
        import traceback
        print(f"❌ Failed to move table {source_table}: {e}")
        traceback.print_exc()
        print("➡ Progress saved. You can rerun the script to resume.")

# === CSV mapping loader ===
def load_mapping_from_csv(csv_path: str) -> dict:
    df = pd.read_csv(csv_path)
    return {f"{row['SchemaName']}.{row['TableName']}": row['TableName'] for _, row in df.iterrows()}


# === Run ===
if __name__ == "__main__":
    # mapping = {
    #     "dbo.DOCDATA2_with_patient_id" : "DOCDATA2_with_patient_id",
    # }
    # mapping = load_mapping_from_csv("/Users/neurocenterne/Documents/DEPORTAL/move_tables/all_tables.csv")
    # mapping = load_mapping_from_csv("/Users/ndainoran/Documents/DEPORTAL/move_table/all_tables.csv")
    mapping = load_mapping_from_csv("/Users/ndainoran/Documents/DEPORTAL/move_table/dump.csv")
    # mapping = {"dbo.ApptTypeAssignments": "ApptTypeAssignments"}
    # breakpoint()
    import time
    for key, value in mapping.items():
        starttime = time.time()
        # move_table(mssql_engine, mysql_engine, key, value)
        move_table(mssql_engine, mysql_engine, "dbo.PatientProfile", "PatientProfile")
        endtime = time.time()
        print(f"total time taken in seconds: {key}: {endtime-starttime}")
        break
