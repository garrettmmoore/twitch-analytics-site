import { Button, Flex, Input } from '@chakra-ui/core';
import React from 'react';

const SearchBar = ({ name, value, onChange, label }) => (
  <label htmlFor="searchValue">
    <Flex>
      <Input
        border="solid"
        marginTop="10px"
        width="100%"
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onChange}
        marginRight={5}
        placeholder="Enter number"
      />
      <Button type="submit" isDisabled={!value} size="xl" padding="1em">
        {label}
      </Button>
    </Flex>
  </label>
);

export default SearchBar;
