module.exports = {

"[project]/app/components/common/ActionButton.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
;
;
const ActionButton = ({ onClick, disabled = false, variant = 'secondary', size = 'md', icon, children, className = '', title, fullWidth = false })=>{
    const baseClasses = 'flex items-center justify-center font-medium transition-all duration-200 group relative rounded-lg';
    const sizeClasses = {
        sm: 'px-3 py-2 text-xs',
        md: 'px-4 py-3 text-sm',
        lg: 'px-8 py-4 text-base'
    };
    const variantClasses = {
        primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105',
        grey: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700 shadow-lg hover:shadow-xl transform hover:scale-105',
        secondary: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transform hover:scale-105',
        success: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transform hover:scale-105',
        danger: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transform hover:scale-105',
        warning: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transform hover:scale-105',
        info: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transform hover:scale-105'
    };
    const disabledClasses = 'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
    const widthClasses = fullWidth ? 'flex-1 min-w-0' : '';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(baseClasses, sizeClasses[size], variantClasses[variant], disabledClasses, widthClasses, className),
        title: title,
        children: [
            icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])('p-1.5 rounded mr-2 transition-colors duration-200', variant === 'primary' ? 'bg-white/20' : 'bg-current/10'),
                children: icon
            }, void 0, false, {
                fileName: "[project]/app/components/common/ActionButton.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "font-medium truncate",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/components/common/ActionButton.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/common/ActionButton.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ActionButton;
}}),
"[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/apiService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/Config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
const ImportConfigModal = ({ isOpen, clientId, dumpId, onClose })=>{
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [uploadStatus, setUploadStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tablesNotFound, setTablesNotFound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [totalTablesNotFound, setTotalTablesNotFound] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [apiMessage, setApiMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleFileChange = async (event)=>{
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            setSelectedFile(file);
            // Immediately upload the file after selection
            try {
                const formData = new FormData();
                formData.append("file", file);
                // postRequest returns the response data
                const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["postRequest"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}upload_config_from_csv/${clientId}/${dumpId}/`, formData, {
                    "Content-Type": "multipart/form-data"
                });
                // The API returns: { success, tables_not_found, total_tables_not_found, message }
                if (response && typeof response === "object") {
                    const uploadResponse = response;
                    setUploadStatus(`File ${file.name} uploaded successfully.`);
                    setTablesNotFound(uploadResponse.tables_not_found || []);
                    setTotalTablesNotFound(uploadResponse.total_tables_not_found || 0);
                    setApiMessage(uploadResponse.message || null);
                } else {
                    setUploadStatus("File uploaded, but unexpected response.");
                    setTablesNotFound([]);
                    setTotalTablesNotFound(0);
                    setApiMessage(null);
                }
            } catch (error) {
                setUploadStatus("Failed to upload file.");
                setTablesNotFound([]);
                setTotalTablesNotFound(0);
                setApiMessage(null);
                console.error("Upload error:", error);
            }
        }
    };
    const handleDeleteFile = ()=>{
        setSelectedFile(null);
        setUploadStatus(null);
        setTablesNotFound([]);
        setTotalTablesNotFound(0);
        setApiMessage(null);
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative mx-40 flex w-full flex-col rounded-xl bg-white p-8 max-md:mx-20",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-8 top-8",
                    onClick: ()=>onClose(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiFillCloseCircle"], {}, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                        lineNumber: 91,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-1 cursor-pointer text-lg font-semibold",
                    children: "Import Config"
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 border-2 border-secondary"
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 grid grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-medium text-secondary",
                                    children: "CSV file must contain the following headers"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-sm",
                                    children: "Table_Name"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-sm",
                                    children: "Column_Name"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-sm",
                                    children: "Is_PHI"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-sm",
                                    children: "De_Identification_Rule"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 105,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-sm",
                                    children: "Mask_Value"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-sm",
                                    children: "Reference_Patient_ID"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-sm",
                                    children: "Reference_Encounter_ID"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 108,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold text-sm",
                                    children: "Priority"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-8 text-sm",
                                    children: [
                                        "Valid ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: "De_Identification_Rule"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                            lineNumber: 111,
                                            columnNumber: 21
                                        }, this),
                                        " ",
                                        "values"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col bg-riceFlower px-4 py-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            children: "Patient_ID, Encounter_ID, Data_offset, Patient_DOB, ZIP_Code, Mask, None,"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-4 text-xs",
                                            children: "*For the MASK rule define value need to mask in MASK_Value column"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                            lineNumber: 119,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 114,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold",
                                            children: "Priority"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this),
                                        " values"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col bg-riceFlower px-4 py-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs",
                                            children: "Integer value (default: 10000 if not provided)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                            lineNumber: 128,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "mt-2 text-xs",
                                            children: "Lower values = higher priority"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col",
                            children: [
                                selectedFile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: selectedFile.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                            lineNumber: 139,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "ml-4 text-red-500",
                                            onClick: handleDeleteFile,
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                            lineNumber: 140,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600 dark:hover:bg-gray-800",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col items-center justify-center pb-6 pt-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "mb-4 h-8 w-8 text-gray-500 dark:text-gray-400",
                                                        "aria-hidden": "true",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 20 16",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            stroke: "currentColor",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                                        lineNumber: 151,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "mb-2 text-sm text-gray-500 dark:text-gray-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold",
                                                                children: "Click to upload"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                                                lineNumber: 167,
                                                                columnNumber: 23
                                                            }, this),
                                                            " or drag and drop"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                                        lineNumber: 166,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                                lineNumber: 150,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                id: "dropzone-file",
                                                type: "file",
                                                className: "hidden",
                                                onChange: handleFileChange
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                        lineNumber: 149,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 148,
                                    columnNumber: 15
                                }, this),
                                uploadStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-4",
                                    children: uploadStatus
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 181,
                                    columnNumber: 30
                                }, this),
                                (totalTablesNotFound > 0 || tablesNotFound && tablesNotFound.length > 0) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 rounded bg-red-50 p-4 border border-red-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold text-red-700 text-sm mb-2",
                                            children: [
                                                totalTablesNotFound,
                                                " table",
                                                totalTablesNotFound !== 1 ? "s" : "",
                                                " not found in database:"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                            lineNumber: 186,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "list-disc list-inside text-red-700 text-xs max-h-40 overflow-y-auto",
                                            children: tablesNotFound.map((table, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: table
                                                }, table + idx, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                                    lineNumber: 191,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                            lineNumber: 189,
                                            columnNumber: 17
                                        }, this),
                                        apiMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-gray-700",
                                            children: apiMessage
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, this),
                                uploadStatus && totalTablesNotFound === 0 && apiMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 rounded bg-green-50 p-3 border border-green-200 text-green-800 text-xs",
                                    children: apiMessage
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
            lineNumber: 89,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = ImportConfigModal;
}}),
"[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>PrimaryKeyConfigModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/Config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function PrimaryKeyConfigModal({ isOpen, onClose, clientId, dumpId }) {
    const [configData, setConfigData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadFile, setUploadFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isUploading, setIsUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [uploadSuccess, setUploadSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const fetchPrimaryKeyConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        setIsLoading(true);
        try {
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}primary_key_config/${clientId}/${dumpId}/`, {
                credentials: "include"
            });
            const data = await response.json();
            setConfigData(data);
        } catch (error) {
            console.error("Error fetching primary key config:", error);
        } finally{
            setIsLoading(false);
        }
    }, [
        clientId,
        dumpId
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            fetchPrimaryKeyConfig();
        }
    }, [
        isOpen,
        fetchPrimaryKeyConfig
    ]);
    const handleFileUpload = async ()=>{
        if (!uploadFile) return;
        setIsUploading(true);
        try {
            const formData = new FormData();
            formData.append("file", uploadFile);
            formData.append("data", JSON.stringify({
                use_previously_uploaded_mapping: false
            }));
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}primary_key_config/${clientId}/${dumpId}/`, {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                setUploadSuccess(true);
                // Refresh the config data
                await fetchPrimaryKeyConfig();
                setUploadFile(null);
                // Reset success message after 3 seconds
                setTimeout(()=>setUploadSuccess(false), 3000);
            } else {
                throw new Error("Upload failed");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
        } finally{
            setIsUploading(false);
        }
    };
    const handleUsePreviousMapping = async ()=>{
        setIsUploading(true);
        try {
            const formData = new FormData();
            formData.append("data", JSON.stringify({
                use_previously_uploaded_mapping: true
            }));
            const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}primary_key_config/${clientId}/${dumpId}/`, {
                method: "POST",
                body: formData
            });
            if (response.ok) {
                setUploadSuccess(true);
                await fetchPrimaryKeyConfig();
                setTimeout(()=>setUploadSuccess(false), 3000);
            } else {
                throw new Error("Request failed");
            }
        } catch (error) {
            console.error("Error using previous mapping:", error);
        } finally{
            setIsUploading(false);
        }
    };
    const handleFileChange = (event)=>{
        const file = event.target.files?.[0];
        if (file && file.type === "text/csv") {
            setUploadFile(file);
        }
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-gray-200",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center space-x-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-2 rounded-lg bg-blue-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineInfoCircle"], {
                                        className: "w-6 h-6 text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-lg font-bold text-gray-900",
                                            children: "Primary Key Configuration"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-600",
                                            children: "Manage primary key mappings for tables"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineClose"], {
                                className: "w-5 h-5 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                lineNumber: 129,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 space-y-6 max-h-[calc(90vh-140px)] overflow-y-auto",
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center py-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                            lineNumber: 137,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                        lineNumber: 136,
                        columnNumber: 13
                    }, this) : configData ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: "Upload Configuration"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                        lineNumber: 143,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: ".csv",
                                                onChange: handleFileChange,
                                                className: "hidden",
                                                id: "csv-upload"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "csv-upload",
                                                className: "cursor-pointer flex flex-col items-center space-y-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded-full bg-blue-100",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineUpload"], {
                                                            className: "w-8 h-8 text-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                            lineNumber: 158,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm font-medium text-gray-900",
                                                                children: uploadFile ? uploadFile.name : "Click to upload CSV file"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-500",
                                                                children: "Only CSV files are supported"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                        lineNumber: 160,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                lineNumber: 153,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                        lineNumber: 145,
                                        columnNumber: 17
                                    }, this),
                                    uploadFile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 bg-blue-50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-blue-800",
                                                children: uploadFile.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                lineNumber: 171,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleFileUpload,
                                                disabled: isUploading,
                                                className: "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200",
                                                children: isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                            lineNumber: 179,
                                                            columnNumber: 27
                                                        }, this),
                                                        "Uploading..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineUpload"], {
                                                            className: "w-4 h-4 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                            lineNumber: 184,
                                                            columnNumber: 27
                                                        }, this),
                                                        "Upload"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                lineNumber: 172,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                        lineNumber: 170,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between p-3 bg-gray-50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-gray-700",
                                                children: "Or reuse previously uploaded mapping"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleUsePreviousMapping,
                                                disabled: isUploading,
                                                className: "flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200",
                                                children: isUploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                            lineNumber: 202,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Please wait..."
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: "Use Previous Mapping"
                                                }, void 0, false)
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                lineNumber: 195,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                        lineNumber: 193,
                                        columnNumber: 17
                                    }, this),
                                    uploadSuccess && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center p-3 bg-green-50 rounded-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineCheckCircle"], {
                                                className: "w-5 h-5 text-green-600 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                lineNumber: 213,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm text-green-800",
                                                children: "Configuration uploaded successfully!"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                lineNumber: 214,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                        lineNumber: 212,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-gray-900",
                                        children: "Configuration Status"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gray-50 rounded-lg p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `w-3 h-3 rounded-full ${configData.is_primary_key_uploaded ? 'bg-green-500' : 'bg-red-500'}`
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium text-gray-900",
                                                        children: configData.is_primary_key_uploaded ? 'Primary Key Configuration Uploaded' : 'No Primary Key Configuration Found'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                        lineNumber: 226,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                lineNumber: 224,
                                                columnNumber: 19
                                            }, this),
                                            configData.success && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: configData.is_primary_key_uploaded ? configData.tables_with_no_primary_key.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center p-3 bg-green-100 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineCheckCircle"], {
                                                            className: "w-5 h-5 text-green-600 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                            lineNumber: 236,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-green-800 font-medium",
                                                            children: "All tables have primary key mappings configured!"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                            lineNumber: 237,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                    lineNumber: 235,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-600 mb-2",
                                                            children: "The following tables need primary key configuration:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                            lineNumber: 243,
                                                            columnNumber: 29
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "space-y-2",
                                                            children: configData.tables_with_no_primary_key.map(([tableName, tableId], index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center justify-between p-2 bg-white rounded border",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-sm font-medium text-gray-900",
                                                                            children: tableName
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                                            lineNumber: 249,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: [
                                                                                "ID: ",
                                                                                tableId
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                                            lineNumber: 250,
                                                                            columnNumber: 35
                                                                        }, this)
                                                                    ]
                                                                }, index, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                                    lineNumber: 248,
                                                                    columnNumber: 33
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                            lineNumber: 246,
                                                            columnNumber: 29
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center p-3 bg-yellow-100 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineInfoCircle"], {
                                                            className: "w-5 h-5 text-yellow-600 mr-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                            lineNumber: 258,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-yellow-800 font-medium",
                                                            children: "Please upload a primary key configuration CSV file to get started."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                            lineNumber: 259,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                                lineNumber: 232,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                                lineNumber: 220,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500",
                            children: "Failed to load configuration data"
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                            lineNumber: 271,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                        lineNumber: 270,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                    lineNumber: 134,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-end space-x-3 p-6 border-t border-gray-200 bg-gray-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200",
                        children: "Close"
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
                    lineNumber: 277,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
            lineNumber: 113,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx",
        lineNumber: 112,
        columnNumber: 5
    }, this);
}
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>BulkTableOperationsModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/useApiHooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/Config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function BulkTableOperationsModal({ isOpen, onClose, clientId, dumpId, tablesData }) {
    const [tableNamesInput, setTableNamesInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isProcessing, setIsProcessing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedOperation, setSelectedOperation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("deid");
    // API hooks for different operations
    const { mutate: doDeID, isPending: deidPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePost"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}deid/start/${clientId}/${dumpId}/`);
    const { mutate: doQC, isPending: qcPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePost"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}qc/start/${clientId}/${dumpId}/`);
    const { mutate: doGCP, isPending: gcpPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePost"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}gcp/move/${clientId}/${dumpId}/`);
    const { mutate: doEmbd, isPending: embdPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePost"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}embd/start/${clientId}/${dumpId}/`);
    const { mutate: doHoldDeID, isPending: holdDeidPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePost"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}deid/interrupt/${clientId}/${dumpId}/`);
    const { mutate: doHoldQC, isPending: holdQcPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePost"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}qc/interrupt/${clientId}/${dumpId}/`);
    // Reset state when modal opens/closes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setTableNamesInput("");
            setResults([]);
            setSelectedOperation("deid");
        }
    }, [
        isOpen
    ]);
    // Parse comma-separated table names and convert to table IDs
    const parseTableNames = (input)=>{
        const names = input.split(/[,\n]/) // Split by comma or newline
        .map((name)=>name.trim()).filter((name)=>name.length > 0);
        const tableIds = [];
        const foundNames = [];
        const notFoundNames = [];
        names.forEach((name)=>{
            const table = tablesData.find((t)=>t.table_name.toLowerCase() === name.toLowerCase());
            if (table) {
                tableIds.push(table.table_id);
                foundNames.push(table.table_name);
            } else {
                notFoundNames.push(name);
            }
        });
        return {
            tableIds,
            foundNames,
            notFoundNames
        };
    };
    // Execute the selected operation
    const executeOperation = async ()=>{
        if (!tableNamesInput.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please enter table names");
            return;
        }
        const { tableIds, foundNames, notFoundNames } = parseTableNames(tableNamesInput);
        if (foundNames.length === 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("No valid table names found");
            return;
        }
        if (notFoundNames.length > 0) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning(`Tables not found: ${notFoundNames.join(", ")}`);
        }
        setIsProcessing(true);
        setResults([]);
        try {
            const operationName = selectedOperation.toUpperCase();
            const payload = {
                tables_name: foundNames
            };
            // Create a promise that resolves with the operation result
            const operationPromise = new Promise((resolve)=>{
                const operationHandlers = {
                    deid: ()=>doDeID(payload, {
                            onSuccess: ()=>{
                                resolve({
                                    operation: "DeID",
                                    success: true,
                                    message: `Successfully started DeID for ${foundNames.length} table(s)`,
                                    tableIds,
                                    tableNames: foundNames
                                });
                            },
                            onError: (error)=>{
                                resolve({
                                    operation: "DeID",
                                    success: false,
                                    message: `Failed to start DeID: ${error?.message || "Unknown error"}`,
                                    tableIds,
                                    tableNames: foundNames
                                });
                            }
                        }),
                    qc: ()=>doQC(payload, {
                            onSuccess: ()=>{
                                resolve({
                                    operation: "QC",
                                    success: true,
                                    message: `Successfully started QC for ${foundNames.length} table(s)`,
                                    tableIds,
                                    tableNames: foundNames
                                });
                            },
                            onError: (error)=>{
                                resolve({
                                    operation: "QC",
                                    success: false,
                                    message: `Failed to start QC: ${error?.message || "Unknown error"}`,
                                    tableIds,
                                    tableNames: foundNames
                                });
                            }
                        }),
                    gcp: ()=>doGCP(payload, {
                            onSuccess: ()=>{
                                resolve({
                                    operation: "GCP Move",
                                    success: true,
                                    message: `Successfully started GCP move for ${foundNames.length} table(s)`,
                                    tableIds,
                                    tableNames: foundNames
                                });
                            },
                            onError: (error)=>{
                                resolve({
                                    operation: "GCP Move",
                                    success: false,
                                    message: `Failed to start GCP move: ${error?.message || "Unknown error"}`,
                                    tableIds,
                                    tableNames: foundNames
                                });
                            }
                        }),
                    embd: ()=>doEmbd(payload, {
                            onSuccess: ()=>{
                                resolve({
                                    operation: "Embedding",
                                    success: true,
                                    message: `Successfully started embedding for ${foundNames.length} table(s)`,
                                    tableIds,
                                    tableNames: foundNames
                                });
                            },
                            onError: (error)=>{
                                resolve({
                                    operation: "Embedding",
                                    success: false,
                                    message: `Failed to start embedding: ${error?.message || "Unknown error"}`,
                                    tableIds,
                                    tableNames: foundNames
                                });
                            }
                        }),
                    hold_deid: ()=>doHoldDeID(payload, {
                            onSuccess: ()=>{
                                resolve({
                                    operation: "Hold DeID",
                                    success: true,
                                    message: `Successfully held DeID for ${foundNames.length} table(s)`,
                                    tableIds,
                                    tableNames: foundNames
                                });
                            },
                            onError: (error)=>{
                                resolve({
                                    operation: "Hold DeID",
                                    success: false,
                                    message: `Failed to hold DeID: ${error?.message || "Unknown error"}`,
                                    tableIds,
                                    tableNames: foundNames
                                });
                            }
                        }),
                    hold_qc: ()=>doHoldQC(payload, {
                            onSuccess: ()=>{
                                resolve({
                                    operation: "Hold QC",
                                    success: true,
                                    message: `Successfully held QC for ${foundNames.length} table(s)`,
                                    tableIds,
                                    tableNames: foundNames
                                });
                            },
                            onError: (error)=>{
                                resolve({
                                    operation: "Hold QC",
                                    success: false,
                                    message: `Failed to hold QC: ${error?.message || "Unknown error"}`,
                                    tableIds,
                                    tableNames: foundNames
                                });
                            }
                        })
                };
                operationHandlers[selectedOperation]();
            });
            const result = await operationPromise;
            setResults([
                result
            ]);
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(result.message);
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.message);
            }
        } catch (error) {
            const errorResult = {
                operation: selectedOperation.toUpperCase(),
                success: false,
                message: `Unexpected error: ${error}`,
                tableIds: [],
                tableNames: []
            };
            setResults([
                errorResult
            ]);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("An unexpected error occurred");
        } finally{
            setIsProcessing(false);
        }
    };
    const isAnyOperationPending = deidPending || qcPending || gcpPending || embdPending || holdDeidPending || holdQcPending;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onClose: onClose,
        className: "fixed inset-0 z-50 flex items-center justify-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/30"
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                lineNumber: 262,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogPanel"], {
                className: "bg-white p-6 rounded-lg shadow-xl max-w-4xl w-full mx-4 z-10 max-h-[90vh] overflow-y-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                className: "text-xl font-semibold text-gray-900",
                                children: "Bulk Table Operations"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "text-gray-400 hover:text-gray-600 transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {
                                    className: "w-5 h-5"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                    lineNumber: 272,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                        lineNumber: 264,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Select Operation"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    {
                                                        value: "deid",
                                                        label: "Start DeID",
                                                        color: "red"
                                                    },
                                                    {
                                                        value: "qc",
                                                        label: "Start QC",
                                                        color: "blue"
                                                    },
                                                    {
                                                        value: "gcp",
                                                        label: "GCP Move",
                                                        color: "indigo"
                                                    },
                                                    {
                                                        value: "embd",
                                                        label: "Start Embedding",
                                                        color: "purple"
                                                    }
                                                ].map((op)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedOperation(op.value),
                                                        className: `px-4 py-2 rounded-md font-medium transition-colors ${selectedOperation === op.value ? `bg-${op.color}-600 text-white` : `bg-${op.color}-100 text-${op.color}-700 hover:bg-${op.color}-200`}`,
                                                        children: op.label
                                                    }, op.value, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4",
                                                children: [
                                                    {
                                                        value: "hold_deid",
                                                        label: "Hold DeID",
                                                        color: "red"
                                                    },
                                                    {
                                                        value: "hold_qc",
                                                        label: "Hold QC",
                                                        color: "blue"
                                                    }
                                                ].map((op)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setSelectedOperation(op.value),
                                                        className: `px-4 py-2 rounded-md font-medium transition-colors ${selectedOperation === op.value ? `bg-${op.color}-600 text-white` : `bg-${op.color}-100 text-${op.color}-700 hover:bg-${op.color}-200`}`,
                                                        children: op.label
                                                    }, op.value, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                        lineNumber: 311,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                lineNumber: 306,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                        lineNumber: 282,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                lineNumber: 278,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 mb-2",
                                        children: "Table Names (comma-separated)"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                        lineNumber: 329,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        value: tableNamesInput,
                                        onChange: (e)=>setTableNamesInput(e.target.value),
                                        placeholder: "Enter table names separated by commas or newlines, e.g.: table1, table2, table3 or table1 table2 table3",
                                        className: "w-full h-32 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none",
                                        disabled: isProcessing
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                        lineNumber: 332,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1 text-xs text-gray-500",
                                        children: "Enter table names exactly as they appear in the system. You can separate them with commas or put each on a new line."
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                lineNumber: 328,
                                columnNumber: 11
                            }, this),
                            tableNamesInput.trim() && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gray-50 rounded-lg p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-sm font-medium text-gray-700 mb-2",
                                        children: "Preview:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    (()=>{
                                        const { tableIds, foundNames, notFoundNames } = parseTableNames(tableNamesInput);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-2",
                                            children: [
                                                foundNames.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheck"], {
                                                            className: "text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-green-700",
                                                            children: [
                                                                "Found ",
                                                                foundNames.length,
                                                                " table(s): ",
                                                                foundNames.join(", ")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                            lineNumber: 360,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 23
                                                }, this),
                                                notFoundNames.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaExclamationTriangle"], {
                                                            className: "text-yellow-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                            lineNumber: 367,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-yellow-700",
                                                            children: [
                                                                "Not found: ",
                                                                notFoundNames.join(", ")
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                            lineNumber: 368,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                    lineNumber: 366,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                            lineNumber: 356,
                                            columnNumber: 19
                                        }, this);
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: executeOperation,
                                    disabled: isProcessing || isAnyOperationPending || !tableNamesInput.trim(),
                                    className: `px-6 py-2 rounded-md font-medium transition-colors flex items-center gap-2 ${isProcessing || isAnyOperationPending || !tableNamesInput.trim() ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"}`,
                                    children: isProcessing || isAnyOperationPending ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                lineNumber: 392,
                                                columnNumber: 19
                                            }, this),
                                            "Processing..."
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaPlay"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                lineNumber: 397,
                                                columnNumber: 19
                                            }, this),
                                            "Execute ",
                                            selectedOperation === "deid" ? "DeID" : selectedOperation === "hold_deid" ? "Hold DeID" : selectedOperation === "hold_qc" ? "Hold QC" : selectedOperation.toUpperCase()
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                    lineNumber: 381,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                lineNumber: 380,
                                columnNumber: 11
                            }, this),
                            results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border-t pt-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-medium text-gray-900 mb-4",
                                        children: "Results"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                        lineNumber: 407,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: results.map((result, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `p-4 rounded-lg border-l-4 ${result.success ? "bg-green-50 border-green-400" : "bg-red-50 border-red-400"}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start gap-3",
                                                    children: [
                                                        result.success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCheck"], {
                                                            className: "text-green-500 mt-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                            lineNumber: 420,
                                                            columnNumber: 25
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaExclamationTriangle"], {
                                                            className: "text-red-500 mt-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                            lineNumber: 422,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                                    className: `font-medium ${result.success ? "text-green-800" : "text-red-800"}`,
                                                                    children: [
                                                                        result.operation,
                                                                        " Operation"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                                    lineNumber: 425,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: `text-sm mt-1 ${result.success ? "text-green-700" : "text-red-700"}`,
                                                                    children: result.message
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                                    lineNumber: 430,
                                                                    columnNumber: 25
                                                                }, this),
                                                                result.tableNames.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs font-medium text-gray-600 mb-1",
                                                                            children: "Tables processed:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                                            lineNumber: 437,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap gap-1",
                                                                            children: result.tableNames.map((name, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "px-2 py-1 bg-white rounded text-xs border",
                                                                                    children: name
                                                                                }, idx, false, {
                                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                                                    lineNumber: 442,
                                                                                    columnNumber: 33
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                                            lineNumber: 440,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                                    lineNumber: 436,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                            lineNumber: 424,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                    lineNumber: 418,
                                                    columnNumber: 21
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                                lineNumber: 410,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                                lineNumber: 406,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx",
        lineNumber: 261,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File: app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx
__turbopack_esm__({
    "Status": (()=>Status),
    "default": (()=>TablesProgressCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/useApiHooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/Config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$BulkTableOperationsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/hi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-table/build/lib/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/table-core/build/lib/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/bi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@headlessui/react/dist/components/dialog/dialog.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
class Status {
    static NOT_STARTED = 0;
    static IN_PROGRESS = 1;
    static COMPLETED = 2;
    static FAILED = -1;
}
// ─────────────────────────────────────────────────────────────────────────────
// Row shape - Using the interface from PHITables.tsx
// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
// Labels & colors for statuses
// ─────────────────────────────────────────────────────────────────────────────
const STATUS_LABEL = {
    [Status.NOT_STARTED]: "Not Started",
    [Status.IN_PROGRESS]: "In Progress",
    [Status.COMPLETED]: "Completed",
    [Status.FAILED]: "Failed"
};
const STATUS_COLOR = {
    [Status.NOT_STARTED]: "gray",
    [Status.IN_PROGRESS]: "yellow",
    [Status.COMPLETED]: "green",
    [Status.FAILED]: "red"
};
;
;
function TablesProgressCard({ tablesData }) {
    const { clientId, dumpId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [rowSelection, setRowSelection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [showFilters, setShowFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorModal, setErrorModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isBulkModalOpen, setIsBulkModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // ───────────────── Filter State ─────────────────────
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        statusFilters: [],
        searchText: "",
        showOnlyFailed: false,
        showOnlyCompleted: false
    });
    // ───────────────── Bulk Actions ─────────────────────
    const { mutate: doDeID, isPending: deidPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePost"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}deid/start/${clientId}/${dumpId}/`);
    const { mutate: doQC, isPending: qcPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePost"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}qc/start/${clientId}/${dumpId}/`);
    const { mutate: doGCP, isPending: gcpPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePost"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}gcp/move/${clientId}/${dumpId}/`);
    const { mutate: doEmbd, isPending: embdPending } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePost"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}embd/start/${clientId}/${dumpId}/`);
    // ───────────────── Filter Functions ─────────────────
    const addStatusFilter = (step, status)=>{
        setFilters((prev)=>({
                ...prev,
                statusFilters: [
                    ...prev.statusFilters,
                    {
                        step,
                        status
                    }
                ]
            }));
    };
    const removeStatusFilter = (index)=>{
        setFilters((prev)=>({
                ...prev,
                statusFilters: prev.statusFilters.filter((_, i)=>i !== index)
            }));
    };
    const clearAllFilters = ()=>{
        setFilters({
            statusFilters: [],
            searchText: "",
            showOnlyFailed: false,
            showOnlyCompleted: false
        });
        setSearch("");
    };
    // ───────────────── Filtered Data ───────────────────
    const filteredData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let filtered = [
            ...tablesData
        ];
        // Apply status filters
        filters.statusFilters.forEach((filter)=>{
            filtered = filtered.filter((table)=>table[filter.step].status === filter.status);
        });
        // Apply search filter
        if (search.trim()) {
            filtered = filtered.filter((table)=>table.table_name.toLowerCase().includes(search.toLowerCase()));
        }
        // Apply special filters
        if (filters.showOnlyFailed) {
            filtered = filtered.filter((table)=>[
                    table.deid.status,
                    table.qc.status,
                    table.gcp.status,
                    table.embd.status
                ].some((status)=>status === Status.FAILED));
        }
        if (filters.showOnlyCompleted) {
            filtered = filtered.filter((table)=>[
                    table.deid.status,
                    table.qc.status,
                    table.gcp.status,
                    table.embd.status
                ].every((status)=>status === Status.COMPLETED));
        }
        return filtered;
    }, [
        filters,
        search,
        tablesData
    ]);
    // ───────────────── Table Columns ────────────────────
    const columns = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>[
            {
                id: "select",
                header: ({ table })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: table.getIsAllPageRowsSelected(),
                        onChange: table.getToggleAllPageRowsSelectedHandler()
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                cell: ({ row })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        checked: row.getIsSelected(),
                        onChange: row.getToggleSelectedHandler()
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this)
            },
            {
                accessorKey: "table_name",
                header: "Table"
            },
            // For each step (deid, qc, gcp, embd) render status + icons
            ...[
                "deid",
                "qc",
                "gcp",
                "embd"
            ].map((step)=>({
                    accessorFn: (row)=>row[step].status,
                    id: step,
                    header: step.toUpperCase(),
                    cell: ({ getValue, row })=>{
                        const code = getValue();
                        const color = STATUS_COLOR[code] || "gray";
                        const label = STATUS_LABEL[code] || "Unknown";
                        const id = row.original.table_id;
                        // Restart QC icon
                        const onRestartQC = ()=>doQC({
                                tables_name: [
                                    row.original.table_name
                                ]
                            });
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                step === "qc" && code === Status.FAILED && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onRestartQC,
                                    title: "Restart QC",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRedo"], {
                                        className: "text-red-600 hover:text-red-800"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 204,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                    lineNumber: 203,
                                    columnNumber: 17
                                }, this),
                                code === Status.FAILED && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HiOutlineExclamationCircle"], {
                                    className: "text-red-600 cursor-pointer hover:text-red-800",
                                    onClick: ()=>{
                                        const remarks = row.original[step].remarks;
                                        setErrorModal({
                                            step: step === "deid" ? "DeID" : step === "embd" ? "Embedding" : step.toUpperCase(),
                                            table: row.original.table_name,
                                            message: remarks ? JSON.stringify(remarks, null, 2) : "No additional details available",
                                            status: code
                                        });
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                    lineNumber: 210,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("px-2 py-1 rounded-full text-xs font-semibold", `bg-${color}-100`, `text-${color}-700`),
                                    children: label
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                    lineNumber: 230,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                            lineNumber: 200,
                            columnNumber: 13
                        }, this);
                    }
                }))
        ], [
        doQC
    ]);
    // ───────────────── React-Table Setup ─────────────────
    const table = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactTable"])({
        data: filteredData,
        columns,
        state: {
            globalFilter: search,
            rowSelection,
            pagination: {
                pageIndex: 0,
                pageSize: 10
            }
        },
        onGlobalFilterChange: setSearch,
        onRowSelectionChange: setRowSelection,
        getCoreRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCoreRowModel"])(),
        getFilteredRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getFilteredRowModel"])(),
        getPaginationRowModel: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$table$2d$core$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPaginationRowModel"])()
    });
    const selectedRows = table.getSelectedRowModel().rows;
    const selectedCount = selectedRows.length;
    const hasDeidFailed = tablesData.some((t)=>t.deid.status === Status.FAILED);
    // ──────────────── Bulk-action guards ───────────────
    const canQC = selectedCount > 0 && !qcPending && selectedRows.every((r)=>r.original.deid.status === Status.COMPLETED);
    const canGCP = selectedCount > 0 && !gcpPending && selectedRows.every((r)=>r.original.qc.status === Status.COMPLETED);
    const canEmbd = selectedCount > 0 && !embdPending && selectedRows.every((r)=>r.original.qc.status === Status.COMPLETED);
    // ───────────────── Filter Presets ───────────────────
    const filterPresets = [
        {
            label: "QC Failed",
            step: "qc",
            status: Status.FAILED
        },
        {
            label: "QC Passed",
            step: "qc",
            status: Status.COMPLETED
        },
        {
            label: "DeID Failed",
            step: "deid",
            status: Status.FAILED
        },
        {
            label: "GCP Pending",
            step: "gcp",
            status: Status.NOT_STARTED
        },
        {
            label: "Embedding Failed",
            step: "embd",
            status: Status.FAILED
        }
    ];
    // ─────────────────────────────────────────────────────
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white rounded-lg shadow overflow-hidden",
        children: [
            hasDeidFailed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 border-l-4 border-red-500 text-red-800 px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiErrorCircle"], {
                            className: "text-red-500 mr-2 text-xl"
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                            lineNumber: 299,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold",
                                    children: "De-Identification Errors Detected"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                    lineNumber: 301,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: "Some tables failed de-identification. Fix them before proceeding with QC."
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                    lineNumber: 302,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                            lineNumber: 300,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                    lineNumber: 298,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                lineNumber: 297,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 px-6 py-4 border-b",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: [
                                            selectedCount,
                                            " selected"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 313,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setRowSelection({});
                                            setErrorModal(null);
                                        },
                                        disabled: selectedCount === 0,
                                        className: "text-sm text-blue-600 hover:underline disabled:text-gray-400",
                                        children: "Clear"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative w-full sm:w-64",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSearch"], {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                lineNumber: 325,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Search tables…",
                                                className: "w-full pl-10 pr-4 py-2 border rounded-lg focus:ring focus:ring-blue-300",
                                                value: search,
                                                onChange: (e)=>setSearch(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                lineNumber: 326,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setShowFilters(!showFilters),
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors", showFilters ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700 hover:bg-gray-200"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFilter"], {
                                                className: "text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                lineNumber: 346,
                                                columnNumber: 15
                                            }, this),
                                            "Filters",
                                            filters.statusFilters.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-blue-600 text-white text-xs rounded-full px-2 py-0.5",
                                                children: filters.statusFilters.length
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 337,
                                        columnNumber: 13
                                    }, this),
                                    (filters.statusFilters.length > 0 || filters.showOnlyFailed || filters.showOnlyCompleted) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: clearAllFilters,
                                        className: "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium bg-red-100 text-red-700 hover:bg-red-200 transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {
                                                className: "text-sm"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this),
                                            "Clear All"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                lineNumber: 336,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                        lineNumber: 311,
                        columnNumber: 9
                    }, this),
                    showFilters && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 rounded-lg p-4 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-gray-700",
                                        children: "Filter Options"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 371,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: filters.showOnlyFailed,
                                                        onChange: (e)=>setFilters((prev)=>({
                                                                    ...prev,
                                                                    showOnlyFailed: e.target.checked
                                                                })),
                                                        className: "rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                        lineNumber: 374,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Show only failed tables"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                className: "flex items-center gap-2 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        checked: filters.showOnlyCompleted,
                                                        onChange: (e)=>setFilters((prev)=>({
                                                                    ...prev,
                                                                    showOnlyCompleted: e.target.checked
                                                                })),
                                                        className: "rounded"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Show only completed tables"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                lineNumber: 382,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                lineNumber: 370,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-600",
                                        children: "Quick Filters:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 396,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: filterPresets.map((preset, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>addStatusFilter(preset.step, preset.status),
                                                className: "px-3 py-1.5 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-50 transition-colors",
                                                children: preset.label
                                            }, index, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                lineNumber: 399,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                lineNumber: 395,
                                columnNumber: 13
                            }, this),
                            filters.statusFilters.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-medium text-gray-600",
                                        children: "Active Filters:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 413,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: filters.statusFilters.map((filter, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-md text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            filter.step.toUpperCase(),
                                                            ": ",
                                                            STATUS_LABEL[filter.status]
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>removeStatusFilter(index),
                                                        className: "text-blue-600 hover:text-blue-800",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {
                                                            className: "text-xs"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                        lineNumber: 421,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                lineNumber: 416,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 414,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                lineNumber: 412,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                        lineNumber: 369,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsBulkModalOpen(true),
                                className: "px-4 py-2 rounded-md text-white font-medium bg-green-600 hover:bg-green-700 shadow-sm hover:shadow-md transition-all flex items-center gap-2",
                                title: "Paste comma-separated table names to perform bulk operations",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                            lineNumber: 444,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 443,
                                        columnNumber: 13
                                    }, this),
                                    "Bulk Operations"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                lineNumber: 438,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>doDeID({
                                        tables_name: selectedRows.map((r)=>r.original.table_name)
                                    }),
                                disabled: selectedCount === 0 || deidPending,
                                title: !selectedCount ? "Select at least one table" : "Start DeID for selected tables",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("px-4 py-2 rounded-md text-white font-medium", selectedCount > 0 && !deidPending ? "bg-red-600 hover:bg-red-700 shadow-sm hover:shadow-md transition-all" : "bg-gray-300 cursor-not-allowed"),
                                children: deidPending ? "Starting DeID…" : "Start DeID"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                lineNumber: 449,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>doQC({
                                        tables_name: selectedRows.map((r)=>r.original.table_name)
                                    }),
                                disabled: !canQC || hasDeidFailed,
                                title: !selectedCount ? "Select at least one table" : hasDeidFailed ? "Resolve de-identification errors first" : "All selected tables must be de-identified to start QC",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("px-4 py-2 rounded-md text-white font-medium", canQC ? "bg-blue-600 hover:bg-blue-700 shadow-sm hover:shadow-md transition-all" : "bg-gray-300 cursor-not-allowed"),
                                children: qcPending ? "Starting QC…" : "Start QC"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>doGCP({
                                        tables_name: selectedRows.map((r)=>r.original.table_name)
                                    }),
                                disabled: !canGCP,
                                title: !selectedCount ? "Select at least one table" : "Only tables with passed QC can be moved",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("px-4 py-2 rounded-md text-white font-medium", canGCP ? "bg-indigo-600 hover:bg-indigo-700 shadow-sm hover:shadow-md transition-all" : "bg-gray-300 cursor-not-allowed"),
                                children: gcpPending ? "Moving to GCP…" : "GCP Move"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                lineNumber: 491,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>doEmbd({
                                        tables_name: selectedRows.map((r)=>r.original.table_name)
                                    }),
                                disabled: !canEmbd,
                                title: !selectedCount ? "Select at least one table" : "Only tables with passed QC can start embedding",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("px-4 py-2 rounded-md text-white font-medium", canEmbd ? "bg-purple-600 hover:bg-purple-700 shadow-sm hover:shadow-md transition-all" : "bg-gray-300 cursor-not-allowed"),
                                children: embdPending ? "Starting Embedding…" : "Start Embedding"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                lineNumber: 511,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                        lineNumber: 436,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                lineNumber: 309,
                columnNumber: 7
            }, this),
            !canQC && selectedCount > 0 && !hasDeidFailed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "px-6 py-2 text-sm text-gray-500 bg-blue-50 border-l-4 border-blue-400",
                children: 'QC can only run on tables whose de-identification status is "Completed."'
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                lineNumber: 535,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-6 py-3 bg-gray-50 border-b text-sm text-gray-600",
                children: [
                    "Showing ",
                    filteredData.length,
                    " of ",
                    tablesData.length,
                    " tables",
                    filters.statusFilters.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-2 text-blue-600",
                        children: [
                            "(filtered by ",
                            filters.statusFilters.length,
                            " criteria)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                        lineNumber: 544,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                lineNumber: 541,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full text-left",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50",
                            children: table.getHeaderGroups().map((hg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: hg.headers.map((header)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "p-3 font-medium text-gray-700",
                                            children: header.isPlaceholder ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(header.column.columnDef.header, header.getContext())
                                        }, header.id, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                            lineNumber: 557,
                                            columnNumber: 19
                                        }, this))
                                }, hg.id, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                    lineNumber: 555,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                            lineNumber: 553,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(row.index % 2 === 0 ? "bg-white" : "bg-gray-50", "hover:bg-blue-50 transition-colors"),
                                    children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-3 align-top",
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$table$2f$build$2f$lib$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["flexRender"])(cell.column.columnDef.cell, cell.getContext())
                                        }, cell.id, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                            lineNumber: 579,
                                            columnNumber: 19
                                        }, this))
                                }, row.id, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                    lineNumber: 571,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                            lineNumber: 569,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                    lineNumber: 552,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                lineNumber: 551,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center px-6 py-4 bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>table.previousPage(),
                        disabled: !table.getCanPreviousPage(),
                        className: "px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition-colors",
                        children: "Prev"
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                        lineNumber: 594,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-gray-600",
                        children: [
                            "Page ",
                            table.getState().pagination.pageIndex + 1,
                            " of",
                            " ",
                            table.getPageCount()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                        lineNumber: 601,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>table.nextPage(),
                        disabled: !table.getCanNextPage(),
                        className: "px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100 transition-colors",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                        lineNumber: 605,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                lineNumber: 593,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                open: !!errorModal,
                onClose: ()=>setErrorModal(null),
                className: "fixed inset-0 z-50 flex items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fixed inset-0 bg-black/30"
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                        lineNumber: 620,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogPanel"], {
                        className: "bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full mx-4 z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-2 bg-red-100 rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiErrorCircle"], {
                                            className: "text-red-600 text-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                            lineNumber: 624,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 623,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$headlessui$2f$react$2f$dist$2f$components$2f$dialog$2f$dialog$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                                className: "text-xl font-semibold text-gray-900",
                                                children: [
                                                    errorModal?.step,
                                                    " Process Failed"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                lineNumber: 627,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: [
                                                    "Table: ",
                                                    errorModal?.table
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                                lineNumber: 630,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 626,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                lineNumber: 622,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-red-50 border border-red-200 rounded-lg p-4 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-medium text-red-800 mb-2",
                                        children: "Error Details:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 635,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                        className: "text-sm text-red-700 whitespace-pre-wrap overflow-auto max-h-64",
                                        children: errorModal?.message
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 636,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                lineNumber: 634,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-end gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setErrorModal(null),
                                        className: "px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors",
                                        children: "Close"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 642,
                                        columnNumber: 13
                                    }, this),
                                    errorModal?.step === "QC" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            // Restart QC for this table
                                            const tableName = errorModal.table;
                                            if (tableName) {
                                                doQC({
                                                    tables_name: [
                                                        tableName
                                                    ]
                                                });
                                                setErrorModal(null);
                                            }
                                        },
                                        className: "px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors",
                                        children: "Restart QC"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                        lineNumber: 649,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                                lineNumber: 641,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                        lineNumber: 621,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                lineNumber: 615,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$BulkTableOperationsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isBulkModalOpen,
                onClose: ()=>setIsBulkModalOpen(false),
                clientId: clientId,
                dumpId: dumpId,
                tablesData: tablesData
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
                lineNumber: 668,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx",
        lineNumber: 294,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/components/common/Button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Button)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Button({ children, className, variant = "primary", loading = false, ...rest }) {
    const getVariantClasses = ()=>{
        switch(variant){
            case "primary":
                return loading ? "cursor-not-allowed bg-gray-400 text-white" : "border-primary bg-primary text-white hover:bg-transparent hover:text-primary active:shadow-sm";
            case "secondary":
                return loading ? "cursor-not-allowed bg-gray-400 text-white" : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-400 active:shadow-sm";
            case "danger":
                return loading ? "cursor-not-allowed bg-gray-400 text-white" : "border-red-600 bg-red-600 text-white hover:bg-transparent hover:text-red-600 active:shadow-sm";
            default:
                return loading ? "cursor-not-allowed bg-gray-400 text-white" : "border-primary bg-primary text-white hover:bg-transparent hover:text-primary active:shadow-sm";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: `border px-8 py-2 transition-all duration-200 disabled:pointer-events-none disabled:border-gray-300 disabled:bg-gray-300 rounded-full ${getVariantClasses()} ${className}`,
        disabled: loading || rest.disabled,
        ...rest,
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loader"
        }, void 0, false, {
            fileName: "[project]/app/components/common/Button.tsx",
            lineNumber: 44,
            columnNumber: 18
        }, this) : children
    }, void 0, false, {
        fileName: "[project]/app/components/common/Button.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/components/common/Select.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/bi/index.mjs [app-ssr] (ecmascript)");
