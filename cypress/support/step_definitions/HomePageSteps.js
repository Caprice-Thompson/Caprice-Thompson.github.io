// cypress/integration/step_definitions/my_steps.js

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

const homePageHeader = getLabel('landingHeader');
const joinUsNowBtn = getLabel('joinArrowNav');

Given('I open the application', () => {
  cy.visit('Caprice-Thompson.github.io');
  getLabel('homeNavBar').should('be.visible');
});

Then('I am presented with the Landing page', () => {
  homePageHeader.should('be.visible');
  homePageHeader.should('have.text', 'wiki treats');
  getLabel('landingDesc').should('contain.text', 'The Cat Encyclopedia');
});

When('I click the Join Us Now Button', () => {
  joinUsNowBtn.should('be.visible').click();
});

And('I open the Get Started Modal', () => {
cy.get('getstarted').contains('Get Started').click();
});

Then('The Introductory Offer form is displayed', () => {
  cy.get('modal-header').should('be.visible');
  cy.get('modalDetails').should('have.text', 'Get Started Today!');
  });

And('The Introductory Offer form is text is verified', (dataTable) => {
const msg = dataTable.rawTable[0][0].split('/');
getLabel('modalDetails').should('contain.text', msg[0]);
getLabel('modalDetails').should('contain.text', msg[1]);
}); 

  
