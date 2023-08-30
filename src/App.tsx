import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import { LinearProgress } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material';

/* Variables */
import { routes } from './routes/routes';
import { lightTheme } from './store/constants/constants';
import { setInitialTheme } from './store/reducers/theme-reducer';

function App() {
  const [currentTheme, setCurrentTheme] = React.useState(createTheme({}));
  const isThemeSet = useSelector((state: any) => state.theme.isThemeSet);
  const dispatch = useDispatch();
  const routing = useRoutes(routes);

  React.useEffect(() => {
    const setInitialTheming = async () => {
      setCurrentTheme(lightTheme);
      dispatch(setInitialTheme());
    };

    if (!isThemeSet) {
      setInitialTheming();
    }
  }, [dispatch, isThemeSet]);

  return (
    !isThemeSet ? (
      <>
        <LinearProgress />
      </>
    ) : 
    (
      <ThemeProvider theme={currentTheme}>
        {routing}
      </ThemeProvider>
    )
  )
};


export default App;