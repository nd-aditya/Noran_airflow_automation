import React from 'react';
import { clsx } from 'clsx';

interface QCConfigFormProps {
  qcFormData: Record<string, { prefix_value: string; length_of_value: number }>;
  updateQcField: (identifierType: string, field: 'prefix_value' | 'length_of_value', value: string | number) => void;
  qcConfig: string;
  onReusePreviousConfig: () => void;
  reusingConfig: boolean;
  reuseConfigErr: string | null;
}

export function QCConfigForm({
  qcFormData,
  updateQcField,
  qcConfig,
  onReusePreviousConfig,
  reusingConfig,
  reuseConfigErr
}: QCConfigFormProps) {
  return (
    <div className="md:col-span-2 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">QC Configuration</h3>
        <button
          onClick={onReusePreviousConfig}
          disabled={reusingConfig}
          className={clsx(
            "px-4 py-2 rounded text-sm font-medium border transition-colors",
            reusingConfig
              ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
              : "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100 hover:border-blue-300"
          )}
        >
          {reusingConfig ? "Loading..." : "Reuse Previous Config"}
        </button>
      </div>
      {reuseConfigErr && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
          <p className="text-red-700 text-sm">{reuseConfigErr}</p>
        </div>
      )}
      <div className="grid md:grid-cols-3 gap-6">
        {Object.entries(qcFormData).map(([identifierType, config]) => (
          <div key={identifierType} className="p-4 border rounded-lg bg-gray-50">
            <h4 className="font-medium mb-3 text-sm text-gray-700">
              {identifierType.replace(/_/g, ' ')}
            </h4>
            <div className="space-y-3">
              <div>
                <label className="text-xs block mb-1 text-gray-600">
                  Prefix Value
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded text-sm"
                  value={config.prefix_value}
                  onChange={(e) => updateQcField(identifierType, 'prefix_value', e.target.value)}
                  placeholder="e.g., 1001000"
                />
              </div>
              <div>
                <label className="text-xs block mb-1 text-gray-600">
                  Length of Value
                </label>
                <input
                  type="number"
                  className="w-full p-2 border rounded text-sm"
                  value={config.length_of_value}
                  onChange={(e) => updateQcField(identifierType, 'length_of_value', e.target.value)}
                  placeholder="e.g., 15"
                  min="1"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500">
        <strong>Generated JSON:</strong> {qcConfig}
      </div>
    </div>
  );
}
