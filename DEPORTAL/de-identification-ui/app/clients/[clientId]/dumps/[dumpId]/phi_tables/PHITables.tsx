// File: app/clients/[clientId]/dumps/[dumpId]/page.tsx
"use client";

import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import { AiOutlineImport } from "react-icons/ai";
import { FiDownload } from "react-icons/fi";
import { CiPlay1, CiViewTable, CiUndo } from "react-icons/ci";
import ActionButton from "@/app/components/common/ActionButton";
import ImportConfigModal from "./components/ImportConfigModal";
import PrimaryKeyConfigModal from "./components/PrimaryKeyConfigModal";
// import TableListCard from "./components/TableListCard";
import TablesProgressCard from "./components/TablesProgressCard";
import { useGet } from "@/app/api/useApiHooks";
import { fetchWithAuthentication, getRequest } from "@/app/utils/apiService";
import { useParams } from "next/navigation";
import { TableListCard } from "./components/TableListCard";
import BulkTableOperationsModal from "./components/BulkTableOperationsModal";
import clsx from "clsx";
import { useRouter } from "next/navigation";


import { API_URL } from "@/app/api/Config";

interface DumpDetails {
  dump_id: number;
  dump_name: string;
  source_db_config: {
    connection_str: string;
  };
  is_dump_processing_done: boolean;
  is_primary_key_uploaded: boolean;
  stats_generated_status: number;
  tables_deid_status: {
    not_started: { count: number };
    in_progress: { count: number };
    completed: { count: number };
    failed: { count: number };
  };
}

interface ClientDetails {
  client_id: number;
  client_name: string;
  emr_type: string;
  config: any;
  mapping_db_config: any;
  master_db_config: any;
  client_presetup_config_configured: boolean;
  created_at: string;
}

export interface TableInfoRaw {
  table_name: string;
  table_id: number;
  deid: {
    status: number;
    remarks: any;
  };
  qc: {
    status: number;
    remarks: any;
  };
  gcp: {
    status: number;
    remarks: any;
  };
  embd: {
    status: number;
    remarks: any;
  };
  is_phi_marking_done?: boolean;
  embedding_status?: number;
  is_cloud_moved?: number;
}

type StepKey = "deid" | "qc" | "gcp" | "embd";



