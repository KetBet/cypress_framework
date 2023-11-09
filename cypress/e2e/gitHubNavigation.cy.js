import { HomePage } from "../pages/home.page";
import { LoginPage } from "../pages/login.page";

const homePage = new HomePage;
const loginPage = new LoginPage;
const dataLayer = require("../fixtures/dataLayer.json");

describe("home page actions", () => {
  beforeEach(() => {
    loginPage.navigate();
    loginPage.login(dataLayer.email, dataLayer.password);
  });

  it("should navigate to the company's GitHub", () => {
    homePage.clickTheFokrOnGitHubLink();
    homePage.validationGitHubUrl();
  });

});