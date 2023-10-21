// cypress/integration/step_definitions/my_steps.js

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

Given('I open the application', () => {
  cy.visit('Caprice-Thompson.github.io');
  getLabel('landingHeader').should('be.visible');
});

Then('I am presented with the Landing page', () => {
  getLabel('landingHeader').should('be.visible');
  getLabel('landingHeader').should('have.text', 'WIKI TREATS');
  getLabel('landingDesc').should('contain.text', 'THE CAT ENCYCLOPEDIA');
});

When('I click the Join Us Now Button', () => {
  getLabel('joinArrowNav').click();
  getLabel('joinArrowNav').should('be.visible').click();
});

And('I open the Get Started Modal', () => {
cy.get('.getstarted').contains('Get Started').click();
});

Then('The Introductory Offer form is displayed', () => {
  cy.get('#exampleModalLabel').should('be.visible');
  cy.get('#exampleModalLabel').should('have.text', 'Get Started Today!');
  cy.get('.line-spacing').should('have.text', 'Introductory Offer');
  });

And('The Introductory Offer form is text is verified', (dataTable) => {
const msg = dataTable.rawTable[0][0];
getLabel('modalDetails').should('contain.text', msg);
}); 

  
