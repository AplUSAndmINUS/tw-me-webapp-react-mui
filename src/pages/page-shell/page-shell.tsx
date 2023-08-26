import { IconButton, Typography } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';
import ContentShell from './content-shell/content-shell';

export interface PageShellProps {
  handleToggle?: () => void;
  isDarkMode?: boolean;
}

export const PageShell = (props: PageShellProps) => {

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
      <ContentShell />
    </>
  )
};

export default PageShell;