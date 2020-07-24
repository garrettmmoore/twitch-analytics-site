import React, { useState, useEffect } from 'react';
// import Form from '../components/Form/Form';
import GameResults from '../components/GameResults/GameResults';
import useLocalStorage from '../hooks/useLocalStorage';
import fetchGameData from '../utils/fetchGameData';

const Games = () => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gameData, setGameData] = useLocalStorage('gameData', 100);

  const URL = process.env.REACT_APP_URL || '';

  useEffect(() => {
    setGameData(gameData);

    fetchGameData(`/games/top/100`, setGameData, setIsError, setIsLoading);
  }, []);

  return (
    <div className="Games">
      <h1>Get Top Twitch Games</h1>

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
