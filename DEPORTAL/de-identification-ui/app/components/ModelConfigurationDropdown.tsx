'use client';

import React, { useState, useEffect } from 'react';
import { useGet, usePost, usePut, useDelete } from '../api/useApiHooks';
import { API_URL } from '../api/Config';

interface ModelConfiguration {
  id: number;
  name: string;
  description: string;
  model_name: string;
  temperature: number;
  max_tokens: number;
  sample_size: number;
  is_default: boolean;
  is_active: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
}

interface ModelConfigurationDropdownProps {
  selectedConfig: ModelConfiguration | null;
  onConfigSelect: (config: ModelConfiguration) => void;
  onConfigCreate: (config: Omit<ModelConfiguration, 'id' | 'created_at' | 'updated_at'>) => void;
  onConfigUpdate: (id: number, config: Partial<ModelConfiguration>) => void;
  onConfigDelete: (id: number) => void;
  onConfigSetDefault: (id: number) => void;
  onConfigDuplicate: (id: number) => void;
}

export default function ModelConfigurationDropdown({
  selectedConfig,
  onConfigSelect,
  onConfigCreate,
  onConfigUpdate,
  onConfigDelete,
  onConfigSetDefault,
  onConfigDuplicate
}: ModelConfigurationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingConfig, setEditingConfig] = useState<ModelConfiguration | null>(null);
  const [newConfig, setNewConfig] = useState({
    name: '',
    description: '',
    model_name: 'gpt-4',
    temperature: 0.1,
    max_tokens: 1000,
    sample_size: 100,
    is_default: false,
    is_active: true,
    created_by: ''
  });

  // Fetch configurations
  const { data: configurations, refetch: refetchConfigurations, error: configError, isLoading: configLoading } = useGet<ModelConfiguration[]>(
    `${API_URL}phi_analyzer/configurations/`,
    { queryKey: ['model_configurations'] }
  );

  // Debug logging
  console.log('ModelConfigurationDropdown - API_URL:', API_URL);
  console.log('ModelConfigurationDropdown - Full URL:', `${API_URL}phi_analyzer/configurations/`);
  console.log('ModelConfigurationDropdown - configurations:', configurations);
  console.log('ModelConfigurationDropdown - configError:', configError);
  console.log('ModelConfigurationDropdown - configLoading:', configLoading);

  // Fetch default configuration
  const { data: defaultConfig } = useGet<ModelConfiguration>(
    `${API_URL}phi_analyzer/configurations/default/`,
    { queryKey: ['default_model_configuration'] }
  );

  // Set default configuration as selected if none selected
  useEffect(() => {
    if (defaultConfig && !selectedConfig) {
      onConfigSelect(defaultConfig);
    }
  }, [defaultConfig, selectedConfig, onConfigSelect]);

  // Create a default configuration if none exist
  useEffect(() => {
    if (!configLoading && !configError && (!configurations || configurations.length === 0)) {
      console.log('No configurations found, creating default configuration...');
      const defaultConfigData = {
        name: 'Default Configuration',
        description: 'Default PHI analysis configuration',
        model_name: 'gpt-4',
        temperature: 0.1,
        max_tokens: 1000,
        sample_size: 100,
        is_default: true,
        is_active: true,
        created_by: 'system'
      };
      
      // Create default configuration
      fetch(`${API_URL}phi_analyzer/configurations/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(defaultConfigData)
      })
      .then(response => response.json())
      .then(data => {
        console.log('Created default configuration:', data);
        refetchConfigurations();
      })
      .catch(error => {
        console.error('Error creating default configuration:', error);
      });
    }
  }, [configLoading, configError, configurations, API_URL, refetchConfigurations]);

  const handleCreateConfig = async () => {
    try {
      await onConfigCreate(newConfig);
      setShowCreateModal(false);
      setNewConfig({
        name: '',
        description: '',
        model_name: 'gpt-4',
        temperature: 0.1,
        max_tokens: 1000,
        sample_size: 100,
        is_default: false,
        is_active: true,
        created_by: ''
      });
      refetchConfigurations();
    } catch (error) {
      console.error('Error creating configuration:', error);
    }
  };

  const handleUpdateConfig = async () => {
    if (editingConfig) {
      try {
        await onConfigUpdate(editingConfig.id, editingConfig);
        setShowEditModal(false);
        setEditingConfig(null);
        refetchConfigurations();
      } catch (error) {
        console.error('Error updating configuration:', error);
      }
    }
  };

  const handleDeleteConfig = async (config: ModelConfiguration) => {
    if (window.confirm(`Are you sure you want to delete "${config.name}"?`)) {
      try {
        await onConfigDelete(config.id);
        refetchConfigurations();
        if (selectedConfig?.id === config.id) {
          onConfigSelect(defaultConfig || configurations?.[0] || null);
        }
      } catch (error) {
        console.error('Error deleting configuration:', error);
      }
    }
  };

  const handleSetDefault = async (config: ModelConfiguration) => {
    try {
      await onConfigSetDefault(config.id);
      refetchConfigurations();
    } catch (error) {
      console.error('Error setting default configuration:', error);
    }
  };

  const handleDuplicate = async (config: ModelConfiguration) => {
    try {
      await onConfigDuplicate(config.id);
      refetchConfigurations();
    } catch (error) {
      console.error('Error duplicating configuration:', error);
    }
  };

  return (
    <div className="relative">
      {/* Settings Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span className="text-sm font-medium">
          {selectedConfig ? selectedConfig.name : 'Select Configuration'}
        </span>
        <svg className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Model Configurations</h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => refetchConfigurations()}
                  className="px-3 py-1 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
                  title="Refresh configurations"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
                <button
                  onClick={() => setShowCreateModal(true)}
                  className="px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors"
                >
                  + New
                </button>
              </div>
            </div>

            {/* Configuration List */}
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {configLoading && (
                <div className="p-3 text-center text-gray-500">
                  Loading configurations...
                </div>
              )}
              {configError && (
                <div className="p-3 text-center text-red-500">
                  Error loading configurations: {configError.message}
                </div>
              )}
              {!configLoading && !configError && (!configurations || configurations.length === 0) && (
                <div className="p-3 text-center text-gray-500">
                  No configurations found. Create a new one to get started.
                </div>
              )}
              {configurations?.map((config) => (
                <div
                  key={config.id}
                  className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                    selectedConfig?.id === config.id
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                  onClick={() => {
                    onConfigSelect(config);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-gray-900">{config.name}</h4>
                        {config.is_default && (
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{config.description}</p>
                      <div className="text-xs text-gray-500 mt-1">
                        {config.model_name} • Temp: {config.temperature} • Tokens: {config.max_tokens}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 ml-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingConfig(config);
                          setShowEditModal(true);
                        }}
                        className="p-1 text-gray-400 hover:text-gray-600"
                        title="Edit"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDuplicate(config);
                        }}
                        className="p-1 text-gray-400 hover:text-gray-600"
                        title="Duplicate"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </button>
                      {!config.is_default && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleSetDefault(config);
                          }}
                          className="p-1 text-gray-400 hover:text-gray-600"
                          title="Set as Default"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                      )}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteConfig(config);
                        }}
                        className="p-1 text-gray-400 hover:text-red-600"
                        title="Delete"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Create Configuration Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Create New Configuration</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={newConfig.name}
                  onChange={(e) => setNewConfig(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Configuration name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={newConfig.description}
                  onChange={(e) => setNewConfig(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="Configuration description"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Model Name</label>
                <input
                  type="text"
                  value={newConfig.model_name}
                  onChange={(e) => setNewConfig(prev => ({ ...prev, model_name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., gpt-4, gpt-3.5-turbo"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Temperature: {newConfig.temperature}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={newConfig.temperature}
                  onChange={(e) => setNewConfig(prev => ({ ...prev, temperature: parseFloat(e.target.value) }))}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Max Tokens</label>
                <input
                  type="number"
                  value={newConfig.max_tokens}
                  onChange={(e) => setNewConfig(prev => ({ ...prev, max_tokens: parseInt(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  min="100"
                  max="4000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sample Size</label>
                <input
                  type="number"
                  value={newConfig.sample_size}
                  onChange={(e) => setNewConfig(prev => ({ ...prev, sample_size: parseInt(e.target.value) }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  min="10"
                  max="1000"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateConfig}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Configuration Modal */}
      {showEditModal && editingConfig && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-h-[90vh] overflow-y-auto">
            <h3 className="text-lg font-semibold mb-4">Edit Configuration</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={editingConfig.name}
                  onChange={(e) => setEditingConfig(prev => prev ? { ...prev, name: e.target.value } : null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea
                  value={editingConfig.description}
                  onChange={(e) => setEditingConfig(prev => prev ? { ...prev, description: e.target.value } : null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Model Name</label>
                <input
                  type="text"
                  value={editingConfig.model_name}
                  onChange={(e) => setEditingConfig(prev => prev ? { ...prev, model_name: e.target.value } : null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Temperature: {editingConfig.temperature}
                </label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={editingConfig.temperature}
                  onChange={(e) => setEditingConfig(prev => prev ? { ...prev, temperature: parseFloat(e.target.value) } : null)}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Max Tokens</label>
                <input
                  type="number"
                  value={editingConfig.max_tokens}
                  onChange={(e) => setEditingConfig(prev => prev ? { ...prev, max_tokens: parseInt(e.target.value) } : null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  min="100"
                  max="4000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Sample Size</label>
                <input
                  type="number"
                  value={editingConfig.sample_size}
                  onChange={(e) => setEditingConfig(prev => prev ? { ...prev, sample_size: parseInt(e.target.value) } : null)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                  min="10"
                  max="1000"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowEditModal(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateConfig}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
