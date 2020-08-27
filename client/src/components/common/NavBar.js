import React from 'react';
import { Link } from '@reach/router';
import { SimpleGrid, Flex, Box } from '@chakra-ui/core';
const NavBar = () => {
  return (
    <>
      <Flex direction="row">
        <nav>
          <Box background="skyblue" borderRadius="10px">
            <Link to="/">Home</Link>
          </Box>
        </nav>
        <nav>
          <Box background="skyblue" borderRadius="10px">
            <Link to="/games">Game</Link>
          </Box>
        </nav>
      </Flex>
    </>
  );
};

export default NavBar;
