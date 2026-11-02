const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-qatouch-reporter",
  reporterOptions: {
    domain: "malar",
    apiToken: "3893fca7d7cfc8429e20f5b1c0b5975b0a1bfe8556924e7a66dbb61b32b676ee",
    projectKey: "Bw8Q",
    testRunId: "vaxXw",

  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});