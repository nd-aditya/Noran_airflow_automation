// File: app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx
"use client";

import React, { useState, useMemo } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useParams } from "next/navigation";
import { FaSearch, FaRedo, FaFilter, FaTimes } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { BiErrorCircle } from "react-icons/bi";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  RowSelectionState,
  useReactTable,
} from "@tanstack/react-table";
import { usePost } from "@/app/api/useApiHooks";
import clsx from "clsx";

// ─────────────────────────────────────────────────────────────────────────────
// Status codes
// ─────────────────────────────────────────────────────────────────────────────
export class Status {
  static NOT_STARTED = 0;
  static IN_PROGRESS = 1;
  static COMPLETED = 2;
  static FAILED = -1;
}

// ─────────────────────────────────────────────────────────────────────────────
// Row shape - Using the interface from PHITables.tsx
// ─────────────────────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────────────────────
// Labels & colors for statuses
// ─────────────────────────────────────────────────────────────────────────────
const STATUS_LABEL: Record<number, string> = {
  [Status.NOT_STARTED]: "Not Started",
  [Status.IN_PROGRESS]: "In Progress",
  [Status.COMPLETED]:  "Completed",
  [Status.FAILED]:     "Failed",
};
const STATUS_COLOR: Record<number, string> = {
  [Status.NOT_STARTED]: "gray",
  [Status.IN_PROGRESS]: "yellow",
  [Status.COMPLETED]:   "green",
  [Status.FAILED]:      "red",
};

// ─────────────────────────────────────────────────────────────────────────────
// Filter types
// ─────────────────────────────────────────────────────────────────────────────
interface StatusFilter {
  step: "deid" | "qc" | "gcp" | "embd";
  status: number;
}

interface FilterState {
  statusFilters: StatusFilter[];
  searchText: string;
  showOnlyFailed: boolean;
  showOnlyCompleted: boolean;
}

import { API_URL } from "@/app/api/Config";
import { TableInfoRaw } from "../PHITables";
import BulkTableOperationsModal from "./BulkTableOperationsModal";

interface Props {
  tablesData: TableInfoRaw[];
}

