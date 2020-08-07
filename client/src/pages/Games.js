import React, { useState, useEffect } from 'react';
import GameResults from '../components/GameResults/GameResults';
import useLocalStorage from '../hooks/useLocalStorage';

import GamesForm from '../components/Form/GamesForm';
import TopGamesForm from '../components/Form/TopGamesForm';

const Games = props => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gameData, setGameData] = useLocalStorage('gameData', []);

  return (
    <div className="Games">
      <h1>Get Top Twitch Games</h1>
      <GamesForm
        setGameData={setGameData}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
        navigate={props.navigate}
      />
      <TopGamesForm
        setGameData={setGameData}
        setIsError={setIsError}
        setIsLoading={setIsLoading}
        navigate={props.navigate}
      />

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
