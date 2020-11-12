import useLocalStorage from './useLocalStorage';

const useDropdown = (label, defaultState, options) => {
  const [state, setState] = useLocalStorage('defaultDropdown', defaultState);
  const id = `use-dropdown-${label.replace(' ', '').toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      <select
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
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
