import { mount } from 'enzyme';
import React from 'react';

import { Login } from '../index';
import { testId } from '../../../../test/utils/testIdSelector';
import TestHarness from '../../../../test/utils/TestHarness';

describe('Login component', () => {
  describe('when rendering', () => {
    it('should render', async () => {
      const component = createComponent();

      expect(component.exists(testId('login'))).toBeTruthy();
    });
  });
});

function createComponent(props = {}): any {
  const defaultProps = {
    onLogin: jest.fn(),
  };

  const component = <TestHarness><Login {...defaultProps} {...props} /></TestHarness>;

  return mount(component);
}
