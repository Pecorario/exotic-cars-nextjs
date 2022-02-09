import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import carSlice from './cars-slice';

const store = configureStore({
  reducer: {
    cars: carSlice.reducer
  }
});

export default store;
