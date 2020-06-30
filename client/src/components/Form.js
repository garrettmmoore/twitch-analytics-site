import React, { useState, navigate } from 'react';

import useDropdown from '../hooks/useDropdown';
import fetchData from '../utils/fetchData';
import Results from './Results';

const Form = props => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const options = ['login', 'extensions/id'];
  const [option, Dropdown] = useDropdown('login', 'login', options);
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const URL = process.env.REACT_APP_URL || '';

  return (
    <>
      <form
        className="twitch-form"
        onSubmit={e => {
          e.preventDefault();
          fetchData(
            `${URL}/users/${option}=${query}`,
            setData,
            setIsError,
            setIsLoading
          );

          // Access navigate from props - https://github.com/reach/router/issues/225
          props.navigate(`${option}/${query}`);
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
            Submit
          </button>
        </label>
      </form>
      {isError && <>Something went wrong ...</>}
      {isLoading ? <>Loading ...</> : <Results data={data} />}
    </>
  );
};

export default Form;
