import { mount } from 'enzyme';
import React from 'react';
import { testId } from 'test/utils/testIdSelector';
import TestHarness from 'test/utils/TestHarness';

import { Login } from '../index';

describe('Login component', () => {
  describe('when rendering', () => {
    it('should render root', async () => {
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
