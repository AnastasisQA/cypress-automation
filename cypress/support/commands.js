//Open thinking-tester-contact-list.herokuapp link
Cypress.Commands.add("OpenThinkTesterPage", () => {
  cy.visit('https://thinking-tester-contact-list.herokuapp.com')
  //cy.get('.nav', { timeout: 5000 })
});


// Login once and reuse the session across tests (adjust selectors/URL to your app)
Cypress.Commands.add("Login", (email, password) => {
      cy.get('#email').should('exist').and('be.visible').type(email)
      cy.get('#password').should('exist').and('be.visible').type(password)
      cy.get('#submit').should('exist').and('be.visible').click()
})

Cypress.Commands.add("AddUser", (firstName, lastName, email, password) => {
      cy.get('#signup').should('exist').and('be.visible').click()
      cy.get('#firstName').should('exist').and('be.visible').type(firstName)
      cy.get('#lastName').should('exist').and('be.visible').type(lastName)
      cy.get('#email').should('exist').and('be.visible').type(email)
      cy.get('#password').should('exist').and('be.visible').type(password)
      cy.get('.main-content').contains('Submit').should('be.visible').click()
})

