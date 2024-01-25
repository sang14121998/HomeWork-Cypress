const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const mysql = require('cypress-mysql');


async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));

  return config;
}

module.exports = defineConfig({ 
  projectId: "wtaryb",

  e2e: {
    chromeWebSecurity: false,
    experimentalStudio: true,
    specPattern: "**/*.feature", // setup cucumber feature
    setupNodeEvents,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    // setupNodeEvents(on, config) {
    //   mysql.configurePlugin(on);
    //   },
    //   "env": {
    //   "db": {
    //   "host": "sql12.freemysqlhosting.net",
    //   "user": "sql12675950",
    //   "password": "TNT52HVRMU",
    //   "database": "sql12675950"
    //   }
    // }      

  },
});

