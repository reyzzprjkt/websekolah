import React from 'react';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variantClass = {
      default: 'bg-gray-100 text-gray-800',
      success: 'bg-green-100 text-green-800',
      warning: 'bg-yellow-100 text-yellow-800',
      error: 'bg-red-100 text-red-800',
      info: 'bg-blue-100 text-blue-800',
    }[variant];
    
    return (
      <span
        ref={ref}
        className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium ${variantClass} ${className || ''}`}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';
export default Badge;
