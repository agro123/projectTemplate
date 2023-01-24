import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'config/redux/store';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'config/utils/functions.utils';
import StackNavigation from 'config/navigation/stack.navigation';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <StackNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
