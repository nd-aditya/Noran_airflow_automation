import React from 'react';
import clsx from 'clsx';

interface ActionButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'grey';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  title?: string;
  fullWidth?: boolean;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  disabled = false,
  variant = 'secondary',
  size = 'md',
  icon,
  children,
  className = '',
  title,
  fullWidth = false,
}) => {
  const baseClasses = 'flex items-center justify-center font-medium transition-all duration-200 group relative rounded-lg';
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105',
    grey: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white hover:from-gray-600 hover:to-gray-700 shadow-lg hover:shadow-xl transform hover:scale-105',
    secondary: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transform hover:scale-105',
    success: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transform hover:scale-105',
    danger: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transform hover:scale-105',
    warning: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transform hover:scale-105',
    info: 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-sm transform hover:scale-105',
  };

  const disabledClasses = 'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
  const widthClasses = fullWidth ? 'flex-1 min-w-0' : '';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        disabledClasses,
        widthClasses,
        className
      )}
      title={title}
    >
      {icon && (
        <div className={clsx(
          'p-1.5 rounded mr-2 transition-colors duration-200',
          variant === 'primary' ? 'bg-white/20' : 'bg-current/10'
        )}>
          {icon}
        </div>
      )}
      <span className="font-medium truncate">{children}</span>
    </button>
  );
};

export default ActionButton;
