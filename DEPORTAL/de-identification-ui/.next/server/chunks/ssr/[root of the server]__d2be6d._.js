module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/providers/QueryProvider.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "QueryProvider": (()=>QueryProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function QueryProvider({ children }) {
    const [queryClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClient"]({
            queryCache: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryCache"]()
        }));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
        client: queryClient,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/providers/QueryProvider.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/api/Config.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "API_URL": (()=>API_URL),
    "AUTH_URL": (()=>AUTH_URL),
    "WEBSOCKET_ENABLED": (()=>WEBSOCKET_ENABLED)
});
const RAW_API_URL = ("TURBOPACK compile-time value", "http://localhost:13800") || "http://localhost:13800";
const API_URL = RAW_API_URL.endsWith("/") ? RAW_API_URL : `${RAW_API_URL}/`;
const WEBSOCKET_ENABLED = process.env.NEXT_PUBLIC_WEBSOCKET_ENABLED === 'true';
// Debug logging
console.log('Config - RAW_API_URL:', RAW_API_URL);
console.log('Config - API_URL:', API_URL);
console.log('Config - WEBSOCKET_ENABLED:', WEBSOCKET_ENABLED);
const RAW_AUTH_URL = ("TURBOPACK compile-time value", "http://localhost:13800/auth/");
const AUTH_URL = ("TURBOPACK compile-time truthy", 1) ? RAW_AUTH_URL.endsWith("/") ? RAW_AUTH_URL : `${RAW_AUTH_URL}/` : ("TURBOPACK unreachable", undefined);
}}),
"[project]/app/hooks/useWebSocket.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useWebSocket": (()=>useWebSocket)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/Config.ts [app-ssr] (ecmascript)");
;
;
function useWebSocket(options = {}) {
    // If WebSocket is disabled, return disabled state immediately without any hooks
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSOCKET_ENABLED"]) {
        return {
            isConnected: false,
            isConnecting: false,
            connectionError: 'WebSocket is disabled',
            connect: ()=>{},
            disconnect: ()=>{},
            send: ()=>{},
            reconnect: ()=>{}
        };
    }
    const { onMessage, onConnectionChange, autoConnect = true, reconnectAttempts = 5, reconnectInterval = 2000, debug = true } = options;
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isConnecting, setIsConnecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [connectionError, setConnectionError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const wsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectCountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isMountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    const lastConnectAttemptRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const log = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message, ...args)=>{
        if (debug) {
            console.log(`[WebSocket] ${message}`, ...args);
        }
    }, [
        debug
    ]);
    const getWebSocketUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const apiUrl = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["API_URL"].replace(/\/$/, ''); // Remove trailing slash if present
        if (apiUrl.startsWith('https://')) {
            return apiUrl.replace('https://', 'wss://') + '/ws/tasks/';
        } else if (apiUrl.startsWith('http://')) {
            return apiUrl.replace('http://', 'ws://') + '/ws/tasks/';
        }
        // Default fallback
        return 'ws://localhost:13800/ws/tasks/';
    }, []);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Prevent rapid reconnection attempts
        const now = Date.now();
        if (now - lastConnectAttemptRef.current < 1000) {
            log('Connection attempt too soon, skipping...');
            return;
        }
        lastConnectAttemptRef.current = now;
        if (wsRef.current?.readyState === WebSocket.OPEN || isConnecting) {
            log('Already connected or connecting, skipping...');
            return;
        }
        if (!isMountedRef.current) {
            log('Component unmounted, skipping connection');
            return;
        }
        // Clean up existing connection
        if (wsRef.current) {
            wsRef.current.close();
            wsRef.current = null;
        }
        setIsConnecting(true);
        setConnectionError(null);
        const wsUrl = getWebSocketUrl();
        log('Attempting to connect to WebSocket:', wsUrl);
        try {
            const ws = new WebSocket(wsUrl);
            wsRef.current = ws;
            // Set up event handlers immediately
            ws.onopen = (event)=>{
                if (!isMountedRef.current) {
                    log('Component unmounted during connection, closing...');
                    ws.close();
                    return;
                }
                log('WebSocket connected successfully', event);
                setIsConnected(true);
                setIsConnecting(false);
                setConnectionError(null);
                reconnectCountRef.current = 0;
                onConnectionChange?.(true);
                // Send initial messages with a small delay
                setTimeout(()=>{
                    if (ws.readyState === WebSocket.OPEN && isMountedRef.current) {
                        log('Sending initial messages...');
                        try {
                            ws.send(JSON.stringify({
                                type: 'ping'
                            }));
                            ws.send(JSON.stringify({
                                type: 'subscribe',
                                task_type: 'deidentification'
                            }));
                        } catch (error) {
                            log('Error sending initial messages:', error);
                        }
                    }
                }, 100);
            };
            ws.onmessage = (event)=>{
                if (!isMountedRef.current) return;
                try {
                    const message = JSON.parse(event.data);
                    log('Received message:', message);
                    // Handle pong responses
                    if (message.type === 'pong') {
                        log('Received pong');
                        return;
                    }
                    // Call general message handler
                    onMessage?.(message);
                } catch (error) {
                    log('Error parsing WebSocket message:', error, 'Raw data:', event.data);
                }
            };
            ws.onclose = (event)=>{
                if (!isMountedRef.current) return;
                log('WebSocket disconnected:', {
                    code: event.code,
                    reason: event.reason,
                    wasClean: event.wasClean
                });
                setIsConnected(false);
                setIsConnecting(false);
                onConnectionChange?.(false);
                // Only attempt to reconnect if it wasn't a clean close and we haven't exceeded max attempts
                if (!event.wasClean && event.code !== 1000 && reconnectCountRef.current < reconnectAttempts) {
                    log(`Scheduling reconnection (attempt ${reconnectCountRef.current + 1}/${reconnectAttempts})...`);
                    scheduleReconnect();
                } else if (event.wasClean || event.code === 1000) {
                    log('WebSocket closed cleanly');
                } else {
                    log('Max reconnection attempts reached or connection closed with error');
                    setConnectionError(`Connection failed after ${reconnectAttempts} attempts`);
                }
            };
            ws.onerror = (error)=>{
                if (!isMountedRef.current) return;
                log('WebSocket error:', error);
                log('WebSocket URL was:', wsUrl);
                setIsConnected(false);
                setIsConnecting(false);
                setConnectionError('WebSocket connection error');
                onConnectionChange?.(false);
            };
        } catch (error) {
            if (!isMountedRef.current) return;
            log('Error creating WebSocket connection:', error);
            setIsConnecting(false);
            setConnectionError(`Failed to create WebSocket: ${error}`);
            onConnectionChange?.(false);
            scheduleReconnect();
        }
    }, [
        getWebSocketUrl,
        onMessage,
        onConnectionChange,
        reconnectAttempts,
        isConnecting,
        log
    ]);
    const scheduleReconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!isMountedRef.current || reconnectCountRef.current >= reconnectAttempts) {
            return;
        }
        // Clear any existing timeout
        if (reconnectTimeoutRef.current) {
            clearTimeout(reconnectTimeoutRef.current);
        }
        reconnectCountRef.current++;
        const delay = Math.min(reconnectInterval * Math.pow(1.5, reconnectCountRef.current - 1), 30000); // Max 30 seconds
        log(`Attempting to reconnect in ${delay}ms (attempt ${reconnectCountRef.current}/${reconnectAttempts})`);
        reconnectTimeoutRef.current = setTimeout(()=>{
            if (isMountedRef.current) {
                connect();
            }
        }, delay);
    }, [
        reconnectAttempts,
        reconnectInterval,
        connect,
        log
    ]);
    const disconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        log('Disconnecting WebSocket...');
        if (reconnectTimeoutRef.current) {
            clearTimeout(reconnectTimeoutRef.current);
            reconnectTimeoutRef.current = null;
        }
        if (wsRef.current) {
            wsRef.current.close(1000, 'Client disconnect');
            wsRef.current = null;
        }
        setIsConnected(false);
        setIsConnecting(false);
        setConnectionError(null);
        reconnectCountRef.current = reconnectAttempts; // Prevent reconnection
        onConnectionChange?.(false);
    }, [
        onConnectionChange,
        reconnectAttempts,
        log
    ]);
    const send = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message)=>{
        if (wsRef.current?.readyState === WebSocket.OPEN) {
            try {
                wsRef.current.send(JSON.stringify(message));
                log('Message sent:', message);
            } catch (error) {
                log('Error sending message:', error);
            }
        } else {
            log('WebSocket is not connected. Message not sent:', message);
        }
    }, [
        log
    ]);
    // Auto-connect on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (autoConnect) {
            // Add a small delay to ensure component is fully mounted
            const timer = setTimeout(()=>{
                if (isMountedRef.current) {
                    connect();
                }
            }, 100);
            return ()=>clearTimeout(timer);
        }
        return ()=>{
            isMountedRef.current = false;
            disconnect();
        };
    }, [
        autoConnect,
        connect,
        disconnect
    ]);
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            isMountedRef.current = false;
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
            }
        };
    }, []);
    return {
        isConnected,
        isConnecting,
        connectionError,
        connect,
        disconnect,
        send,
        reconnect: connect
    };
}
}}),
"[project]/app/utils/clientCookieUtils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/**
 * Checks if the code is running in the browser.
 */ __turbopack_esm__({
    "deleteCookie": (()=>deleteCookie),
    "getCookie": (()=>getCookie),
    "setCookie": (()=>setCookie)
});
const isBrowser = "undefined" !== "undefined";
function setCookie(name, value, days) {
    if ("TURBOPACK compile-time truthy", 1) return; // Prevent execution during SSR
    "TURBOPACK unreachable";
    const date = undefined;
    const expires = undefined;
    const serializedValue = undefined;
}
function getCookie(name) {
    if ("TURBOPACK compile-time truthy", 1) return undefined; // Prevent execution during SSR
    "TURBOPACK unreachable";
    const nameEQ = undefined;
    const ca = undefined;
    let c;
}
function deleteCookie(name) {
    if ("TURBOPACK compile-time truthy", 1) return; // Prevent execution during SSR
    "TURBOPACK unreachable";
}
}}),
"[project]/app/api/TokenManager.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "tokenManager": (()=>tokenManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$clientCookieUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/clientCookieUtils.ts [app-ssr] (ecmascript)");
;
class TokenManager {
    accessToken = null;
    getToken() {
        if (!this.accessToken) {
            const tokenFromCookie = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$clientCookieUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCookie"])("authToken");
            if (tokenFromCookie && typeof tokenFromCookie === 'string' && tokenFromCookie.trim() !== '') {
                this.accessToken = tokenFromCookie;
            }
        }
        return this.accessToken;
    }
    setToken(token) {
        if (token && typeof token === 'string' && token.trim() !== '') {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$clientCookieUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCookie"])("authToken", token, 0.2);
            this.accessToken = token;
        } else {
            console.warn('Invalid token provided to setToken:', token);
        }
    }
    clearToken() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$clientCookieUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteCookie"])("authToken");
        this.accessToken = null;
    }
    clearRefreshToken() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$clientCookieUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteCookie"])("nd-refreshToken");
    }
    logout() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$clientCookieUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteCookie"])("nd-refreshToken");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$clientCookieUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteCookie"])("authToken");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$clientCookieUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteCookie"])("sessionId");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$clientCookieUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteCookie"])("user");
        this.accessToken = null;
    }
    isTokenValid() {
        const token = this.getToken();
        return !!(token && typeof token === 'string' && token.trim() !== '');
    }
}
const tokenManager = new TokenManager();
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/os [external] (os, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("os", () => require("os"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("events", () => require("events"));

module.exports = mod;
}}),
"[project]/app/utils/apiService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// src/api/apiService.ts
__turbopack_esm__({
    "Status": (()=>Status),
    "alert": (()=>alert),
    "debugAuthStatus": (()=>debugAuthStatus),
    "deleteRequest": (()=>deleteRequest),
    "fetchWithAuthentication": (()=>fetchWithAuthentication),
    "getCustomHeaders": (()=>getCustomHeaders),
    "getRequest": (()=>getRequest),
    "handleAuthError": (()=>handleAuthError),
    "isAuthenticated": (()=>isAuthenticated),
    "postRequest": (()=>postRequest),
    "putRequest": (()=>putRequest),
    "refreshAccessToken": (()=>refreshAccessToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$TokenManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/TokenManager.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$clientCookieUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/clientCookieUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
;
;
;
const IS_ONPREM = ("TURBOPACK compile-time value", "true") || "";
const isAuthenticated = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        return true; // Skip auth check in on-prem mode
    }
    "TURBOPACK unreachable";
};
const handleAuthError = (error)=>{
    console.error('Authentication error:', error);
    if ("TURBOPACK compile-time truthy", 1) {
        return; // Skip auth handling in on-prem mode
    }
    "TURBOPACK unreachable";
};
const debugAuthStatus = ()=>{
    console.log('=== Authentication Debug Info ===');
    console.log('IS_ONPREM:', IS_ONPREM);
    console.log('isAuthenticated():', isAuthenticated());
    console.log('tokenManager.getToken():', __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$TokenManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenManager"].getToken() ? '***' : 'null');
    console.log('tokenManager.isTokenValid():', __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$TokenManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenManager"].isTokenValid());
    console.log('localStorage.getItem("user-email"):', localStorage.getItem("user-email"));
    console.log('document.cookie:', document.cookie);
    console.log('================================');
};
var Status = /*#__PURE__*/ function(Status) {
    Status["SUCCESS"] = "Success";
    Status["FAILED"] = "Failed";
    return Status;
}({});
// Base Axios instance with default headers
const apiClient = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    headers: {
        api_version: "v1",
        "Content-Type": "application/json"
    }
});
// Axios request interceptor to add access token
apiClient.interceptors.request.use((config)=>{
    const accessToken = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$TokenManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenManager"].getToken();
    if (accessToken && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$TokenManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenManager"].isTokenValid()) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else {
        console.warn('No valid token available for request interceptor');
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
// Axios response interceptor to handle 401 errors
apiClient.interceptors.response.use((response)=>response, async (error)=>{
    const originalRequest = error.config;
    console.log(error);
    // Skip token refresh in on-prem mode
    if ("TURBOPACK compile-time truthy", 1) {
        return Promise.reject(error);
    }
    "TURBOPACK unreachable";
});
const apiClientNoIntercep = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    headers: {
        api_version: "v1",
        "Content-Type": "application/json"
    }
});
const refreshAccessToken = async ()=>{
    // Skip token refresh in on-prem mode
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    "TURBOPACK unreachable";
};
const postRequest = async (url, data, headers, withCredentials = false, useInterceptor = true)=>{
    try {
        let client = apiClientNoIntercep;
        if (useInterceptor) {
            client = apiClient;
        }
        const response = await client.post(url, data, {
            headers: {
                ...headers,
                ...getCustomHeaders()
            },
            withCredentials
        });
        // Axios already handles 4xx and 5xx status codes by throwing errors
        // Only successful responses (2xx) reach this point
        const res = response.data;
        return res;
    } catch (error) {
        handleError(error);
        // Let the error propagate to be handled by React Query or the component
        throw parseErrorMessage(error);
    }
};
const getCustomHeaders = ()=>{
    const token = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$TokenManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenManager"].getToken();
    const headers = {
        user_id: localStorage.getItem("user-email")
    };
    if (token && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$TokenManager$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["tokenManager"].isTokenValid()) {
        headers.Authorization = `Bearer ${token}`;
    } else {
        console.warn('No valid token available for API request');
    }
    return headers;
};
const getRequest = async (url, headers)=>{
    try {
        console.log('getRequest - URL:', url);
        console.log('getRequest - URL type:', typeof url);
        console.log('getRequest - URL length:', url?.length);
        if (!url || typeof url !== 'string') {
            throw new Error(`Invalid URL: ${url}`);
        }
        // Check if we have a valid token before making the request
        if (!isAuthenticated()) {
            console.warn('User not authenticated, redirecting to login');
            handleAuthError(new Error("User not authenticated"));
            throw new Error("User not authenticated");
        }
        const response = await apiClient.get(url, {
            headers: {
                ...headers,
                ...getCustomHeaders()
            }
        });
        // Axios already handles 4xx and 5xx status codes by throwing errors
        // Only successful responses (2xx) reach this point
        const res = response.data;
        return res;
    } catch (error) {
        console.error('getRequest error:', error);
        // If it's a 401 error, try to refresh the token
        if (error.response?.status === 401) {
            console.log('401 error detected, attempting token refresh');
            try {
                const newToken = await refreshAccessToken();
                if (newToken) {
                    console.log('Token refreshed successfully, retrying request');
                    // Retry the request with the new token
                    const response = await apiClient.get(url, {
                        headers: {
                            ...headers,
                            ...getCustomHeaders()
                        }
                    });
                    return response.data;
                } else {
                    console.log('Token refresh failed, handling auth error');
                    handleAuthError(error);
                }
            } catch (refreshError) {
                console.error('Token refresh failed:', refreshError);
                handleAuthError(refreshError);
            }
        }
        throw parseErrorMessage(error);
    }
};
const putRequest = async (url, data, headers)=>{
    try {
        const response = await apiClient.put(url, data, {
            headers: {
                ...headers,
                ...getCustomHeaders()
            }
        });
        // Axios already handles 4xx and 5xx status codes by throwing errors
        // Only successful responses (2xx) reach this point
        const res = response.data;
        return res;
    } catch (error) {
        handleError(error);
        throw parseErrorMessage(error);
    }
};
const deleteRequest = async (url, headers)=>{
    try {
        const response = await apiClient.delete(url, {
            headers: {
                ...headers,
                ...getCustomHeaders()
            }
        });
        // Axios already handles 4xx and 5xx status codes by throwing errors
        // Only successful responses (2xx) reach this point
        const res = response.data;
        return res;
    } catch (error) {
        handleError(error);
        throw parseErrorMessage(error);
    }
};
// Error handling function
const handleError = (error)=>{
    alert(parseErrorMessageStr(error) || "unkown error occured");
    console.error("API Error:", error);
};
const alert = (error)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error, {
        position: "top-right",
        className: "bg-red-500 text-white justify-center pl-3 flex"
    });
};
const parseErrorMessage = (error)=>{
    if (error?.response?.data?.detail) {
        if (typeof error?.response?.data?.detailVar === "string") return new Error(error.response.data.detail);
        else return new Error(error.message);
    } else if (error?.response?.data?.error) {
        return new Error(error.response.data.error);
    } else if (error?.message) {
        return new Error(error.message);
    } else {
        return new Error("An unknown error occurred");
    }
};
const parseErrorMessageStr = (error)=>{
    console.log(error?.response);
    if (error?.response?.data?.message) {
        if (typeof error?.response?.data?.message === "string") return error.response.data.message;
        else return error.message;
    } else if (error?.response?.data?.error) {
        return error.response.data.error;
    } else if (error?.message) {
        return error.message;
    } else {
        return "An unknown error occurred";
    }
};
async function fetchWithAuthentication(url) {
    try {
        const response = await apiClient.get(url, {
            headers: {
                ...getCustomHeaders()
            },
            responseType: "blob"
        });
        // Axios already handles 4xx and 5xx status codes by throwing errors
        // Only successful responses (2xx) reach this point
        // Create and return a Blob URL
        return URL.createObjectURL(response.data);
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unexpected error occurred");
    }
}
}}),
"[project]/app/contexts/NotificationContext.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "NotificationProvider": (()=>NotificationProvider),
    "useNotifications": (()=>useNotifications)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-toastify/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useWebSocket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/hooks/useWebSocket.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utils$2f$apiService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/utils/apiService.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/api/Config.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const IS_ONPREM = ("TURBOPACK compile-time value", "true") || "";
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useNotifications = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotifications must be used within a NotificationProvider');
    }
    return context;
};
const NotificationProvider = ({ children })=>{
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Use the proper API_URL from Config
    // Load notifications from API
    const loadNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        // Skip API calls in on-prem mode
        if ("TURBOPACK compile-time truthy", 1) {
            setNotifications([]);
            return;
        }
        "TURBOPACK unreachable";
    }, []);
    // Load notification stats
    const loadStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        // Skip API calls in on-prem mode
        if ("TURBOPACK compile-time truthy", 1) {
            setStats(null);
            return;
        }
        "TURBOPACK unreachable";
    }, []);
    // Mark notification as read
    const markAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        // Skip API calls in on-prem mode
        if ("TURBOPACK compile-time truthy", 1) {
            setNotifications((prev)=>prev.map((notification)=>notification.id === id ? {
                        ...notification,
                        status: 'read'
                    } : notification));
            return;
        }
        "TURBOPACK unreachable";
    }, [
        loadStats
    ]);
    // Mark all notifications as read
    const markAllAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        // Skip API calls in on-prem mode
        if ("TURBOPACK compile-time truthy", 1) {
            setNotifications((prev)=>prev.map((notification)=>({
                        ...notification,
                        status: 'read'
                    })));
            return;
        }
        "TURBOPACK unreachable";
    }, [
        loadStats
    ]);
    // Archive notification
    const archiveNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (id)=>{
        // Skip API calls in on-prem mode
        if ("TURBOPACK compile-time truthy", 1) {
            setNotifications((prev)=>prev.map((notification)=>notification.id === id ? {
                        ...notification,
                        status: 'archived'
                    } : notification));
            return;
        }
        "TURBOPACK unreachable";
    }, [
        loadStats
    ]);
    // Refresh notifications
    const refreshNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        await Promise.all([
            loadNotifications(),
            loadStats()
        ]);
    }, [
        loadNotifications,
        loadStats
    ]);
    // Clear notifications (for testing)
    const clearNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setNotifications([]);
        setStats(null);
    }, []);
    // Handle WebSocket messages - only if WebSocket is enabled
    const handleWebSocketMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSOCKET_ENABLED"]) {
            return; // Skip all WebSocket message processing if disabled
        }
        console.log('Processing WebSocket message:', message);
        switch(message.type){
            case 'task_status':
            case 'send_task_status':
                const statusMessage = message.message || `${message.task_name}: ${message.status}`;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(statusMessage, {
                    position: "top-right",
                    autoClose: 5000
                });
                break;
            case 'task_progress':
            case 'send_task_progress':
                if (message.progress && message.progress % 25 === 0) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info(`${message.task_name}: ${message.progress}% complete`, {
                        position: "top-right",
                        autoClose: 3000
                    });
                }
                break;
            case 'task_error':
            case 'send_task_error':
                const errorMessage = message.error || message.message || `${message.task_name}: Error occurred`;
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(errorMessage, {
                    position: "top-right",
                    autoClose: 8000
                });
                break;
            case 'connection':
                if (message.status === 'connected') {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success('Connected to real-time updates', {
                        position: "top-right",
                        autoClose: 3000
                    });
                }
                break;
            case 'subscription':
                console.log('Subscription status:', message.status);
                break;
            case 'pong':
                console.log('Received pong from server');
                break;
            default:
                console.log('Unhandled message type:', message.type);
                break;
        }
        // Refresh notifications when we receive any message
        refreshNotifications();
    }, [
        refreshNotifications
    ]);
    // Handle WebSocket connection status - only if WebSocket is enabled
    const handleConnectionStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((connected)=>{
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSOCKET_ENABLED"]) {
            return; // Skip connection status handling if disabled
        }
        if (!connected) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].warning('Disconnected from real-time updates', {
                position: "top-right",
                autoClose: 5000
            });
        }
    }, []);
    // WebSocket hook - only use if WebSocket is enabled
    const websocketResult = __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$api$2f$Config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WEBSOCKET_ENABLED"] ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$hooks$2f$useWebSocket$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWebSocket"])({
        onMessage: handleWebSocketMessage,
        onConnectionChange: handleConnectionStatus,
        autoConnect: true
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
    // Initialize data on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        refreshNotifications();
    }, [
        refreshNotifications
    ]);
    const value = {
        notifications,
        stats,
        isConnected,
        isLoading,
        markAsRead,
        markAllAsRead,
        archiveNotification,
        refreshNotifications,
        clearNotifications
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/contexts/NotificationContext.tsx",
        lineNumber: 284,
        columnNumber: 5
    }, this);
};
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__d2be6d._.js.map