import React from 'react';

interface DumpRunConfigFormProps {
  dumpRunFormData: {
    enable_auto_qc: boolean;
  };
  setDumpRunFormData: (updater: (prev: any) => any) => void;
  dumpRunConfig: string;
}

export function DumpRunConfigForm({
  dumpRunFormData,
  setDumpRunFormData,
  dumpRunConfig
}: DumpRunConfigFormProps) {
  return (
    <div className="md:col-span-2 space-y-4">
      <h3 className="font-semibold text-lg">Dump Run Configuration</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm block mb-1">Enable Auto QC</label>
          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={dumpRunFormData.enable_auto_qc}
              onChange={(e) => setDumpRunFormData(prev => ({ ...prev, enable_auto_qc: e.target.checked }))}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span>Automatically run QC on dump completion</span>
          </label>
        </div>
      </div>
      <div className="text-xs text-gray-500">
        <strong>Generated JSON:</strong> {dumpRunConfig}
      </div>
    </div>
  );
}
