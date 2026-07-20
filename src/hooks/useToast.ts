import { useState, useCallback } from 'react';
import { ToastState } from '../types';

export function useToast() {
  const [toast, setToast] = useState<ToastState>({ show: false, message: '', type: 'success' });

  const triggerToast = useCallback((message: string, type: ToastState['type'] = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: '', type: 'success' }), 4000);
  }, []);

  const dismissToast = useCallback(() => {
    setToast({ show: false, message: '', type: 'success' });
  }, []);

  return { toast, triggerToast, dismissToast };
}
