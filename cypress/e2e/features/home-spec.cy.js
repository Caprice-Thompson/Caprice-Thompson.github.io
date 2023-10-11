// export const getByAriaLabel = element.getAttribute('aria-label'); 
// cypress/integration/sample-test.spec.js
describe('Home page', () => {
  beforeEach(() => {
    // This code will run before each test case
    cy.visit('Caprice-Thompson.github.io'); // Replace with your website URL
  });
  it('displays page title', () => {
    // Your test case code here
    cy.get('[aria-label="homeHeader"]').should('have.text', 'wiki treats');// Replace with an element on your webpage
    cy.get('[aria-label="homeNavBar"]').should('be.visible');
  });

  // it('Test Case 2', () => {
  //   // Your test case code here
  //   cy.get('input[type="text"]').type('Cypress Test'); // Example interaction with an input field
  // });

  

});
// describe('Home Page', () => {
//     it('Visits the homepage', () => {
//       cy.visit('Caprice-Thompson.github.io'); // Replace with your website URL
//       cy.contains('Wiki Treats'); // Replace with an element on your webpage
//     });
//   });
  