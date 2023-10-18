import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

And('I navigate to the Services page', () => {
    getLabel('pricingPageTab').should('be.visible').click();
  });

Then('I am presented with the Services Page', () => {
  getLabel('servicesPage').should('be.visible');
  getLabel('servicesPage').should('contain.text','Services');
});
// Buy House Now! Limited Time Only
Then('I am on the listing modal', (dataTable) => {
  const title = dataTable.rawTable[0][0];
  getLabel('listingTitle').should('be.visible');
  getLabel('listingTitle').should('contain.text', title);
  // cy.get('.imgHere').should('exist').and('be.visible');
  // cy.get('.imgHere').should('include', 'images/page4-img2.jpg');
});

Then('I am viewing Service Offers', () => {
  getLabel('offerLabels').should('be.visible');
  getLabel('offerLabels').should('have.value','Cat');
});
