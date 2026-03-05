"use client";

import React, { useState } from 'react';
import { useNotifications } from '@/app/contexts/NotificationContext';
import { useWebSocket, WebSocketMessage } from '@/app/hooks/useWebSocket';
import { WEBSOCKET_ENABLED } from '@/app/api/Config';

const WebSocketTest: React.FC = () => {
  const { isConnected, stats } = useNotifications();
  const [messageCount, setMessageCount] = useState(0);
  const [recentMessages, setRecentMessages] = useState<WebSocketMessage[]>([]);

  const websocketResult = WEBSOCKET_ENABLED ? useWebSocket({
    onMessage: (message) => {
      setMessageCount(prev => prev + 1);
      setRecentMessages(prev => [message, ...prev.slice(0, 4)]); // Keep last 5 messages
      console.log('WebSocket message received:', message);
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
  
  const { send, reconnect } = websocketResult;

  const sendTestMessage = () => {
    send({
      type: 'ping'
    });
  };

  const clearMessages = () => {
    setRecentMessages([]);
    setMessageCount(0);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">WebSocket Debug Panel</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className={`w-3 h-3 rounded-full ${WEBSOCKET_ENABLED ? 'bg-blue-500' : 'bg-gray-500'}`} />
          <span>WebSocket: {WEBSOCKET_ENABLED ? 'Enabled' : 'Disabled'}</span>
        </div>
        
        {!WEBSOCKET_ENABLED ? (
          <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-sm text-yellow-800">
              WebSocket functionality is disabled. Set <code className="bg-yellow-100 px-1 rounded">NEXT_PUBLIC_WEBSOCKET_ENABLED=true</code> in your .env.local file to enable real-time updates.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
              <span>Status: {isConnected ? 'Connected' : 'Disconnected'}</span>
            </div>
            
            <div>
              <span>Messages received: {messageCount}</span>
            </div>
            
            {stats && (
              <div>
                <span>Notifications: {stats.unread} unread, {stats.total} total</span>
              </div>
            )}
            
            <div className="flex space-x-2">
              <button
                onClick={sendTestMessage}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Send Ping
              </button>
              
              <button
                onClick={reconnect}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Reconnect
              </button>
              
              <button
                onClick={clearMessages}
                className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
              >
                Clear
              </button>
            </div>

            {/* Recent Messages */}
            {recentMessages.length > 0 && (
              <div>
                <h4 className="font-medium mb-2">Recent Messages:</h4>
                <div className="max-h-40 overflow-y-auto space-y-2">
                  {recentMessages.map((msg, index) => (
                    <div key={index} className="p-2 bg-white rounded border text-xs">
                      <div className="font-mono">
                        <strong>Type:</strong> {msg.type}
                        {msg.task_name && <span> | <strong>Task:</strong> {msg.task_name}</span>}
                        {msg.status && <span> | <strong>Status:</strong> {msg.status}</span>}
                        {msg.message && <span> | <strong>Message:</strong> {msg.message}</span>}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default WebSocketTest;
