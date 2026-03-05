import React from 'react';
import { QCConfigForm } from './QCConfigForm';
import { PIIConfigForm } from './PIIConfigForm';
import { DumpRunConfigForm } from './DumpRunConfigForm';
import { clsx } from 'clsx';

interface DumpConfigStepProps {
  qcFormData: Record<string, { prefix_value: string; length_of_value: number }>;
  updateQcField: (identifierType: string, field: 'prefix_value' | 'length_of_value', value: string | number) => void;
  qcConfig: string;
  onReusePreviousConfig: () => void;
  reusingConfig: boolean;
  reuseConfigErr: string | null;
  piiConfig: string;
  setPiiConfig: (config: string) => void;
  secondaryConfig: string;
  setSecondaryConfig: (config: string) => void;
  dumpRunFormData: {
    enable_auto_qc: boolean;
  };
  setDumpRunFormData: (updater: (prev: any) => any) => void;
  dumpRunConfig: string;
  setStep: React.Dispatch<React.SetStateAction<1 | 2>>;
  onSubmitDumpConfig: () => void;
  saving: boolean;
}

export function DumpConfigStep({
  qcFormData,
  updateQcField,
  qcConfig,
  onReusePreviousConfig,
  reusingConfig,
  reuseConfigErr,
  piiConfig,
  setPiiConfig,
  secondaryConfig,
  setSecondaryConfig,
  dumpRunFormData,
  setDumpRunFormData,
  dumpRunConfig,
  setStep,
  onSubmitDumpConfig,
  saving
}: DumpConfigStepProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6 p-6">
      {/* Safety check - ensure form data is initialized */}
      {(() => {
        // Initialize form data if empty
        if (Object.keys(qcFormData).length === 0) {
          return null; // This will be handled by the parent component
        }
        return null;
      })()}
      
      {/* Show loading if form data is not yet initialized */}
      {Object.keys(qcFormData).length === 0 && (
        <div className="md:col-span-2 flex justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      )}
      
      {/* Only render forms when data is initialized */}
      {Object.keys(qcFormData).length > 0 && (
        <>
          <QCConfigForm
            qcFormData={qcFormData}
            updateQcField={updateQcField}
            qcConfig={qcConfig}
            onReusePreviousConfig={onReusePreviousConfig}
            reusingConfig={reusingConfig}
            reuseConfigErr={reuseConfigErr}
          />

          <PIIConfigForm
            piiConfig={piiConfig}
            setPiiConfig={setPiiConfig}
            secondaryConfig={secondaryConfig}
            setSecondaryConfig={setSecondaryConfig}
          />

          <DumpRunConfigForm
            dumpRunFormData={dumpRunFormData}
            setDumpRunFormData={setDumpRunFormData}
            dumpRunConfig={dumpRunConfig}
          />

          <div className="md:col-span-2 flex items-center justify-between">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 rounded border"
            >
              ← Back to Client Config
            </button>
            <button
              onClick={onSubmitDumpConfig}
              disabled={saving}
              className={clsx(
                "px-5 py-2 rounded text-white",
                saving ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
              )}
            >
              {saving ? "Saving…" : "Save Configuration"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
