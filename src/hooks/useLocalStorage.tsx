import { useState, useEffect } from 'react';

export default function useLocalStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });
  useEffect(() => {
    try {
      const valueToStore =
        typeof storedValue === 'function' ? storedValue[storedValue] : storedValue;
      localStorage.setItem('theme', JSON.stringify(valueToStore));
    } catch (error) {
      //void
    }
  }, [key, storedValue]);
  return [storedValue, setStoredValue];
}
