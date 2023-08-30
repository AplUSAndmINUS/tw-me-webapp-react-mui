import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { createGlobalStyle } from 'styled-components';

/* Variables */
import { routes } from './routes/routes';
import { theme } from './store/constants/constants'

function App() {
  const dispatch = useDispatch();
  const routing = useRoutes(routes);

  // const [isThemeReady, setIsThemeReady] = React.useState(false);

  // this doesn't work- need to figure out dark/light mode toggle later
  // React.useEffect(() => {
  //   if (theme) {
  //     setIsThemeReady(true);
  //   }
  // }, [theme]);

  // console.log('Redux:', theme);
  // console.log(isThemeReady);

  return (
    !theme ? (
      <>
        <LinearProgress />
      </>
    ) : 
    (
      <ThemeProvider theme={theme}>
        <Router>
          {routing}
        </Router>
      </ThemeProvider>
    )
  )
};


export default App;