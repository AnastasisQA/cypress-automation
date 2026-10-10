class HomePage {
  visit() {
    cy.visit("/");
    return this;
  }

  openCommands() {
    cy.contains("Commands").click();
    return this;
  }
}

export default new HomePage();
