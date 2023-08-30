import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isHomePage: true
};

const homePageSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setIsHomePage: (state, action) => {
      state.isHomePage = action.payload;
    }
  }
});

export const { setIsHomePage } = homePageSlice.actions;

export default homePageSlice.reducer;