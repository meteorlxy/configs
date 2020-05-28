/**
 * Vue.js Rules with Typescript Rules
 */
module.exports = {
  extends: ['@meteorlxy/vue', '@meteorlxy/typescript'],

  // Override the `parser` in vue and typescript rules
  parser: 'vue-eslint-parser',

  // TODO: `babel-eslint` in `@meteorlxy/eslint-config-vue` is useless
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
