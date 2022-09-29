import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles'
import { themeDashboard } from './theme/theme';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < BrowserRouter>
    <ThemeProvider theme={themeDashboard}>
      <App />
    </ThemeProvider>
  </ BrowserRouter>
);


