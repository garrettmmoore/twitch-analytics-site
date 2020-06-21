import React from 'react';
import './App.css';
import Search from './components/Search';

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <h1>Twitch Analytics</h1>
        <Search />
      </div>
    </React.StrictMode>
  );
};

export default App;
