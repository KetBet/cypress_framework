export class ArticlePage {
  navigate() {
    cy.visit("https://demo.realworld.io/#/article/Test-249812");
  }

  clickDeleteArticleBtn() {
    cy.get("button:first")
      .should("have.class", "btn btn-outline-danger btn-sm")
      .click();
  }

  validateHomePageUrl() {
    cy.url().should("be.equal", "https://demo.realworld.io/#/");
  }

  validateTextBlock() {
    cy.contains("No articles are here... yet.").should("be.visible");
  }

  validateTestArticleUrl() {
    cy.url().should(
      "be.equal",
      "https://demo.realworld.io/#/article/Test-249812"
    );
  }

  enterArticleComment(comment) {
    cy.get('[placeholder="Write a comment..."]').type(comment);
    return this;
  }

  clickPostCommentBtn() {
    cy.contains("Post Comment").should("be.visible").click();
  }

  validatePostCommentUrl() {
    cy.url().should(
      "be.equal",
      "https://demo.realworld.io/#/article/Test-249812"
    );
  }

  validateCommentDisplayed() {
    cy.contains("hello!").should("be.visible");
  }
}
