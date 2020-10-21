import React from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import fetchGameData from '../../utils/fetchGameData';
import SearchBar from '../common/SearchBar';
import useForm from '../../hooks/useForm';

const TopGamesForm = ({ setGameData, setIsError, setIsLoading, navigate }) => {
  const { form, reset, set } = useForm({
    numberTopGames: ''
  });

  const handleSubmit = async e => {
    e.preventDefault();

    await fetchGameData(
      `/games/top/${form.numberTopGames}`,
      setGameData,
      setIsError,
      setIsLoading
    );
    reset();
    navigate(`${form.numberTopGames}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchBar {...set('numberTopGames')} label={`Get Top Games`} />
    </form>
  );
};

export default TopGamesForm;
