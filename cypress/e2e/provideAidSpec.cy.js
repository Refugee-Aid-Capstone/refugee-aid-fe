import { aliasQuery, hasOperationName } from '../utils/graphql-testing-utils';

describe('Provide Aid', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/provideAid');
  });

  it('should go to the provide aid page', () => {
    cy.location('pathname').should('eq', '/provideAid')
    cy.get('.nav-bar').should('be.visible')
    cy.get('.search-section').should('exist')
    cy.get('.organization-display').should('exist')
    cy.get('.welcome-image').should('be.visible')

  });

  it('should get all requests for a given location', () => {
    cy.intercept('POST', 'https://refugee-aid-capstone-be-fb1ab84cf89d.herokuapp.com/graphql', req => {
      aliasQuery(req, 'getAllRequestByArea');
      if (hasOperationName(req, 'getAllRequestsByArea')) {
        req.reply({ fixture: 'allRequests.json' });
      }
    });
  })
});
