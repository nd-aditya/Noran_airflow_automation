// File: app/clients/[clientId]/dumps/[dumpId]/dashboard/page.tsx
"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/app/api/Config";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as ReTooltip,
  Legend as ReLegend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { Spinner } from "@/app/components/Spinner";
import ClientsLayout from "@/app/components/layout/ClientsLayout";

interface DashboardData {
  deid_status: Record<string, number>;
  qc_status: Record<string, number>;
  gcp_status: Record<string, number>;
  task_status: Record<string, number>;
  pacs_status: Record<string, number>;
}

const COLORS = {
  primary: "#4F46E5",    // Indigo
  secondary: "#10B981",  // Emerald
  accent: "#FBBF24",     // Amber
  error: "#EF4444",      // Red
  neutral: "#6B7280",    // Gray
};

export default function DashboardPage({
  params,
}: {
  params: Promise<{ clientId: string; dumpId: string }>;
}) {
  const [clientId, setClientId] = useState<string>("");
  const [dumpId, setDumpId] = useState<string>("");

  useEffect(() => {
    params.then(({ clientId: cId, dumpId: dId }) => {
      setClientId(cId);
      setDumpId(dId);
    });
  }, [params]);
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<DashboardData>(
        `${API_URL}dump_dashboard/${clientId}/${dumpId}`
      )
      .then((res) => setData(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [clientId, dumpId]);

  if (loading) {
    return (
      <div className="flex h-64 items-center justify-center">
        <Spinner />
      </div>
    );
  }
  if (!data) {
    return <p className="p-8 text-center text-red-600">Failed to load dashboard.</p>;
  }

  // Convert each status object to an array suitable for Recharts
  const toChartData = (obj: Record<string, number>) =>
    Object.entries(obj).map(([name, value]) => ({ name, value }));

  const deidData = toChartData(data.deid_status);
  const qcData = toChartData(data.qc_status);
  const gcpData = toChartData(data.gcp_status);
  const taskData = toChartData(data.task_status);

  const getTotal = (arr: { name: string; value: number }[]) =>
    arr.reduce((sum, it) => sum + (Number(it.value) || 0), 0);

  return (
    <ClientsLayout>
      <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Dump Dashboard</h1>
          <div className="text-xs sm:text-sm text-gray-500">Client #{clientId} • Dump #{dumpId}</div>
        </div>

        {/* Top Pie Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* De-identification Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">De-identification Status</h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
                Total {getTotal(deidData)}
              </span>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={deidData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {deidData.map((_, i) => (
                      <Cell
                        key={i}
                        fill={[
                          COLORS.primary,
                          COLORS.secondary,
                          COLORS.accent,
                          COLORS.error,
                        ][i % 4]}
                      />
                    ))}
                  </Pie>
                  <ReTooltip />
                  <ReLegend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* QC Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">QC Status</h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                Total {getTotal(qcData)}
              </span>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={qcData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {qcData.map((_, i) => (
                      <Cell
                        key={i}
                        fill={[
                          COLORS.secondary,
                          COLORS.accent,
                          COLORS.primary,
                          COLORS.error,
                        ][i % 4]}
                      />
                    ))}
                  </Pie>
                  <ReTooltip />
                  <ReLegend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* GCP Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">GCP Status</h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-100">
                Total {getTotal(gcpData)}
              </span>
            </div>
            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={gcpData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {gcpData.map((_, i) => (
                      <Cell
                        key={i}
                        fill={[COLORS.accent, COLORS.primary, COLORS.error][i % 3]}
                      />
                    ))}
                  </Pie>
                  <ReTooltip />
                  <ReLegend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Task Status (Bar Chart) */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">Task Status</h2>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200">
                {getTotal(taskData)} total
              </span>
            </div>
            <div className="h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={taskData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" tick={{ fill: COLORS.neutral }} />
                  <YAxis tick={{ fill: COLORS.neutral }} />
                  <ReTooltip />
                  <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                    {taskData.map((_, i) => (
                      <Cell
                        key={i}
                        fill={[
                          COLORS.primary,
                          COLORS.secondary,
                          COLORS.accent,
                          COLORS.error,
                        ][i % 4]}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* PACS Status (Key Figures) */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">PACS Overview</h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-lg border border-gray-100 p-3 bg-gray-50">
                <div className="text-xs text-gray-500">Total Patients</div>
                <div className="text-lg font-semibold text-gray-900">{data.pacs_status.total_patients}</div>
              </div>
              <div className="rounded-lg border border-gray-100 p-3 bg-gray-50">
                <div className="text-xs text-gray-500">Total Studies</div>
                <div className="text-lg font-semibold text-gray-900">{data.pacs_status.total_studies}</div>
              </div>
              <div className="rounded-lg border border-gray-100 p-3 bg-gray-50">
                <div className="text-xs text-gray-500">Total Files</div>
                <div className="text-lg font-semibold text-gray-900">{data.pacs_status.total_files}</div>
              </div>
              <div className="rounded-lg border border-gray-100 p-3 bg-gray-50">
                <div className="text-xs text-gray-500">De-identified Files</div>
                <div className="text-lg font-semibold text-gray-900">{data.pacs_status.deidentified_files}</div>
              </div>
              <div className="rounded-lg border border-gray-100 p-3 bg-gray-50">
                <div className="text-xs text-gray-500">Failed De-ID Files</div>
                <div className="text-lg font-semibold text-gray-900">{data.pacs_status.deid_failed_files_count}</div>
              </div>
              <div className="rounded-lg border border-gray-100 p-3 bg-gray-50">
                <div className="text-xs text-gray-500">Uploaded to GCP</div>
                <div className="text-lg font-semibold text-gray-900">{data.pacs_status.files_uploaded_to_gcp}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ClientsLayout>
  );
}