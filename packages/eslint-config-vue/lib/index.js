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
    /**
     * Use PascalCase to introduce components in `<template>`
     *
     * @see https://eslint.vuejs.org/rules/component-name-in-template-casing.html
     */
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],

    /**
     * Set order of SFC top-level tags
     *
     * @see https://eslint.vuejs.org/rules/component-tags-order.html
     */
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],

    /**
     * Component file name should match component name
     *
     * @see https://eslint.vuejs.org/rules/match-component-file-name.html
     */
    'vue/match-component-file-name': [
      'error',
      {
        extensions: [
          'cjs',
          'ctx',
          'js',
          'jsx',
          'mjs',
          'mts',
          'ts',
          'tsx',
          'vue',
        ],
        shouldMatchCase: false,
      },
    ],
  },
};
