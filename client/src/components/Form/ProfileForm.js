import { HStack } from '@chakra-ui/react';
import useDropdown from '../../hooks/useDropdown';
import useLocalStorage from '../../hooks/useLocalStorage';
import fetchProfileData from '../../utils/fetchProfileData';
import ProfileSearchBar from '../common/ProfileSearchBar';

const ProfileForm = ({ setData, setIsError, setIsLoading }) => {
  const options = ['login', 'extensions/user_id'];
  const [option, Dropdown] = useDropdown('login', 'login', options);
  const [query, setQuery] = useLocalStorage('queryStorage', '');
  const URL = process.env.REACT_APP_URL || '';

  return (
    <form
      style={{ marginBottom: '100px' }}
      className="twitch-form"
      onSubmit={e => {
        e.preventDefault();
        fetchProfileData(
          `${URL}/users/${option}=${query}`,
          setData,
          setIsError,
          setIsLoading
        );
      }}
    >
      <HStack alignItems="baseline" justifyContent="space-evenly">
        <Dropdown className="dropdown" />
        <ProfileSearchBar
          query={query}
          setQuery={setQuery}
          label={'Get Profile Data'}
        />
      </HStack>
    </form>
  );
};

export default ProfileForm;
