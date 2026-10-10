import HomePage from "../../pages/HomePage";

describe("[Smoke] Home page", () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it("loads the home page", () => {
    cy.get("h1").should("be.visible");
    cy.title().should("not.be.empty");
  });

  it("navigates to the commands menu", () => {
    HomePage.openCommands();
    cy.contains("Actions").should("be.visible");
  });
});
