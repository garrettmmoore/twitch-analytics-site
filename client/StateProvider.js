import { createContext, useContext, useReducer } from 'react';

// Wrap app with data layer
export const StateContext = createContext();

/**
 * @param {reducer} function Listen to any action that gets fired into the data layer
 * @param {initialState} object Initial state values of the application
 * @param {children} object App that will be wrapped
 */
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Access information from the data layer
export const useStateValue = () => useContext(StateContext);
