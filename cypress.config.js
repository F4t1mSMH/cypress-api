const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  env: {
    email : 'test51@test.com',
    password : 'test12345' ,
    apiUrl : 'https://conduit.bondaracademy.com/api'
  },

  e2e: {
    baseUrl: 'https://conduit.bondaracademy.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1280,
  viewportHeight: 720
});