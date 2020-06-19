import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState('');

  const fetchData = async url => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(url);

      setData(result.data.data[0]);
    } catch (error) {
      setIsError(true);
    }

    setIsLoading(false);
  };

  return (
    <>
      <form
        className="twitch-form"
        onSubmit={event => {
          fetchData(`http://localhost:5000/users/login=${query}`);

          event.preventDefault();
        }}
      >
        <h2>Find Twitch Data</h2>
        <input
          type="text"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul className="twitch-data-list">
          <h2 className="list-header">Results</h2>
          <li className="list">
            <span className="user-name">DisplayName: {data.display_name} </span>
          </li>
          <li>
            <span className="user-description">
              Description: {data.description}
            </span>
          </li>
          <li>
            <span className="profile-image-url">
              Profile Image:
              {<img src={data.profile_image_url} alt="User Profile" />}
            </span>
          </li>
          <li>
            <span className="broadcaster-type">
              Broadcaster Type: {data.broadcaster_type}
            </span>
          </li>
          <li>
            <span className="view-count">View Count: {data.view_count}</span>
          </li>
        </ul>
      )}
    </>
  );
}

export default App;
