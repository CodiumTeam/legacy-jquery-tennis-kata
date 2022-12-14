const { defineConfig } = require('cypress');
const { initPlugin } = require('cypress-plugin-snapshots/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      initPlugin(on, config);

      return config;
    },
  },
});
