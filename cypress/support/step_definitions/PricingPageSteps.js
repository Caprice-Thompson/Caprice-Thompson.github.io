import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

And('I navigate to the Pricing page', () => {
    getLabel('pricingPage').should('be.visible').click();
  });