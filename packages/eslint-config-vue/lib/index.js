/**
 * Based on Vue.js Rules
 *
 * @see https://eslint.vuejs.org/rules/
 */
module.exports = {
  extends: ['@meteorlxy', 'plugin:vue/vue3-recommended'],

  plugins: ['vue'],

  // Rules overrides
  rules: {
    // Use PascalCase to introduce components in <template>
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],

    // Component file name should match component name
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
        shouldMatchCase: false,
      },
    ],
  },
};
