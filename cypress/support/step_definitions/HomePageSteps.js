// cypress/integration/step_definitions/my_steps.js

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

Given('I open the application', () => {
  cy.visit('Caprice-Thompson.github.io');
  getLabel('homeNavBar').should('be.visible');
});

Then('I am presented with the Landing page', () => {
getLabel('homeHeader').should('have.text', 'wiki treats');
  getLabel('homeNavBar').should('be.visible');
});

