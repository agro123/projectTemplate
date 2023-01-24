import {configureStore} from '@reduxjs/toolkit';
import commonData from './commonDataSlice';

export const store = configureStore({
  reducer: {
    commonData,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
