"use client";
import { API_URL } from "@/app/api/Config";

import { useState, useEffect, useMemo } from "react";
import { FiSearch, FiFilter } from "react-icons/fi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { useForm } from "react-hook-form";
import Button from "@/app/components/common/Button";
import Select from "@/app/components/common/Select";
import { useGet, usePost } from "@/app/api/useApiHooks";
import { toast } from "react-toastify";
import Input from "@/app/components/common/Input";
import { CgEyeAlt } from "react-icons/cg";
import { MdOutlineLiveTv } from "react-icons/md";
import { CiPlay1, CiStop1 } from "react-icons/ci";
import { FiSave } from "react-icons/fi";

import { TableViewModal } from "./TableViewModal"; // We'll update this next
import { TableInfoRaw } from "../PHITables";

/** -------------------------------
 *  ENUMS AND INTERFACES
 *  ------------------------------- */
enum StatusEnum {
  NotStarted = 0,
  InProgress = 1,
  Completed = 2,
  Failed = -1,
}

enum TableQCStatus {
  NotStarted = 0,
  InProgress = 1,
  Completed = 2,
}

// Rules will be fetched from API
interface DeIdRulesResponse {
  rules: string[];
  success: boolean;
}


/**
 * The API returns a table details object
 */
interface TableDetails {
  table_name: string;
  table_id: number;
  table_size: string;
  rows_count: number;
  processing_status: number;
  fks: any[];
  is_phi_marking_done: boolean;
  is_phi_marking_locked: boolean;
  qc_status: number;
  table_details_for_ui: {
    batch_size: number;
    ignore_config: {
      operator: string;
      ignore_rows: any[];
    };
    columns_details: Array<{
      column_name: string;
      is_phi: boolean;
      mask_value: string | null;
      ignore_column: any;
      add_to_phi_table: boolean;
      de_identification_rule: string | null;
      column_name_for_phi_table: string | null;
    }>;
    reference_patient_id_column: string | null;
    reference_enc_id_column: string | null;
  };
}

/**
 * React Hook Form structure for the entire "tableDetails" data.
 * We store columns_details as an object keyed by column_name for easy updates.
 */
interface TableDetailsForm {
  batch_size: number;
  ignore_config: {
    operator: string;
    ignore_rows: any[];
  };
  columns_details: {
    [columnName: string]: {
      is_phi: string; // "true" or "false"
      de_identification_rule: string; // e.g. "MASK", "PATIENT_ID", etc.
      mask_value: string; // might be empty if no rule or if not a MASK
    };
  };
  reference_patient_id_column: string;
  reference_enc_id_column: string;
}

interface TableListCardProps {
  selectedDumpId: string;
  clientId?: string
  tablesData?: TableInfoRaw[]
  clientDetails?: {
    client_presetup_config_configured: boolean;
  };
  dumpDetails?: {
    is_dump_processing_done: boolean;
    is_primary_key_uploaded: boolean;
  };
}



/** -------------------------------
 *  MAIN COMPONENT
 *  ------------------------------- */
