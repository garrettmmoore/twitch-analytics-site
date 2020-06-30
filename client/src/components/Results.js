import React from 'react';

const Results = ({ data }) => {
  let results = Object.entries(data);

  return (
    <ul className="twitch-data-list">
      {results.map(item => (
        <li key={item[0]}>
          {item[0] === 'profile_image_url' ? (
            <img src={item[1]} alt="new" />
          ) : (
            <span value={item[1]}>
              {item[0]}: {item[1]}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Results;
