import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    homePage: homePageReducer,
  },
});

export default store;