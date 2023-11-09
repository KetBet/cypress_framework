import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";
import { faker } from "@faker-js/faker/locale/en";

const dataLayer = require("../fixtures/dataLayer.json");
const homePage = new HomePage;
const loginPage = new LoginPage;

describe("home page actions", () => {
  beforeEach(() => {
    loginPage.navigate();
    loginPage.login(dataLayer.email, dataLayer.password);
  });

  it("should add new article", () => {
    homePage.clickNewArticleBtn();
    homePage.validateEditorUrl();
    homePage.validateNewArticleForm();
    homePage.enterArticleTitle(faker.string.uuid());
    homePage.enterArticleDescription(faker.string.uuid());
    homePage.enterArticleBody(faker.string.uuid());
    homePage.clickPublishArticleBtn();
    homePage.validateArticlePage();
    homePage.validateArticleTitle();
  });
});
