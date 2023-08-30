import { configureStore } from '@reduxjs/toolkit';

import { setIsHomePage } from './reducers/home-page-reducer';

export const store = configureStore({
  reducer: {
    app: setIsHomePage
  }
});

export default store;