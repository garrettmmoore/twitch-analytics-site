import React, { useState } from 'react';

import useDropdown from '../hooks/useDropdown';
import Results from './Results';
import fetchData from '../utils/fetchData';

const Form = () => {
  const [query, setQuery] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const options = ['login', 'extensions/id'];
  const [option, Dropdown] = useDropdown('login', 'login', options);
  const [data, setData] = useState([]);

  return (
    <>
      <form
        className="twitch-form"
        onSubmit={e => {
          fetchData(
            `/users/${option}=${query}`,
            setData,
            setIsError,
            setIsLoading
          );
          e.preventDefault();
        }}
      >
        <Dropdown />
        <label htmlFor="searchValue">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onBlur={e => setQuery(e.target.value)}
          />
          <button type="submit" disabled={!query}>
            Search
          </button>
        </label>
      </form>
      {isError && <>Something went wrong ...</>}
      {isLoading ? <>Loading ...</> : <Results data={data} />}
    </>
  );
};

export default Form;
