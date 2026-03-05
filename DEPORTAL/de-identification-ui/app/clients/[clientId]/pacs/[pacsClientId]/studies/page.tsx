"use client";

import { useEffect, useState, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { getRequest, postRequest } from "@/app/utils/apiService";
import { API_URL } from "@/app/api/Config";

// Cloud upload status constants
const CLOUD_UPLOAD_STATUS = {
  NOT_STARTED: 0,
  IN_PROGRESS: 1,
  COMPLETED: 2,
  FAILED: 3,
};

// De-identification status constants
const DEID_STATUS = {
  PENDING: 0,
  COMPLETED: 1,
  FAILED: 2,
  IN_PROCESS: 3,
};

interface PacsPatient {
  id: number;
  nd_patient_id: number | null;
  client_patient_id: number;
  deid_status: number;
  cloud_uploaded: number; // changed from boolean to number
  study_uids: string[];
}

interface PacsStudy {
  id: number;
  client_study_instance_uid: string;
  nd_study_instance_uid: string | null;
  deid_status: number;
  cloud_uploaded: number; // changed from boolean to number
  series_uids: string[];
}

interface PacsSeries {
  id: number;
  client_series_instance_uid: string;
  nd_series_instance_uid: string | null;
  deid_status: number;
  cloud_uploaded: number; // changed from boolean to number
  instance_uids: string[];
}

interface PacsInstance {
  id: number;
  client_sop_instance_uid: string;
  nd_sop_instance_uid: string | null;
  deid_status: number;
  cloud_uploaded: number; // changed from boolean to number
}

type SelectionType = 'patient' | 'study' | 'series' | 'instance';

// Filter interface
interface FilterState {
  clientPatientId: string;
  ndPatientId: string;
  deidStatus: number[];
  cloudStatus: number[];
  searchText: string;
}

// Custom color palette for improved color combinations
const COLORS = {
  primary: {
    bg: "bg-indigo-600",
    hover: "hover:bg-indigo-700",
    text: "text-white",
    border: "border-indigo-600",
    lightBg: "bg-indigo-50",
    lightText: "text-indigo-800",
    borderLight: "border-indigo-200"
  },
  secondary: {
    bg: "bg-teal-600",
    hover: "hover:bg-teal-700",
    text: "text-white",
    border: "border-teal-600",
    lightBg: "bg-teal-50",
    lightText: "text-teal-800",
    borderLight: "border-teal-200"
  },
  warning: {
    bg: "bg-amber-100",
    text: "text-amber-800"
  },
  success: {
    bg: "bg-emerald-100",
    text: "text-emerald-800"
  },
  error: {
    bg: "bg-rose-100",
    text: "text-rose-800"
  },
  info: {
    bg: "bg-sky-100",
    text: "text-sky-800"
  },
  gray: {
    bg: "bg-gray-100",
    text: "text-gray-800"
  }
};

// Cloud upload status icon component
function CloudUploadStatusIcon({ status }: { status: number }) {
  // SVGs for each status
  switch (status) {
    case CLOUD_UPLOAD_STATUS.NOT_STARTED:
      // Outline cloud
      return (
        <svg className="w-5 h-5 mr-1 text-slate-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 18a5 5 0 01.7-9.9A7 7 0 0120 11a4 4 0 01-1 7.9H7z" />
        </svg>
      );
    case CLOUD_UPLOAD_STATUS.IN_PROGRESS:
      // Cloud with upload arrow
      return (
        <svg className="w-5 h-5 mr-1 text-sky-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 18a5 5 0 01.7-9.9A7 7 0 0120 11a4 4 0 01-1 7.9H7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v4m0 0l-2-2m2 2l2-2" />
        </svg>
      );
    case CLOUD_UPLOAD_STATUS.COMPLETED:
      // Filled cloud
      return (
        <svg className="w-5 h-5 mr-1 text-sky-900" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 18a5 5 0 01.7-9.9A7 7 0 0120 11a4 4 0 01-1 7.9H7z" />
        </svg>
      );
    case CLOUD_UPLOAD_STATUS.FAILED:
      // Red cloud with exclamation
      return (
        <svg className="w-5 h-5 mr-1 text-rose-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 18a5 5 0 01.7-9.9A7 7 0 0120 11a4 4 0 01-1 7.9H7z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 13v2m0 4h.01" />
        </svg>
      );
    default:
      // Unknown status, fallback to outline
      return (
        <svg className="w-5 h-5 mr-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 18a5 5 0 01.7-9.9A7 7 0 0120 11a4 4 0 01-1 7.9H7z" />
        </svg>
      );
  }
}

function getCloudUploadStatusLabel(status: number) {
  switch (status) {
    case CLOUD_UPLOAD_STATUS.NOT_STARTED:
      return { label: "Not Started", color: `${COLORS.gray.bg} ${COLORS.gray.text} border border-gray-200` };
    case CLOUD_UPLOAD_STATUS.IN_PROGRESS:
      return { label: "In Progress", color: `${COLORS.info.bg} ${COLORS.info.text} border border-sky-200` };
    case CLOUD_UPLOAD_STATUS.COMPLETED:
      return { label: "Completed", color: `${COLORS.success.bg} ${COLORS.success.text} border border-emerald-200` };
    case CLOUD_UPLOAD_STATUS.FAILED:
      return { label: "Failed", color: `${COLORS.error.bg} ${COLORS.error.text} border border-rose-200` };
    default:
      return { label: "Unknown", color: `${COLORS.gray.bg} ${COLORS.gray.text} border border-gray-200` };
  }
}

// Action Menu Dropdown Component
function ActionMenuDropdown({ 
  isOpen, 
  onClose, 
  onStartDeid, 
  onStartUpload 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  onStartDeid: () => void; 
  onStartUpload: () => void; 
}) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-25 z-40" 
        onClick={onClose}
      />
      
      {/* Dropdown */}
      <div className="absolute top-16 right-4 w-48 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
        <div className="py-2">
          <button
            onClick={onStartDeid}
            className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-3"
          >
            <svg className="w-4 h-4 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Start DeID
          </button>
          <button
            onClick={onStartUpload}
            className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors flex items-center gap-3"
          >
            <svg className="w-4 h-4 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
            </svg>
            Start Upload
          </button>
        </div>
      </div>
    </>
  );
}

