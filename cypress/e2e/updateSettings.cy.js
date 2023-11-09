import { LoginPage } from "../pages/login.page";
import { ProfilePage } from "../pages/profile.page";
import { SettingsPage } from "../pages/settings.page";

const loginPage = new LoginPage();
const settingsPage = new SettingsPage();
const profilePage = new ProfilePage();
const dataLayer = require("../fixtures/dataLayer.json");

describe("settings page options", () => {
  beforeEach(() => {
    loginPage.navigate();
    loginPage.login(dataLayer.email, dataLayer.password);
  });

  it("should be able to update settings", () => {
    loginPage.clickSettingsLink();
    settingsPage.validateSettingsUrl();
    settingsPage.typeBio(dataLayer.bio);
    settingsPage.clickUpdateSettingsBtn();
    profilePage.validateUpdatedSettings();
  });
});
