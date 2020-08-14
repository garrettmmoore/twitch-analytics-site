import React from 'react';

import fetchTopGames from '../../utils/fetchGameData';
import SearchBar from '../common/SearchBar';
import useLocalStorage from '../../hooks/useLocalStorage';

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
      <SearchBar
        query={numberTopGames}
        setQuery={setNumberTopGames}
        label={`Get top games`}
      />
    </form>
  );
};

export default TopGamesForm;
