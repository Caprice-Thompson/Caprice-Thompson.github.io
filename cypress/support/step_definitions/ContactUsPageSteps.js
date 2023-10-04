import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

And('I navigate to the Contact Us Page', () => {
    getLabel('contactUsPage').should('be.visible').click();
  });