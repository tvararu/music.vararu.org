describe("Basic test", () => {
  it("should show hello world", () => {
    cy.visit("/");

    cy.contains("Current song").should("exist");
  });
});
