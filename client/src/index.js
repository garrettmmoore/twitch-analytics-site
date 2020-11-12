import { CSSReset, ThemeProvider } from '@chakra-ui/core';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <CSSReset />
      <App />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
