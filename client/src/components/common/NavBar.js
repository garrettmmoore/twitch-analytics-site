import { Box, Flex } from '@chakra-ui/core';
import { Link } from '@reach/router';
import React from 'react';

const NavBar = () => {
  return (
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
};

export default NavBar;
