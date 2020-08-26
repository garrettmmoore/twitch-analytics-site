import React from 'react';
import { Link } from '@reach/router';
import { SimpleGrid, Flex } from '@chakra-ui/core';
const NavBar = () => {
  return (
    <>
      <Flex direction="row">
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <nav>
          <Link to="/games">Game</Link>
        </nav>
      </Flex>
    </>
  );
};

export default NavBar;
