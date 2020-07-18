import React, { useEffect } from 'react';

const useStateWithLocalStorage = localStorageKey => {
  const [query, setQuery] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, query);
  }, [query]);

  return [query, setQuery];
};

export { useStateWithLocalStorage };
