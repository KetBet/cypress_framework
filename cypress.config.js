const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3hv15j',
  reporter: "cypress-mochawesome-reporter",
  video: false,

  reporterOptions: {
    charts: true,

    reportPageTitle: "Cypress Inline Reporter",

    embeddedScreenshots: true,
    inlineAssets: true, 
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
