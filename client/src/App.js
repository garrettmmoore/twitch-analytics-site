import { Router, Link } from '@reach/router';
import React from 'react';

import GameResults from './components/results/GamesResults';
import Games from './pages/Games';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Results from './components/results/ProfileResults';

import './App.css';

const App = () => (
  <>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <nav>
      <Link to="/games">Game</Link>
    </nav>
    <Router>
      <Home path="/">
        <Results path="option:query" />
      </Home>
      <Games path="/games">
        <GameResults path="query" />
      </Games>
      <NotFound default />
    </Router>
  </>
);

export default App;
