const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-qatouch-reporter",
  reporterOptions: {
  domain: process.env.QATOUCH_DOMAIN,
  apiToken: process.env.QATOUCH_API_TOKEN,
  projectKey: process.env.QATOUCH_PROJECT_KEY,
  testRunId: process.env.QATOUCH_TEST_RUN_ID,
},
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});