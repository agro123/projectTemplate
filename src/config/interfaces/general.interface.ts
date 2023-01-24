import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';

export interface PropsScreen {
  route: RouteProp<ParamListBase>;
  navigation: NavigationProp<ParamListBase, string, any, any>;
  navigateWithReset?: (route: string, params?: any) => void;
}
