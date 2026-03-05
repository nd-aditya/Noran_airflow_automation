"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FiBell, FiCheck, FiArchive, FiRefreshCw, FiX, FiAlertCircle, FiCheckCircle, FiInfo, FiAlertTriangle } from 'react-icons/fi';
import { useNotifications } from '@/app/contexts/NotificationContext';
import { formatDistanceToNow } from 'date-fns';

const NotificationDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const {
    notifications,
    stats,
    isConnected,
    isLoading,
    markAsRead,
    markAllAsRead,
    archiveNotification,
    refreshNotifications,
  } = useNotifications();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <FiCheckCircle className="h-4 w-4 text-green-500" />;
      case 'error':
        return <FiAlertCircle className="h-4 w-4 text-red-500" />;
      case 'warning':
        return <FiAlertTriangle className="h-4 w-4 text-yellow-500" />;
      default:
        return <FiInfo className="h-4 w-4 text-blue-500" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'border-l-red-500';
      case 'medium':
        return 'border-l-yellow-500';
      case 'low':
        return 'border-l-green-500';
      default:
        return 'border-l-gray-500';
    }
  };

  const unreadCount = stats?.unread || 0;
  const recentNotifications = notifications.slice(0, 10); // Show only recent 10

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Notification Bell Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        data-tooltip-id="notifications"
        data-tooltip-content="Notifications"
      >
        <FiBell className="h-5 w-5 text-gray-600" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
        {!isConnected && (
          <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-yellow-500 border-2 border-white" />
        )}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 rounded-lg bg-white shadow-lg border border-gray-200 z-50">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
              {!isConnected && (
                <div className="h-2 w-2 rounded-full bg-yellow-500" title="Disconnected" />
              )}
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={refreshNotifications}
                disabled={isLoading}
                className="p-1 rounded hover:bg-gray-100 transition-colors"
                title="Refresh"
              >
                <FiRefreshCw className={`h-4 w-4 text-gray-600 ${isLoading ? 'animate-spin' : ''}`} />
              </button>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  Mark all read
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded hover:bg-gray-100 transition-colors"
              >
                <FiX className="h-4 w-4 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Stats */}
          {stats && (
            <div className="px-4 py-2 bg-gray-50 border-b border-gray-200">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Total: {stats.total}</span>
                <span>Unread: {stats.unread}</span>
                <span>Read: {stats.read}</span>
                <span>Archived: {stats.archived}</span>
              </div>
            </div>
          )}

          {/* Notifications List */}
          <div className="max-h-96 overflow-y-auto">
            {isLoading ? (
              <div className="flex items-center justify-center p-8">
                <FiRefreshCw className="h-6 w-6 animate-spin text-gray-400" />
                <span className="ml-2 text-gray-600">Loading notifications...</span>
              </div>
            ) : recentNotifications.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-8 text-gray-500">
                <FiBell className="h-12 w-12 mb-2" />
                <p className="text-sm">No notifications yet</p>
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {recentNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 hover:bg-gray-50 transition-colors border-l-4 ${getPriorityColor(notification.priority)} ${
                      notification.status === 'unread' ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-0.5">
                        {getNotificationIcon(notification.notification_type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-medium text-gray-900 truncate">
                            {notification.title}
                          </h4>
                          <div className="flex items-center space-x-1">
                            {notification.status === 'unread' && (
                              <div className="h-2 w-2 rounded-full bg-blue-500" />
                            )}
                            <span className="text-xs text-gray-500">
                              {formatDistanceToNow(new Date(notification.created_at), { addSuffix: true })}
                            </span>
                          </div>
                        </div>
                        <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                          {notification.message}
                        </p>
                        {notification.task_name && (
                          <p className="mt-1 text-xs text-gray-500">
                            Task: {notification.task_name}
                          </p>
                        )}
                        <div className="mt-2 flex items-center space-x-2">
                          {notification.status === 'unread' && (
                            <button
                              onClick={() => markAsRead(notification.id)}
                              className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                            >
                              <FiCheck className="inline h-3 w-3 mr-1" />
                              Mark as read
                            </button>
                          )}
                          <button
                            onClick={() => archiveNotification(notification.id)}
                            className="text-xs text-gray-600 hover:text-gray-800 font-medium"
                          >
                            <FiArchive className="inline h-3 w-3 mr-1" />
                            Archive
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {recentNotifications.length > 0 && (
            <div className="p-4 border-t border-gray-200 bg-gray-50">
              <button className="w-full text-sm text-blue-600 hover:text-blue-800 font-medium">
                View all notifications
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationDropdown;
