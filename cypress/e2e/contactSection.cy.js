describe('ContactSection Component - Happy Path', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display the main elements of the homepage', () => {
    cy.get('.home-header').should('be.visible');
    cy.get('.nav-bar').should('be.visible');
    cy.get('[href="/contact"]').should('contain', 'helpful resources');
    cy.get('[href="/contact"]').click();
  });

  it('should render the component correctly', () => {
    cy.visit('http://localhost:3000/contact');

    cy.location('pathname').should('eq', '/contact');
    cy.viewport(1280, 720);
    cy.get('.weallhuman-img').should('be.visible');
  });

  it('should navigate to the contact page from the homepage', () => {
    cy.visit('http://localhost:3000');
    cy.get('.nav-bar').should('be.visible');
    cy.get('[href="/contact"]').click();
    cy.url().should('include', '/contact');
  });
});

describe('ContactSection Component - Sad Path', () => {

  it('should handle missing image gracefully', () => {
    cy.intercept('GET', '**/usa-custom.jpeg', { statusCode: 404 });
    cy.visit('http://localhost:3000/contact');
    cy.reload();
    cy.viewport(1280, 720);
    cy.get('img[alt="usa-custom"]').should('be.visible');
  });
});
