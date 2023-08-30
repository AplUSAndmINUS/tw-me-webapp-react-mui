import { IconButton, Typography } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';

import ContentShell from './content-shell/content-shell';

export interface PageShellProps {
  handleToggle?: () => void;
  isDarkMode?: boolean;
}

export const PageShell = (props: PageShellProps) => {
  const isHomePage = useSelector((state: any) => state.isHomePage);
  const dispatch = useDispatch();

  return (
    <>
      <IconButton 
        color="inherit" 
        disableRipple
        disableFocusRipple
        onClick={() => props.handleToggle}>
        {props.isDarkMode ? <DarkMode /> : <LightMode />}
      </IconButton>
      <Typography variant="h1">PageShell page</Typography>
      <ContentShell isHomePage={isHomePage} />
    </>
  )
};

export default PageShell;