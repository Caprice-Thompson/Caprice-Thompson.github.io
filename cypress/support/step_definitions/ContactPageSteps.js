import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

And('I navigate to the Contact Us Page', () => {
    getLabel('contactNav').should('be.visible').click();
  });

  Then('I am presented with the Contact Us Page', () => {
    getLabel('contactUsForm').should('be.visible');
    getLabel('contactUsForm').should('contain.text', 'Contact Us');
  });