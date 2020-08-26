import { Router } from '@reach/router';
import React from 'react';

import GameResults from './components/results/GamesResults';
import Results from './components/results/ProfileResults';
import Games from './pages/Games';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import NavBar from './components/common/NavBar';

import './App.css';

const App = () => (
  <>
    <NavBar />
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
