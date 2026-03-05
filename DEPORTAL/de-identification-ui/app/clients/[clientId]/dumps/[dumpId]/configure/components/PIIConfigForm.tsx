import React, { useState, useEffect } from 'react';
import { API_URL } from "@/app/api/Config";
import { useGet } from "@/app/api/useApiHooks";

interface PIIConfigFormProps {
  piiConfig: string;
  setPiiConfig: (config: string) => void;
  secondaryConfig: string;
  setSecondaryConfig: (config: string) => void;
}

export function PIIConfigForm({
  piiConfig,
  setPiiConfig,
  secondaryConfig,
  setSecondaryConfig
}: PIIConfigFormProps) {
  const [jsonInput, setJsonInput] = useState(piiConfig);
  const [isValidJson, setIsValidJson] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  
  const [secondaryJsonInput, setSecondaryJsonInput] = useState(secondaryConfig);
  const [isValidSecondaryJson, setIsValidSecondaryJson] = useState(true);
  const [secondaryErrorMessage, setSecondaryErrorMessage] = useState('');
  // Extract clientId and dumpId from the URL
  const match = window.location.pathname.match(/clients\/([^/]+)\/dumps\/([^/]+)/);
  const clientId = match?.[1];
  const dumpId = match?.[2];

  // Use API service hook for fetching configuration
  const { 
    data: configData, 
    isLoading: loadingColumns, 
    error: columnsError 
  } = useGet<{
    client_config: {
      master_config: {
        pii_tables: {
          pii_data_table: {
            table_columns: string[];
          };
          [key: string]: {
            table_columns: string[];
          };
        };
      };
    };
    dump_config: {
      secondary_config: any[];
    };
  }>(
    clientId && dumpId ? `${API_URL}configuration/${clientId}/${dumpId}/` : '',
    {
      queryKey: ['configuration', clientId, dumpId],
      enabled: !!(clientId && dumpId),
    }
  );

  // Extract table columns from the configuration data
  const tableColumns = configData?.client_config?.master_config?.pii_tables?.pii_data_table?.table_columns || [];
  
  // Extract secondary table information
  const secondaryTables = configData?.client_config?.master_config?.pii_tables || {};
  const secondaryTableNames = Object.keys(secondaryTables).filter(name => name !== 'pii_data_table');
  const secondaryTableColumns = secondaryTableNames.reduce((acc, tableName) => {
    acc[tableName] = (secondaryTables as any)[tableName]?.table_columns || [];
    return acc;
  }, {} as Record<string, string[]>);
  
  
  // Update local state when prop changes
  useEffect(() => {
    setJsonInput(piiConfig);
  }, [piiConfig]);

  useEffect(() => {
    setSecondaryJsonInput(secondaryConfig);
  }, [secondaryConfig]);

  // Validate JSON and update parent
  const handleJsonChange = (value: string) => {
    setJsonInput(value);

    try {
      if (value.trim() === '') {
        setIsValidJson(true);
        setErrorMessage('');
        setPiiConfig('{}');
        return;
      }

      JSON.parse(value);
      setIsValidJson(true);
      setErrorMessage('');
      setPiiConfig(value);
    } catch (error) {
      setIsValidJson(false);
      setErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');
    }
  };

  // Validate secondary JSON and update parent
  const handleSecondaryJsonChange = (value: string) => {
    setSecondaryJsonInput(value);

    try {
      if (value.trim() === '') {
        setIsValidSecondaryJson(true);
        setSecondaryErrorMessage('');
        setSecondaryConfig('[]');
        return;
      }

      const parsed = JSON.parse(value);
      // Validate that it's an array
      if (!Array.isArray(parsed)) {
        throw new Error('Secondary configuration must be an array');
      }
      
      setIsValidSecondaryJson(true);
      setSecondaryErrorMessage('');
      setSecondaryConfig(value);
    } catch (error) {
      setIsValidSecondaryJson(false);
      setSecondaryErrorMessage(error instanceof Error ? error.message : 'Invalid JSON');
    }
  };

  // Load example configuration
  const loadExample = () => {
    const exampleConfig = {
      "mask": {
        "column1": { "masking_value": "((column1))" },
        "column2": { "masking_value": "((column2))" },
      },
      "zipcode": { "column3": { "masking_value": "((ZIP))" } },
      "dob": { "column4": { "masking_value": "((DOB))" } },
      "combine": {
        "fullname": {
          "combine": ["column5", "column6", "column7", "column8"],
          "masking_value": "((FULLNAME))",
        }
      },
      "replace_value": [{ "old_value": "neurodiscovery.ai", "new_value": "((FacilityName))" }],
    };

    const formattedJson = JSON.stringify(exampleConfig, null, 2);
    setJsonInput(formattedJson);
    setPiiConfig(formattedJson);
    setIsValidJson(true);
    setErrorMessage('');
  };

  // Load secondary example configuration
  const loadSecondaryExample = () => {
    const exampleSecondaryConfig = [
      {
        "config": {
          "table1column1": { "min_length": 2, "masking_value": "((table1column1))" },
          "table1column2": { "min_length": 2, "masking_value": "((table1column2))" },
        },
        "table_name": "custom_type_table_1",
      },
      {
        "config": {
          "table2column1": { "min_length": 2, "masking_value": "((table2column1))" },
          "table2column2": { "min_length": 2, "masking_value": "((table2column2))" },
        },
        "table_name": "custom_type_table_2",
      },
    ];

    const formattedJson = JSON.stringify(exampleSecondaryConfig, null, 2);
    setSecondaryJsonInput(formattedJson);
    setSecondaryConfig(formattedJson);
    setIsValidSecondaryJson(true);
    setSecondaryErrorMessage('');
  };

  return (
    <div className="md:col-span-2 space-y-6">
      <h3 className="font-semibold text-lg">PII Configuration</h3>
      <div>
        {loadingColumns ? (
          <p className="text-sm text-gray-500">Loading table columns...</p>
        ) : columnsError ? (
          <p className="text-sm text-red-600">Table Columns: <span className="font-mono">{columnsError instanceof Error ? columnsError.message : 'Failed to fetch table columns'}</span></p>
        ) : !clientId || !dumpId ? (
          <p className="text-sm text-red-600">Table Columns: <span className="font-mono">Could not determine clientId and dumpId from URL</span></p>
        ) : (
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">
              Table Columns: {tableColumns.length > 0 ? tableColumns.join(', ') : <span className="italic text-gray-400">No columns found</span>}
            </p>
            {tableColumns.length > 0 && (
              <button
                type="button"
                className="ml-2 px-2 py-1 text-xs border rounded text-blue-600 border-blue-300 hover:bg-blue-50"
                onClick={() => {
                  const quoted = tableColumns.map(col => `"${col}"`).join(', ');
                  navigator.clipboard.writeText(quoted);
                }}
                title="Copy as comma-separated"
              >
                Copy columns
              </button>
            )}
          </div>
        )}
      </div>

      {/* JSON Input Section */}
      <div className="bg-white rounded-lg border">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h4 className="text-lg font-medium text-gray-900">PII Configuration JSON</h4>
              <p className="text-sm text-gray-500">Enter your PII configuration in JSON format</p>
            </div>
            <button
              onClick={loadExample}
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors border border-blue-200"
            >
              Load Example
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Configuration JSON
              </label>
              <textarea
                value={jsonInput}
                onChange={(e) => handleJsonChange(e.target.value)}
                className={`w-full h-96 p-4 border rounded-md font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  !isValidJson ? 'border-red-300 bg-red-50' : 'border-gray-300'
                }`}
                placeholder='{
  "mask": {
    "COLUMN_NAME": {"masking_value": "((COLUMN_NAME))"}
  },
  "zipcode": {
    "ZIP_COLUMN": {"masking_value": "((ZIP))"}
  },
  "dob": {
    "DOB_COLUMN": {"masking_value": "((DOB))"}
  },
  "combine": {
    "combined_field": {
      "combine": ["FIELD1", "FIELD2"],
      "masking_value": "((COMBINED_FIELD))"
    }
  },
  "replace_value": [
    {"old_value": "original_value", "new_value": "((NEW_VALUE))"}
  ]
}'
              />
              {!isValidJson && (
                <p className="mt-2 text-sm text-red-600">
                  <strong>Error:</strong> {errorMessage}
                </p>
              )}
            </div>

            {/* Configuration Preview */}
            {isValidJson && jsonInput.trim() !== '' && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <h5 className="text-sm font-medium text-gray-900 mb-2">Configuration Preview</h5>
                <div className="text-xs text-gray-600 space-y-1">
                  {(() => {
                    try {
                      const config = JSON.parse(jsonInput);
                      const sections = Object.keys(config);
                      return sections.map(section => (
                        <div key={section} className="flex items-center gap-2">
                          <span className="font-medium capitalize">{section}:</span>
                          <span>
                            {section === 'replace_value'
                              ? `${config[section].length} replacement(s)`
                              : `${Object.keys(config[section]).length} rule(s)`
                            }
                          </span>
                        </div>
                      ));
                    } catch {
                      return null;
                    }
                  })()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Secondary Tables Configuration Section */}
      {secondaryTableNames.length > 0 && (
        <div className="bg-white rounded-lg border">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h4 className="text-lg font-medium text-gray-900">Secondary Tables Configuration</h4>
                <p className="text-sm text-gray-500">Configure masking for secondary PII tables</p>
              </div>
              <button
                onClick={loadSecondaryExample}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors border border-blue-200"
              >
                Load Example
              </button>
            </div>

            {/* Secondary Table Columns Info */}
            <div className="mb-4 space-y-2">
              {secondaryTableNames.map(tableName => (
                <div key={tableName} className="flex items-center gap-2">
                  <p className="text-sm text-gray-600">
                    <strong>{tableName}:</strong> {secondaryTableColumns[tableName].length > 0 ? secondaryTableColumns[tableName].join(', ') : <span className="italic text-gray-400">No columns found</span>}
                  </p>
                  {secondaryTableColumns[tableName].length > 0 && (
                    <button
                      type="button"
                      className="ml-2 px-2 py-1 text-xs border rounded text-blue-600 border-blue-300 hover:bg-blue-50"
                      onClick={() => {
                        const quoted = secondaryTableColumns[tableName].map(col => `"${col}"`).join(', ');
                        navigator.clipboard.writeText(quoted);
                      }}
                      title="Copy as comma-separated"
                    >
                      Copy columns
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Secondary Tables Configuration JSON
                </label>
                <textarea
                  value={secondaryJsonInput}
                  onChange={(e) => handleSecondaryJsonChange(e.target.value)}
                  className={`w-full h-64 p-4 border rounded-md font-mono text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                    !isValidSecondaryJson ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder='[
  {
    "config": {
      "column1": {"min_length": 2, "masking_value": "((column1))"},
      "column2": {"min_length": 2, "masking_value": "((column2))"}
    },
    "table_name": "table_name_1"
  },
  {
    "config": {
      "column3": {"min_length": 2, "masking_value": "((column3))"},
      "column4": {"min_length": 2, "masking_value": "((column4))"}
    },
    "table_name": "table_name_2"
  }
]'
                />
                {!isValidSecondaryJson && (
                  <p className="mt-2 text-sm text-red-600">
                    <strong>Error:</strong> {secondaryErrorMessage}
                  </p>
                )}
              </div>

              {/* Secondary Configuration Preview */}
              {isValidSecondaryJson && secondaryJsonInput.trim() !== '' && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h5 className="text-sm font-medium text-gray-900 mb-2">Secondary Configuration Preview</h5>
                  <div className="text-xs text-gray-600 space-y-1">
                    {(() => {
                      try {
                        const config = JSON.parse(secondaryJsonInput);
                        if (Array.isArray(config)) {
                          return config.map((tableConfig, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <span className="font-medium">{tableConfig.table_name || `Table ${index + 1}`}:</span>
                              <span>{Object.keys(tableConfig.config || {}).length} masking rule(s)</span>
                            </div>
                          ));
                        }
                        return null;
                      } catch {
                        return null;
                      }
                    })()}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
}