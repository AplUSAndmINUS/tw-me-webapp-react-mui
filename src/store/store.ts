import { configureStore } from '@reduxjs/toolkit';

import homePageReducer from './reducers/home-page-reducer';
import themeReducer from './reducers/theme-reducer';

export const store = configureStore({
  reducer: {
    home: homePageReducer,
    theme: themeReducer
  }
});

export default store;