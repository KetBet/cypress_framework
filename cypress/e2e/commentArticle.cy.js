import { LoginPage } from "../pages/login.page";
import { ArticlePage } from "../pages/article.page";
import { HomePage } from "../pages/home.page";

const loginPage = new LoginPage;
const articlePage = new ArticlePage;
const homePage = new HomePage;
const dataLayer = require("../fixtures/dataLayer.json");

describe("article page actions", () => {
  beforeEach(() => {
    loginPage.navigate();
    loginPage.login(dataLayer.email, dataLayer.password);
  });

  it("should post comment to the article", () => {
    homePage.clickGlobalFeedLink();
    homePage.validateGlobalFeedUrl();
    homePage.validateArticleList();
    homePage.clickTestArticle();
    articlePage.enterArticleComment(dataLayer.comment);
    articlePage.clickPostCommentBtn();
    articlePage.validatePostCommentUrl();
    articlePage.validateCommentDisplayed();
  });
});
