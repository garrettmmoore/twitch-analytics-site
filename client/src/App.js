import React from 'react';
import { Router, Link } from '@reach/router';

import './App.css';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Form from './components/Form';
import Results from './components/Results';

const App = () => {
  return (
    <React.StrictMode>
      <nav>
        <Link to="/">Home</Link> <Link to="/form">Form</Link>
      </nav>

      <Router>
        <Home path="/"></Home>
        <Form path="/form">
          <Results path="option:query" />
        </Form>
        <NotFound default />
      </Router>
    </React.StrictMode>
  );
};

export default App;
