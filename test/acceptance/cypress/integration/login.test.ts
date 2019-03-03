import { assertIsAtLocation } from '../utils/assertIsAtLocation';
import { testId } from '../../../utils/testIdSelector';

describe('Login', () => {
  beforeEach(() => {
    cy.reload(true);
  });

  describe('given a username and password', () => {
    it('should be able to login', () => {
      assertIsAtLocation('/login');

      cy.get(testId('loginUsernameInput')).type('username');
      cy.get(testId('loginPasswordInput')).type('password');
      cy.get(testId('loginButton')).click();

      cy.get(testId('main')).should(e => expect(e).to.exist);
    });
  });

  describe('given only a username', () => {
    it('should NOT be able to login', () => {
      assertIsAtLocation('/login');

      cy.get(testId('loginUsernameInput')).type('username');
      cy.get(testId('loginButton')).click();

      cy.get(testId('main')).should(e => expect(e).to.not.exist);
    });
  });

  describe('given only a password', () => {
    it('should NOT be able to login', () => {
      assertIsAtLocation('/login');

      cy.get(testId('loginPasswordInput')).type('password');
      cy.get(testId('loginButton')).click();

      cy.get(testId('main')).should(e => expect(e).to.not.exist);
    });
  });
});
