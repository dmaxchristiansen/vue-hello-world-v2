module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "@vue/eslint-config-prettier/skip-formatting",
    "eslint:recommended",
    "plugin:cypress/recommended",
    "plugin:vue/essential",
  ],
  ignorePatterns: ["cypress.config.js"],
};
