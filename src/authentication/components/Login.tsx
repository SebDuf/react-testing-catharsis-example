import React from 'react';
import { useTranslation } from 'react-i18next';

import { appRootId } from '../../App';

function Login(): JSX.Element {
  const { t } = useTranslation('authentication');

  return (
    <div data-testid={appRootId}>
      {t('email')}
    </div>
  );
}

export default Login;
