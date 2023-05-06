import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {
  AppNotificationState,
  ShowNotificationProps,
} from './notification.interface';

const initialState: AppNotificationState = {
  show: false,
  title: '',
  description: '',
  type: null,
};

export const appNotificationSlice = createSlice({
  name: 'appNotification',
  initialState,
  reducers: {
    showNotification: (
      state,
      {payload}: PayloadAction<ShowNotificationProps>,
    ) => {
      const {title, description, type} = payload;
      state.show = true;
      state.title = title;
      state.description = description;
      state.type = type;
    },
    hideNotification: state => {
      const {show, title, description, type} = initialState;
      state.show = show;
      state.title = title;
      state.description = description;
      state.type = type;
    },
  },
});

export const {showNotification, hideNotification} =
  appNotificationSlice.actions;

//export const selectCount = (state: RootState) => state.value;

export default appNotificationSlice.reducer;
