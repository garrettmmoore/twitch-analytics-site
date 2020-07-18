import React, { useEffect, useState } from 'react';

// Use State with Local Storage
const useLocalStorage = (localStorageKey, defaultState) => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || defaultState
  );

  if (typeof value !== 'string') {
    setValue(JSON.stringify(value));
  }

  console.log('localStorage value', value);

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
