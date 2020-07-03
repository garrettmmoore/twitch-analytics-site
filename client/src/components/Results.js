import React from 'react';

const Results = ({ data }) => {
  // console.log(data);
  let results = Object.entries(data);
  // console.log(results);

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
//50185928

/*
{
  "data": [
    {
      "id": "84810660",
      "login": "pugluverg",
      "display_name": "pugluverg",
      "type": "",
      "broadcaster_type": "",
      "description": "Game and Code",
      "profile_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/a161148f-5d1b-4009-89ec-dba3ec635d9a-profile_image-300x300.png",
      "offline_image_url": "",
      "view_count": 175
    }
  ]
}
*/
