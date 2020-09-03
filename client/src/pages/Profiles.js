import React, { useState } from 'react';
import ProfileForm from '../components/form/ProfileForm';
import ProfileResults from '../components/results/ProfileResults';
import useLocalStorage from '../hooks/useLocalStorage';

const Profiles = props => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useLocalStorage('dataStorage', []);

  return (
    <div className="Home">
      <h1>Twitch Analytics</h1>

      <p>Enter your Twitch Username to see your profile data</p>
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
    </div>
  );
};

export default Profiles;
