import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      // mutating logic in reducers, which uses the Immer library,
      // detecting changes to a "draft state" and producing a brand new
      // immutable state based off those changes
      state.darkMode = !state.darkMode
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;