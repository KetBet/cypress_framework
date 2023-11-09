import { ArticlePage } from "../pages/article.page"; 
import { LoginPage } from "../pages/login.page";
import { HomePage } from "../pages/home.page";
import { faker } from "@faker-js/faker/locale/en";

const articlePage = new ArticlePage;
const loginPage = new LoginPage;
const homePage = new HomePage;
const dataLayer = require("../fixtures/dataLayer.json");

describe("article page actions", () => {
  beforeEach(() => {
    loginPage.navigate();
    loginPage.login(dataLayer.email, dataLayer.password);
    articlePage.navigate();
    homePage.clickNewArticleBtn();
    homePage.enterArticleTitle(faker.string.uuid());
    homePage.enterArticleDescription(faker.string.uuid());
    homePage.enterArticleBody(faker.string.uuid());
    homePage.clickPublishArticleBtn();
  });

   it("should delete article", () => {
     articlePage.clickDeleteArticleBtn();
     articlePage.validateHomePageUrl();
     articlePage.validateTextBlock();
   });
});
