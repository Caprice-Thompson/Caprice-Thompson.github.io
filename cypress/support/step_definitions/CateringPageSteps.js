import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

Then('I am presented with the Catering page', () => {
    getLabel('caterHeader').should('be.visible');
    getLabel('caterHeader').should('have.text', 'catering');
  });

  And('I navigate to the Catering page', () => {
    getLabel('cataloguePage').should('be.visible').click();
  });
 
  When('I click the Read More button', () => {
    cy.get('#openModalBtn').click();
  });
  
  And('I close the modal', () => {
    cy.get('.close').click();
  });

  Then('I view Catering Profile Modal', dataTable => {
    getLabel('desc-cat-title').should('have.text', dataTable)
  });