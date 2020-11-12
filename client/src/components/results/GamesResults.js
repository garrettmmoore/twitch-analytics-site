import { AspectRatioBox, Box, Image, SimpleGrid } from '@chakra-ui/core';

const GamesResults = ({ gameData }) => {
  let parsedGameData = JSON.parse(gameData) || [];

  return (
    <SimpleGrid minChildWidth="20rem" spacing="5">
      {parsedGameData.map(game => (
        <Box key={game.id}>
          <h1>{game.name}</h1>
          <AspectRatioBox maxW="500px" ratio={4 / 5}>
            <Image
              objectFit="fill"
              src={game.box_art_url.replace('{width}x{height}', '400x500')}
              alt=""
            />
          </AspectRatioBox>
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default GamesResults;
