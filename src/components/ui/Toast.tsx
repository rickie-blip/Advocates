import React from 'react';
import { ToastState } from '../../types';

interface ToastProps {
  toast: ToastState;
  onDismiss: () => void;
}

export default function Toast({ toast, onDismiss }: ToastProps) {
  if (!toast.show) return null;
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-in max-w-sm w-full bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border-l-4 border-[#C59B27] p-5 flex items-center justify-between border border-gray-150 dark:border-slate-800">
      <div className="flex items-center space-x-3">
        <span className="text-xl">⚖️</span>
        <div>
          <p className="text-[10px] text-amber-600 dark:text-[#C59B27] font-sans font-extrabold uppercase tracking-widest">Mercy & Co Advocates</p>
          <p className="text-xs font-sans text-gray-700 dark:text-gray-200">{toast.message}</p>
        </div>
      </div>
      <button onClick={onDismiss} className="text-gray-400 hover:text-gray-600 text-lg font-bold">×</button>
    </div>
  );
}
