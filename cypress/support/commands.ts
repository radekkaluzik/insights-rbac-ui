/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('login', (enableWorkspaces = false) => {
  const usernameVariable = enableWorkspaces ? 'E2E_WORKSPACES_USER' : 'E2E_USER';
  const passwordVariable = enableWorkspaces ? 'E2E_WORKSPACES_PASSWORD' : 'E2E_PASSWORD';
  cy.session(
    `login-${Cypress.env(usernameVariable)}`,
    () => {
      cy.intercept({ url: '/beta/apps/*', times: 1 }, {});
      cy.intercept({ url: '/api/', times: 4 }, {});
      // This JS file causes randomly an uncaught exception on login page which blocks the tests
      // Cannot read properties of undefined (reading 'setAttribute')
      cy.intercept({ url: 'https://sso.stage.redhat.com/auth/resources/0833r/login/rhd-theme/dist/pfelements/bundle.js' }, {});
      Cypress.on('uncaught:exception', (err) => {
        console.log(err);
        return false;
      });
      cy.visit('/');
      // disable analytics integrations
      cy.setLocalStorage('chrome:analytics:disable', 'true');
      cy.setLocalStorage('chrome:segment:disable', 'true');

      cy.wait(1000);
      // login into the session
      cy.get('#username-verification').type(Cypress.env(usernameVariable));
      cy.get('#login-show-step2').click();
      cy.get('#password').type(Cypress.env(passwordVariable));
      cy.get('#rh-password-verification-submit-button').click();
      // cy.url().should('eq', `${Cypress.config().baseUrl}/`);
    },
    { cacheAcrossSpecs: true },
  );
});
