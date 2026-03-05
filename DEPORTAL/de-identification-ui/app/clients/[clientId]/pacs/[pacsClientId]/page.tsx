"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import clsx from "clsx";
import { API_URL } from "@/app/api/Config";

interface PacsClientDetail {
  client_id: number;
  handler_type: number;
  register_date: string;
  run_config: any;
  inventory_creation_done: boolean;
}

interface OverviewDeidStatus {
  total_patient_deid_done: number;
  total_patient_deid_failed: number;
  total_patient_deid_pending: number;
  total_study_deid_done: number;
  total_study_deid_failed: number;
  total_study_deid_pending: number;
  total_series_deid_done: number;
  total_series_deid_failed: number;
  total_series_deid_pending: number;
  total_instances_deid_done: number;
  total_instances_deid_failed: number;
  total_instances_deid_pending: number;
}

interface OverviewCloudUploadStatus {
  total_patient_uploaded: number;
  total_patient_upload_pending: number;
  total_study_uploaded: number;
  total_study_upload_pending: number;
  total_series_uploaded: number;
  total_series_upload_pending: number;
  total_instances_uploaded: number;
  total_instances_upload_pending: number;
}

interface PacsOverview {
  total_patients_count: number;
  total_studies_count: number;
  total_series_count: number;
  total_instances_count: number;
  deid_status: OverviewDeidStatus;
  cloud_upload_status: OverviewCloudUploadStatus;
}

const HANDLER_TYPE_OPTIONS = [
  { value: 1, label: "DIR_HANDLER" },
  { value: 2, label: "RETRIEVAL_HANDLER" },
];

// Custom color palette for cards and status
const CARD_BG_COLORS = [
  "bg-gradient-to-br from-blue-50 to-blue-100",
  "bg-gradient-to-br from-green-50 to-green-100",
  "bg-gradient-to-br from-purple-50 to-purple-100",
];
const OVERVIEW_CARD_BG = "bg-gradient-to-br from-cyan-50 to-cyan-100";
const DEID_CARD_BG = "bg-gradient-to-br from-pink-50 to-pink-100";
const CLOUD_CARD_BG = "bg-gradient-to-br from-yellow-50 to-yellow-100";

