describe("[Regression] Forms", () => {
  beforeEach(() => {
    cy.visit("/commands/actions");
  });

  it("types into an input and keeps the value", () => {
    cy.get(".action-email").type("test.user@example.com").should("have.value", "test.user@example.com");
  });

  it("checks and unchecks a checkbox", () => {
    cy.get(".action-checkboxes [type='checkbox']").first().check({ force: true }).should("be.checked");
    cy.get(".action-checkboxes [type='checkbox']").first().uncheck({ force: true }).should("not.be.checked");
  });

  it("selects an option from a dropdown", () => {
    cy.get(".action-select").select("apples").should("have.value", "fr-apples");
  });
});
