import React from 'react';
import Extensions from './Extensions';

const Results = ({ data }) => {
  let toggle = data.panel;
  let results = Object.entries(data) || [];

  return (
    <>
      {!toggle ? (
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
      ) : (
        <Extensions data={data} />
      )}
    </>
  );
};

export default Results;
