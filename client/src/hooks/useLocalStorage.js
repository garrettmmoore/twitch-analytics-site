import { useEffect, useState } from 'react';

// Use State with Local Storage
const useLocalStorage = (localStorageKey, defaultState) => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || defaultState
  );

  if (typeof value !== 'string') setValue(JSON.stringify(value));

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value, localStorageKey]);

  return [value, setValue];
};

export default useLocalStorage;
