import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useStateWithCache<T>(initialValue: T, key: string): [T, SetValue<T>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);

    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    const item = window.localStorage.getItem(key);
    if (item) {
      setStoredValue(JSON.parse(item));
    }
  }, [key]);

  const setValue: SetValue<T> = (valueOrFunc: SetStateAction<T>) => {
    const valueToStore = valueOrFunc instanceof Function ? valueOrFunc(storedValue) : valueOrFunc;

    setStoredValue(valueToStore);
    window.localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}
