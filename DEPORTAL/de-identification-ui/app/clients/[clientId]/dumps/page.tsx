// File: app/clients/[clientId]/dumps/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { API_URL } from "@/app/api/Config";

interface PacsClient {
  client_id: string;
  handler_type: number;
  register_date: string;
  created_at: string;
}

const HANDLER_TYPE_LABELS: Record<number, string> = {
  1: "DIR_HANDLER",
  2: "RETRIEVAL_HANDLER",
  // Add more if needed
};

export default function ClientDumpsPage() {
  const router = useRouter();
  const { clientId } = useParams();
  const [pacsClients, setPacsClients] = useState<PacsClient[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPacsClients() {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`${API_URL}client_dumps/${clientId}/`);
        if (!res.ok) throw new Error("Failed to fetch pacs clients");
        const data = await res.json();
        setPacsClients(Array.isArray(data) ? data : []);
      } catch {
        setError("Failed to load PACS clients.");
        setPacsClients([]);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPacsClients();
  }, [clientId]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <p className="text-gray-600">Loading PACS clients…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full p-8">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!pacsClients || pacsClients.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8">
        <p className="text-gray-600 mb-4">No PACS clients registered yet.</p>
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          onClick={() => router.replace(`/clients/${clientId}/dumps/create`)}
        >
          Register New PacsClient
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4 text-gray-900">Registered PACS Clients</h1>
      <table className="w-full bg-white rounded-lg shadow border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Client ID</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Handler Type</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Register Date</th>
            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Created At</th>
            <th className="px-4 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {pacsClients.map((client) => (
            <tr key={client.client_id} className="border-t border-gray-100 hover:bg-gray-50">
              <td className="px-4 py-2 font-mono">{client.client_id}</td>
              <td className="px-4 py-2">
                {HANDLER_TYPE_LABELS[client.handler_type] || client.handler_type}
              </td>
              <td className="px-4 py-2">{client.register_date}</td>
              <td className="px-4 py-2">{client.created_at}</td>
              <td className="px-4 py-2">
                <button
                  className="text-purple-600 hover:underline text-sm"
                  onClick={() =>
                    router.replace(`/clients/${clientId}/dumps/${client.client_id}/dashboard`)
                  }
                >
                  View Dashboard
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-6 flex justify-end">
        <button
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          onClick={() => router.replace(`/clients/${clientId}/dumps/create`)}
        >
          Register New PacsClient
        </button>
      </div>
    </div>
  );
}
