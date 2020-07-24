import React from 'react';

const GameResults = ({ gameData }) => {
  let parsedGameData = JSON.parse(gameData);

  return (
    <ul>
      {parsedGameData.map(game => (
        <li key={game.id}>
          <img
            src={
              game.box_art_url.split('{width}x{height}')[0] +
              `${250}x${375}.jpg`
            }
            alt=""
          ></img>
          {game.name}
        </li>
      ))}
    </ul>
  );
};

export default GameResults;
