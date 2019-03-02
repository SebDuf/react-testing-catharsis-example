import React from 'react';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';

import { store } from '../../src/main/store';
import { i18n } from '../../src/main/i18n';

interface Props {
  children: JSX.Element;
}

function TestHarness({ children }: Props): JSX.Element {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        {children}
      </I18nextProvider>
    </Provider>
  );
}

export default TestHarness;
