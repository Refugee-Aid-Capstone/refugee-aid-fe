describe('OrganizationDashboard Tests', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should display the main elements of the homepage', () => {
    cy.get('.home-header').should('be.visible');
    cy.get('.nav-bar').should('be.visible');
    cy.get('.nav-button').should('be.visible');
    cy.get('.nav-button').click();
  });

  // Happy Path
  it('should display organization details and aid requests correctly', () => {

    cy.fixture('organizationData.json').then((mockData) => {

      cy.intercept('POST', 'https://refugee-aid-capstone-be-fb1ab84cf89d.herokuapp.com/graphql', (req) => {
        if (req.body.operationName === 'getOneOrg') {
          req.reply({
            data: mockData
          });
        }
      });
    });

    cy.visit('http://localhost:3000/OrganizationDashboard');

    cy.location('pathname').should('eq', '/OrganizationDashboard')
    cy.viewport(1280, 720);
    cy.get('.organization-dashboard-container h1').should('contain', 'Welcome, Test Organization!');
    cy.get('.left-column > :nth-child(1)').should('contain', 'Aid Requests');

    cy.get('.left-column').should('contain', 'Food Aid');
    cy.get(':nth-child(2)').should('contain', 'Language: German');
    cy.get('.description').should('contain', 'Ipsum et nihil ducimus');
    cy.get(':nth-child(4)').should('contain', 'Status: pending');
    cy.get('.action-button').should('be.visible');
    cy.get('.action-button').should('be.visible');
    // cy.get('.action-button').eq(0).click();
    // cy.get(':nth-child(4)').should('contain', 'Status: approved');

    cy.get('.left-column').should('contain', 'Legal Aid');
    cy.get(':nth-child(2)').should('contain', 'Language: German');
    cy.get('.description').should('contain', 'Veniam dolorem hic sint');
    cy.get(':nth-child(4)').should('contain', 'Status: pending');
    cy.get('.action-button').should('be.visible');
    cy.get('.action-button').should('be.visible');
    // cy.get('.action-button').eq(1).click();
    // cy.get(':nth-child(4)').should('contain', 'Status: fulfilled');

    cy.get('.right-column > h3').should('contain', 'Organization Details');
    cy.get('.right-column > :nth-child(2)').should('contain', '1234567890');
    cy.get('.right-column > :nth-child(3)').should('contain', 'test@email.com');
    cy.get('.right-column > :nth-child(4)').should('contain', '4095 Dach Fords');
    cy.get('.right-column > :nth-child(5)').should('contain', 'http://heaney.example/serina.jerde');
    cy.get('.right-column > :nth-child(6)').should('contain', 'New York City');
    cy.get('.right-column > :nth-child(7)').should('contain', 'NY');
    cy.get('.right-column > :nth-child(8)').should('contain', '20813-8431');
  });


  // Sad Path
  it('should redirect to error page on failed data fetch', () => {
    cy.intercept('POST', 'https://refugee-aid-capstone-be-fb1ab84cf89d.herokuapp.com/graphql', {
      errors: [{ message: '500' }],
    });

    cy.visit('http://localhost:3000/OrganizationDashboard');
    cy.url().should('include', '/error500');
  });

  it('should redirect to error page on failed data fetch', () => {
    cy.intercept('POST', 'https://refugee-aid-capstone-be-fb1ab84cf89d.herokuapp.com/graphql', {
      errors: [{ message: '429' }],
    });

    cy.visit('http://localhost:3000/OrganizationDashboard');
    cy.url().should('include', '/general-error');
  });
});
