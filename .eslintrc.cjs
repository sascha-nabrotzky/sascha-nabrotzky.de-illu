module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // damit module.exports nicht angemeckert wird
  },
  root: true, // falls eslint plugin react nicht gefunden wird, dies hinzufügen
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};
