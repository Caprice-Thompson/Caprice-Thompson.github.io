// cypress/integration/step_definitions/my_steps.js

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

Given('I open the application', () => {
  cy.visit('Caprice-Thompson.github.io');
  getLabel('homeNavBar').should('be.visible');
});

Then('I am presented with the Landing page', () => {
getLabel('homeHeader').should('have.text', 'Wiki Treats');
  getLabel('homeNavBar').should('be.visible');
});

And('I navigate to the Services page', () => {
  getLabel('servicePage').should('be.visible').click();
});

And('I navigate to the Catalogue page', () => {
  getLabel('cataloguePage').should('be.visible').click();
});

And('I navigate to the Pricing page', () => {
  getLabel('pricingPage').should('be.visible').click();
});

And('I navigate to the Contact Us Form', () => {
  getLabel('contactUsPage').should('be.visible').click();
});

Then('I should see the expected result', () => {
  // Cypress code for assertion
});

And('I select the Read more button', () => {
    // Cypress code for assertion
  });

Then('I am presented with rent modal ', () => {
    // Cypress code for assertion
  });
  
And('I click pricing title', () => {
    // Cypress code for assertion
  });  
