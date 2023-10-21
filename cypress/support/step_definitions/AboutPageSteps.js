import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';


Then('I am presented with the About page', () => {
    getLabel('aboutTitle').should('be.visible');
    getLabel('aboutTitle').should('have.text', 'About');
  });

  And('I navigate to the About page', () => {
    getLabel('aboutNav').should('be.visible').click();
  });

Then('I verify About page content', dataTable => {
    const text = dataTable.rawTable[0][0];
    getLabel('aboutGlobalSummary').should('contain.text', text);
  });

And('I am presented with the modal content', dataTable => {
    const text = dataTable.rawTable[0][0];
    // cy.get('#aboutUsModalLabel').should('eq','Gloabl Dynasty!');
    getLabel('modalAboutDetails').should('contain.text', text);
  });