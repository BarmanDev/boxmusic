const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // obtener la URL base de Cypress
      const baseUrl = config.baseUrl;

      // usar la URL base para configurar un listener de eventos
      on('before:browser:launch', (browser, options) => {
        console.log('Navegador a punto de lanzarse con la URL base:', baseUrl);
      });
    },
  },
});