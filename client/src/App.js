import { Route, Routes } from 'react-router-dom';
import './App.css';
import Games from './pages/Games';
import Home from './pages/Home';
import Profiles from './pages/Profiles';
import NotFound from './pages/NotFound';

import ErrorPage from './pages/ErrorPage';
import { Layout } from './pages/Layout';

const App = () => (
  <Routes>
    <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />
      <Route path="/profiles" element={<Profiles />} />
      <Route path="/games" element={<Games />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
);

export default App;
