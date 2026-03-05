const RAW_API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:13800";
export const API_URL = RAW_API_URL.endsWith("/") ? RAW_API_URL : `${RAW_API_URL}/`;

// WebSocket Configuration
export const WEBSOCKET_ENABLED = process.env.NEXT_PUBLIC_WEBSOCKET_ENABLED === 'true';

// Debug logging
console.log('Config - RAW_API_URL:', RAW_API_URL);
console.log('Config - API_URL:', API_URL);
console.log('Config - WEBSOCKET_ENABLED:', WEBSOCKET_ENABLED);

const RAW_AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;
export const AUTH_URL = RAW_AUTH_URL
  ? (RAW_AUTH_URL.endsWith("/") ? RAW_AUTH_URL : `${RAW_AUTH_URL}/`)
  : `${API_URL}auth/`;
