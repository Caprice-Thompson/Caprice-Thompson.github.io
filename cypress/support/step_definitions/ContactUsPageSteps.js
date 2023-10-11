import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

And('I navigate to the Contact Us Page', () => {
    getLabel('contactPageTab').should('be.visible').click();
  });

  Then('I am presented with the Contact Us Page', () => {
    getLabel('contactTitleForm').should('be.visible');
    getLabel('contactTitleForm').should('contain.text', 'Sign the Wiki Treaty');
  });