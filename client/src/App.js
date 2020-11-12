import { Router } from '@reach/router';
import './App.css';
import NavBar from './components/common/NavBar';
import GameResults from './components/results/GamesResults';
import Results from './components/results/ProfileResults';
import Games from './pages/Games';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Profiles from './pages/Profiles';

const App = () => (
  <>
    <NavBar />
    <Router>
      <Home path="/"></Home>
      <Profiles path="/profiles">
        <Results path="option:query" />
      </Profiles>
      <Games path="/games">
        <GameResults path="query" />
      </Games>
      <NotFound default />
    </Router>
  </>
);

export default App;
