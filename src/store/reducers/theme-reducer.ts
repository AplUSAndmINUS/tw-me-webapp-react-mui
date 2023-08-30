import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isThemeSet: false,
  isDarkMode: false
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setInitialTheme: (state) => {
      state.isThemeSet = true
    },
    setTheme: (state, action) => {
      state.isDarkMode = action.payload;
    },
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
    }
  }
});

export const { setInitialTheme, setTheme, toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;