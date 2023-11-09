import { LoginPage } from "../pages/login.page";

const dataLayer = require("../fixtures/dataLayer.json");
const loginPage = new LoginPage;

describe("login", () => {
  beforeEach(() => {
    loginPage.navigate();
  });

  it("shouldn't be able to sign in with invalid data", () => {
    loginPage.enterPassword(dataLayer.password);
    loginPage.clickSignInBtn();
    loginPage.signInValidation();
  });
});