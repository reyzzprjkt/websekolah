'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';
import { CheckCircle2, Info, AlertTriangle, X, XCircle } from 'lucide-react';

export type ToastType = 'success' | 'info' | 'warning' | 'error';

interface ToastData {
  id: number;
  type: ToastType;
  message: string;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);
let nextToastId = 1;

const toastStyles: Record<ToastType, { className: string; icon: React.ReactNode }> = {
  success: { className: 'border-green-200 bg-green-50 text-green-800', icon: <CheckCircle2 className="w-5 h-5 text-green-600" /> },
  info: { className: 'border-blue-200 bg-blue-50 text-blue-800', icon: <Info className="w-5 h-5 text-blue-600" /> },
  warning: { className: 'border-amber-200 bg-amber-50 text-amber-800', icon: <AlertTriangle className="w-5 h-5 text-amber-600" /> },
  error: { className: 'border-red-200 bg-red-50 text-red-800', icon: <XCircle className="w-5 h-5 text-red-600" /> },
};

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    const id = nextToastId++;
    setToasts((current) => [...current, { id, message, type }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 4000);
  }, []);

  const dismissToast = (id: number) => setToasts((current) => current.filter((toast) => toast.id !== id));

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed right-4 top-24 z-[70] flex w-[min(360px,calc(100vw-2rem))] flex-col gap-3" aria-live="polite">
        {toasts.map((toast) => {
          const style = toastStyles[toast.type];
          return (
            <div key={toast.id} className={`flex items-start gap-3 rounded-xl border p-4 shadow-lg ${style.className}`}>
              {style.icon}
              <p className="flex-1 text-sm font-medium leading-5">{toast.message}</p>
              <button onClick={() => dismissToast(toast.id)} className="rounded-md p-0.5 opacity-70 hover:opacity-100" aria-label="Tutup notifikasi">
                <X className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used inside ToastProvider');
  return context;
}