;
;
const Select = ({ options, placeholder = "Select an option", registerField, error = false, className = "", selectClassName = "", ...props })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: `border-grayText h-10 w-full appearance-none rounded-[4px] border px-4 pr-8 text-sm text-secText ${error ? "border-red-500" : "border-grayText"} ${selectClassName}`,
                ...registerField,
                ...props,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "",
                        disabled: true,
                        children: placeholder
                    }, void 0, false, {
                        fileName: "[project]/app/components/common/Select.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    options.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: option.value,
                            children: option.label
                        }, option.value, false, {
                            fileName: "[project]/app/components/common/Select.tsx",
                            lineNumber: 36,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/common/Select.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BiChevronDown"], {
                className: "text-grayText pointer-events-none absolute right-3 top-1/2 -translate-y-1/2"
            }, void 0, false, {
                fileName: "[project]/app/components/common/Select.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/common/Select.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Select;
}}),
"[project]/app/components/common/Input.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
const Input = ({ type = "text", className = "", placeholder = "", registerField, error = false, ...rest })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        placeholder: placeholder,
        className: `h-10 w-full rounded-md border px-4 ${error ? "border-red-500" : "border-grayText"} ${className}`,
        ...registerField,
        ...rest
    }, void 0, false, {
        fileName: "[project]/app/components/common/Input.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Input;
}}),
"[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TableViewModal": (()=>TableViewModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/Config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/common/Select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/useApiHooks.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const rowOptions = [
    {
        value: "5",
        label: "5"
    },
    {
        value: "10",
        label: "10"
    }
];
const TableViewModal = ({ isOpen, onClose, tableId, tableName, columnsDetails, updateColumnDetail, onSave, deid_rules })=>{
    const [rowsToShow, setRowsToShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("10");
    const [hasModalChanges, setHasModalChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Use your existing API to get the row data
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}view_table_data/${tableId}?rows=${rowsToShow}`, {
        queryKey: [
            "table_data",
            tableId,
            rowsToShow
        ],
        enabled: isOpen
    });
    // If it's closed, don't render anything
    if (!isOpen) return null;
    // columns from the data
    const columns = data?.rows?.[0] ? Object.keys(data.rows[0]) : [];
    // but also ensure they exist in columnsDetails
    // (some columns might not be in columnsDetails if it’s out of sync, handle carefully)
    const displayColumns = columns.filter((c)=>columnsDetails[c] !== undefined);
    // Handler for updating PHI in the parent’s form
    const handlePhiChange = (colName, newPhi)=>{
        setHasModalChanges(true);
        updateColumnDetail(colName, {
            is_phi: newPhi
        });
    };
    // Handler for updating De-id rule in the parent’s form
    const handleRuleChange = (colName, newRule)=>{
        setHasModalChanges(true);
        updateColumnDetail(colName, {
            de_identification_rule: newRule
        });
    };
    // When user clicks "Save" in modal, call parent's onSave
    const handleSaveClick = ()=>{
        onSave(); // calls parent handleSubmit(onSubmit)
        setHasModalChanges(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-h-[80vh] w-[90vw] overflow-hidden rounded-lg bg-white p-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold",
                            children: tableName
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "rounded-md p-2 hover:bg-gray-100",
                            children: "✕"
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[calc(80vh-12rem)] overflow-auto",
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex h-40 items-center justify-center",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "w-full table-auto border-collapse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                className: "sticky top-0 bg-white",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: displayColumns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border-b border-gray-200 p-3 text-left text-sm font-semibold",
                                                children: column
                                            }, column, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                        lineNumber: 116,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: displayColumns.map((column)=>{
                                            const colData = columnsDetails[column];
                                            const isPHI = colData?.is_phi === "true";
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border-b border-gray-200 p-3 align-top text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        value: colData?.is_phi || "false",
                                                        onChange: (e)=>handlePhiChange(column, e.target.value),
                                                        options: [
                                                            {
                                                                value: "false",
                                                                label: "No"
                                                            },
                                                            {
                                                                value: "true",
                                                                label: "Yes"
                                                            }
                                                        ],
                                                        className: "mb-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 25
                                                    }, this),
                                                    isPHI && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        value: colData?.de_identification_rule || "",
                                                        onChange: (e)=>handleRuleChange(column, e.target.value),
                                                        options: deid_rules.map((rule)=>({
                                                                value: rule,
                                                                label: rule
                                                            })),
                                                        placeholder: "Select Rule"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                                        lineNumber: 155,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, column, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                                lineNumber: 136,
                                                columnNumber: 23
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                        lineNumber: 131,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: data?.rows.map((row, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        className: "hover:bg-gray-50",
                                        children: displayColumns.map((column)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                className: "border-b border-gray-200 p-3 text-sm",
                                                children: row[column]?.toString() || ""
                                            }, column, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                                lineNumber: 178,
                                                columnNumber: 23
                                            }, this))
                                    }, index, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                        lineNumber: 176,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                lineNumber: 174,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                        lineNumber: 114,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                    lineNumber: 108,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-600",
                                    children: "View"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                    lineNumber: 196,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        value: rowsToShow,
                                        onChange: (e)=>setRowsToShow(e.target.value),
                                        options: rowOptions,
                                        className: "h-8 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                    lineNumber: 197,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm text-gray-600",
                                    children: "Rows"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                hasModalChanges && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded bg-secondary px-4 py-2 text-white hover:bg-secondary/90",
                                    onClick: handleSaveClick,
                                    children: "Save"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                    lineNumber: 212,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded border px-3 py-2 text-sm hover:bg-gray-100",
                                    onClick: onClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                            lineNumber: 209,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
};
}}),
"[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "TableListCard": (()=>TableListCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/Config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/common/Button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/common/Select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/useApiHooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/common/Input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$TableViewModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableViewModal.tsx [app-ssr] (ecmascript)"); // We'll update this next
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-hook-form/dist/index.esm.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/go/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/md/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/cg/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ci/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/** -------------------------------
 *  ENUMS AND INTERFACES
 *  ------------------------------- */ var StatusEnum = /*#__PURE__*/ function(StatusEnum) {
    StatusEnum[StatusEnum["NotStarted"] = 0] = "NotStarted";
    StatusEnum[StatusEnum["InProgress"] = 1] = "InProgress";
    StatusEnum[StatusEnum["Completed"] = 2] = "Completed";
    StatusEnum[StatusEnum["Failed"] = -1] = "Failed";
    return StatusEnum;
}(StatusEnum || {});
var TableQCStatus = /*#__PURE__*/ function(TableQCStatus) {
    TableQCStatus[TableQCStatus["NotStarted"] = 0] = "NotStarted";
    TableQCStatus[TableQCStatus["InProgress"] = 1] = "InProgress";
    TableQCStatus[TableQCStatus["Completed"] = 2] = "Completed";
    return TableQCStatus;
}(TableQCStatus || {});
const TableListCard = ({ tablesData, clientId, clientDetails, dumpDetails })=>{
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [deidStatusFilter, setDeidStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [qcStatusFilter, setQcStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [embdStatusFilter, setEmbdStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [gcpStatusFilter, setGcpStatusFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [phiFilter, setPhiFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("any");
    const [isFilterOpen, setIsFilterOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedTableId, setSelectedTableId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [tableDetails, setTableDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [liveUpdateData, setLiveUpdateData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Checkboxes states for PHI marking, lock, QC, etc.
    // const [qcPassed, setQcPassed] = useState(false);
    // const [qcFailed, setQcFailed] = useState(false);
    // Control the "View Table" modal
    const [isViewModalOpen, setIsViewModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLiveModalOpen, setIsLiveModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // -----------
    // FETCH DE-IDENTIFICATION RULES
    // -----------
    const { data: deIdRulesData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}deid_rules/${clientId}/`, {
        queryKey: [
            "deid_rules",
            clientId
        ]
    });
    // -----------
    // REACT-HOOK-FORM for table details
    // -----------
    const { register, handleSubmit, reset, watch, setValue, formState: { errors } } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hook$2d$form$2f$dist$2f$index$2e$esm$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useForm"])();
    // We'll watch the entire columns_details object to pass it to the modal
    const columnsDetails = watch("columns_details") || {};
    // -----------
    // FETCH SELECTED TABLE DETAILS
    // -----------
    const { data: tableDetailsData, isLoading: isTableDetailsLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGet"])(selectedTableId ? `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}tables_details_for_ui/${selectedTableId}` : "", {
        queryKey: [
            "table_details",
            selectedTableId
        ],
        enabled: !!selectedTableId
    });
    // -----------
    // API: START / STOP DE-ID
    // -----------
    const { isLoading: isStartedDeIdentificationLoading, refetch: startDeIdentification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGet"])(selectedTableId ? `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}start_de_identification/${selectedTableId}` : "", {
        queryKey: [
            "start_de_identification",
            selectedTableId
        ],
        enabled: false
    });
    const handleDeIdentification = ()=>{
        if (selectedTableId) {
            startDeIdentification();
        }
    };
    const { isLoading: isStopDeIdentificationLoading, refetch: stopDeIdentification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGet"])(selectedTableId ? `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}stop_de_identification/${selectedTableId}` : "", {
        queryKey: [
            "stop_de_identification",
            selectedTableId
        ],
        enabled: false
    });
    const handleStopDeIdentification = ()=>{
        if (selectedTableId) {
            stopDeIdentification();
        }
    };
    // -----------
    // VIEW PIPELINE HANDLER - Fetches live data and opens modal
    // -----------
    const handleViewPipeline = async ()=>{
        if (selectedTableId) {
            try {
                const response = await fetchLiveUpdate();
                if (response.data) {
                    // Update the table details with the new status values
                    setTableDetails((prev)=>{
                        if (prev) {
                            return {
                                ...prev,
                                processing_status: response.data.deid_status,
                                qc_status: response.data.qc_status
                            };
                        }
                        return prev;
                    });
                    // Store the live update data for the pipeline modal
                    setLiveUpdateData({
                        deid_status: response.data.deid_status,
                        qc_status: response.data.qc_status,
                        embedding_status: response.data.embedding_status,
                        is_cloud_moved: response.data.is_cloud_moved,
                        is_phi_marking_done: response.data.is_phi_marking_done
                    });
                    // Open the pipeline modal after fetching data
                    setIsLiveModalOpen(true);
                    // Show success message
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Pipeline data updated successfully");
                }
            } catch (error) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Failed to fetch pipeline data");
                console.error("Pipeline fetch error:", error);
            }
        }
    };
    // -----------
    // API: SUBMIT TABLE DETAILS
    // -----------
    const { mutate: submitTableDetails, isPending: isTableDetailsUpdateLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePost"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}tables_details_for_ui/${selectedTableId}/`, {
        onSuccess: ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Table details submitted successfully");
        }
    });
    // -----------
    // API: LIVE UPDATE - Fetch table details for status update
    // -----------
    const { isLoading: isLiveUpdateLoading, refetch: fetchLiveUpdate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGet"])(selectedTableId ? `${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}tables_details_for_ui/${selectedTableId}/` : "", {
        queryKey: [
            "live_update",
            selectedTableId
        ],
        enabled: false
    });
    // -----------
    // PERMISSIONS
    // -----------
    const { data: permissions } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}user_permissions/`, {
        queryKey: [
            "user_permissions"
        ]
    });
    // -----------
    // COMPUTE BUTTON STATE LOGIC (same as PHITables.tsx)
    // -----------
    const canStartDeIdentification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return clientDetails?.client_presetup_config_configured && dumpDetails?.is_dump_processing_done && dumpDetails?.is_primary_key_uploaded;
    }, [
        clientDetails,
        dumpDetails
    ]);
    // -----------
    // EFFECT: When we get tableDetailsData from API,
    //         parse it into the form and local states
    // -----------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (tableDetailsData) {
            setTableDetails(tableDetailsData);
            // Build default form values
            const defaultValues = {
                batch_size: tableDetailsData.table_details_for_ui.batch_size,
                ignore_config: tableDetailsData.table_details_for_ui.ignore_config,
                columns_details: {},
                reference_patient_id_column: tableDetailsData.table_details_for_ui.reference_patient_id_column || "",
                reference_enc_id_column: tableDetailsData.table_details_for_ui.reference_enc_id_column || ""
            };
            tableDetailsData.table_details_for_ui.columns_details.forEach((col)=>{
                defaultValues.columns_details[col.column_name] = {
                    is_phi: col.is_phi ? "true" : "false",
                    de_identification_rule: col.de_identification_rule || "",
                    mask_value: col.mask_value || ""
                };
            });
            // initialize the RHF form
            reset(defaultValues);
        }
    }, [
        tableDetailsData,
        reset
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (tablesData && tablesData.length > 0 && selectedTableId === null) {
            setSelectedTableId(tablesData[0].table_id);
        }
    }, [
        tablesData,
        selectedTableId
    ]);
    // -----------
    // handleSubmit for the entire form
    // -----------
    const onSubmit = (data)=>{
        // Transform "columns_details" object back into an array
        const columnsDetailsArray = Object.entries(data.columns_details).map(([columnName, columnData])=>{
            // If the user picks "true" for PHI, store is_phi = true
            // else store is_phi = false
            const isPHI = columnData.is_phi === "true";
            // If rule is "MASK", keep the mask_value
            // else mask_value might be empty
            return {
                column_name: columnName,
                is_phi: isPHI,
                mask_value: columnData.de_identification_rule === "MASK" ? columnData.mask_value : null,
                ignore_column: false,
                add_to_phi_table: false,
                de_identification_rule: columnData.de_identification_rule || null,
                column_name_for_phi_table: null
            };
        });
        const requestBody = {
            batch_size: data.batch_size,
            ignore_config: data.ignore_config,
            columns_details: columnsDetailsArray,
            reference_patient_id_column: data.reference_patient_id_column || null,
            reference_enc_id_column: data.reference_enc_id_column || null
        };
        // call the POST mutation
        submitTableDetails(requestBody);
    };
    // For the "Save" in the modal
    const handleModalSave = ()=>{
        // This triggers the same "onSubmit" as the parent's "Save" button
        handleSubmit(onSubmit)();
    };
    // -----------
    // For real-time updates from the modal (PHI, rule)
    // -----------
    const updateColumnDetail = (columnName, partialData)=>{
        // get current from the parent's form
        const current = columnsDetails[columnName] || {};
        const updated = {
            ...current,
            ...partialData
        };
        // If user sets PHI to "false", clear rule + mask
        if (partialData.is_phi === "false") {
            updated.de_identification_rule = "";
            updated.mask_value = "";
        }
        // If user sets rule = "MASK" and there's no mask_value yet
        if (partialData.de_identification_rule === "MASK" && !current.mask_value) {
            updated.mask_value = `<${columnName}>`;
        }
        // If user picks a rule != "MASK", remove mask_value
        if (partialData.de_identification_rule && partialData.de_identification_rule !== "MASK") {
            updated.mask_value = "";
        }
        // setValue in the parent's form
        setValue(`columns_details.${columnName}`, updated, {
            shouldDirty: true
        });
    };
    // -----------
    // Filter tables by search
    // -----------
    // const filteredTables = tablesData
    //   ? Object.entries(tablesData).filter(([name]) =>
    //       name.toLowerCase().includes(searchQuery.toLowerCase()),
    //     )
    //   : [];
    const filteredTables = (tablesData || []).filter((t)=>t.table_name.toLowerCase().includes(searchQuery.toLowerCase())).filter((t)=>deidStatusFilter === "all" ? true : t.deid.status === deidStatusFilter).filter((t)=>qcStatusFilter === "all" ? true : t.qc.status === qcStatusFilter).filter((t)=>embdStatusFilter === "all" ? true : t.embd.status === embdStatusFilter).filter((t)=>gcpStatusFilter === "all" ? true : t.gcp.status === gcpStatusFilter).filter((t)=>phiFilter === "any" ? true : phiFilter === "done" ? t.is_phi_marking_done === true : t.is_phi_marking_done === false);
    // -----------
    // LOADING STATES
    // -----------
    // if (isTablesLoading) {
    //   return <div>Loading tables...</div>;
    // }
    // -----------
    // RENDER
    // -----------
    console.log({
        filteredTables
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full max-h-full flex-row rounded-xl bg-white p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full max-w-56 flex-col gap-1 border-r border-borderColor pr-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                className: "h-8 w-full rounded-full border-none bg-background px-4 pr-10 text-sm",
                                                placeholder: "Search...",
                                                value: searchQuery,
                                                onChange: (e)=>setSearchQuery(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                lineNumber: 531,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSearch"], {
                                                className: "absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer text-gray-400"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                lineNumber: 538,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                        lineNumber: 530,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative inline-block text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                className: `flex h-8 w-8 items-center justify-center rounded-full bg-background hover:bg-mischka ${deidStatusFilter !== "all" || qcStatusFilter !== "all" || embdStatusFilter !== "all" || gcpStatusFilter !== "all" || phiFilter !== "any" ? "ring-2 ring-secondary" : ""}`,
                                                onClick: ()=>setIsFilterOpen((v)=>!v),
                                                title: "Filter",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiFilter"], {
                                                    className: "text-gray-600"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 549,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                lineNumber: 541,
                                                columnNumber: 15
                                            }, this),
                                            isFilterOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute right-0 z-20 mt-2 w-64 origin-top-right rounded-md bg-white py-2 text-sm shadow-lg ring-1 ring-black ring-opacity-5 max-h-96 overflow-y-auto",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left font-semibold text-gray-700",
                                                        disabled: true,
                                                        children: "Deid Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 554,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setDeidStatusFilter("all");
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 560,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setDeidStatusFilter(0);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Not Started"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 566,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setDeidStatusFilter(1);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "In Progress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 572,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setDeidStatusFilter(2);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Completed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 578,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setDeidStatusFilter(-1);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Failed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 584,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "my-2 h-px bg-gray-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 591,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left font-semibold text-gray-700",
                                                        disabled: true,
                                                        children: "QC Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setQcStatusFilter("all");
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 600,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setQcStatusFilter(0);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Not Started"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 606,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setQcStatusFilter(1);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "In Progress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 612,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setQcStatusFilter(2);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Completed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 618,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setQcStatusFilter(-1);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Failed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 624,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "my-2 h-px bg-gray-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left font-semibold text-gray-700",
                                                        disabled: true,
                                                        children: "EMBD Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 634,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setEmbdStatusFilter("all");
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 640,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setEmbdStatusFilter(0);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Not Started"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 646,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setEmbdStatusFilter(1);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "In Progress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 652,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setEmbdStatusFilter(2);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Completed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 658,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setEmbdStatusFilter(-1);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Failed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 664,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "my-2 h-px bg-gray-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 671,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left font-semibold text-gray-700",
                                                        disabled: true,
                                                        children: "GCP Status"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 674,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setGcpStatusFilter("all");
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "All"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 680,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setGcpStatusFilter(0);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Not Started"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 686,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setGcpStatusFilter(1);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "In Progress"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 692,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setGcpStatusFilter(2);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Completed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 698,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setGcpStatusFilter(-1);
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Failed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "my-2 h-px bg-gray-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 711,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left font-semibold text-gray-700",
                                                        disabled: true,
                                                        children: "PHI Marking"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 714,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setPhiFilter("any");
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Any"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 720,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setPhiFilter("done");
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Done"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 726,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "block w-full px-3 py-2 text-left hover:bg-gray-100",
                                                        onClick: ()=>{
                                                            setPhiFilter("pending");
                                                            setIsFilterOpen(false);
                                                        },
                                                        children: "Pending"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 732,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                lineNumber: 552,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                        lineNumber: 540,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                lineNumber: 529,
                                columnNumber: 11
                            }, this),
                            !tablesData || filteredTables.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex h-72 items-center justify-center text-sm text-secText",
                                children: "No tables Found"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                lineNumber: 744,
                                columnNumber: 13
                            }, this) : filteredTables.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `flex cursor-pointer items-center px-4 py-2 text-sm hover:bg-background \$
                  ${selectedTableId === t.table_id ? "bg-background" : ""}
                }`,
                                    onClick: ()=>setSelectedTableId(t.table_id),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "overflow-hidden text-ellipsis",
                                            children: t.table_name
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 756,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-auto text-lg",
                                            children: [
                                                t.deid.status === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$go$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoDotFill"], {
                                                    className: "text-secondary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 759,
                                                    columnNumber: 21
                                                }, this),
                                                t.deid.status === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaRegCircleCheck"], {
                                                    className: "text-secondary"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 762,
                                                    columnNumber: 21
                                                }, this),
                                                t.deid.status === -1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosCloseCircleOutline"], {
                                                    className: "text-bittersweet"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 765,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 757,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, t.table_id, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                    lineNumber: 749,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                        lineNumber: 527,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex w-full flex-col pl-8",
                        children: isTableDetailsLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Loading table details..."
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                            lineNumber: 776,
                            columnNumber: 13
                        }, this) : tableDetails ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex w-full flex-row items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "mb-1 text-xl font-semibold",
                                            children: tableDetails.table_name
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 780,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "ml-auto flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center rounded-md bg-background px-3 py-2 hover:bg-mischka disabled:opacity-50 disabled:cursor-not-allowed",
                                                    onClick: handleViewPipeline,
                                                    disabled: isLiveUpdateLoading,
                                                    children: isLiveUpdateLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "animate-spin rounded-full h-4 w-4 border-b-2 border-gray-600 mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                lineNumber: 791,
                                                                columnNumber: 25
                                                            }, this),
                                                            "Loading..."
                                                        ]
                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$md$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MdOutlineLiveTv"], {
                                                                className: "mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                lineNumber: 796,
                                                                columnNumber: 25
                                                            }, this),
                                                            "View Pipeline"
                                                        ]
                                                    }, void 0, true)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 784,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex items-center rounded-md bg-background px-3 py-2 hover:bg-mischka",
                                                    onClick: ()=>setIsViewModalOpen(true),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$cg$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CgEyeAlt"], {
                                                            className: "mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                            lineNumber: 805,
                                                            columnNumber: 21
                                                        }, this),
                                                        "View Table"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 801,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 783,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                    lineNumber: 779,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "-mt-2 w-8 border-2 border-secondary"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                    lineNumber: 810,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mb-2 flex flex-row gap-8 border-b border-borderColor py-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-medium",
                                            children: [
                                                "Row Count:",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1 text-secondary",
                                                    children: tableDetails.rows_count
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 816,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 814,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-medium",
                                            children: [
                                                "DIT Status:",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1 text-secondary",
                                                    children: StatusEnum[tableDetails.processing_status]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 822,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 820,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm font-medium",
                                            children: [
                                                "Qc Status: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-1 text-secondary",
                                                    children: TableQCStatus[tableDetails.qc_status]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 827,
                                                    columnNumber: 30
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 826,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                    lineNumber: 813,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "flex w-full flex-col gap-4 rounded-lg border-borderColor",
                                    onSubmit: handleSubmit(onSubmit),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-col gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-semibold",
                                                    children: [
                                                        "Columns (",
                                                        tableDetails.table_details_for_ui.columns_details.length,
                                                        ")"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 838,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "scrollbar-visible flex h-56 w-full flex-col gap-4 overflow-y-auto",
                                                    children: tableDetails.table_details_for_ui.columns_details.map((column)=>{
                                                        const colName = column.column_name;
                                                        const fieldPath = `columns_details.${colName}`;
                                                        // We'll just read the form state:
                                                        const colState = columnsDetails[colName] || {
                                                            is_phi: "false",
                                                            de_identification_rule: "",
                                                            mask_value: ""
                                                        };
                                                        const isPHI = colState.is_phi === "true";
                                                        // We won't do a ton of watchers here; we rely on 'updateColumnDetail'
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "max-w-[25%] flex-col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "text-sm text-secText",
                                                                            children: "Column Name"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 860,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                            className: "mt-1 h-10 w-full rounded-md border px-4 text-sm",
                                                                            value: colName,
                                                                            disabled: true
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 863,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 859,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "text-sm text-secText",
                                                                            children: "Is PHI"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 872,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            className: "mt-1 h-10 w-full rounded-md",
                                                                            options: [
                                                                                {
                                                                                    value: "true",
                                                                                    label: "Yes"
                                                                                },
                                                                                {
                                                                                    value: "false",
                                                                                    label: "No"
                                                                                }
                                                                            ],
                                                                            // We can use the parent's "setValue" or
                                                                            // do an onChange that calls updateColumnDetail
                                                                            value: colState.is_phi,
                                                                            onChange: (e)=>{
                                                                                updateColumnDetail(colName, {
                                                                                    is_phi: e.target.value
                                                                                });
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 875,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 871,
                                                                    columnNumber: 29
                                                                }, this),
                                                                isPHI && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "my-0.5 line-clamp-1 overflow-ellipsis text-sm text-secText",
                                                                            children: "De-identification Rule"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 895,
                                                                            columnNumber: 33
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            className: "mt-1 h-10 w-full rounded-md",
                                                                            options: (deIdRulesData?.rules || []).map((rule)=>({
                                                                                    value: rule,
                                                                                    label: rule
                                                                                })),
                                                                            placeholder: "Select Rule",
                                                                            value: colState.de_identification_rule,
                                                                            onChange: (e)=>{
                                                                                updateColumnDetail(colName, {
                                                                                    de_identification_rule: e.target.value
                                                                                });
                                                                            }
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 898,
                                                                            columnNumber: 33
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 894,
                                                                    columnNumber: 31
                                                                }, this),
                                                                colState.de_identification_rule === "MASK" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "max-w-[22%] flex-col",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                            className: "text-sm text-secText",
                                                                            children: "Mask Value"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 921,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            className: "mt-1 text-sm text-secText",
                                                                            registerField: register(`${fieldPath}.mask_value`, {
                                                                                required: "Mask Value is required"
                                                                            })
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 924,
                                                                            columnNumber: 35
                                                                        }, this),
                                                                        errors.columns_details?.[colName]?.mask_value && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "mt-2 text-xs text-red-500",
                                                                            children: errors.columns_details?.[colName]?.mask_value?.message
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 935,
                                                                            columnNumber: 39
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 920,
                                                                    columnNumber: 33
                                                                }, this)
                                                            ]
                                                        }, colName, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                            lineNumber: 857,
                                                            columnNumber: 27
                                                        }, this);
                                                    })
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 842,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mt-4 font-semibold",
                                                    children: "Reference Columns"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 951,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 flex-col",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm text-secText",
                                                                    children: "Patient ID Column"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 954,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "mt-1 h-10 w-full rounded-md",
                                                                    options: tableDetails.table_details_for_ui.columns_details.map((col)=>({
                                                                            value: col.column_name,
                                                                            label: col.column_name
                                                                        })),
                                                                    placeholder: "Select Column",
                                                                    ...register("reference_patient_id_column")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 957,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                            lineNumber: 953,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-1/2 flex-col",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    className: "text-sm text-secText",
                                                                    children: "Encounter ID Column"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 970,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "mt-1 h-10 w-full rounded-md",
                                                                    options: tableDetails.table_details_for_ui.columns_details.map((col)=>({
                                                                            value: col.column_name,
                                                                            label: col.column_name
                                                                        })),
                                                                    placeholder: "Select Column",
                                                                    ...register("reference_enc_id_column")
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 973,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                            lineNumber: 969,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 952,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 837,
                                            columnNumber: 17
                                        }, this),
                                        clientDetails && dumpDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3",
                                                    children: "Prerequisites Status"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 991,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-3 h-3 rounded-full ${clientDetails.client_presetup_config_configured ? 'bg-green-500' : 'bg-red-500'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 994,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs font-medium text-gray-900",
                                                                            children: "Client Setup"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 996,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: clientDetails.client_presetup_config_configured ? 'Complete' : 'Incomplete'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 997,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 995,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                            lineNumber: 993,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-3 h-3 rounded-full ${dumpDetails.is_dump_processing_done ? 'bg-green-500' : 'bg-yellow-500'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 1003,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs font-medium text-gray-900",
                                                                            children: "Dump Processing"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 1005,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: dumpDetails.is_dump_processing_done ? 'Complete' : 'In Progress'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 1006,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 1004,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                            lineNumber: 1002,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center space-x-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: `w-3 h-3 rounded-full ${dumpDetails.is_primary_key_uploaded ? 'bg-green-500' : 'bg-red-500'}`
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 1012,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs font-medium text-gray-900",
                                                                            children: "Primary Keys"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 1014,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: dumpDetails.is_primary_key_uploaded ? 'Uploaded' : 'Not Uploaded'
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 1015,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 1013,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                            lineNumber: 1011,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 992,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 990,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-6 flex flex-col gap-4 border-t border-gray-200 pt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row items-center gap-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            variant: "secondary",
                                                            loading: isTableDetailsUpdateLoading,
                                                            className: "min-w-[120px]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiSave"], {
                                                                    className: "mr-2 inline"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 1032,
                                                                    columnNumber: 23
                                                                }, this),
                                                                "Save"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                            lineNumber: 1027,
                                                            columnNumber: 21
                                                        }, this),
                                                        permissions?.StartDeIdentificationButton.has_permission && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "relative group",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    type: "button",
                                                                    variant: tableDetails.processing_status === 1 ? "danger" : "primary",
                                                                    loading: isStartedDeIdentificationLoading || isStopDeIdentificationLoading,
                                                                    disabled: !canStartDeIdentification,
                                                                    onClick: (e)=>{
                                                                        e.preventDefault();
                                                                        if (tableDetails.processing_status === 1) {
                                                                            handleStopDeIdentification();
                                                                        } else {
                                                                            handleDeIdentification();
                                                                        }
                                                                    },
                                                                    className: "min-w-[200px]",
                                                                    children: tableDetails.processing_status === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiStop1"], {
                                                                                className: "mr-2 inline"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                                lineNumber: 1064,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            "Stop De-identification"
                                                                        ]
                                                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiPlay1"], {
                                                                                className: "mr-2 inline"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                                lineNumber: 1069,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            "Start De-identification"
                                                                        ]
                                                                    }, void 0, true)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 1037,
                                                                    columnNumber: 25
                                                                }, this),
                                                                !canStartDeIdentification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10",
                                                                    children: [
                                                                        !clientDetails?.client_presetup_config_configured && "Client presetup configuration is not complete",
                                                                        clientDetails?.client_presetup_config_configured && !dumpDetails?.is_dump_processing_done && "Dump processing is not complete",
                                                                        clientDetails?.client_presetup_config_configured && dumpDetails?.is_dump_processing_done && !dumpDetails?.is_primary_key_uploaded && "Primary key configuration is not uploaded",
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                            lineNumber: 1081,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                    lineNumber: 1077,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                            lineNumber: 1036,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 1026,
                                                    columnNumber: 19
                                                }, this),
                                                !canStartDeIdentification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-600 bg-blue-50 border border-blue-200 rounded-lg px-4 py-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center space-x-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-2 h-2 bg-blue-500 rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                lineNumber: 1092,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    !clientDetails?.client_presetup_config_configured && "Complete client setup configuration first",
                                                                    clientDetails?.client_presetup_config_configured && !dumpDetails?.is_dump_processing_done && "Wait for dump processing to complete",
                                                                    clientDetails?.client_presetup_config_configured && dumpDetails?.is_dump_processing_done && !dumpDetails?.is_primary_key_uploaded && "Upload primary key configuration first"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                                lineNumber: 1093,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                        lineNumber: 1091,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                    lineNumber: 1090,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 1025,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex flex-row gap-4"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 1104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                    lineNumber: 832,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex h-96 items-center justify-center text-sm text-secText",
                            children: "Select a table to view details"
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                            lineNumber: 1146,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                        lineNumber: 774,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                lineNumber: 525,
                columnNumber: 7
            }, this),
            tableDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$TableViewModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableViewModal"], {
                isOpen: isViewModalOpen,
                onClose: ()=>setIsViewModalOpen(false),
                tableId: tableDetails.table_id,
                tableName: tableDetails.table_name,
                /** 1) pass the parent's columns details */ columnsDetails: columnsDetails,
                /** 2) pass the update function */ updateColumnDetail: updateColumnDetail,
                /** 3) pass parent's "onSubmit" trigger so the modal can Save */ onSave: handleModalSave,
                /** 4) pass the de-identification rules from API */ deid_rules: deIdRulesData?.rules || []
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                lineNumber: 1155,
                columnNumber: 9
            }, this),
            tableDetails && isLiveModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LiveUpdatePipelineModal, {
                onClose: ()=>setIsLiveModalOpen(false),
                tableName: tableDetails.table_name,
                statuses: {
                    phi: liveUpdateData?.is_phi_marking_done ? 2 : 1,
                    deid: liveUpdateData?.deid_status ?? tableDetails.processing_status,
                    qc: liveUpdateData?.qc_status ?? tableDetails.qc_status,
                    gcp: liveUpdateData?.is_cloud_moved ?? (tablesData || []).find((t)=>t.table_id === selectedTableId)?.gcp_status ?? 0,
                    embd: liveUpdateData?.embedding_status ?? (tablesData || []).find((t)=>t.table_id === selectedTableId)?.embd_status ?? 0
                }
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                lineNumber: 1173,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
};
/** Modal component: Jenkins-like pipeline for live updates */ const LiveUpdatePipelineModal = ({ onClose, tableName, statuses })=>{
    const statusToColor = (s)=>{
        switch(s){
            case 2:
                return "bg-green-500";
            case 1:
                return "bg-yellow-500 animate-pulse";
            case -1:
                return "bg-red-500";
            case 0:
            default:
                return "bg-gray-300";
        }
    };
    const statusToGeneralLabel = (s)=>{
        switch(s){
            case 2:
                return "Completed";
            case 1:
                return "In Progress";
            case -1:
                return "Failed";
            case 0:
            default:
                return "Not Started";
        }
    };
    const statusToGcpLabel = (s)=>{
        switch(s){
            case 2:
                return "Moved";
            case 1:
                return "In Process";
            case -1:
                return "Failed";
            case 0:
            default:
                return "Not moved";
        }
    };
    const statusToPhiLabel = (s)=>{
        switch(s){
            case 2:
                return "Completed";
            case 1:
                return "In Progress";
            case -1:
                return "Failed";
            case 0:
            default:
                return "Not Started";
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-6xl max-h-[90vh] rounded-xl bg-white p-6 shadow-xl overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold",
                            children: [
                                "Live Update - ",
                                tableName
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                            lineNumber: 1255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "ml-auto flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full",
                                    children: "Live Data"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                    lineNumber: 1257,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-md bg-background px-3 py-1 text-sm hover:bg-mischka",
                                    onClick: onClose,
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                    lineNumber: 1260,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                            lineNumber: 1256,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                    lineNumber: 1254,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 w-full overflow-auto p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        viewBox: "0 0 1000 280",
                        className: "w-full h-auto min-h-[280px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("marker", {
                                        id: "arrow",
                                        markerWidth: "10",
                                        markerHeight: "10",
                                        refX: "10",
                                        refY: "3",
                                        orient: "auto",
                                        markerUnits: "strokeWidth",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M0,0 L10,3 L0,6 Z",
                                            fill: "#4b5563"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 1271,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                        lineNumber: 1270,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                        id: "stripe",
                                        patternUnits: "userSpaceOnUse",
                                        width: "40",
                                        height: "40",
                                        patternTransform: "rotate(20)",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            width: "20",
                                            height: "40",
                                            fill: "#6366f1",
                                            opacity: "0.12",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animate", {
                                                attributeName: "x",
                                                from: "-40",
                                                to: "40",
                                                dur: "1.2s",
                                                repeatCount: "indefinite"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                lineNumber: 1276,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 1275,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                        lineNumber: 1274,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                lineNumber: 1269,
                                columnNumber: 13
                            }, this),
                            (()=>{
                                const inProgressAny = [
                                    statuses.phi,
                                    statuses.deid,
                                    statuses.qc,
                                    statuses.gcp,
                                    statuses.embd
                                ].includes(1);
                                const isActive = (key)=>{
                                    if (inProgressAny) return statuses[key] === 1;
                                    if (key === 'phi') return statuses.phi !== 2;
                                    if (key === 'deid') return statuses.phi === 2 && statuses.deid !== 2;
                                    if (key === 'qc') return statuses.phi === 2 && statuses.deid === 2 && statuses.qc !== 2;
                                    if (key === 'gcp') return statuses.phi === 2 && statuses.deid === 2 && statuses.qc === 2 && statuses.gcp !== 2;
                                    if (key === 'embd') return statuses.phi === 2 && statuses.deid === 2 && statuses.qc === 2 && statuses.embd !== 2;
                                    return false;
                                };
                                const Node = ({ x, y, label, title, colorClass, active })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: x - 6,
                                                y: y - 6,
                                                rx: 16,
                                                ry: 16,
                                                width: 212,
                                                height: 72,
                                                fill: "none",
                                                className: "animate-pulse",
                                                stroke: "#6366f1",
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                lineNumber: 1296,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: x,
                                                y: y,
                                                rx: 12,
                                                ry: 12,
                                                width: 200,
                                                height: 60,
                                                className: `fill-white`,
                                                stroke: "#d1d5db",
                                                strokeWidth: active ? 3 : 2
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                lineNumber: 1298,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: x + 4,
                                                y: y + 4,
                                                rx: 10,
                                                ry: 10,
                                                width: 192,
                                                height: 52,
                                                className: `${colorClass} ${active ? 'opacity-30' : 'opacity-20'}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                lineNumber: 1299,
                                                columnNumber: 19
                                            }, this),
                                            active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                x: x + 4,
                                                y: y + 4,
                                                rx: 10,
                                                ry: 10,
                                                width: 192,
                                                height: 52,
                                                fill: "url(#stripe)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                lineNumber: 1301,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: x + 100,
                                                y: y + 35,
                                                textAnchor: "middle",
                                                className: "fill-gray-900 text-[14px] font-semibold",
                                                children: label
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                lineNumber: 1303,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
                                                x: x + 100,
                                                y: y + 80,
                                                textAnchor: "middle",
                                                className: "fill-gray-500 text-[11px]",
                                                children: title
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                                lineNumber: 1304,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                        lineNumber: 1294,
                                        columnNumber: 17
                                    }, this);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Node, {
                                            x: 50,
                                            y: 110,
                                            label: statusToPhiLabel(statuses.phi),
                                            title: "phi marking",
                                            colorClass: statusToColor(statuses.phi),
                                            active: isActive('phi')
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 1310,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Node, {
                                            x: 300,
                                            y: 110,
                                            label: statusToGeneralLabel(statuses.deid),
                                            title: "deid status",
                                            colorClass: statusToColor(statuses.deid),
                                            active: isActive('deid')
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 1311,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Node, {
                                            x: 550,
                                            y: 110,
                                            label: statusToGeneralLabel(statuses.qc),
                                            title: "qc status",
                                            colorClass: statusToColor(statuses.qc),
                                            active: isActive('qc')
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 1312,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Node, {
                                            x: 800,
                                            y: 50,
                                            label: statusToGcpLabel(statuses.gcp),
                                            title: "gcp status",
                                            colorClass: statusToColor(statuses.gcp),
                                            active: isActive('gcp')
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 1313,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Node, {
                                            x: 800,
                                            y: 170,
                                            label: statusToGeneralLabel(statuses.embd),
                                            title: "embdd status",
                                            colorClass: statusToColor(statuses.embd),
                                            active: isActive('embd')
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                            lineNumber: 1314,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true);
                            })(),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                id: "edge_phi_deid",
                                x1: "250",
                                y1: "140",
                                x2: "300",
                                y2: "140",
                                stroke: "#4b5563",
                                strokeWidth: "2",
                                markerEnd: "url(#arrow)"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                lineNumber: 1321,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                id: "edge_deid_qc",
                                x1: "500",
                                y1: "140",
                                x2: "550",
                                y2: "140",
                                stroke: "#4b5563",
                                strokeWidth: "2",
                                markerEnd: "url(#arrow)"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                lineNumber: 1323,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                id: "edge_qc_gcp",
                                d: "M 750 140 C 790 140, 790 80, 800 80",
                                fill: "none",
                                stroke: "#4b5563",
                                strokeWidth: "2",
                                markerEnd: "url(#arrow)"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                lineNumber: 1325,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                id: "edge_qc_embd",
                                d: "M 750 140 C 790 140, 790 200, 800 200",
                                fill: "none",
                                stroke: "#4b5563",
                                strokeWidth: "2",
                                markerEnd: "url(#arrow)"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                lineNumber: 1327,
                                columnNumber: 13
                            }, this),
                            statuses.phi === 2 && statuses.deid === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                r: "4",
                                fill: "#6366f1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                    dur: "1.2s",
                                    repeatCount: "indefinite",
                                    rotate: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mpath", {
                                        href: "#edge_phi_deid"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                        lineNumber: 1333,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                    lineNumber: 1332,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                lineNumber: 1331,
                                columnNumber: 15
                            }, this),
                            statuses.deid === 2 && statuses.qc === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                r: "4",
                                fill: "#6366f1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                    dur: "1.2s",
                                    repeatCount: "indefinite",
                                    rotate: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mpath", {
                                        href: "#edge_deid_qc"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                        lineNumber: 1340,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                    lineNumber: 1339,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                lineNumber: 1338,
                                columnNumber: 15
                            }, this),
                            statuses.qc === 2 && statuses.gcp === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                r: "4",
                                fill: "#6366f1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                    dur: "1.4s",
                                    repeatCount: "indefinite",
                                    rotate: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mpath", {
                                        href: "#edge_qc_gcp"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                        lineNumber: 1347,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                    lineNumber: 1346,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                lineNumber: 1345,
                                columnNumber: 15
                            }, this),
                            statuses.qc === 2 && statuses.embd === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                r: "4",
                                fill: "#6366f1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("animateMotion", {
                                    dur: "1.4s",
                                    repeatCount: "indefinite",
                                    rotate: "auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("mpath", {
                                        href: "#edge_qc_embd"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                        lineNumber: 1354,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                    lineNumber: 1353,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                                lineNumber: 1352,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                        lineNumber: 1268,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
                    lineNumber: 1267,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
            lineNumber: 1253,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx",
        lineNumber: 1252,
        columnNumber: 5
    }, this);
};
}}),
"[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// File: app/clients/[clientId]/dumps/[dumpId]/page.tsx
__turbopack_esm__({
    "default": (()=>PHITablesPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$ActionButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/common/ActionButton.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$ImportConfigModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/ImportConfigModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$PrimaryKeyConfigModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/PrimaryKeyConfigModal.tsx [app-ssr] (ecmascript)");
// import TableListCard from "./components/TableListCard";
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$TablesProgressCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TablesProgressCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/useApiHooks.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/apiService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$TableListCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/TableListCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$BulkTableOperationsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/components/BulkTableOperationsModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/Config.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ci/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/ai/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function PHITablesPage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { clientId, dumpId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("tables");
    const [isImportOpen, setIsImportOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPrimaryKeyConfigOpen, setIsPrimaryKeyConfigOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isTableConfigOpen, setIsTableConfigOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isBulkModalOpen, setIsBulkModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dumpDetails, setDumpDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [clientDetails, setClientDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRefreshingSourceDb, setIsRefreshingSourceDb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch client details
    const { data: cd } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}client_details/${clientId}/`, {
        queryKey: [
            "client_details",
            clientId
        ]
    });
    // Fetch dump details
    const { data: dd } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}dump_details/${clientId}/${dumpId}/`, {
        queryKey: [
            "dump_details",
            clientId,
            dumpId
        ]
    });
    // Fetch tables
    const { data: tablesData = [] } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}get_tables/${clientId}/${dumpId}/`, {
        queryKey: [
            "get_tables",
            clientId,
            dumpId
        ]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (cd) setClientDetails(cd);
    }, [
        cd
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (dd) setDumpDetails(dd);
    }, [
        dd
    ]);
    // Compute per-step counts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const out = {
            deid: {
                completed: 0,
                total: tablesData.length
            },
            qc: {
                completed: 0,
                total: tablesData.length
            },
            gcp: {
                completed: 0,
                total: tablesData.length
            },
            embd: {
                completed: 0,
                total: tablesData.length
            }
        };
        tablesData.forEach((t)=>{
            if (t.deid.status === 2) out.deid.completed++;
            if (t.qc.status === 2) out.qc.completed++;
            if (t.gcp.status === 2) out.gcp.completed++;
            if (t.embd.status === 2) out.embd.completed++;
        });
        return out;
    }, [
        tablesData
    ]);
    // Button state logic
    const canStartDeIdentification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return clientDetails?.client_presetup_config_configured && dumpDetails?.is_dump_processing_done && dumpDetails?.is_primary_key_uploaded;
    }, [
        clientDetails,
        dumpDetails
    ]);
    const canStartDumpProcessing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return clientDetails?.client_presetup_config_configured && dumpDetails?.is_primary_key_uploaded;
    }, [
        clientDetails,
        dumpDetails
    ]);
    // Get button disabled reason
    const getDeIdentificationDisabledReason = ()=>{
        if (!clientDetails?.client_presetup_config_configured) {
            return "Client presetup configuration is not complete";
        }
        if (!dumpDetails?.is_dump_processing_done) {
            return "Dump processing is not complete";
        }
        if (!dumpDetails?.is_primary_key_uploaded) {
            return "Primary key configuration is not uploaded";
        }
        return "";
    };
    const getDumpProcessingDisabledReason = ()=>{
        if (!clientDetails?.client_presetup_config_configured) {
            return "Client presetup configuration is not complete";
        }
        if (!dumpDetails?.is_primary_key_uploaded) {
            return "Primary key configuration is not uploaded";
        }
        return "";
    };
    // Action handlers
    const { isLoading: isProcessing, refetch: startProcessing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}start_whole_identification/${clientId}/${dumpId}/`, {
        queryKey: [
            "start_whole_identification",
            clientId,
            dumpId
        ],
        enabled: false
    });
    const { isLoading: isProcessingDump, refetch: startDumpProcessing } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}start_dump_processing/${clientId}/${dumpId}/`, {
        queryKey: [
            "start_dump_processing",
            clientId,
            dumpId
        ],
        enabled: false
    });
    // Use previous config API
    const { isLoading: isReusingConfig, refetch: reuseTableConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$useApiHooks$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGet"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}reuse_table_config/${clientId}/${dumpId}/`, {
        queryKey: [
            "reuse_table_config",
            clientId,
            dumpId
        ],
        enabled: false
    });
    // 2. Handler just calls the refetch
    const handleStartProcessing = ()=>{
        startProcessing();
    };
    const handleStartDumpProcessing = ()=>{
        startDumpProcessing();
    };
    const downloadConfig = async ()=>{
        try {
            const url = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchWithAuthentication"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}download_config_as_csv/${clientId}/${dumpId}/`);
            const a = document.createElement("a");
            a.href = url;
            a.download = `config_${dumpDetails.dump_id}.csv`;
            a.click();
        } catch  {}
    };
    const handleRefreshSourceDb = async ()=>{
        if (!clientId || !dumpId) return;
        setIsRefreshingSourceDb(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRequest"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"]}refresh_source_db/${clientId}/${dumpId}/`);
            // You might want to show a success message or refresh data here
            console.log("Source database refreshed successfully");
        } catch (error) {
            console.error("Failed to refresh source database:", error);
        } finally{
            setIsRefreshingSourceDb(false);
        }
    };
    if (!dumpDetails || !clientDetails) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6 text-center",
        children: "Loading…"
    }, void 0, false, {
        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
        lineNumber: 245,
        columnNumber: 46
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto p-6 space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "flex items-center space-x-3 text-sm text-gray-600 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/clients",
                        className: "hover:text-indigo-600 transition-colors duration-200 flex items-center group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1.5 rounded-md bg-gray-100 group-hover:bg-indigo-100 transition-colors duration-200 mr-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                    lineNumber: 256,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Clients"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                lineNumber: 260,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                        lineNumber: 251,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 text-gray-300",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5l7 7-7 7"
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                        lineNumber: 262,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/clients/${clientId}`,
                        className: "hover:text-indigo-600 transition-colors duration-200 flex items-center group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1.5 rounded-md bg-gray-100 group-hover:bg-indigo-100 transition-colors duration-200 mr-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: clientDetails?.client_name || 'Client'
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                lineNumber: 274,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        className: "w-5 h-5 text-gray-300",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            strokeWidth: 2,
                            d: "M9 5l7 7-7 7"
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                            lineNumber: 277,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-1.5 rounded-md bg-indigo-100 mr-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "w-4 h-4 text-indigo-600",
                                    fill: "none",
                                    stroke: "currentColor",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        strokeWidth: 2,
                                        d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 282,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                lineNumber: 280,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-indigo-700 font-semibold",
                                children: dumpDetails.dump_name
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-gray-900",
                                        children: dumpDetails.dump_name
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 294,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-6 text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 bg-green-500 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium",
                                                        children: [
                                                            "Client: ",
                                                            clientDetails?.client_name || 'Client'
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 298,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 296,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center space-x-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-2 h-2 bg-blue-500 rounded-full"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 301,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs font-medium",
                                                        children: [
                                                            "Dump ID: #",
                                                            dumpDetails.dump_id
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 302,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                lineNumber: 293,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.push(`/clients/${clientId}/dumps/${dumpId}/phi-analyzer`),
                                        className: "flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium",
                                        title: "Analyze PHI data with AI-powered tools",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-2",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                    lineNumber: 316,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 315,
                                                columnNumber: 15
                                            }, this),
                                            "PHI Analyzer"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 310,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setIsBulkModalOpen(true),
                                        className: "flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium",
                                        title: "Paste comma-separated table names to perform bulk operations",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-4 h-4 mr-2",
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: 2,
                                                    d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 327,
                                                columnNumber: 15
                                            }, this),
                                            "Bulk Operations"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleRefreshSourceDb,
                                        disabled: isRefreshingSourceDb,
                                        className: "flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors duration-200 text-sm font-medium",
                                        children: isRefreshingSourceDb ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 19
                                                }, this),
                                                "Refreshing..."
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 mr-2",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 347,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                    lineNumber: 346,
                                                    columnNumber: 19
                                                }, this),
                                                "Refresh Source Db"
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 334,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleStartProcessing,
                                        disabled: isProcessing || !canStartDeIdentification,
                                        className: "flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-sm transform hover:scale-105 disabled:transform-none relative group",
                                        title: !canStartDeIdentification ? getDeIdentificationDisabledReason() : "",
                                        children: [
                                            isProcessing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 19
                                                    }, this),
                                                    "Processing..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiPlay1"], {
                                                        className: "mr-2 text-base"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 368,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Start De-Identification"
                                                ]
                                            }, void 0, true),
                                            !canStartDeIdentification && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10",
                                                children: [
                                                    getDeIdentificationDisabledReason(),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 355,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                        lineNumber: 292,
                        columnNumber: 9
                    }, this),
                    clientDetails && dumpDetails && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xs font-semibold text-gray-700 uppercase tracking-wide mb-3",
                                children: "Configuration Status"
                            }, void 0, false, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                lineNumber: 386,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-3 h-3 rounded-full ${clientDetails.client_presetup_config_configured ? 'bg-green-500' : 'bg-red-500'}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 389,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-medium text-gray-900",
                                                        children: "Client Setup"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: clientDetails.client_presetup_config_configured ? 'Complete' : 'Incomplete'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 392,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 390,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 388,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-3 h-3 rounded-full ${dumpDetails.is_dump_processing_done ? 'bg-green-500' : 'bg-yellow-500'}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-medium text-gray-900",
                                                        children: "Dump Processing"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 401,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: dumpDetails.is_dump_processing_done ? 'Complete' : 'In Progress'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 402,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 400,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 398,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center space-x-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `w-3 h-3 rounded-full ${dumpDetails.is_primary_key_uploaded ? 'bg-green-500' : 'bg-red-500'}`
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs font-medium text-gray-900",
                                                        children: "Primary Keys"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 411,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: dumpDetails.is_primary_key_uploaded ? 'Uploaded' : 'Not Uploaded'
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 412,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 410,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 408,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                        lineNumber: 385,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-semibold text-gray-700 uppercase tracking-wide",
                                        children: "Configuration"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 425,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$ActionButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            onClick: ()=>setIsPrimaryKeyConfigOpen(true),
                                            variant: "info",
                                            size: "sm",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineImport"], {
                                                className: "w-3 h-3 text-blue-600"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 431,
                                                columnNumber: 23
                                            }, void 0),
                                            children: "Primary Key Config"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                            lineNumber: 427,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 426,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                lineNumber: 424,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-semibold text-gray-700 uppercase tracking-wide",
                                        children: "Processing"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 440,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$ActionButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            onClick: handleStartDumpProcessing,
                                            disabled: isProcessingDump || !canStartDumpProcessing,
                                            variant: "grey",
                                            size: "sm",
                                            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiPlay1"], {
                                                className: "w-3 h-3 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 447,
                                                columnNumber: 23
                                            }, void 0),
                                            title: !canStartDumpProcessing ? getDumpProcessingDisabledReason() : "",
                                            children: "Start Dump Processing"
                                        }, void 0, false, {
                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                            lineNumber: 442,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 441,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                lineNumber: 439,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-xs font-semibold text-gray-700 uppercase tracking-wide",
                                        children: "Management"
                                    }, void 0, false, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 457,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$ActionButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                onClick: ()=>{
                                                    if (dumpId) {
                                                        router.push(`/clients/${clientId}/dumps/${dumpId}/configure`);
                                                    }
                                                },
                                                disabled: !dumpId,
                                                variant: dumpId ? "info" : "secondary",
                                                size: "sm",
                                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4 text-current",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    viewBox: "0 0 24 24",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 2,
                                                        d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 470,
                                                        columnNumber: 21
                                                    }, void 0)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                    lineNumber: 469,
                                                    columnNumber: 19
                                                }, void 0),
                                                children: "Update Client"
                                            }, void 0, false, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 459,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative inline-block text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$common$2f$ActionButton$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        onClick: ()=>setIsTableConfigOpen((v)=>!v),
                                                        variant: "warning",
                                                        size: "sm",
                                                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiViewTable"], {
                                                            className: "w-4 h-4 text-gray-700"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                            lineNumber: 483,
                                                            columnNumber: 25
                                                        }, void 0),
                                                        children: "Table Config"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 17
                                                    }, this),
                                                    isTableConfigOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "py-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                                                                    onClick: ()=>{
                                                                        setIsImportOpen(true);
                                                                        setIsTableConfigOpen(false);
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ai$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AiOutlineImport"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                                            lineNumber: 494,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        " Import Config"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                                    lineNumber: 490,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2",
                                                                    onClick: ()=>{
                                                                        downloadConfig();
                                                                        setIsTableConfigOpen(false);
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiDownload"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                                            lineNumber: 500,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        " Download Config"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                                    lineNumber: 496,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 disabled:opacity-50",
                                                                    onClick: ()=>{
                                                                        reuseTableConfig();
                                                                        setIsTableConfigOpen(false);
                                                                    },
                                                                    disabled: isReusingConfig,
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiUndo"], {
                                                                            className: "w-4 h-4"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                                            lineNumber: 507,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        " Use Previous Config"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                                    lineNumber: 502,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                            lineNumber: 489,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                        lineNumber: 488,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                                lineNumber: 478,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                        lineNumber: 458,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                                lineNumber: 456,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                        lineNumber: 422,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                lineNumber: 290,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex space-x-4 border-b",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                        active: activeTab === "tables",
                        onClick: ()=>setActiveTab("tables"),
                        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CiViewTable"], {}, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                            lineNumber: 520,
                            columnNumber: 97
                        }, void 0),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "Tables"
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                            lineNumber: 521,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                        lineNumber: 520,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TabButton, {
                        active: activeTab === "progress",
                        onClick: ()=>setActiveTab("progress"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "Progress"
                        }, void 0, false, {
                            fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                            lineNumber: 524,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                        lineNumber: 523,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                lineNumber: 519,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-6",
                children: activeTab === "tables" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$TableListCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableListCard"], {
                    tablesData: tablesData,
                    clientId: clientId,
                    selectedDumpId: dumpId,
                    clientDetails: clientDetails,
                    dumpDetails: dumpDetails
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                    lineNumber: 531,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$TablesProgressCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    tablesData: tablesData
                }, void 0, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                    lineNumber: 539,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                lineNumber: 529,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$ImportConfigModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isImportOpen,
                dumpId: dumpId,
                clientId: clientId,
                onClose: ()=>setIsImportOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                lineNumber: 543,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$PrimaryKeyConfigModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isPrimaryKeyConfigOpen,
                clientId: clientId,
                dumpId: dumpId,
                onClose: ()=>setIsPrimaryKeyConfigOpen(false)
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                lineNumber: 550,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$components$2f$BulkTableOperationsModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isBulkModalOpen,
                onClose: ()=>setIsBulkModalOpen(false),
                clientId: clientId,
                dumpId: dumpId,
                tablesData: tablesData
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
                lineNumber: 557,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
        lineNumber: 248,
        columnNumber: 5
    }, this);
}
function TabButton({ active, onClick, children, icon }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("flex items-center gap-1 px-4 py-2 font-medium transition text-sm", active ? "border-b-2 border-indigo-600 text-indigo-600" : "text-gray-600 hover:text-gray-800"),
        children: [
            icon,
            " ",
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx",
        lineNumber: 580,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/components/NotificationToast.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NotificationToast": (()=>NotificationToast),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
"use client";
;
;
;
const NotificationToast = ({ message, type, onClose, duration = 5000 })=>{
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setIsVisible(false);
            setTimeout(onClose, 300); // Allow fade out animation
        }, duration);
        return ()=>clearTimeout(timer);
    }, [
        onClose,
        duration
    ]);
    const getIcon = ()=>{
        switch(type){
            case 'success':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "w-5 h-5 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/app/components/NotificationToast.tsx",
                    lineNumber: 32,
                    columnNumber: 16
                }, this);
            case 'error':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "w-5 h-5 text-red-600"
                }, void 0, false, {
                    fileName: "[project]/app/components/NotificationToast.tsx",
                    lineNumber: 34,
                    columnNumber: 16
                }, this);
            case 'warning':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "w-5 h-5 text-yellow-600"
                }, void 0, false, {
                    fileName: "[project]/app/components/NotificationToast.tsx",
                    lineNumber: 36,
                    columnNumber: 16
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "w-5 h-5 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/app/components/NotificationToast.tsx",
                    lineNumber: 38,
                    columnNumber: 16
                }, this);
        }
    };
    const getStyles = ()=>{
        switch(type){
            case 'success':
                return 'bg-green-50 border-green-200 text-green-800';
            case 'error':
                return 'bg-red-50 border-red-200 text-red-800';
            case 'warning':
                return 'bg-yellow-50 border-yellow-200 text-yellow-800';
            default:
                return 'bg-blue-50 border-blue-200 text-blue-800';
        }
    };
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `fixed top-4 right-4 p-4 rounded-lg border shadow-lg z-50 transition-all duration-300 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} ${getStyles()}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3",
            children: [
                getIcon(),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium",
                    children: message
                }, void 0, false, {
                    fileName: "[project]/app/components/NotificationToast.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>{
                        setIsVisible(false);
                        setTimeout(onClose, 300);
                    },
                    className: "ml-2 text-gray-400 hover:text-gray-600 transition-colors",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/app/components/NotificationToast.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/components/NotificationToast.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/NotificationToast.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/components/NotificationToast.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = NotificationToast;
}}),
"[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>DashboardPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$PHITables$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/PHITables.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NotificationToast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/NotificationToast.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useWebSocket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/hooks/useWebSocket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/Config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function DashboardPage() {
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    // WebSocket hook - just for notifications (only if enabled)
    const websocketResult = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSOCKET_ENABLED"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useWebSocket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWebSocket"])({
        onMessage: (message)=>{
            const notificationType = message.type === 'task_error' || message.type === 'send_task_error' ? 'error' : message.status === 'completed' ? 'success' : message.status === 'failed' ? 'error' : 'info';
            setNotifications((prev)=>[
                    ...prev,
                    {
                        id: Date.now().toString(),
                        message: message.message || `${message.task_name}: ${message.status}`,
                        type: notificationType
                    }
                ]);
        }
    }) : {
        isConnected: false,
        isConnecting: false,
        connectionError: 'WebSocket is disabled',
        connect: ()=>{},
        disconnect: ()=>{},
        send: ()=>{},
        reconnect: ()=>{}
    };
    const { isConnected } = websocketResult;
    const removeNotification = (id)=>{
        setNotifications((prev)=>prev.filter((n)=>n.id !== id));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg text-sm font-medium z-50 ${!__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSOCKET_ENABLED"] ? 'bg-gray-100 text-gray-600 border border-gray-200' : isConnected ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'}`,
                children: !__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSOCKET_ENABLED"] ? '⚪ WebSocket Disabled' : isConnected ? '🟢 Live Updates' : '🔴 Offline'
            }, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$clients$2f5b$clientId$5d2f$dumps$2f5b$dumpId$5d2f$phi_tables$2f$PHITables$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            notifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$NotificationToast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    message: notification.message,
                    type: notification.type,
                    onClose: ()=>removeNotification(notification.id)
                }, notification.id, false, {
                    fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/page.tsx",
                    lineNumber: 68,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/clients/[clientId]/dumps/[dumpId]/phi_tables/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__c742db._.js.map