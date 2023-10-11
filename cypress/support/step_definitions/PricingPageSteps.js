import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

And('I navigate to the Pricing page', () => {
    getLabel('pricingPageTab').should('be.visible').click();
  });

Then('I am presented with the Pricing Page', () => {
  getLabel('pricingPageHeader').should('be.visible');
  getLabel('pricingPageHeader').should('contain.text', 'spend Money here');
});
// Buy House Now! Limited Time Only
Then('I am on the listing modal', (dataTable) => {
  const title = dataTable.rawTable[0][0];
  getLabel('listingTitle').should('be.visible');
  getLabel('listingTitle').should('contain.text', title);
  // cy.get('.imgHere').should('exist').and('be.visible');
  // cy.get('.imgHere').should('include', 'images/page4-img2.jpg');
});