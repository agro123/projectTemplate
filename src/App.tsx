import React from 'react';
import {Provider} from 'react-redux';
import {store} from 'config/redux/store';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from 'config/utils/functions.utils';
import StackNavigation from 'config/navigation/stack.navigation';

import {I18nextProvider} from 'react-i18next';
import localization from 'config/locales/i18n.config';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <I18nextProvider i18n={localization}>
          <StackNavigation />
        </I18nextProvider>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
