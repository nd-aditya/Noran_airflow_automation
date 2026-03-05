"use client";

import { useState, useEffect, useCallback } from "react";
import { AiOutlineUpload, AiOutlineCheckCircle, AiOutlineClose, AiOutlineInfoCircle } from "react-icons/ai";

import { API_URL } from "@/app/api/Config";

interface PrimaryKeyConfigResponse {
  tables_with_no_primary_key: [string, number][];
  is_primary_key_uploaded: boolean;
  success: boolean;
}

interface PrimaryKeyConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  clientId: string;
  dumpId: string;
}

export default function PrimaryKeyConfigModal({ isOpen, onClose, clientId, dumpId }: PrimaryKeyConfigModalProps) {
  const [configData, setConfigData] = useState<PrimaryKeyConfigResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const fetchPrimaryKeyConfig = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API_URL}primary_key_config/${clientId}/${dumpId}/`, {
        credentials: "include",
      });
      const data = await response.json();
      setConfigData(data);
    } catch (error) {
      console.error("Error fetching primary key config:", error);
    } finally {
      setIsLoading(false);
    }
  }, [clientId, dumpId]);

  useEffect(() => {
    if (isOpen) {
      fetchPrimaryKeyConfig();
    }
  }, [isOpen, fetchPrimaryKeyConfig]);

  const handleFileUpload = async () => {
    if (!uploadFile) return;

    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", uploadFile);
      formData.append("data", JSON.stringify({ use_previously_uploaded_mapping: false }));

      const response = await fetch(`${API_URL}primary_key_config/${clientId}/${dumpId}/`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadSuccess(true);
        // Refresh the config data
        await fetchPrimaryKeyConfig();
        setUploadFile(null);
        // Reset success message after 3 seconds
        setTimeout(() => setUploadSuccess(false), 3000);
      } else {
        throw new Error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleUsePreviousMapping = async () => {
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append("data", JSON.stringify({ use_previously_uploaded_mapping: true }));
      const response = await fetch(`${API_URL}primary_key_config/${clientId}/${dumpId}/`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        setUploadSuccess(true);
        await fetchPrimaryKeyConfig();
        setTimeout(() => setUploadSuccess(false), 3000);
      } else {
        throw new Error("Request failed");
      }
    } catch (error) {
      console.error("Error using previous mapping:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "text/csv") {
      setUploadFile(file);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-blue-100">
              <AiOutlineInfoCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Primary Key Configuration</h2>
              <p className="text-xs text-gray-600">Manage primary key mappings for tables</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <AiOutlineClose className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[calc(90vh-140px)] overflow-y-auto">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : configData ? (
            <>
              {/* Upload Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Upload Configuration</h3>
                
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                    className="hidden"
                    id="csv-upload"
                  />
                  <label
                    htmlFor="csv-upload"
                    className="cursor-pointer flex flex-col items-center space-y-3"
                  >
                    <div className="p-3 rounded-full bg-blue-100">
                      <AiOutlineUpload className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {uploadFile ? uploadFile.name : "Click to upload CSV file"}
                      </p>
                      <p className="text-xs text-gray-500">Only CSV files are supported</p>
                    </div>
                  </label>
                </div>

                {uploadFile && (
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-blue-800">{uploadFile.name}</span>
                    <button
                      onClick={handleFileUpload}
                      disabled={isUploading}
                      className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                    >
                      {isUploading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Uploading...
                        </>
                      ) : (
                        <>
                          <AiOutlineUpload className="w-4 h-4 mr-2" />
                          Upload
                        </>
                      )}
                    </button>
                  </div>
                )}

                {/* Use Previous Mapping */}
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-sm text-gray-700">Or reuse previously uploaded mapping</span>
                  <button
                    onClick={handleUsePreviousMapping}
                    disabled={isUploading}
                    className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isUploading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Please wait...
                      </>
                    ) : (
                      <>Use Previous Mapping</>
                    )}
                  </button>
                </div>

                {uploadSuccess && (
                  <div className="flex items-center p-3 bg-green-50 rounded-lg">
                    <AiOutlineCheckCircle className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-sm text-green-800">Configuration uploaded successfully!</span>
                  </div>
                )}
              </div>

              {/* Status Section */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Configuration Status</h3>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className={`w-3 h-3 rounded-full ${configData.is_primary_key_uploaded ? 'bg-green-500' : 'bg-red-500'}`}></div>
                    <span className="font-medium text-gray-900">
                      {configData.is_primary_key_uploaded ? 'Primary Key Configuration Uploaded' : 'No Primary Key Configuration Found'}
                    </span>
                  </div>
                  
                  {configData.success && (
                    <div className="space-y-3">
                      {configData.is_primary_key_uploaded ? (
                        configData.tables_with_no_primary_key.length === 0 ? (
                          <div className="flex items-center p-3 bg-green-100 rounded-lg">
                            <AiOutlineCheckCircle className="w-5 h-5 text-green-600 mr-2" />
                            <span className="text-sm text-green-800 font-medium">
                              All tables have primary key mappings configured!
                            </span>
                          </div>
                        ) : (
                          <div>
                            <p className="text-sm text-gray-600 mb-2">
                              The following tables need primary key configuration:
                            </p>
                            <div className="space-y-2">
                              {configData.tables_with_no_primary_key.map(([tableName, tableId], index) => (
                                <div key={index} className="flex items-center justify-between p-2 bg-white rounded border">
                                  <span className="text-sm font-medium text-gray-900">{tableName}</span>
                                  <span className="text-xs text-gray-500">ID: {tableId}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      ) : (
                        <div className="flex items-center p-3 bg-yellow-100 rounded-lg">
                          <AiOutlineInfoCircle className="w-5 h-5 text-yellow-600 mr-2" />
                          <span className="text-sm text-yellow-800 font-medium">
                            Please upload a primary key configuration CSV file to get started.
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">Failed to load configuration data</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
