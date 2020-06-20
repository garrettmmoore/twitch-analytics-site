import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import useDropdown from './useDropdown';

function App() {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);
  const userOptions = ['login', 'extensions/id'];
  const [user, UserDropdown] = useDropdown('login', '', userOptions);

  const fetchData = async url => {
    setIsError(false);
    setIsLoading(true);

    try {
      const result = await axios(url);

      console.log(result.data.data[0]);
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
          fetchData(`/users/${user}=${query}`);

          event.preventDefault();
        }}
      >
        <UserDropdown />
        <h2>Find Twitch Data</h2>
        <label htmlFor="searchValue">
          Search:
          <input
            type="text"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <ul className="twitch-data-list">
            <h2 className="list-header">Search Results</h2>
            <li className="list">
              <span className="user-name">
                DisplayName: {data ? data.display_name : ''}
              </span>
            </li>
            <li>
              <span className="user-description">
                Description: {data ? data.description : ''}
              </span>
            </li>
            <li>
              <span className="profile-image-url">
                Profile Image:
                {
                  <img
                    src={data ? data.profile_image_url : ''}
                    alt="User Profile"
                  />
                }
              </span>
            </li>
            <li>
              <span className="broadcaster-type">
                Broadcaster Type: {data ? data.broadcaster_type : ''}
              </span>
            </li>
            <li>
              <span className="view-count">
                View Count: {data ? data.view_count : ''}
              </span>
            </li>
          </ul>
        </>
      )}
    </>
  );
}

export default App;
