import React, { useState } from 'react';
import GameTypesMenu from '../common/GameTypesMenu';

import fetchGameData from '../../utils/fetchGameData';

const GamesForm = ({ setGameData, setIsError, setIsLoading, navigate }) => {
  const [games, setGames] = useState([]);
  const [selected, setSelected] = useState([]);
  const format = async selected => {
    let formattedGames = [];

    selected.forEach(game => {
      formattedGames.push(game.value);
    });

    console.log('format selecteddd', formattedGames);
    return formattedGames;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let params = '';
    let formatted = await format(selected);
    formatted.forEach(id => (params += `${id},`));

    await fetchGameData(
      `/games/${params}`,
      setGameData,
      setIsError,
      setIsLoading
    );

    navigate(`${params}`);
  };

  const handleChange = e => {
    const { value } = e.target;
    if (!games.includes(value)) setGames([...games, value]);
    else setGames(games.filter(game => game !== value));
  };

  return (
    <form className="twitch-form" onSubmit={handleSubmit}>
      <button type="submit">Fetch Selected Games</button>
      <GameTypesMenu selected={selected} setSelected={setSelected} />
    </form>
  );
};

export default GamesForm;
