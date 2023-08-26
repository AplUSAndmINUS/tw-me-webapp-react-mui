import { green, red, yellow } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#445f75',
      contrastText: '#000'
    },
    secondary: {
      main: '#ddd',
      contrastText: '#000'
    },
    success: {
      main: green[800],
      contrastText: '#000'
    },
    error: {
      main: red[800],
      contrastText: '#fff'
    },
    warning: {
      main: yellow[800],
      contrastText: '#fff'
    },
    info: {
      main: '#3d6bb3',
      contrastText: '#fff'
    },
    background: {
      paper: 'linear-gradient(#fff 0%, #f5f5f5 68.35%, rgba(255, 252, 252, 0.22) 100%)',
      default: '#fff'
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
        'Helvetica',
        'Helvetica Neue',
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
        'Helvetica',
        'Helvetica Neue',
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
});

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#a4c3e6',
      contrastText: '#fff'
    },
    secondary: {
      main: '#333',
      contrastText: '#dedede'
    },
    success: {
      main: green[500],
      contrastText: '#fff'
    },
    error: {
      main: red[700],
      contrastText: '#fff'
    },
    warning: {
      main: yellow[500],
      contrastText: '#fff'
    },
    info: {
      main: '#4f7ecb',
      contrastText: '#fff'
    },
    background: {
      paper: 'linear-gradient(#535353 0%, #383838 64.82%, #5c5c5c 100%)',
      default: '#fff'
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
        'Helvetica',
        'Helvetica Neue',
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
        'Helvetica',
        'Helvetica Neue',
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
});