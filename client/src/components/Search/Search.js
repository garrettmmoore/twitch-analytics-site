import React from 'react';

const Search = ({ query, setQuery }) => (
  <>
    <label htmlFor="searchValue">
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onBlur={e => setQuery(e.target.value)}
      />
      <button type="submit" disabled={!query}>
        Submit
      </button>
    </label>
  </>
);

export default Search;
