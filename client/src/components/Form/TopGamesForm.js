import React, { useState } from 'react';
import Search from '../Search/Search';
import useLocalStorage from '../../hooks/useLocalStorage';
import fetchTopGames from '../../utils/fetchGameData';

const TopGamesForm = ({ setGameData, setIsError, setIsLoading, navigate }) => {
  const [numberTopGames, setNumberTopGames] = useLocalStorage(
    'numberTopGames',
    ''
  );

  const handleSubmit = async e => {
    e.preventDefault();

    await fetchTopGames(
      `/games/top/${numberTopGames}`,
      setGameData,
      setIsError,
      setIsLoading
    );

    navigate(`${numberTopGames}`);
  };

  return (
    <form className="twitch-form" onSubmit={handleSubmit}>
      <Search
        query={numberTopGames}
        setQuery={setNumberTopGames}
        label={`Get top games`}
      />
    </form>
  );
};

export default TopGamesForm;
