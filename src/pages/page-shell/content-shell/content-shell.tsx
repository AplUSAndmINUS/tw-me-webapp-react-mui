import React from 'react';
import { Grid, Typography } from '@mui/material';

import './styled';

interface ContentShellProps {
  isHomePage?: boolean;
}

export const ContentShell = ({isHomePage = true}: ContentShellProps) => {

  return (
    <Grid container padding={4} spacing={3}>
      <Grid item xs={12} md={isHomePage ? 6 : 4} alignItems="center" justifyContent="center">
        <Typography variant="h3">Left Column</Typography>
      </Grid>
      <Grid item xs={12} md={isHomePage ? 6 : 8} alignItems="center" justifyContent="center">
        <Typography variant="h3">Right Column</Typography>
      </Grid>
    </Grid>
  )
}

export default ContentShell;