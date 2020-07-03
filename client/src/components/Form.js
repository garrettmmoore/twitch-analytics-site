import React, { useState } from 'react';

import useDropdown from '../hooks/useDropdown';
import fetchData from '../utils/fetchData';

import Search from '../components/Search';

const Form = ({ setData, setIsError, setIsLoading, navigate }) => {
  const options = ['login', 'extensions/user_id'];
  const [option, Dropdown] = useDropdown('login', 'login', options);
  const [query, setQuery] = useState('');

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
