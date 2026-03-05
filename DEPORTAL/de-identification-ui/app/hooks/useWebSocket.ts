import { useEffect, useRef, useState, useCallback } from 'react';
import { API_URL, WEBSOCKET_ENABLED } from '@/app/api/Config';

export interface WebSocketMessage {
  type: 'connection' | 'task_status' | 'task_progress' | 'task_error' | 'pong' | 'subscription' | 'ping' | 'subscribe' | 'send_task_status' | 'send_task_progress' | 'send_task_error';
  status?: string;
  task_name?: string;
  progress?: number;
  message?: string;
  error?: string;
  error_code?: string;
  details?: any;
  task_type?: string;
  client_id?: number;
  dump_id?: number;
  timestamp?: string;
}

export interface NotificationData {
  id: number;
  title: string;
  message: string;
  task_name?: string;
  notification_type: 'info' | 'success' | 'warning' | 'error';
  priority: 'low' | 'medium' | 'high';
  status: 'unread' | 'read' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface NotificationStats {
  total: number;
  unread: number;
  read: number;
  archived: number;
}

interface UseWebSocketOptions {
  onMessage?: (message: WebSocketMessage) => void;
  onConnectionChange?: (connected: boolean) => void;
  autoConnect?: boolean;
  reconnectAttempts?: number;
  reconnectInterval?: number;
  debug?: boolean;
}

export function useWebSocket(options: UseWebSocketOptions = {}) {
  // If WebSocket is disabled, return disabled state immediately without any hooks
  if (!WEBSOCKET_ENABLED) {
    return {
      isConnected: false,
      isConnecting: false,
      connectionError: 'WebSocket is disabled',
      connect: () => {},
      disconnect: () => {},
      send: () => {},
      reconnect: () => {},
    };
  }

  const {
    onMessage,
    onConnectionChange,
    autoConnect = true,
    reconnectAttempts = 5,
    reconnectInterval = 2000,
    debug = true,
  } = options;

  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState<string | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const reconnectCountRef = useRef(0);
  const isMountedRef = useRef(true);
  const lastConnectAttemptRef = useRef<number>(0);

  const log = useCallback((message: string, ...args: any[]) => {
    if (debug) {
      console.log(`[WebSocket] ${message}`, ...args);
    }
  }, [debug]);

  const getWebSocketUrl = useCallback((): string => {
    const apiUrl = API_URL.replace(/\/$/, ''); // Remove trailing slash if present
    
    if (apiUrl.startsWith('https://')) {
      return apiUrl.replace('https://', 'wss://') + '/ws/tasks/';
    } else if (apiUrl.startsWith('http://')) {
      return apiUrl.replace('http://', 'ws://') + '/ws/tasks/';
    }
    
    // Default fallback
    return 'ws://localhost:13800/ws/tasks/';
  }, []);

  const connect = useCallback(() => {
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
      ws.onopen = (event) => {
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
        setTimeout(() => {
          if (ws.readyState === WebSocket.OPEN && isMountedRef.current) {
            log('Sending initial messages...');
            try {
              ws.send(JSON.stringify({ type: 'ping' }));
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

      ws.onmessage = (event) => {
        if (!isMountedRef.current) return;
        
        try {
          const message: WebSocketMessage = JSON.parse(event.data);
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

      ws.onclose = (event) => {
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

      ws.onerror = (error) => {
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
  }, [getWebSocketUrl, onMessage, onConnectionChange, reconnectAttempts, isConnecting, log]);

  const scheduleReconnect = useCallback(() => {
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
    
    reconnectTimeoutRef.current = setTimeout(() => {
      if (isMountedRef.current) {
        connect();
      }
    }, delay);
  }, [reconnectAttempts, reconnectInterval, connect, log]);

  const disconnect = useCallback(() => {
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
  }, [onConnectionChange, reconnectAttempts, log]);

  const send = useCallback((message: WebSocketMessage) => {
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
  }, [log]);

  // Auto-connect on mount
  useEffect(() => {
    if (autoConnect) {
      // Add a small delay to ensure component is fully mounted
      const timer = setTimeout(() => {
        if (isMountedRef.current) {
          connect();
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }

    return () => {
      isMountedRef.current = false;
      disconnect();
    };
  }, [autoConnect, connect, disconnect]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
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
    reconnect: connect,
  };
}
