'use client';

import React, { useState } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  badge?: string | number;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  onChange?: (id: string) => void;
  variant?: 'line' | 'pill';
}

export default function Tabs({ items, defaultTab, onChange, variant = 'line' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    onChange?.(id);
  };

  const activeItem = items.find((item) => item.id === activeTab) || items[0];

  return (
    <div className="w-full">
      <div
        className={
          variant === 'pill'
            ? 'flex items-center gap-1 p-1 rounded-xl bg-[#F5F8FF] border border-[#DCE5F2] w-fit'
            : 'flex items-center gap-6 border-b border-[#DCE5F2] overflow-x-auto'
        }
        role="tablist"
      >
        {items.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              role="tab"
              aria-selected={isActive}
              disabled={item.disabled}
              onClick={() => handleTabChange(item.id)}
              className={
                variant === 'pill'
                  ? `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-white text-blue-700 shadow-sm border border-[#DCE5F2]'
                        : 'text-[#64748B] hover:text-[#172033]'
                    } ${item.disabled ? 'opacity-40 cursor-not-allowed' : ''}`
                  : `relative px-1 pb-3 text-sm font-medium whitespace-nowrap transition-colors ${
                      isActive ? 'text-blue-600' : 'text-[#64748B] hover:text-[#172033]'
                    } ${item.disabled ? 'opacity-40 cursor-not-allowed' : ''}`
              }
            >
              {item.label}
              {item.badge !== undefined && (
                <span className="ml-1.5 px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-700 text-xs">
                  {item.badge}
                </span>
              )}
              {variant === 'line' && isActive && (
                <span className="absolute left-0 right-0 bottom-[-1px] h-0.5 bg-blue-600 rounded-t-full" />
              )}
            </button>
          );
        })}
      </div>
      <div className="pt-5" role="tabpanel">
        {activeItem?.content}
      </div>
    </div>
  );
}