export const TableListCard: React.FC<TableListCardProps> = ({
  tablesData,
  clientId,
  clientDetails,
  dumpDetails,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [deidStatusFilter, setDeidStatusFilter] = useState<"all" | StatusEnum>("all");
  const [qcStatusFilter, setQcStatusFilter] = useState<"all" | StatusEnum>("all");
  const [embdStatusFilter, setEmbdStatusFilter] = useState<"all" | StatusEnum>("all");
  const [gcpStatusFilter, setGcpStatusFilter] = useState<"all" | StatusEnum>("all");
  const [phiFilter, setPhiFilter] = useState<"any" | "done" | "pending">("any");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedTableId, setSelectedTableId] = useState<number | null>(null);
  const [tableDetails, setTableDetails] = useState<TableDetails | null>(null);
  const [liveUpdateData, setLiveUpdateData] = useState<{
    deid_status: number;
    qc_status: number;
    embedding_status: number;
    is_cloud_moved: number;
    is_phi_marking_done: boolean;
  } | null>(null);

  // Checkboxes states for PHI marking, lock, QC, etc.
  // const [qcPassed, setQcPassed] = useState(false);
  // const [qcFailed, setQcFailed] = useState(false);

  // Control the "View Table" modal
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);

  // -----------
  // FETCH DE-IDENTIFICATION RULES
  // -----------
  const { data: deIdRulesData } = useGet<DeIdRulesResponse>(
    `${API_URL}deid_rules/${clientId}/`,
    {
      queryKey: ["deid_rules", clientId],
    },
  );

  // -----------
  // REACT-HOOK-FORM for table details
  // -----------
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TableDetailsForm>();

  // We'll watch the entire columns_details object to pass it to the modal
  const columnsDetails = watch("columns_details") || {};


  // -----------
  // FETCH SELECTED TABLE DETAILS
  // -----------
  const { data: tableDetailsData, isLoading: isTableDetailsLoading } =
    useGet<TableDetails>(
      selectedTableId
        ? `${API_URL}tables_details_for_ui/${selectedTableId}`
        : "",
      {
        queryKey: ["table_details", selectedTableId],
        enabled: !!selectedTableId,
      },
    );

  // -----------
  // API: START / STOP DE-ID
  // -----------
  const {
    isLoading: isStartedDeIdentificationLoading,
    refetch: startDeIdentification,
  } = useGet<TableDetails>(
    selectedTableId
      ? `${API_URL}start_de_identification/${selectedTableId}`
      : "",
    {
      queryKey: ["start_de_identification", selectedTableId],
      enabled: false,
    },
  );

  const handleDeIdentification = () => {
    if (selectedTableId) {
      startDeIdentification();
    }
  };

  const {
    isLoading: isStopDeIdentificationLoading,
    refetch: stopDeIdentification,
  } = useGet<TableDetails>(
    selectedTableId
      ? `${API_URL}stop_de_identification/${selectedTableId}`
      : "",
    {
      queryKey: ["stop_de_identification", selectedTableId],
      enabled: false,
    },
  );

  const handleStopDeIdentification = () => {
    if (selectedTableId) {
      stopDeIdentification();
    }
  };

  // -----------
  // VIEW PIPELINE HANDLER - Fetches live data and opens modal
  // -----------
  const handleViewPipeline = async () => {
    if (selectedTableId) {
      try {
        const response = await fetchLiveUpdate();
        if (response.data) {
          // Update the table details with the new status values
          setTableDetails(prev => {
            if (prev) {
              return {
                ...prev,
                processing_status: response.data.deid_status,
                qc_status: response.data.qc_status,
              };
            }
            return prev;
          });

          // Store the live update data for the pipeline modal
          setLiveUpdateData({
            deid_status: response.data.deid_status,
            qc_status: response.data.qc_status,
            embedding_status: response.data.embedding_status,
            is_cloud_moved: response.data.is_cloud_moved,
            is_phi_marking_done: response.data.is_phi_marking_done,
          });
          
          // Open the pipeline modal after fetching data
          setIsLiveModalOpen(true);
          
          // Show success message
          toast.success("Pipeline data updated successfully");
        }
      } catch (error) {
        toast.error("Failed to fetch pipeline data");
        console.error("Pipeline fetch error:", error);
      }
    }
  };


  // -----------
  // API: SUBMIT TABLE DETAILS
  // -----------
  const { mutate: submitTableDetails, isPending: isTableDetailsUpdateLoading } =
    usePost<any, any>(
      `${API_URL}tables_details_for_ui/${selectedTableId}/`,
      {
        onSuccess: () => {
          toast.success("Table details submitted successfully");
        },
      },
    );

  // -----------
  // API: LIVE UPDATE - Fetch table details for status update
  // -----------
  const {
    isLoading: isLiveUpdateLoading,
    refetch: fetchLiveUpdate,
  } = useGet<{
    table_name: string;
    table_id: number;
    is_phi_marking_done: boolean;
    table_details_for_ui: any;
    rows_count: number;
    deid_status: number;
    qc_status: number;
    embedding_status: number;
    is_cloud_moved: number;
  }>(
    selectedTableId
      ? `${API_URL}tables_details_for_ui/${selectedTableId}/`
      : "",
    {
      queryKey: ["live_update", selectedTableId],
      enabled: false,
    },
  );

  // -----------
  // PERMISSIONS
  // -----------
  const { data: permissions } = useGet<{
    AddDataBase: {
      has_permission: boolean;
    };
    TableQCTick: {
      has_permission: boolean;
    };
    LockPHIMarkingDB: {
      has_permission: boolean;
    };
    UnLockPHIMarkingDB: {
      has_permission: boolean;
    };
    UploadPHIConfigCSV: {
      has_permission: boolean;
    };
    LockPHIMarkingTable: {
      has_permission: boolean;
    };
    UnLockPHIMarkingTable: {
      has_permission: boolean;
    };
    lockPHImarkingTick: {
      has_permission: boolean;
    };
    PHIMarkingCompletedTick: {
      has_permission: boolean;
    };
    StartDeIdentificationButton: {
      has_permission: boolean;
    };
  }>(`${API_URL}user_permissions/`, {
    queryKey: ["user_permissions"],
  });

  // -----------
  // COMPUTE BUTTON STATE LOGIC (same as PHITables.tsx)
  // -----------
  const canStartDeIdentification = useMemo(() => {
    return clientDetails?.client_presetup_config_configured &&
      dumpDetails?.is_dump_processing_done &&
      dumpDetails?.is_primary_key_uploaded;
  }, [clientDetails, dumpDetails]);

  // -----------
  // EFFECT: When we get tableDetailsData from API,
  //         parse it into the form and local states
  // -----------
  useEffect(() => {
    if (tableDetailsData) {
      setTableDetails(tableDetailsData);

      // Build default form values
      const defaultValues: TableDetailsForm = {
        batch_size: tableDetailsData.table_details_for_ui.batch_size,
        ignore_config: tableDetailsData.table_details_for_ui.ignore_config,
        columns_details: {},
        reference_patient_id_column:
          tableDetailsData.table_details_for_ui.reference_patient_id_column ||
          "",
        reference_enc_id_column:
          tableDetailsData.table_details_for_ui.reference_enc_id_column || "",
      };

      tableDetailsData.table_details_for_ui.columns_details.forEach((col) => {
        defaultValues.columns_details[col.column_name] = {
          is_phi: col.is_phi ? "true" : "false",
          de_identification_rule: col.de_identification_rule || "",
          mask_value: col.mask_value || "",
        };
      });

      // initialize the RHF form
      reset(defaultValues);
    }

  }, [tableDetailsData, reset]);


  useEffect(() => {
    if (tablesData && tablesData.length > 0 && selectedTableId === null) {
      setSelectedTableId(tablesData[0].table_id);
    }
  }, [tablesData, selectedTableId]);


  // -----------
  // handleSubmit for the entire form
  // -----------
  const onSubmit = (data: TableDetailsForm) => {
    // Transform "columns_details" object back into an array
    const columnsDetailsArray = Object.entries(data.columns_details).map(
      ([columnName, columnData]) => {
        // If the user picks "true" for PHI, store is_phi = true
        // else store is_phi = false
        const isPHI = columnData.is_phi === "true";
        // If rule is "MASK", keep the mask_value
        // else mask_value might be empty
        return {
          column_name: columnName,
          is_phi: isPHI,
          mask_value:
            columnData.de_identification_rule === "MASK"
              ? columnData.mask_value
              : null,
          ignore_column: false, // or keep your existing logic
          add_to_phi_table: false,
          de_identification_rule: columnData.de_identification_rule || null,
          column_name_for_phi_table: null,
        };
      },
    );

    const requestBody = {
      batch_size: data.batch_size,
      ignore_config: data.ignore_config,
      columns_details: columnsDetailsArray,
      reference_patient_id_column: data.reference_patient_id_column || null,
      reference_enc_id_column: data.reference_enc_id_column || null,
    };

    // call the POST mutation
    submitTableDetails(requestBody);
  };

  // For the "Save" in the modal
  const handleModalSave = () => {
    // This triggers the same "onSubmit" as the parent's "Save" button
    handleSubmit(onSubmit)();
  };

  // -----------
  // For real-time updates from the modal (PHI, rule)
  // -----------
  const updateColumnDetail = (
    columnName: string,
    partialData: {
      is_phi?: string;
      de_identification_rule?: string;
      mask_value?: string;
    },
  ) => {
    // get current from the parent's form
    const current = columnsDetails[columnName] || {};
    const updated = { ...current, ...partialData };

    // If user sets PHI to "false", clear rule + mask
    if (partialData.is_phi === "false") {
      updated.de_identification_rule = "";
      updated.mask_value = "";
    }

    // If user sets rule = "MASK" and there's no mask_value yet
    if (
      partialData.de_identification_rule === "MASK" &&
      !current.mask_value
    ) {
      updated.mask_value = `<${columnName}>`;
    }

    // If user picks a rule != "MASK", remove mask_value
    if (
      partialData.de_identification_rule &&
      partialData.de_identification_rule !== "MASK"
    ) {
      updated.mask_value = "";
    }

    // setValue in the parent's form
    setValue(`columns_details.${columnName}`, updated, {
      shouldDirty: true,
    });
  };

  // -----------
  // Filter tables by search
  // -----------
  // const filteredTables = tablesData
  //   ? Object.entries(tablesData).filter(([name]) =>
  //       name.toLowerCase().includes(searchQuery.toLowerCase()),
  //     )
  //   : [];

  const filteredTables = (tablesData || [])
    .filter((t) => t.table_name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter((t) => (deidStatusFilter === "all" ? true : t.deid.status === deidStatusFilter))
    .filter((t) => (qcStatusFilter === "all" ? true : t.qc.status === qcStatusFilter))
    .filter((t) => (embdStatusFilter === "all" ? true : t.embd.status === embdStatusFilter))
    .filter((t) => (gcpStatusFilter === "all" ? true : t.gcp.status === gcpStatusFilter))
    .filter((t) =>
      phiFilter === "any"
        ? true
        : phiFilter === "done"
          ? t.is_phi_marking_done === true
          : t.is_phi_marking_done === false,
    );
  // -----------
  // LOADING STATES
  // -----------
  // if (isTablesLoading) {
  //   return <div>Loading tables...</div>;
  // }

  // -----------
  // RENDER
  // -----------

  console.log({ filteredTables })
  return (
    <>
      <div className="flex w-full max-h-full flex-row rounded-xl bg-white p-8">
        {/* LEFT: Table list */}
        <div className="flex w-full max-w-56 flex-col gap-1 border-r border-borderColor pr-8">
          {/* Search + Filter */}
          <div className="mb-4 flex items-center gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                className="h-8 w-full rounded-full border-none bg-background px-4 pr-10 text-sm"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-400" />
            </div>
            <div className="relative inline-block text-left">
              <button
                type="button"
                className={`flex h-8 w-8 items-center justify-center rounded-full bg-background hover:bg-mischka ${
                  (deidStatusFilter !== "all" || qcStatusFilter !== "all" || embdStatusFilter !== "all" || gcpStatusFilter !== "all" || phiFilter !== "any") ? "ring-2 ring-secondary" : ""
                }`}
                onClick={() => setIsFilterOpen((v) => !v)}
                title="Filter"
              >
                <FiFilter className="text-gray-600" />
              </button>
              {isFilterOpen && (
                <div className="absolute right-0 z-20 mt-2 w-64 origin-top-right rounded-md bg-white py-2 text-sm shadow-lg ring-1 ring-black ring-opacity-5 max-h-96 overflow-y-auto">
                  {/* Deid Status Filter */}
                  <button
                    className="block w-full px-3 py-2 text-left font-semibold text-gray-700"
                    disabled
                  >
                    Deid Status
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setDeidStatusFilter("all"); setIsFilterOpen(false); }}
                  >
                    All
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setDeidStatusFilter(StatusEnum.NotStarted); setIsFilterOpen(false); }}
                  >
                    Not Started
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setDeidStatusFilter(StatusEnum.InProgress); setIsFilterOpen(false); }}
                  >
                    In Progress
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setDeidStatusFilter(StatusEnum.Completed); setIsFilterOpen(false); }}
                  >
                    Completed
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setDeidStatusFilter(StatusEnum.Failed); setIsFilterOpen(false); }}
                  >
                    Failed
                  </button>
                  
                  <div className="my-2 h-px bg-gray-200" />
                  
                  {/* QC Status Filter */}
                  <button
                    className="block w-full px-3 py-2 text-left font-semibold text-gray-700"
                    disabled
                  >
                    QC Status
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setQcStatusFilter("all"); setIsFilterOpen(false); }}
                  >
                    All
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setQcStatusFilter(StatusEnum.NotStarted); setIsFilterOpen(false); }}
                  >
                    Not Started
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setQcStatusFilter(StatusEnum.InProgress); setIsFilterOpen(false); }}
                  >
                    In Progress
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setQcStatusFilter(StatusEnum.Completed); setIsFilterOpen(false); }}
                  >
                    Completed
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setQcStatusFilter(StatusEnum.Failed); setIsFilterOpen(false); }}
                  >
                    Failed
                  </button>
                  
                  <div className="my-2 h-px bg-gray-200" />
                  
                  {/* EMBD Status Filter */}
                  <button
                    className="block w-full px-3 py-2 text-left font-semibold text-gray-700"
                    disabled
                  >
                    EMBD Status
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setEmbdStatusFilter("all"); setIsFilterOpen(false); }}
                  >
                    All
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setEmbdStatusFilter(StatusEnum.NotStarted); setIsFilterOpen(false); }}
                  >
                    Not Started
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setEmbdStatusFilter(StatusEnum.InProgress); setIsFilterOpen(false); }}
                  >
                    In Progress
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setEmbdStatusFilter(StatusEnum.Completed); setIsFilterOpen(false); }}
                  >
                    Completed
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setEmbdStatusFilter(StatusEnum.Failed); setIsFilterOpen(false); }}
                  >
                    Failed
                  </button>
                  
                  <div className="my-2 h-px bg-gray-200" />
                  
                  {/* GCP Status Filter */}
                  <button
                    className="block w-full px-3 py-2 text-left font-semibold text-gray-700"
                    disabled
                  >
                    GCP Status
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setGcpStatusFilter("all"); setIsFilterOpen(false); }}
                  >
                    All
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setGcpStatusFilter(StatusEnum.NotStarted); setIsFilterOpen(false); }}
                  >
                    Not Started
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setGcpStatusFilter(StatusEnum.InProgress); setIsFilterOpen(false); }}
                  >
                    In Progress
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setGcpStatusFilter(StatusEnum.Completed); setIsFilterOpen(false); }}
                  >
                    Completed
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setGcpStatusFilter(StatusEnum.Failed); setIsFilterOpen(false); }}
                  >
                    Failed
                  </button>
                  
                  <div className="my-2 h-px bg-gray-200" />
                  
                  {/* PHI Marking Filter */}
                  <button
                    className="block w-full px-3 py-2 text-left font-semibold text-gray-700"
                    disabled
                  >
                    PHI Marking
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setPhiFilter("any"); setIsFilterOpen(false); }}
                  >
                    Any
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setPhiFilter("done"); setIsFilterOpen(false); }}
                  >
                    Done
                  </button>
                  <button
                    className="block w-full px-3 py-2 text-left hover:bg-gray-100"
                    onClick={() => { setPhiFilter("pending"); setIsFilterOpen(false); }}
                  >
                    Pending
                  </button>
                </div>
              )}
            </div>
          </div>

          {!tablesData || filteredTables.length === 0 ? (
            <div className="flex h-72 items-center justify-center text-sm text-secText">
              No tables Found
            </div>
          ) : (
            filteredTables.map((t) => (
              <div
                key={t.table_id}
                className={`flex cursor-pointer items-center px-4 py-2 text-sm hover:bg-background \$
                  ${selectedTableId === t.table_id ? "bg-background" : ""}
                }`}
                onClick={() => setSelectedTableId(t.table_id)}
              >
                <span className="overflow-hidden text-ellipsis">{t.table_name}</span>
                <span className="ml-auto text-lg">
                  {t.deid.status === StatusEnum.InProgress && (
                    <GoDotFill className="text-secondary" />
                  )}
                  {t.deid.status === StatusEnum.Completed && (
                    <FaRegCircleCheck className="text-secondary" />
                  )}
                  {t.deid.status === StatusEnum.Failed && (
                    <IoIosCloseCircleOutline className="text-bittersweet" />
                  )}
                </span>
              </div>
            ))
          )}
        </div>

        {/* RIGHT: Table details + form */}
        <div className="flex w-full flex-col pl-8">
          {isTableDetailsLoading ? (
            <div>Loading table details...</div>
          ) : tableDetails ? (
            <>
              <div className="flex w-full flex-row items-center">
                <h2 className="mb-1 text-xl font-semibold">
                  {tableDetails.table_name}
                </h2>
                <div className="ml-auto flex items-center gap-2">
                  <button
                    className="flex items-center rounded-md bg-background px-3 py-2 hover:bg-mischka disabled:opacity-50 disabled:cursor-not-allowed"
                    onClick={handleViewPipeline}
                    disabled={isLiveUpdateLoading}
                  >
                    {isLiveUpdateLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-1"></div>
                        Loading...
                      </>
                    ) : (
                      <>
                        <MdOutlineLiveTv className="mr-1" />
                        View Pipeline
                      </>
                    )}
                  </button>
                  <button
                    className="flex items-center rounded-md bg-background px-3 py-2 hover:bg-mischka"
                    onClick={() => setIsViewModalOpen(true)}
                  >
                    <CgEyeAlt className="mr-1" />
                    View Table
                  </button>
                </div>
              </div>
              <div className="-mt-2 w-8 border-2 border-secondary" />

              {/* Basic stats row */}
              <div className="mb-2 flex flex-row gap-8 border-b border-borderColor py-2">
                <div className="text-sm font-medium">
                  Row Count:
                  <span className="ml-1 text-secondary">
                    {tableDetails.rows_count}
                  </span>
                </div>
                <div className="text-sm font-medium">
                  DIT Status:
                  <span className="ml-1 text-secondary">
                    {StatusEnum[tableDetails.processing_status]}
                  </span>
                </div>
                <div className="text-sm font-medium">
                  Qc Status: <span className="ml-1 text-secondary">{TableQCStatus[tableDetails.qc_status]}</span>
                </div>
              </div>

              {/* The main form: columns, references, etc. */}
              <form
                className="flex w-full flex-col gap-4 rounded-lg border-borderColor"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* COLUMN LIST (in the parent UI) */}
                <div className="mt-2 flex flex-col gap-4">
                  <h3 className="font-semibold">
                    Columns (
                    {tableDetails.table_details_for_ui.columns_details.length})
                  </h3>
                  <div className="scrollbar-visible flex h-56 w-full flex-col gap-4 overflow-y-auto">
                    {tableDetails.table_details_for_ui.columns_details.map(
                      (column) => {
                        const colName = column.column_name;
                        const fieldPath = `columns_details.${colName}` as const;
                        // We'll just read the form state:
                        const colState = columnsDetails[colName] || {
                          is_phi: "false",
                          de_identification_rule: "",
                          mask_value: "",
                        };

                        const isPHI = colState.is_phi === "true";
                        // We won't do a ton of watchers here; we rely on 'updateColumnDetail'
                        return (
                          <div key={colName} className="flex gap-4">
                            {/* Column name (readonly) */}
                            <div className="max-w-[25%] flex-col">
                              <label className="text-sm text-secText">
                                Column Name
                              </label>
                              <input
                                className="mt-1 h-10 w-full rounded-md border px-4 text-sm"
                                value={colName}
                                disabled
                              />
                            </div>

                            {/* Is PHI */}
                            <div className="flex-col">
                              <label className="text-sm text-secText">
                                Is PHI
                              </label>
                              <Select
                                className="mt-1 h-10 w-full rounded-md"
                                options={[
                                  { value: "true", label: "Yes" },
                                  { value: "false", label: "No" },
                                ]}
                                // We can use the parent's "setValue" or
                                // do an onChange that calls updateColumnDetail
                                value={colState.is_phi}
                                onChange={(e) => {
                                  updateColumnDetail(colName, {
                                    is_phi: e.target.value,
                                  });
                                }}
                              />
                            </div>

                            {/* De-identification Rule (only if PHI = true) */}
                            {isPHI && (
                              <div className="flex-col">
                                <label className="my-0.5 line-clamp-1 overflow-ellipsis text-sm text-secText">
                                  De-identification Rule
                                </label>
                                <Select
                                  className="mt-1 h-10 w-full rounded-md"
                                  options={(deIdRulesData?.rules || []).map(
                                    (rule) => ({
                                      value: rule,
                                      label: rule,
                                    }),
                                  )}
                                  placeholder="Select Rule"
                                  value={colState.de_identification_rule}
                                  onChange={(e) => {
                                    updateColumnDetail(colName, {
                                      de_identification_rule: e.target.value,
                                    });
                                  }}
                                />
                              </div>
                            )}

                            {/* Mask Value (only if rule = MASK) */}
                            {colState.de_identification_rule ===
                              "MASK" && (
                                <div className="max-w-[22%] flex-col">
                                  <label className="text-sm text-secText">
                                    Mask Value
                                  </label>
                                  <Input
                                    className="mt-1 text-sm text-secText"
                                    registerField={register(
                                      `${fieldPath}.mask_value`,
                                      {
                                        required: "Mask Value is required",
                                      },
                                    )}
                                  />
                                  {errors.columns_details?.[colName]
                                    ?.mask_value && (
                                      <span className="mt-2 text-xs text-red-500">
                                        {
                                          errors.columns_details?.[colName]
                                            ?.mask_value?.message
                                        }
                                      </span>
                                    )}
                                </div>
                              )}
                          </div>
                        );
                      },
                    )}
                  </div>

                  {/* Reference columns */}
                  <h3 className="mt-4 font-semibold">Reference Columns</h3>
                  <div className="flex gap-4">
                    <div className="w-1/2 flex-col">
                      <label className="text-sm text-secText">
                        Patient ID Column
                      </label>
                      <Select
                        className="mt-1 h-10 w-full rounded-md"
                        options={tableDetails.table_details_for_ui.columns_details.map(
                          (col) => ({
                            value: col.column_name,
                            label: col.column_name,
                          }),
                        )}
                        placeholder="Select Column"
                        {...register("reference_patient_id_column")}
                      />
                    </div>
                    <div className="w-1/2 flex-col">
                      <label className="text-sm text-secText">
                        Encounter ID Column
                      </label>
                      <Select
                        className="mt-1 h-10 w-full rounded-md"
                        options={tableDetails.table_details_for_ui.columns_details.map(
                          (col) => ({
                            value: col.column_name,
                            label: col.column_name,
                          }),
                        )}
                        placeholder="Select Column"
                        {...register("reference_enc_id_column")}
                      />
                    </div>
                  </div>
                </div>

                {/* Configuration Status */}
                {clientDetails && dumpDetails && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3">Prerequisites Status</h4>
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

                {/* ACTION BUTTONS: Save, Start/Stop De-identification */}
                <div className="mt-6 flex flex-col gap-4 border-t border-gray-200 pt-6">
                  <div className="flex flex-row items-center gap-4">
                    <Button
                      variant="secondary"
                      loading={isTableDetailsUpdateLoading}
                      className="min-w-[120px]"
                    >
                      <FiSave className="mr-2 inline" />
                      Save
                    </Button>
                    {permissions?.StartDeIdentificationButton.has_permission && (
                      <div className="relative group">
                        <Button
                          type="button"
                          variant={
                            tableDetails.processing_status === StatusEnum.InProgress
                              ? "danger"
                              : "primary"
                          }
                          loading={
                            isStartedDeIdentificationLoading ||
                            isStopDeIdentificationLoading
                          }
                          disabled={!canStartDeIdentification}
                          onClick={(e) => {
                            e.preventDefault();
                            if (
                              tableDetails.processing_status ===
                              StatusEnum.InProgress
                            ) {
                              handleStopDeIdentification();
                            } else {
                              handleDeIdentification();
                            }
                          }}
                          className="min-w-[200px]"
                        >
                          {tableDetails.processing_status === StatusEnum.InProgress ? (
                            <>
                              <CiStop1 className="mr-2 inline" />
                              Stop De-identification
                            </>
                          ) : (
                            <>
                              <CiPlay1 className="mr-2 inline" />
                              Start De-identification
                            </>
                          )}
                        </Button>
                        
                        {/* Disabled reason tooltip */}
                        {!canStartDeIdentification && (
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                            {!clientDetails?.client_presetup_config_configured && "Client presetup configuration is not complete"}
                            {clientDetails?.client_presetup_config_configured && !dumpDetails?.is_dump_processing_done && "Dump processing is not complete"}
                            {clientDetails?.client_presetup_config_configured && dumpDetails?.is_dump_processing_done && !dumpDetails?.is_primary_key_uploaded && "Primary key configuration is not uploaded"}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Disabled state message */}
                  {!canStartDeIdentification && (
                    <div className="text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>
                          {!clientDetails?.client_presetup_config_configured && "Complete client setup configuration first"}
                          {clientDetails?.client_presetup_config_configured && !dumpDetails?.is_dump_processing_done && "Wait for dump processing to complete"}
                          {clientDetails?.client_presetup_config_configured && dumpDetails?.is_dump_processing_done && !dumpDetails?.is_primary_key_uploaded && "Upload primary key configuration first"}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* PHI Marking / QC checkboxes */}
                <div className="mt-4 flex flex-row gap-4">


                  {/* QC Passed / Failed */}
                  {/* {permissions?.TableQCTick.has_permission && (
                    <>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={qcPassed}
                          onChange={(e) => {
                            handleCheckboxChange(
                              ActionTypes.MARK_QC_PASSED,
                              e.target.checked,
                              setQcPassed,
                            );
                          }}
                          className="mr-2 h-4 w-4 checked:accent-secondary"
                        />
                        <label className="text-sm font-medium">QC Passed</label>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          checked={qcFailed}
                          onChange={(e) => {
                            handleCheckboxChange(
                              ActionTypes.MARK_QC_FAILED,
                              e.target.checked,
                              setQcFailed,
                            );
                          }}
                          className="mr-2 h-4 w-4 checked:accent-secondary"
                        />
                        <label className="text-sm font-medium">QC Failed</label>
                      </div>
                    </>
                  )} */}
                </div>
              </form>
            </>
          ) : (
            <div className="flex h-96 items-center justify-center text-sm text-secText">
              Select a table to view details
            </div>
          )}
        </div>
      </div>

      {/* The "View Table" modal with PHI & rule dropdowns in the header row */}
      {tableDetails && (
        <TableViewModal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          tableId={tableDetails.table_id}
          tableName={tableDetails.table_name}
          /** 1) pass the parent's columns details */
          columnsDetails={columnsDetails}
          /** 2) pass the update function */
          updateColumnDetail={updateColumnDetail}
          /** 3) pass parent's "onSubmit" trigger so the modal can Save */
          onSave={handleModalSave}
          /** 4) pass the de-identification rules from API */
          deid_rules={deIdRulesData?.rules || []}
        />
      )}

      {/* Live Update Pipeline Modal */}
      {tableDetails && isLiveModalOpen && (
        <LiveUpdatePipelineModal
          onClose={() => setIsLiveModalOpen(false)}
          tableName={tableDetails.table_name}
          statuses={{
            phi: liveUpdateData?.is_phi_marking_done ? StatusEnum.Completed : StatusEnum.InProgress,
            deid: liveUpdateData?.deid_status ?? tableDetails.processing_status as number,
            qc: liveUpdateData?.qc_status ?? tableDetails.qc_status as number,
            gcp: liveUpdateData?.is_cloud_moved ?? (tablesData || []).find((t) => t.table_id === selectedTableId)?.gcp_status ?? StatusEnum.NotStarted,
            embd: liveUpdateData?.embedding_status ?? (tablesData || []).find((t) => t.table_id === selectedTableId)?.embd_status ?? StatusEnum.NotStarted,
          }}
        />
      )}
    </>
  );
};

/** Modal component: Jenkins-like pipeline for live updates */
const LiveUpdatePipelineModal: React.FC<{
  onClose: () => void;
  tableName: string;
  statuses: { phi: number; deid: number; qc: number; gcp: number; embd: number };
}> = ({ onClose, tableName, statuses }) => {
  const statusToColor = (s: number) => {
    switch (s) {
      case StatusEnum.Completed:
        return "bg-green-500";
      case StatusEnum.InProgress:
        return "bg-yellow-500 animate-pulse";
      case StatusEnum.Failed:
        return "bg-red-500";
      case StatusEnum.NotStarted:
      default:
        return "bg-gray-300";
    }
  };

  const statusToGeneralLabel = (s: number) => {
    switch (s) {
      case StatusEnum.Completed:
        return "Completed";
      case StatusEnum.InProgress:
        return "In Progress";
      case StatusEnum.Failed:
        return "Failed";
      case StatusEnum.NotStarted:
      default:
        return "Not Started";
    }
  };

  const statusToGcpLabel = (s: number) => {
    switch (s) {
      case StatusEnum.Completed:
        return "Moved";
      case StatusEnum.InProgress:
        return "In Process";
      case StatusEnum.Failed:
        return "Failed";
      case StatusEnum.NotStarted:
      default:
        return "Not moved";
    }
  };

  const statusToPhiLabel = (s: number) => {
    switch (s) {
      case StatusEnum.Completed:
        return "Completed";
      case StatusEnum.InProgress:
        return "In Progress";
      case StatusEnum.Failed:
        return "Failed";
      case StatusEnum.NotStarted:
      default:
        return "Not Started";
    }
  };

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-6xl max-h-[90vh] rounded-xl bg-white p-6 shadow-xl overflow-hidden flex flex-col">
        <div className="mb-4 flex items-center">
          <h3 className="text-lg font-semibold">Live Update - {tableName}</h3>
          <div className="ml-auto flex items-center gap-2">
            <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">
              Live Data
            </span>
            <button className="rounded-md bg-background px-3 py-1 text-sm hover:bg-mischka" onClick={onClose}>
              Close
            </button>
          </div>
        </div>

        {/* SVG Pipeline: phi -> deid -> qc branching to gcp and embd */}
        <div className="flex-1 w-full overflow-auto p-4">
          <svg viewBox="0 0 1000 280" className="w-full h-auto min-h-[280px]">
            <defs>
              <marker id="arrow" markerWidth="10" markerHeight="10" refX="10" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L10,3 L0,6 Z" fill="#4b5563" />
              </marker>
              {/* Animated stripe fill for active node */}
              <pattern id="stripe" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(20)">
                <rect width="20" height="40" fill="#6366f1" opacity="0.12">
                  <animate attributeName="x" from="-40" to="40" dur="1.2s" repeatCount="indefinite" />
                </rect>
              </pattern>
            </defs>

            {(() => {
              const inProgressAny = [statuses.phi, statuses.deid, statuses.qc, statuses.gcp, statuses.embd].includes(StatusEnum.InProgress);
              const isActive = (key: 'phi' | 'deid' | 'qc' | 'gcp' | 'embd') => {
                if (inProgressAny) return statuses[key] === StatusEnum.InProgress;
                if (key === 'phi') return statuses.phi !== StatusEnum.Completed;
                if (key === 'deid') return statuses.phi === StatusEnum.Completed && statuses.deid !== StatusEnum.Completed;
                if (key === 'qc') return statuses.phi === StatusEnum.Completed && statuses.deid === StatusEnum.Completed && statuses.qc !== StatusEnum.Completed;
                if (key === 'gcp') return statuses.phi === StatusEnum.Completed && statuses.deid === StatusEnum.Completed && statuses.qc === StatusEnum.Completed && statuses.gcp !== StatusEnum.Completed;
                if (key === 'embd') return statuses.phi === StatusEnum.Completed && statuses.deid === StatusEnum.Completed && statuses.qc === StatusEnum.Completed && statuses.embd !== StatusEnum.Completed;
                return false;
              };

              const Node = ({ x, y, label, title, colorClass, active }: { x: number; y: number; label: string; title: string; colorClass: string; active: boolean }) => (
                <g>
                  {active && (
                    <rect x={x - 6} y={y - 6} rx={16} ry={16} width={212} height={72} fill="none" className="animate-pulse" stroke="#6366f1" strokeWidth={2} />
                  )}
                  <rect x={x} y={y} rx={12} ry={12} width={200} height={60} className={`fill-white`} stroke="#d1d5db" strokeWidth={active ? 3 : 2} />
                  <rect x={x + 4} y={y + 4} rx={10} ry={10} width={192} height={52} className={`${colorClass} ${active ? 'opacity-30' : 'opacity-20'}`} />
                  {active && (
                    <rect x={x + 4} y={y + 4} rx={10} ry={10} width={192} height={52} fill="url(#stripe)" />
                  )}
                  <text x={x + 100} y={y + 35} textAnchor="middle" className="fill-gray-900 text-[14px] font-semibold">{label}</text>
                  <text x={x + 100} y={y + 80} textAnchor="middle" className="fill-gray-500 text-[11px]">{title}</text>
                </g>
              );

              return (
                <>
                  <Node x={50} y={110} label={statusToPhiLabel(statuses.phi)} title="phi marking" colorClass={statusToColor(statuses.phi)} active={isActive('phi')} />
                  <Node x={300} y={110} label={statusToGeneralLabel(statuses.deid)} title="deid status" colorClass={statusToColor(statuses.deid)} active={isActive('deid')} />
                  <Node x={550} y={110} label={statusToGeneralLabel(statuses.qc)} title="qc status" colorClass={statusToColor(statuses.qc)} active={isActive('qc')} />
                  <Node x={800} y={50} label={statusToGcpLabel(statuses.gcp)} title="gcp status" colorClass={statusToColor(statuses.gcp)} active={isActive('gcp')} />
                  <Node x={800} y={170} label={statusToGeneralLabel(statuses.embd)} title="embdd status" colorClass={statusToColor(statuses.embd)} active={isActive('embd')} />
                </>
              );
            })()}

            {/* Edges */}
            {/* PHI to DEID */}
            <line id="edge_phi_deid" x1="250" y1="140" x2="300" y2="140" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" />
            {/* DEID to QC */}
            <line id="edge_deid_qc" x1="500" y1="140" x2="550" y2="140" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" />
            {/* QC to GCP (up-right) */}
            <path id="edge_qc_gcp" d="M 750 140 C 790 140, 790 80, 800 80" fill="none" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" />
            {/* QC to EMBD (down-right) */}
            <path id="edge_qc_embd" d="M 750 140 C 790 140, 790 200, 800 200" fill="none" stroke="#4b5563" strokeWidth="2" markerEnd="url(#arrow)" />

            {/* Flow dots move only when previous is Completed and next is In Progress */}
            {statuses.phi === StatusEnum.Completed && statuses.deid === StatusEnum.InProgress && (
              <circle r="4" fill="#6366f1">
                <animateMotion dur="1.2s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#edge_phi_deid" />
                </animateMotion>
              </circle>
            )}
            {statuses.deid === StatusEnum.Completed && statuses.qc === StatusEnum.InProgress && (
              <circle r="4" fill="#6366f1">
                <animateMotion dur="1.2s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#edge_deid_qc" />
                </animateMotion>
              </circle>
            )}
            {statuses.qc === StatusEnum.Completed && statuses.gcp === StatusEnum.InProgress && (
              <circle r="4" fill="#6366f1">
                <animateMotion dur="1.4s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#edge_qc_gcp" />
                </animateMotion>
              </circle>
            )}
            {statuses.qc === StatusEnum.Completed && statuses.embd === StatusEnum.InProgress && (
              <circle r="4" fill="#6366f1">
                <animateMotion dur="1.4s" repeatCount="indefinite" rotate="auto">
                  <mpath href="#edge_qc_embd" />
                </animateMotion>
              </circle>
            )}
          </svg>
        </div>
      </div>
    </div>
  );
};
