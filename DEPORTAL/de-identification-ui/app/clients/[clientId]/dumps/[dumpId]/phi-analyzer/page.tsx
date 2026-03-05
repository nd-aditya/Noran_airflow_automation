"use client";

import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { API_URL } from "@/app/api/Config";
import { useGet, usePost, usePut, useDelete } from "@/app/api/useApiHooks";
import { fetchWithAuthentication, getRequest } from "@/app/utils/apiService";
import { Spinner } from "@/app/components/Spinner";
import ModelConfigurationDropdown from "@/app/components/ModelConfigurationDropdown";

// ... (interfaces unchanged)

function normalizeIsPhi(val: string | boolean | undefined | null): "yes" | "no" {
  if (typeof val === "string") {
    if (val.toLowerCase() === "yes") return "yes";
    if (val.toLowerCase() === "no") return "no";
  }
  if (val === true) return "yes";
  if (val === false) return "no";
  return "no";
}

function Modal({
  open,
  onClose,
  children,
  title,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg max-w-5xl w-full max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="overflow-auto p-6 flex-1">{children}</div>
      </div>
    </div>
  );
}

// EditableCell component for inline editing
const EditableCell: React.FC<{
  value: string;
  type: 'select' | 'text';
  options?: { value: string; label: string }[];
  onSave: (newValue: string) => Promise<void>;
  placeholder?: string;
  multiline?: boolean;
}> = ({ value, type, options, onSave, placeholder, multiline = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async () => {
    if (editValue !== value) {
      setIsSaving(true);
      try {
        await onSave(editValue);
        setIsEditing(false);
      } catch (error) {
        console.error('Failed to save:', error);
        alert('Failed to save changes. Please try again.');
        setEditValue(value); // Reset to original value
      } finally {
        setIsSaving(false);
      }
    } else {
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setEditValue(value);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !multiline) {
      e.preventDefault();
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  if (!isEditing) {
    return (
      <div
        className="group cursor-pointer hover:bg-gray-50 rounded px-2 py-1 min-h-[32px] flex items-center"
        onClick={() => setIsEditing(true)}
        title="Click to edit"
      >
        <span className="flex-1">{value || placeholder || 'Click to edit...'}</span>
        <svg
          className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2">
      {type === 'select' && options ? (
        <select
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          autoFocus
        >
          {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : multiline ? (
        <textarea
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-y min-h-[60px]"
          placeholder={placeholder}
          autoFocus
        />
      ) : (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          placeholder={placeholder}
          autoFocus
        />
      )}
      <button
        onClick={handleSave}
        disabled={isSaving}
        className="px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700 disabled:bg-gray-400"
      >
        {isSaving ? '...' : '✓'}
      </button>
      <button
        onClick={handleCancel}
        className="px-2 py-1 bg-gray-600 text-white rounded text-xs hover:bg-gray-700"
      >
        ✕
      </button>
    </div>
  );
};

// --- Interfaces (moved above the component for module scope) ---
interface DumpDetails {
  dump_id: number;
  dump_name: string;
  source_db_config: {
    connection_str: string;
  };
  is_dump_processing_done: boolean;
  is_primary_key_uploaded: boolean;
  stats_generated_status: number;
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

// Backend returns is_phi as "yes" or "no"
interface PHIAnalysisResult {
  column_name: string;
  is_phi: string; // "yes" | "no"
  phi_rule: string;
  pipeline_remark?: string;
  user_remarks?: string;
  is_manually_verified?: boolean;
  verified_by?: string;
  verified_at?: string | null;
  // For table display
  table_name?: string;
}

interface PHITableResult {
  table_name: string;
  table_index: number;
  status: string;
  progress: number;
  total_columns: number;
  phi_columns: number;
  validation_passed: number;
  validation_failed: number;
  started_at: string | null;
  completed_at: string | null;
  error_message: string | null;
  retry_count: number;
  columns: PHIAnalysisResult[];
}

interface PHIAnalysisSession {
  session_id: number;
  client_id: number;
  client_name: string;
  dump_id: number;
  dump_name: string;
  status: string;
  progress: number;
  current_step: string;
  created_at: string;
  started_at: string | null;
  completed_at: string | null;
  duration: string | null;
  statistics: {
    total_tables: number;
    processed_tables: number;
    completed_tables: number;
    failed_tables: number;
    processing_tables: number;
    pending_tables: number;
    total_columns: number;
    phi_columns_found: number;
    validation_passed: number;
    validation_failed: number;
    errors_count: number;
  };
  output_file_path: string | null;
  error_message: string | null;
  progress_logs: Array<{
    step_name: string;
    progress_percentage: number;
    message: string;
    timestamp: string;
    details: any;
  }>;
  config: any;
  tables: PHITableResult[];
}

interface AnalysisConfig {
  model_name: string;
  temperature: number;
  max_token: number;
  sample_size: number;
}

interface ModelConfiguration {
  id: number;
  name: string;
  description: string;
  model_name: string;
  temperature: number;
  max_tokens: number;
  sample_size: number;
  is_default: boolean;
  is_active: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
}

// --- End interfaces ---

const PHIAnalyzerPage: React.FC = () => {
  const router = useRouter();
  const { clientId, dumpId } = useParams();
  const [selectedConfig, setSelectedConfig] = useState<ModelConfiguration | null>(null);

  // ... (state hooks unchanged)
  const [tableDataModal, setTableDataModal] = useState<{
    open: boolean;
    tableName: string | null;
    loading: boolean;
    error: string | null;
    data: any[] | null;
    columns: string[];
  }>({
    open: false,
    tableName: null,
    loading: false,
    error: null,
    data: null,
    columns: [],
  });

  // ... (API hooks and effects unchanged)

  // Table Data Modal logic
  const handleViewTableData = async (tableName: string) => {
    setTableDataModal({
      open: true,
      tableName,
      loading: true,
      error: null,
      data: null,
      columns: [],
    });
    try {
      const responseData = await getRequest<{rows: any[], table_name: string}>(
        `${API_URL}view_table_data/${clientId}/${dumpId}/${encodeURIComponent(tableName)}/?rows=50`
      );
      
      // Backend returns {rows: [...], table_name: "..."} format
      const rows = responseData.rows || [];
      let columns: string[] = [];
      if (Array.isArray(rows) && rows.length > 0) {
        columns = Object.keys(rows[0]);
      }
      
      setTableDataModal({
        open: true,
        tableName,
        loading: false,
        error: null,
        data: rows,
        columns,
      });
    } catch (error: any) {
      setTableDataModal({
        open: true,
        tableName,
        loading: false,
        error: error?.message || "Unknown error",
        data: null,
        columns: [],
      });
    }
  };

  const closeTableDataModal = () => {
    setTableDataModal({
      open: false,
      tableName: null,
      loading: false,
      error: null,
      data: null,
      columns: [],
    });
  };

  // Handle column update
  const handleUpdateColumn = async (
    sessionId: number,
    tableName: string,
    columnName: string,
    updates: Partial<PHIAnalysisResult>
  ) => {
    const updateKey = `${sessionId}-${tableName}-${columnName}`;
    setSavingChanges(prev => ({ ...prev, [updateKey]: true }));

    try {
      const response = await fetch(
        `${API_URL}phi_analyzer/sessions/${sessionId}/tables/${encodeURIComponent(tableName)}/columns/${encodeURIComponent(columnName)}/`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updates)
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update column: ${response.status}`);
      }

      const data = await response.json();

      // Update local results state
      setResults(prev => prev.map(result => {
        if (
          result.column_name === columnName &&
          (result as any).table_name === tableName
        ) {
          return {
            ...result,
            ...data.column
          };
        }
        return result;
      }));

      return data;
    } catch (error) {
      console.error('Failed to update column:', error);
      throw error;
    } finally {
      setSavingChanges(prev => ({ ...prev, [updateKey]: false }));
    }
  };

  // Handle table verification toggle
  const handleToggleTableVerification = async (tableName: string) => {
    if (!currentSession) return;

    const currentStatus = verificationStatus[tableName] || false;
    const newStatus = !currentStatus;

    try {
      const response = await fetch(
        `${API_URL}phi_analyzer/sessions/${currentSession.session_id}/tables/${encodeURIComponent(tableName)}/verification/`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            is_manually_verified: newStatus,
            verified_by: 'current_user' // You might want to get this from user context
          })
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to update verification: ${response.status}`);
      }

      // Update local verification status
      setVerificationStatus(prev => ({ ...prev, [tableName]: newStatus }));

      // Update results to reflect verification status
      setResults(prev => prev.map(result => {
        if ((result as any).table_name === tableName) {
          return {
            ...result,
            is_manually_verified: newStatus,
            verified_by: newStatus ? 'current_user' : '',
            verified_at: newStatus ? new Date().toISOString() : null
          };
        }
        return result;
      }));

    } catch (error) {
      console.error('Failed to toggle verification:', error);
      alert('Failed to update verification status. Please try again.');
    }
  };

  // Debug logging
  // console.log('PHIAnalyzerPage - selectedConfig:', selectedConfig);
  const [currentSession, setCurrentSession] = useState<PHIAnalysisSession | null>(null);
  const [results, setResults] = useState<PHIAnalysisResult[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [showFilters, setShowFilters] = useState(false);
  const [sessionHistory, setSessionHistory] = useState<PHIAnalysisSession[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [importFile, setImportFile] = useState<File | null>(null);
  const [selectedSessionId, setSelectedSessionId] = useState<number | null>(null);
  const [editingColumn, setEditingColumn] = useState<{
    sessionId: number;
    tableName: string;
    columnName: string;
    currentData: PHIAnalysisResult;
  } | null>(null);
  const [verificationStatus, setVerificationStatus] = useState<Record<string, boolean>>({});
  const [savingChanges, setSavingChanges] = useState<Record<string, boolean>>({});

  // Fetch client details
  const { data: clientDetails } = useGet<ClientDetails>(
    `${API_URL}client_details/${clientId}/`,
    { queryKey: ["client_details", clientId] }
  );

  // Fetch dump details
  const { data: dumpDetails } = useGet<DumpDetails>(
    `${API_URL}dump_details/${clientId}/${dumpId}/`,
    { queryKey: ["dump_details", clientId, dumpId] }
  );

  // Fetch session history
  const { data: historyData, refetch: refetchHistory } = useGet<{
    sessions: PHIAnalysisSession[];
    pagination: any;
  }>(
    `${API_URL}phi_analyzer/list/${clientId}/${dumpId}/`,
    {
      queryKey: ["phi_analysis_history", clientId, dumpId],
      enabled: showHistory
    }
  );

  // Update session history when data changes
  useEffect(() => {
    if (historyData?.sessions) {
      setSessionHistory(historyData.sessions);
    }
  }, [historyData]);

  // Load session history on component mount
  useEffect(() => {
    setShowHistory(true);
  }, []);

  // Model configuration API hooks
  const createConfigMutation = usePost(`${API_URL}phi_analyzer/configurations/`);
  const updateConfigMutation = usePut(({ id }: { id: number; data: any }) => `${API_URL}phi_analyzer/configurations/${id}/`);
  const deleteConfigMutation = useDelete((id: number) => `${API_URL}phi_analyzer/configurations/${id}/`);

  // Test CORS configuration
  const testCORS = async () => {
    try {
      const response = await fetch(`${API_URL}phi_analyzer/cors-test/`);
      const data = await response.json();
      console.log('CORS test successful:', data);
      alert('CORS test successful!');
    } catch (error) {
      console.error('CORS test failed:', error);
      alert('CORS test failed: ' + error);
    }
  };

  // Cleanup intervals on unmount
  useEffect(() => {
    return () => {
      // Cleanup any running intervals
      // Note: In a real app, you'd want to store interval IDs and clear them
    };
  }, []);

  const handleRunAnalyzer = async () => {
    if (!clientId || !dumpId || !selectedConfig) {
      alert('Please select a model configuration first');
      return;
    }

    setIsAnalyzing(true);
    try {
      const configData = {
        model_name: selectedConfig.model_name,
        temperature: selectedConfig.temperature,
        max_token: selectedConfig.max_tokens,
        sample_size: selectedConfig.sample_size
      };

      const response = await fetch(`${API_URL}phi_analyzer/run_analyzer/${clientId}/${dumpId}/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(configData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.session_id) {
        setCurrentSession({
          session_id: data.session_id,
          client_id: parseInt(clientId as string),
          client_name: clientDetails?.client_name || '',
          dump_id: parseInt(dumpId as string),
          dump_name: dumpDetails?.dump_name || '',
          status: data.status,
          progress: 0,
          current_step: 'Initializing',
          created_at: new Date().toISOString(),
          started_at: new Date().toISOString(),
          completed_at: null,
          duration: null,
          statistics: {
            total_tables: 0,
            processed_tables: 0,
            completed_tables: 0,
            failed_tables: 0,
            processing_tables: 0,
            pending_tables: 0,
            total_columns: 0,
            phi_columns_found: 0,
            validation_passed: 0,
            validation_failed: 0,
            errors_count: 0
          },
          output_file_path: null,
          error_message: null,
          progress_logs: [],
          config: selectedConfig,
          tables: []
        });

        // Start polling for status updates
        startStatusPolling(data.session_id);
      }
    } catch (error) {
      console.error("Failed to run PHI analyzer:", error);
      alert(`Failed to start PHI analysis: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const startStatusPolling = (sessionId: number) => {
    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch(`${API_URL}phi_analyzer/status/${sessionId}/`);

        if (response.ok) {
          const statusData = await response.json();
          setCurrentSession(prev => prev ? { ...prev, ...statusData } : null);

          // If analysis is completed or failed, stop polling
          if (statusData.status === 'completed' || statusData.status === 'failed') {
            clearInterval(pollInterval);
            if (statusData.status === 'completed') {
              // Fetch detailed results
              await fetchAnalysisResults(sessionId);
            } else if (statusData.status === 'failed') {
              console.error("PHI analysis failed:", statusData.error_message);
            }
          }
        } else {
          console.error("Failed to fetch status:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error polling status:", error);
        // Don't clear interval on network errors, keep trying
      }
    }, 2000); // Poll every 2 seconds

    // Store interval ID for cleanup
    return pollInterval;
  };

  const fetchAnalysisResults = async (sessionId: number) => {
    try {
      const response = await fetch(`${API_URL}phi_analyzer/results/${sessionId}/`);

      if (response.ok) {
        const resultsData = await response.json();
        setCurrentSession(prev => prev ? { ...prev, ...resultsData } : null);

        // Flatten all column results for display, normalizing is_phi
        const allColumns: PHIAnalysisResult[] = [];
        resultsData.tables?.forEach((table: PHITableResult) => {
          table.columns?.forEach((column: PHIAnalysisResult) => {
            allColumns.push({
              ...column,
              is_phi: normalizeIsPhi(column.is_phi),
              table_name: table.table_name,
              phi_rule: column.phi_rule ?? "",
              pipeline_remark: column.pipeline_remark ?? "",
              user_remarks: column.user_remarks ?? "",
              is_manually_verified: column.is_manually_verified ?? false,
              verified_by: column.verified_by ?? "",
              verified_at: column.verified_at ?? null
            });
          });
        });
        setResults(allColumns);

        // Update verification status tracking
        const newVerificationStatus: Record<string, boolean> = {};
        resultsData.tables?.forEach((table: PHITableResult) => {
          const hasVerifiedColumns = table.columns?.some(col => col.is_manually_verified);
          newVerificationStatus[table.table_name] = hasVerifiedColumns || false;
        });
        setVerificationStatus(newVerificationStatus);
      } else {
        console.error("Failed to fetch results:", response.status, response.statusText);
        alert("Failed to fetch analysis results. Please try refreshing the page.");
      }
    } catch (error) {
      console.error("Error fetching results:", error);
      alert("Error fetching analysis results. Please try again.");
    }
  };

  // Model configuration handlers
  const handleConfigCreate = async (config: Omit<ModelConfiguration, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      await createConfigMutation.mutateAsync(config);
    } catch (error) {
      console.error('Error creating configuration:', error);
      throw error;
    }
  };

  const handleConfigUpdate = async (id: number, config: Partial<ModelConfiguration>) => {
    try {
      await updateConfigMutation.mutateAsync({ id, data: config });
    } catch (error) {
      console.error('Error updating configuration:', error);
      throw error;
    }
  };

  const handleConfigDelete = async (id: number) => {
    try {
      await deleteConfigMutation.mutateAsync(id);
    } catch (error) {
      console.error('Error deleting configuration:', error);
      throw error;
    }
  };

  const handleConfigSetDefault = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}phi_analyzer/configurations/${id}/set-default/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to set default configuration');
      }
    } catch (error) {
      console.error('Error setting default configuration:', error);
      throw error;
    }
  };

  const handleConfigDuplicate = async (id: number) => {
    try {
      const response = await fetch(`${API_URL}phi_analyzer/configurations/${id}/duplicate/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        throw new Error('Failed to duplicate configuration');
      }
    } catch (error) {
      console.error('Error duplicating configuration:', error);
      throw error;
    }
  };

  const handleSessionSelect = async (sessionId: number) => {
    setSelectedSessionId(sessionId);

    // Find the session in history
    const session = sessionHistory.find(s => s.session_id === sessionId);
    if (session) {
      setCurrentSession(session);

      // If session is completed, fetch its results
      if (session.status === 'completed') {
        await fetchAnalysisResults(sessionId);
      } else {
        // Clear results if session is not completed
        setResults([]);
      }
    }
  };

  const filteredResults = useMemo(() => {
    return results.filter(result => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        if (!(result as any).table_name?.toLowerCase().includes(searchLower) &&
          !result.column_name.toLowerCase().includes(searchLower) &&
          !(result.phi_rule || "").toLowerCase().includes(searchLower) &&
          !(result.pipeline_remark || "").toLowerCase().includes(searchLower) &&
          !(result.user_remarks || "").toLowerCase().includes(searchLower)) {
          return false;
        }
      }

      // Column filters
      for (const [column, value] of Object.entries(filters)) {
        if (value) {
          if (column === "is_phi") {
            // Filter by "yes"/"no"
            if (normalizeIsPhi(result.is_phi) !== value) return false;
          } else if (column === "is_manually_verified") {
            // Filter by verification status
            const isVerified = result.is_manually_verified;
            const filterValue = value === "true";
            if (isVerified !== filterValue) return false;
          } else if (result[column as keyof PHIAnalysisResult]?.toString().toLowerCase() !== value.toLowerCase()) {
            return false;
          }
        }
      }

      return true;
    });
  }, [results, searchTerm, filters]);

  // Track displayed table names to show eye icon only once per table
  const displayedTableNames = useMemo(() => {
    const tableNames = new Set<string>();
    return filteredResults.map((result, index) => {
      const tableName = (result as any).table_name;
      const shouldShowIcon = tableName && tableName !== 'N/A' && !tableNames.has(tableName);
      if (shouldShowIcon) {
        tableNames.add(tableName);
      }
      return { ...result, shouldShowIcon, index };
    });
  }, [filteredResults]);

  const handleExport = () => {
    const csvContent = [
      "Table Name,Column,Is PHI,PHI Rule,Pipeline Remark,User Remarks,Manually Verified,Verified By,Verified At",
      ...displayedTableNames.map(result =>
        `"${(result as any).table_name || ''}","${result.column_name}","${normalizeIsPhi(result.is_phi)}","${result.phi_rule || ''}","${result.pipeline_remark || ''}","${result.user_remarks || ''}","${result.is_manually_verified ? 'Yes' : 'No'}","${result.verified_by || ''}","${result.verified_at || ''}"`
      )
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `phi_analysis_${dumpDetails?.dump_name || 'results'}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === 'text/csv') {
      setImportFile(file);
    } else {
      alert('Please select a valid CSV file');
    }
  };

  const handleImport = async () => {
    if (!importFile || !clientId || !dumpId) {
      alert('Please select a CSV file to import');
      return;
    }

    setIsImporting(true);
    try {
      const formData = new FormData();
      formData.append('csv_file', importFile);

      const response = await fetch(`${API_URL}phi_analyzer/import_csv/${clientId}/${dumpId}/`, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Create a new session object for the imported data
      const importedSession: PHIAnalysisSession = {
        session_id: data.session_id,
        client_id: parseInt(clientId as string),
        client_name: clientDetails?.client_name || '',
        dump_id: parseInt(dumpId as string),
        dump_name: dumpDetails?.dump_name || '',
        status: 'completed',
        progress: 100,
        current_step: 'Imported from CSV',
        created_at: new Date().toISOString(),
        started_at: new Date().toISOString(),
        completed_at: new Date().toISOString(),
        duration: null,
        statistics: data.statistics,
        output_file_path: null,
        error_message: null,
        progress_logs: [],
        config: { imported: true },
        tables: []
      };

      setCurrentSession(importedSession);

      // Fetch the imported results
      await fetchAnalysisResults(data.session_id);

      // Refresh session history
      if (refetchHistory) {
        refetchHistory();
      }

      alert(`CSV imported successfully! Found ${data.statistics.phi_columns_found} PHI columns across ${data.statistics.total_tables} tables.`);

    } catch (error) {
      console.error("Failed to import CSV:", error);
      alert(`Failed to import CSV: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
    } finally {
      setIsImporting(false);
      setImportFile(null);
      // Reset file input
      const fileInput = document.getElementById('csv-import-input') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    }
  };

  const uniqueValues = useMemo(() => {
    const values: Record<string, Set<string>> = {};
    results.forEach(result => {
      Object.keys(result).forEach(key => {
        if (!values[key]) values[key] = new Set();
        values[key].add(result[key as keyof PHIAnalysisResult]?.toString() || '');
      });
    });
    return values;
  }, [results]);

  if (!dumpDetails || !clientDetails) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-50 flex flex-col">
      {/* Fixed Header */}
      <div className="bg-white border-b border-gray-200 flex-shrink-0">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.back()}
                className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">PHI Analyzer</h1>
                <p className="text-sm text-gray-600">
                  {clientDetails.client_name} • {dumpDetails.dump_name}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="text-sm text-purple-600 hover:text-purple-800"
              >
                {showHistory ? 'Hide' : 'Show'} History
              </button>
              <ModelConfigurationDropdown
                selectedConfig={selectedConfig}
                onConfigSelect={setSelectedConfig}
                onConfigCreate={handleConfigCreate}
                onConfigUpdate={handleConfigUpdate}
                onConfigDelete={handleConfigDelete}
                onConfigSetDefault={handleConfigSetDefault}
                onConfigDuplicate={handleConfigDuplicate}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scrollable Content Area */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Fixed Search and Export Bar */}
        <div className="bg-white border-b border-gray-200 p-4 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Search table names, columns, PHI rules..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
              </button>
              {selectedConfig && (
                <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Config: {selectedConfig.name}</span>
                </div>
              )}
            </div>
            <button
              onClick={handleRunAnalyzer}
              disabled={isAnalyzing || !selectedConfig}
              className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed transition-colors duration-200 mr-3"
              title={!selectedConfig ? "Please select a model configuration first" : "Run PHI analysis"}
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Analyzing...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Run Analyzer
                </>
              )}
            </button>
            <button
              onClick={() => document.getElementById('csv-import-input')?.click()}
              disabled={isImporting}
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 mr-3"
            >
              {isImporting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Importing...
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                  Import
                </>
              )}
            </button>
            <input
              id="csv-import-input"
              type="file"
              accept=".csv"
              onChange={handleFileSelect}
              className="hidden"
            />
            {importFile && (
              <button
                onClick={handleImport}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 mr-3"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Confirm Import
              </button>
            )}
            <button
              onClick={handleExport}
              disabled={displayedTableNames.length === 0}
              className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export
            </button>
          </div>

          {/* File Selection Indicator */}
          {importFile && (
            <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm text-blue-700">
                    Selected file: <strong>{importFile.name}</strong> ({(importFile.size / 1024).toFixed(1)} KB)
                  </span>
                </div>
                <button
                  onClick={() => {
                    setImportFile(null);
                    const fileInput = document.getElementById('csv-import-input') as HTMLInputElement;
                    if (fileInput) fileInput.value = '';
                  }}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Is PHI</label>
                  <select
                    value={filters.is_phi || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, is_phi: e.target.value }))}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="">All</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">PHI Rule</label>
                  <select
                    value={filters.phi_rule || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, phi_rule: e.target.value }))}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="">All</option>
                    {Array.from(uniqueValues.phi_rule || []).map(value => (
                      <option key={value} value={value}>{value}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Table Name</label>
                  <select
                    value={filters.table_name || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, table_name: e.target.value }))}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="">All</option>
                    {Array.from(uniqueValues.table_name || []).map(value => (
                      <option key={value} value={value}>{value}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Verification Status</label>
                  <select
                    value={filters.is_manually_verified || ''}
                    onChange={(e) => setFilters(prev => ({ ...prev, is_manually_verified: e.target.value }))}
                    className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-purple-500"
                  >
                    <option value="">All</option>
                    <option value="true">Verified</option>
                    <option value="false">Not Verified</option>
                  </select>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <button
                  onClick={() => setFilters({})}
                  className="px-3 py-1 text-sm text-gray-600 hover:text-gray-900"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Fixed Session Status */}
        {currentSession && (
          <div className="bg-white border-b border-gray-200 p-4 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Status:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    currentSession.status === 'completed' ? 'bg-green-100 text-green-800' :
                      currentSession.status === 'failed' ? 'bg-red-100 text-red-800' :
                        currentSession.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                          'bg-yellow-100 text-yellow-800'
                  }`}>
                    {currentSession.status}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Progress:</span>
                  <span className="text-sm text-gray-900">{currentSession.progress}%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Step:</span>
                  <span className="text-sm text-gray-900">{currentSession.current_step}</span>
                </div>
                {currentSession.statistics && (
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>Tables: {currentSession.statistics.processed_tables}/{currentSession.statistics.total_tables}</span>
                    <span>PHI Columns: {currentSession.statistics.phi_columns_found}</span>
                  </div>
                )}
              </div>
              {currentSession.status === 'processing' && (
                <div className="w-48">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${currentSession.progress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Fixed Session History */}
        {showHistory && sessionHistory.length > 0 && (
          <div className="bg-white border-b border-gray-200 p-4 flex-shrink-0">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Recent Sessions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {sessionHistory.slice(0, 6).map((session) => (
                <div
                  key={session.session_id}
                  onClick={() => handleSessionSelect(session.session_id)}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors duration-200 ${
                    selectedSessionId === session.session_id
                      ? 'bg-purple-50 border-purple-300'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-sm">Session {session.session_id}</span>
                    <span className={`px-2 py-1 rounded text-xs ${
                      session.status === 'completed' ? 'bg-green-100 text-green-800' :
                        session.status === 'failed' ? 'bg-red-100 text-red-800' :
                          'bg-yellow-100 text-yellow-800'
                    }`}>
                      {session.status}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500">
                    {new Date(session.created_at).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Scrollable Results Table */}
        <div className="flex-1 overflow-auto">
          {displayedTableNames.length === 0 ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <svg className="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-gray-500">No results to display. Run the analyzer to see PHI analysis results.</p>
              </div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="w-32 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Table Name
                    </th>
                    <th className="w-32 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Column
                    </th>
                    <th className="w-20 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Is PHI
                    </th>
                    <th className="w-28 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PHI Rule
                    </th>
                    <th className="w-48 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Pipeline Remark
                    </th>
                    <th className="w-48 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      User Remarks
                    </th>
                    <th className="w-32 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Manual Verification
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {displayedTableNames.map((result, index) => {
                    const tableName = (result as any).table_name;
                    const isTableVerified = verificationStatus[tableName] || result.is_manually_verified;
                    
                    return (
                      <tr key={result.index} className="hover:bg-gray-50">
                        <td className="w-32 px-3 py-3 text-sm font-medium text-gray-900">
                          <div className="flex items-center space-x-1">
                            <span className="truncate" title={tableName || 'N/A'}>{tableName || 'N/A'}</span>
                            {result.shouldShowIcon && (
                              <>
                                <button
                                  onClick={() => handleViewTableData(tableName)}
                                  className="text-gray-400 hover:text-blue-600 transition-colors duration-200 flex-shrink-0"
                                  title={`View data for table: ${tableName}`}
                                >
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                  </svg>
                                </button>
                                <button
                                  onClick={() => handleToggleTableVerification(tableName)}
                                  className={`transition-colors duration-200 flex-shrink-0 ${
                                    isTableVerified 
                                      ? 'text-green-600 hover:text-green-800' 
                                      : 'text-gray-400 hover:text-blue-600'
                                  }`}
                                  title={`${isTableVerified ? 'Remove' : 'Mark'} manual verification for table: ${tableName}`}
                                >
                                  <svg className="w-3 h-3" fill={isTableVerified ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                  </svg>
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                        <td className="w-32 px-3 py-3 text-sm text-gray-900">
                          <span className="truncate block" title={result.column_name}>{result.column_name}</span>
                        </td>
                        <td className="w-20 px-3 py-3">
                          {currentSession ? (
                            <EditableCell
                              value={normalizeIsPhi(result.is_phi)}
                              type="select"
                              options={[
                                { value: 'yes', label: 'Yes' },
                                { value: 'no', label: 'No' },
                                { value: 'unknown', label: 'Unknown' }
                              ]}
                              onSave={async (newValue) => {
                                await handleUpdateColumn(
                                  currentSession.session_id,
                                  tableName,
                                  result.column_name,
                                  { is_phi: newValue }
                                );
                              }}
                            />
                          ) : (
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                              normalizeIsPhi(result.is_phi) === "yes"
                                ? 'bg-red-100 text-red-800'
                                : 'bg-green-100 text-green-800'
                            }`}>
                              {normalizeIsPhi(result.is_phi) === "yes" ? 'Yes' : 'No'}
                            </span>
                          )}
                        </td>
                        <td className="w-28 px-3 py-3 text-sm text-gray-900">
                          {currentSession ? (
                            <EditableCell
                              value={result.phi_rule || ''}
                              type="text"
                              placeholder="Enter PHI rule..."
                              onSave={async (newValue) => {
                                await handleUpdateColumn(
                                  currentSession.session_id,
                                  tableName,
                                  result.column_name,
                                  { phi_rule: newValue }
                                );
                              }}
                            />
                          ) : (
                            <span className="break-words" title={result.phi_rule || 'N/A'}>{result.phi_rule || 'N/A'}</span>
                          )}
                        </td>
                        <td className="w-48 px-3 py-3 text-sm text-gray-900">
                          <div className="break-words" title={result.pipeline_remark || 'N/A'}>
                            {result.pipeline_remark || 'N/A'}
                          </div>
                        </td>
                        <td className="w-48 px-3 py-3 text-sm text-gray-900">
                          {currentSession ? (
                            <EditableCell
                              value={result.user_remarks || ''}
                              type="text"
                              placeholder="Add user remarks..."
                              multiline={true}
                              onSave={async (newValue) => {
                                await handleUpdateColumn(
                                  currentSession.session_id,
                                  tableName,
                                  result.column_name,
                                  { user_remarks: newValue }
                                );
                              }}
                            />
                          ) : (
                            <div className="break-words" title={result.user_remarks || 'N/A'}>
                              {result.user_remarks || 'N/A'}
                            </div>
                          )}
                        </td>
                        <td className="w-32 px-3 py-3 text-sm text-gray-900">
                          <div className="flex flex-col space-y-1">
                            <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                              result.is_manually_verified 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {result.is_manually_verified ? 'Verified' : 'Not Verified'}
                            </span>
                            {result.verified_by && (
                              <span className="text-xs text-gray-500 truncate" title={`by ${result.verified_by}`}>
                                by {result.verified_by}
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Fixed Results Summary */}
        {displayedTableNames.length > 0 && (
          <div className="bg-white border-t border-gray-200 px-6 py-3 flex-shrink-0">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>
                Showing {displayedTableNames.length} of {results.length} results
              </span>
              <div className="flex items-center space-x-4">
                <span>
                  PHI Detected: {displayedTableNames.filter(r => normalizeIsPhi(r.is_phi) === "yes").length}
                </span>
                <span>
                  Non-PHI: {displayedTableNames.filter(r => normalizeIsPhi(r.is_phi) === "no").length}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Table Data Modal */}
      <Modal
        open={tableDataModal.open}
        onClose={closeTableDataModal}
        title={`Table Data: ${tableDataModal.tableName}`}
      >
        {tableDataModal.loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
              <span className="text-gray-600">Loading table data...</span>
            </div>
          </div>
        ) : tableDataModal.error ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-red-600 mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Table Data</h3>
              <p className="text-gray-600">{tableDataModal.error}</p>
              <button
                onClick={() => handleViewTableData(tableDataModal.tableName!)}
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Retry
              </button>
            </div>
          </div>
        ) : tableDataModal.data && tableDataModal.data.length > 0 ? (
          <div className="space-y-4">
            <div className="text-sm text-gray-600">
              Showing sample data from <strong>{tableDataModal.tableName}</strong> table ({tableDataModal.data.length} rows of up to 50)
            </div>
            <div className="overflow-auto max-h-96">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    {tableDataModal.columns.map((column, index) => (
                      <th
                        key={index}
                        className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {tableDataModal.data.map((row, rowIndex) => (
                    <tr key={rowIndex} className="hover:bg-gray-50">
                      {tableDataModal.columns.map((column, colIndex) => (
                        <td
                          key={colIndex}
                          className="px-4 py-2 text-sm text-gray-900 max-w-xs truncate"
                          title={String(row[column] || '')}
                        >
                          {String(row[column] || '')}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <div className="text-gray-400 mb-2">
                <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m8 0V4.5" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Data Found</h3>
              <p className="text-gray-600">The table appears to be empty or no data was returned.</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default PHIAnalyzerPage;
