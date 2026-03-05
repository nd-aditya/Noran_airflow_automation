(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_3dafe0._.js", {

"[project]/app/api/useApiHooks.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useDelete": (()=>useDelete),
    "useGet": (()=>useGet),
    "usePost": (()=>usePost),
    "usePut": (()=>usePut)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/apiService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useMutation.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature(), _s2 = __turbopack_refresh__.signature(), _s3 = __turbopack_refresh__.signature();
;
;
const useGet = (url, options)=>{
    _s();
    console.log('useGet - URL:', url);
    console.log('useGet - URL type:', typeof url);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        retry: 3,
        retryDelay: {
            "useGet.useQuery": (attemptIndex)=>Math.min(1000 * 2 ** attemptIndex, 30000)
        }["useGet.useQuery"],
        refetchOnReconnect: true,
        refetchInterval: false,
        refetchOnMount: true,
        refetchOnWindowFocus: false,
        ...options,
        queryKey: options?.queryKey || [
            url
        ],
        queryFn: {
            "useGet.useQuery": ()=>{
                console.log('useGet queryFn - URL:', url);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRequest"])(url, options?.headers);
            }
        }["useGet.useQuery"]
    });
};
_s(useGet, "4ZpngI1uv+Uo3WQHEZmTQ5FNM+k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
const usePost = (url, options)=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...options,
        mutationFn: {
            "usePost.useMutation": (variables)=>{
                const resolvedUrl = typeof url === "function" ? url(variables) : url;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["postRequest"])(resolvedUrl, variables, options?.headers);
            }
        }["usePost.useMutation"]
    });
};
_s1(usePost, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const usePut = (url, options)=>{
    _s2();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...options,
        mutationFn: {
            "usePut.useMutation": (variables)=>{
                const resolvedUrl = typeof url === "function" ? url(variables) : url;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["putRequest"])(resolvedUrl, variables, options?.headers);
            }
        }["usePut.useMutation"]
    });
};
_s2(usePut, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
const useDelete = (url, options)=>{
    _s3();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"])({
        ...options,
        mutationFn: {
            "useDelete.useMutation": (variables)=>{
                const resolvedUrl = typeof url === "function" ? url(variables) : url;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteRequest"])(resolvedUrl, options?.headers);
            }
        }["useDelete.useMutation"]
    });
};
_s3(useDelete, "wwwtpB20p0aLiHIvSy5P98MwIUg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useMutation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMutation"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/Spinner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "Spinner": (()=>Spinner)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
function Spinner() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            className: "animate-spin h-6 w-6 text-gray-800",
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                    className: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    strokeWidth: "4"
                }, void 0, false, {
                    fileName: "[project]/app/components/Spinner.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    className: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                }, void 0, false, {
                    fileName: "[project]/app/components/Spinner.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/Spinner.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/Spinner.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Spinner;
var _c;
__turbopack_refresh__.register(_c, "Spinner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/components/ModelConfigurationDropdown.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ModelConfigurationDropdown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/useApiHooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/Config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
function ModelConfigurationDropdown({ selectedConfig, onConfigSelect, onConfigCreate, onConfigUpdate, onConfigDelete, onConfigSetDefault, onConfigDuplicate }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showCreateModal, setShowCreateModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showEditModal, setShowEditModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingConfig, setEditingConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [newConfig, setNewConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
    const { data: configurations, refetch: refetchConfigurations, error: configError, isLoading: configLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/configurations/`, {
        queryKey: [
            'model_configurations'
        ]
    });
    // Debug logging
    console.log('ModelConfigurationDropdown - API_URL:', __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]);
    console.log('ModelConfigurationDropdown - Full URL:', `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/configurations/`);
    console.log('ModelConfigurationDropdown - configurations:', configurations);
    console.log('ModelConfigurationDropdown - configError:', configError);
    console.log('ModelConfigurationDropdown - configLoading:', configLoading);
    // Fetch default configuration
    const { data: defaultConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/configurations/default/`, {
        queryKey: [
            'default_model_configuration'
        ]
    });
    // Set default configuration as selected if none selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModelConfigurationDropdown.useEffect": ()=>{
            if (defaultConfig && !selectedConfig) {
                onConfigSelect(defaultConfig);
            }
        }
    }["ModelConfigurationDropdown.useEffect"], [
        defaultConfig,
        selectedConfig,
        onConfigSelect
    ]);
    // Create a default configuration if none exist
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModelConfigurationDropdown.useEffect": ()=>{
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
                fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/configurations/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(defaultConfigData)
                }).then({
                    "ModelConfigurationDropdown.useEffect": (response)=>response.json()
                }["ModelConfigurationDropdown.useEffect"]).then({
                    "ModelConfigurationDropdown.useEffect": (data)=>{
                        console.log('Created default configuration:', data);
                        refetchConfigurations();
                    }
                }["ModelConfigurationDropdown.useEffect"]).catch({
                    "ModelConfigurationDropdown.useEffect": (error)=>{
                        console.error('Error creating default configuration:', error);
                    }
                }["ModelConfigurationDropdown.useEffect"]);
            }
        }
    }["ModelConfigurationDropdown.useEffect"], [
        configLoading,
        configError,
        configurations,
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"],
        refetchConfigurations
    ]);
    const handleCreateConfig = async ()=>{
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
    const handleUpdateConfig = async ()=>{
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
    const handleDeleteConfig = async (config)=>{
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
    const handleSetDefault = async (config)=>{
        try {
            await onConfigSetDefault(config.id);
            refetchConfigurations();
        } catch (error) {
            console.error('Error setting default configuration:', error);
        }
    };
    const handleDuplicate = async (config)=>{
        try {
            await onConfigDuplicate(config.id);
            refetchConfigurations();
        } catch (error) {
            console.error('Error duplicating configuration:', error);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 mr-2",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            }, void 0, false, {
                                fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                lineNumber: 193,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm font-medium",
                        children: selectedConfig ? selectedConfig.name : 'Select Configuration'
                    }, void 0, false, {
                        fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                        lineNumber: 195,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: `w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`,
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M19 9l-7 7-7-7"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                            lineNumber: 199,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                        lineNumber: 198,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-lg font-semibold text-gray-900",
                                    children: "Model Configurations"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 208,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>refetchConfigurations(),
                                            className: "px-3 py-1 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors",
                                            title: "Refresh configurations",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                    lineNumber: 216,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                lineNumber: 215,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowCreateModal(true),
                                            className: "px-3 py-1 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors",
                                            children: "+ New"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 219,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                            lineNumber: 207,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2 max-h-64 overflow-y-auto",
                            children: [
                                configLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 text-center text-gray-500",
                                    children: "Loading configurations..."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 231,
                                    columnNumber: 17
                                }, this),
                                configError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 text-center text-red-500",
                                    children: [
                                        "Error loading configurations: ",
                                        configError.message
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, this),
                                !configLoading && !configError && (!configurations || configurations.length === 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-3 text-center text-gray-500",
                                    children: "No configurations found. Create a new one to get started."
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 241,
                                    columnNumber: 17
                                }, this),
                                configurations?.map((config)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `p-3 rounded-lg border cursor-pointer transition-colors ${selectedConfig?.id === config.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`,
                                        onClick: ()=>{
                                            onConfigSelect(config);
                                            setIsOpen(false);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-medium text-gray-900",
                                                                    children: config.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                                    lineNumber: 261,
                                                                    columnNumber: 25
                                                                }, this),
                                                                config.is_default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full",
                                                                    children: "Default"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                                    lineNumber: 263,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                            lineNumber: 260,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600 mt-1",
                                                            children: config.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                            lineNumber: 268,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-500 mt-1",
                                                            children: [
                                                                config.model_name,
                                                                " • Temp: ",
                                                                config.temperature,
                                                                " • Tokens: ",
                                                                config.max_tokens
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                            lineNumber: 269,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center space-x-1 ml-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                setEditingConfig(config);
                                                                setShowEditModal(true);
                                                            },
                                                            className: "p-1 text-gray-400 hover:text-gray-600",
                                                            title: "Edit",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                                    lineNumber: 284,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                                lineNumber: 283,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleDuplicate(config);
                                                            },
                                                            className: "p-1 text-gray-400 hover:text-gray-600",
                                                            title: "Duplicate",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                                    lineNumber: 296,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                                lineNumber: 295,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                            lineNumber: 287,
                                                            columnNumber: 23
                                                        }, this),
                                                        !config.is_default && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleSetDefault(config);
                                                            },
                                                            className: "p-1 text-gray-400 hover:text-gray-600",
                                                            title: "Set as Default",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M5 13l4 4L19 7"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                                    lineNumber: 309,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                                lineNumber: 308,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: (e)=>{
                                                                e.stopPropagation();
                                                                handleDeleteConfig(config);
                                                            },
                                                            className: "p-1 text-gray-400 hover:text-red-600",
                                                            title: "Delete",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                viewBox: "0 0 24 24",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    strokeLinecap: "round",
                                                                    strokeLinejoin: "round",
                                                                    strokeWidth: 2,
                                                                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                                    lineNumber: 322,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                                lineNumber: 321,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                            lineNumber: 313,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 258,
                                            columnNumber: 19
                                        }, this)
                                    }, config.id, false, {
                                        fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                        lineNumber: 246,
                                        columnNumber: 17
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                            lineNumber: 229,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                    lineNumber: 206,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                lineNumber: 205,
                columnNumber: 9
            }, this),
            showCreateModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 w-96 max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: "Create New Configuration"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                            lineNumber: 338,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 341,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newConfig.name,
                                            onChange: (e)=>setNewConfig((prev)=>({
                                                        ...prev,
                                                        name: e.target.value
                                                    })),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",
                                            placeholder: "Configuration name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 342,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 340,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 351,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: newConfig.description,
                                            onChange: (e)=>setNewConfig((prev)=>({
                                                        ...prev,
                                                        description: e.target.value
                                                    })),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",
                                            placeholder: "Configuration description",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 352,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 350,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Model Name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 361,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newConfig.model_name,
                                            onChange: (e)=>setNewConfig((prev)=>({
                                                        ...prev,
                                                        model_name: e.target.value
                                                    })),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",
                                            placeholder: "e.g., gpt-4, gpt-3.5-turbo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 362,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 360,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: [
                                                "Temperature: ",
                                                newConfig.temperature
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 371,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0",
                                            max: "1",
                                            step: "0.1",
                                            value: newConfig.temperature,
                                            onChange: (e)=>setNewConfig((prev)=>({
                                                        ...prev,
                                                        temperature: parseFloat(e.target.value)
                                                    })),
                                            className: "w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 374,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 370,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Max Tokens"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: newConfig.max_tokens,
                                            onChange: (e)=>setNewConfig((prev)=>({
                                                        ...prev,
                                                        max_tokens: parseInt(e.target.value)
                                                    })),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",
                                            min: "100",
                                            max: "4000"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 384,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Sample Size"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 396,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: newConfig.sample_size,
                                            onChange: (e)=>setNewConfig((prev)=>({
                                                        ...prev,
                                                        sample_size: parseInt(e.target.value)
                                                    })),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",
                                            min: "10",
                                            max: "1000"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 397,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 395,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                            lineNumber: 339,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowCreateModal(false),
                                    className: "px-4 py-2 text-gray-600 hover:text-gray-800",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 408,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCreateConfig,
                                    className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700",
                                    children: "Create"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                            lineNumber: 407,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                    lineNumber: 337,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                lineNumber: 336,
                columnNumber: 9
            }, this),
            showEditModal && editingConfig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-lg p-6 w-96 max-h-[90vh] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold mb-4",
                            children: "Edit Configuration"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                            lineNumber: 429,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 432,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingConfig.name,
                                            onChange: (e)=>setEditingConfig((prev)=>prev ? {
                                                        ...prev,
                                                        name: e.target.value
                                                    } : null),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 433,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 431,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 441,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: editingConfig.description,
                                            onChange: (e)=>setEditingConfig((prev)=>prev ? {
                                                        ...prev,
                                                        description: e.target.value
                                                    } : null),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 442,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 440,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Model Name"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 450,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: editingConfig.model_name,
                                            onChange: (e)=>setEditingConfig((prev)=>prev ? {
                                                        ...prev,
                                                        model_name: e.target.value
                                                    } : null),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 449,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: [
                                                "Temperature: ",
                                                editingConfig.temperature
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 459,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "range",
                                            min: "0",
                                            max: "1",
                                            step: "0.1",
                                            value: editingConfig.temperature,
                                            onChange: (e)=>setEditingConfig((prev)=>prev ? {
                                                        ...prev,
                                                        temperature: parseFloat(e.target.value)
                                                    } : null),
                                            className: "w-full"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 462,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Max Tokens"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 473,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: editingConfig.max_tokens,
                                            onChange: (e)=>setEditingConfig((prev)=>prev ? {
                                                        ...prev,
                                                        max_tokens: parseInt(e.target.value)
                                                    } : null),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",
                                            min: "100",
                                            max: "4000"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 474,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 472,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 mb-1",
                                            children: "Sample Size"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 484,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: editingConfig.sample_size,
                                            onChange: (e)=>setEditingConfig((prev)=>prev ? {
                                                        ...prev,
                                                        sample_size: parseInt(e.target.value)
                                                    } : null),
                                            className: "w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500",
                                            min: "10",
                                            max: "1000"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                            lineNumber: 485,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 483,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                            lineNumber: 430,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end space-x-3 mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowEditModal(false),
                                    className: "px-4 py-2 text-gray-600 hover:text-gray-800",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 496,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleUpdateConfig,
                                    className: "px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700",
                                    children: "Update"
                                }, void 0, false, {
                                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                                    lineNumber: 502,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                            lineNumber: 495,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                    lineNumber: 428,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
                lineNumber: 427,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ModelConfigurationDropdown.tsx",
        lineNumber: 185,
        columnNumber: 5
    }, this);
}
_s(ModelConfigurationDropdown, "QoupKKOWqOWMqeSZiiylhtSJoKY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGet"]
    ];
});
_c = ModelConfigurationDropdown;
var _c;
__turbopack_refresh__.register(_c, "ModelConfigurationDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/Config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/useApiHooks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/apiService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/Spinner.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ModelConfigurationDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/ModelConfigurationDropdown.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature(), _s1 = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
// ... (interfaces unchanged)
function normalizeIsPhi(val) {
    if (typeof val === "string") {
        if (val.toLowerCase() === "yes") return "yes";
        if (val.toLowerCase() === "no") return "no";
    }
    if (val === true) return "yes";
    if (val === false) return "no";
    return "no";
}
function Modal({ open, onClose, children, title }) {
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-lg max-w-5xl w-full max-h-[90vh] flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between px-6 py-4 border-b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-lg font-semibold",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "text-gray-500 hover:text-gray-700",
                            "aria-label": "Close",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-6 h-6",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-auto p-6 flex-1",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = Modal;
// EditableCell component for inline editing
const EditableCell = ({ value, type, options, onSave, placeholder, multiline = false })=>{
    _s();
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editValue, setEditValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    const [isSaving, setIsSaving] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSave = async ()=>{
        if (editValue !== value) {
            setIsSaving(true);
            try {
                await onSave(editValue);
                setIsEditing(false);
            } catch (error) {
                console.error('Failed to save:', error);
                alert('Failed to save changes. Please try again.');
                setEditValue(value); // Reset to original value
            } finally{
                setIsSaving(false);
            }
        } else {
            setIsEditing(false);
        }
    };
    const handleCancel = ()=>{
        setEditValue(value);
        setIsEditing(false);
    };
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && !multiline) {
            e.preventDefault();
            handleSave();
        } else if (e.key === 'Escape') {
            handleCancel();
        }
    };
    if (!isEditing) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group cursor-pointer hover:bg-gray-50 rounded px-2 py-1 min-h-[32px] flex items-center",
            onClick: ()=>setIsEditing(true),
            title: "Click to edit",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "flex-1",
                    children: value || placeholder || 'Click to edit...'
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: "w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-1",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 2,
                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                        lineNumber: 116,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
            lineNumber: 104,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center space-x-2",
        children: [
            type === 'select' && options ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: editValue,
                onChange: (e)=>setEditValue(e.target.value),
                onKeyDown: handleKeyDown,
                className: "flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                autoFocus: true,
                children: options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: option.value,
                        children: option.label
                    }, option.value, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                        lineNumber: 133,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                lineNumber: 125,
                columnNumber: 9
            }, this) : multiline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                value: editValue,
                onChange: (e)=>setEditValue(e.target.value),
                onKeyDown: handleKeyDown,
                className: "flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-y min-h-[60px]",
                placeholder: placeholder,
                autoFocus: true
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                lineNumber: 139,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                value: editValue,
                onChange: (e)=>setEditValue(e.target.value),
                onKeyDown: handleKeyDown,
                className: "flex-1 px-2 py-1 border border-gray-300 rounded text-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent",
                placeholder: placeholder,
                autoFocus: true
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                lineNumber: 148,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSave,
                disabled: isSaving,
                className: "px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700 disabled:bg-gray-400",
                children: isSaving ? '...' : '✓'
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleCancel,
                className: "px-2 py-1 bg-gray-600 text-white rounded text-xs hover:bg-gray-700",
                children: "✕"
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                lineNumber: 165,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
};
_s(EditableCell, "LwFx9stsCV4vRyhuKnB6sSVWLss=");
_c1 = EditableCell;
// --- End interfaces ---
const PHIAnalyzerPage = ()=>{
    _s1();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { clientId, dumpId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const [selectedConfig, setSelectedConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // ... (state hooks unchanged)
    const [tableDataModal, setTableDataModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        open: false,
        tableName: null,
        loading: false,
        error: null,
        data: null,
        columns: []
    });
    // ... (API hooks and effects unchanged)
    // Table Data Modal logic
    const handleViewTableData = async (tableName)=>{
        setTableDataModal({
            open: true,
            tableName,
            loading: true,
            error: null,
            data: null,
            columns: []
        });
        try {
            const responseData = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$apiService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRequest"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}view_table_data/${clientId}/${dumpId}/${encodeURIComponent(tableName)}/?rows=50`);
            // Backend returns {rows: [...], table_name: "..."} format
            const rows = responseData.rows || [];
            let columns = [];
            if (Array.isArray(rows) && rows.length > 0) {
                columns = Object.keys(rows[0]);
            }
            setTableDataModal({
                open: true,
                tableName,
                loading: false,
                error: null,
                data: rows,
                columns
            });
        } catch (error) {
            setTableDataModal({
                open: true,
                tableName,
                loading: false,
                error: error?.message || "Unknown error",
                data: null,
                columns: []
            });
        }
    };
    const closeTableDataModal = ()=>{
        setTableDataModal({
            open: false,
            tableName: null,
            loading: false,
            error: null,
            data: null,
            columns: []
        });
    };
    // Handle column update
    const handleUpdateColumn = async (sessionId, tableName, columnName, updates)=>{
        const updateKey = `${sessionId}-${tableName}-${columnName}`;
        setSavingChanges((prev)=>({
                ...prev,
                [updateKey]: true
            }));
        try {
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/sessions/${sessionId}/tables/${encodeURIComponent(tableName)}/columns/${encodeURIComponent(columnName)}/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updates)
            });
            if (!response.ok) {
                throw new Error(`Failed to update column: ${response.status}`);
            }
            const data = await response.json();
            // Update local results state
            setResults((prev)=>prev.map((result)=>{
                    if (result.column_name === columnName && result.table_name === tableName) {
                        return {
                            ...result,
                            ...data.column
                        };
                    }
                    return result;
                }));
            return data;
        } catch (error) {
            console.error('Failed to update column:', error);
            throw error;
        } finally{
            setSavingChanges((prev)=>({
                    ...prev,
                    [updateKey]: false
                }));
        }
    };
    // Handle table verification toggle
    const handleToggleTableVerification = async (tableName)=>{
        if (!currentSession) return;
        const currentStatus = verificationStatus[tableName] || false;
        const newStatus = !currentStatus;
        try {
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/sessions/${currentSession.session_id}/tables/${encodeURIComponent(tableName)}/verification/`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    is_manually_verified: newStatus,
                    verified_by: 'current_user' // You might want to get this from user context
                })
            });
            if (!response.ok) {
                throw new Error(`Failed to update verification: ${response.status}`);
            }
            // Update local verification status
            setVerificationStatus((prev)=>({
                    ...prev,
                    [tableName]: newStatus
                }));
            // Update results to reflect verification status
            setResults((prev)=>prev.map((result)=>{
                    if (result.table_name === tableName) {
                        return {
                            ...result,
                            is_manually_verified: newStatus,
                            verified_by: newStatus ? 'current_user' : '',
                            verified_at: newStatus ? new Date().toISOString() : null
                        };
                    }
                    return result;
                }));
        } catch (error) {
            console.error('Failed to toggle verification:', error);
            alert('Failed to update verification status. Please try again.');
        }
    };
    // Debug logging
    // console.log('PHIAnalyzerPage - selectedConfig:', selectedConfig);
    const [currentSession, setCurrentSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isAnalyzing, setIsAnalyzing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [sessionHistory, setSessionHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [showHistory, setShowHistory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isImporting, setIsImporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [importFile, setImportFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedSessionId, setSelectedSessionId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingColumn, setEditingColumn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [verificationStatus, setVerificationStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [savingChanges, setSavingChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Fetch client details
    const { data: clientDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}client_details/${clientId}/`, {
        queryKey: [
            "client_details",
            clientId
        ]
    });
    // Fetch dump details
    const { data: dumpDetails } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}dump_details/${clientId}/${dumpId}/`, {
        queryKey: [
            "dump_details",
            clientId,
            dumpId
        ]
    });
    // Fetch session history
    const { data: historyData, refetch: refetchHistory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/list/${clientId}/${dumpId}/`, {
        queryKey: [
            "phi_analysis_history",
            clientId,
            dumpId
        ],
        enabled: showHistory
    });
    // Update session history when data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PHIAnalyzerPage.useEffect": ()=>{
            if (historyData?.sessions) {
                setSessionHistory(historyData.sessions);
            }
        }
    }["PHIAnalyzerPage.useEffect"], [
        historyData
    ]);
    // Load session history on component mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PHIAnalyzerPage.useEffect": ()=>{
            setShowHistory(true);
        }
    }["PHIAnalyzerPage.useEffect"], []);
    // Model configuration API hooks
    const createConfigMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePost"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/configurations/`);
    const updateConfigMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePut"])({
        "PHIAnalyzerPage.usePut[updateConfigMutation]": ({ id })=>`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/configurations/${id}/`
    }["PHIAnalyzerPage.usePut[updateConfigMutation]"]);
    const deleteConfigMutation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDelete"])({
        "PHIAnalyzerPage.useDelete[deleteConfigMutation]": (id)=>`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/configurations/${id}/`
    }["PHIAnalyzerPage.useDelete[deleteConfigMutation]"]);
    // Test CORS configuration
    const testCORS = async ()=>{
        try {
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/cors-test/`);
            const data = await response.json();
            console.log('CORS test successful:', data);
            alert('CORS test successful!');
        } catch (error) {
            console.error('CORS test failed:', error);
            alert('CORS test failed: ' + error);
        }
    };
    // Cleanup intervals on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PHIAnalyzerPage.useEffect": ()=>{
            return ({
                "PHIAnalyzerPage.useEffect": ()=>{
                // Cleanup any running intervals
                // Note: In a real app, you'd want to store interval IDs and clear them
                }
            })["PHIAnalyzerPage.useEffect"];
        }
    }["PHIAnalyzerPage.useEffect"], []);
    const handleRunAnalyzer = async ()=>{
        if (!clientId || !dumpId || !selectedConfig) {
            alert('Please select a model configuration first');
            return;
        }
        setIsAnalyzing(true);
        try {
            const configData = {
                model_name: selectedConfig.model_name,
                temperature: selectedConfig.temperature,
                max_token: selectedConfig.max_tokens,
                sample_size: selectedConfig.sample_size
            };
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/run_analyzer/${clientId}/${dumpId}/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(configData)
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (data.session_id) {
                setCurrentSession({
                    session_id: data.session_id,
                    client_id: parseInt(clientId),
                    client_name: clientDetails?.client_name || '',
                    dump_id: parseInt(dumpId),
                    dump_name: dumpDetails?.dump_name || '',
                    status: data.status,
                    progress: 0,
                    current_step: 'Initializing',
                    created_at: new Date().toISOString(),
                    started_at: new Date().toISOString(),
                    completed_at: null,
                    duration: null,
                    statistics: {
                        total_tables: 0,
                        processed_tables: 0,
                        completed_tables: 0,
                        failed_tables: 0,
                        processing_tables: 0,
                        pending_tables: 0,
                        total_columns: 0,
                        phi_columns_found: 0,
                        validation_passed: 0,
                        validation_failed: 0,
                        errors_count: 0
                    },
                    output_file_path: null,
                    error_message: null,
                    progress_logs: [],
                    config: selectedConfig,
                    tables: []
                });
                // Start polling for status updates
                startStatusPolling(data.session_id);
            }
        } catch (error) {
            console.error("Failed to run PHI analyzer:", error);
            alert(`Failed to start PHI analysis: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
        } finally{
            setIsAnalyzing(false);
        }
    };
    const startStatusPolling = (sessionId)=>{
        const pollInterval = setInterval(async ()=>{
            try {
                const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/status/${sessionId}/`);
                if (response.ok) {
                    const statusData = await response.json();
                    setCurrentSession((prev)=>prev ? {
                            ...prev,
                            ...statusData
                        } : null);
                    // If analysis is completed or failed, stop polling
                    if (statusData.status === 'completed' || statusData.status === 'failed') {
                        clearInterval(pollInterval);
                        if (statusData.status === 'completed') {
                            // Fetch detailed results
                            await fetchAnalysisResults(sessionId);
                        } else if (statusData.status === 'failed') {
                            console.error("PHI analysis failed:", statusData.error_message);
                        }
                    }
                } else {
                    console.error("Failed to fetch status:", response.status, response.statusText);
                }
            } catch (error) {
                console.error("Error polling status:", error);
            // Don't clear interval on network errors, keep trying
            }
        }, 2000); // Poll every 2 seconds
        // Store interval ID for cleanup
        return pollInterval;
    };
    const fetchAnalysisResults = async (sessionId)=>{
        try {
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/results/${sessionId}/`);
            if (response.ok) {
                const resultsData = await response.json();
                setCurrentSession((prev)=>prev ? {
                        ...prev,
                        ...resultsData
                    } : null);
                // Flatten all column results for display, normalizing is_phi
                const allColumns = [];
                resultsData.tables?.forEach((table)=>{
                    table.columns?.forEach((column)=>{
                        allColumns.push({
                            ...column,
                            is_phi: normalizeIsPhi(column.is_phi),
                            table_name: table.table_name,
                            phi_rule: column.phi_rule ?? "",
                            pipeline_remark: column.pipeline_remark ?? "",
                            user_remarks: column.user_remarks ?? "",
                            is_manually_verified: column.is_manually_verified ?? false,
                            verified_by: column.verified_by ?? "",
                            verified_at: column.verified_at ?? null
                        });
                    });
                });
                setResults(allColumns);
                // Update verification status tracking
                const newVerificationStatus = {};
                resultsData.tables?.forEach((table)=>{
                    const hasVerifiedColumns = table.columns?.some((col)=>col.is_manually_verified);
                    newVerificationStatus[table.table_name] = hasVerifiedColumns || false;
                });
                setVerificationStatus(newVerificationStatus);
            } else {
                console.error("Failed to fetch results:", response.status, response.statusText);
                alert("Failed to fetch analysis results. Please try refreshing the page.");
            }
        } catch (error) {
            console.error("Error fetching results:", error);
            alert("Error fetching analysis results. Please try again.");
        }
    };
    // Model configuration handlers
    const handleConfigCreate = async (config)=>{
        try {
            await createConfigMutation.mutateAsync(config);
        } catch (error) {
            console.error('Error creating configuration:', error);
            throw error;
        }
    };
    const handleConfigUpdate = async (id, config)=>{
        try {
            await updateConfigMutation.mutateAsync({
                id,
                data: config
            });
        } catch (error) {
            console.error('Error updating configuration:', error);
            throw error;
        }
    };
    const handleConfigDelete = async (id)=>{
        try {
            await deleteConfigMutation.mutateAsync(id);
        } catch (error) {
            console.error('Error deleting configuration:', error);
            throw error;
        }
    };
    const handleConfigSetDefault = async (id)=>{
        try {
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/configurations/${id}/set-default/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to set default configuration');
            }
        } catch (error) {
            console.error('Error setting default configuration:', error);
            throw error;
        }
    };
    const handleConfigDuplicate = async (id)=>{
        try {
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/configurations/${id}/duplicate/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to duplicate configuration');
            }
        } catch (error) {
            console.error('Error duplicating configuration:', error);
            throw error;
        }
    };
    const handleSessionSelect = async (sessionId)=>{
        setSelectedSessionId(sessionId);
        // Find the session in history
        const session = sessionHistory.find((s)=>s.session_id === sessionId);
        if (session) {
            setCurrentSession(session);
            // If session is completed, fetch its results
            if (session.status === 'completed') {
                await fetchAnalysisResults(sessionId);
            } else {
                // Clear results if session is not completed
                setResults([]);
            }
        }
    };
    const filteredResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PHIAnalyzerPage.useMemo[filteredResults]": ()=>{
            return results.filter({
                "PHIAnalyzerPage.useMemo[filteredResults]": (result)=>{
                    // Search filter
                    if (searchTerm) {
                        const searchLower = searchTerm.toLowerCase();
                        if (!result.table_name?.toLowerCase().includes(searchLower) && !result.column_name.toLowerCase().includes(searchLower) && !(result.phi_rule || "").toLowerCase().includes(searchLower) && !(result.pipeline_remark || "").toLowerCase().includes(searchLower) && !(result.user_remarks || "").toLowerCase().includes(searchLower)) {
                            return false;
                        }
                    }
                    // Column filters
                    for (const [column, value] of Object.entries(filters)){
                        if (value) {
                            if (column === "is_phi") {
                                // Filter by "yes"/"no"
                                if (normalizeIsPhi(result.is_phi) !== value) return false;
                            } else if (column === "is_manually_verified") {
                                // Filter by verification status
                                const isVerified = result.is_manually_verified;
                                const filterValue = value === "true";
                                if (isVerified !== filterValue) return false;
                            } else if (result[column]?.toString().toLowerCase() !== value.toLowerCase()) {
                                return false;
                            }
                        }
                    }
                    return true;
                }
            }["PHIAnalyzerPage.useMemo[filteredResults]"]);
        }
    }["PHIAnalyzerPage.useMemo[filteredResults]"], [
        results,
        searchTerm,
        filters
    ]);
    // Track displayed table names to show eye icon only once per table
    const displayedTableNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PHIAnalyzerPage.useMemo[displayedTableNames]": ()=>{
            const tableNames = new Set();
            return filteredResults.map({
                "PHIAnalyzerPage.useMemo[displayedTableNames]": (result, index)=>{
                    const tableName = result.table_name;
                    const shouldShowIcon = tableName && tableName !== 'N/A' && !tableNames.has(tableName);
                    if (shouldShowIcon) {
                        tableNames.add(tableName);
                    }
                    return {
                        ...result,
                        shouldShowIcon,
                        index
                    };
                }
            }["PHIAnalyzerPage.useMemo[displayedTableNames]"]);
        }
    }["PHIAnalyzerPage.useMemo[displayedTableNames]"], [
        filteredResults
    ]);
    const handleExport = ()=>{
        const csvContent = [
            "Table Name,Column,Is PHI,PHI Rule,Pipeline Remark,User Remarks,Manually Verified,Verified By,Verified At",
            ...displayedTableNames.map((result)=>`"${result.table_name || ''}","${result.column_name}","${normalizeIsPhi(result.is_phi)}","${result.phi_rule || ''}","${result.pipeline_remark || ''}","${result.user_remarks || ''}","${result.is_manually_verified ? 'Yes' : 'No'}","${result.verified_by || ''}","${result.verified_at || ''}"`)
        ].join("\n");
        const blob = new Blob([
            csvContent
        ], {
            type: "text/csv"
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `phi_analysis_${dumpDetails?.dump_name || 'results'}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    };
    const handleFileSelect = (event)=>{
        const file = event.target.files?.[0];
        if (file && file.type === 'text/csv') {
            setImportFile(file);
        } else {
            alert('Please select a valid CSV file');
        }
    };
    const handleImport = async ()=>{
        if (!importFile || !clientId || !dumpId) {
            alert('Please select a CSV file to import');
            return;
        }
        setIsImporting(true);
        try {
            const formData = new FormData();
            formData.append('csv_file', importFile);
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["API_URL"]}phi_analyzer/import_csv/${clientId}/${dumpId}/`, {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            // Create a new session object for the imported data
            const importedSession = {
                session_id: data.session_id,
                client_id: parseInt(clientId),
                client_name: clientDetails?.client_name || '',
                dump_id: parseInt(dumpId),
                dump_name: dumpDetails?.dump_name || '',
                status: 'completed',
                progress: 100,
                current_step: 'Imported from CSV',
                created_at: new Date().toISOString(),
                started_at: new Date().toISOString(),
                completed_at: new Date().toISOString(),
                duration: null,
                statistics: data.statistics,
                output_file_path: null,
                error_message: null,
                progress_logs: [],
                config: {
                    imported: true
                },
                tables: []
            };
            setCurrentSession(importedSession);
            // Fetch the imported results
            await fetchAnalysisResults(data.session_id);
            // Refresh session history
            if (refetchHistory) {
                refetchHistory();
            }
            alert(`CSV imported successfully! Found ${data.statistics.phi_columns_found} PHI columns across ${data.statistics.total_tables} tables.`);
        } catch (error) {
            console.error("Failed to import CSV:", error);
            alert(`Failed to import CSV: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again.`);
        } finally{
            setIsImporting(false);
            setImportFile(null);
            // Reset file input
            const fileInput = document.getElementById('csv-import-input');
            if (fileInput) {
                fileInput.value = '';
            }
        }
    };
    const uniqueValues = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PHIAnalyzerPage.useMemo[uniqueValues]": ()=>{
            const values = {};
            results.forEach({
                "PHIAnalyzerPage.useMemo[uniqueValues]": (result)=>{
                    Object.keys(result).forEach({
                        "PHIAnalyzerPage.useMemo[uniqueValues]": (key)=>{
                            if (!values[key]) values[key] = new Set();
                            values[key].add(result[key]?.toString() || '');
                        }
                    }["PHIAnalyzerPage.useMemo[uniqueValues]"]);
                }
            }["PHIAnalyzerPage.useMemo[uniqueValues]"]);
            return values;
        }
    }["PHIAnalyzerPage.useMemo[uniqueValues]"], [
        results
    ]);
    if (!dumpDetails || !clientDetails) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex h-64 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Spinner$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Spinner"], {}, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                lineNumber: 940,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
            lineNumber: 939,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen bg-gray-50 flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white border-b border-gray-200 flex-shrink-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.back(),
                                        className: "flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5 mr-2",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M10 19l-7-7m0 0l7-7m-7 7h18"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 957,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 956,
                                                columnNumber: 17
                                            }, this),
                                            "Back"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 952,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                className: "text-2xl font-bold text-gray-900",
                                                children: "PHI Analyzer"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 962,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600",
                                                children: [
                                                    clientDetails.client_name,
                                                    " • ",
                                                    dumpDetails.dump_name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 963,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 961,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 951,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowHistory(!showHistory),
                                        className: "text-sm text-purple-600 hover:text-purple-800",
                                        children: [
                                            showHistory ? 'Hide' : 'Show',
                                            " History"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 969,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$ModelConfigurationDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        selectedConfig: selectedConfig,
                                        onConfigSelect: setSelectedConfig,
                                        onConfigCreate: handleConfigCreate,
                                        onConfigUpdate: handleConfigUpdate,
                                        onConfigDelete: handleConfigDelete,
                                        onConfigSetDefault: handleConfigSetDefault,
                                        onConfigDuplicate: handleConfigDuplicate
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 975,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 968,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                        lineNumber: 950,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                    lineNumber: 949,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                lineNumber: 948,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-hidden flex flex-col",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-gray-200 p-4 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-4 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative flex-1 max-w-md",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "text",
                                                        placeholder: "Search table names, columns, PHI rules...",
                                                        value: searchTerm,
                                                        onChange: (e)=>setSearchTerm(e.target.value),
                                                        className: "w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 996,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "absolute left-3 top-2.5 h-4 w-4 text-gray-400",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1004,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1003,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 995,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setShowFilters(!showFilters),
                                                className: "flex items-center px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors duration-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4 mr-2",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1012,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1011,
                                                        columnNumber: 17
                                                    }, this),
                                                    "Filters"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 1007,
                                                columnNumber: 15
                                            }, this),
                                            selectedConfig && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-800 rounded-lg text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-4 h-4",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M5 13l4 4L19 7"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1019,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1018,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "Config: ",
                                                            selectedConfig.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1021,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 1017,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 994,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleRunAnalyzer,
                                        disabled: isAnalyzing || !selectedConfig,
                                        className: "flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed transition-colors duration-200 mr-3",
                                        title: !selectedConfig ? "Please select a model configuration first" : "Run PHI analysis",
                                        children: isAnalyzing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1033,
                                                    columnNumber: 19
                                                }, this),
                                                "Analyzing..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 mr-2",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1039,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1038,
                                                    columnNumber: 19
                                                }, this),
                                                "Run Analyzer"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1025,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>document.getElementById('csv-import-input')?.click(),
                                        disabled: isImporting,
                                        className: "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 mr-3",
                                        children: isImporting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1052,
                                                    columnNumber: 19
                                                }, this),
                                                "Importing..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 mr-2",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1058,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1057,
                                                    columnNumber: 19
                                                }, this),
                                                "Import"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1045,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        id: "csv-import-input",
                                        type: "file",
                                        accept: ".csv",
                                        onChange: handleFileSelect,
                                        className: "hidden"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1064,
                                        columnNumber: 13
                                    }, this),
                                    importFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleImport,
                                        className: "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 mr-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-2",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M5 13l4 4L19 7"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1077,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 1076,
                                                columnNumber: 17
                                            }, this),
                                            "Confirm Import"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1072,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleExport,
                                        disabled: displayedTableNames.length === 0,
                                        className: "flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-2",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1088,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 1087,
                                                columnNumber: 15
                                            }, this),
                                            "Export"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1082,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 993,
                                columnNumber: 11
                            }, this),
                            importFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-5 h-5 text-blue-500 mr-2",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1100,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1099,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-blue-700",
                                                    children: [
                                                        "Selected file: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: importFile.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1103,
                                                            columnNumber: 36
                                                        }, this),
                                                        " (",
                                                        (importFile.size / 1024).toFixed(1),
                                                        " KB)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1102,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                            lineNumber: 1098,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setImportFile(null);
                                                const fileInput = document.getElementById('csv-import-input');
                                                if (fileInput) fileInput.value = '';
                                            },
                                            className: "text-blue-500 hover:text-blue-700",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M6 18L18 6M6 6l12 12"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1115,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 1114,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                            lineNumber: 1106,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                    lineNumber: 1097,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1096,
                                columnNumber: 13
                            }, this),
                            showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 p-4 bg-gray-50 rounded-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-gray-700 mb-1",
                                                        children: "Is PHI"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1127,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: filters.is_phi || '',
                                                        onChange: (e)=>setFilters((prev)=>({
                                                                    ...prev,
                                                                    is_phi: e.target.value
                                                                })),
                                                        className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-purple-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "All"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                lineNumber: 1133,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "yes",
                                                                children: "Yes"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                lineNumber: 1134,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "no",
                                                                children: "No"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                lineNumber: 1135,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1128,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 1126,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-gray-700 mb-1",
                                                        children: "PHI Rule"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1139,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: filters.phi_rule || '',
                                                        onChange: (e)=>setFilters((prev)=>({
                                                                    ...prev,
                                                                    phi_rule: e.target.value
                                                                })),
                                                        className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-purple-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "All"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                lineNumber: 1145,
                                                                columnNumber: 21
                                                            }, this),
                                                            Array.from(uniqueValues.phi_rule || []).map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: value,
                                                                    children: value
                                                                }, value, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                    lineNumber: 1147,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1140,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 1138,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-gray-700 mb-1",
                                                        children: "Table Name"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1152,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: filters.table_name || '',
                                                        onChange: (e)=>setFilters((prev)=>({
                                                                    ...prev,
                                                                    table_name: e.target.value
                                                                })),
                                                        className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-purple-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "All"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                lineNumber: 1158,
                                                                columnNumber: 21
                                                            }, this),
                                                            Array.from(uniqueValues.table_name || []).map((value)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: value,
                                                                    children: value
                                                                }, value, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                    lineNumber: 1160,
                                                                    columnNumber: 23
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1153,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 1151,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        className: "block text-xs font-medium text-gray-700 mb-1",
                                                        children: "Verification Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1165,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: filters.is_manually_verified || '',
                                                        onChange: (e)=>setFilters((prev)=>({
                                                                    ...prev,
                                                                    is_manually_verified: e.target.value
                                                                })),
                                                        className: "w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-1 focus:ring-purple-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "",
                                                                children: "All"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                lineNumber: 1171,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "true",
                                                                children: "Verified"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                lineNumber: 1172,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "false",
                                                                children: "Not Verified"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                lineNumber: 1173,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1166,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 1164,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1125,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-3 flex justify-end",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setFilters({}),
                                            className: "px-3 py-1 text-sm text-gray-600 hover:text-gray-900",
                                            children: "Clear Filters"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                            lineNumber: 1178,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1177,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1124,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                        lineNumber: 992,
                        columnNumber: 9
                    }, this),
                    currentSession && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-gray-200 p-4 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: "Status:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1195,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `px-2 py-1 rounded-full text-xs font-medium ${currentSession.status === 'completed' ? 'bg-green-100 text-green-800' : currentSession.status === 'failed' ? 'bg-red-100 text-red-800' : currentSession.status === 'processing' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`,
                                                    children: currentSession.status
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1196,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                            lineNumber: 1194,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: "Progress:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1206,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-900",
                                                    children: [
                                                        currentSession.progress,
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1207,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                            lineNumber: 1205,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm font-medium text-gray-700",
                                                    children: "Step:"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1210,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-gray-900",
                                                    children: currentSession.current_step
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1211,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                            lineNumber: 1209,
                                            columnNumber: 17
                                        }, this),
                                        currentSession.statistics && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center space-x-4 text-sm text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "Tables: ",
                                                        currentSession.statistics.processed_tables,
                                                        "/",
                                                        currentSession.statistics.total_tables
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1215,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "PHI Columns: ",
                                                        currentSession.statistics.phi_columns_found
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1216,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                            lineNumber: 1214,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                    lineNumber: 1193,
                                    columnNumber: 15
                                }, this),
                                currentSession.status === 'processing' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-48",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full bg-gray-200 rounded-full h-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-blue-600 h-2 rounded-full transition-all duration-300",
                                            style: {
                                                width: `${currentSession.progress}%`
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                            lineNumber: 1223,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1222,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                    lineNumber: 1221,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                            lineNumber: 1192,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                        lineNumber: 1191,
                        columnNumber: 11
                    }, this),
                    showHistory && sessionHistory.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-b border-gray-200 p-4 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-gray-900 mb-3",
                                children: "Recent Sessions"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1237,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
                                children: sessionHistory.slice(0, 6).map((session)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>handleSessionSelect(session.session_id),
                                        className: `p-3 rounded-lg border cursor-pointer transition-colors duration-200 ${selectedSessionId === session.session_id ? 'bg-purple-50 border-purple-300' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'}`,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-sm",
                                                        children: [
                                                            "Session ",
                                                            session.session_id
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1250,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `px-2 py-1 rounded text-xs ${session.status === 'completed' ? 'bg-green-100 text-green-800' : session.status === 'failed' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`,
                                                        children: session.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1251,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 1249,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-500",
                                                children: new Date(session.created_at).toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 1259,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, session.session_id, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1240,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1238,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                        lineNumber: 1236,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto",
                        children: displayedTableNames.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center h-64",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-12 h-12 text-gray-400 mx-auto mb-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                            lineNumber: 1274,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1273,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500",
                                        children: "No results to display. Run the analyzer to see PHI analysis results."
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1276,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1272,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                            lineNumber: 1271,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "min-w-full divide-y divide-gray-200 table-fixed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-50 sticky top-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "w-32 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Table Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1284,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "w-32 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Column"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1287,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "w-20 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Is PHI"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1290,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "w-28 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "PHI Rule"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1293,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "w-48 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Pipeline Remark"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1296,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "w-48 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "User Remarks"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1299,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "w-32 px-3 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: "Manual Verification"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1302,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                            lineNumber: 1283,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1282,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "bg-white divide-y divide-gray-200",
                                        children: displayedTableNames.map((result, index)=>{
                                            const tableName = result.table_name;
                                            const isTableVerified = verificationStatus[tableName] || result.is_manually_verified;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-gray-50",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-32 px-3 py-3 text-sm font-medium text-gray-900",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "truncate",
                                                                    title: tableName || 'N/A',
                                                                    children: tableName || 'N/A'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                    lineNumber: 1316,
                                                                    columnNumber: 29
                                                                }, this),
                                                                result.shouldShowIcon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleViewTableData(tableName),
                                                                            className: "text-gray-400 hover:text-blue-600 transition-colors duration-200 flex-shrink-0",
                                                                            title: `View data for table: ${tableName}`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                viewBox: "0 0 24 24",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                                        lineNumber: 1325,
                                                                                        columnNumber: 37
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: 2,
                                                                                        d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                                        lineNumber: 1326,
                                                                                        columnNumber: 37
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                                lineNumber: 1324,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                            lineNumber: 1319,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            onClick: ()=>handleToggleTableVerification(tableName),
                                                                            className: `transition-colors duration-200 flex-shrink-0 ${isTableVerified ? 'text-green-600 hover:text-green-800' : 'text-gray-400 hover:text-blue-600'}`,
                                                                            title: `${isTableVerified ? 'Remove' : 'Mark'} manual verification for table: ${tableName}`,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-3 h-3",
                                                                                fill: isTableVerified ? "currentColor" : "none",
                                                                                stroke: "currentColor",
                                                                                viewBox: "0 0 24 24",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: 2,
                                                                                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                                    lineNumber: 1339,
                                                                                    columnNumber: 37
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                                lineNumber: 1338,
                                                                                columnNumber: 35
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                            lineNumber: 1329,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1315,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1314,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-32 px-3 py-3 text-sm text-gray-900",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "truncate block",
                                                            title: result.column_name,
                                                            children: result.column_name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1347,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1346,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-20 px-3 py-3",
                                                        children: currentSession ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableCell, {
                                                            value: normalizeIsPhi(result.is_phi),
                                                            type: "select",
                                                            options: [
                                                                {
                                                                    value: 'yes',
                                                                    label: 'Yes'
                                                                },
                                                                {
                                                                    value: 'no',
                                                                    label: 'No'
                                                                },
                                                                {
                                                                    value: 'unknown',
                                                                    label: 'Unknown'
                                                                }
                                                            ],
                                                            onSave: async (newValue)=>{
                                                                await handleUpdateColumn(currentSession.session_id, tableName, result.column_name, {
                                                                    is_phi: newValue
                                                                });
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1351,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${normalizeIsPhi(result.is_phi) === "yes" ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`,
                                                            children: normalizeIsPhi(result.is_phi) === "yes" ? 'Yes' : 'No'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1369,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1349,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-28 px-3 py-3 text-sm text-gray-900",
                                                        children: currentSession ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableCell, {
                                                            value: result.phi_rule || '',
                                                            type: "text",
                                                            placeholder: "Enter PHI rule...",
                                                            onSave: async (newValue)=>{
                                                                await handleUpdateColumn(currentSession.session_id, tableName, result.column_name, {
                                                                    phi_rule: newValue
                                                                });
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1380,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "break-words",
                                                            title: result.phi_rule || 'N/A',
                                                            children: result.phi_rule || 'N/A'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1394,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1378,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-48 px-3 py-3 text-sm text-gray-900",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "break-words",
                                                            title: result.pipeline_remark || 'N/A',
                                                            children: result.pipeline_remark || 'N/A'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1398,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1397,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-48 px-3 py-3 text-sm text-gray-900",
                                                        children: currentSession ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditableCell, {
                                                            value: result.user_remarks || '',
                                                            type: "text",
                                                            placeholder: "Add user remarks...",
                                                            multiline: true,
                                                            onSave: async (newValue)=>{
                                                                await handleUpdateColumn(currentSession.session_id, tableName, result.column_name, {
                                                                    user_remarks: newValue
                                                                });
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1404,
                                                            columnNumber: 29
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "break-words",
                                                            title: result.user_remarks || 'N/A',
                                                            children: result.user_remarks || 'N/A'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1419,
                                                            columnNumber: 29
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1402,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "w-32 px-3 py-3 text-sm text-gray-900",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-col space-y-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${result.is_manually_verified ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`,
                                                                    children: result.is_manually_verified ? 'Verified' : 'Not Verified'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                    lineNumber: 1426,
                                                                    columnNumber: 29
                                                                }, this),
                                                                result.verified_by && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-gray-500 truncate",
                                                                    title: `by ${result.verified_by}`,
                                                                    children: [
                                                                        "by ",
                                                                        result.verified_by
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                                    lineNumber: 1434,
                                                                    columnNumber: 31
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                            lineNumber: 1425,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1424,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, result.index, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 1313,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1307,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1281,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                            lineNumber: 1280,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                        lineNumber: 1269,
                        columnNumber: 9
                    }, this),
                    displayedTableNames.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white border-t border-gray-200 px-6 py-3 flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between text-sm text-gray-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "Showing ",
                                        displayedTableNames.length,
                                        " of ",
                                        results.length,
                                        " results"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                    lineNumber: 1453,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "PHI Detected: ",
                                                displayedTableNames.filter((r)=>normalizeIsPhi(r.is_phi) === "yes").length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                            lineNumber: 1457,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "Non-PHI: ",
                                                displayedTableNames.filter((r)=>normalizeIsPhi(r.is_phi) === "no").length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                            lineNumber: 1460,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                    lineNumber: 1456,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                            lineNumber: 1452,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                        lineNumber: 1451,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                lineNumber: 990,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Modal, {
                open: tableDataModal.open,
                onClose: closeTableDataModal,
                title: `Table Data: ${tableDataModal.tableName}`,
                children: tableDataModal.loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-64",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1478,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gray-600",
                                children: "Loading table data..."
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1479,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                        lineNumber: 1477,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                    lineNumber: 1476,
                    columnNumber: 11
                }, this) : tableDataModal.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-64",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-red-600 mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-12 h-12 mx-auto",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.232 16.5c-.77.833.192 2.5 1.732 2.5z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1487,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                    lineNumber: 1486,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1485,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-medium text-gray-900 mb-2",
                                children: "Error Loading Table Data"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1490,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: tableDataModal.error
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1491,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleViewTableData(tableDataModal.tableName),
                                className: "mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700",
                                children: "Retry"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1492,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                        lineNumber: 1484,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                    lineNumber: 1483,
                    columnNumber: 11
                }, this) : tableDataModal.data && tableDataModal.data.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-gray-600",
                            children: [
                                "Showing sample data from ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: tableDataModal.tableName
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                    lineNumber: 1503,
                                    columnNumber: 40
                                }, this),
                                " table (",
                                tableDataModal.data.length,
                                " rows of up to 50)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                            lineNumber: 1502,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "overflow-auto max-h-96",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                className: "min-w-full divide-y divide-gray-200",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                        className: "bg-gray-50 sticky top-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: tableDataModal.columns.map((column, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                    className: "px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",
                                                    children: column
                                                }, index, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                    lineNumber: 1510,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                            lineNumber: 1508,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1507,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        className: "bg-white divide-y divide-gray-200",
                                        children: tableDataModal.data.map((row, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-gray-50",
                                                children: tableDataModal.columns.map((column, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-2 text-sm text-gray-900 max-w-xs truncate",
                                                        title: String(row[column] || ''),
                                                        children: String(row[column] || '')
                                                    }, colIndex, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                        lineNumber: 1523,
                                                        columnNumber: 25
                                                    }, this))
                                            }, rowIndex, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                                lineNumber: 1521,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1519,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1506,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                            lineNumber: 1505,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                    lineNumber: 1501,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-64",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-400 mb-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-12 h-12 mx-auto",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m8 0V4.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                        lineNumber: 1542,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                    lineNumber: 1541,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1540,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-medium text-gray-900 mb-2",
                                children: "No Data Found"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1545,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "The table appears to be empty or no data was returned."
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                                lineNumber: 1546,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                        lineNumber: 1539,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                    lineNumber: 1538,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
                lineNumber: 1470,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx",
        lineNumber: 946,
        columnNumber: 5
    }, this);
};
_s1(PHIAnalyzerPage, "Z7PuoV5vDmXw1mCCS9izCkHn58o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePost"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePut"],
        __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDelete"]
    ];
});
_c2 = PHIAnalyzerPage;
const __TURBOPACK__default__export__ = PHIAnalyzerPage;
var _c, _c1, _c2;
__turbopack_refresh__.register(_c, "Modal");
__turbopack_refresh__.register(_c1, "EditableCell");
__turbopack_refresh__.register(_c2, "PHIAnalyzerPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/clients/[clientId]/dumps/[dumpId]/phi-analyzer/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_3dafe0._.js.map