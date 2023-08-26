// import { green, red, yellow } from '@mui/material/colors';
// import { createTheme } from '@mui/material/styles';

// import { TOGGLE_THEME } from '../actions/actions';
// import { createSlice } from '@reduxjs/toolkit';

// Older Way: 8.26.2023
// export function themeReducer(state = initialState, action: any) {
//   switch (action.type) {
//     case TOGGLE_THEME:
//       return {
//         ...state,
//         theme: state.theme === lightTheme ? darkTheme : lightTheme
//       };
//     default:
//       return state;
//   }
// }

import { TOGGLE_THEME } from '../actions/actions';
import { lightTheme, darkTheme } from '../constants/constants';

const initialState = {
  theme: lightTheme
};

export function themeReducer(state = initialState, action: any) {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === lightTheme ? darkTheme : lightTheme
      };
    default:
      return state;
  }
}