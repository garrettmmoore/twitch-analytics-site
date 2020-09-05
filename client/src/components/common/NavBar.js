import { Box, Flex } from '@chakra-ui/core';
import { Link } from '@reach/router';
import React from 'react';

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
            <Link to="/profiles">Profiles</Link>
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
