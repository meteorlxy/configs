const airbnbTypescript = require('eslint-config-airbnb-typescript/lib/shared');

/**
 * Based on TypeScript ESLint Rules
 *
 * @see https://github.com/typescript-eslint/typescript-eslint
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
 * @see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin
 * @see https://github.com/iamturns/eslint-config-airbnb-typescript
 */
module.exports = {
  extends: [
    '@meteorlxy',
    // Enable all the recommended rules for @typescript-eslint/eslint-plugin
    'plugin:@typescript-eslint/recommended',
    // Add typescript settings for `eslint-plugin-import`
    'plugin:import/typescript',
  ],

  // Use @typescript-eslint/eslint-plugin
  plugins: ['@typescript-eslint'],

  // Use @typescript-eslint/parser
  parser: '@typescript-eslint/parser',

  settings: {
    // Use settings from eslint-config-airbnb-typescript
    ...airbnbTypescript.settings,
  },

  // Rules overrides
  rules: {
    // ==================
    // Use rules from eslint-config-airbnb-typescript
    // ==================

    // Disable rules that already checked by the TypeScript compiler
    ...airbnbTypescript.overrides[0].rules,

    // Replace Airbnb rules with TypeScript version
    ...airbnbTypescript.rules,

    // ==================
    // My own modifications
    // ==================

    // Use type-only imports as possible
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/consistent-type-imports.md
    '@typescript-eslint/consistent-type-imports': 'error',

    // Allow functions in expressions not to be checked
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    // Default export should not be encouraged in typescript
    // @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
    'import/prefer-default-export': 'off',
  },
};
