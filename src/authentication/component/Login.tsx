import React from 'react';
import { useTranslation } from 'react-i18next';

import { appRootId } from '../../App';

interface Props {
  onLogin: () => void;
}

function Login({ onLogin }: Props): JSX.Element {
  const { t } = useTranslation('authentication');

  return (
    <div data-testid={appRootId}>
      {t('email')}
      <button onClick={onLogin} type="submit">
        {t('login')}
      </button>
    </div>
  );
}

export default Login;
