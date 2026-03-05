"""
Service to trigger bulk deidentification via the DEPORTAL backend API.

Assumes dump is already registered and primary key config (e.g. use previous mapping)
is done from the UI. This only calls POST deid/start to enqueue tasks for the given tables.
Workers (start_worker) must be running separately to process the tasks.
"""

import json
import logging
import urllib.error
import urllib.request

LOG = logging.getLogger(__name__)


def start_bulk_deidentification(
    client_id: int,
    dump_id: int,
    table_names: list[str],
    base_url: str,
    auth_headers: dict | None = None,
) -> dict:
    """
    Call POST .../deid/start/<client_id>/<dump_id>/ with tables_name to create
    deidentification tasks for the given tables. Workers pick them up when running.

    - client_id, dump_id: from your existing dump (created from UI).
    - table_names: list of table names to deidentify.
    - base_url: Backend root (e.g. http://10.1.64.35:13800), no trailing slash. No /api prefix if Django mounts nd_api at root.
    - auth_headers: optional dict, e.g. {"Authorization": "Bearer <token>"}.

    Returns the API response as a dict. Raises on HTTP or connection error.
    """
    url = f"{base_url.rstrip('/')}/deid/start/{client_id}/{dump_id}/"
    body = json.dumps({"tables_name": table_names}).encode("utf-8")
    headers = {"Content-Type": "application/json"}
    if auth_headers:
        headers.update(auth_headers)

    req = urllib.request.Request(url, data=body, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            data = resp.read().decode("utf-8")
            return json.loads(data) if data else {}
    except urllib.error.HTTPError as e:
        body = e.read().decode("utf-8") if e.fp else ""
        LOG.error("Deidentification API error: %s %s", e.code, body)
        raise RuntimeError(f"Deidentification API error {e.code}: {body}") from e
    except urllib.error.URLError as e:
        LOG.error("Deidentification API URL error: %s", e.reason)
        raise RuntimeError(
            f"Deidentification API request failed: {e.reason}. "
            "Ensure the DEPORTAL Django server is running and base_url is correct (e.g. http://127.0.0.1:8000/api)."
        ) from e
