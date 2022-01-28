import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import fetchGameData from '../../utils/fetchGameData';
import GameTypesMenu from '../common/GameTypesMenu';

const GamesForm = ({ setGameData, setIsError, setIsLoading, navigate }) => {
  const [selected, setSelected] = useState([]);

  const format = async selected => {
    let formattedGames = [];

    selected.forEach(game => {
      formattedGames.push(game.value);
    });

    return formattedGames;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    let params = '';
    let formatted = await format(selected);

    formatted.forEach(id => (params += `${id},`));

    await fetchGameData(
      `/games/${params}`,
      setGameData,
      setIsError,
      setIsLoading
    );

    return navigate(`${params}`);
  };

  return (
    <form className="twitch-form" onSubmit={handleSubmit}>
      <Flex direction="row" align="flex-end" my={5}>
        <GameTypesMenu selected={selected} setSelected={setSelected} />
        <Button type="submit" isDisabled={!selected} w="md">
          Get Selected Games
        </Button>
      </Flex>
    </form>
  );
};

export default GamesForm;
