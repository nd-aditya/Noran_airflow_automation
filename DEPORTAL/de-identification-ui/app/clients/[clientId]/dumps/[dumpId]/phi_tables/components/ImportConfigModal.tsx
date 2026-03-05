import { postRequest } from "@/app/utils/apiService";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

interface ImportConfigModalProps {
  isOpen: boolean;
  dumpId: string;
  clientId: string;
  onClose: () => void;
}

interface UploadResponse {
  success: boolean;
  message?: string;
  tables_not_found?: string[];
  total_tables_not_found?: number;
}

import { API_URL } from "@/app/api/Config";

const ImportConfigModal: React.FC<ImportConfigModalProps> = ({
  isOpen,
  clientId,
  dumpId,
  onClose,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [tablesNotFound, setTablesNotFound] = useState<string[]>([]);
  const [totalTablesNotFound, setTotalTablesNotFound] = useState<number>(0);
  const [apiMessage, setApiMessage] = useState<string | null>(null);

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);

      // Immediately upload the file after selection
      try {
        const formData = new FormData();
        formData.append("file", file);

        // postRequest returns the response data
        const response = await postRequest(
          `${API_URL}upload_config_from_csv/${clientId}/${dumpId}/`,
          formData,
          {
            "Content-Type": "multipart/form-data",
          },
        );

        // The API returns: { success, tables_not_found, total_tables_not_found, message }
        if (response && typeof response === "object") {
          const uploadResponse = response as UploadResponse;
          setUploadStatus(`File ${file.name} uploaded successfully.`);
          setTablesNotFound(uploadResponse.tables_not_found || []);
          setTotalTablesNotFound(uploadResponse.total_tables_not_found || 0);
          setApiMessage(uploadResponse.message || null);
        } else {
          setUploadStatus("File uploaded, but unexpected response.");
          setTablesNotFound([]);
          setTotalTablesNotFound(0);
          setApiMessage(null);
        }
      } catch (error: any) {
        setUploadStatus("Failed to upload file.");
        setTablesNotFound([]);
        setTotalTablesNotFound(0);
        setApiMessage(null);
        console.error("Upload error:", error);
      }
    }
  };

  const handleDeleteFile = () => {
    setSelectedFile(null);
    setUploadStatus(null);
    setTablesNotFound([]);
    setTotalTablesNotFound(0);
    setApiMessage(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative mx-40 flex w-full flex-col rounded-xl bg-white p-8 max-md:mx-20">
        <div className="absolute right-8 top-8" onClick={() => onClose()}>
          <AiFillCloseCircle />
        </div>
        <h2 className="mb-1 cursor-pointer text-lg font-semibold">
          Import Config
        </h2>
        <div className="w-8 border-2 border-secondary"></div>
        <div className="mt-8 grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-xs font-medium text-secondary">
              CSV file must contain the following headers
            </p>
            <p className="font-semibold text-sm">Table_Name</p>
            <p className="font-semibold text-sm">Column_Name</p>
            <p className="font-semibold text-sm">Is_PHI</p>
            <p className="font-semibold text-sm">De_Identification_Rule</p>
            <p className="font-semibold text-sm">Mask_Value</p>
            <p className="font-semibold text-sm">Reference_Patient_ID</p>
            <p className="font-semibold text-sm">Reference_Encounter_ID</p>
            <p className="font-semibold text-sm">Priority</p>
            <p className="mt-8 text-sm">
              Valid <span className="font-bold">De_Identification_Rule</span>{" "}
              values
            </p>
            <div className="flex flex-col bg-riceFlower px-4 py-6">
              <span className="text-xs">
                Patient_ID, Encounter_ID, Data_offset, Patient_DOB, ZIP_Code,
                Mask, None,
              </span>
              <span className="mt-4 text-xs">
                *For the MASK rule define value need to mask in MASK_Value
                column
              </span>
            </div>
            <p className="mt-4 text-sm">
              <span className="font-bold">Priority</span> values
            </p>
            <div className="flex flex-col bg-riceFlower px-4 py-6">
              <span className="text-xs">
                Integer value (default: 10000 if not provided)
              </span>
              <span className="mt-2 text-xs">
                Lower values = higher priority
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            {selectedFile ? (
              <div className="flex items-center justify-between">
                <span>{selectedFile.name}</span>
                <button
                  className="ml-4 text-red-500"
                  onClick={handleDeleteFile}
                >
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex w-full items-center justify-center">
                <label className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:hover:bg-gray-800">
                  <div className="flex flex-col items-center justify-center pb-6 pt-5">
                    <svg
                      className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
            )}

            {uploadStatus && <p className="mt-4">{uploadStatus}</p>}

            {/* Show tables not found if any */}
            {(totalTablesNotFound > 0 || (tablesNotFound && tablesNotFound.length > 0)) && (
              <div className="mt-4 rounded bg-red-50 p-4 border border-red-200">
                <p className="font-semibold text-red-700 text-sm mb-2">
                  {totalTablesNotFound} table{totalTablesNotFound !== 1 ? "s" : ""} not found in database:
                </p>
                <ul className="list-disc list-inside text-red-700 text-xs max-h-40 overflow-y-auto">
                  {tablesNotFound.map((table, idx) => (
                    <li key={table + idx}>{table}</li>
                  ))}
                </ul>
                {apiMessage && (
                  <p className="mt-2 text-xs text-gray-700">{apiMessage}</p>
                )}
              </div>
            )}
            {/* If upload succeeded and no tables missing, show API message if present */}
            {uploadStatus && totalTablesNotFound === 0 && apiMessage && (
              <div className="mt-4 rounded bg-green-50 p-3 border border-green-200 text-green-800 text-xs">
                {apiMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportConfigModal;
