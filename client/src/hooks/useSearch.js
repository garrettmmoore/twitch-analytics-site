import React, { useState } from 'react';

const useSearch = defaultState => {
  const [state, setState] = useState(defaultState);

  const Search = () => (
    <>
      <label htmlFor="searchValue">
        <input
          type="text"
          value={state}
          onChange={event => {
            setState(event.target.value);
            event.preventDefault();
          }}
          onBlur={e => setState(e.target.value)}
        />
      </label>
      <button type="submit">Search</button>
    </>
  );

  return [state, Search, setState];
};

export default useSearch;
