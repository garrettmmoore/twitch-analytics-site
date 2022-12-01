import { Button, Flex, Input } from '@chakra-ui/react';

const SearchBar = ({ name, value, onChange, label }) => (
  <Flex alignItems="baseline">
    <Input
      border="solid"
      borderWidth=".1rem"
      marginTop="10px"
      width="200px"
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onChange}
      marginRight={5}
      mb={5}
      placeholder="Enter number"
    />
    <Button type="submit" isDisabled={!value} w="md" padding="1em">
      {label}
    </Button>
  </Flex>
);

export default SearchBar;
