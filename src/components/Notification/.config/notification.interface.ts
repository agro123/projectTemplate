import {DefaultTFuncReturn} from 'i18next';

export interface AppNotificationState {
  show: boolean;
  title: string | DefaultTFuncReturn;
  description?: string | DefaultTFuncReturn | null;
  type?: 'error' | 'success' | 'normal' | 'warn' | 'notification' | null;
}

export interface ShowNotificationProps {
  title: string | DefaultTFuncReturn;
  description?: string | DefaultTFuncReturn | null;
  type?: AppNotificationState['type'];
}