// Filter Dropdown Component
function FilterDropdown({ 
  isOpen, 
  onClose, 
  filters, 
  onFiltersChange, 
  onClearFilters 
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  filters: FilterState; 
  onFiltersChange: (filters: FilterState) => void; 
  onClearFilters: () => void; 
}) {
  if (!isOpen) return null;

  const handleFilterChange = (key: keyof FilterState, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const handleStatusToggle = (statusType: 'deidStatus' | 'cloudStatus', status: number) => {
    const currentStatuses = filters[statusType];
    const newStatuses = currentStatuses.includes(status)
      ? currentStatuses.filter(s => s !== status)
      : [...currentStatuses, status];
    handleFilterChange(statusType, newStatuses);
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-25 z-40" 
        onClick={onClose}
      />
      
      {/* Dropdown */}
      <div className="absolute top-16 left-4 w-96 bg-white rounded-lg shadow-xl border border-gray-200 z-50">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Search by name, identifier or modality
            </label>
            <input
              type="text"
              value={filters.searchText}
              onChange={(e) => handleFilterChange('searchText', e.target.value)}
              placeholder="Search by name, identifier or modality"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* Client Patient ID */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Client Patient ID
            </label>
            <input
              type="text"
              value={filters.clientPatientId}
              onChange={(e) => handleFilterChange('clientPatientId', e.target.value)}
              placeholder="Enter client patient ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* ND Patient ID */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-6">
              ND Patient ID
            </label>
            <input
              type="text"
              value={filters.ndPatientId}
              onChange={(e) => handleFilterChange('ndPatientId', e.target.value)}
              placeholder="Enter ND patient ID"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          {/* De-identification Status */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              De-identification Status
            </label>
            <div className="space-y-2">
              {[
                { value: DEID_STATUS.PENDING, label: "Pending" },
                { value: DEID_STATUS.IN_PROCESS, label: "In Process" },
                { value: DEID_STATUS.COMPLETED, label: "Completed" },
                { value: DEID_STATUS.FAILED, label: "Failed" }
              ].map((status) => (
                <label key={status.value} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.deidStatus.includes(status.value)}
                    onChange={() => handleStatusToggle('deidStatus', status.value)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{status.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Cloud Upload Status */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cloud Upload Status
            </label>
            <div className="space-y-2">
              {[
                { value: CLOUD_UPLOAD_STATUS.NOT_STARTED, label: "Not Started" },
                { value: CLOUD_UPLOAD_STATUS.IN_PROGRESS, label: "In Progress" },
                { value: CLOUD_UPLOAD_STATUS.COMPLETED, label: "Completed" },
                { value: CLOUD_UPLOAD_STATUS.FAILED, label: "Failed" }
              ].map((status) => (
                <label key={status.value} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.cloudStatus.includes(status.value)}
                    onChange={() => handleStatusToggle('cloudStatus', status.value)}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-700">{status.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-gray-200">
            <button
              onClick={onClearFilters}
              className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear
            </button>
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
}



export default function PacsStudiesPage() {
  const { clientId, pacsClientId } = useParams();
  const router = useRouter();

  // Data states
  const [patients, setPatients] = useState<PacsPatient[]>([]);
  const [studies, setStudies] = useState<PacsStudy[]>([]);
  const [series, setSeries] = useState<PacsSeries[]>([]);
  const [instances, setInstances] = useState<PacsInstance[]>([]);

  // Selection states
  const [selectedPatient, setSelectedPatient] = useState<PacsPatient | null>(null);
  const [selectedStudy, setSelectedStudy] = useState<PacsStudy | null>(null);
  const [selectedSeries, setSelectedSeries] = useState<PacsSeries | null>(null);
  const [selectedInstance, setSelectedInstance] = useState<PacsInstance | null>(null);
  const [currentSelection, setCurrentSelection] = useState<SelectionType | null>(null);

  // Filter states
  const [filters, setFilters] = useState<FilterState>({
    clientPatientId: '',
    ndPatientId: '',
    deidStatus: [],
    cloudStatus: [],
    searchText: ''
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filtered data
  const [filteredPatients, setFilteredPatients] = useState<PacsPatient[]>([]);

  // UI states
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoadingStudies, setIsLoadingStudies] = useState(false);
  const [isLoadingSeries, setIsLoadingSeries] = useState(false);
  const [isLoadingInstances, setIsLoadingInstances] = useState(false);
  const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);

  // Start DeID for a specific item (patient/study/series/instance)
  const handleStartDeid = async (item: PacsPatient | PacsStudy | PacsSeries | PacsInstance) => {
    try {
      const url = `${API_URL}pacs/start_deidentification/${clientId}/${pacsClientId}/`;
      let payload: any = {};

      if ("client_patient_id" in item) {
        payload = {
          hierarchy_type: "patient",
          client_patient_id: item.client_patient_id,
        };
      } else if ("client_study_instance_uid" in item && selectedPatient) {
        payload = {
          hierarchy_type: "study",
          client_patient_id: selectedPatient.client_patient_id,
          client_study_instance_uid: item.client_study_instance_uid,
        };
      } else if ("client_series_instance_uid" in item && selectedPatient && selectedStudy) {
        payload = {
          hierarchy_type: "series",
          client_patient_id: selectedPatient.client_patient_id,
          client_study_instance_uid: selectedStudy.client_study_instance_uid,
          client_series_instance_uid: item.client_series_instance_uid,
        };
      } else if ("client_sop_instance_uid" in item && selectedPatient && selectedStudy && selectedSeries) {
        payload = {
          hierarchy_type: "instance",
          client_patient_id: selectedPatient.client_patient_id,
          client_study_instance_uid: selectedStudy.client_study_instance_uid,
          client_series_instance_uid: selectedSeries.client_series_instance_uid,
          client_sop_instance_uid: item.client_sop_instance_uid,
        };
      } else {
        alert("Invalid selection context for starting DeID");
        return;
      }

      await postRequest<any>(url, payload);
      alert("De-identification process started successfully");
    } catch (error) {
      console.error("Error starting DeID:", error);
      alert("Failed to start de-identification process. Please try again.");
    }
  };
  const handleStartUpload = (item: PacsPatient | PacsStudy | PacsSeries | PacsInstance) => {
    let id = "Unknown";
    if ("client_patient_id" in item) id = `Patient ${item.client_patient_id}`;
    else if ("client_study_instance_uid" in item) id = `Study ${item.client_study_instance_uid}`;
    else if ("client_series_instance_uid" in item) id = `Series ${item.client_series_instance_uid}`;
    else if ("client_sop_instance_uid" in item) id = `Instance ${item.client_sop_instance_uid}`;
    alert(`Start Upload for ${id}`);
    // Implement actual logic here
  };

  // Filter patients based on current filters
  const applyFilters = useCallback((patients: PacsPatient[]) => {
    return patients.filter(patient => {
      // Client Patient ID filter
      if (filters.clientPatientId && !patient.client_patient_id.toString().includes(filters.clientPatientId)) {
        return false;
      }

      // ND Patient ID filter
      if (filters.ndPatientId && (!patient.nd_patient_id || !patient.nd_patient_id.toString().includes(filters.ndPatientId))) {
        return false;
      }

      // De-identification status filter
      if (filters.deidStatus.length > 0 && !filters.deidStatus.includes(patient.deid_status)) {
        return false;
      }

      // Cloud upload status filter
      if (filters.cloudStatus.length > 0 && !filters.cloudStatus.includes(patient.cloud_uploaded)) {
        return false;
      }

      // Search text filter (search in patient ID)
      if (filters.searchText && !patient.client_patient_id.toString().toLowerCase().includes(filters.searchText.toLowerCase())) {
        return false;
      }

      return true;
    });
  }, [filters]);

  // Update filtered patients when filters or patients change
  useEffect(() => {
    setFilteredPatients(applyFilters(patients));
  }, [filters, patients, applyFilters]);

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      clientPatientId: '',
      ndPatientId: '',
      deidStatus: [],
      cloudStatus: [],
      searchText: ''
    });
  };

  const handleGlobalStartDeid = async () => {
    if (currentSelection && (selectedPatient || selectedStudy || selectedSeries || selectedInstance)) {
      try {
        const url = `${API_URL}pacs/start_deidentification/${clientId}/${pacsClientId}/`;
        let payload: any = {};

        if (currentSelection === 'patient' && selectedPatient) {
          payload = {
            hierarchy_type: 'patient',
            client_patient_id: selectedPatient.client_patient_id,
          };
        } else if (currentSelection === 'study' && selectedPatient && selectedStudy) {
          payload = {
            hierarchy_type: 'study',
            client_patient_id: selectedPatient.client_patient_id,
            client_study_instance_uid: selectedStudy.client_study_instance_uid,
          };
        } else if (currentSelection === 'series' && selectedPatient && selectedStudy && selectedSeries) {
          payload = {
            hierarchy_type: 'series',
            client_patient_id: selectedPatient.client_patient_id,
            client_study_instance_uid: selectedStudy.client_study_instance_uid,
            client_series_instance_uid: selectedSeries.client_series_instance_uid,
          };
        } else if (currentSelection === 'instance' && selectedPatient && selectedStudy && selectedSeries && selectedInstance) {
          payload = {
            hierarchy_type: 'instance',
            client_patient_id: selectedPatient.client_patient_id,
            client_study_instance_uid: selectedStudy.client_study_instance_uid,
            client_series_instance_uid: selectedSeries.client_series_instance_uid,
            client_sop_instance_uid: selectedInstance.client_sop_instance_uid,
          };
        } else {
          alert('Invalid selection. Please reselect and try again.');
          setIsActionMenuOpen(false);
          return;
        }

        await postRequest<any>(url, payload);
        alert('De-identification process started successfully');
      } catch (error) {
        console.error('Error starting DeID:', error);
        alert('Failed to start de-identification process. Please try again.');
      }
    } else {
      alert('Please select a patient, study, series, or instance first');
    }
    setIsActionMenuOpen(false);
  };

  const handleGlobalStartUpload = () => {
    if (currentSelection && (selectedPatient || selectedStudy || selectedSeries || selectedInstance)) {
      const item = selectedPatient || selectedStudy || selectedSeries || selectedInstance;
      if (item) {
        handleStartUpload(item);
      }
    } else {
      alert('Please select a patient, study, series, or instance first');
    }
    setIsActionMenuOpen(false);
  };

  useEffect(() => {
    fetchPatients();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId, pacsClientId]);

  const fetchPatients = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await getRequest<{ count: number, results: PacsPatient[] }>(
        `${API_URL}pacs/patients/${pacsClientId}/`
      );
      setPatients(response.results);
    } catch (error) {
      console.error("Error fetching PACS patients:", error);
      setError("Failed to fetch PACS patients. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchStudies = async (patientId: number) => {
    setIsLoadingStudies(true);
    try {
      const response = await getRequest<{ count: number, results: PacsStudy[] }>(
        `${API_URL}pacs/studies/${pacsClientId}/${patientId}/`
      );
      setStudies(response.results);
    } catch (error) {
      console.error("Error fetching studies:", error);
      setStudies([]);
    } finally {
      setIsLoadingStudies(false);
    }
  };

  const fetchSeries = async (patientId: number, studyUid: string) => {
    setIsLoadingSeries(true);
    try {
      const response = await getRequest<{ count: number, results: PacsSeries[] }>(
        `${API_URL}pacs/series/${pacsClientId}/${patientId}/${studyUid}/`
      );
      setSeries(response.results);
    } catch (error) {
      console.error("Error fetching series:", error);
      setSeries([]);
    } finally {
      setIsLoadingSeries(false);
    }
  };

  const fetchInstances = async (patientId: number, studyUid: string, seriesUid: string) => {
    setIsLoadingInstances(true);
    try {
      const response = await getRequest<{ count: number, results: PacsInstance[] }>(
        `${API_URL}pacs/instance/${pacsClientId}/${patientId}/${studyUid}/${seriesUid}/`
      );
      setInstances(response.results);
    } catch (error) {
      console.error("Error fetching instances:", error);
      setInstances([]);
    } finally {
      setIsLoadingInstances(false);
    }
  };

  const handlePatientSelect = (patient: PacsPatient) => {
    setSelectedPatient(patient);
    setSelectedStudy(null);
    setSelectedSeries(null);
    setSelectedInstance(null);
    setCurrentSelection('patient');
    fetchStudies(patient.client_patient_id);
    setSeries([]);
    setInstances([]);
  };

  const handleStudySelect = (study: PacsStudy) => {
    if (!selectedPatient) return;
    setSelectedStudy(study);
    setSelectedSeries(null);
    setSelectedInstance(null);
    setCurrentSelection('study');
    fetchSeries(selectedPatient.client_patient_id, study.client_study_instance_uid);
    setInstances([]);
  };

  const handleSeriesSelect = (seriesItem: PacsSeries) => {
    if (!selectedPatient || !selectedStudy) return;
    setSelectedSeries(seriesItem);
    setSelectedInstance(null);
    setCurrentSelection('series');
    fetchInstances(
      selectedPatient.client_patient_id,
      selectedStudy.client_study_instance_uid,
      seriesItem.client_series_instance_uid
    );
  };

  const handleInstanceSelect = (instance: PacsInstance) => {
    setSelectedInstance(instance);
    setCurrentSelection('instance');
  };

  // Improved color combinations for status labels
  const getDeidStatusLabel = (status: number) => {
    switch (status) {
      case DEID_STATUS.PENDING:
        return { label: "Pending", color: `${COLORS.warning.bg} ${COLORS.warning.text} border border-amber-200` };
      case DEID_STATUS.IN_PROCESS:
        return { label: "In Process", color: `${COLORS.info.bg} ${COLORS.info.text} border border-sky-200` };
      case DEID_STATUS.COMPLETED:
        return { label: "Completed", color: `${COLORS.success.bg} ${COLORS.success.text} border border-emerald-200` };
      case DEID_STATUS.FAILED:
        return { label: "Failed", color: `${COLORS.error.bg} ${COLORS.error.text} border border-rose-200` };
      default:
        return { label: "Unknown", color: `${COLORS.gray.bg} ${COLORS.gray.text} border border-gray-200` };
    }
  };

  const getBreadcrumbPath = () => {
    let path = "";
    if (selectedPatient) {
      path += `Patient ${selectedPatient.client_patient_id}`;
      if (selectedStudy) {
        path += `/Study ${selectedStudy.client_study_instance_uid.slice(-8)}`;
        if (selectedSeries) {
          path += `/Series ${selectedSeries.client_series_instance_uid.slice(-8)}`;
          if (selectedInstance) {
            path += `/Instance ${selectedInstance.client_sop_instance_uid.slice(-8)}`;
          }
        }
      }
    }
    return path || "No selection";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <div className="text-center">
          <div className={`animate-spin w-8 h-8 border-4 ${COLORS.primary.bg} border-t-transparent rounded-full mx-auto mb-4`}></div>
          <p className="text-gray-600">Loading PACS studies...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className={`${COLORS.error.bg} border ${COLORS.error.text} border-rose-200 rounded-lg p-6 text-center`}>
          <h3 className="text-lg font-medium text-rose-900 mb-2">Error Loading PACS Studies</h3>
          <p className="text-rose-700 mb-4">{error}</p>
          <button
            onClick={() => fetchPatients()}
            className={`px-4 py-2 ${COLORS.error.bg} ${COLORS.error.text} rounded-lg hover:bg-rose-200 transition-colors mr-2`}
          >
            Retry
          </button>
          <button
            onClick={() => router.back()}
            className={`px-4 py-2 ${COLORS.gray.bg} text-gray-900 rounded-lg hover:bg-gray-200 transition-colors`}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // --- FIX: Wrap the entire return in a single parent fragment, and fix the broken button in the patients list ---

  // Button styles based on the provided image
  const infoButtonStyle = "px-5 py-2 rounded-lg text-base font-semibold border transition-colors";
  const deidButtonStyle = `${infoButtonStyle} bg-indigo-50 text-indigo-800 border-indigo-200 hover:bg-indigo-100`;
  const uploadButtonStyle = `${infoButtonStyle} bg-sky-50 text-sky-800 border-sky-200 hover:bg-sky-100`;

  // Helper to render the two action buttons for any item
  function InfoActionButtons({ item }: { item: PacsPatient | PacsStudy | PacsSeries | PacsInstance }) {
    return (
      <div className="flex gap-3 mt-8">
        <button
          className={deidButtonStyle}
          onClick={e => { e.stopPropagation(); handleStartDeid(item); }}
        >
          Start DeID
        </button>
        <button
          className={uploadButtonStyle}
          onClick={e => { e.stopPropagation(); handleStartUpload(item); }}
        >
          Start Upload
        </button>
      </div>
    );
  }

  return (
    <>
      <div className={`${COLORS.gray.bg} h-screen flex flex-col`}>
        {/* Top Bar with Filters and Breadcrumb */}
        <div className="bg-white border-b border-gray-200 p-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button 
                className={`px-4 py-2 ${COLORS.primary.lightBg} ${COLORS.primary.lightText} rounded-lg ${COLORS.primary.hover} transition-colors flex items-center gap-2`}
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
                Filters
              </button>
              <div className="text-sm text-gray-600">
                {filteredPatients.length} of {patients.length} Patients
              </div>
            </div>
            <div className="flex-1 mx-4">
              <div className={`text-sm ${COLORS.primary.lightText} ${COLORS.primary.lightBg} px-3 py-2 rounded-lg font-mono`}>
                {getBreadcrumbPath()}
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => setIsActionMenuOpen(!isActionMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Filter Dropdown */}
          <FilterDropdown
            isOpen={isFilterOpen}
            onClose={() => setIsFilterOpen(false)}
            filters={filters}
            onFiltersChange={handleFiltersChange}
            onClearFilters={handleClearFilters}
          />

          {/* Action Menu Dropdown */}
          <ActionMenuDropdown
            isOpen={isActionMenuOpen}
            onClose={() => setIsActionMenuOpen(false)}
            onStartDeid={handleGlobalStartDeid}
            onStartUpload={handleGlobalStartUpload}
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Panel - Patients */}
          <div className="w-80 bg-white border-r border-gray-200 overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <h3 className={`text-lg font-semibold ${COLORS.primary.lightText}`}>Patients</h3>
              <p className="text-sm text-gray-600 mt-1">Select a patient to view studies</p>
            </div>
            <div className="p-2">
              {filteredPatients.map((patient) => (
                <div
                  key={patient.id}
                  className={`w-full text-left p-3 rounded-lg mb-2 transition-colors cursor-pointer ${
                    selectedPatient?.id === patient.id
                      ? `${COLORS.primary.lightBg} border ${COLORS.primary.border} ${COLORS.primary.lightText}`
                      : `${COLORS.gray.bg} hover:bg-indigo-100 text-gray-900`
                  }`}
                  onClick={() => handlePatientSelect(patient)}
                >
                  <div className="font-medium">Patient {patient.client_patient_id}</div>
                  <div className="text-sm text-gray-600 mt-1">
                    {patient.study_uids.length} studies
                  </div>
                  <div className="flex gap-2 mt-2">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDeidStatusLabel(patient.deid_status).color}`}>
                      {getDeidStatusLabel(patient.deid_status).label}
                    </span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCloudUploadStatusLabel(patient.cloud_uploaded).color}`}>
                      <CloudUploadStatusIcon status={patient.cloud_uploaded} />
                      {getCloudUploadStatusLabel(patient.cloud_uploaded).label}
                    </span>
                  </div>
                </div>
              ))}
              {filteredPatients.length === 0 && (
                <div className="text-center text-gray-500 py-8">
                  <p className="text-sm">No patients match the current filters</p>
                </div>
              )}
            </div>
          </div>

          {/* Center Panel - Information Display */}
          <div className="flex-1 bg-white overflow-y-auto">
            <div className="p-6">
              {!currentSelection ? (
                <div className="text-center text-gray-500 py-12">
                  <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-lg font-medium mb-2">No Selection</h3>
                  <p>Select a patient, study, series, or instance to view information</p>
                </div>
              ) : currentSelection === 'patient' && selectedPatient ? (
                <div>
                  <h2 className={`text-2xl font-bold ${COLORS.primary.lightText} mb-6`}>Patient Information</h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className={`text-lg font-semibold ${COLORS.primary.lightText} mb-3`}>Basic Information</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-500">Patient ID</label>
                          <p className="text-gray-900">{selectedPatient.client_patient_id}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">ND Patient ID</label>
                          <p className="text-gray-900">{selectedPatient.nd_patient_id || 'N/A'}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Total Studies</label>
                          <p className="text-gray-900">{selectedPatient.study_uids.length}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${COLORS.primary.lightText} mb-3`}>Status</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-500">De-identification Status</label>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDeidStatusLabel(selectedPatient.deid_status).color}`}>
                            {getDeidStatusLabel(selectedPatient.deid_status).label}
                          </span>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Cloud Upload Status</label>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCloudUploadStatusLabel(selectedPatient.cloud_uploaded).color}`}>
                            <CloudUploadStatusIcon status={selectedPatient.cloud_uploaded} />
                            {getCloudUploadStatusLabel(selectedPatient.cloud_uploaded).label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <InfoActionButtons item={selectedPatient} />
                </div>
              ) : currentSelection === 'study' && selectedStudy ? (
                <div>
                  <h2 className={`text-2xl font-bold ${COLORS.primary.lightText} mb-6`}>Study Information</h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className={`text-lg font-semibold ${COLORS.primary.lightText} mb-3`}>Study Details</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-500">Study Instance UID</label>
                          <p className="text-gray-900 font-mono text-sm break-all">{selectedStudy.client_study_instance_uid}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">ND Study Instance UID</label>
                          <p className="text-gray-900 font-mono text-sm break-all">{selectedStudy.nd_study_instance_uid || 'N/A'}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Total Series</label>
                          <p className="text-gray-900">{selectedStudy.series_uids.length}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${COLORS.primary.lightText} mb-3`}>Status</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-500">De-identification Status</label>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDeidStatusLabel(selectedStudy.deid_status).color}`}>
                            {getDeidStatusLabel(selectedStudy.deid_status).label}
                          </span>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Cloud Upload Status</label>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCloudUploadStatusLabel(selectedStudy.cloud_uploaded).color}`}>
                            <CloudUploadStatusIcon status={selectedStudy.cloud_uploaded} />
                            {getCloudUploadStatusLabel(selectedStudy.cloud_uploaded).label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <InfoActionButtons item={selectedStudy} />
                </div>
              ) : currentSelection === 'series' && selectedSeries ? (
                <div>
                  <h2 className={`text-2xl font-bold ${COLORS.primary.lightText} mb-6`}>Series Information</h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className={`text-lg font-semibold ${COLORS.primary.lightText} mb-3`}>Series Details</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-500">Series Instance UID</label>
                          <p className="text-gray-900 font-mono text-sm break-all">{selectedSeries.client_series_instance_uid}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">ND Series Instance UID</label>
                          <p className="text-gray-900 font-mono text-sm break-all">{selectedSeries.nd_series_instance_uid || 'N/A'}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Total Instances</label>
                          <p className="text-gray-900">{selectedSeries.instance_uids.length}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${COLORS.primary.lightText} mb-3`}>Status</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-500">De-identification Status</label>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDeidStatusLabel(selectedSeries.deid_status).color}`}>
                            {getDeidStatusLabel(selectedSeries.deid_status).label}
                          </span>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Cloud Upload Status</label>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCloudUploadStatusLabel(selectedSeries.cloud_uploaded).color}`}>
                            <CloudUploadStatusIcon status={selectedSeries.cloud_uploaded} />
                            {getCloudUploadStatusLabel(selectedSeries.cloud_uploaded).label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <InfoActionButtons item={selectedSeries} />
                </div>
              ) : currentSelection === 'instance' && selectedInstance ? (
                <div>
                  <h2 className={`text-2xl font-bold ${COLORS.primary.lightText} mb-6`}>Instance Information</h2>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h3 className={`text-lg font-semibold ${COLORS.primary.lightText} mb-3`}>Instance Details</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-500">SOP Instance UID</label>
                          <p className="text-gray-900 font-mono text-sm break-all">{selectedInstance.client_sop_instance_uid}</p>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">ND SOP Instance UID</label>
                          <p className="text-gray-900 font-mono text-sm break-all">{selectedInstance.nd_sop_instance_uid || 'N/A'}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold ${COLORS.primary.lightText} mb-3`}>Status</h3>
                      <div className="space-y-3">
                        <div>
                          <label className="text-sm font-medium text-gray-500">De-identification Status</label>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getDeidStatusLabel(selectedInstance.deid_status).color}`}>
                            {getDeidStatusLabel(selectedInstance.deid_status).label}
                          </span>
                        </div>
                        <div>
                          <label className="text-sm font-medium text-gray-500">Cloud Upload Status</label>
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getCloudUploadStatusLabel(selectedInstance.cloud_uploaded).color}`}>
                            <CloudUploadStatusIcon status={selectedInstance.cloud_uploaded} />
                            {getCloudUploadStatusLabel(selectedInstance.cloud_uploaded).label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <InfoActionButtons item={selectedInstance} />
                </div>
              ) : null}
            </div>
          </div>

          {/* Right Panel - Studies */}
          <div className="w-80 bg-white border-l border-gray-200 overflow-y-auto">
            <div className="p-4 border-b border-gray-200">
              <h3 className={`text-lg font-semibold ${COLORS.primary.lightText}`}>Studies</h3>
              <p className="text-sm text-gray-600 mt-1">
                {selectedPatient ? `For Patient ${selectedPatient.client_patient_id}` : 'Select a patient first'}
              </p>
            </div>
            <div className="p-2">
              {!selectedPatient ? (
                <div className="text-center text-gray-500 py-8">
                  <p className="text-sm">Select a patient to view studies</p>
                </div>
              ) : isLoadingStudies ? (
                <div className="text-center py-8">
                  <div className={`animate-spin w-6 h-6 border-2 ${COLORS.primary.bg} border-t-transparent rounded-full mx-auto`}></div>
                  <p className="text-sm text-gray-500 mt-2">Loading studies...</p>
                </div>
              ) : studies.length === 0 ? (
                <div className="text-center text-gray-500 py-8">
                  <p className="text-sm">No studies found</p>
                </div>
              ) : (
                studies.map((study) => (
                  <button
                    key={study.id}
                    onClick={() => handleStudySelect(study)}
                    className={`w-full text-left p-3 rounded-lg mb-2 transition-colors ${
                      selectedStudy?.id === study.id
                        ? `${COLORS.primary.lightBg} border ${COLORS.primary.border} ${COLORS.primary.lightText}`
                        : `${COLORS.gray.bg} hover:bg-indigo-100 text-gray-900`
                    }`}
                  >
                    <div className="font-medium">Study {study.client_study_instance_uid.slice(-8)}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {study.series_uids.length} series
                    </div>
                    <div className="flex gap-2 mt-2">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getDeidStatusLabel(study.deid_status).color}`}>
                        {getDeidStatusLabel(study.deid_status).label}
                      </span>
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getCloudUploadStatusLabel(study.cloud_uploaded).color}`}>
                        <CloudUploadStatusIcon status={study.cloud_uploaded} />
                        {getCloudUploadStatusLabel(study.cloud_uploaded).label}
                      </span>
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Bottom Panel - Series and Instances */}
        <div className="h-48 bg-white border-t border-gray-200">
          <div className="h-full flex">
            {/* Series Section */}
            <div className="flex-1 border-r border-gray-200 p-4">
              <h3 className={`text-lg font-semibold ${COLORS.primary.lightText} mb-3`}>Series</h3>
              <div className="flex gap-2 overflow-x-auto">
                {!selectedStudy ? (
                  <div className="text-center text-gray-500 py-8 w-full">
                    <p className="text-sm">Select a study to view series</p>
                  </div>
                ) : isLoadingSeries ? (
                  <div className="text-center py-8 w-full">
                    <div className={`animate-spin w-6 h-6 border-2 ${COLORS.primary.bg} border-t-transparent rounded-full mx-auto`}></div>
                    <p className="text-sm text-gray-500 mt-2">Loading series...</p>
                  </div>
                ) : series.length === 0 ? (
                  <div className="text-center text-gray-500 py-8 w-full">
                    <p className="text-sm">No series found</p>
                  </div>
                ) : (
                  series.map((seriesItem) => (
                    <button
                      key={seriesItem.id}
                      onClick={() => handleSeriesSelect(seriesItem)}
                      className={`flex-shrink-0 px-4 py-2 rounded-lg transition-colors ${
                        selectedSeries?.id === seriesItem.id
                          ? `${COLORS.secondary.lightBg} border ${COLORS.secondary.border} ${COLORS.secondary.lightText}`
                          : `${COLORS.gray.bg} hover:bg-teal-100 text-gray-900`
                      }`}
                    >
                      <div className="font-medium">Series {seriesItem.client_series_instance_uid.slice(-8)}</div>
                      <div className="text-sm text-gray-600 mt-1">
                        {seriesItem.instance_uids.length} instances
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Instances Section */}
            <div className="flex-1 p-4">
              <h3 className={`text-lg font-semibold ${COLORS.primary.lightText} mb-3`}>Instances</h3>
              <div className="flex gap-2 overflow-x-auto">
                {!selectedSeries ? (
                  <div className="text-center text-gray-500 py-8 w-full">
                    <p className="text-sm">Select a series to view instances</p>
                  </div>
                ) : isLoadingInstances ? (
                  <div className="text-center py-8 w-full">
                    <div className={`animate-spin w-6 h-6 border-2 ${COLORS.primary.bg} border-t-transparent rounded-full mx-auto`}></div>
                    <p className="text-sm text-gray-500 mt-2">Loading instances...</p>
                  </div>
                ) : instances.length === 0 ? (
                  <div className="text-center text-gray-500 py-8 w-full">
                    <p className="text-sm">No instances found</p>
                  </div>
                ) : (
                  instances.map((instance) => (
                    <button
                      key={instance.id}
                      onClick={() => handleInstanceSelect(instance)}
                      className={`flex-shrink-0 px-4 py-2 rounded-lg transition-colors ${
                        selectedInstance?.id === instance.id
                          ? `${COLORS.info.bg} border border-sky-400 text-sky-900`
                          : `${COLORS.gray.bg} hover:bg-sky-100 text-gray-900`
                      }`}
                    >
                      <div className="font-medium">Instance {instance.client_sop_instance_uid.slice(-8)}</div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