export default function TablesProgressCard({ tablesData }: Props) {
  const { clientId, dumpId } = useParams();
  const [search, setSearch] = useState("");
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [showFilters, setShowFilters] = useState(false);
  const [errorModal, setErrorModal] = useState<{
    step: "DeID" | "QC" | "GCP" | "Embedding";
    table: string;
    message: string;
    status: number;
  } | null>(null);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);

  // ───────────────── Filter State ─────────────────────
  const [filters, setFilters] = useState<FilterState>({
    statusFilters: [],
    searchText: "",
    showOnlyFailed: false,
    showOnlyCompleted: false,
  });

  // ───────────────── Bulk Actions ─────────────────────
  const { mutate: doDeID, isPending: deidPending } = usePost(`${API_URL}deid/start/${clientId}/${dumpId}/`);
  const { mutate: doQC,  isPending: qcPending  } = usePost(`${API_URL}qc/start/${clientId}/${dumpId}/`);
  const { mutate: doGCP, isPending: gcpPending } = usePost(`${API_URL}gcp/move/${clientId}/${dumpId}/`);
  const { mutate: doEmbd, isPending: embdPending }= usePost(`${API_URL}embd/start/${clientId}/${dumpId}/`);

  // ───────────────── Filter Functions ─────────────────
  const addStatusFilter = (step: "deid" | "qc" | "gcp" | "embd", status: number) => {
    setFilters(prev => ({
      ...prev,
      statusFilters: [...prev.statusFilters, { step, status }]
    }));
  };

  const removeStatusFilter = (index: number) => {
    setFilters(prev => ({
      ...prev,
      statusFilters: prev.statusFilters.filter((_, i) => i !== index)
    }));
  };

  const clearAllFilters = () => {
    setFilters({
      statusFilters: [],
      searchText: "",
      showOnlyFailed: false,
      showOnlyCompleted: false,
    });
    setSearch("");
  };

  // ───────────────── Filtered Data ───────────────────
  const filteredData = useMemo(() => {
    let filtered = [...tablesData];

    // Apply status filters
    filters.statusFilters.forEach(filter => {
      filtered = filtered.filter(table => table[filter.step].status === filter.status);
    });

    // Apply search filter
    if (search.trim()) {
      filtered = filtered.filter(table => 
        table.table_name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Apply special filters
    if (filters.showOnlyFailed) {
      filtered = filtered.filter(table => 
        [table.deid.status, table.qc.status, table.gcp.status, table.embd.status]
          .some(status => status === Status.FAILED)
      );
    }

    if (filters.showOnlyCompleted) {
      filtered = filtered.filter(table => 
        [table.deid.status, table.qc.status, table.gcp.status, table.embd.status]
          .every(status => status === Status.COMPLETED)
      );
    }

    return filtered;
  }, [filters, search, tablesData]);

  // ───────────────── Table Columns ────────────────────
  const columns = useMemo<ColumnDef<TableInfoRaw, any>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <input
            type="checkbox"
            checked={table.getIsAllPageRowsSelected()}
            onChange={table.getToggleAllPageRowsSelectedHandler()}
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            checked={row.getIsSelected()}
            onChange={row.getToggleSelectedHandler()}
          />
        ),
      },
      {
        accessorKey: "table_name",
        header: "Table",
      },
      // For each step (deid, qc, gcp, embd) render status + icons
      ...(["deid", "qc", "gcp", "embd"] as const).map((step) => ({
        accessorFn: (row: TableInfoRaw) => row[step].status as number,
        id: step,
        header: step.toUpperCase(),
        cell: ({ getValue, row }: { getValue: () => number; row: any }) => {
          const code  = getValue();
          const color = STATUS_COLOR[code]  || "gray";
          const label = STATUS_LABEL[code]  || "Unknown";
          const id    = row.original.table_id;

          // Restart QC icon
          const onRestartQC = () => doQC({ tables_name: [row.original.table_name] });

          return (
            <div className="flex items-center gap-2">
              {/* QC-specific "restart" button */}
              {step === "qc" && code === Status.FAILED && (
                <button onClick={onRestartQC} title="Restart QC">
                  <FaRedo className="text-red-600 hover:text-red-800" />
                </button>
              )}

              {/* any FAILED → show exclamation + open modal */}
              {code === Status.FAILED && (
                <HiOutlineExclamationCircle
                  className="text-red-600 cursor-pointer hover:text-red-800"
                  onClick={() => {
                    const remarks = row.original[step].remarks;
                    setErrorModal({
                      step:
                        step === "deid"
                          ? "DeID"
                          : step === "embd"
                          ? "Embedding"
                          : (step.toUpperCase() as any),
                      table: row.original.table_name,
                      message: remarks ? JSON.stringify(remarks, null, 2) : "No additional details available",
                      status: code,
                    });
                  }}
                />
              )}

              {/* colored pill */}
              <span
                className={clsx(
                  "px-2 py-1 rounded-full text-xs font-semibold",
                  `bg-${color}-100`,
                  `text-${color}-700`
                )}
              >
                {label}
              </span>
            </div>
          );
        },
      })),
    ],
    [doQC]
  );

  // ───────────────── React-Table Setup ─────────────────
  const table = useReactTable({
    data: filteredData,
    columns,
    state: {
      globalFilter: search,
      rowSelection,
      pagination: { pageIndex: 0, pageSize: 10 },
    },
    onGlobalFilterChange: setSearch,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const selectedRows = table.getSelectedRowModel().rows;
  const selectedCount= selectedRows.length;
  const hasDeidFailed= tablesData.some((t) => t.deid.status === Status.FAILED);

  // ──────────────── Bulk-action guards ───────────────
  const canQC  =
    selectedCount > 0 &&
    !qcPending &&
    selectedRows.every((r) => r.original.deid.status === Status.COMPLETED);

  const canGCP =
    selectedCount > 0 &&
    !gcpPending &&
    selectedRows.every((r) => r.original.qc.status === Status.COMPLETED);

  const canEmbd =
    selectedCount > 0 &&
    !embdPending &&
    selectedRows.every((r) => r.original.qc.status === Status.COMPLETED);

  // ───────────────── Filter Presets ───────────────────
  const filterPresets = [
    { label: "QC Failed", step: "qc" as const, status: Status.FAILED },
    { label: "QC Passed", step: "qc" as const, status: Status.COMPLETED },
    { label: "DeID Failed", step: "deid" as const, status: Status.FAILED },
    { label: "GCP Pending", step: "gcp" as const, status: Status.NOT_STARTED },
    { label: "Embedding Failed", step: "embd" as const, status: Status.FAILED },
  ];

  // ─────────────────────────────────────────────────────
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      {/* De-ID failure banner */}
      {hasDeidFailed && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-800 px-6 py-4">
          <div className="flex items-center">
            <BiErrorCircle className="text-red-500 mr-2 text-xl" />
            <div>
              <p className="font-semibold">De-Identification Errors Detected</p>
              <p className="text-sm">Some tables failed de-identification. Fix them before proceeding with QC.</p>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Toolbar */}
      <div className="flex flex-col gap-4 px-6 py-4 border-b">
        {/* Top Row: Selection + Search + Filters Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex gap-4 items-center">
            <span className="font-medium">{selectedCount} selected</span>
            <button
              onClick={() => {
                setRowSelection({});
                setErrorModal(null);
              }}
              disabled={selectedCount === 0}
              className="text-sm text-blue-600 hover:underline disabled:text-gray-400"
            >
              Clear
            </button>
            <div className="relative w-full sm:w-64">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search tables…"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={clsx(
                "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                showFilters 
                  ? "bg-blue-100 text-blue-700" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              <FaFilter className="text-sm" />
              Filters
              {filters.statusFilters.length > 0 && (
                <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-0.5">
                  {filters.statusFilters.length}
                </span>
              )}
            </button>
            
            {(filters.statusFilters.length > 0 || filters.showOnlyFailed || filters.showOnlyCompleted) && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
              >
                <FaTimes className="text-sm" />
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-gray-50 rounded-lg p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-700">Filter Options</h3>
              <div className="flex gap-2">
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={filters.showOnlyFailed}
                    onChange={(e) => setFilters(prev => ({ ...prev, showOnlyFailed: e.target.checked }))}
                    className="rounded"
                  />
                  Show only failed tables
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    checked={filters.showOnlyCompleted}
                    onChange={(e) => setFilters(prev => ({ ...prev, showOnlyCompleted: e.target.checked }))}
                    className="rounded"
                  />
                  Show only completed tables
                </label>
              </div>
            </div>

            {/* Filter Presets */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-600">Quick Filters:</p>
              <div className="flex flex-wrap gap-2">
                {filterPresets.map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => addStatusFilter(preset.step, preset.status)}
                    className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Filters */}
            {filters.statusFilters.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-600">Active Filters:</p>
                <div className="flex flex-wrap gap-2">
                  {filters.statusFilters.map((filter, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md text-sm"
                    >
                      <span>{filter.step.toUpperCase()}: {STATUS_LABEL[filter.status]}</span>
                      <button
                        onClick={() => removeStatusFilter(index)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaTimes className="text-xs" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Bottom Row: Bulk Actions */}
        <div className="flex flex-wrap gap-2">
          {/* Bulk Operations Modal Button */}
          <button
            onClick={() => setIsBulkModalOpen(true)}
            className="px-4 py-2 rounded-md text-white font-medium bg-green-600 hover:bg-green-700 shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            title="Paste comma-separated table names to perform bulk operations"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Bulk Operations
          </button>

          <button
            onClick={() =>
              doDeID({ tables_name: selectedRows.map((r) => r.original.table_name) })
            }
            disabled={selectedCount === 0 || deidPending}
            title={
              !selectedCount
                ? "Select at least one table"
                : "Start DeID for selected tables"
            }
            className={clsx(
              "px-4 py-2 rounded-md text-white font-medium",
              selectedCount > 0 && !deidPending
                ? "bg-red-600 hover:bg-red-700 shadow-sm hover:shadow-md transition-all"
                : "bg-gray-300 cursor-not-allowed"
            )}
          >
            {deidPending ? "Starting DeID…" : "Start DeID"}
          </button>

          <button
            onClick={() =>
              doQC({ tables_name: selectedRows.map((r) => r.original.table_name) })
            }
            disabled={!canQC || hasDeidFailed}
            title={
              !selectedCount
                ? "Select at least one table"
                : hasDeidFailed
                ? "Resolve de-identification errors first"
                : "All selected tables must be de-identified to start QC"
            }
            className={clsx(
              "px-4 py-2 rounded-md text-white font-medium",
              canQC
                ? "bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition-all"
                : "bg-gray-300 cursor-not-allowed"
            )}
          >
            {qcPending ? "Starting QC…" : "Start QC"}
          </button>

          <button
            onClick={() =>
              doGCP({ tables_name: selectedRows.map((r) => r.original.table_name) })
            }
            disabled={!canGCP}
            title={
              !selectedCount
                ? "Select at least one table"
                : "Only tables with passed QC can be moved"
            }
            className={clsx(
              "px-4 py-2 rounded-md text-white font-medium",
              canGCP
                ? "bg-indigo-600 hover:bg-indigo-700 shadow-sm hover:shadow-md transition-all"
                : "bg-gray-300 cursor-not-allowed"
            )}
          >
            {gcpPending ? "Moving to GCP…" : "GCP Move"}
          </button>

          <button
            onClick={() =>
              doEmbd({ tables_name: selectedRows.map((r) => r.original.table_name) })
            }
            disabled={!canEmbd}
            title={
              !selectedCount
                ? "Select at least one table"
                : "Only tables with passed QC can start embedding"
            }
            className={clsx(
              "px-4 py-2 rounded-md text-white font-medium",
              canEmbd
                ? "bg-purple-600 hover:bg-purple-700 shadow-sm hover:shadow-md transition-all"
                : "bg-gray-300 cursor-not-allowed"
            )}
          >
            {embdPending ? "Starting Embedding…" : "Start Embedding"}
          </button>
        </div>
      </div>

      {/* Inline helper for QC constraint */}
      {!canQC && selectedCount > 0 && !hasDeidFailed && (
        <p className="px-6 py-2 text-sm text-gray-500 bg-blue-50 border-l-4 border-blue-400">
          QC can only run on tables whose de-identification status is &quot;Completed.&quot;
        </p>
      )}

      {/* Results Summary */}
      <div className="px-6 py-3 bg-gray-50 border-b text-sm text-gray-600">
        Showing {filteredData.length} of {tablesData.length} tables
        {filters.statusFilters.length > 0 && (
          <span className="ml-2 text-blue-600">
            (filtered by {filters.statusFilters.length} criteria)
          </span>
        )}
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50">
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((header) => (
                  <th key={header.id} className="p-3 font-medium text-gray-700">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={clsx(
                  row.index % 2 === 0 ? "bg-white" : "bg-gray-50",
                  "hover:bg-blue-50 transition-colors"
                )}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-3 align-top">
                    {flexRender(
                      cell.column.columnDef.cell,
                      cell.getContext()
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition-colors"
        >
          Prev
        </button>
        <span className="text-sm text-gray-600">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </span>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition-colors"
        >
          Next
        </button>
      </div>

      {/* Enhanced Error Modal */}
      <Dialog
        open={!!errorModal}
        onClose={() => setErrorModal(null)}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        <div className="fixed inset-0 bg-black/30" />
        <DialogPanel className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mx-4 z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-red-100 rounded-full">
              <BiErrorCircle className="text-red-600 text-xl" />
            </div>
            <div>
              <DialogTitle className="text-xl font-semibold text-gray-900">
                {errorModal?.step} Process Failed
              </DialogTitle>
              <p className="text-gray-600">Table: {errorModal?.table}</p>
            </div>
          </div>
          
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-red-800 mb-2">Error Details:</h4>
            <pre className="text-sm text-red-700 whitespace-pre-wrap overflow-auto max-h-64">
              {errorModal?.message}
            </pre>
          </div>

          <div className="flex justify-end gap-3">
            <button
              onClick={() => setErrorModal(null)}
              className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              Close
            </button>
            {errorModal?.step === "QC" && (
              <button
                onClick={() => {
                  // Restart QC for this table
                  const tableName = errorModal.table;
                  if (tableName) {
                    doQC({ tables_name: [tableName] });
                    setErrorModal(null);
                  }
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Restart QC
              </button>
            )}
          </div>
        </DialogPanel>
      </Dialog>

      {/* Bulk Operations Modal */}
      <BulkTableOperationsModal
        isOpen={isBulkModalOpen}
        onClose={() => setIsBulkModalOpen(false)}
        clientId={clientId as string}
        dumpId={dumpId as string}
        tablesData={tablesData}
      />
    </div>
  );
}
