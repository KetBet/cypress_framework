export class SignUpPage {
  navigate() {
    cy.visit("https://demo.realworld.io/#/register");
  }

  registration(randomName, randomEmail, randomPassword) {
    cy.get('[placeholder="Username"]').type(randomName);
    cy.get('[placeholder="Email"]').type(randomEmail);
    cy.get('[placeholder="Password"]').type(randomPassword);
    cy.get('[type="submit"]').click();
    return this;
  }

  signUpValidation() {
    cy.contains("div", "No articles are here... yet.");
    return this;
  }
}
