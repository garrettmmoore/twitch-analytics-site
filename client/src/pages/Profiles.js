import React, { useState } from 'react';
import { Flex, Box } from '@chakra-ui/core';
import ProfileForm from '../components/form/ProfileForm';
import ProfileResults from '../components/results/ProfileResults';
import useLocalStorage from '../hooks/useLocalStorage';

const Profiles = props => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useLocalStorage('dataStorage', []);

  return (
    <Flex justifyContent="center" display="grid">
      <Box
        as="h1"
        align="center"
        fontSize="25px"
        marginTop="20px"
        marginBottom="20px"
      >
        Twitch Profile Data
      </Box>
      <Box as="h2" fontSize="20px" marginBottom="20px">
        Enter your Twitch Username to see your profile data
      </Box>
      <ProfileForm
        setData={setData}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
        navigate={props.navigate}
      />
      {isError && <div className="errors">Something went wrong</div>}
      {isLoading ? (
        <div className="loading">Loading</div>
      ) : (
        <ProfileResults data={data} />
      )}
    </Flex>
  );
};

export default Profiles;
