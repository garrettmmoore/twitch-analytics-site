import React from 'react';

const GamesResults = ({ gameData }) => {
  let parsedGameData = JSON.parse(gameData) || [];

  return (
    <ul>
      {parsedGameData.map(game => (
        <li key={game.id}>
          <img
            src={game.box_art_url.replace('{width}x{height}', '250x375')}
            alt=""
          ></img>
          {game.name}
        </li>
      ))}
    </ul>
  );
};

export default GamesResults;
