const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,
  screenshotOnRunFailure: false,
  video: false,
  retries: 1,
  e2e: {
    baseUrl: "http://localhost:5173",
  },
  component: {
    specPattern: "src/**/__tests__/*.{cy,spec}.{js,ts,jsx,tsx}",
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
