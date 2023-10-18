import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

And('I navigate to the Teams page', () => {
    getLabel('teamNav').should('be.visible').click();
  });
  
  Then('I am presented with the Teams Page', (dataTable) => {
    const teamsMsg = dataTable.rawTable[0][0];
    getLabel('teamSubTitle').should('be.visible');
    getLabel('teamSubTitle').should('contain.text', teamsMsg);
  });