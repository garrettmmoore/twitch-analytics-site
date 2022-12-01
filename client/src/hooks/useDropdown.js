import useLocalStorage from './useLocalStorage';
import { Select } from '@chakra-ui/react';

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useLocalStorage('defaultDropdown', defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

  const Dropdown = () => (
    <Select
      style={{ border: 'solid', borderColor: '#eee', borderRadius: '.25em' }}
      id={id}
      value={state}
      onChange={e => setState(e.target.value)}
      onBlur={e => setState(e.target.value)}
    >
      {options.map(item => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
