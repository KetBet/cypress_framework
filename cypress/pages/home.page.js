export class HomePage {
  navigate() {
    cy.visit("https://demo.realworld.io/#/");
  }

  clickTheFokrOnGitHubLink() {
    cy.get("body > a").invoke("removeAttr", "target").click();
  }

  validationGitHubUrl() {
    cy.origin(
      "https://github.com/gothinkster/angularjs-realworld-example-app",
      () => {
        cy.url().should(
          "include",
          "/github.com/gothinkster/angularjs-realworld-example-app"
        );
      }
    );
  }

  clickNewArticleBtn() {
    cy.contains("New Article").should("be.visible").click();
  }

  validateEditorUrl() {
    cy.url().should("be.equal", "https://demo.realworld.io/#/editor/");
  }

  validateNewArticleForm() {
    cy.get('[class="ng-pristine ng-valid"]').should("be.visible");
  }

  enterArticleTitle(randomTitle) {
    cy.get('[placeholder="Article Title"]').type(randomTitle);
    return this;
  }

  enterArticleDescription(randomDescription) {
    cy.get('[placeholder="What\'s this article about?"]').type(
      randomDescription
    );
    return this;
  }

  enterArticleBody(randomBody) {
    cy.get('[placeholder="Write your article (in markdown)"]').type(randomBody);
    return this;
  }

  clickPublishArticleBtn() {
    cy.contains("Publish Article").should("be.visible").click();
  }

  validateArticlePage() {
    cy.url().should("include", "249812");
  }

  validateArticleTitle() {
    cy.get("body > div > div > div > div.banner > div > h1").should(
      "be.visible"
    );
  }

  clickIntroductionTag() {
    cy.contains("introduction").should("be.visible").click();
  }

  validationIntroductionTag() {
    cy.contains("Welcome to RealWorld project").should("be.visible");
  }

  clickGlobalFeedLink() {
    cy.contains("Global Feed").should("be.visible").click();
  }

  validateGlobalFeedUrl() {
    cy.url().should("be.equal", "https://demo.realworld.io/#/");
  }

  validateArticleList() {
    cy.get("article-list.ng-isolate-scope").should("be.visible");
  }

  clickFirstArticle() {
    cy.contains(
      "If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!"
    )
      .should("be.visible")
      .click();
  }

  clickTestArticle() {
    cy.contains("Test").should("be.visible").click();
  }

  validateFirstArticleUrl() {
    cy.url().should(
      "be.equal",
      "https://demo.realworld.io/#/article/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863"
    );
  }

  checkFavoriteArticleBtn() {
    cy.contains("Favorite Article").should("be.visible");
  }

  validateFavoriteArticleTitle() {
    cy.contains("Favorite Article").should("be.visible");
  }
}
