import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { getLabel } from '../commands';

// const aboutContent = getLabel('aboutGlobalSummary');
// const modalContent = getLabel('modalAboutDetails');

Then('I am presented with the About page', () => {
    getLabel('aboutTitle').should('be.visible');
    getLabel('aboutTitle').should('have.text', 'About');
  });

  And('I navigate to the About page', () => {
    getLabel('aboutNav').should('be.visible').click();
  });

Then('I verify About page content', dataTable => {
    const text = dataTable.rawTable[0][0].split('/');
    aboutContent.should('contain.text', text[0]);
    aboutContent.should('contain.text', text[1]);
  });

And('I am presented with the modal content', dataTable => {
    const text = dataTable.rawTable[0][0].split('/');
    cy.get('#aboutUsModalLabel').should('eq','Gloabl Dynasty!');
    aboutContent.should('contain.text', text[0]);
    aboutContent.should('contain.text', text[1]);
  });