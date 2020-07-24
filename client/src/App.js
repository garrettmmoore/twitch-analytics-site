import React from 'react';
import { Router, Link } from '@reach/router';

import './App.css';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Results from './components/Results/Results';
import Games from './pages/Games';

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
      <Games path="/games"></Games>
      <NotFound default />
    </Router>
  </>
);

export default App;
