"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import { useWebSocket, WebSocketMessage, NotificationData, NotificationStats } from '@/app/hooks/useWebSocket';
import { getRequest } from '@/app/utils/apiService';
import { API_URL, WEBSOCKET_ENABLED } from '@/app/api/Config';

const IS_ONPREM = process.env.NEXT_PUBLIC_IS_ONPREM || "";

interface NotificationContextType {
  notifications: NotificationData[];
  stats: NotificationStats | null;
  isConnected: boolean;
  isLoading: boolean;
  markAsRead: (id: number) => Promise<void>;
  markAllAsRead: () => Promise<void>;
  archiveNotification: (id: number) => Promise<void>;
  refreshNotifications: () => Promise<void>;
  clearNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

interface NotificationProviderProps {
  children: React.ReactNode;
}

export const NotificationProvider: React.FC<NotificationProviderProps> = ({ children }) => {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);
  const [stats, setStats] = useState<NotificationStats | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Use the proper API_URL from Config

  // Load notifications from API
  const loadNotifications = useCallback(async () => {
    // Skip API calls in on-prem mode
    if (IS_ONPREM === "true") {
      setNotifications([]);
      return;
    }
    
    try {
      setIsLoading(true);
      const response = await getRequest<{ results: NotificationData[] }>(`${API_URL}notifications/`);
      setNotifications(response.results || []);
    } catch (error) {
      console.error('Error loading notifications:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Load notification stats
  const loadStats = useCallback(async () => {
    // Skip API calls in on-prem mode
    if (IS_ONPREM === "true") {
      setStats(null);
      return;
    }
    
    try {
      const response = await getRequest<NotificationStats>(`${API_URL}notifications/stats/`);
      setStats(response);
    } catch (error) {
      console.error('Error loading notification stats:', error);
    }
  }, []);

  // Mark notification as read
  const markAsRead = useCallback(async (id: number) => {
    // Skip API calls in on-prem mode
    if (IS_ONPREM === "true") {
      setNotifications(prev => 
        prev.map(notification => 
          notification.id === id 
            ? { ...notification, status: 'read' as const }
            : notification
        )
      );
      return;
    }
    
    try {
      await getRequest(`${API_URL}notifications/${id}/mark-read/`);
      setNotifications(prev => 
        prev.map(notification => 
          notification.id === id 
            ? { ...notification, status: 'read' as const }
            : notification
        )
      );
      // Refresh stats
      loadStats();
    } catch (error) {
      console.error('Error marking notification as read:', error);
    }
  }, [loadStats]);

  // Mark all notifications as read
  const markAllAsRead = useCallback(async () => {
    // Skip API calls in on-prem mode
    if (IS_ONPREM === "true") {
      setNotifications(prev => 
        prev.map(notification => ({ ...notification, status: 'read' as const }))
      );
      return;
    }
    
    try {
      await getRequest(`${API_URL}notifications/mark-all-read/`);
      setNotifications(prev => 
        prev.map(notification => ({ ...notification, status: 'read' as const }))
      );
      // Refresh stats
      loadStats();
    } catch (error) {
      console.error('Error marking all notifications as read:', error);
    }
  }, [loadStats]);

  // Archive notification
  const archiveNotification = useCallback(async (id: number) => {
    // Skip API calls in on-prem mode
    if (IS_ONPREM === "true") {
      setNotifications(prev => 
        prev.map(notification => 
          notification.id === id 
            ? { ...notification, status: 'archived' as const }
            : notification
        )
      );
      return;
    }
    
    try {
      await getRequest(`${API_URL}notifications/${id}/archive/`);
      setNotifications(prev => 
        prev.map(notification => 
          notification.id === id 
            ? { ...notification, status: 'archived' as const }
            : notification
        )
      );
      // Refresh stats
      loadStats();
    } catch (error) {
      console.error('Error archiving notification:', error);
    }
  }, [loadStats]);

  // Refresh notifications
  const refreshNotifications = useCallback(async () => {
    await Promise.all([loadNotifications(), loadStats()]);
  }, [loadNotifications, loadStats]);

  // Clear notifications (for testing)
  const clearNotifications = useCallback(() => {
    setNotifications([]);
    setStats(null);
  }, []);

  // Handle WebSocket messages - only if WebSocket is enabled
  const handleWebSocketMessage = useCallback((message: WebSocketMessage) => {
    if (!WEBSOCKET_ENABLED) {
      return; // Skip all WebSocket message processing if disabled
    }
    
    console.log('Processing WebSocket message:', message);
    
    switch (message.type) {
      case 'task_status':
      case 'send_task_status':
        const statusMessage = message.message || `${message.task_name}: ${message.status}`;
        toast.info(statusMessage, {
          position: "top-right",
          autoClose: 5000,
        });
        break;
      
      case 'task_progress':
      case 'send_task_progress':
        if (message.progress && message.progress % 25 === 0) { // Show every 25%
          toast.info(`${message.task_name}: ${message.progress}% complete`, {
            position: "top-right",
            autoClose: 3000,
          });
        }
        break;
      
      case 'task_error':
      case 'send_task_error':
        const errorMessage = message.error || message.message || `${message.task_name}: Error occurred`;
        toast.error(errorMessage, {
          position: "top-right",
          autoClose: 8000,
        });
        break;
      
      case 'connection':
        if (message.status === 'connected') {
          toast.success('Connected to real-time updates', {
            position: "top-right",
            autoClose: 3000,
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
  }, [refreshNotifications]);

  // Handle WebSocket connection status - only if WebSocket is enabled
  const handleConnectionStatus = useCallback((connected: boolean) => {
    if (!WEBSOCKET_ENABLED) {
      return; // Skip connection status handling if disabled
    }
    
    if (!connected) {
      toast.warning('Disconnected from real-time updates', {
        position: "top-right",
        autoClose: 5000,
      });
    }
  }, []);

  // WebSocket hook - only use if WebSocket is enabled
  const websocketResult = WEBSOCKET_ENABLED ? useWebSocket({
    onMessage: handleWebSocketMessage,
    onConnectionChange: handleConnectionStatus,
    autoConnect: true,
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

  // Initialize data on mount
  useEffect(() => {
    refreshNotifications();
  }, [refreshNotifications]);

  const value: NotificationContextType = {
    notifications,
    stats,
    isConnected,
    isLoading,
    markAsRead,
    markAllAsRead,
    archiveNotification,
    refreshNotifications,
    clearNotifications,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
