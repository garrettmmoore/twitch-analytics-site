import React from 'react';

import Form from '../components/Form';

const Home = () => {
  return (
    <>
      <h1>{process.env.REACT_APP_HELLO}</h1>
      <h1>Twitch Analytics</h1>
      <Form />
    </>
  );
};

export default Home;
