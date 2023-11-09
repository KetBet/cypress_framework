export class LoginPage {
  navigate() {
    cy.visit("https://demo.realworld.io/#/login");
  }

  login(email, password) {
    cy.get('[placeholder="Email"]').type(email);
    cy.get('[placeholder="Password"]').type(password);
    cy.get('[type="submit"]').click();
    return this;
  }

  enterPassword(password) {
    cy.get('[placeholder="Password"]').type(password);
    return this;
  }

  clickSignInBtn() {
    cy.get('[type="submit"]').click();
    return this;
  }

  signInValidation() {
    cy.get('[ng-repeat="error in errors"]').should(
      "have.text",
      "\n      email can't be blank\n    "
    );
  }

  clickSettingsLink() {
    cy.get('[ui-sref="app.settings"]').click();
    return this;
  }
}
