 import { LoginPage } from "../pages/login.page";
 import { SettingsPage } from "../pages/settings.page";

 const loginPage = new LoginPage;
 const settingsPage = new SettingsPage;
 const dataLayer = require("../fixtures/dataLayer.json");

 describe("settings page options", () => {
   beforeEach(() => {
     loginPage.navigate();
     loginPage.login(dataLayer.email, dataLayer.password);
   });

   it("should redirect to the home page on log out", () => {
    loginPage.clickSettingsLink();
    settingsPage.validateSettingsUrl();
    settingsPage.clickLogout();
    settingsPage.logoutValidation();
   });
 });
