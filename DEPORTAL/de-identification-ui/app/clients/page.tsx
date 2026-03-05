// File: app/clients/page.tsx
"use client";

import { useEffect, useState, ChangeEvent, useRef } from "react";
import axios from "axios";
import { API_URL } from "@/app/api/Config";
import { useRouter } from "next/navigation";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clsx from "clsx";

import ClientsLayout from "../components/layout/ClientsLayout";
import CreateClientModal from "../components/CreateClientModal";

interface Client {
  client_id: string;
  client_name: string;
  emr_type: string;
  created_at: string;
}

interface Dump {
  dump_id: string;
  dump_name: string;
  dump_date: string;
  created_at: string;
}

export default function ClientsPage() {
  const router = useRouter();

  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [dumps, setDumps] = useState<Dump[]>([]);
  const [selectedDumpId, setSelectedDumpId] = useState<string>("");
  const [pacsClients, setPacsClients] = useState<any[]>([]);

  const [showClientModal, setShowClientModal] = useState(false);
  const [showDumpModal, setShowDumpModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDumpDropdown, setShowDumpDropdown] = useState(false);
  const [showPacsDropdown, setShowPacsDropdown] = useState(false);
  const [showProcessCsvModal, setShowProcessCsvModal] = useState(false);
  const [dumpSearchTerm, setDumpSearchTerm] = useState("");
  const [pacsSearchTerm, setPacsSearchTerm] = useState("");
  
  const dumpDropdownRef = useRef<HTMLDivElement>(null);
  const pacsDropdownRef = useRef<HTMLDivElement>(null);

  // --- new‐dump form
  const [newDumpName, setNewDumpName] = useState("");
  const [dumpDate, setDumpDate] = useState<Date>(new Date());
  const [connectionStr, setConnectionStr] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  // --- update‐dump form
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [piiConfig, setPiiConfig] = useState("{}");
  const [secondaryConfig, setSecondaryConfig] = useState("{}");
  const [globalConfig] = useState("{}");
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");

  // --- process csv form
  const [processName, setProcessName] = useState("");
  const [tableCsvFile, setTableCsvFile] = useState<File | null>(null);
  const [phiConfigCsvFile, setPhiConfigCsvFile] = useState<File | null>(null);
  const [processCsvLoading, setProcessCsvLoading] = useState(false);
  const [processCsvMessage, setProcessCsvMessage] = useState("");

  useEffect(() => {
    axios
      .get<Client[]>(`${API_URL}clients/`)
      .then((res) => {
        // Sort clients by created_at in descending order (newest first)
        const sortedClients = res.data.sort(
          (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setClients(sortedClients);
      })
      .catch(console.error);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dumpDropdownRef.current && !dumpDropdownRef.current.contains(event.target as Node)) {
        setShowDumpDropdown(false);
      }
      if (pacsDropdownRef.current && !pacsDropdownRef.current.contains(event.target as Node)) {
        setShowPacsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const fetchDumps = (clientId: string) => {
    axios
      .get<Dump[]>(`${API_URL}client_dumps/${clientId}/`)
      .then((res) => {
        const sorted = res.data.sort(
          (a, b) =>
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
        );
        setDumps(sorted);
        if (sorted.length) setSelectedDumpId(sorted[0].dump_id);
      })
      .catch(console.error);
  };

  const fetchPacsClients = (clientId: string) => {
    axios
      .get(`${API_URL}pacs/register_handler/${clientId}/`)
      .then((res) => {
        const data = res.data;
        if (Array.isArray(data)) {
          setPacsClients(data);
        } else if (data && Array.isArray(data.results)) {
          setPacsClients(data.results);
        } else {
          setPacsClients([]);
        }
      })
      .catch(() => setPacsClients([]));
  };

  const onClientCardClick = (c: Client) => {
    setSelectedClient(c);
    setDumps([]);
    setSelectedDumpId("");
    setRegisterMessage("");
    setUpdateMessage("");
    setShowDumpDropdown(false);
    setShowPacsDropdown(false);
    setDumpSearchTerm("");
    setPacsSearchTerm("");
    fetchDumps(c.client_id);
    fetchPacsClients(c.client_id);
    // Removed setShowDumpModal(true) - no modal should open on client selection
  };

  // Filter dumps based on search term
  const filteredDumps = dumps.filter(dump => 
    dump.dump_name.toLowerCase().includes(dumpSearchTerm.toLowerCase()) ||
    dump.dump_date.includes(dumpSearchTerm)
  );

  // Filter PACS clients based on search term
  const filteredPacsClients = pacsClients.filter(pacsClient => 
    (pacsClient.name || `PACS Client #${pacsClient.pacsclient_id || pacsClient.id}`).toLowerCase().includes(pacsSearchTerm.toLowerCase()) ||
    (pacsClient.handler_type === 1 ? 'DIR_HANDLER' : `Type ${pacsClient.handler_type}`).toLowerCase().includes(pacsSearchTerm.toLowerCase())
  );

  const registerDump = async () => {
    if (!newDumpName.trim() || !connectionStr.trim()) {
      alert("Please fill all dump fields.");
      return;
    }
    
    setIsRegistering(true);
    try {
      await axios.post(
        `${API_URL}client_dumps/${selectedClient!.client_id}/`,
        {
          dump_name: newDumpName,
          dump_date: dumpDate.toISOString().split("T")[0],
          source_db_config: { connection_str: connectionStr },
        }
      );
      setRegisterMessage("✅ Dump registered successfully.");
      setNewDumpName("");
      setConnectionStr("");
      setDumpDate(new Date());
      fetchDumps(selectedClient!.client_id);
    } catch {
      setRegisterMessage("❌ Error registering dump. Please try again.");
    } finally {
      setIsRegistering(false);
    }
  };

  const handleCsvChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setCsvFile(e.target.files[0]);
    }
  };

  const handleTableCsvChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setTableCsvFile(e.target.files[0]);
    }
  };

  const handlePhiConfigCsvChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setPhiConfigCsvFile(e.target.files[0]);
    }
  };

  const updateDumpDetails = async () => {
    if (!csvFile) {
      alert("Please select a CSV file.");
      return;
    }
    let parsed;
    try {
      parsed = {
        pii_config: JSON.parse(piiConfig),
        secondary_config: JSON.parse(secondaryConfig),
        global_config: JSON.parse(globalConfig),
      };
    } catch {
      alert("Invalid JSON in one of the config fields.");
      return;
    }

    setUpdateLoading(true);
    const formData = new FormData();
    formData.append("file", csvFile);
    formData.append("data", JSON.stringify(parsed));

    try {
      await axios.post(
        `${API_URL}dump_details/${selectedClient!.client_id}/${selectedDumpId}/?file=null`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setUpdateMessage("✅ Details uploaded successfully.");
    } catch {
      setUpdateMessage("❌ Failed to upload details.");
    } finally {
      setUpdateLoading(false);
    }
  };

  const proceedToTables = () => {
    if (selectedClient && selectedDumpId) {
      router.push(
        `/clients/${selectedClient.client_id}/dumps/${selectedDumpId}/phi_tables`
      );
    }
  };

  const processCsvFiles = async () => {
    if (!processName.trim() || !tableCsvFile || !phiConfigCsvFile) {
      alert("Please fill in the process name and select both CSV files.");
      return;
    }

    setProcessCsvLoading(true);
    try {
      const formData = new FormData();
      formData.append("process_name", processName);
      formData.append("table_csv", tableCsvFile);
      formData.append("phi_config_csv", phiConfigCsvFile);

      // You can replace this with your actual API endpoint
      await axios.post(
        `${API_URL}process_csv/${selectedClient?.client_id}/`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      
      setProcessCsvMessage("✅ CSV files processed successfully!");
      setProcessName("");
      setTableCsvFile(null);
      setPhiConfigCsvFile(null);
    } catch (error) {
      console.error("Error processing CSV files:", error);
      setProcessCsvMessage("❌ Error processing CSV files. Please try again.");
    } finally {
      setProcessCsvLoading(false);
    }
  };


  return (
    <ClientsLayout>
      <div className="flex h-screen bg-gray-50">
        {/* Left Sidebar - Client List */}
        <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
          {/* Sidebar Header */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-lg font-semibold text-gray-900">Clients</h1>
          <button
            onClick={() => setShowClientModal(true)}
                className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                title="Add New Client"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
              </button>
            </div>
            <div className="flex gap-2">
              <button className="p-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
          </button>
            </div>
        </div>

          {/* Client List */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
          {clients.map((c) => (
            <div
              key={c.client_id}
              onClick={() => onClientCardClick(c)}
                  className={`p-3 rounded-lg cursor-pointer transition-all duration-200 ${
                    selectedClient?.client_id === c.client_id
                      ? 'bg-blue-50 border-2 border-blue-200'
                      : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold text-sm">
                      {c.client_name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">
                      {c.client_name}
                      </h3>
                    <p className="text-xs text-gray-500">ID: {c.client_id}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {clients.length === 0 && (
                <div className="text-center py-8">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">No clients yet</h3>
                  <p className="text-xs text-gray-500 mb-3">Get started by creating your first client</p>
                  <button
                    onClick={() => setShowClientModal(true)}
                    className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-xs"
                  >
                    Create First Client
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Panel - Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Top Navigation */}
          <div className="bg-white border-b border-gray-200 p-4">
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setShowDumpDropdown(!showDumpDropdown)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-all duration-200 font-medium flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Dumps
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setShowPacsDropdown(!showPacsDropdown)}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow-sm hover:bg-purple-700 transition-all duration-200 font-medium flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                PACS
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <button className="px-4 py-2 bg-orange-600 text-white rounded-lg shadow-sm hover:bg-orange-700 transition-all duration-200 font-medium flex items-center gap-2 text-sm opacity-50 cursor-not-allowed">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
                Take SQL Dump
                <span className="text-xs bg-orange-800 px-1.5 py-0.5 rounded">Coming Soon</span>
              </button>
              
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-sm hover:bg-indigo-700 transition-all duration-200 font-medium flex items-center gap-2 text-sm opacity-50 cursor-not-allowed">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                UDM
                <span className="text-xs bg-indigo-800 px-1.5 py-0.5 rounded">Coming Soon</span>
              </button>
              
              <button 
                onClick={() => setShowProcessCsvModal(true)}
                className="px-4 py-2 bg-teal-600 text-white rounded-lg shadow-sm hover:bg-teal-700 transition-all duration-200 font-medium flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Process CSV
              </button>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 p-6">
            {/* Dropdowns */}
            {showDumpDropdown && (
              <div ref={dumpDropdownRef} className="mb-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-md">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Select Dump</h3>
                <div className="space-y-3">
                  {/* Create New Dump Button */}
                  <button
                    onClick={() => {
                      setShowDumpDropdown(false);
                      setShowDumpModal(true);
                    }}
                    className="w-full text-left px-3 py-2 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create New Dump
                  </button>
                  
                  {/* Existing Dumps Section */}
                  {dumps.length > 0 && (
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-xs text-gray-500 font-medium">Existing Dumps ({dumps.length})</p>
                      </div>
                      
                      {/* Search Input */}
                      <div className="mb-3">
                        <input
                          type="text"
                          placeholder="Search dumps..."
                          value={dumpSearchTerm}
                          onChange={(e) => setDumpSearchTerm(e.target.value)}
                          className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
                        />
                      </div>
                      
                      {/* Dumps List */}
                      <div className="max-h-64 overflow-y-auto space-y-1">
                        {filteredDumps.length > 0 ? (
                          filteredDumps.map((dump) => (
                            <button
                              key={dump.dump_id}
                              onClick={() => {
                                setSelectedDumpId(dump.dump_id);
                                setShowDumpDropdown(false);
                                setDumpSearchTerm("");
                                if (selectedClient) {
                                  router.push(`/clients/${selectedClient.client_id}/dumps/${dump.dump_id}/phi_tables`);
                                }
                              }}
                              className="w-full text-left px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm flex items-center justify-between group"
                            >
                              <div className="flex-1 min-w-0">
                                <div className="font-medium truncate">{dump.dump_name}</div>
                                <div className="text-xs text-gray-500">{new Date(dump.dump_date).toLocaleDateString()}</div>
                              </div>
                              <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </button>
                          ))
                        ) : (
                          <div className="text-center py-4 text-gray-500">
                            <p className="text-sm">No dumps found</p>
                            <p className="text-xs">Try a different search term</p>
                          </div>
                        )}
                      </div>
                      
                      {/* Show count if filtered */}
                      {dumpSearchTerm && (
                        <div className="text-xs text-gray-400 mt-2 text-center">
                          Showing {filteredDumps.length} of {dumps.length} dumps
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}

            {showPacsDropdown && (
              <div ref={pacsDropdownRef} className="mb-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-md">
                <h3 className="text-sm font-medium text-gray-900 mb-3">Select PACS Client</h3>
                <div className="space-y-3">
                  {/* Create New PACS Client Button */}
                  <button
                    onClick={() => {
                      setShowPacsDropdown(false);
                      if (selectedClient) {
                        router.push(`/clients/${selectedClient.client_id}/pacs`);
                      }
                    }}
                    className="w-full text-left px-3 py-2 bg-purple-50 text-purple-700 rounded-lg hover:bg-purple-100 transition-colors text-sm font-medium flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Create New PACS Client
                  </button>
                  
                  {/* Existing PACS Clients Section */}
                  {selectedClient ? (
                    pacsClients.length > 0 ? (
                      <div className="border-t border-gray-200 pt-3">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-xs text-gray-500 font-medium">Existing PACS Clients ({pacsClients.length})</p>
                        </div>
                        
                        {/* Search Input */}
                        <div className="mb-3">
                          <input
                            type="text"
                            placeholder="Search PACS clients..."
                            value={pacsSearchTerm}
                            onChange={(e) => setPacsSearchTerm(e.target.value)}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-200"
                          />
                        </div>
                        
                        {/* PACS Clients List */}
                        <div className="max-h-64 overflow-y-auto space-y-1">
                          {filteredPacsClients.length > 0 ? (
                            filteredPacsClients.map((pacsClient) => (
                              <button
                                key={pacsClient.pacsclient_id || pacsClient.id}
                                onClick={() => {
                                  setShowPacsDropdown(false);
                                  setPacsSearchTerm("");
                                  router.push(`/clients/${selectedClient.client_id}/pacs/${pacsClient.pacsclient_id || pacsClient.id}`);
                                }}
                                className="w-full text-left px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm flex items-center justify-between group"
                              >
                                <div className="flex-1 min-w-0">
                                  <div className="font-medium truncate">
                                    {pacsClient.name || `PACS Client #${pacsClient.pacsclient_id || pacsClient.id}`}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {pacsClient.handler_type === 1 ? 'DIR_HANDLER' : `Type ${pacsClient.handler_type}`}
                                  </div>
                                </div>
                                <svg className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </button>
                            ))
                          ) : (
                            <div className="text-center py-4 text-gray-500">
                              <p className="text-sm">No PACS clients found</p>
                              <p className="text-xs">Try a different search term</p>
                            </div>
                          )}
                        </div>
                        
                        {/* Show count if filtered */}
                        {pacsSearchTerm && (
                          <div className="text-xs text-gray-400 mt-2 text-center">
                            Showing {filteredPacsClients.length} of {pacsClients.length} PACS clients
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-4 text-gray-500">
                        <p className="text-sm">No PACS clients registered for this client yet</p>
                        <p className="text-xs">Create your first PACS client above</p>
                      </div>
                    )
                  ) : (
                    <div className="text-center py-4 text-gray-500">
                      <p className="text-sm">Select a client first to manage PACS clients</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Main Content Display */}
            <div className="bg-white rounded-lg border border-gray-200 p-6 min-h-[400px]">
              {selectedClient ? (
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">
                    {selectedClient.client_name} - Client Details
                  </h2>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Client Information</h3>
                    <div className="space-y-2 text-sm">
                      <div><span className="font-medium">ID:</span> {selectedClient.client_id}</div>
                      <div><span className="font-medium">Name:</span> {selectedClient.client_name}</div>
                      <div><span className="font-medium">EMR Type:</span> {selectedClient.emr_type}</div>
                      <div><span className="font-medium">Created:</span> {new Date(selectedClient.created_at).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Client</h3>
                  <p className="text-sm text-gray-500">Choose a client from the left panel to view details and manage dumps</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {showClientModal && (
        <CreateClientModal
          onClose={() => setShowClientModal(false)}
          onCreated={() => {
            setShowClientModal(false);
            axios
              .get<Client[]>(`${API_URL}clients/`)
              .then((res) => {
                // Sort clients by created_at in descending order (newest first)
                const sortedClients = res.data.sort(
                  (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
                );
                setClients(sortedClients);
              })
              .catch(console.error);
          }}
        />
      )}

      {/** Register New Dump Modal **/}
      {showDumpModal && selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40 p-3">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Register New Dump
                  </h2>
                  <p className="text-xs text-gray-600 mt-1">
                    Create a new dump for {selectedClient.client_name}
                  </p>
                </div>
                <button
                  onClick={() => setShowDumpModal(false)}
                  className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dump Name
                  </label>
                  <input
                    value={newDumpName}
                    onChange={(e) => setNewDumpName(e.target.value)}
                    placeholder="Enter dump name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Dump Date
                  </label>
                  <DatePicker
                    selected={dumpDate}
                    onChange={(date) => date && setDumpDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Source DB Connection
                  </label>
                  <input
                    value={connectionStr}
                    onChange={(e) => setConnectionStr(e.target.value)}
                    placeholder="Enter database connection string"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                  />
                </div>
                
                <button
                  onClick={registerDump}
                  disabled={isRegistering || !newDumpName.trim() || !connectionStr.trim()}
                  className={clsx(
                    "w-full py-2 px-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2",
                    isRegistering || !newDumpName.trim() || !connectionStr.trim()
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-green-600 text-white hover:bg-green-700 shadow-sm hover:shadow-md"
                  )}
                >
                  {isRegistering ? (
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
                      Register Dump
                    </>
                  )}
                </button>
                
                {registerMessage && (
                  <div className={clsx(
                    "p-3 rounded-lg text-center font-medium text-sm",
                    registerMessage.startsWith("✅") 
                      ? "bg-green-50 text-green-700 border border-green-200" 
                      : "bg-red-50 text-red-700 border border-red-200"
                  )}>
                    {registerMessage}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/** Process CSV Modal **/}
      {showProcessCsvModal && selectedClient && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Process CSV Files
                  </h2>
                  <p className="text-xs text-gray-600 mt-1">
                    Upload table data and PHI configuration CSV files
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowProcessCsvModal(false);
                    setProcessCsvMessage("");
                    setProcessName("");
                    setTableCsvFile(null);
                    setPhiConfigCsvFile(null);
                  }}
                  className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              {/* Process Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Process Name *
                </label>
                <input
                  type="text"
                  value={processName}
                  onChange={(e) => setProcessName(e.target.value)}
                  placeholder="Enter process name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-all"
                />
              </div>

              {/* Table CSV File */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Table CSV File *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handleTableCsvChange}
                    className="hidden"
                    id="table-csv-upload"
                  />
                  <label htmlFor="table-csv-upload" className="cursor-pointer">
                    <svg className="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-sm text-gray-600">
                      {tableCsvFile ? tableCsvFile.name : "Click to upload table CSV file"}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Contains table data for processing</p>
                  </label>
                </div>
              </div>

              {/* PHI Config CSV File */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  PHI Config CSV File *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                  <input
                    type="file"
                    accept=".csv"
                    onChange={handlePhiConfigCsvChange}
                    className="hidden"
                    id="phi-config-csv-upload"
                  />
                  <label htmlFor="phi-config-csv-upload" className="cursor-pointer">
                    <svg className="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm text-gray-600">
                      {phiConfigCsvFile ? phiConfigCsvFile.name : "Click to upload PHI config CSV file"}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">Contains PHI configuration settings</p>
                  </label>
                </div>
              </div>

              {/* Process Button */}
              <button
                onClick={processCsvFiles}
                disabled={processCsvLoading || !processName.trim() || !tableCsvFile || !phiConfigCsvFile}
                className={clsx(
                  "w-full py-2 px-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2",
                  processCsvLoading || !processName.trim() || !tableCsvFile || !phiConfigCsvFile
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-teal-600 text-white hover:bg-teal-700 shadow-sm hover:shadow-md"
                )}
              >
                {processCsvLoading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Process CSV Files
                  </>
                )}
              </button>

              {/* Message */}
              {processCsvMessage && (
                <div className={clsx(
                  "p-3 rounded-lg text-center font-medium text-sm",
                  processCsvMessage.startsWith("✅") 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "bg-red-50 text-red-700 border border-red-200"
                )}>
                  {processCsvMessage}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/** ── Update Dump Modal ── **/}
      {showUpdateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 rounded-t-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-gray-900">
                  Update Dump #{selectedDumpId}
                </h2>
                <button
                  onClick={() => setShowUpdateModal(false)}
                  className="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="p-4 space-y-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Primary Key CSV
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                    <input
                      type="file"
                      accept=".csv"
                      onChange={handleCsvChange}
                      className="hidden"
                      id="csv-upload"
                    />
                    <label htmlFor="csv-upload" className="cursor-pointer">
                      <svg className="w-8 h-8 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-xs text-gray-600">
                        {csvFile ? csvFile.name : "Click to upload CSV file"}
                      </p>
                    </label>
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      PII Config (JSON)
                    </label>
                    <textarea
                      rows={3}
                      value={piiConfig}
                      onChange={(e) => setPiiConfig(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg font-mono text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Enter PII configuration JSON"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">
                      Secondary Config (JSON)
                    </label>
                    <textarea
                      rows={3}
                      value={secondaryConfig}
                      onChange={(e) => setSecondaryConfig(e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg font-mono text-xs focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                      placeholder="Enter secondary configuration JSON"
                    />
                  </div>
                </div>
              </div>

              {updateMessage && (
                <div className={clsx(
                  "p-3 rounded-lg text-center font-medium text-sm",
                  updateMessage.startsWith("✅") 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "bg-red-50 text-red-700 border border-red-200"
                )}>
                  {updateMessage}
                </div>
              )}

              <div className="flex flex-col sm:flex-row justify-end gap-3 pt-3 border-t border-gray-200">
                <button
                  onClick={() => setShowUpdateModal(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium text-sm"
                >
                  Cancel
                </button>
                <button
                  onClick={updateDumpDetails}
                  disabled={updateLoading || !csvFile}
                  className={clsx(
                    "px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 text-sm",
                    updateLoading || !csvFile
                      ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm hover:shadow-md"
                  )}
                >
                  {updateLoading ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Uploading...
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      Submit
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </ClientsLayout>
  );
}
