import { Link, Outlet } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';
export function Layout() {
  return (
    <div>
      <Flex direction="row" mb="10px">
        <nav>
          <Box background="bisque" borderRadius=".25em" padding={'4'} m="10px">
            <Link to="/">Home</Link>
          </Box>
        </nav>
        <nav>
          <Box background="bisque" borderRadius=".25em" padding={'4'} m="10px">
            <Link to="/profiles">Profiles</Link>
          </Box>
        </nav>
        <nav>
          <Box background="bisque" borderRadius=".25em" padding={'4'} m="10px">
            <Link to="/games">Games</Link>
          </Box>
        </nav>
      </Flex>

      <hr />

      {/**
       * An <Outlet> renders whatever child route is currently active,
       * It acts as a placeholder for the child routes we defined above.
       */}
      <Outlet />
    </div>
  );
}
