import {configureStore} from '@reduxjs/toolkit';
import commonData from './commonDataSlice';
import appNotification from 'components/Notification/.config/notificationSlice';

export const store = configureStore({
  reducer: {
    commonData,
    appNotification
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
