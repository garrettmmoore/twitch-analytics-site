import React, { useState, useEffect } from 'react';
import GameResults from '../components/GameResults/GameResults';
import useLocalStorage from '../hooks/useLocalStorage';
import fetchGameData from '../utils/fetchGameData';

import GameForm from '../components/Form/GameForm';

const Games = props => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gameData, setGameData] = useLocalStorage('gameData', []);

  const URL = process.env.REACT_APP_URL || '';

  // useEffect(() => {
  //   setGameData(gameData);
  //   // fetchGameData(`/games/top/100`, setGameData, setIsError, setIsLoading);
  // }, [gameData]);

  return (
    <div className="Games">
      <h1>Get Top Twitch Games</h1>
      <GameForm
        setGameData={setGameData}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
        navigate={props.navigate}
      />

      <p>Enter your Twitch Username to see your profile data</p>

      {isError && <div className="errors">Something went wrong</div>}
      {isLoading ? (
        <div className="loading">Loading</div>
      ) : (
        <GameResults gameData={gameData} />
      )}
    </div>
  );
};

export default Games;
