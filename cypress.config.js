// const { defineConfig } = require("cypress");
// const cucumber = require('cypress-cucumber-preprocessor').default;

// module.exports = defineConfig({
//   chromeWebSecurity: false,
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//       on('file:preprocessor', cucumber());
//     },
//     // specPattern: 'cypress/e2e/**/features/*.{feature,features,cy.js}', 
//     specPattern: 'cypress/e2e/**/features/*.{feature,features}',
//     excludeSpecPattern: '**/integration/modules/*.js',
//     experimentalWebKitSupport: true,
//     experimentalRunAllSpecs: true,
//   },
// });
const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  responseTimeout: 20000,
  chromeWebSecurity: false,
  waitForAnimations: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber());
    },
    specPattern: 'cypress/e2e/**/features/*.{feature,features,cy.js}', 
  },
});
