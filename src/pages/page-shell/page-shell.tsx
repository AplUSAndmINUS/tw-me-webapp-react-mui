import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Typography } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

import { toggleTheme } from '../../store/reducers/theme-slice';

export const PageShell = () => {
  const darkMode = useSelector((state: any) => state.theme.darkMode);
  const dispatch = useDispatch();

  return (
    <>
      <IconButton 
        color="secondary" 
        disableRipple
        disableFocusRipple
        onClick={() => dispatch(toggleTheme())}>
        {darkMode ? <DarkMode /> : <LightMode />}
      </IconButton>
      <Typography variant="h1">PageShell page</Typography>
    </>
  )
};

export default PageShell;