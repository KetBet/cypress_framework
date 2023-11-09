import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";

const loginPage = new LoginPage;
const homePage = new HomePage;
const dataLayer = require("../fixtures/dataLayer.json");

describe("article page actions", () => {
  beforeEach(() => {
    loginPage.navigate();
    loginPage.login(dataLayer.email, dataLayer.password);
    homePage.navigate();
  });

  it("should like the article", () => {
    homePage.clickGlobalFeedLink();
    homePage.validateGlobalFeedUrl();
    homePage.validateArticleList();
    homePage.clickFirstArticle();
    homePage.validateFirstArticleUrl();
    homePage.checkFavoriteArticleBtn();
    homePage.validateFavoriteArticleTitle();
});
});
