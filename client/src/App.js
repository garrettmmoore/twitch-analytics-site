import React from 'react';
import { Router, Link } from '@reach/router';

import './App.css';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Form from './components/Form';
import Results from './components/Results';

const App = () => (
  <React.StrictMode>
    <nav>
      <Link to="/">Home</Link>
    </nav>
    <Router>
      <Home path="/">
        <Results path="option:query" />
      </Home>
      <NotFound default />
    </Router>
  </React.StrictMode>
);

export default App;
