// File: app/clients/[clientId]/dumps/[dumpId]/configure/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { API_URL } from "@/app/api/Config";
import { useParams, useRouter } from "next/navigation";
import clsx from "clsx";
import ClientsLayout from "@/app/components/layout/ClientsLayout";
import { Spinner } from "@/app/components/Spinner";
import SearchableSelect from "@/app/components/common/SearchableSelect";
import { DumpConfigStep } from "./components/DumpConfigStep";
import { StepSwitcher } from "./components/StepSwitcher";
import { TableColumnsManager } from "./components/TableColumnsManager";

const API_ROOT = API_URL;
const CONFIG_ENDPOINT = (clientId: string, dumpId: string) =>
  `${API_ROOT}configuration/${clientId}/${dumpId}/`;

const tabBtn = (active: boolean) =>
  clsx(
    "px-3 py-1.5 rounded-md text-sm font-medium",
    active ? "bg-white border text-blue-700" : "text-gray-600 hover:text-gray-800"
  );

// ---------- tiny subcomponents ----------
function StepPill({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <span
      className={clsx(
        "px-2 py-1 rounded text-xs font-medium",
        active ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
      )}
    >
      {children}
    </span>
  );
}

type TableInfo = { table_id: number; table_name: string; columns: string[] };
type Schema = { patient_identifier_columns: string[]; tables_info: TableInfo[] };

type ConfigurationResponse = {
  client_config: {
    master_config: {
      pii_schema_name: string;
      pii_tables: {
        [key: string]: {
          table_columns?: string[];
          source_tables: Record<
            string,
            {
              primary_column_name: string;
              primary_column_type: string;
              required_columns: Array<Record<string, string>>;
            }
          >;
        };
      };
      pii_data_table?: {
        table_columns: string[];
        source_tables: Record<string, any>;
      };
    };
    mapping_config: {
      mapping_schema: string;
      auto_generate_table: boolean;
      patient_mapping_config: {
        tables: Array<{ table_name: string; columns: Record<string, string>; registration_date?: string }>;
        primary_id_column?: string;
      };
      encounter_mapping_config: {
        table_name: string;
        encounter_id_column: string;
        encounter_date_column: string;
        patient_identifier_column: string;
        patient_identifier_type: string;
      };
      appointment_mapping_present?: boolean;
      appointment_mapping_config?: {
        table_name: string;
        appointment_id_column: string;
        appointment_date_column: string;
        patient_identifier_column: string;
        patient_identifier_type: string;
      };
    };
    client_run_config: {
      admin_connection_str: string;
      default_offset_value: string;
      nd_patient_start_value: number;
    };
  };
  dump_config: {
    qc_config: Record<string, { prefix_value: string; length_of_value: number }>;
    secondary_config: Array<{
      table_name: string;
      config: Record<string, { masking_value: string; min_length: number }>;
    }>;
    pii_config: {
      mask: Record<string, { masking_value: string }>;
      zipcode: Record<string, { masking_value: string }>;
      dob: Record<string, { masking_value: string }>;
      combine: Record<string, any>;
      replace_value: Array<{ old_value: string; new_value: string }>;
    };
    dump_run_config: {
      enable_auto_qc: boolean;
    };
  };
};

// tiny helpers
const pretty = (v: any) => JSON.stringify(v, null, 2);
const safeParseJSON = <T,>(raw: string, fallback: T): T => {
  try {
    const val = JSON.parse(raw);
    return val as T;
  } catch {
    return fallback;
  }
};

