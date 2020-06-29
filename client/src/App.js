import React from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <React.StrictMode>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Router>
        <Home path="/" />
        <NotFound default />
      </Router>
    </React.StrictMode>
  );
};

export default App;
