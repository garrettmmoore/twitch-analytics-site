import { Button, Flex, Input } from '@chakra-ui/core';

const SearchBar = ({ name, value, onChange, label }) => (
  <label htmlFor="searchValue">
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
      <Button type="submit" isDisabled={!value} size="md" padding="1em">
        {label}
      </Button>
    </Flex>
  </label>
);

export default SearchBar;
