import React, { useState } from 'react';

import useDropdown from '../../hooks/useDropdown';
import fetchData from '../../utils/fetchData';

import Search from '../Search/Search';

const useStateWithLocalStorage = localStorageKey => {
  const [query, setQuery] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );

  React.useEffect(() => {
    localStorage.setItem(localStorageKey, query);
  }, [query]);

  return [query, setQuery];
};

const Form = ({ setData, setIsError, setIsLoading, navigate }) => {
  const options = ['login', 'extensions/user_id'];
  const [option, Dropdown] = useDropdown('login', 'login', options);

  const URL = process.env.REACT_APP_URL || '';

  const [query, setQuery] = useStateWithLocalStorage('queryStorage');

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
          navigate(`${option}/${query}`);
        }}
      >
        <Dropdown className="dropdown" />
        <Search query={query} setQuery={setQuery} />
      </form>
    </>
  );
};

export default Form;
