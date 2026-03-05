"use client";
import { API_URL } from "@/app/api/Config";

import { useState } from "react";
import Select from "@/app/components/common/Select";
import { useGet } from "@/app/api/useApiHooks";

interface TableViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  tableId: number;
  tableName: string;

  // new props for bridging data to/from parent
  columnsDetails: {
    [columnName: string]: {
      is_phi: string; // "true" or "false"
      de_identification_rule: string; // e.g. "MASK", "PATIENT_ID", etc.
      mask_value: string;
    };
  };
  updateColumnDetail: (
    columnName: string,
    partialData: {
      is_phi?: string;
      de_identification_rule?: string;
      mask_value?: string;
    },
  ) => void;
  onSave: () => void; // parent's handleSubmit(onSubmit)
  deid_rules: string[]; // Add this prop for de-identification rules
}

const rowOptions = [
  { value: "5", label: "5" },
  { value: "10", label: "10" },
  // ...
];

export const TableViewModal: React.FC<TableViewModalProps> = ({
  isOpen,
  onClose,
  tableId,
  tableName,
  columnsDetails,
  updateColumnDetail,
  onSave,
  deid_rules,
}) => {
  const [rowsToShow, setRowsToShow] = useState("10");
  const [hasModalChanges, setHasModalChanges] = useState(false);

  // Use your existing API to get the row data
  const { data, isLoading } = useGet<{
    rows: Record<string, any>[];
    table_name: string;
    table_id: number;
  }>(
    `${API_URL}view_table_data/${tableId}?rows=${rowsToShow}`,
    {
      queryKey: ["table_data", tableId, rowsToShow],
      enabled: isOpen,
    },
  );

  // If it's closed, don't render anything
  if (!isOpen) return null;

  // columns from the data
  const columns = data?.rows?.[0] ? Object.keys(data.rows[0]) : [];
  // but also ensure they exist in columnsDetails
  // (some columns might not be in columnsDetails if it’s out of sync, handle carefully)
  const displayColumns = columns.filter((c) => columnsDetails[c] !== undefined);

  // Handler for updating PHI in the parent’s form
  const handlePhiChange = (colName: string, newPhi: string) => {
    setHasModalChanges(true);
    updateColumnDetail(colName, { is_phi: newPhi });
  };

  // Handler for updating De-id rule in the parent’s form
  const handleRuleChange = (colName: string, newRule: string) => {
    setHasModalChanges(true);
    updateColumnDetail(colName, { de_identification_rule: newRule });
  };

  // When user clicks "Save" in modal, call parent's onSave
  const handleSaveClick = () => {
    onSave(); // calls parent handleSubmit(onSubmit)
    setHasModalChanges(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="max-h-[80vh] w-[90vw] overflow-hidden rounded-lg bg-white p-6">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{tableName}</h2>
          <button
            onClick={onClose}
            className="rounded-md p-2 hover:bg-gray-100"
          >
            ✕
          </button>
        </div>

        {/* Table container */}
        <div className="max-h-[calc(80vh-12rem)] overflow-auto">
          {isLoading ? (
            <div className="flex h-40 items-center justify-center">
              Loading...
            </div>
          ) : (
            <table className="w-full table-auto border-collapse">
              <thead className="sticky top-0 bg-white">
                <tr>
                  {displayColumns.map((column) => (
                    <th
                      key={column}
                      className="border-b border-gray-200 p-3 text-left text-sm font-semibold"
                    >
                      {column}
                    </th>
                  ))}
                </tr>

                {/* 
                  Extra row: each column has a PHI dropdown, 
                  and if PHI = true, a De-id rule dropdown underneath.
                */}
                <tr>
                  {displayColumns.map((column) => {
                    const colData = columnsDetails[column];
                    const isPHI = colData?.is_phi === "true";
                    return (
                      <td
                        key={column}
                        className="border-b border-gray-200 p-3 align-top text-sm"
                      >
                        {/* PHI dropdown */}
                        <Select
                          value={colData?.is_phi || "false"}
                          onChange={(e) =>
                            handlePhiChange(column, e.target.value)
                          }
                          options={[
                            { value: "false", label: "No" },
                            { value: "true", label: "Yes" },
                          ]}
                          className="mb-2"
                        />

                        {/* If PHI is true, show De-id rule below */}
                        {isPHI && (
                          <Select
                            value={colData?.de_identification_rule || ""}
                            onChange={(e) =>
                              handleRuleChange(column, e.target.value)
                            }
                            options={deid_rules.map((rule) => ({
                              value: rule,
                              label: rule,
                            }))}
                            placeholder="Select Rule"
                          />
                        )}
                      </td>
                    );
                  })}
                </tr>
              </thead>

              {/* Data rows */}
              <tbody>
                {data?.rows.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    {displayColumns.map((column) => (
                      <td
                        key={column}
                        className="border-b border-gray-200 p-3 text-sm"
                      >
                        {row[column]?.toString() || ""}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Rows-per-page + Close/Save */}
        <div className="mt-4 flex items-center justify-between">
          {/* Rows per page */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">View</span>
            <div className="w-24">
              <Select
                value={rowsToShow}
                onChange={(e) => setRowsToShow(e.target.value)}
                options={rowOptions}
                className="h-8 text-sm"
              />
            </div>
            <span className="text-sm text-gray-600">Rows</span>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            {/* Show Save only if something changed in the modal */}
            {hasModalChanges && (
              <button
                className="rounded bg-secondary px-4 py-2 text-white hover:bg-secondary/90"
                onClick={handleSaveClick}
              >
                Save
              </button>
            )}
            <button
              className="rounded border px-3 py-2 text-sm hover:bg-gray-100"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
