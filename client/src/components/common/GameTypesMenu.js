import React from 'react';
import MultiSelect from 'react-multi-select-component';

const options = [
  { label: 'Fortnite ', value: '33214' },
  { label: 'Pub G', value: '493057' }
];

const GameTypesMenu = ({ selected, setSelected }) => {
  return (
    <div>
      <h1>Select Games</h1>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy={'Select'}
      />
    </div>
  );
};

export default GameTypesMenu;
