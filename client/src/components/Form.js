import React, { useState } from 'react';

import useDropdown from '../hooks/useDropdown';
import useSearch from '../hooks/useSearch';
import Results from './Results';
import fetchData from '../utils/fetchData';

const Form = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, SearchButton] = useSearch('');
  const options = ['login', 'extensions/id'];
  const [option, Dropdown] = useDropdown('login', 'login', options);
  const [data, setData] = useState([]);

  return (
    <>
      <form
        className="twitch-form"
        onSubmit={event => {
          fetchData(
            `/users/${option}=${query}`,
            setData,
            setIsError,
            setIsLoading
          );
          event.preventDefault();
        }}
      >
        <Dropdown />
        <SearchButton />
      </form>
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? <div>Loading ...</div> : <Results data={data} />}
    </>
  );
};

export default Form;
