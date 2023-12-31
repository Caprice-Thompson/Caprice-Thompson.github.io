import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

When('I click the Read More button', () => {
    cy.get('[data-target="#aboutUsModal"]').click();
  });
  
  And('I close the modal', () => {
    cy.get('.clickable-span').click({ force: true, waitForAnimations: true });
  });