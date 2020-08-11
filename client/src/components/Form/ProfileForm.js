import React from 'react';

import fetchData from '../../utils/fetchData';
import SearchBar from '../common/SearchBar';
import useDropdown from '../../hooks/useDropdown';
import useLocalStorage from '../../hooks/useLocalStorage';

const ProfileForm = ({ setData, setIsError, setIsLoading, navigate }) => {
  const options = ['login', 'extensions/user_id'];
  const [option, Dropdown] = useDropdown('login', 'login', options);
  const [query, setQuery] = useLocalStorage('queryStorage', '');

  const URL = process.env.REACT_APP_URL || '';

  return (
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

        // Access navigate from props - github.com/reach/router/issues/225
        navigate(`${option}/${query}`);
      }}
    >
      <Dropdown className="dropdown" />
      <SearchBar query={query} setQuery={setQuery} label={'Get Profile Data'} />
    </form>
  );
};

export default ProfileForm;