export default function PHITablesPage() {
  const router = useRouter();
  const { clientId, dumpId } = useParams();
  const [activeTab, setActiveTab] = useState<"tables" | "progress">("tables");
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [isPrimaryKeyConfigOpen, setIsPrimaryKeyConfigOpen] = useState(false);
  const [isTableConfigOpen, setIsTableConfigOpen] = useState(false);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [dumpDetails, setDumpDetails] = useState<DumpDetails | null>(null);
  const [clientDetails, setClientDetails] = useState<ClientDetails | null>(null);
  const [isRefreshingSourceDb, setIsRefreshingSourceDb] = useState(false);

  // Fetch client details
  const { data: cd } = useGet<ClientDetails>(
    `${API_URL}client_details/${clientId}/`,
    { queryKey: ["client_details", clientId] }
  );

  // Fetch dump details
  const { data: dd } = useGet<DumpDetails>(
    `${API_URL}dump_details/${clientId}/${dumpId}/`,
    { queryKey: ["dump_details", clientId, dumpId] }
  );

  // Fetch tables
  const { data: tablesData = [] } = useGet<TableInfoRaw[]>(
    `${API_URL}get_tables/${clientId}/${dumpId}/`,
    { queryKey: ["get_tables", clientId, dumpId] }
  );


  useEffect(() => {
    if (cd) setClientDetails(cd);
  }, [cd]);

  useEffect(() => {
    if (dd) setDumpDetails(dd);
  }, [dd]);

  // Compute per-step counts
  useMemo(() => {
    const out: Record<StepKey, { completed: number; total: number }> = {
      deid: { completed: 0, total: tablesData.length },
      qc: { completed: 0, total: tablesData.length },
      gcp: { completed: 0, total: tablesData.length },
      embd: { completed: 0, total: tablesData.length },
    };
    tablesData.forEach((t) => {
      if (t.deid.status === 2) out.deid.completed++;
      if (t.qc.status === 2) out.qc.completed++;
      if (t.gcp.status === 2) out.gcp.completed++;
      if (t.embd.status === 2) out.embd.completed++;
    });
    return out;
  }, [tablesData]);

  // Button state logic
  const canStartDeIdentification = useMemo(() => {
    return clientDetails?.client_presetup_config_configured &&
      dumpDetails?.is_dump_processing_done &&
      dumpDetails?.is_primary_key_uploaded;
  }, [clientDetails, dumpDetails]);

  const canStartDumpProcessing = useMemo(() => {
    return clientDetails?.client_presetup_config_configured &&
      dumpDetails?.is_primary_key_uploaded;
  }, [clientDetails, dumpDetails]);

  // Get button disabled reason
  const getDeIdentificationDisabledReason = () => {
    if (!clientDetails?.client_presetup_config_configured) {
      return "Client presetup configuration is not complete";
    }
    if (!dumpDetails?.is_dump_processing_done) {
      return "Dump processing is not complete";
    }
    if (!dumpDetails?.is_primary_key_uploaded) {
      return "Primary key configuration is not uploaded";
    }
    return "";
  };

  const getDumpProcessingDisabledReason = () => {
    if (!clientDetails?.client_presetup_config_configured) {
      return "Client presetup configuration is not complete";
    }
    if (!dumpDetails?.is_primary_key_uploaded) {
      return "Primary key configuration is not uploaded";
    }
    return "";
  };

  // Action handlers
  const {
    isLoading: isProcessing,
    refetch: startProcessing,
  } = useGet<DumpDetails>(
    `${API_URL}start_whole_identification/${clientId}/${dumpId}/`,
    {
      queryKey: ["start_whole_identification", clientId, dumpId],
      enabled: false,
    }
  );

  const {
    isLoading: isProcessingDump,
    refetch: startDumpProcessing,
  } = useGet<DumpDetails>(
    `${API_URL}start_dump_processing/${clientId}/${dumpId}/`,
    {
      queryKey: ["start_dump_processing", clientId, dumpId],
      enabled: false,
    }
  );

  // Use previous config API
  const {
    isLoading: isReusingConfig,
    refetch: reuseTableConfig,
  } = useGet<any>(
    `${API_URL}reuse_table_config/${clientId}/${dumpId}/`,
    {
      queryKey: ["reuse_table_config", clientId, dumpId],
      enabled: false,
    }
  );

  // 2. Handler just calls the refetch
  const handleStartProcessing = () => {
    startProcessing();
  };

  const handleStartDumpProcessing = () => {
    startDumpProcessing();
  };


  const downloadConfig = async () => {
    try {
      const url = await fetchWithAuthentication(`${API_URL}download_config_as_csv/${clientId}/${dumpId}/`);
      const a = document.createElement("a");
      a.href = url;
      a.download = `config_${dumpDetails!.dump_id}.csv`;
      a.click();
    } catch { /*…*/ }
  };

  const handleRefreshSourceDb = async () => {
    if (!clientId || !dumpId) return;
    
    setIsRefreshingSourceDb(true);
    try {
      await getRequest(`${API_URL}refresh_source_db/${clientId}/${dumpId}/`);
      // You might want to show a success message or refresh data here
      console.log("Source database refreshed successfully");
    } catch (error) {
      console.error("Failed to refresh source database:", error);
    } finally {
      setIsRefreshingSourceDb(false);
    }
  };



  if (!dumpDetails || !clientDetails) return <div className="p-6 text-center">Loading…</div>;

  return (
    <div className="mx-auto p-6 space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-3 text-sm text-gray-600 mb-6">
        <Link
          href="/clients"
          className="hover:text-indigo-600 transition-colors duration-200 flex items-center group"
        >
          <div className="p-1.5 rounded-md bg-gray-100 group-hover:bg-indigo-100 transition-colors duration-200 mr-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <span className="font-medium">Clients</span>
        </Link>
        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <Link
          href={`/clients/${clientId}`}
          className="hover:text-indigo-600 transition-colors duration-200 flex items-center group"
        >
          <div className="p-1.5 rounded-md bg-gray-100 group-hover:bg-indigo-100 transition-colors duration-200 mr-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <span className="font-medium">{clientDetails?.client_name || 'Client'}</span>
        </Link>
        <svg className="w-5 h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <div className="flex items-center">
          <div className="p-1.5 rounded-md bg-indigo-100 mr-2">
            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8-4" />
            </svg>
          </div>
          <span className="text-indigo-700 font-semibold">{dumpDetails.dump_name}</span>
        </div>
      </nav>

      {/* Header */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
        {/* Title and Main Actions */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-gray-900">{dumpDetails.dump_name}</h1>
            <div className="flex items-center space-x-6 text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs font-medium">Client: {clientDetails?.client_name || 'Client'}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-medium">Dump ID: #{dumpDetails.dump_id}</span>
              </div>
            </div>
          </div>

          {/* Primary Actions */}
          <div className="flex-shrink-0 flex items-center gap-3">
            {/* PHI Analyzer Button */}
            <button
              onClick={() => router.push(`/clients/${clientId}/dumps/${dumpId}/phi-analyzer`)}
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium"
              title="Analyze PHI data with AI-powered tools"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              PHI Analyzer
            </button>

            {/* Bulk Operations Button */}
            <button
              onClick={() => setIsBulkModalOpen(true)}
              className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
              title="Paste comma-separated table names to perform bulk operations"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Bulk Operations
            </button>

            {/* Refresh Source Db Button */}
            <button
              onClick={handleRefreshSourceDb}
              disabled={isRefreshingSourceDb}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200 text-sm font-medium"
            >
              {isRefreshingSourceDb ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Refreshing...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Refresh Source Db
                </>
              )}
            </button>

            {/* Start De-Identification Button */}
            <button
              onClick={handleStartProcessing}
              disabled={isProcessing || !canStartDeIdentification}
              className="flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-sm transform hover:scale-105 disabled:transform-none relative group"
              title={!canStartDeIdentification ? getDeIdentificationDisabledReason() : ""}
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  <CiPlay1 className="mr-2 text-base" /> Start De-Identification
                </>
              )}

              {/* Disabled reason tooltip */}
              {!canStartDeIdentification && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                  {getDeIdentificationDisabledReason()}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Configuration Status */}
        {clientDetails && dumpDetails && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Configuration Status</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${clientDetails.client_presetup_config_configured ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <div>
                  <p className="text-xs font-medium text-gray-900">Client Setup</p>
                  <p className="text-xs text-gray-500">
                    {clientDetails.client_presetup_config_configured ? 'Complete' : 'Incomplete'}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${dumpDetails.is_dump_processing_done ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                <div>
                  <p className="text-xs font-medium text-gray-900">Dump Processing</p>
                  <p className="text-xs text-gray-500">
                    {dumpDetails.is_dump_processing_done ? 'Complete' : 'In Progress'}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${dumpDetails.is_primary_key_uploaded ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <div>
                  <p className="text-xs font-medium text-gray-900">Primary Keys</p>
                  <p className="text-xs text-gray-500">
                    {dumpDetails.is_primary_key_uploaded ? 'Uploaded' : 'Not Uploaded'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Configuration Actions */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Configuration</h3>
            <div className="flex flex-wrap gap-2">
              <ActionButton
                onClick={() => setIsPrimaryKeyConfigOpen(true)}
                variant="info"
                size="sm"
                icon={<AiOutlineImport className="w-3 h-3 text-blue-600" />}
              >
                Primary Key Config
              </ActionButton>
            </div>
          </div>

          {/* Processing Actions */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Processing</h3>
            <div className="flex flex-wrap gap-2">
              <ActionButton
                onClick={handleStartDumpProcessing}
                disabled={isProcessingDump || !canStartDumpProcessing}
                variant="grey"
                size="sm"
                icon={<CiPlay1 className="w-3 h-3 text-white" />}
                title={!canStartDumpProcessing ? getDumpProcessingDisabledReason() : ""}
              >
                Start Dump Processing
              </ActionButton>
            </div>
          </div>

          {/* Management Actions */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Management</h3>
            <div className="flex flex-wrap gap-2">
              <ActionButton
                onClick={() => {
                  if (dumpId) {
                    router.push(`/clients/${clientId}/dumps/${dumpId}/configure`);
                  }
                }}
                disabled={!dumpId}
                variant={dumpId ? "info" : "secondary"}
                size="sm"
                icon={
                  <svg className="w-4 h-4 text-current" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                }
              >
                Update Client
              </ActionButton>

              {/* Table Config Dropdown */}
              <div className="relative inline-block text-left">
                <ActionButton
                  onClick={() => setIsTableConfigOpen((v) => !v)}
                  variant="warning"
                  size="sm"
                  icon={<CiViewTable className="w-4 h-4 text-gray-700" />}
                >
                  Table Config
                </ActionButton>
                {isTableConfigOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20">
                    <div className="py-1">
                      <button
                        className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                        onClick={() => { setIsImportOpen(true); setIsTableConfigOpen(false); }}
                      >
                        <AiOutlineImport className="w-4 h-4" /> Import Config
                      </button>
                      <button
                        className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                        onClick={() => { downloadConfig(); setIsTableConfigOpen(false); }}
                      >
                        <FiDownload className="w-4 h-4" /> Download Config
                      </button>
                      <button
                        className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 disabled:opacity-50"
                        onClick={() => { reuseTableConfig(); setIsTableConfigOpen(false); }}
                        disabled={isReusingConfig}
                      >
                        <CiUndo className="w-4 h-4" /> Use Previous Config
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b">
        <TabButton active={activeTab === "tables"} onClick={() => setActiveTab("tables")} icon={<CiViewTable />}>
          <span className="text-sm">Tables</span>
        </TabButton>
        <TabButton active={activeTab === "progress"} onClick={() => setActiveTab("progress")}>
          <span className="text-sm">Progress</span>
        </TabButton>
      </div>

      {/* Tab Content */}
      <div className="pt-6">
        {activeTab === "tables" ? (
          <TableListCard 
            tablesData={tablesData} 
            clientId={clientId as string} 
            selectedDumpId={dumpId as string}
            clientDetails={clientDetails}
            dumpDetails={dumpDetails}
          />
        ) : (
          <TablesProgressCard tablesData={tablesData} />
        )}
      </div>

      <ImportConfigModal
        isOpen={isImportOpen}
        dumpId={dumpId as string}
        clientId={clientId as string}
        onClose={() => setIsImportOpen(false)}
      />

      <PrimaryKeyConfigModal
        isOpen={isPrimaryKeyConfigOpen}
        clientId={clientId as string}
        dumpId={dumpId as string}
        onClose={() => setIsPrimaryKeyConfigOpen(false)}
      />

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

function TabButton({
  active,
  onClick,
  children,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center gap-1 px-4 py-2 font-medium transition text-sm",
        active
          ? "border-b-2 border-indigo-600 text-indigo-600"
          : "text-gray-600 hover:text-gray-800"
      )}
    >
      {icon} {children}
    </button>
  );
}