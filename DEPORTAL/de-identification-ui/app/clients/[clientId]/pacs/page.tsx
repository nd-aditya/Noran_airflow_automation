"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { API_URL } from "@/app/api/Config";
import clsx from "clsx";

// Updated interface to match the backend response structure
interface PacsClient {
  pacsclient_id: string | number;
  handler_type: number;
  register_date: string;
  created_at: string;
  // Optionally, you can add more fields if backend provides them
  name?: string;
  run_config?: { dir_path?: string };
  status?: string;
  id?: string;
}

const HANDLER_TYPE_OPTIONS = [
  { value: 1, label: "DIR_HANDLER" },
  { value: 2, label: "RETRIEVAL_HANDLER" },
  // Add more handler types here if needed in the future
];

export default function PacsClientPage() {
  const { clientId } = useParams();
  const router = useRouter();

  const [pacsClients, setPacsClients] = useState<PacsClient[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  // Client details state for patient identifier options
  const [clientDetails, setClientDetails] = useState<any>(null);
  const [isLoadingClientDetails, setIsLoadingClientDetails] = useState(false);

  // Form state
  const [formData, setFormData] = useState<{
    name?: string;
    handler_type: number;
    run_config: { dir_path: string } | Record<string, never>;
    register_date: string;
    patient_identifier_type: string;
  }>({
    name: "",
    handler_type: 1,
    run_config: { dir_path: "" },
    register_date: "",
    patient_identifier_type: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  // Ref for the directory picker input
  const dirInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    fetchPacsClients();
    fetchClientDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId]);

  const fetchPacsClients = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${API_URL}pacs/register_handler/${clientId}/`);
      const data = response.data;
      // Normalize: ensure all clients have a string name for display, even if not present
      if (Array.isArray(data)) {
        setPacsClients(
          data.map((item: any) => ({
            ...item,
            name: item.name ?? `PacsClient #${item.pacsclient_id}`,
            run_config: item.run_config ?? {},
            status: item.status ?? "active", // fallback status if not present
          }))
        );
      } else if (data && Array.isArray(data.results)) {
        setPacsClients(
          data.results.map((item: any) => ({
            ...item,
            name: item.name ?? `PacsClient #${item.pacsclient_id}`,
            run_config: item.run_config ?? {},
            status: item.status ?? "active",
          }))
        );
      } else {
        setPacsClients([]);
      }
    } catch (error) {
      console.error("Error fetching pacsclients:", error);
      setPacsClients([]);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchClientDetails = async () => {
    try {
      setIsLoadingClientDetails(true);
      const response = await axios.get(`${API_URL}client_details/${clientId}/`);
      setClientDetails(response.data);
    } catch (error) {
      console.error("Error fetching client details:", error);
      setClientDetails(null);
    } finally {
      setIsLoadingClientDetails(false);
    }
  };

  // Register PacsClient using the new API endpoint and payload
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (
      !formData.name ||
      !formData.patient_identifier_type ||
      (formData.handler_type === 1 &&
        (!("dir_path" in formData.run_config) ||
          !(formData.run_config as any).dir_path.trim()))
    ) {
      setMessage("❌ Please fill all required fields.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Build payload as per the backend requirements
      const payload: any = {
        name: formData.name,
        handler_type: formData.handler_type,
        register_date: formData.register_date || "2025-10-10",
        patient_identifier_type: formData.patient_identifier_type,
      };
      if (formData.handler_type === 1) {
        payload.run_config = {
          dir_path:
            (formData.run_config as any).dir_path?.trim() ||
            "/Users/rohitchouhan/Documents/Code/backend/deidentification/tests/assets/dicoms/sampledata",
        };
      }

      await axios.post(
        `${API_URL}pacs/register_handler/${clientId}/`,
        payload
      );

      setMessage("✅ PacsClient registered successfully!");
      setFormData({
        name: "",
        handler_type: 1,
        run_config: { dir_path: "" },
        register_date: "",
        patient_identifier_type: "",
      });
      setShowCreateForm(false);
      fetchPacsClients();
    } catch (error) {
      console.error("Error registering pacsclient:", error);
      setMessage("❌ Error registering PacsClient. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Filter by name (if present), otherwise show all
  const filteredPacsClients = pacsClients.filter((client) =>
    typeof client?.name === "string"
      ? client.name.toLowerCase().includes(searchTerm.toLowerCase())
      : false
  );

  // Handler for directory picker (using input type="file" with webkitdirectory)
  const handleDirPickerClick = () => {
    if (dirInputRef.current) {
      dirInputRef.current.value = ""; // reset so onChange always fires
      dirInputRef.current.click();
    }
  };

  const handleDirPicked = (e: React.ChangeEvent<HTMLInputElement>) => {
    // The directory path is not directly available in browsers for security reasons.
    // But we can infer the directory from the first file's webkitRelativePath.
    const files = e.target.files;
    if (files && files.length > 0) {
      // webkitRelativePath is like "folder/subfolder/file.txt"
      const firstFile = files[0] as any;
      let dirPath = "";
      if (firstFile.webkitRelativePath) {
        // Remove the file name to get the directory
        const relPath = firstFile.webkitRelativePath;
        const lastSlash = relPath.lastIndexOf("/");
        if (lastSlash > 0) {
          dirPath = relPath.substring(0, lastSlash);
        } else {
          dirPath = relPath; // fallback
        }
      } else if ((firstFile as File).name) {
        // fallback: just use the file name
        dirPath = (firstFile as File).name;
      }
      setFormData({
        ...formData,
        run_config: { ...formData.run_config, dir_path: dirPath },
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading PacsClients...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-4 lg:p-6">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
        <button
          onClick={() => router.push(`/clients/${clientId}/dumps`)}
          className="hover:text-gray-900 transition-colors"
        >
          Clients
        </button>
        <span>/</span>
        <button
          onClick={() => router.push(`/clients/${clientId}/dumps`)}
          className="hover:text-gray-900 transition-colors"
        >
          Client {clientId}
        </button>
        <span>/</span>
        <span className="text-gray-900 font-medium">PacsClients</span>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
            title="Go back"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">PacsClient Management</h1>
            <p className="text-sm text-gray-600 mt-1">
              Manage PACS clients for this client • {pacsClients.length} registered
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowCreateForm(true)}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-sm hover:bg-purple-700 transition-all duration-200 font-medium flex items-center gap-2 text-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Register New PacsClient
        </button>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
          />
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* PacsClients Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPacsClients.length > 0 ? (
          filteredPacsClients.map((client) => (
            <div
              key={client.id || client.pacsclient_id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer group"
              onClick={() => router.push(`/clients/${clientId}/pacs/${client.pacsclient_id}`)}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-mono">ID: {client.pacsclient_id}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className={clsx(
                      "inline-flex px-2 py-1 text-xs font-medium rounded-full",
                      {
                        "bg-green-100 text-green-800": client.status === "active",
                        "bg-yellow-100 text-yellow-800": client.status === "inactive",
                        "bg-red-100 text-red-800": client.status === "error",
                      }
                    )}>
                      {client.status}
                    </span>
                  </div>
                </div>

                {/* Handler Type */}
                <div className="mb-4">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Handler Type</label>
                  <p className="text-sm text-gray-900 mt-1">
                    {client.handler_type === 1 ? "DIR_HANDLER" : `Type ${client.handler_type}`}
                  </p>
                </div>

                {/* Run Config Preview */}
                <div className="mb-4">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Configuration</label>
                  <div className="mt-1">
                    {client.handler_type === 1 && client.run_config && client.run_config.dir_path ? (
                      <p className="text-sm text-gray-900 font-mono truncate" title={client.run_config.dir_path}>
                        {client.run_config.dir_path}
                      </p>
                    ) : (
                      <p className="text-sm text-gray-500 italic">No configuration</p>
                    )}
                  </div>
                </div>

                {/* Register Date */}
                <div className="mb-4">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Register Date</label>
                  <p className="text-sm text-gray-900 mt-1">
                    {client.register_date ? new Date(client.register_date).toLocaleDateString() : "Not set"}
                  </p>
                </div>

                {/* Created Date */}
                <div className="mb-4">
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider">Created</label>
                  <p className="text-sm text-gray-500 mt-1">
                    {client.created_at ? new Date(client.created_at).toLocaleDateString() : "Unknown"}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push(`/clients/${clientId}/pacs/${client.pacsclient_id}`);
                    }}
                    className="px-3 py-1.5 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition-colors text-xs font-medium flex items-center gap-1.5"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    View Details
                  </button>
                  <span className="text-xs text-gray-400">or click anywhere on card</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No PacsClients yet</h3>
            <p className="text-sm text-gray-500 mb-4">Get started by registering your first PACS client</p>
            <button
              onClick={() => setShowCreateForm(true)}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              Register First PacsClient
            </button>
          </div>
        )}
      </div>

      {/* Create PacsClient Modal */}
      {showCreateForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 rounded-t-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-900">Register New PacsClient</h2>
                <button
                  onClick={() => setShowCreateForm(false)}
                  className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-4 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  PacsClient Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter pacsclient name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Handler Type *
                </label>
                <select
                  value={formData.handler_type}
                  onChange={e => {
                    const value = parseInt(e.target.value, 10);
                    setFormData({
                      ...formData,
                      handler_type: value,
                      run_config: value === 1 ? { dir_path: "" } : {},
                    });
                  }}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                  required
                >
                  {HANDLER_TYPE_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Patient Identifier Type *
                </label>
                {isLoadingClientDetails ? (
                  <div className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-sm text-gray-500">Loading options...</span>
                  </div>
                ) : (
                  <select
                    value={formData.patient_identifier_type}
                    onChange={(e) => setFormData({ ...formData, patient_identifier_type: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                    required
                  >
                    <option value="">Select patient identifier type</option>
                    {clientDetails?.patient_identifier_columns?.map((column: string, index: number) => (
                      <option key={index} value={column}>
                        {column}
                      </option>
                    ))}
                  </select>
                )}
                {!isLoadingClientDetails && (!clientDetails?.patient_identifier_columns || clientDetails.patient_identifier_columns.length === 0) && (
                  <p className="text-xs text-red-500 mt-1">No patient identifier columns available. Please check client configuration.</p>
                )}
              </div>

              {/* Run Config fields, depends on handler_type */}
              {formData.handler_type === 1 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Directory Path *
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={(formData.run_config as any).dir_path || ""}
                      onChange={e =>
                        setFormData({
                          ...formData,
                          run_config: { ...formData.run_config, dir_path: e.target.value },
                        })
                      }
                      placeholder="Enter directory path"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all pr-12"
                      required
                    />
                    {/* Directory picker button */}
                    <button
                      type="button"
                      onClick={handleDirPickerClick}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded hover:bg-gray-100 focus:outline-none"
                      title="Browse for directory"
                      tabIndex={-1}
                    >
                      {/* Folder icon */}
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7a2 2 0 012-2h3.172a2 2 0 011.414.586l1.828 1.828A2 2 0 0013.828 8H19a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                      </svg>
                    </button>
                    {/* Hidden directory input */}
                    <input
                      ref={dirInputRef}
                      type="file"
                      style={{ display: "none" }}
                      // @ts-expect-error: webkitdirectory is not in the standard spec
                      webkitdirectory="true"
                      directory="true"
                      multiple
                      onChange={handleDirPicked}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Enter the folder path or click the folder icon to select a directory.
                  </div>
                </div>
              )}

              {/* Register Date (optional, can be set automatically or by user) */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Register Date
                </label>
                <input
                  type="date"
                  value={formData.register_date}
                  onChange={e => setFormData({ ...formData, register_date: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                />
              </div>

              {/* Removed Inventory Creation Done field */}

              {message && (
                <div className={clsx(
                  "p-3 rounded-lg text-center font-medium text-sm",
                  message.startsWith("✅") 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "bg-red-50 text-red-700 border border-red-200"
                )}>
                  {message}
                </div>
              )}

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setShowCreateForm(false)}
                  className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={clsx(
                    "flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2 text-sm",
                    isSubmitting
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-purple-600 text-white hover:bg-purple-700 shadow-sm hover:shadow-md"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Registering...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Register PacsClient
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