export default function ConfigureClientDumpPage() {
  const router = useRouter();
  const { clientId, dumpId } = useParams<{ clientId: string; dumpId: string }>();

  // loading state
  const [loading, setLoading] = useState(true);
  const [loadErr, setLoadErr] = useState<string | null>(null);

  // core data
  const [schema, setSchema] = useState<Schema | null>(null);

  // step control - now client config is step 1, dump config is step 2
  const [step, setStep] = useState<1 | 2>(1);

  // ---------- Step 1: Client config (was step 2) ----------
  // client run config
  const [adminConnectionStr, setAdminConnectionStr] = useState("");
  const [ndPatientStartValue, setNdPatientStartValue] = useState<number | "">("");
  const [defaultOffsetValue, setDefaultOffsetValue] = useState("");

  // mapping
  const [autoGenerate, setAutoGenerate] = useState(false);
  const [mappingSchema, setMappingSchema] = useState("");
  const [patientMappings, setPatientMappings] = useState<
    { table_name: string; columns: Record<string, string>; registration_date?: string }[]
  >([]);
  const [primaryIdColumn, setPrimaryIdColumn] = useState("");
  const [coverageError, setCoverageError] = useState("");

  // appointment
  const [appointmentMappingPresent, setAppointmentMappingPresent] = useState(false);
  const [appointmentConfig, setAppointmentConfig] = useState({
    table_name: "",
    appointment_id_column: "",
    appointment_date_column: "",
    patient_identifier_column: "",
    patient_identifier_type: "",
  });
  const [appointmentErrors, setAppointmentErrors] = useState<Record<string, string>>({});

  // encounter
  const [encounterConfig, setEncounterConfig] = useState({
    table_name: "",
    encounter_id_column: "",
    encounter_date_column: "",
    patient_identifier_column: "",
    patient_identifier_type: "",
  });
  const [encounterErrors, setEncounterErrors] = useState<Record<string, string>>(
    {}
  );

  // master (PII tables)
  const [piiSchema, setPiiSchema] = useState("");
  const [masterPiiConfig, setMasterPiiConfig] = useState<{
    table_columns: string[];
    source_tables: Record<string, any>;
  } | null>(null);
  const [piiTables, setPiiTables] = useState<{
    pii_data_table: {
      table_columns: string[]; // Added columns at table type level
      source_tables: Array<{
      table_name: string;
      primary_column_name: string;
      primary_column_type: string;
      required_columns: Array<{ [key: string]: string }>;
      column_mappings?: Record<string, string>;
    }>;
    };
    [key: string]: {
      table_columns: string[]; // Added columns at table type level
      source_tables: Array<{
      table_name: string;
      primary_column_name: string;
      primary_column_type: string;
      required_columns: Array<{ [key: string]: string }>;
      column_mappings?: Record<string, string>;
    }>;
    };
  }>({
    pii_data_table: { table_columns: [], source_tables: [] }
  });

  // client config save state
  const [clientConfigSaved, setClientConfigSaved] = useState(false);
  const [savingClientConfig, setSavingClientConfig] = useState(false);
  const [clientConfigSaveErr, setClientConfigSaveErr] = useState<string | null>(null);

  // ---------- Step 2: Dump config (was step 1) ----------
  const [qcConfig, setQcConfig] = useState<string>("");
  const [piiConfig, setPiiConfig] = useState<string>(pretty({}));
  const [secondaryConfig, setSecondaryConfig] = useState<string>(pretty([]));
  const [dumpRunConfig, setDumpRunConfig] = useState<string>(pretty({}));

  // Dump Run Config form state
  const [dumpRunFormData, setDumpRunFormData] = useState({
    enable_auto_qc: true
  });

  // QC Config form state
  const [qcFormData, setQcFormData] = useState({
    PATIENT_IDENTIFIER: { prefix_value: "1001000", length_of_value: 15 },
    ENCOUNTER_IDENTIFIER: { prefix_value: "1001000", length_of_value: 19 },
    APPOINTMENT_IDENTIFIER: { prefix_value: "1001000", length_of_value: 19 },
  });


  // Custom table type modal state
  const [showCustomTableModal, setShowCustomTableModal] = useState(false);
  const [newTableTypeName, setNewTableTypeName] = useState("");

  // Secondary PII form data state
  const [secondaryPiiFormData, setSecondaryPiiFormData] = useState<any[]>([]);

  // Table array state for current table type
  const [tableArray, setTableArray] = useState<any[]>([]);
  const [tableType, setTableType] = useState<string>("");

  // Table selection modal state
  const [showTableSelectionModal, setShowTableSelectionModal] = useState(false);
  const [selectedTableForColumns, setSelectedTableForColumns] = useState("");
  const [selectedColumns, setSelectedColumns] = useState<string[]>([]);
  const [columnSearchTerm, setColumnSearchTerm] = useState("");
  const [customTableSearchTerm, setCustomTableSearchTerm] = useState("");
  const [selectedPatientIdColumn, setSelectedPatientIdColumn] = useState("");
  const [selectedPatientIdColumnType, setSelectedPatientIdColumnType] = useState("");
  const [editingTableIndex, setEditingTableIndex] = useState<number | null>(null);

  // Custom table type state
  const [customTableTypes, setCustomTableTypes] = useState<{ [key: string]: any[] }>({});
  const [newCustomTableTypeName, setNewCustomTableTypeName] = useState("");
  const [newCustomTableTypeColumns, setNewCustomTableTypeColumns] = useState("");
  const [showCustomTableTypeModal, setShowCustomTableTypeModal] = useState(false);
  const [selectedCustomTableType, setSelectedCustomTableType] = useState("");
  const [showCustomTableSelectionModal, setShowCustomTableSelectionModal] = useState(false);
  const [editingCustomTableType, setEditingCustomTableType] = useState<string | null>(null);
  const [editingCustomTableIndex, setEditingCustomTableIndex] = useState<number | null>(null);
  const [currentCustomTableMappings, setCurrentCustomTableMappings] = useState<{ [key: string]: string }>({});

  // Master PII table column names and mapping state
  const [masterPiiColumnNames, setMasterPiiColumnNames] = useState("");
  const [showColumnNamesModal, setShowColumnNamesModal] = useState(false);
  const [currentTableMappings, setCurrentTableMappings] = useState<{ [key: string]: string }>({});
  const [editingTableTypeForColumns, setEditingTableTypeForColumns] = useState<string>("pii_data_table");

  // Update QC config when form data changes
  useEffect(() => {
    setQcConfig(pretty(qcFormData));
  }, [qcFormData]);



  // Update dump run config when form data changes
  useEffect(() => {
    setDumpRunConfig(pretty(dumpRunFormData));
  }, [dumpRunFormData]);

  // Set initial QC config
  useEffect(() => {
    // Ensure QC form data only contains the three allowed identifiers
    const filteredQcData = {
      PATIENT_IDENTIFIER: { prefix_value: "1001000", length_of_value: 15 },
      ENCOUNTER_IDENTIFIER: { prefix_value: "1001000", length_of_value: 19 },
      APPOINTMENT_IDENTIFIER: { prefix_value: "1001000", length_of_value: 19 }
    };

    setQcFormData(filteredQcData);
    setQcConfig(pretty(filteredQcData));
  }, []);


  // Initialize QC config when switching to step 2
  useEffect(() => {
    if (step === 2 && piiTables && Object.keys(piiTables).length > 0) {

      // Ensure QC config has default values if empty and only contains the three allowed identifiers
      if (Object.keys(qcFormData).length === 0) {
        setQcFormData({
          PATIENT_IDENTIFIER: { prefix_value: "1001000", length_of_value: 15 },
          ENCOUNTER_IDENTIFIER: { prefix_value: "1001000", length_of_value: 19 },
          APPOINTMENT_IDENTIFIER: { prefix_value: "1001000", length_of_value: 19 },
        });
      } else {
        // Filter out any unwanted identifiers and ensure only the three we want are present
        const currentQcData = qcFormData;
        const filteredQcData = {
          PATIENT_IDENTIFIER: (currentQcData as any).PATIENT_IDENTIFIER || { prefix_value: "1001000", length_of_value: 15 },
          ENCOUNTER_IDENTIFIER: (currentQcData as any).ENCOUNTER_IDENTIFIER || { prefix_value: "1001000", length_of_value: 19 },
          APPOINTMENT_IDENTIFIER: (currentQcData as any).APPOINTMENT_IDENTIFIER || { prefix_value: "1001000", length_of_value: 19 }
        };

        // Only update if there are actually unwanted identifiers to filter out
        const hasUnwantedIdentifiers = Object.keys(currentQcData).some(key =>
          !['PATIENT_IDENTIFIER', 'ENCOUNTER_IDENTIFIER', 'APPOINTMENT_IDENTIFIER'].includes(key)
        );

        if (hasUnwantedIdentifiers) {
          setQcFormData(filteredQcData);
        }
      }


      // Ensure dump run config has default values if empty
      if (Object.keys(dumpRunFormData).length === 0) {
        setDumpRunFormData({
          enable_auto_qc: true
        });
      }
    }
  }, [step, piiTables, [].length, qcFormData, dumpRunFormData]);

  // Debug: Log piiTables changes
  useEffect(() => {
    console.log('piiTables state updated:', piiTables);
  }, [piiTables]);

  // Handle QC form field updates
  const updateQcField = (identifierType: string, field: 'prefix_value' | 'length_of_value', value: string | number) => {
    setQcFormData(prev => ({
      ...prev,
      [identifierType]: {
        ...prev[identifierType as keyof typeof prev],
        [field]: field === 'length_of_value' ? Number(value) : value
      }
    }));
  };








  // Get all added columns across all table types to ensure uniqueness
  const getAllAddedColumns = () => {
    const allColumns: string[] = [];
    Object.values(piiTables).forEach(tableTypeConfig => {
      allColumns.push(...(tableTypeConfig.table_columns || []));
    });
    return allColumns;
  };

  // Check if a column name is unique across all table types
  const isColumnNameUnique = (columnName: string, excludeTableType?: string) => {
    const allColumns = getAllAddedColumns();
    // Remove the column from the same table type if we're editing
    if (excludeTableType) {
      const tableTypeColumns = piiTables[excludeTableType]?.table_columns || [];
      const filteredColumns = allColumns.filter(col => !tableTypeColumns.includes(col));
      return !filteredColumns.includes(columnName);
    }
    return !allColumns.includes(columnName);
  };

  // Add column to a specific table type
  const addColumnToTable = (tableType: string, columnName: string): boolean => {
    if (!isColumnNameUnique(columnName, tableType)) {
      return false;
    }
    
    setPiiTables(prev => ({
      ...prev,
      [tableType]: {
        ...prev[tableType],
        table_columns: [...(prev[tableType]?.table_columns || []), columnName]
      }
    }));
    return true;
  };

  // Remove column from a specific table type
  const removeColumnFromTable = (tableType: string, columnName: string) => {
    setPiiTables(prev => ({
      ...prev,
      [tableType]: {
        ...prev[tableType],
        table_columns: (prev[tableType]?.table_columns || []).filter(col => col !== columnName)
      }
    }));
  };

  // Helper function to get source_tables array for a table type (for backward compatibility)
  const getSourceTables = (tableType: string) => {
    return piiTables[tableType]?.source_tables || [];
  };

  // Helper function to get table_columns for a table type
  const getTableColumns = (tableType: string) => {
    return piiTables[tableType]?.table_columns || [];
  };

  // Helper function to update source_tables for a table type
  const updateSourceTables = (tableType: string, updater: (tables: any[]) => any[]) => {
    setPiiTables(prev => ({
      ...prev,
      [tableType]: {
        ...prev[tableType],
        source_tables: updater(prev[tableType]?.source_tables || [])
      }
    }));
  };



  // dump config save state
  const [saving, setSaving] = useState(false);
  const [reusingConfig, setReusingConfig] = useState(false);
  const [reuseConfigErr, setReuseConfigErr] = useState<string | null>(null);

  // Save client configuration
  const onSubmitClientConfig = async () => {
    setSavingClientConfig(true);
    setClientConfigSaveErr(null);

    try {
      // Build the payload structure
      const payload = {
        client_config: {
          client_run_config: {
            admin_connection_str: adminConnectionStr,
            nd_patient_start_value: ndPatientStartValue,
            default_offset_value: defaultOffsetValue
          },
          mapping_config: autoGenerate ? {
            auto_generate_table: true,
            mapping_schema: mappingSchema,
            patient_mapping_config: {
              tables: patientMappings,
              primary_id_column: primaryIdColumn
            },
            encounter_mapping_config: encounterConfig,
            appointment_mapping_present: appointmentMappingPresent,
            appointment_mapping_config: appointmentConfig
          } : undefined,
          master_config: {
            pii_schema_name: piiSchema,
            pii_tables: Object.entries(piiTables).reduce((acc, [tableType, tableTypeConfig]) => {
              acc[tableType] = {
                table_columns: tableTypeConfig.table_columns || [], // Add table_columns at table type level
                source_tables: tableTypeConfig.source_tables.reduce((sourceAcc, table) => {
                  sourceAcc[table.table_name] = {
                    primary_column_name: table.primary_column_name,
                    primary_column_type: table.primary_column_type,
                    required_columns: table.required_columns
                    // table_columns is now at table type level, not here
                  };
                  return sourceAcc;
                }, {} as Record<string, any>)
              };
              return acc;
            }, {} as Record<string, any>)
          }
        }
      };

      await axios.put(CONFIG_ENDPOINT(clientId!, dumpId!), payload);
      setClientConfigSaved(true);
        
      
      // Automatically move to step 2 (Dump Config)
      setStep(2);
    } catch (error: any) {
      console.error('Failed to save client config:', error);
      setClientConfigSaveErr(error.response?.data?.message || 'Failed to save configuration');
    } finally {
      setSavingClientConfig(false);
    }
  };

  // Save dump configuration  
  const onSubmitDumpConfigNew = async () => {
    setSaving(true);
    
    try {
      // Parse PII config from JSON string
      const piiConfigParsed = safeParseJSON(piiConfig, {});
      const secondaryConfigParsed = safeParseJSON(secondaryConfig, []);
      
      // Build the dump config payload
      const payload = {
        dump_config: {
          qc_config: qcFormData,
          pii_config: piiConfigParsed,
          dump_run_config: dumpRunFormData,
          secondary_config: secondaryConfigParsed
        }
      };

      await axios.put(CONFIG_ENDPOINT(clientId!, dumpId!), payload);
      alert('Dump configuration saved successfully!');
    } catch (error: any) {
      console.error('Failed to save dump config:', error);
      alert('Failed to save dump configuration: ' + (error.response?.data?.message || error.message));
    } finally {
      setSaving(false);
    }
  };

  // Reuse previous configuration
  // CHANGED: Use PUT instead of GET for reusing previous configuration
  const onReusePreviousConfigNew = async () => {
    if (!clientId || !dumpId) {
      setReuseConfigErr("Missing client ID or dump ID.");
      return;
    }

    setReusingConfig(true);
    setReuseConfigErr(null);

    try {
      // Use PUT instead of GET
      const response = await axios.get(`${API_ROOT}reuse_configuration/${clientId}/${dumpId}/`);

      if (response.data.success) {
        // Configuration has been copied from previous dump to current dump
        // Now reload the current configuration to get the updated data
        await loadConfiguration();
        
        // Show success message
      } else {
        setReuseConfigErr(response.data.message || "Failed to reuse previous configuration.");
      }
    } catch (e: any) {
      console.error("Reuse config error:", e);
      if (e.response?.data?.message) {
        setReuseConfigErr(e.response.data.message);
      } else {
        setReuseConfigErr("Failed to load previous configuration. Please try again.");
      }
    } finally {
      setReusingConfig(false);
    }
  };

  // -------- Load schema + prefill from configuration ----------
  const loadConfiguration = async () => {
    if (!clientId || !dumpId) return;

    try {
      const [schemaRes, configRes] = await Promise.all([
        axios.get<Schema>(`${API_ROOT}table_schema/${clientId}/${dumpId}/`),
        axios.get<ConfigurationResponse>(`${API_ROOT}configuration/${clientId}/${dumpId}/`),
      ]);

      setSchema(schemaRes.data);

      // Prefill Step 1 (Client Config)
      const config = configRes.data;

      // Prefill client run config
      setAdminConnectionStr(config.client_config?.client_run_config?.admin_connection_str ?? "");
      setNdPatientStartValue(config.client_config?.client_run_config?.nd_patient_start_value ?? "");
      setDefaultOffsetValue(config.client_config?.client_run_config?.default_offset_value?.toString() ?? "");

      // Load PII schema name
      setPiiSchema(config.client_config?.master_config?.pii_schema_name ?? "");

      // Load master PII config - handle both old and new structure
      if (config.client_config?.master_config?.pii_data_table) {
        console.log('Loading master PII config (old structure):', config.client_config.master_config.pii_data_table);
        setMasterPiiConfig(config.client_config.master_config.pii_data_table);
      } else {
        console.log('No master PII config found in:', config.client_config?.master_config);
      }

      // Load pii_tables structure (new structure with both pii_data_table and custom table types)
      if (config.client_config?.master_config?.pii_tables) {
        console.log('Loading pii_tables config:', config.client_config.master_config.pii_tables);
        
        // Transform the API response structure to match our state structure
        const transformedPiiTables: any = {};
        
        Object.entries(config.client_config.master_config.pii_tables).forEach(([tableType, tableConfig]: [string, any]) => {
          // Convert source_tables from object to array format
          const sourceTablesArray = Object.entries(tableConfig.source_tables || {}).map(([tableName, tableData]: [string, any]) => ({
            table_name: tableName,
            primary_column_name: tableData.primary_column_name || "",
            primary_column_type: tableData.primary_column_type || "",
            required_columns: tableData.required_columns || [],
            column_mappings: {}
          }));

          transformedPiiTables[tableType] = {
            table_columns: tableConfig.table_columns || [],
            source_tables: sourceTablesArray
          };
        });

        console.log('Transformed piiTables:', transformedPiiTables);
        setPiiTables(transformedPiiTables);

        // Also populate customTableTypes for the Custom Table Types section
        const customTableTypesData: { [key: string]: any[] } = {};
        Object.entries(config.client_config.master_config.pii_tables).forEach(([tableType, tableConfig]: [string, any]) => {
          if (tableType !== 'pii_data_table') {
            // Convert source_tables from object to array format for customTableTypes
            const sourceTablesArray = Object.entries(tableConfig.source_tables || {}).map(([tableName, tableData]: [string, any]) => ({
              table_name: tableName,
              primary_column_name: tableData.primary_column_name || "",
              primary_column_type: tableData.primary_column_type || "",
              required_columns: tableData.required_columns || [],
              column_mappings: {}
            }));

            customTableTypesData[tableType] = [
              { master_columns: (tableConfig.table_columns || []).join(', ') }, // First element is master columns
              ...sourceTablesArray // Rest are source tables
            ];
          }
        });

        console.log('Transformed customTableTypes:', customTableTypesData);
        setCustomTableTypes(customTableTypesData);
      } else {
        console.log('No pii_tables config found in:', config.client_config?.master_config);
      }

      // Helper: treat {} as "empty"
      const isEmptyObj = (o: any) =>
        !o || (typeof o === "object" && !Array.isArray(o) && Object.keys(o).length === 0);

      // ----- mapping_config -----
      if (!isEmptyObj(config.client_config?.mapping_config)) {
        const mdc = config.client_config.mapping_config;

        setAutoGenerate(!!mdc?.auto_generate_table);
        setMappingSchema(mdc?.mapping_schema ?? "");

        const pmc = mdc?.patient_mapping_config ?? {};
        setPatientMappings(pmc?.tables ?? []);

        const primaryFromClient = pmc?.primary_id_column;
        const primaryFromSchema = schemaRes.data?.patient_identifier_columns?.[0] ?? "";
        setPrimaryIdColumn(primaryFromClient ?? primaryFromSchema);

        setEncounterConfig(mdc?.encounter_mapping_config ?? {
          table_name: "",
          encounter_id_column: "",
          encounter_date_column: "",
          patient_identifier_column: "",
          patient_identifier_type: "",
        });

        // Load appointment configuration
        setAppointmentMappingPresent(!!mdc?.appointment_mapping_present);
        setAppointmentConfig(mdc?.appointment_mapping_config ?? {
          table_name: "",
          appointment_id_column: "",
          appointment_date_column: "",
          patient_identifier_column: "",
          patient_identifier_type: "",
        });
      }


      // Prefill Step 2 (Dump Config) if available
      if (config.dump_config) {
        // Prefill QC config - only allow the three specific identifiers we want
        if (config.dump_config.qc_config && Object.keys(config.dump_config.qc_config).length > 0) {
          const allowedIdentifiers = ['PATIENT_IDENTIFIER', 'ENCOUNTER_IDENTIFIER', 'APPOINTMENT_IDENTIFIER'];
          const filteredQcConfig = Object.keys(config.dump_config.qc_config)
            .filter(key => allowedIdentifiers.includes(key))
            .reduce((obj, key) => {
              obj[key] = config.dump_config.qc_config[key];
              return obj;
            }, {} as Record<string, any>);

          setQcFormData(prev => ({
            ...prev,
            ...filteredQcConfig
          }));
        }

        // Prefill PII config
        if (config.dump_config.pii_config && Object.keys(config.dump_config.pii_config).length > 0) {
          setPiiConfig(pretty(config.dump_config.pii_config));
        }

        // Prefill Secondary PII config
        if (config.dump_config.secondary_config && config.dump_config.secondary_config.length > 0) {
          setSecondaryPiiFormData(config.dump_config.secondary_config);
          setSecondaryConfig(pretty(config.dump_config.secondary_config));
        }

        // Prefill Dump Run config
        if (config.dump_config.dump_run_config && Object.keys(config.dump_config.dump_run_config).length > 0) {
          setDumpRunFormData(prev => ({
            ...prev,
            ...config.dump_config.dump_run_config
          }));
        }
      }

      // Check if client config is already saved
      if (!isEmptyObj(config.client_config?.mapping_config) && !isEmptyObj(config.client_config?.master_config)) {
        setClientConfigSaved(true);
      }
    } catch (e) {
      console.error("Load error:", e);
      setLoadErr("Failed to load schema or configuration.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadConfiguration();
  }, [clientId, dumpId]);

  // ... rest of the component (UI rendering) unchanged ...
  // (Omitted for brevity, as the main change is in onReusePreviousConfigNew)






  // -------- Validation helpers ----------
  const patientIdentifierOptions = schema?.patient_identifier_columns ?? [];
  const tableOptions = schema?.tables_info ?? [];

  const step1IsValid = useMemo(() => {
    // patient id coverage
    if (schema) {
      const covered = new Set<string>();
      patientMappings.forEach((pm) =>
        Object.keys(pm.columns || {}).forEach((id) => covered.add(id))
      );
      const missing = schema.patient_identifier_columns.filter(
        (id) => !covered.has(id)
      );
      setCoverageError(missing.length ? `Missing mappings: ${missing.join(", ")}` : "");
      if (missing.length) return false;
    }

    // basic checks
    if (!mappingSchema.trim()) return false;
    if (!primaryIdColumn.trim()) return false;

    // encounter required
    const encErrs: Record<string, string> = {};
    Object.entries(encounterConfig).forEach(([k, v]) => {
      if (!v) encErrs[k] = "Required";
    });
    setEncounterErrors(encErrs);
    if (Object.keys(encErrs).length) return false;

    // pii schema
    if (!piiSchema.trim()) return false;

    return true;
  }, [schema, patientMappings, mappingSchema, primaryIdColumn, encounterConfig, piiSchema]);

  // -------- Save Client Config ----------
  const onSaveClientConfig = async () => {
    if (!step1IsValid || !schema) {
      setClientConfigSaveErr("Please complete all required fields.");
      return;
    }

    setClientConfigSaveErr(null);
    setSavingClientConfig(true);

    try {
      // Build master->source tables map
      Object.entries(piiTables).reduce<Record<string, any>>((acc, [, tableTypeConfig]) => {
        tableTypeConfig.source_tables.forEach(table => {
          if (!table.table_name) return;
          acc[table.table_name] = {
            primary_column_name: table.primary_column_name,
            primary_column_type: table.primary_column_type,
            required_columns: table.required_columns,
          };
        });
        return acc;
      }, {});

      // Build pii_tables structure
      const piiTablesStructure = Object.entries(piiTables).reduce<Record<string, any>>((acc, [tableType, tableTypeConfig]) => {
        const sourceTablesForType = tableTypeConfig.source_tables.reduce<Record<string, any>>((typeAcc, table) => {
          if (!table.table_name) return typeAcc;
          typeAcc[table.table_name] = {
            primary_column_name: table.primary_column_name,
            primary_column_type: table.primary_column_type,
            required_columns: table.required_columns,
          };
          return typeAcc;
        }, {});

        acc[tableType] = { 
          table_columns: tableTypeConfig.table_columns || [],
          source_tables: sourceTablesForType 
        };
        return acc;
      }, {});

      const payload = {
        client_config: {
          master_config: {
            pii_tables: piiTablesStructure,
            pii_schema_name: piiSchema,
          },
          mapping_config: {
            mapping_schema: mappingSchema,
            auto_generate_table: autoGenerate,
            patient_mapping_config: {
              tables: patientMappings,
              primary_id_column: primaryIdColumn,
            },
            encounter_mapping_config: encounterConfig,
          },
          client_run_config: {
            admin_connection_str: adminConnectionStr,
            nd_patient_start_value: typeof ndPatientStartValue === "number" ? ndPatientStartValue : 0,
            default_offset_value: defaultOffsetValue,
          },
        },
        dump_config: {
          qc_config: {},
          secondary_config: [],
          pii_config: {},
          dump_run_config: {},
        },
      };

      await axios.put(CONFIG_ENDPOINT(clientId, dumpId), payload);
      setClientConfigSaved(true);
      setStep(2); // Move to dump config step
    } catch (e: any) {
      console.error("Client config save error:", e);
      setClientConfigSaveErr("Failed to save client configuration.");
    } finally {
      setSavingClientConfig(false);
    }
  };

  // -------- Reuse Previous Configuration ----------
  const onReusePreviousConfig = async () => {
    if (!clientId || !dumpId) {
      setReuseConfigErr("Missing client ID or dump ID.");
      return;
    }

    setReusingConfig(true);
    setReuseConfigErr(null);

    try {
      const response = await axios.get(`${API_ROOT}reuse_configuration/${clientId}/${dumpId}/`);

      if (response.data.success) {
        // Configuration has been copied from previous dump to current dump
        // Now reload the current configuration to get the updated data
        await loadConfiguration();
        
        // Show success message
        alert(`Success: ${response.data.message}`);
      } else {
        setReuseConfigErr(response.data.message || "Failed to reuse previous configuration.");
      }
    } catch (e: any) {
      console.error("Reuse config error:", e);
      if (e.response?.data?.message) {
        setReuseConfigErr(e.response.data.message);
      } else {
        setReuseConfigErr("Failed to load previous configuration. Please try again.");
      }
    } finally {
      setReusingConfig(false);
    }
  };

  // -------- Submit Dump Config ----------
  const onSubmitDumpConfig = async () => {
    if (!clientConfigSaved) {
      console.error("Please save client configuration first.");
      return;
    }

    setSaving(true);

    // Parse Step 2 JSON fields safely
    const qc_conf = safeParseJSON<Record<string, any>>(qcConfig, {});
    const pii_conf = safeParseJSON<Record<string, any>>(piiConfig, {});
    const sec_conf: any[] = [];
    const dump_run_conf = safeParseJSON<Record<string, any>>(dumpRunConfig, {});

    try {
      // Build master->source tables map again for the complete payload
      Object.entries(piiTables).reduce<Record<string, any>>((acc, [, tableTypeConfig]) => {
        tableTypeConfig.source_tables.forEach(table => {
          if (!table.table_name) return;
          acc[table.table_name] = {
            primary_column_name: table.primary_column_name,
            primary_column_type: table.primary_column_type,
            required_columns: table.required_columns,
          };
        });
        return acc;
      }, {});

      // Build pii_tables structure
      const piiTablesStructure = Object.entries(piiTables).reduce<Record<string, any>>((acc, [tableType, tableTypeConfig]) => {
        const sourceTablesForType = tableTypeConfig.source_tables.reduce<Record<string, any>>((typeAcc, table) => {
          if (!table.table_name) return typeAcc;
          typeAcc[table.table_name] = {
            primary_column_name: table.primary_column_name,
            primary_column_type: table.primary_column_type,
            required_columns: table.required_columns,
          };
          return typeAcc;
        }, {});

        acc[tableType] = { 
          table_columns: tableTypeConfig.table_columns || [],
          source_tables: sourceTablesForType 
        };
        return acc;
      }, {});

      const payload = {
        client_config: {
          master_config: {
            pii_tables: piiTablesStructure,
            pii_schema_name: piiSchema,
          },
          mapping_config: {
            mapping_schema: mappingSchema,
            auto_generate_table: autoGenerate,
            patient_mapping_config: {
              tables: patientMappings,
              primary_id_column: primaryIdColumn,
            },
            encounter_mapping_config: encounterConfig,
          },
          client_run_config: {
            admin_connection_str: adminConnectionStr,
            nd_patient_start_value: typeof ndPatientStartValue === "number" ? ndPatientStartValue : 0,
            default_offset_value: defaultOffsetValue,
          },
        },
        dump_config: {
          qc_config: qc_conf,
          secondary_config: sec_conf,
          pii_config: pii_conf,
          dump_run_config: dump_run_conf,
        },
      };

      await axios.put(CONFIG_ENDPOINT(clientId, dumpId), payload);
      router.push(`/clients/${clientId}/dumps/${dumpId}/phi_tables`);
    } catch (e: any) {
      console.error("Dump config save error:", e);
      console.error("Failed to save dump configuration.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <ClientsLayout>
        <div className="flex justify-center py-16">
          <Spinner />
        </div>
      </ClientsLayout>
    );
  }
  if (loadErr || !schema) {
    return (
      <ClientsLayout>
        <div className="p-8 text-red-600">{loadErr || "No schema loaded."}</div>
      </ClientsLayout>
    );
  }

  return (
    <ClientsLayout>
      <div className="w-full p-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Configure Client & Dump</h1>
          <div className="flex items-center gap-2 text-sm">
            <StepPill active={step === 1}>Step 1: Client Config</StepPill>
            <span className="text-gray-400">→</span>
            <StepPill active={step === 2}>Step 2: Dump Config</StepPill>
          </div>
        </div>

        {/* Step Switcher */}
        <div className="rounded-lg border bg-white">
          <StepSwitcher
            step={step}
            setStep={setStep}
            clientConfigSaved={clientConfigSaved}
            piiTables={piiTables}
            setSecondaryPiiFormData={setSecondaryPiiFormData}
            qcFormData={qcFormData}
            setQcFormData={setQcFormData}
            dumpRunFormData={dumpRunFormData}
            setDumpRunFormData={setDumpRunFormData}
          />
        </div>
          {/* STEP 1: Client Config */}
          {step === 1 && (
            <div className="p-6 space-y-8">
              {/* Row 1: Client Config + Appointment if Present */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Client Config */}
                <section className="space-y-4 bg-white rounded-lg border p-6">
                  <h2 className="font-semibold text-lg">Client Config</h2>
                  <div>
                    <label className="text-sm block mb-1">Admin Connection String</label>
                    <input
                      className="w-full p-2 border rounded"
                      value={adminConnectionStr}
                      onChange={(e) => setAdminConnectionStr(e.target.value)}
                      placeholder="Enter admin connection string"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm block mb-1">ND Patient Start Value</label>
                      <input
                        type="number"
                        className="w-full p-2 border rounded"
                        value={ndPatientStartValue}
                        onChange={(e) => setNdPatientStartValue(e.target.value === "" ? "" : parseInt(e.target.value) || 0)}
                        placeholder="Enter ND patient start value"
                      />
                    </div>
                    <div>
                      <label className="text-sm block mb-1">Default Offset Value</label>
                      <input
                        className="w-full p-2 border rounded"
                        value={defaultOffsetValue}
                        onChange={(e) => setDefaultOffsetValue(e.target.value)}
                        placeholder="Enter default offset value"
                      />
                    </div>
                  </div>
                </section>

                {/* Appointment if Present */}
                <section className="space-y-4 bg-white rounded-lg border p-6">
                  <div className="flex items-center gap-3">
                    <h2 className="font-semibold text-lg">Appointment if Present</h2>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={appointmentMappingPresent}
                        onChange={(e) => setAppointmentMappingPresent(e.target.checked)}
                      />
                      <span className="text-sm text-gray-600">Enable appointment mapping</span>
                    </label>
                  </div>

                  {appointmentMappingPresent && (
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm block mb-1">Table</label>
                        <SearchableSelect
                          options={tableOptions.map((t) => ({
                            value: t.table_name,
                            label: t.table_name,
                          }))}
                          value={appointmentConfig.table_name}
                          onChange={(tableName) =>
                            setAppointmentConfig((prev) => ({
                              ...prev,
                              table_name: tableName,
                            }))
                          }
                          placeholder=" Select Table "
                          error={!!appointmentErrors["table_name"]}
                        />
                        {appointmentErrors["table_name"] && (
                          <p className="text-red-600 text-xs mt-1">
                            {appointmentErrors["table_name"]}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm block mb-1">Appointment ID</label>
                          <SearchableSelect
                            options={tableOptions
                              .find((t) => t.table_name === appointmentConfig.table_name)
                              ?.columns.map((c) => ({ value: c, label: c })) || []
                            }
                            value={appointmentConfig.appointment_id_column}
                            onChange={(columnName) =>
                              setAppointmentConfig((prev) => ({
                                ...prev,
                                appointment_id_column: columnName,
                              }))
                            }
                            placeholder="Select Column"
                            error={!!appointmentErrors["appointment_id_column"]}
                          />
                          {appointmentErrors["appointment_id_column"] && (
                            <p className="text-red-600 text-xs mt-1">
                              {appointmentErrors["appointment_id_column"]}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="text-sm block mb-1">Appointment Date</label>
                          <SearchableSelect
                            options={tableOptions
                              .find((t) => t.table_name === appointmentConfig.table_name)
                              ?.columns.map((c) => ({ value: c, label: c })) || []
                            }
                            value={appointmentConfig.appointment_date_column}
                            onChange={(columnName) =>
                              setAppointmentConfig((prev) => ({
                                ...prev,
                                appointment_date_column: columnName,
                              }))
                            }
                            placeholder=" Select Column "
                            error={!!appointmentErrors["appointment_date_column"]}
                          />
                          {appointmentErrors["appointment_date_column"] && (
                            <p className="text-red-600 text-xs mt-1">
                              {appointmentErrors["appointment_date_column"]}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm block mb-1">Patient ID Column</label>
                          <SearchableSelect
                            options={tableOptions
                              .find((t) => t.table_name === appointmentConfig.table_name)
                              ?.columns.map((c) => ({ value: c, label: c })) || []
                            }
                            value={appointmentConfig.patient_identifier_column}
                            onChange={(columnName) =>
                              setAppointmentConfig((prev) => ({
                                ...prev,
                                patient_identifier_column: columnName,
                              }))
                            }
                            placeholder=" Select Column "
                            error={!!appointmentErrors["patient_identifier_column"]}
                          />
                          {appointmentErrors["patient_identifier_column"] && (
                            <p className="text-red-600 text-xs mt-1">
                              {appointmentErrors["patient_identifier_column"]}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="text-sm block mb-1">Patient Identifier Type</label>
                          <SearchableSelect
                            options={patientIdentifierOptions.map((id) => ({
                              value: id,
                              label: id,
                            }))}
                            value={appointmentConfig.patient_identifier_type}
                            onChange={(identifierType) =>
                              setAppointmentConfig((prev) => ({
                                ...prev,
                                patient_identifier_type: identifierType,
                              }))
                            }
                            placeholder=" Select "
                            error={!!appointmentErrors["patient_identifier_type"]}
                          />
                          {appointmentErrors["patient_identifier_type"] && (
                            <p className="text-red-600 text-xs mt-1">
                              {appointmentErrors["patient_identifier_type"]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              </div>

              {/* Row 2: Patient Mapping + Encounter Mapping */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Patient Mapping */}
                <section className="space-y-4 bg-white rounded-lg border p-6">
                  <h2 className="font-semibold text-lg">Patient Mapping</h2>

                  <div className="space-y-4">
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={autoGenerate}
                        onChange={(e) => setAutoGenerate(e.target.checked)}
                      />
                      <span className="text-sm">Auto-generate tables</span>
                    </label>

                    <div>
                      <label className="text-sm block mb-1">Mapping Schema</label>
                      <input
                        className="w-full p-2 border rounded"
                        value={mappingSchema}
                        onChange={(e) => setMappingSchema(e.target.value)}
                        placeholder="Enter mapping schema name"
                      />
                    </div>

                    <div>
                      <label className="text-sm block mb-1">Primary ID Column</label>
                      <SearchableSelect
                        options={patientIdentifierOptions.map((id) => ({
                          value: id,
                          label: id,
                        }))}
                        value={primaryIdColumn}
                        onChange={setPrimaryIdColumn}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-sm">Patient Mapping Tables</h3>
                    <button
                      onClick={() =>
                        setPatientMappings((pm) => [
                          ...pm,
                          { table_name: "", columns: {}, registration_date: "" },
                        ])
                      }
                      className="px-3 py-1 rounded bg-blue-600 text-white text-sm"
                    >
                      + Add Table
                    </button>
                  </div>
                  {coverageError && (
                    <div className="text-red-600">{coverageError}</div>
                  )}

                  <div className="space-y-3">
                    {patientMappings.map((pm, i) => {
                      const selectedTable = tableOptions.find(
                        (t) => t.table_name === pm.table_name
                      );
                      return (
                        <div
                          key={i}
                          className="p-3 rounded border bg-gray-50 space-y-3"
                        >
                          <div className="flex gap-2 items-center">
                            <SearchableSelect
                              className="flex-1"
                              options={tableOptions.map((t) => ({
                                value: t.table_name,
                                label: t.table_name,
                              }))}
                              value={pm.table_name}
                              onChange={(tbl) => {
                                setPatientMappings((arr) =>
                                  arr.map((x, idx) =>
                                    idx === i ? { ...x, table_name: tbl, columns: {}, registration_date: x.registration_date || "" } : x
                                  )
                                );
                              }}
                              placeholder=" Select Table "
                            />

                            <button
                              onClick={() =>
                                setPatientMappings((arr) =>
                                  arr.filter((_, idx) => idx !== i)
                                )
                              }
                              className="text-red-600 px-2"
                            >
                              Remove
                            </button>
                          </div>

                          <div className="grid md:grid-cols-3 gap-3">
                            {patientIdentifierOptions.map((idName) => (
                              <div key={idName}>
                                <label className="text-xs block mb-1">
                                  {idName} → column
                                </label>
                                <SearchableSelect
                                  options={selectedTable?.columns.map((c) => ({
                                    value: c,
                                    label: c,
                                  })) || []}
                                  value={pm.columns[idName] || ""}
                                  onChange={(colValue) =>
                                    setPatientMappings((arr) =>
                                      arr.map((x, idx) =>
                                        idx === i
                                          ? {
                                            ...x,
                                            columns: {
                                              ...x.columns,
                                              [idName]: colValue,
                                            },
                                          }
                                          : x
                                      )
                                    )
                                  }
                                  placeholder=" Map "
                                  isDisabled={!selectedTable}
                                />
                              </div>
                            ))}
                            <div>
                              <label className="text-xs block mb-1">
                                registration_date → column
                              </label>
                              <SearchableSelect
                                options={selectedTable?.columns.map((c) => ({
                                  value: c,
                                  label: c,
                                })) || []}
                                value={pm.registration_date || ""}
                                onChange={(colValue) =>
                                  setPatientMappings((arr) =>
                                    arr.map((x, idx) =>
                                      idx === i
                                        ? {
                                          ...x,
                                          registration_date: colValue,
                                        }
                                        : x
                                    )
                                  )
                                }
                                placeholder=" Map "
                                isDisabled={!selectedTable}
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

                {/* Encounter Mapping */}
                <section className="space-y-4 bg-white rounded-lg border p-6">
                  <h2 className="font-semibold text-lg">Encounter Mapping</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm block mb-1">Table</label>
                      <SearchableSelect
                        options={tableOptions.map((t) => ({
                          value: t.table_name,
                          label: t.table_name,
                        }))}
                        value={encounterConfig.table_name}
                        onChange={(tableName) =>
                          setEncounterConfig((c) => ({
                            ...c,
                            table_name: tableName,
                          }))
                        }
                        placeholder=" Select Table "
                        error={!!encounterErrors["table_name"]}
                      />
                      {encounterErrors["table_name"] && (
                        <p className="text-xs text-red-600">Required</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm block mb-1">Encounter ID</label>
                      <SearchableSelect
                        options={tableOptions
                          .find((t) => t.table_name === encounterConfig.table_name)
                          ?.columns.map((c) => ({
                            value: c,
                            label: c,
                          })) || []}
                        value={encounterConfig.encounter_id_column}
                        onChange={(columnName) =>
                          setEncounterConfig((c) => ({
                            ...c,
                            encounter_id_column: columnName,
                          }))
                        }
                        placeholder=" Select Column "
                        error={!!encounterErrors["encounter_id_column"]}
                      />
                      {encounterErrors["encounter_id_column"] && (
                        <p className="text-xs text-red-600">Required</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm block mb-1">Patient ID Column</label>
                      <SearchableSelect
                        options={tableOptions
                          .find((t) => t.table_name === encounterConfig.table_name)
                          ?.columns.map((c) => ({
                            value: c,
                            label: c,
                          })) || []}
                        value={encounterConfig.patient_identifier_column}
                        onChange={(columnName) =>
                          setEncounterConfig((c) => ({
                            ...c,
                            patient_identifier_column: columnName,
                          }))
                        }
                        placeholder=" Select Column "
                        error={!!encounterErrors["patient_identifier_column"]}
                      />
                      {encounterErrors["patient_identifier_column"] && (
                        <p className="text-xs text-red-600">Required</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm block mb-1">Patient Identifier Type</label>
                      <SearchableSelect
                        options={patientIdentifierOptions.map((id) => ({
                          value: id,
                          label: id,
                        }))}
                        value={encounterConfig.patient_identifier_type}
                        onChange={(identifierType) =>
                          setEncounterConfig((c) => ({
                            ...c,
                            patient_identifier_type: identifierType,
                          }))
                        }
                        placeholder=" Select "
                        error={!!encounterErrors["patient_identifier_type"]}
                      />
                      {encounterErrors["patient_identifier_type"] && (
                        <p className="text-xs text-red-600">Required</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm block mb-1">Encounter Date</label>
                      <SearchableSelect
                        options={tableOptions
                          .find((t) => t.table_name === encounterConfig.table_name)
                          ?.columns.map((c) => ({
                            value: c,
                            label: c,
                          })) || []}
                        value={encounterConfig.encounter_date_column}
                        onChange={(columnName) =>
                          setEncounterConfig((c) => ({
                            ...c,
                            encounter_date_column: columnName,
                          }))
                        }
                        placeholder=" Select Column "
                        error={!!encounterErrors["encounter_date_column"]}
                      />
                      {encounterErrors["encounter_date_column"] && (
                        <p className="text-xs text-red-600">Required</p>
                      )}
                    </div>
                  </div>
                </section>
              </div>

              {/* Row 3: Master PII Tables - Full Width */}
              <div className="w-full">
                {/* Master PII Tables - Full Width */}
                <div className="w-full">
                  {/* <section className="space-y-6 bg-white rounded-lg border p-6">
                  </section> */}
                  <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl">Master PII Tables</h2>
                  </div>

                  {/* Master PII Tables - Full Width Layout */}
                  <div className="bg-white rounded-lg border-2 border-gray-300 p-6 w-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">master pii tables</h3>
                      <span className="text-sm font-medium text-gray-700">patient-data-table</span>
                    </div>

                    {/* PII Schema Name Input */}
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        PII Schema Name
                      </label>
                      <input
                        type="text"
                        value={piiSchema}
                        onChange={(e) => setPiiSchema(e.target.value)}
                        placeholder="Enter PII schema name"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>

                    {/* Add Column Manager for pii_data_table */}
                    <TableColumnsManager />

                    {/* Master PII Columns Display */}
                    {piiTables.pii_data_table?.table_columns && piiTables.pii_data_table.table_columns.length > 0 && (
                      <div className="mb-4">
                        <span className="text-sm font-medium text-gray-700">Master Columns: </span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {piiTables.pii_data_table.table_columns.map((col: string, idx: number) => (
                            <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                              {col}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Table Display Area - Full Width Grid */}
                    <div className="space-y-4">
                      {getSourceTables('pii_data_table').length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                          {getSourceTables('pii_data_table').map((table, idx) => (
                            <div
                              key={idx}
                              className="bg-gray-50 rounded-lg border-2 border-gray-300 p-4 min-w-0 cursor-pointer hover:bg-gray-100 hover:border-blue-300 transition-colors"
                              onClick={() => {
                                setEditingTableIndex(idx);
                                setSelectedTableForColumns(table.table_name);
                                setSelectedColumns((table.required_columns || []).map(col => Object.keys(col)[0] || ''));
                                setSelectedPatientIdColumn(table.primary_column_name || "");
                                setSelectedPatientIdColumnType(table.primary_column_type || "");
                                setColumnSearchTerm("");
                                // Load existing column mappings from required_columns
                                const existingMappings: Record<string, string> = {};
                                (table.required_columns || []).forEach(col => {
                                  const selectedColumn = Object.keys(col)[0];
                                  const mappedColumn = col[selectedColumn];
                                  if (selectedColumn && mappedColumn) {
                                    existingMappings[selectedColumn] = mappedColumn;
                                  }
                                });
                                setCurrentTableMappings(existingMappings);
                                setShowTableSelectionModal(true);
                              }}
                            >
                              <div className="flex items-center justify-between mb-3">
                                <span className="font-medium text-gray-900 text-sm truncate">{table.table_name}</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    updateSourceTables('pii_data_table', (tables) => 
                                      tables.filter((_, i) => i !== idx)
                                    );
                                  }}
                                  className="text-red-600 hover:text-red-800 text-xs flex-shrink-0 ml-2"
                                >
                                  Remove
                                </button>
                              </div>

                              {/* Column Checkboxes */}
                              <div className="space-y-1 mb-3">
                                {(table.required_columns || []).map((col, colIdx) => {
                                  const selectedColumn = Object.keys(col)[0];
                                  const mappedColumn = col[selectedColumn];
                                  return (
                                    <label key={colIdx} className="flex items-center space-x-2 text-xs">
                                      <input
                                        type="checkbox"
                                        className="rounded flex-shrink-0"
                                        checked={true}
                                        readOnly
                                      />
                                      <span className="truncate">{selectedColumn || 'Unknown Column'}</span>
                                      {mappedColumn && mappedColumn !== selectedColumn && (
                                        <div className="flex items-center space-x-1">
                                          <span className="text-gray-400 text-xs">→</span>
                                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded border border-blue-200">
                                            {mappedColumn}
                                          </div>
                                        </div>
                                      )}
                                    </label>
                                  );
                                })}
                              </div>

                              {/* Patient ID Column */}
                              <div className="pt-2 border-t border-gray-200">
                                <div className="space-y-1">
                                  <div className="flex items-center space-x-1 text-xs font-medium">
                                    <span className="truncate">patient-identifier-column</span>
                                    <div className="bg-white rounded border border-gray-300 px-1 py-0.5 text-xs truncate">
                                      {table.primary_column_name || "Not selected"}
                                    </div>
                                  </div>
                                  <div className="flex items-center space-x-1 text-xs font-medium">
                                    <span className="truncate">patient-identifier-type</span>
                                    <div className="bg-white rounded border border-gray-300 px-1 py-0.5 text-xs truncate">
                                      {table.primary_column_type || "Not selected"}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-gray-500 text-sm">
                          {piiTables.pii_data_table?.table_columns && piiTables.pii_data_table.table_columns.length > 0 
                            ? "No source tables configured yet" 
                            : "No table configured yet"
                          }
                        </div>
                      )}

                      {/* Add Columns and Add Table Buttons */}
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => {
                            setEditingTableTypeForColumns("pii_data_table");
                            setShowColumnNamesModal(true);
                          }}
                          className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors flex items-center space-x-1"
                        >
                          <span className="text-sm">+ add columns</span>
                        </button>
                        <button
                          onClick={() => {
                            setEditingTableTypeForColumns("pii_data_table");
                            setShowTableSelectionModal(true);
                          }}
                          disabled={!piiTables.pii_data_table?.table_columns || piiTables.pii_data_table.table_columns.length === 0}
                          className={`px-3 py-1.5 text-sm rounded-md focus:ring-2 focus:ring-offset-2 transition-colors flex items-center space-x-1 ${!piiTables.pii_data_table?.table_columns || piiTables.pii_data_table.table_columns.length === 0
                              ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                              : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
                            }`}
                          title={!piiTables.pii_data_table?.table_columns || piiTables.pii_data_table.table_columns.length === 0 ? 'Please add master columns first' : ''}
                        >
                          <span className="text-sm">+ add table</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Custom Table Types Section - Full Width */}
                  <div className="bg-white rounded-lg border-2 border-gray-300 p-6 w-full">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-lg">custom table types</h3>
                      <button
                        onClick={() => setShowCustomTableTypeModal(true)}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors flex items-center space-x-2"
                      >
                        <span>+ Add Custom Table Type</span>
                      </button>
                    </div>

                    {/* Custom Table Types Display - Full Width */}
                    <div className="space-y-4">
                      {Object.keys(customTableTypes).length > 0 ? (
                        Object.entries(customTableTypes).map(([tableTypeName, tables]) => (
                          <div key={tableTypeName} className="bg-gray-50 rounded-lg border-2 border-gray-300 p-4">
                            <div className="flex items-center justify-between mb-4">
                              <div>
                                <h4 className="font-medium text-gray-900">{tableTypeName}</h4>
                                {piiTables[tableTypeName]?.table_columns && piiTables[tableTypeName].table_columns.length > 0 && (
                                  <div className="mt-2">
                                    <span className="text-xs text-gray-600">Master Columns: </span>
                                    <div className="flex flex-wrap gap-1 mt-1">
                                      {piiTables[tableTypeName].table_columns.map((col: string, colIdx: number) => (
                                        <span key={colIdx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                          {col}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                              <div className="flex items-center space-x-2">
                                <button
                                  onClick={() => {
                                    const newCustomTableTypes = { ...customTableTypes };
                                    delete newCustomTableTypes[tableTypeName];
                                    setCustomTableTypes(newCustomTableTypes);
                                    
                                    // Also remove from piiTables
                                    setPiiTables(prev => {
                                      const newPiiTables = { ...prev };
                                      delete newPiiTables[tableTypeName];
                                      return newPiiTables;
                                    });
                                  }}
                                  className="text-red-600 hover:text-red-800 text-sm"
                                >
                                  Remove Type
                                </button>
                              </div>
                            </div>

                            {/* Added Tables Display - Card Layout */}
                            {tables && tables.length > 1 && (
                              <div className="mt-4">
                                <h5 className="text-sm font-medium text-gray-700 mb-2">Added Tables:</h5>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                                  {tables.slice(1).map((table, idx) => (
                                    <div
                                      key={idx}
                                      className="bg-white rounded-lg border border-gray-200 p-3 min-w-0 cursor-pointer hover:bg-gray-50 hover:border-blue-300 transition-colors"
                                      onClick={() => {
                                        setEditingCustomTableType(tableTypeName);
                                        setEditingCustomTableIndex(idx + 1); // +1 because index 0 is master columns
                                        setSelectedTableForColumns(table.table_name);
                                        setSelectedColumns((table.required_columns || []).map((col: any) => Object.keys(col)[0] || ''));
                                        setSelectedPatientIdColumn(table.primary_column_name || "");
                                        setSelectedPatientIdColumnType(table.primary_column_type || "");
                                        setColumnSearchTerm("");
                                        // Load existing mappings from required_columns
                                        const existingMappings: Record<string, string> = {};
                                        (table.required_columns || []).forEach((col: any) => {
                                          const selectedColumn = Object.keys(col)[0];
                                          const mappedColumn = col[selectedColumn];
                                          if (selectedColumn && mappedColumn) {
                                            existingMappings[selectedColumn] = mappedColumn;
                                          }
                                        });
                                        setCurrentCustomTableMappings(existingMappings);
                                        setShowCustomTableSelectionModal(true);
                                      }}
                                    >
                                      <div className="flex items-center justify-between mb-2">
                                        <span className="font-medium text-gray-900 text-sm truncate">{table.table_name}</span>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            setCustomTableTypes(prev => ({
                                              ...prev,
                                              [tableTypeName]: prev[tableTypeName].filter((_, i) => i !== idx + 1)
                                            }));

                                            // Also update piiTables - use idx directly since source_tables doesn't have master_columns at index 0
                                            updateSourceTables(tableTypeName, (tables) => 
                                              tables.filter((_, i) => i !== idx)
                                            );
                                          }}
                                          className="text-red-600 hover:text-red-800 text-xs flex-shrink-0 ml-2"
                                        >
                                          Remove
                                        </button>
                                      </div>

                                      {/* Column Checkboxes with Mappings - Similar to Master PII Tables */}
                                      <div className="space-y-1 mb-2">
                                        {(table.required_columns || []).map((col: any, colIdx: number) => {
                                          const selectedColumn = Object.keys(col)[0];
                                          const mappedColumn = col[selectedColumn];
                                          return (
                                            <div key={colIdx} className="flex items-center space-x-2 text-xs">
                                              <input
                                                type="checkbox"
                                                className="rounded flex-shrink-0"
                                                checked={true}
                                                readOnly
                                              />
                                              <span className="truncate flex-1">{selectedColumn || 'Unknown Column'}</span>
                                              {mappedColumn && mappedColumn !== selectedColumn ? (
                                                <div className="flex items-center space-x-1">
                                                  <span className="text-gray-400 text-xs">→</span>
                                                  <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded border border-blue-200">
                                                    {mappedColumn}
                                                  </div>
                                                </div>
                                              ) : (
                                                <div className="bg-gray-100 text-gray-500 text-xs px-2 py-1 rounded border border-gray-200">
                                                  No mapping
                                                </div>
                                              )}
                                            </div>
                                          );
                                        })}
                                      </div>

                                      {/* Patient ID Column */}
                                      <div className="pt-1 border-t border-gray-200">
                                        <div className="space-y-1">
                                          <div className="flex items-center space-x-1 text-xs font-medium">
                                            <span className="truncate">patientid-col</span>
                                            <div className="bg-gray-100 rounded border border-gray-300 px-1 py-0.5 text-xs truncate">
                                              {table.primary_column_name || "Not selected"}
                                            </div>
                                          </div>
                                          <div className="flex items-center space-x-1 text-xs font-medium">
                                            <span className="truncate">patient-identifier-type</span>
                                            <div className="bg-gray-100 rounded border border-gray-300 px-1 py-0.5 text-xs truncate">
                                              {table.primary_column_type || "Not selected"}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Add Table Button for this type */}
                            <button
                              onClick={() => {
                                setSelectedCustomTableType(tableTypeName);
                                setEditingCustomTableType(tableTypeName);
                                setEditingCustomTableIndex(null);
                                setSelectedTableForColumns("");
                                setSelectedColumns([]);
                                setColumnSearchTerm("");
                                setSelectedPatientIdColumn("");
                                setCurrentCustomTableMappings({});
                                setShowCustomTableSelectionModal(true);
                              }}
                              className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center space-x-1"
                            >
                              <span className="text-sm">+</span>
                              <span className="text-sm">add table</span>
                            </button>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-8 text-gray-500 text-sm">
                          No custom table types configured yet
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Column Names Modal */}
                  {showColumnNamesModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                      <div className="bg-white rounded-lg border-2 border-gray-300 p-6 w-[500px]">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-semibold text-lg">Add Master PII Table Columns - {editingTableTypeForColumns}</h3>
                          <button
                            onClick={() => {
                              setShowColumnNamesModal(false);
                              setMasterPiiColumnNames("");
                            }}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            x
                          </button>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="text-sm font-medium text-gray-700 block mb-2">
                              Column Names (comma-separated)
                            </label>
                            <input
                              type="text"
                              placeholder="e.g., patient_id, first_name, last_name, email, phone"
                              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              value={masterPiiColumnNames}
                              onChange={(e) => setMasterPiiColumnNames(e.target.value)}
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              Enter the column names that will be in your master PII table, separated by commas
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-end space-x-2 mt-6">
                          <button
                            onClick={() => {
                              setShowColumnNamesModal(false);
                              setMasterPiiColumnNames("");
                            }}
                            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              if (masterPiiColumnNames.trim()) {
                                // Parse comma-separated column names
                                const columnNames = masterPiiColumnNames
                                  .split(',')
                                  .map(col => col.trim())
                                  .filter(col => col.length > 0);
                                
                                // Add columns to the appropriate table type's table_columns
                                setPiiTables(prev => {
                                  const newState = {
                                    ...prev,
                                    [editingTableTypeForColumns]: {
                                      ...prev[editingTableTypeForColumns],
                                      table_columns: [...(prev[editingTableTypeForColumns]?.table_columns || []), ...columnNames]
                                    }
                                  };
                                  console.log(`Adding columns to ${editingTableTypeForColumns}:`, columnNames);
                                  console.log('New piiTables state:', newState);
                                  return newState;
                                });
                                
                                setShowColumnNamesModal(false);
                                setMasterPiiColumnNames("");
                              }
                            }}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                          >
                            Add Columns
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Custom Table Type Name Modal */}
                  {showCustomTableTypeModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-lg border-2 border-gray-300 w-full max-w-md flex flex-col">
                        <div className="flex items-center justify-between mb-4 p-6 pb-0">
                          <h3 className="font-semibold text-lg">Add Custom Table Type</h3>
                          <button
                            onClick={() => {
                              setShowCustomTableTypeModal(false);
                              setNewCustomTableTypeName("");
                              setNewCustomTableTypeColumns("");
                            }}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            x
                          </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6">
                          <div className="space-y-4">
                            <div>
                              <label className="text-sm font-medium text-gray-700 block mb-2">Table Type Name</label>
                              <input
                                type="text"
                                placeholder="Enter table type name..."
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                value={newCustomTableTypeName}
                                onChange={(e) => setNewCustomTableTypeName(e.target.value)}
                              />
                            </div>

                            <div>
                              <label className="text-sm font-medium text-gray-700 block mb-2">
                                Master PII Table Columns
                              </label>
                              <input
                                type="text"
                                value={newCustomTableTypeColumns}
                                onChange={(e) => setNewCustomTableTypeColumns(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter column names separated by commas (e.g., name, email, phone)"
                              />
                              <p className="text-xs text-gray-500 mt-1">
                                Enter the column names that will be in your custom table type, separated by commas
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex justify-end space-x-2 p-6 pt-4 border-t border-gray-200">
                          <button
                            onClick={() => {
                              setShowCustomTableTypeModal(false);
                              setNewCustomTableTypeName("");
                              setNewCustomTableTypeColumns("");
                            }}
                            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              if (newCustomTableTypeName.trim() && newCustomTableTypeColumns.trim()) {
                                // Parse comma-separated column names
                                const columnNames = newCustomTableTypeColumns
                                  .split(',')
                                  .map(col => col.trim())
                                  .filter(col => col.length > 0);
                                
                                // Add to both customTableTypes and piiTables
                                setCustomTableTypes(prev => ({
                                  ...prev,
                                  [newCustomTableTypeName.trim()]: [{
                                    master_columns: newCustomTableTypeColumns.trim()
                                  }]
                                }));

                                setPiiTables(prev => ({
                                  ...prev,
                                  [newCustomTableTypeName.trim()]: {
                                    table_columns: columnNames,
                                    source_tables: []
                                  }
                                }));
                                setShowCustomTableTypeModal(false);
                                setNewCustomTableTypeName("");
                                setNewCustomTableTypeColumns("");
                              }
                            }}
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                          >
                            Add Type
                          </button>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* Custom Table Selection Modal */}
                  {showCustomTableSelectionModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-lg border-2 border-gray-300 w-full max-w-2xl max-h-[90vh] flex flex-col">
                        <div className="flex items-center justify-between mb-4 p-6 pb-0">
                          <h3 className="font-semibold text-lg">
                            {editingCustomTableIndex !== null ? `Edit Table in ${editingCustomTableType}` : `Add Table to ${selectedCustomTableType}`}
                          </h3>
                          <button
                            onClick={() => {
                              setShowCustomTableSelectionModal(false);
                              setEditingCustomTableType(null);
                              setEditingCustomTableIndex(null);
                              setSelectedTableForColumns("");
                              setSelectedColumns([]);
                              setColumnSearchTerm("");
                              setCustomTableSearchTerm("");
                              setSelectedPatientIdColumn("");
                              setSelectedPatientIdColumnType("");
                              setCurrentCustomTableMappings({});
                            }}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            x
                          </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6">
                          <div className="space-y-4">
                            {/* Master PII Columns Display */}
                            {editingCustomTableType && piiTables[editingCustomTableType]?.table_columns && piiTables[editingCustomTableType].table_columns.length > 0 && (
                              <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
                                <h4 className="text-sm font-medium text-blue-900 mb-2">Master PII Table Columns:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {piiTables[editingCustomTableType].table_columns.map((col: string, idx: number) => (
                                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                      {col}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Table Selection */}
                            <div>
                              <label className="text-sm font-medium text-gray-700 block mb-2">table</label>
                              <SearchableSelect
                                options={tableOptions.map((t) => ({
                                  value: t.table_name,
                                  label: t.table_name,
                                }))}
                                value={selectedTableForColumns}
                                onChange={(value) => {
                                  setSelectedTableForColumns(value);
                                  // Reset mappings and columns when table changes
                                  if (editingCustomTableIndex === null) {
                                    setCurrentCustomTableMappings({});
                                    setSelectedColumns([]);
                                  }
                                }}
                                placeholder="Select table"
                              />
                            </div>

                            {/* Column Selection Box */}
                            {selectedTableForColumns && (
                              <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-4">
                                <div className="space-y-3">
                                  <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-2">search</label>
                                    <input
                                      type="text"
                                      placeholder="Search columns..."
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                      value={columnSearchTerm}
                                      onChange={(e) => setColumnSearchTerm(e.target.value)}
                                    />
                                  </div>

                                  {/* Column Checkboxes with Mapping */}
                                  <div className="max-h-48 overflow-y-auto space-y-2 pr-2">
                                    {tableOptions
                                      .find((t) => t.table_name === selectedTableForColumns)
                                      ?.columns
                                      .filter(col => col.toLowerCase().includes(columnSearchTerm.toLowerCase()))
                                      .map((column) => (
                                        <div key={column} className="flex items-center space-x-2 text-sm">
                                          <input
                                            type="checkbox"
                                            className="rounded"
                                            checked={selectedColumns.includes(column)}
                                            onChange={(e) => {
                                              if (e.target.checked) {
                                                setSelectedColumns([...selectedColumns, column]);
                                              } else {
                                                setSelectedColumns(selectedColumns.filter(c => c !== column));
                                                // Remove mapping when unchecked
                                                setCurrentCustomTableMappings(prev => {
                                                  const newMappings = { ...prev };
                                                  delete newMappings[column];
                                                  return newMappings;
                                                });
                                              }
                                            }}
                                          />
                                          <span className="flex-1">{column}</span>

                                          {/* Mapping dropdown - only show if column is checked and master columns exist */}
                                          {selectedColumns.includes(column) && editingCustomTableType && piiTables[editingCustomTableType]?.table_columns && piiTables[editingCustomTableType].table_columns.length > 0 && (
                                            <div className="w-40">
                                              <SearchableSelect
                                                options={piiTables[editingCustomTableType].table_columns.map((col: string) => {
                                                  const colTrimmed = col.trim();
                                                  const isAlreadyMapped = Object.entries(currentCustomTableMappings).some(
                                                    ([tableCol, mappedCol]) =>
                                                      tableCol !== column && mappedCol === colTrimmed
                                                  );
                                                  const mappedToTable = isAlreadyMapped ?
                                                    Object.entries(currentCustomTableMappings).find(
                                                      ([tableCol, mappedCol]) => mappedCol === colTrimmed
                                                    )?.[0] : null;

                                                  return {
                                                    value: colTrimmed,
                                                    label: isAlreadyMapped ?
                                                      `${colTrimmed} (mapped to ${mappedToTable})` :
                                                      colTrimmed,
                                                    disabled: isAlreadyMapped
                                                  };
                                                }).filter((option: any) =>
                                                  // Only show options that are not already mapped OR are currently selected by this column
                                                  !option.disabled || option.value === currentCustomTableMappings[column]
                                                )}
                                                value={currentCustomTableMappings[column] || ""}
                                                onChange={(value) => {
                                                  if (value) {
                                                    // Check if this master column is already mapped to another table column
                                                    const conflictingMapping = Object.entries(currentCustomTableMappings).find(
                                                      ([tableCol, mappedCol]) =>
                                                        tableCol !== column && mappedCol === value
                                                    );

                                                    if (conflictingMapping) {
                                                      // Show warning and don't update the mapping
                                                      alert(`The master column "${value}" is already mapped to "${conflictingMapping[0]}". Please choose a different mapping.`);
                                                      return;
                                                    }

                                                    // Update the mapping
                                                    setCurrentCustomTableMappings(prev => ({
                                                      ...prev,
                                                      [column]: value
                                                    }));
                                                  } else {
                                                    setCurrentCustomTableMappings(prev => {
                                                      const newMappings = { ...prev };
                                                      delete newMappings[column];
                                                      return newMappings;
                                                    });
                                                  }
                                                }}
                                                placeholder="Map to..."
                                                className={!currentCustomTableMappings[column] ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}
                                              />
                                              {/* Show warning if mapping is missing */}
                                              {!currentCustomTableMappings[column] && (
                                                <div className="text-xs text-red-500 mt-1">
                                                  âš ï¸ Please select a mapping for this column
                                                </div>
                                              )}
                                              {/* Show warning if mapping is invalid */}
                                              {currentCustomTableMappings[column] && (() => {
                                                const conflictingMapping = Object.entries(currentCustomTableMappings).find(
                                                  ([tableCol, mappedCol]) =>
                                                    tableCol !== column && mappedCol === currentCustomTableMappings[column]
                                                );
                                                return conflictingMapping ? (
                                                  <div className="text-xs text-red-500 mt-1">
                                                    âš ï¸ This master column is already mapped to "{conflictingMapping[0]}"
                                                  </div>
                                                ) : null;
                                              })()}
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                  </div>

                                  {/* Patient ID Column Dropdown */}
                                  <div className="pt-2 border-t border-gray-200">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-2">patient-identifier-column</label>
                                        <SearchableSelect
                                          options={tableOptions
                                            .find((t) => t.table_name === selectedTableForColumns)
                                            ?.columns.map((col) => ({
                                              value: col,
                                              label: col,
                                            })) || []}
                                          value={selectedPatientIdColumn}
                                          onChange={setSelectedPatientIdColumn}
                                          placeholder="Select patient ID column"
                                        />
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-2">patient-identifier-type</label>
                                        <SearchableSelect
                                          options={patientIdentifierOptions.map((id) => ({
                                            value: id,
                                            label: id,
                                          }))}
                                          value={selectedPatientIdColumnType}
                                          onChange={setSelectedPatientIdColumnType}
                                          placeholder="Select patient identifier type"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex justify-end space-x-2 p-6 pt-4 border-t border-gray-200">
                          <button
                            onClick={() => {
                              setShowCustomTableSelectionModal(false);
                              setEditingCustomTableType(null);
                              setEditingCustomTableIndex(null);
                              setSelectedTableForColumns("");
                              setSelectedColumns([]);
                              setColumnSearchTerm("");
                              setCustomTableSearchTerm("");
                              setSelectedPatientIdColumn("");
                              setSelectedPatientIdColumnType("");
                              setCurrentCustomTableMappings({});
                            }}
                            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              // Add or update the selected table and columns to the custom table type
                              console.log('Save button clicked:', {
                                selectedTableForColumns,
                                selectedColumns,
                                selectedCustomTableType,
                                editingCustomTableType,
                                editingCustomTableIndex
                              });

                              if (selectedTableForColumns && selectedColumns.length > 0 && (selectedCustomTableType || editingCustomTableType)) {
                                const tableType = editingCustomTableType || selectedCustomTableType;

                                // Validate that all selected columns have mappings
                                const unmappedColumns = selectedColumns.filter(col => !currentCustomTableMappings[col]);
                                if (unmappedColumns.length > 0) {
                                  alert(`Please map all selected columns. Unmapped columns: ${unmappedColumns.join(', ')}`);
                                  return;
                                }

                                // Check for duplicate mappings
                                const mappedValues = Object.values(currentCustomTableMappings);
                                const hasDuplicates = mappedValues.some((value, index) =>
                                  value && mappedValues.indexOf(value) !== index
                                );

                                if (hasDuplicates) {
                                  alert('Error: Multiple table columns cannot be mapped to the same master column. Please fix the mappings before saving.');
                                  return;
                                }

                                const requiredColumns = selectedColumns.map(col => ({
                                  [col]: currentCustomTableMappings[col] || col
                                }));

                                console.log('Adding table to type:', tableType, {
                                  table_name: selectedTableForColumns,
                                  required_columns: requiredColumns
                                });

                                if (editingCustomTableIndex !== null && editingCustomTableType) {
                                  // Editing existing table
                                  setCustomTableTypes((prev) => ({
                                    ...prev,
                                    [editingCustomTableType]: prev[editingCustomTableType].map((table, idx) =>
                                      idx === editingCustomTableIndex ? {
                                        table_name: selectedTableForColumns,
                                        primary_column_name: selectedPatientIdColumn || "",
                                        primary_column_type: selectedPatientIdColumnType || "",
                                        required_columns: requiredColumns,
                                        column_mappings: currentCustomTableMappings,
                                      } : table
                                    )
                                  }));

                                  // Also update piiTables
                                  setPiiTables((prev) => ({
                                    ...prev,
                                    [editingCustomTableType]: {
                                      ...prev[editingCustomTableType],
                                      source_tables: prev[editingCustomTableType].source_tables.map((table, idx) =>
                                        idx === editingCustomTableIndex ? {
                                          table_name: selectedTableForColumns,
                                          primary_column_name: selectedPatientIdColumn || "",
                                          primary_column_type: selectedPatientIdColumnType || "",
                                          required_columns: requiredColumns,
                                          column_mappings: currentCustomTableMappings,
                                        } : table
                                      )
                                    }
                                  }));
                                } else {
                                  // Adding new table
                                  setCustomTableTypes((prev) => {
                                    const newState = {
                                      ...prev,
                                      [tableType]: [
                                        ...(prev[tableType] || []),
                                        {
                                          table_name: selectedTableForColumns,
                                          primary_column_name: selectedPatientIdColumn || "",
                                          primary_column_type: selectedPatientIdColumnType || "",
                                          required_columns: requiredColumns,
                                          column_mappings: currentCustomTableMappings,
                                        }
                                      ]
                                    };
                                    console.log('New custom table types state:', newState);
                                    return newState;
                                  });

                                  // Also update piiTables
                                  setPiiTables((prev) => ({
                                    ...prev,
                                    [tableType]: {
                                      ...prev[tableType],
                                      source_tables: [
                                        ...(prev[tableType]?.source_tables || []),
                                        {
                                          table_name: selectedTableForColumns,
                                          primary_column_name: selectedPatientIdColumn || "",
                                          primary_column_type: selectedPatientIdColumnType || "",
                                          required_columns: requiredColumns,
                                          column_mappings: currentCustomTableMappings,
                                        }
                                      ]
                                    }
                                  }));
                                }
                              } else {
                                console.log('Validation failed:', {
                                  selectedTableForColumns: !!selectedTableForColumns,
                                  selectedColumnsLength: selectedColumns.length,
                                  selectedCustomTableType: !!selectedCustomTableType,
                                  editingCustomTableType: !!editingCustomTableType
                                });
                              }
                              setShowCustomTableSelectionModal(false);
                              setEditingCustomTableType(null);
                              setEditingCustomTableIndex(null);
                              setSelectedTableForColumns("");
                              setSelectedColumns([]);
                              setColumnSearchTerm("");
                              setCustomTableSearchTerm("");
                              setSelectedPatientIdColumn("");
                              setSelectedPatientIdColumnType("");
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                          >
                            {editingCustomTableIndex !== null ? 'Update Table' : 'Add Table'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Table Selection Modal - Wireframe Design */}
                  {showTableSelectionModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                      <div className="bg-white rounded-lg border-2 border-gray-300 w-full max-w-2xl max-h-[90vh] flex flex-col">
                        <div className="flex items-center justify-between mb-4 p-6 pb-0">
                          <h3 className="font-semibold text-lg">
                            {editingTableIndex !== null ? 'Edit Table' : 'Add Table'}
                          </h3>
                          <button
                            onClick={() => {
                              setShowTableSelectionModal(false);
                              setEditingTableIndex(null);
                              setSelectedTableForColumns("");
                              setSelectedColumns([]);
                              setColumnSearchTerm("");
                              setSelectedPatientIdColumn("");
                            }}
                            className="text-gray-400 hover:text-gray-600"
                          >
                            x
                          </button>
                        </div>

                        <div className="flex-1 overflow-y-auto px-6">
                          <div className="space-y-4">
                            {/* Master PII Columns Display */}
                            {piiTables[editingTableTypeForColumns]?.table_columns && piiTables[editingTableTypeForColumns].table_columns.length > 0 && (
                              <div className="bg-blue-50 rounded-lg border border-blue-200 p-4">
                                <h4 className="text-sm font-medium text-blue-900 mb-2">Master PII Table Columns:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {piiTables[editingTableTypeForColumns].table_columns.map((col: string, idx: number) => (
                                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                                      {col}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Table Selection */}
                            <div>
                              <label className="text-sm font-medium text-gray-700 block mb-2">table</label>
                              <SearchableSelect
                                options={tableOptions.map((t) => ({
                                  value: t.table_name,
                                  label: t.table_name,
                                }))}
                                value={selectedTableForColumns}
                                onChange={(value) => {
                                  setSelectedTableForColumns(value);
                                  // Only reset mappings if not editing an existing table
                                  if (editingTableIndex === null) {
                                    setCurrentTableMappings({});
                                    setSelectedColumns([]);
                                  }
                                }}
                                placeholder="Select table"
                              />
                            </div>

                            {/* Column Selection and Mapping Box */}
                            {selectedTableForColumns && (
                              <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-4">
                                <div className="space-y-3">
                                  <div>
                                    <label className="text-sm font-medium text-gray-700 block mb-2">search</label>
                                    <input
                                      type="text"
                                      placeholder="Search columns..."
                                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                      value={columnSearchTerm}
                                      onChange={(e) => setColumnSearchTerm(e.target.value)}
                                    />
                                  </div>

                                  {/* Column Checkboxes with Mapping */}
                                  <div className="max-h-48 overflow-y-auto space-y-2 pr-2">
                                    {tableOptions
                                      .find((t) => t.table_name === selectedTableForColumns)
                                      ?.columns
                                      .filter(col => col.toLowerCase().includes(columnSearchTerm.toLowerCase()))
                                      .map((column) => (
                                        <div key={column} className="flex items-center space-x-2 text-sm">
                                          <input
                                            type="checkbox"
                                            className="rounded"
                                            checked={selectedColumns.includes(column)}
                                            onChange={(e) => {
                                              if (e.target.checked) {
                                                setSelectedColumns([...selectedColumns, column]);
                                              } else {
                                                setSelectedColumns(selectedColumns.filter(c => c !== column));
                                                // Remove mapping when unchecked
                                                const newMappings = { ...currentTableMappings };
                                                delete newMappings[column];
                                                setCurrentTableMappings(newMappings);
                                              }
                                            }}
                                          />
                                          <span className="flex-1">{column}</span>

                                          {/* Mapping dropdown - only show if column is checked and master columns exist */}
                                          {selectedColumns.includes(column) && piiTables[editingTableTypeForColumns]?.table_columns && piiTables[editingTableTypeForColumns].table_columns.length > 0 && (
                                            <div className="w-40">
                                              <SearchableSelect
                                                options={piiTables[editingTableTypeForColumns].table_columns.map(col => {
                                                  const colTrimmed = col.trim();
                                                  // Check if this master column is already mapped to another table column
                                                  const isAlreadyMapped = Object.entries(currentTableMappings).some(
                                                    ([tableCol, mappedCol]) =>
                                                      tableCol !== column && mappedCol === colTrimmed
                                                  );
                                                  return {
                                                    value: colTrimmed,
                                                    label: colTrimmed,
                                                    disabled: isAlreadyMapped
                                                  };
                                                }).filter(option =>
                                                  // Show all options, but keep current selection even if it would be disabled
                                                  !option.disabled || option.value === currentTableMappings[column]
                                                )}
                                                value={currentTableMappings[column] || ""}
                                                onChange={(value) => {
                                                  // Check if this master column is already mapped to another table column
                                                  const isAlreadyMapped = Object.entries(currentTableMappings).some(
                                                    ([tableCol, mappedCol]) =>
                                                      tableCol !== column && mappedCol === value
                                                  );

                                                  if (!isAlreadyMapped) {
                                                    setCurrentTableMappings(prev => ({
                                                      ...prev,
                                                      [column]: value
                                                    }));
                                                  }
                                                }}
                                                placeholder="Map to..."
                                                className={!currentTableMappings[column] ? "border-red-300 focus:border-red-500 focus:ring-red-500" : ""}
                                              />
                                              {/* Show warning if mapping is missing */}
                                              {!currentTableMappings[column] && (
                                                <div className="text-xs text-red-500 mt-1">
                                                  âš ï¸ Please select a mapping for this column
                                                </div>
                                              )}
                                              {/* Show warning if mapping is invalid */}
                                              {currentTableMappings[column] && Object.entries(currentTableMappings).some(
                                                ([tableCol, mappedCol]) =>
                                                  tableCol !== column && mappedCol === currentTableMappings[column]
                                              ) && (
                                                  <div className="text-xs text-red-500 mt-1">
                                                    This column is already mapped to another table column
                                                  </div>
                                                )}
                                            </div>
                                          )}
                                        </div>
                                      ))}
                                  </div>

                                  {/* Patient ID Column Dropdown */}
                                  <div className="pt-2 border-t border-gray-200">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                      <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-2">patient-identifier-column</label>
                                        <SearchableSelect
                                          options={tableOptions
                                            .find((t) => t.table_name === selectedTableForColumns)
                                            ?.columns.map((col) => ({
                                              value: col,
                                              label: col,
                                            })) || []}
                                          value={selectedPatientIdColumn}
                                          onChange={setSelectedPatientIdColumn}
                                          placeholder="Select patient ID column"
                                        />
                                      </div>
                                      <div>
                                        <label className="text-sm font-medium text-gray-700 block mb-2">patient-identifier-type</label>
                                        <SearchableSelect
                                          options={patientIdentifierOptions.map((id) => ({
                                            value: id,
                                            label: id,
                                          }))}
                                          value={selectedPatientIdColumnType}
                                          onChange={setSelectedPatientIdColumnType}
                                          placeholder="Select patient identifier type"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex justify-end space-x-2 p-6 pt-4 border-t border-gray-200">
                          <button
                            onClick={() => {
                              setShowTableSelectionModal(false);
                              setEditingTableIndex(null);
                              setSelectedTableForColumns("");
                              setSelectedColumns([]);
                              setColumnSearchTerm("");
                              setSelectedPatientIdColumn("");
                              setSelectedPatientIdColumnType("");
                              setCurrentTableMappings({});
                            }}
                            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              // Add or update the selected table and columns to PII tables
                              if (selectedTableForColumns && selectedColumns.length > 0) {
                                // Validate that all selected columns have mappings
                                const unmappedColumns = selectedColumns.filter(col => !currentTableMappings[col]);
                                if (unmappedColumns.length > 0) {
                                  alert(`Please map all selected columns. Unmapped columns: ${unmappedColumns.join(', ')}`);
                                  return;
                                }

                                const requiredColumns = selectedColumns.map(col => ({
                                  [col]: currentTableMappings[col] || col
                                }));

                                if (editingTableIndex !== null) {
                                  // Editing existing table
                                  setPiiTables((prev) => ({
                                    ...prev,
                                    pii_data_table: {
                                      ...prev.pii_data_table,
                                      source_tables: prev.pii_data_table.source_tables.map((table, idx) =>
                                        idx === editingTableIndex ? {
                                          table_name: selectedTableForColumns,
                                          primary_column_name: selectedPatientIdColumn || "",
                                          primary_column_type: selectedPatientIdColumnType || "",
                                          required_columns: requiredColumns,
                                          column_mappings: currentTableMappings
                                        } : table
                                      )
                                    }
                                  }));
                                } else {
                                  // Adding new table
                                  setPiiTables((prev) => ({
                                    ...prev,
                                    pii_data_table: {
                                      ...prev.pii_data_table,
                                      source_tables: [
                                        ...prev.pii_data_table.source_tables,
                                        {
                                          table_name: selectedTableForColumns,
                                          primary_column_name: selectedPatientIdColumn || "",
                                          primary_column_type: selectedPatientIdColumnType || "",
                                          required_columns: requiredColumns,
                                          column_mappings: currentTableMappings
                                        }
                                      ]
                                    }
                                  }));
                                }
                              }
                              setShowTableSelectionModal(false);
                              setEditingTableIndex(null);
                              setSelectedTableForColumns("");
                              setSelectedColumns([]);
                              setColumnSearchTerm("");
                              setSelectedPatientIdColumn("");
                              setSelectedPatientIdColumnType("");
                              setCurrentTableMappings({});
                            }}
                            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                          >
                            {editingTableIndex !== null ? 'Update Table' : 'Add Table'}
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
          
              </div>

              {/* <div className="md:col-span-2 flex items-center justify-between">
                        <button
                          onClick={() => setStep(1)}
                          className="px-4 py-2 rounded border"
                        >
                          â† Back to Client Config
                        </button>
                        <button
                          onClick={onSubmitDumpConfig}
                          disabled={saving}
                          className={clsx(
                            "px-5 py-2 rounded text-white",
                            saving ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                          )}
                        >
                          {saving ? "Savingâ€¦" : "Save Configuration"}
                        </button>
                      </div> */}

              {/* Save Client Configuration Button */}
              <div className="flex justify-center mt-8">
                <button
                  onClick={onSubmitClientConfig}
                  disabled={savingClientConfig}
                      className={clsx(
                    "px-8 py-3 rounded-lg text-white font-medium text-lg",
                    savingClientConfig 
                          ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                      )}
                    >
                  {savingClientConfig ? "Saving..." : "Save Client Configuration & Continue →"}
                    </button>
                  </div>

              {clientConfigSaveErr && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                  <p className="text-red-700 text-sm">{clientConfigSaveErr}</p>
                    </div>
                  )}

            </div>
          )}

          {/* STEP 2: Dump Config */}
          {step === 2 && (
            <DumpConfigStep
              qcFormData={qcFormData}
              updateQcField={updateQcField}
              qcConfig={qcConfig}
              onReusePreviousConfig={onReusePreviousConfigNew}
              reusingConfig={reusingConfig}
              reuseConfigErr={reuseConfigErr}
              piiConfig={piiConfig}
              setPiiConfig={setPiiConfig}
              secondaryConfig={secondaryConfig}
              setSecondaryConfig={setSecondaryConfig}
              dumpRunFormData={dumpRunFormData}
              setDumpRunFormData={setDumpRunFormData}
              dumpRunConfig={dumpRunConfig}
              setStep={setStep}
              onSubmitDumpConfig={onSubmitDumpConfigNew}
              saving={saving}
            />
          )}

          
                            </div>

        
        </ClientsLayout>
        );
  }
        
