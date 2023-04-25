import { createTheme } from '@mui/material/styles';
import { green, red, yellow } from '@mui/material/colors';

// toggle for light/dark mode: https://mui.com/material-ui/customization/dark-mode/
// create palettes for each type, then objects for each of the elements themselves
export const theme = createTheme({
  palette: {
    primary: {
      light: '#3d6bb3',
      main: '#0d47a1',
      dark: '#093170',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#00b0ff',
      dark: '#ba000d',
      contrastText: '#ddd'
    },
    success: {
      light: green[500],
      main: green[700],
      dark: green[800],
      contrastText: '#fff'
    },
    error: {
      light: red[500],
      main: red[700],
      dark: red[800],
      contrastText: '#fff'
    },
    warning: {
      light: yellow[500],
      main: yellow[700],
      dark: yellow[800],
      contrastText: '#fff'
    },
    info: {
      light: '#3d6bb3',
      main: '#0d47a1',
      dark: '#093170',
      contrastText: '#fff' 
    }
    },
    transitions: {
      easing: {
        // This is the most common easing curve.
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        // Objects enter the screen at full velocity from off-screen and slowly decelerate to a resting point.
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        // Objects leave the screen at full velocity. They do not decelerate when off-screen.
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        // The sharp curve is used by objects that may return to the screen at any time.
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontFamily: [
          'proxima-nova',
          'sans-serif'
        ].join(','),
        fontSize: '4rem',
        '@media (max-width:600px)': {
          fontSize: '2.75rem'
        },
        fontWeight: 800,
        letterSpacing: '1px',
        textTransform: 'uppercase',
      },
      h2: {
        fontFamily: [
          'roboto',
          '"Helvetica Neue Light"',
          '"Arial Light"',
          'sans-serif'
        ].join(','),
        fontSize: '3rem',
        '@media (max-width:600px)': {
          fontSize: '2rem'
        },
        fontWeight: 200,
        letterSpacing: '-0.1px'
      },
      h3: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          'roboto',
          'Helvetica',
          'Helvetica Neue',
          'Arial',
          'sans-serif'
        ].join(','),
        fontSize: '1.5rem',
        '@media (max-width:600px)': {
          fontSize: '1.25rem'
        },
        fontWeight: 'normal',
        letterSpacing: '-0.1px'
      },
      h4: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          'roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ].join(','),
        fontSize: '1rem',
        fontWeight: 'normal',
      },
      h5: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          'roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ].join(','),
        fontSize: '0.75rem',
        fontWeight: 600
      },
      h6: {
        fontFamily: [
          'roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ].join(','),
        fontSize: '0.6rem',
        fontWeight: 600,
        letterSpacing: '0.2px',
        textTransform: 'uppercase',
      },
      body1: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          'roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        fontSize: '1rem',
        fontWeight: 'normal'
      },
      body2: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          'roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        fontSize: '0.75rem',
        fontWeight: 'normal'
      },
      button: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          'roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        fontSize: '0.75rem',
        fontWeight: 'normal'
      },
      caption: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          'roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        fontSize: '0.5rem',
        fontWeight: 'normal'
      },
    }
  },
);
