import React from 'react';
import useDropdown from '../../hooks/useDropdown';
import useLocalStorage from '../../hooks/useLocalStorage';
import fetchProfileData from '../../utils/fetchProfileData';
import SearchBar from '../common/SearchBar';

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
        fetchProfileData(
          `${URL}/users/${option}=${query}`,
          setData,
          setIsError,
          setIsLoading
        );

        navigate(`${option}/${query}`);
      }}
    >
      <Dropdown className="dropdown" />
      <SearchBar query={query} setQuery={setQuery} label={'Get Profile Data'} />
    </form>
  );
};

export default ProfileForm;
