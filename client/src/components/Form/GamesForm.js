import React, { useState, useRef } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';
import fetchGameData from '../../utils/fetchGameData';

const GameForm = ({ setGameData, setIsError, setIsLoading, navigate }) => {
  const [games, setGames] = useState([]);

  const handleSubmit = async e => {
    e.preventDefault();
    let params = '';

    games.forEach(id => (params += `${id},`));

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
      <input
        type="checkbox"
        name="Fortnite"
        value="33214"
        onChange={handleChange}
      />
      <label htmlFor="Fortnite">Fortnite</label>
      <input
        type="checkbox"
        name="Pub G"
        value="493057"
        onChange={handleChange}
      />
      <label htmlFor="Pub G">Pub G</label>
    </form>
  );
};

export default GameForm;
