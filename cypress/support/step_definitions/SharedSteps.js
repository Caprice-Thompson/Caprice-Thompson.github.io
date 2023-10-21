import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

When('I click the Read More button', () => {
    cy.get('[data-target="#aboutUsModal"]').click();
  });
  
  And('I close the modal', () => {
    // cy.get('modal-footer').should('be.visible');
    cy.get('modal-content').contains('[aria-label="closeModal"]').click();
    getLabel('closeModal').click({force: true});
    // getLabel('closeModal').should('be.visible').click();
  });