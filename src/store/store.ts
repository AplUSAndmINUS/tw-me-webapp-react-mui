import { configureStore } from '@reduxjs/toolkit';

import { themeReducer } from './reducers/toggle-theme';

// import themeSlice from './reducers/theme-slice';

export const store = configureStore({
  reducer: {
    theme: themeReducer
  },
});

export default store;