export function assertIsAtLocation(location: string): void {
  cy.url()
    .then(url => {
      if (url !== Cypress.config().baseUrl + location) {
        cy.visit(location);
      }
    });

  cy.url()
    .should('eq', Cypress.config().baseUrl + location);
}
