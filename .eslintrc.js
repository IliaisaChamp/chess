module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    'jest',
  ],
  rules: {
    'no-console': 0,
    "allowForLoopAfterthoughts": true,
    'linebreak-style': ["error", "never"],
  },
};
