import React, { useState } from 'react';
import axios from 'axios';

import useDropdown from '../hooks/useDropdown';
import Results from './Results';

const Search = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const options = ['login', 'extensions/id'];
  const [option, Dropdown] = useDropdown('login', 'login', options);
  const [data, setData] = useState([]);

  const fetchData = async url => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(url);

      setData(result.data.data[0] || []);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  return (
    <>
      <form
        className="twitch-form"
        onSubmit={event => {
          fetchData(`/users/${option}=${query}`);
          event.preventDefault();
        }}
      >
        <Dropdown />
        <label htmlFor="searchValue">
          <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? <div>Loading ...</div> : <Results data={data} />}
    </>
  );
};

export default Search;
