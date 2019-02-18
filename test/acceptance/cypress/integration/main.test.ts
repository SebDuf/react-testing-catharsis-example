import { assertIsAtLocation } from '../utils/assertIsAtLocation';
import { testId } from '../../../utils/testIdSelector';

describe('App test', () => {
  it('should be able to find root', () => {
    assertIsAtLocation('/');

    cy.get(testId('App-root')).should(e => expect(e).to.exist);
  });
});
