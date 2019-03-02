import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import { store } from './main/store';
import { i18n } from './main/i18n';
import { Login } from './authentication/components';

export const appRootId = 'App-root';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <Login />
      </I18nextProvider>
    </Provider>
  );
}

export default App;
