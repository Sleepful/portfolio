import { useState, useLayoutEffect, useReducer } from 'react'

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);

  useLayoutEffect(() => {
    const item = window.localStorage.getItem(key);
    item && setStoredValue(JSON.parse(item));
  }, [])

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
}
