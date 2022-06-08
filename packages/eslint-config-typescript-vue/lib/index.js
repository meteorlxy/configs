/**
 * Vue.js Rules with TypeScript Rules
 */
module.exports = {
  extends: ['@meteorlxy/vue', '@meteorlxy/typescript'],

  // Override the `parser` in vue and typescript rules
  parser: 'vue-eslint-parser',

  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
  },
};
