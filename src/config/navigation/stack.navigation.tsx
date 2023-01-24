import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Tabs from './tabs.navigation';

enableScreens();
const Stack = createNativeStackNavigator();
function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{
        headerTintColor: 'white',
        animation: 'slide_from_right',
      }}>
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default StackNavigation;
