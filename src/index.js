import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import App from './App';
import theme from './Theme/Theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
