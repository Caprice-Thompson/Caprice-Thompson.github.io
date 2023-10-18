import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

Then('I am presented with the Catering page', () => {
    getLabel('caterHeader').should('be.visible');
    getLabel('caterHeader').should('have.text', 'Catering');
  });

  And('I navigate to the Catering page', () => {
    getLabel('cateringPageTab').should('be.visible').click();
  });

  Then('I view Catering Profile Modal', dataTable => {
    const text = dataTable.rawTable[0][0].split('/');
    getLabel('desc-cat-title').should('contain.text', text[0]);
    getLabel('desc-cat-title').should('contain.text', text[1]);
  });