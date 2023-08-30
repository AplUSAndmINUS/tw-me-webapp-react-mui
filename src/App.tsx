import React from 'react';
import { useDispatch } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material';

/* Variables */
import { routes } from './routes/routes';
import { theme } from './store/constants/constants'

function App() {
  const dispatch = useDispatch();
  const routing = useRoutes(routes);

  return (
    !theme ? (
      <>
        <LinearProgress />
      </>
    ) : 
    (
      <ThemeProvider theme={theme}>
        {routing}
      </ThemeProvider>
    )
  )
};


export default App;