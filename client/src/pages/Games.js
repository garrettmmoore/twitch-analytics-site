import { useState } from 'react';
import GamesForm from '../components/Form/GamesForm.js';
import TopGamesForm from '../components/Form/TopGamesForm';
import GamesResults from '../components/results/GamesResults';
import useLocalStorage from '../hooks/useLocalStorage';
import { Box, Divider, SimpleGrid } from '@chakra-ui/react';

const Games = props => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gameData, setGameData] = useLocalStorage('gameData', []);

  return (
    <Box className="Games" mx={8}>
      <SimpleGrid minChildWidth="500px" spacing="10" alignItems="end">
        <Box>
          <GamesForm
            setGameData={setGameData}
            setIsError={setIsError}
            setIsLoading={setIsLoading}
            navigate={props.navigate}
          />
        </Box>
        <Box>
          <TopGamesForm
            setGameData={setGameData}
            setIsError={setIsError}
            setIsLoading={setIsLoading}
            navigate={props.navigate}
          />
        </Box>
      </SimpleGrid>
      <Divider />
      {isError && <div className="errors">Something went wrong</div>}
      {isLoading ? (
        <div className="loading">Loading</div>
      ) : (
        <GamesResults gameData={gameData} />
      )}
    </Box>
  );
};

export default Games;
