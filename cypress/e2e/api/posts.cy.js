describe("[API] Posts", () => {
  const api = Cypress.env("apiUrl");

  it("returns a list of posts", () => {
    cy.request(`${api}/posts`).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.length.greaterThan(0);
    });
  });

  it("creates a post", () => {
    cy.fixture("users").then(({ newPost }) => {
      cy.request("POST", `${api}/posts`, newPost).then((res) => {
        expect(res.status).to.eq(201);
        expect(res.body).to.include({ title: newPost.title });
      });
    });
  });
});
