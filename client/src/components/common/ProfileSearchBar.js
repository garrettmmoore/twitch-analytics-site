import { Input, Flex, Button } from '@chakra-ui/react';

const ProfileSearchBar = ({ query, setQuery, label }) => (
  <label htmlFor="searchValue">
    <Flex marginLeft="20px" alignItems="baseline">
      <Input
        border="solid"
        marginTop="10px"
        width="100%"
        marginRight={5}
        placeholder="Enter username"
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onBlur={e => setQuery(e.target.value)}
      />
      <Button
        type="submit"
        isDisabled={!query}
        paddingLeft="4em"
        paddingRight="4em"
      >
        {label}
      </Button>
    </Flex>
  </label>
);

export default ProfileSearchBar;
