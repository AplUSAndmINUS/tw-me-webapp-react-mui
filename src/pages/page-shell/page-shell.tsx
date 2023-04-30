import React from 'react';
import { IconButton, Typography } from '@mui/material';
import { DarkMode } from '@mui/icons-material';

export const PageShell = () => {
  return (
    <>
      <IconButton 
        color="secondary" 
        disableRipple
        disableFocusRipple>
        <DarkMode />
      </IconButton>
      <Typography variant="h1">PageShell page</Typography>
    </>
  )
};

export default PageShell;