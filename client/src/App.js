import React from 'react';
import { Router, Link } from '@reach/router';

import './App.css';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Results from './components/Results/Results';

const App = () => (
  <>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <Router>
      <Home path="/">
        <Results path="option:query" />
      </Home>
      <NotFound default />
    </Router>
  </>
);

export default App;
