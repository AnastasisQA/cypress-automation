const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // projectId: "xxxxxx", // add when you connect Cypress Cloud
  e2e: {
    baseUrl: "https://example.cypress.io", // <-- replace with your app under test
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
    supportFile: "cypress/support/e2e.js",
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 8000,
    retries: { runMode: 2, openMode: 0 },
    env: {
      apiUrl: "https://jsonplaceholder.typicode.com",
    },
    setupNodeEvents(on, config) {
      // Optional: load per-environment config, e.g. cypress.env.json or config/<env>.json
      return config;
    },
  },
});
