"use client";

import React, { useState } from "react";
import PHITables from "./PHITables";
import WebSocketTest from "@/app/components/WebSocketTest";
import NotificationToast from "@/app/components/NotificationToast";
import { useWebSocket, WebSocketMessage } from "@/app/hooks/useWebSocket";
import { WEBSOCKET_ENABLED } from "@/app/api/Config";

export default function DashboardPage() {
  const [notifications, setNotifications] = useState<Array<{
    id: string;
    message: string;
    type: 'success' | 'error' | 'info' | 'warning';
  }>>([]);
  // WebSocket hook - just for notifications (only if enabled)
  const websocketResult = WEBSOCKET_ENABLED ? useWebSocket({
    onMessage: (message: WebSocketMessage) => {
      const notificationType = message.type === 'task_error' || message.type === 'send_task_error' ? 'error' : 
                             message.status === 'completed' ? 'success' : 
                             message.status === 'failed' ? 'error' : 'info';
      
      setNotifications(prev => [...prev, {
        id: Date.now().toString(),
        message: message.message || `${message.task_name}: ${message.status}`,
        type: notificationType
      }]);
    }
  }) : {
    isConnected: false,
    isConnecting: false,
    connectionError: 'WebSocket is disabled',
    connect: () => {},
    disconnect: () => {},
    send: () => {},
    reconnect: () => {},
  };
  
  const { isConnected } = websocketResult;

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="relative">
      {/* Real-time Status Indicator */}
      <div className={`fixed bottom-4 right-4 px-4 py-2 rounded-lg shadow-lg text-sm font-medium z-50 ${
        !WEBSOCKET_ENABLED 
          ? 'bg-gray-100 text-gray-600 border border-gray-200'
          : isConnected 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : 'bg-red-100 text-red-800 border border-red-200'
      }`}>
        {!WEBSOCKET_ENABLED ? '⚪ WebSocket Disabled' : isConnected ? '🟢 Live Updates' : '🔴 Offline'}
      </div>

      {/* Debug Panel */}
      {/* <div className="mb-4">
        <WebSocketTest />
      </div> */}

      {/* Main Content */}
      <PHITables />

      {/* Notification Toasts */}
      {notifications.map(notification => (
        <NotificationToast
          key={notification.id}
          message={notification.message}
          type={notification.type}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </div>
  );
}