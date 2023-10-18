import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

And('I navigate to the Teams page', () => {
    getLabel('designPage').should('be.visible').click();
  });
  
  Then('I am presented with the Teams Page', () => {
    getLabel('designHeaderTitle').should('be.visible');
    getLabel('designHeaderTitle').should('contain.text', 'Inferior');
  });