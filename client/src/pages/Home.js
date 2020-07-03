import React, { useState } from 'react';
import Form from '../components/Form';
// import Results from '../components/Results';
import Extensions from '../components/Extensions';
const Home = props => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  return (
    <div className="Home">
      <h1>Twitch Analytics</h1>

      <p>Enter your Twitch Username to see your profile data</p>
      <Form
        setData={setData}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
        navigate={props.navigate}
      />
      {isError && <div className="errors">Something went wrong</div>}
      {isLoading ? (
        <div className="loading">Loading</div>
      ) : (
        <Extensions data={data} />
      )}
    </div>
  );
};

export default Home;
