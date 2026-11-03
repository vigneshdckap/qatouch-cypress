require('dotenv').config();

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.QATOUCH_DOMAIN = process.env.QATOUCH_DOMAIN;
      config.env.QATOUCH_API_TOKEN = process.env.QATOUCH_API_TOKEN;
      config.env.QATOUCH_PROJECT_KEY = process.env.QATOUCH_PROJECT_KEY;
      config.env.QATOUCH_TEST_RUN_ID = process.env.QATOUCH_TEST_RUN_ID;

      return config;
    },
  },
});