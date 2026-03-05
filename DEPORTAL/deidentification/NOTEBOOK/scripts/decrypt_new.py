class ProgressNoteDecryptor:
    def __init__(self, datakey="qdnmbf@##$"):
        self._datakey = datakey
        self.TAG_RE = re.compile(r'<[^>]+>')

    # ---------------- Existing methods remain unchanged ---------------- #
    # get_key, decrypt_pnote, cleanup_bytes, process_text, etc.
    # -------------------------------------------------------------------- #

    def decrypt_columns_and_insert(
        self,
        source_conn,
        source_table,
        target_table,
        date_column,
        encrypted_columns,
        batch_size=500
    ):
        """
        Iterate over all rows from source_table, decrypt encrypted_columns,
        and insert decrypted data into target_table.
        """

        src_cursor = source_conn.cursor(dictionary=True)
        tgt_cursor = source_conn.cursor()

        # Fetch rows
        select_cols = [date_column] + encrypted_columns
        select_sql = f"""
            SELECT {', '.join(select_cols)}
            FROM {source_table}
        """

        src_cursor.execute(select_sql)

        insert_sql = f"""
            INSERT INTO {target_table}
            ({', '.join(encrypted_columns)})
            VALUES ({', '.join(['%s'] * len(encrypted_columns))})
        """

        batch = []
        row_count = 0

        for row in src_cursor:
            dtmod = row[date_column]
            decrypted_values = []

            for col in encrypted_columns:
                encrypted_text = row[col]

                if encrypted_text:
                    try:
                        decrypted = self.process_text(
                            dtmod=str(dtmod),
                            summary=encrypted_text
                        )
                    except Exception:
                        decrypted = None
                else:
                    decrypted = None

                decrypted_values.append(decrypted)

            batch.append(tuple(decrypted_values))
            row_count += 1

            if len(batch) >= batch_size:
                tgt_cursor.executemany(insert_sql, batch)
                source_conn.commit()
                batch.clear()
                print(f"Inserted {row_count} records...")

        # Insert remaining rows
        if batch:
            tgt_cursor.executemany(insert_sql, batch)
            source_conn.commit()

        src_cursor.close()
        tgt_cursor.close()

        print(f"Completed. Total rows processed: {row_count}")

import mysql.connector
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="password",
    database="ecw_db"
)

decryptor = ProgressNoteDecryptor()

decryptor.decrypt_columns_and_insert(
    source_conn=conn,
    source_table="progressnotes",
    target_table="tmp_progressnotes_decrypted",
    date_column="date_modified",
    encrypted_columns=[
        "summary",
        "assessment",
        "plan"
    ]
)