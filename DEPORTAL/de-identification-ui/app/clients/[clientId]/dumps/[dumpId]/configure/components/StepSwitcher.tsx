import React from 'react';
import { clsx } from 'clsx';

interface StepSwitcherProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<1 | 2>>;
  clientConfigSaved: boolean;
  piiTables: Record<string, any>;
  setSecondaryPiiFormData: (updater: (prev: any) => any) => void;
  qcFormData: Record<string, any>;
  setQcFormData: (updater: (prev: any) => any) => void;
  dumpRunFormData: Record<string, any>;
  setDumpRunFormData: (updater: (prev: any) => any) => void;
}

export function StepSwitcher({
  step,
  setStep,
  clientConfigSaved,
  piiTables,
  setSecondaryPiiFormData,
  qcFormData,
  setQcFormData,
  dumpRunFormData,
  setDumpRunFormData
}: StepSwitcherProps) {
  const handleStep2Click = () => {
    if (clientConfigSaved) {
      // Ensure form data is initialized before switching to step 2
      const customTableTypes = Object.keys(piiTables).filter(key => key !== 'pii_data_table');
      if (customTableTypes.length > 0 && [].length === 0) {
        const initialSecondaryConfig = customTableTypes.map(() => ({
          table_name: "",
          config: {}
        }));
        setSecondaryPiiFormData(() => initialSecondaryConfig);
      }
      
      // Ensure other form data has default values
      if (Object.keys(qcFormData).length === 0) {
        setQcFormData(() => ({
          PATIENT_IDENTIFIER: { prefix_value: "1001000", length_of_value: 15 },
          ENCOUNTER_IDENTIFIER: { prefix_value: "1001000", length_of_value: 19 },
          APPOINTMENT_IDENTIFIER: { prefix_value: "1001000", length_of_value: 19 },
        }));
      } else {
        // Filter to only include the three allowed identifiers
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
          setQcFormData(() => filteredQcData);
        }
      }
      
      
      if (Object.keys(dumpRunFormData).length === 0) {
        setDumpRunFormData(() => ({
          enable_auto_qc: true
        }));
      }
      
      setStep(2);
    } else {
      alert('Please save the client configuration first before proceeding to dump configuration.');
    }
  };

  const tabBtn = (active: boolean) =>
    clsx(
      "px-3 py-1.5 rounded-md text-sm font-medium",
      active ? "bg-white border text-blue-700" : "text-gray-600 hover:text-gray-800"
    );

  return (
    <div className="flex gap-2 p-3 border-b bg-gray-50">
      <button
        className={tabBtn(step === 1)}
        onClick={() => setStep(1)}
      >
        Client Config
      </button>
      <button
        className={tabBtn(step === 2)}
        onClick={handleStep2Click}
      >
        Dump Config
      </button>
    </div>
  );
}
