export class SettingsPage {
  navigate() {
    cy.visit("https://demo.realworld.io/#/settings");
  }

  typeBio(bio) {
    cy.get('[placeholder="Short bio about you"]').type(bio);
    return this;
  }

  clickUpdateSettingsBtn() {
    cy.get('[type="submit"]').click();
    return this;
  }

  validateSettingsUrl() {
    cy.url().should("be.equal", "https://demo.realworld.io/#/settings");
}

  clickLogout() {
    cy.contains("Or click here to logout.").should("be.visible").click();
  }

  logoutValidation() {
    cy.url().should("be.equal", "https://demo.realworld.io/#/");
    cy.contains("Sign in").should("be.visible");
  }
}
