const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // config.baseUrl = "https://wcaquino.me/cypress/componentes.html"
      // implement node event listeners here
    },
  },
});
