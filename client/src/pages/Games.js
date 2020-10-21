import React, { useState } from 'react';
import GamesForm from '../components/form/GamesForm';
import TopGamesForm from '../components/form/TopGamesForm';
import GamesResults from '../components/results/GamesResults';
import useLocalStorage from '../hooks/useLocalStorage';

const Games = props => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gameData, setGameData] = useLocalStorage('gameData', []);

  return (
    <div className="Games">
      <h1>Twitch Games</h1>
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
        <GamesResults gameData={gameData} />
      )}
    </div>
  );
};

export default Games;
