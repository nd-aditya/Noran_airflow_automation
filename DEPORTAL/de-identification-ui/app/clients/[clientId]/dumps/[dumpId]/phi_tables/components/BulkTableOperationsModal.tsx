"use client";

import React, { useState, useEffect } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FaTimes, FaPlay, FaCheck, FaExclamationTriangle } from "react-icons/fa";
import { usePost } from "@/app/api/useApiHooks";
import { API_URL } from "@/app/api/Config";
import { toast } from "react-toastify";

interface BulkTableOperationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientId: string;
  dumpId: string;
  tablesData: Array<{ table_id: number; table_name: string }>;
}

interface OperationResult {
  operation: string;
  success: boolean;
  message: string;
  tableIds: number[];
  tableNames: string[];
}

export default function BulkTableOperationsModal({
  isOpen,
  onClose,
  clientId,
  dumpId,
  tablesData,
}: BulkTableOperationsModalProps) {
  const [tableNamesInput, setTableNamesInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [results, setResults] = useState<OperationResult[]>([]);
  const [selectedOperation, setSelectedOperation] = useState<"deid" | "qc" | "gcp" | "embd" | "hold_deid" | "hold_qc">("deid");

  // API hooks for different operations
  const { mutate: doDeID, isPending: deidPending } = usePost(`${API_URL}deid/start/${clientId}/${dumpId}/`);
  const { mutate: doQC, isPending: qcPending } = usePost(`${API_URL}qc/start/${clientId}/${dumpId}/`);
  const { mutate: doGCP, isPending: gcpPending } = usePost(`${API_URL}gcp/move/${clientId}/${dumpId}/`);
  const { mutate: doEmbd, isPending: embdPending } = usePost(`${API_URL}embd/start/${clientId}/${dumpId}/`);
  const { mutate: doHoldDeID, isPending: holdDeidPending } = usePost(`${API_URL}deid/interrupt/${clientId}/${dumpId}/`);
  const { mutate: doHoldQC, isPending: holdQcPending } = usePost(`${API_URL}qc/interrupt/${clientId}/${dumpId}/`);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setTableNamesInput("");
      setResults([]);
      setSelectedOperation("deid");
    }
  }, [isOpen]);

  // Parse comma-separated table names and convert to table IDs
  const parseTableNames = (input: string) => {
    const names = input
      .split(/[,\n]/) // Split by comma or newline
      .map(name => name.trim())
      .filter(name => name.length > 0);
    
    const tableIds: number[] = [];
    const foundNames: string[] = [];
    const notFoundNames: string[] = [];

    names.forEach(name => {
      const table = tablesData.find(t => 
        t.table_name.toLowerCase() === name.toLowerCase()
      );
      if (table) {
        tableIds.push(table.table_id);
        foundNames.push(table.table_name);
      } else {
        notFoundNames.push(name);
      }
    });

    return { tableIds, foundNames, notFoundNames };
  };

  // Execute the selected operation
  const executeOperation = async () => {
    if (!tableNamesInput.trim()) {
      toast.error("Please enter table names");
      return;
    }

    const { tableIds, foundNames, notFoundNames } = parseTableNames(tableNamesInput);
    
    if (foundNames.length === 0) {
      toast.error("No valid table names found");
      return;
    }

    if (notFoundNames.length > 0) {
      toast.warning(`Tables not found: ${notFoundNames.join(", ")}`);
    }

    setIsProcessing(true);
    setResults([]);

    try {
      const operationName = selectedOperation.toUpperCase();
      const payload = { tables_name: foundNames };

      // Create a promise that resolves with the operation result
      const operationPromise = new Promise<OperationResult>((resolve) => {
        const operationHandlers = {
          deid: () => doDeID(payload, {
            onSuccess: () => {
              resolve({
                operation: "DeID",
                success: true,
                message: `Successfully started DeID for ${foundNames.length} table(s)`,
                tableIds,
                tableNames: foundNames,
              });
            },
            onError: (error: any) => {
              resolve({
                operation: "DeID",
                success: false,
                message: `Failed to start DeID: ${error?.message || "Unknown error"}`,
                tableIds,
                tableNames: foundNames,
              });
            },
          }),
          qc: () => doQC(payload, {
            onSuccess: () => {
              resolve({
                operation: "QC",
                success: true,
                message: `Successfully started QC for ${foundNames.length} table(s)`,
                tableIds,
                tableNames: foundNames,
              });
            },
            onError: (error: any) => {
              resolve({
                operation: "QC",
                success: false,
                message: `Failed to start QC: ${error?.message || "Unknown error"}`,
                tableIds,
                tableNames: foundNames,
              });
            },
          }),
          gcp: () => doGCP(payload, {
            onSuccess: () => {
              resolve({
                operation: "GCP Move",
                success: true,
                message: `Successfully started GCP move for ${foundNames.length} table(s)`,
                tableIds,
                tableNames: foundNames,
              });
            },
            onError: (error: any) => {
              resolve({
                operation: "GCP Move",
                success: false,
                message: `Failed to start GCP move: ${error?.message || "Unknown error"}`,
                tableIds,
                tableNames: foundNames,
              });
            },
          }),
          embd: () => doEmbd(payload, {
            onSuccess: () => {
              resolve({
                operation: "Embedding",
                success: true,
                message: `Successfully started embedding for ${foundNames.length} table(s)`,
                tableIds,
                tableNames: foundNames,
              });
            },
            onError: (error: any) => {
              resolve({
                operation: "Embedding",
                success: false,
                message: `Failed to start embedding: ${error?.message || "Unknown error"}`,
                tableIds,
                tableNames: foundNames,
              });
            },
          }),
          hold_deid: () => doHoldDeID(payload, {
            onSuccess: () => {
              resolve({
                operation: "Hold DeID",
                success: true,
                message: `Successfully held DeID for ${foundNames.length} table(s)`,
                tableIds,
                tableNames: foundNames,
              });
            },
            onError: (error: any) => {
              resolve({
                operation: "Hold DeID",
                success: false,
                message: `Failed to hold DeID: ${error?.message || "Unknown error"}`,
                tableIds,
                tableNames: foundNames,
              });
            },
          }),
          hold_qc: () => doHoldQC(payload, {
            onSuccess: () => {
              resolve({
                operation: "Hold QC",
                success: true,
                message: `Successfully held QC for ${foundNames.length} table(s)`,
                tableIds,
                tableNames: foundNames,
              });
            },
            onError: (error: any) => {
              resolve({
                operation: "Hold QC",
                success: false,
                message: `Failed to hold QC: ${error?.message || "Unknown error"}`,
                tableIds,
                tableNames: foundNames,
              });
            },
          }),
        };

        operationHandlers[selectedOperation]();
      });

      const result = await operationPromise;
      setResults([result]);

      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
      }

    } catch (error) {
      const errorResult: OperationResult = {
        operation: selectedOperation.toUpperCase(),
        success: false,
        message: `Unexpected error: ${error}`,
        tableIds: [],
        tableNames: [],
      };
      setResults([errorResult]);
      toast.error("An unexpected error occurred");
    } finally {
      setIsProcessing(false);
    }
  };

  const isAnyOperationPending = deidPending || qcPending || gcpPending || embdPending || holdDeidPending || holdQcPending;

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black/30" />
      <DialogPanel className="bg-white p-6 rounded-lg shadow-xl max-w-4xl w-full mx-4 z-10 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <DialogTitle className="text-xl font-semibold text-gray-900">
            Bulk Table Operations
          </DialogTitle>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Operation Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Operation
            </label>
            <div className="space-y-3">
              {/* First Row: Start Operations */}
              <div className="flex gap-4">
                {[
                  { value: "deid", label: "Start DeID", color: "red" },
                  { value: "qc", label: "Start QC", color: "blue" },
                  { value: "gcp", label: "GCP Move", color: "indigo" },
                  { value: "embd", label: "Start Embedding", color: "purple" },
                ].map((op) => (
                  <button
                    key={op.value}
                    onClick={() => setSelectedOperation(op.value as any)}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      selectedOperation === op.value
                        ? `bg-${op.color}-600 text-white`
                        : `bg-${op.color}-100 text-${op.color}-700 hover:bg-${op.color}-200`
                    }`}
                  >
                    {op.label}
                  </button>
                ))}
              </div>
              
              {/* Second Row: Hold Operations */}
              <div className="flex gap-4">
                {[
                  { value: "hold_deid", label: "Hold DeID", color: "red" },
                  { value: "hold_qc", label: "Hold QC", color: "blue" },
                ].map((op) => (
                  <button
                    key={op.value}
                    onClick={() => setSelectedOperation(op.value as any)}
                    className={`px-4 py-2 rounded-md font-medium transition-colors ${
                      selectedOperation === op.value
                        ? `bg-${op.color}-600 text-white`
                        : `bg-${op.color}-100 text-${op.color}-700 hover:bg-${op.color}-200`
                    }`}
                  >
                    {op.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Table Names Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Table Names (comma-separated)
            </label>
            <textarea
              value={tableNamesInput}
              onChange={(e) => setTableNamesInput(e.target.value)}
              placeholder="Enter table names separated by commas or newlines, e.g.:
table1, table2, table3
or
table1
table2
table3"
              className="w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              disabled={isProcessing}
            />
            <p className="mt-1 text-xs text-gray-500">
              Enter table names exactly as they appear in the system. You can separate them with commas or put each on a new line.
            </p>
          </div>

          {/* Preview of parsed tables */}
          {tableNamesInput.trim() && (
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Preview:</h4>
              {(() => {
                const { tableIds, foundNames, notFoundNames } = parseTableNames(tableNamesInput);
                return (
                  <div className="space-y-2">
                    {foundNames.length > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <FaCheck className="text-green-500" />
                        <span className="text-green-700">
                          Found {foundNames.length} table(s): {foundNames.join(", ")}
                        </span>
                      </div>
                    )}
                    {notFoundNames.length > 0 && (
                      <div className="flex items-center gap-2 text-sm">
                        <FaExclamationTriangle className="text-yellow-500" />
                        <span className="text-yellow-700">
                          Not found: {notFoundNames.join(", ")}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })()}
            </div>
          )}

          {/* Execute Button */}
          <div className="flex justify-end">
            <button
              onClick={executeOperation}
              disabled={isProcessing || isAnyOperationPending || !tableNamesInput.trim()}
              className={`px-6 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ${
                isProcessing || isAnyOperationPending || !tableNamesInput.trim()
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {isProcessing || isAnyOperationPending ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Processing...
                </>
              ) : (
                <>
                  <FaPlay className="w-4 h-4" />
                  Execute {selectedOperation === "deid" ? "DeID" : selectedOperation === "hold_deid" ? "Hold DeID" : selectedOperation === "hold_qc" ? "Hold QC" : selectedOperation.toUpperCase()}
                </>
              )}
            </button>
          </div>

          {/* Results Display */}
          {results.length > 0 && (
            <div className="border-t pt-6">
              <h4 className="text-lg font-medium text-gray-900 mb-4">Results</h4>
              <div className="space-y-4">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg border-l-4 ${
                      result.success
                        ? "bg-green-50 border-green-400"
                        : "bg-red-50 border-red-400"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {result.success ? (
                        <FaCheck className="text-green-500 mt-1" />
                      ) : (
                        <FaExclamationTriangle className="text-red-500 mt-1" />
                      )}
                      <div className="flex-1">
                        <h5 className={`font-medium ${
                          result.success ? "text-green-800" : "text-red-800"
                        }`}>
                          {result.operation} Operation
                        </h5>
                        <p className={`text-sm mt-1 ${
                          result.success ? "text-green-700" : "text-red-700"
                        }`}>
                          {result.message}
                        </p>
                        {result.tableNames.length > 0 && (
                          <div className="mt-2">
                            <p className="text-xs font-medium text-gray-600 mb-1">
                              Tables processed:
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {result.tableNames.map((name, idx) => (
                                <span
                                  key={idx}
                                  className="px-2 py-1 bg-white rounded text-xs border"
                                >
                                  {name}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogPanel>
    </Dialog>
  );
}
