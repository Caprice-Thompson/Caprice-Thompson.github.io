import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

When('I click the Read More button', () => {
    cy.get('#openModalBtn').click();
  });
  
  And('I close the modal', () => {
    cy.get('.close').click();
  });