import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

And('I navigate to the Pricing page', () => {
    getLabel('pricingPage').should('be.visible').click();
  });

Then('I am presented with the Pricing Page', () => {
  getLabel('pricingPageHeader').should('be.visible');
  getLabel('pricingPageHeader').should('contain.text', 'Spend Money Here');
});
// Buy House Now! Limited Time Only
Then('I am on the listing modal', (dataTable) => {
  getLabel('listingTitle').should('be.visible');
  getLabel('listingTitle').should('contain.text', dataTable);
  cy.get('.imgHere').should('exist').and('be.visible');
  cy.get('.imgHere').should('have.attr', 'src').should('include', 'images/page4-img2.jpg');
});