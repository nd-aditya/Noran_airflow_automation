// app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/QCTablesCard.tsx
"use client";

import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { usePost } from "@/app/api/useApiHooks";
import { useParams } from "next/navigation";
import clsx from "clsx";

export interface TableInfoRaw {
  table_name: string;
  table_id: number;
  deid_status: number;
  qc_status: number;
  gcp_status: number;
  embd_status: number;
}

interface QCTablesCardProps {
  tableData: TableInfoRaw[];
}

import { API_URL } from "@/app/api/Config";

const statusLabels = ["Not Started", "In Progress", "Completed", "Failed"];
const statusColors = ["gray", "yellow", "green", "red"];

export default function QCTablesCard({ tableData }: QCTablesCardProps) {
  const { clientId, dumpId } = useParams();
  const [selected, setSelected] = useState<number[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [confirmOpen, setConfirmOpen] = useState(false);

  // filter + paginate
  const filtered = useMemo(
    () =>
      tableData.filter((t) =>
        t.table_name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, tableData]
  );
  const perPage = 5;
  const totalPages = Math.ceil(filtered.length / perPage);
  const pageItems = filtered.slice((page - 1) * perPage, page * perPage);

  // QC mutation
  const { mutate: startQC, isPending } = usePost(
    `${API_URL}qc/start/${clientId}/${dumpId}/`
  );

  const toggle = (id: number) =>
    setSelected((cur) =>
      cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]
    );

  const confirmAndStart = () => {
    startQC(
      { tables_ids: selected },
      {
        onSuccess() {
          setConfirmOpen(false);
          setSelected([]);
        },
      }
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-6 py-4 border-b">
        <div className="flex items-center gap-2">
          <span className="font-medium text-gray-700">
            {selected.length} of {filtered.length} selected
          </span>
          <button
            onClick={() => setSelected([])}
            disabled={!selected.length}
            className="text-sm text-blue-600 hover:underline disabled:text-gray-400"
          >
            Clear
          </button>
        </div>
        <div className="relative w-full sm:w-64">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search tables..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 w-12">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={
                    pageItems.length > 0 &&
                    selected.length === pageItems.length
                  }
                  onChange={() =>
                    setSelected(
                      selected.length === pageItems.length
                        ? []
                        : pageItems.map((t) => t.table_id)
                    )
                  }
                />
              </th>
              <th className="p-3">Table Name</th>
              <th className="p-3">DeID Status</th>
              <th className="p-3">QC Status</th>
              <th className="p-3">GCP Status</th>
            </tr>
          </thead>
          <tbody>
            {pageItems.map((t, i) => (
              <tr
                key={t.table_id}
                className={clsx(
                  "transition",
                  i % 2 === 0 ? "bg-white" : "bg-gray-50",
                  "hover:bg-blue-50"
                )}
              >
                <td className="p-3">
                  <input
                    type="checkbox"
                    className="h-4 w-4"
                    checked={selected.includes(t.table_id)}
                    onChange={() => toggle(t.table_id)}
                  />
                </td>
                <td className="p-3 font-medium">{t.table_name}</td>
                <td className="p-3">
                  <span
                    className={clsx(
                      "px-2 py-1 rounded-full text-xs font-semibold",
                      `bg-${statusColors[t.deid_status]}-100`,
                      `text-${statusColors[t.deid_status]}-800`
                    )}
                  >
                    {statusLabels[t.deid_status]}
                  </span>
                </td>
                <td className="p-3">
                  <span
                    className={clsx(
                      "px-2 py-1 rounded-full text-xs font-semibold",
                      `bg-${statusColors[t.qc_status]}-100`,
                      `text-${statusColors[t.qc_status]}-800`
                    )}
                  >
                    {statusLabels[t.qc_status]}
                  </span>
                </td>
                <td className="p-3">
                  <span
                    className={clsx(
                      "px-2 py-1 rounded-full text-xs font-semibold",
                      t.gcp_status === 1
                        ? "bg-gray-100 text-gray-600"
                        : t.gcp_status === 0
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    )}
                  >
                    {t.gcp_status === 1
                      ? "Not Moved"
                      : t.gcp_status === 0
                      ? "Moved"
                      : "Failed"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 bg-white px-6 py-4 border-t flex justify-end">
        <button
          onClick={() => setConfirmOpen(true)}
          disabled={selected.length === 0 || isPending}
          className={clsx(
            "px-5 py-2 rounded-lg font-medium shadow",
            selected.length
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          )}
        >
          {isPending ? "Starting QC…" : "Start QC"}
        </button>
      </div>

      {/* Confirmation Dialog */}
      <Dialog
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="fixed inset-0 bg-black/30" />
        <DialogPanel className="bg-white p-6 rounded-lg shadow-lg max-w-sm z-10">
          <DialogTitle className="text-xl font-semibold">
            Confirm QC
          </DialogTitle>
          <p className="mt-2 text-gray-700">
            Are you sure you want to run QC on{" "}
            <span className="font-medium">{selected.length}</span>{" "}
            table{selected.length > 1 && "s"}?
          </p>
          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={() => setConfirmOpen(false)}
              className="px-4 py-2 rounded-md border hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              onClick={confirmAndStart}
              disabled={isPending}
              className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
            >
              {isPending ? "Starting…" : "Yes, Start"}
            </button>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  );
}



            // <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-b gap-3">
            //     <div className="flex gap-4">
            //     <div className="flex items-center gap-2">
            //         <span className="font-medium">
            //             {selected.length} selected
            //         </span>
            //         <button
            //             onClick={() => setSelected([])}
            //             disabled={!selected.length}
            //             className="text-sm text-blue-600 hover:underline disabled:text-gray-400"
            //         >
            //             Clear
            //         </button>
            //     </div>
            //     <div className="relative w-full sm:w-64">
            //         <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            //         <input
            //             type="text"
            //             placeholder="Search tables…"
            //             className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            //             value={search}
            //             onChange={e => { setSearch(e.target.value); setPage(1); }}
            //         />
            //     </div>
            //     </div>
            //     <div className="space-x-2">
            //         <button
            //             onClick={startQC}
            //             disabled={qcPending || selected.length === 0 || hasDeidFailed}
            //             className={clsx(
            //                 "px-4 py-2 rounded-md text-white",
            //                 qcPending
            //                     ? "bg-gray-400 cursor-not-allowed"
            //                     : "bg-blue-600 hover:bg-blue-700"
            //             )}
            //         >
            //             {qcPending ? "Starting QC…" : "Start QC"}
            //         </button>
            //         <button
            //             onClick={startGCP}
            //             disabled={gcpPending || selected.length === 0}
            //             className={clsx(
            //                 "px-4 py-2 rounded-md text-white",
            //                 gcpPending
            //                     ? "bg-gray-400 cursor-not-allowed"
            //                     : "bg-indigo-600 hover:bg-indigo-700"
            //             )}
            //         >
            //             {gcpPending ? "Moving to GCP…" : "GCP Move"}
            //         </button>
            //         <button
            //             onClick={startEmbedding}
            //             disabled={embdPending || selected.length === 0}
            //             className={clsx(
            //                 "px-4 py-2 rounded-md text-white",
            //                 embdPending
            //                     ? "bg-gray-400 cursor-not-allowed"
            //                     : "bg-purple-600 hover:bg-purple-700"
            //             )}
            //         >
            //             {embdPending ? "Starting Embedding…" : "Start Embedding"}
            //         </button>
            //     </div>
            // </div>