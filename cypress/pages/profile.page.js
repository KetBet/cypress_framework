export class ProfilePage {
  navigate() {
    cy.visit("https://demo.realworld.io/#/@ketbet");
  }

  validateUpdatedSettings() {
    cy.contains("p", "Hello!");
    return this;
  }
}
