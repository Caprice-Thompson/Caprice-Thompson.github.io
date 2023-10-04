import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

And('I navigate to the Design page', () => {
    getLabel('designPage').should('be.visible').click();
  });
  
  Then('I am presented with the Design Page', () => {
    getLabel('designHeaderTitle').should('be.visible');
    getLabel('designHeaderTitle').should('contain.text', 'Inferior');
  });