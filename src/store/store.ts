import { configureStore } from '@reduxjs/toolkit';

import { themeSlice } from './reducers/theme-slice';

export const store = configureStore({
  reducer: {
    toggleTheme: themeSlice.reducer
  },
});

export default store;