export default function PacsClientDetailPage() {
  const { clientId, pacsClientId } = useParams();
  const router = useRouter();
  const [pacsClient, setPacsClient] = useState<PacsClientDetail | null>(null);
  const [overview, setOverview] = useState<PacsOverview | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clientId, pacsClientId]);

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const [clientRes, overviewRes] = await Promise.all([
        axios.get(
          `${API_URL}pacs/get_pacs_client/${clientId}/${pacsClientId}/`
        ),
        axios.get(
          `${API_URL}pacs/overview/${clientId}/${pacsClientId}/`
        ),
      ]);
      setPacsClient(clientRes.data);
      setOverview(overviewRes.data);
    } catch (error) {
      console.error("Error fetching PACS client details or overview:", error);
      setError("Failed to fetch PACS client details or overview. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const getHandlerTypeLabel = (type: number) => {
    const handler = HANDLER_TYPE_OPTIONS.find(opt => opt.value === type);
    return handler ? handler.label : `Type ${type}`;
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return dateString;
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <div className="text-center">
          <div className="animate-spin w-8 h-8 border-4 border-sky-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-sky-700">Loading PACS client details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="bg-gradient-to-br from-red-50 to-rose-100 border border-red-200 rounded-lg p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-rose-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-rose-900 mb-2">Error Loading PACS Client</h3>
          <p className="text-rose-700 mb-4">{error}</p>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-gradient-to-r from-rose-500 to-red-600 text-white rounded-lg hover:from-rose-600 hover:to-red-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!pacsClient) {
    return (
      <div className="p-6">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">PACS Client Not Found</h3>
          <p className="text-gray-600 mb-4">The requested PACS client could not be found.</p>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-gradient-to-r from-gray-500 to-gray-700 text-white rounded-lg hover:from-gray-600 hover:to-gray-800 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-3 sm:p-4 lg:p-6">
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-sm text-sky-700">
        <button
          onClick={() => router.push(`/clients/${clientId}/dumps`)}
          className="hover:text-sky-900 transition-colors"
        >
          Clients
        </button>
        <span>/</span>
        <button
          onClick={() => router.push(`/clients/${clientId}/dumps`)}
          className="hover:text-sky-900 transition-colors"
        >
          Client {clientId}
        </button>
        <span>/</span>
        <button
          onClick={() => router.push(`/clients/${clientId}/pacs`)}
          className="hover:text-sky-900 transition-colors"
        >
          PACS Clients
        </button>
        <span>/</span>
        <span className="text-sky-900 font-medium">PACS Client {pacsClientId}</span>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.back()}
            className="p-2 text-sky-600 hover:text-sky-900 hover:bg-sky-100 rounded-lg transition-colors"
            title="Go back"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div>
            <h1 className="text-xl font-semibold text-sky-900">PACS Client Details</h1>
            <p className="text-sm text-sky-700 mt-1">
              Detailed information for PACS Client #{pacsClientId}
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center gap-0 space-x-0">
          <button
            onClick={() => router.push(`/clients/${clientId}/pacs`)}
            className={clsx(
              "px-5 py-2 bg-gradient-to-r from-gray-700 to-gray-900 text-white rounded-l-lg shadow-sm font-medium flex items-center gap-2 text-sm transition-all duration-200",
              "hover:from-gray-800 hover:to-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400"
            )}
            style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Back to PACS Clients</span>
          </button>
          <button
            onClick={() => router.push(`/clients/${clientId}/pacs/${pacsClientId}/studies`)}
            className={clsx(
              "px-5 py-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-r-lg shadow-sm font-medium flex items-center gap-2 text-sm transition-all duration-200 -ml-px",
              "hover:from-sky-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            )}
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>View Studies</span>
          </button>
        </div>
      </div>

      {/* PACS Client Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Information Card */}
        <div className={clsx("rounded-lg shadow-sm border border-blue-200 p-6", CARD_BG_COLORS[0])}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-200 to-blue-300 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-sky-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-sky-900">Basic Information</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-sky-600 uppercase tracking-wider">Client ID</label>
              <p className="text-sm text-sky-900 font-mono">{pacsClient.client_id}</p>
            </div>
            <div>
              <label className="text-xs font-medium text-sky-600 uppercase tracking-wider">Handler Type</label>
              <p className="text-sm text-sky-900">{getHandlerTypeLabel(pacsClient.handler_type)}</p>
            </div>
            <div>
              <label className="text-xs font-medium text-sky-600 uppercase tracking-wider">Register Date</label>
              <p className="text-sm text-sky-900">{formatDate(pacsClient.register_date)}</p>
            </div>
          </div>
        </div>

        {/* Configuration Card */}
        <div className={clsx("rounded-lg shadow-sm border border-green-200 p-6", CARD_BG_COLORS[1])}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-green-200 to-emerald-300 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-emerald-900">Configuration</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-emerald-700 uppercase tracking-wider">Run Config</label>
              <div className="mt-1">
                {pacsClient.run_config ? (
                  <pre className="text-xs text-emerald-900 bg-emerald-50 p-3 rounded border border-emerald-100 overflow-x-auto">
                    {JSON.stringify(pacsClient.run_config, null, 2)}
                  </pre>
                ) : (
                  <p className="text-sm text-emerald-600 italic">No configuration set</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Status Card */}
        <div className={clsx("rounded-lg shadow-sm border border-purple-200 p-6", CARD_BG_COLORS[2])}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-200 to-fuchsia-200 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-fuchsia-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-fuchsia-900">Status</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs font-medium text-fuchsia-700 uppercase tracking-wider">Inventory Creation</label>
              <div className="mt-2">
                <span className={clsx(
                  "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
                  {
                    "bg-gradient-to-r from-emerald-100 to-green-200 text-emerald-900": pacsClient.inventory_creation_done,
                    "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-900": !pacsClient.inventory_creation_done
                  }
                )}>
                  {pacsClient.inventory_creation_done ? (
                    <>
                      <svg className="w-4 h-4 mr-1.5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Completed
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4 mr-1.5 text-yellow-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Pending
                    </>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      {overview && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Overview Counts */}
          <div className={clsx("rounded-lg shadow-sm border border-cyan-200 p-6", OVERVIEW_CARD_BG)}>
            <h3 className="text-lg font-medium text-cyan-900 mb-4">Overview</h3>
            <div className="space-y-2">
              <div>
                <span className="text-xs font-medium text-cyan-700 uppercase tracking-wider">Total Patients</span>
                <div className="text-lg font-semibold text-cyan-900">{overview.total_patients_count}</div>
              </div>
              <div>
                <span className="text-xs font-medium text-cyan-700 uppercase tracking-wider">Total Studies</span>
                <div className="text-lg font-semibold text-cyan-900">{overview.total_studies_count}</div>
              </div>
              <div>
                <span className="text-xs font-medium text-cyan-700 uppercase tracking-wider">Total Series</span>
                <div className="text-lg font-semibold text-cyan-900">{overview.total_series_count}</div>
              </div>
              <div>
                <span className="text-xs font-medium text-cyan-700 uppercase tracking-wider">Total Instances</span>
                <div className="text-lg font-semibold text-cyan-900">{overview.total_instances_count}</div>
              </div>
            </div>
          </div>
          {/* De-identification Status */}
          <div className={clsx("rounded-lg shadow-sm border border-pink-200 p-6", DEID_CARD_BG)}>
            <h3 className="text-lg font-medium text-pink-900 mb-4">De-identification Status</h3>
            <div className="space-y-2">
              <div>
                <span className="text-xs font-medium text-pink-700 uppercase tracking-wider">Patients</span>
                <div className="flex gap-2 text-sm">
                  <span className="text-emerald-700 font-semibold">Done: {overview.deid_status.total_patient_deid_done}</span>
                  <span className="text-rose-700 font-semibold">Failed: {overview.deid_status.total_patient_deid_failed}</span>
                  <span className="text-yellow-700 font-semibold">Pending: {overview.deid_status.total_patient_deid_pending}</span>
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-pink-700 uppercase tracking-wider">Studies</span>
                <div className="flex gap-2 text-sm">
                  <span className="text-emerald-700 font-semibold">Done: {overview.deid_status.total_study_deid_done}</span>
                  <span className="text-rose-700 font-semibold">Failed: {overview.deid_status.total_study_deid_failed}</span>
                  <span className="text-yellow-700 font-semibold">Pending: {overview.deid_status.total_study_deid_pending}</span>
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-pink-700 uppercase tracking-wider">Series</span>
                <div className="flex gap-2 text-sm">
                  <span className="text-emerald-700 font-semibold">Done: {overview.deid_status.total_series_deid_done}</span>
                  <span className="text-rose-700 font-semibold">Failed: {overview.deid_status.total_series_deid_failed}</span>
                  <span className="text-yellow-700 font-semibold">Pending: {overview.deid_status.total_series_deid_pending}</span>
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-pink-700 uppercase tracking-wider">Instances</span>
                <div className="flex gap-2 text-sm">
                  <span className="text-emerald-700 font-semibold">Done: {overview.deid_status.total_instances_deid_done}</span>
                  <span className="text-rose-700 font-semibold">Failed: {overview.deid_status.total_instances_deid_failed}</span>
                  <span className="text-yellow-700 font-semibold">Pending: {overview.deid_status.total_instances_deid_pending}</span>
                </div>
              </div>
            </div>
          </div>
          {/* Cloud Upload Status */}
          <div className={clsx("rounded-lg shadow-sm border border-yellow-200 p-6", CLOUD_CARD_BG)}>
            <h3 className="text-lg font-medium text-yellow-900 mb-4">Cloud Upload Status</h3>
            <div className="space-y-2">
              <div>
                <span className="text-xs font-medium text-yellow-700 uppercase tracking-wider">Patients</span>
                <div className="flex gap-2 text-sm">
                  <span className="text-sky-700 font-semibold">Uploaded: {overview.cloud_upload_status.total_patient_uploaded}</span>
                  <span className="text-yellow-700 font-semibold">Pending: {overview.cloud_upload_status.total_patient_upload_pending}</span>
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-yellow-700 uppercase tracking-wider">Studies</span>
                <div className="flex gap-2 text-sm">
                  <span className="text-sky-700 font-semibold">Uploaded: {overview.cloud_upload_status.total_study_uploaded}</span>
                  <span className="text-yellow-700 font-semibold">Pending: {overview.cloud_upload_status.total_study_upload_pending}</span>
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-yellow-700 uppercase tracking-wider">Series</span>
                <div className="flex gap-2 text-sm">
                  <span className="text-sky-700 font-semibold">Uploaded: {overview.cloud_upload_status.total_series_uploaded}</span>
                  <span className="text-yellow-700 font-semibold">Pending: {overview.cloud_upload_status.total_series_upload_pending}</span>
                </div>
              </div>
              <div>
                <span className="text-xs font-medium text-yellow-700 uppercase tracking-wider">Instances</span>
                <div className="flex gap-2 text-sm">
                  <span className="text-sky-700 font-semibold">Uploaded: {overview.cloud_upload_status.total_instances_uploaded}</span>
                  <span className="text-yellow-700 font-semibold">Pending: {overview.cloud_upload_status.total_instances_upload_pending}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
