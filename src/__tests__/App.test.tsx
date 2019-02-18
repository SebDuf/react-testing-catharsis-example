import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { testId } from '../../test/utils/testIdSelector';
import App, { appRootId } from '../App';

export const appRootSelector = testId(appRootId);

it('renders root', () => {
  const component = createComponent();

  expect(component.exists(appRootSelector)).toBeTruthy();
});

function createComponent(props = {}): ShallowWrapper {
  const defaultProps = {
  };

  return shallow(<App {...defaultProps} {...props} />);
}
