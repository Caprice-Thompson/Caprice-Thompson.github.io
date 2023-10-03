import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

Then('I am presented with the Catering page', () => {
    getLabel('caterHeader').should('be.visible');
    getLabel('caterHeader').should('have.text', 'catering');
  });
 
  And('I click the Read More button', () => {
    cy.get('#openModalBtn').click();
  });
  
  And('I close the modal', () => {
    cy.get('.close').click();
  });