import { useState, useEffect } from 'react';

export const useAlert = (trigger: boolean, duration: number = 5000): boolean => {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    if (trigger) {
      setShowAlert(true);
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [trigger, duration]);

  return showAlert;
};
