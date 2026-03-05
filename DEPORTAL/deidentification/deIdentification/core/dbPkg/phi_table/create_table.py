from sqlalchemy import create_engine, Column, BigInteger, Integer, String, MetaData, Table, text
from deIdentification.nd_logger import nd_logger
from typing import TypedDict
from core.dbPkg.mapping_loader import PATIENT_MAPPING_TABLE_ND_PATIENTID_COL, PATIENT_MAPPING_TABLE
import pandas as pd
import datetime
import traceback

class OnePHITableConfig(TypedDict):
    primary_column_name: str
    primary_column_type: str
    required_columns: list[dict[str, str]]


class PIITableConfig(TypedDict):
    source_tables: dict[str, OnePHITableConfig]


def _convert_dict_list_to_dict(input_dicts: list[dict]):
    output_dict = {}
    for _dict in input_dicts:
        key, value = next(iter(_dict.items()))
        output_dict[key] = value
    return output_dict


class PIITable:
    def __init__(self, src_db_url: str, master_db_url: str, mapping_db_url: str, pii_tables_config: dict[str, PIITableConfig], client_id: int, dump_id: int):
        self.client_id = client_id
        self.dump_id = dump_id
        self.master_db_url = master_db_url
        self.src_engine = create_engine(src_db_url)
        self.master_engine = create_engine(master_db_url)
        self.mapping_engine = create_engine(mapping_db_url)
        self.pii_tables_config = pii_tables_config

    def __del__(self):
        """Clean up database connections when the object is destroyed."""
        try:
            if hasattr(self, 'src_engine') and self.src_engine:
                self.src_engine.dispose()
            if hasattr(self, 'master_engine') and self.master_engine:
                self.master_engine.dispose()
            if hasattr(self, 'mapping_engine') and self.mapping_engine:
                self.mapping_engine.dispose()
        except Exception as e:
            nd_logger.warning(f"Error during PIITable cleanup: {e}")

    def backup_table(self, table_name: str):
        backup_table_name = f"{table_name}_nd_backup_client{self.client_id}_dump{self.dump_id}"
        with self.master_engine.connect() as conn:
            check_sql = text(
                "SELECT COUNT(*) FROM information_schema.tables "
                "WHERE table_schema = DATABASE() AND table_name = :table_name"
            )
            result = conn.execute(check_sql, {"table_name": table_name}).scalar()
            if result == 0:
                nd_logger.info(f"Table {table_name} does not exist. Skipping backup.")
                return
            drop_sql = text(f"DROP TABLE IF EXISTS {backup_table_name}")
            conn.execute(drop_sql)

            create_sql = text(f"CREATE TABLE {backup_table_name} AS SELECT * FROM {table_name};")
            conn.execute(create_sql)
            nd_logger.info(
                f"Client: {self.client_id}, Dump: {self.dump_id} - "
                f"Backup table recreated: {backup_table_name}"
            )

    
    def get_column_mapping(self, required_columns: list[dict]) -> dict[str, str]:
        return _convert_dict_list_to_dict(required_columns)
    
    def get_all_columns_for_pii_table(self, pii_table: str):
        config = self.pii_tables_config[pii_table]
        columns = []
        for table, table_conf in config['source_tables'].items():
            columns  += [list(col.values())[0]for col in table_conf['required_columns']]
        return list(set(columns))


    def fetch_patient_ndids(self, identifier_type: str, identifiers: list) -> dict:
        from sqlalchemy import text, bindparam

        if not identifiers:
            return {}

        stmt = text(f"""
            SELECT `{identifier_type}` AS orig_id,
                `{PATIENT_MAPPING_TABLE_ND_PATIENTID_COL}` AS ndid
            FROM `{PATIENT_MAPPING_TABLE}`
            WHERE `{identifier_type}` IN :identifiers
        """).bindparams(bindparam("identifiers", expanding=True))

        with self.mapping_engine.connect() as conn:
            rows = conn.execute(stmt, {"identifiers": identifiers}).all()

        return {row.orig_id: row.ndid for row in rows}
    
    def create_table(self, pii_table: str, pii_table_config: dict[str, OnePHITableConfig]):
        """
        Create a SQL table with ND_PATIENTID NOT NULL, all other columns nullable string(500).
        """
        metadata = MetaData()
        columns = [Column(PATIENT_MAPPING_TABLE_ND_PATIENTID_COL, BigInteger, nullable=False)]
        all_other_columns = self.get_all_columns_for_pii_table(pii_table)
        for col in all_other_columns:
            if col != PATIENT_MAPPING_TABLE_ND_PATIENTID_COL:
                columns.append(Column(col, String(500), nullable=True))
        table = Table(pii_table, metadata, *columns, extend_existing=True)
        metadata.create_all(self.master_engine)
        nd_logger.info(f"Client: {self.client_id}, Dump: {self.dump_id} - Created or replaced table `{pii_table}` with columns: {[c.name for c in columns]}")

    def insert_or_update_data(self, pii_table_name: str, source_table: str, source_conf: OnePHITableConfig):
        """
        Load source data as DataFrame, map/transform/clean, load NDID, then upsert into dest DB.
        """
        # -- 1: Prepare column mapping
        db_col_to_export_col = self.get_column_mapping(source_conf['required_columns'])
        # columns_to_select = [source_conf['primary_column_name']] + list(db_col_to_export_col.keys())
        columns_to_select = list(db_col_to_export_col.keys())
        # -- 2: Read source table as DataFrame (batch loads entire table in memory - for very large sources, chunking needed)
        src_df = pd.read_sql_table(source_table, self.src_engine, columns=columns_to_select)
        # -- 3: Clean: Special case for '0000-00-00' as None, etc.
        src_df.replace("0000-00-00", pd.NaT, inplace=True)
        # -- 4: Rename columns for export (except primary key)
        # export_col_mapping = {k: v for k, v in db_col_to_export_col.items()}
        export_col_mapping = db_col_to_export_col.copy()
        # breakpoint()
        src_df = src_df.rename(columns=export_col_mapping)
        # -- 5: Fetch NDIDs for all primary_col values (batch mapping)
        # breakpoint()
        new_primary_name = export_col_mapping[source_conf['primary_column_name']]
        primary_vals = src_df[new_primary_name].tolist()
        id_map = self.fetch_patient_ndids(source_conf['primary_column_type'], primary_vals)
        # -- 6: Map NDIDs; drop rows with missing NDIDs if any.
        src_df[PATIENT_MAPPING_TABLE_ND_PATIENTID_COL] = src_df[new_primary_name].map(id_map)
        # Remove original PK (if you don't want it), keep mapped NDID
        # breakpoint()
        # src_df.drop(columns=[new_primary_name], inplace=True)
        
        src_df = src_df.dropna(subset=[PATIENT_MAPPING_TABLE_ND_PATIENTID_COL])
        # -- 7: Upsert: Delete old rows for same NDID, then append (pandas cannot upsert natively).
        ndids = src_df[PATIENT_MAPPING_TABLE_ND_PATIENTID_COL].unique().tolist()
        # breakpoint()
        
        # Use a more robust transaction handling approach
        # src_df = src_df.head(2)
        with self.master_engine.begin() as conn:
            # placeholders = ",".join(["%s"] * len(ndids))
            # delete_sql = f"DELETE FROM `{pii_table_name}` WHERE `{PATIENT_MAPPING_TABLE_ND_PATIENTID_COL}` IN ({placeholders})"
            try:
                # conn.execute(text(delete_sql), ndids if len(ndids) > 0 else [None])
                self._insert_dataframe_in_batches(src_df, pii_table_name)
                # src_df.to_sql(pii_table_name, self.master_engine, index=False, if_exists="append", method="multi")
                # nd_logger.info(f"Upserted {len(src_df)} rows into `{pii_table_name}`")
            except Exception as e:
                nd_logger.error(f"Client: {self.client_id}, Dump: {self.dump_id} - Upsert failed for `{pii_table_name}` with error: {e}")
                raise e

    def _insert_dataframe_in_batches(self, src_df: pd.DataFrame, pii_table_name: str, batch_size: int = 5000):
        """
        Insert a DataFrame into the target table in batches, ensuring transaction safety.
        """
        total_rows = len(src_df)
        if total_rows == 0:
            nd_logger.info(f"No rows to insert into `{pii_table_name}`")
            return

        try:
            for start in range(0, total_rows, batch_size):
                end = min(start + batch_size, total_rows)
                batch_df = src_df.iloc[start:end]

                with self.master_engine.begin() as conn:
                    batch_df.to_sql(
                        pii_table_name,
                        conn,
                        index=False,
                        if_exists="append",
                        method="multi"
                    )

                nd_logger.info(f"Inserted rows {start}–{end-1} into `{pii_table_name}`")

        except Exception as e:
            nd_logger.error(traceback.format_exc())
            nd_logger.error(
                f"Client: {self.client_id}, Dump: {self.dump_id} - "
                f"Batch insert failed for `{pii_table_name}` with error: {e}"
            )
            raise e

    def generate_or_update_pii_table(self):
        for pii_table_name, config in self.pii_tables_config.items():
            try:
                nd_logger.info(f"Client: {self.client_id}, Dump: {self.dump_id} - Starting PII table generation for {pii_table_name}")
                self.backup_table(pii_table_name)
                self.create_table(pii_table_name, config)
                for source_table, source_conf in config["source_tables"].items():
                    try:
                        nd_logger.info(f"Client: {self.client_id}, Dump: {self.dump_id} - Processing source table {source_table} for PII table {pii_table_name}")
                        self.insert_or_update_data(pii_table_name, source_table, source_conf)
                    except Exception as e:
                        nd_logger.error(f"Client: {self.client_id}, Dump: {self.dump_id} - Failed to process source table {source_table} for PII table {pii_table_name}: {e}")
                        raise e
                nd_logger.info(f"Client: {self.client_id}, Dump: {self.dump_id} - Successfully completed PII table generation for {pii_table_name}")
            except Exception as e:
                nd_logger.info(f"{traceback.format_exc()}")
                nd_logger.error(f"Client: {self.client_id}, Dump: {self.dump_id} - Failed to generate PII table {pii_table_name}: {e}")
                raise e
