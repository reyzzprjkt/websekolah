import React from 'react';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
}

const EmptyState: React.FC<EmptyStateProps> = ({ icon, title, description, action }) => (
  <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
    {icon && <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 mb-4">{icon}</div>}
    <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
    {description && <p className="text-sm text-gray-500 max-w-sm mb-4">{description}</p>}
    {action}
  </div>
);

export default EmptyState;
