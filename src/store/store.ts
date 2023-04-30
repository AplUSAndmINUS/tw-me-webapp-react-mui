import { configureStore } from '@reduxjs/toolkit';

import themeSlice from './reducers/theme-slice';

export const store = configureStore({
  reducer: {
    theme: themeSlice
  },
});

export default store;