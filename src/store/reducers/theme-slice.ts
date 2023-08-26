// import { green, red, yellow } from '@mui/material/colors';
// import { createTheme } from '@mui/material/styles';

// import { TOGGLE_THEME } from '../actions/actions';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDarkMode: true
};

export const themeSlice = createSlice({
  name: "toggleTheme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // mutating logic in reducers, which uses the Immer library,
      // detecting changes to a "draft state" and producing a brand new
      // immutable state based off those changes
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

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