import { useState } from 'react';
import GamesForm from '../components/form/GamesForm';
import TopGamesForm from '../components/form/TopGamesForm';
import GamesResults from '../components/results/GamesResults';
import useLocalStorage from '../hooks/useLocalStorage';
import { Box, Divider, Flex, SimpleGrid } from '@chakra-ui/core';

const Games = props => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [gameData, setGameData] = useLocalStorage('gameData', []);

  return (
    <Box className="Games" mx={8}>
      <SimpleGrid minChildWidth="500px" spacing="10" alignItems="end">
        <Box>
          <h1>Select Games</h1>
          <GamesForm
            setGameData={setGameData}
            setIsError={setIsError}
            setIsLoading={setIsLoading}
            navigate={props.navigate}
          />
        </Box>
        <Box>
          <h1>Search Games</h1>
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
