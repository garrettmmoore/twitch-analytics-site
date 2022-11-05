import { Box } from '@chakra-ui/react';
import { MultiSelect } from 'react-multi-select-component';

const options = [
  { label: 'Fortnite ', value: '33214' },
  { label: 'Pub G', value: '493057' }
];

const GameTypesMenu = ({ selected, setSelected }) => {
  return (
    <Box w="200px" mr={5}>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={'Select'}
      />
    </Box>
  );
};

export default GameTypesMenu;
