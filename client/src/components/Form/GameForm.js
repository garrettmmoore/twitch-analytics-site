import React from 'react';
import Search from '../Search/Search';
import useLocalStorage from '../../hooks/useLocalStorage';
import fetchGameData from '../../utils/fetchGameData';

const GameForm = ({ setGameData, setIsError, setIsLoading, navigate }) => {
  const [numberQuery, setNumberQuery] = useLocalStorage(
    'numberQueryStorage',
    ''
  );

  const handleSubmit = async e => {
    e.preventDefault();
    await fetchGameData(
      `/games/top/${numberQuery}`,
      setGameData,
      setIsError,
      setIsLoading
    );

    navigate(`${numberQuery}`);
  };

  return (
    <form className="twitch-form" onSubmit={handleSubmit}>
      <Search query={numberQuery} setQuery={setNumberQuery} />
    </form>
  );
};

export default GameForm;
