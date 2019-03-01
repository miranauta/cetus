const ERROR = 2;

module.exports = {
  env: {
    node: true
  },
  extends: ['plugin:prettier/recommended'],
  rules: {
    quotes: [
      ERROR,
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ]
  }
};
