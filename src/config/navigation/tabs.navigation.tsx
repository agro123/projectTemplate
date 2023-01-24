import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import TabBar from './TabBar';
import Home from 'views/Template';

const Tab = createBottomTabNavigator();

function RouterTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={TabBar}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: 'Home'}}
      />
    </Tab.Navigator>
  );
}

export default RouterTabs;
