// Custom commands available in every spec as cy.<name>()

// Select by data-cy attribute:  cy.getByCy("submit-button")
Cypress.Commands.add("getByCy", (value, options) => {
  return cy.get(`[data-cy="${value}"]`, options);
});

// Login once and reuse the session across tests (adjust selectors/URL to your app)
Cypress.Commands.add("login", (username, password) => {
  cy.session(
    [username, password],
    () => {
      cy.visit("/login");
      cy.getByCy("username").type(username);
      cy.getByCy("password").type(password, { log: false });
      cy.getByCy("login-button").click();
      cy.url().should("not.include", "/login");
    },
    { cacheAcrossSpecs: true }
  );
});
