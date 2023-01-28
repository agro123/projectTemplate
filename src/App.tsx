import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'config/redux/store';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'config/utils/functions.utils';
import StackNavigation from 'config/navigation/stack.navigation';

import {I18nextProvider} from 'react-i18next';
import localization from '@localization/i18n.config';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={localization}>
        <NavigationContainer ref={navigationRef}>
          <StackNavigation />
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
}

export default App;
