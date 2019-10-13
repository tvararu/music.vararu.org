describe("Basic test", () => {
  it("should show hello world", () => {
    cy.visit("/");

    cy.contains("Natural").should("exist");
  });
});
