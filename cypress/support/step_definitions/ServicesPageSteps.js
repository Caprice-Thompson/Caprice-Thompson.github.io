import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

And('I navigate to the Services page', () => {
  cy.visit('caprice-thompson.github.io/services.html');
  });

Then('I am presented with the Services Page', () => {
  getLabel('servicesPage').should('be.visible');
  getLabel('servicesPage').should('contain.text','Services');
});

Then('I am viewing Service Offers', () => {
  getLabel('offerLabels').should('be.visible');
  getLabel('offerLabels').should('contain.value','');
  cy.percySnapshot('Services Page');
});

And('I navigate to the Portfolio page', () => {
  cy.visit('caprice-thompson.github.io/portfolio-details.html');
  });

Then('I am presented with the Portfolio Page', () => {
  getLabel('portDeets').should('be.visible');
  getLabel('portDeets').should('contain.text','Portfolio Details');
  cy.percySnapshot('Portfolio Page');
});

