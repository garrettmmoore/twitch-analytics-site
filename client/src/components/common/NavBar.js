import { Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <Flex
    direction="row"
    justifyContent="center"
    mb="10px"
    backgroundColor="#ccc"
  >
    <nav>
      <Box background="skyblue" borderRadius=".25em" padding="1em" m="10px">
        <Link to="/">Home</Link>
      </Box>
    </nav>
    <nav>
      <Box background="skyblue" borderRadius=".25em" padding="1em" m="10px">
        <Link to="/profiles">Profiles</Link>
      </Box>
    </nav>
    <nav>
      <Box background="skyblue" borderRadius=".25em" padding="1em" m="10px">
        <Link to="/games">Game</Link>
      </Box>
    </nav>
  </Flex>
);

export default NavBar;
