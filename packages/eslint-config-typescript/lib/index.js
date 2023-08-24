const baseConfig = require('@meteorlxy/eslint-config');
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
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
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

    /**
     * Use type-only imports as possible
     *
     * @see https://typescript-eslint.io/rules/consistent-type-imports/
     */
    '@typescript-eslint/consistent-type-imports': 'error',

    /**
     * Allow functions in expressions not to be checked
     *
     * @see https://typescript-eslint.io/rules/explicit-function-return-type/
     */
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],

    /**
     * Require a consistent member declaration order.
     *
     * @see https://typescript-eslint.io/rules/member-ordering/
     */
    '@typescript-eslint/member-ordering': [
      'warn',
      {
        default: {
          order: 'natural',
        },
      },
    ],

    /**
     * Enforce the use of top-level import type qualifier when an import only has specifiers with inline type qualifiers.
     *
     * @see https://typescript-eslint.io/rules/no-import-type-side-effects/
     */
    '@typescript-eslint/no-import-type-side-effects': 'error',

    /**
     * Allow some types of expressions in template strings
     *
     * @see https://typescript-eslint.io/rules/restrict-template-expressions/
     */
    '@typescript-eslint/restrict-template-expressions': [
      'warn',
      {
        allowNumber: true,
        allowBoolean: true,
        allowAny: true,
        allowNullish: true,
        allowRegExp: true,
      },
    ],

    /**
     * Enforce top-level type imports
     *
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
     */
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],

    /**
     * Override airbnb-base rules to enforce .mjs extension
     *
     * @see https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/extensions.md
     * @see https://github.com/airbnb/javascript/blob/1ca21aba799699ba556bed058e3900514a9fbee3/packages/eslint-config-airbnb-base/rules/imports.js#L138-L142
     */
    'import/extensions': [
      baseConfig.rules['import/extensions'][0],
      baseConfig.rules['import/extensions'][1],
      {
        ...baseConfig.rules['import/extensions'][2],
        ts: 'never',
        tsx: 'never',
      },
    ],

    /**
     * Add config files of some other tools
     *
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies': [
      airbnbTypescript.rules['import/no-extraneous-dependencies'][0],
      {
        ...airbnbTypescript.rules['import/no-extraneous-dependencies'][1],
        devDependencies: [
          ...airbnbTypescript.rules['import/no-extraneous-dependencies'][1]
            .devDependencies,
          '**/.vitepress/**',
          '**/.vuepress/**',
          '**/build.config.ts',
          '**/tsup.config.ts',
          '**/vite.config.ts',
          '**/vitest.config.ts',
          '**/vuepress.config.ts',
        ],
      },
    ],

    /**
     * Default export should not be encouraged in typescript
     *
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
     */
    'import/prefer-default-export': 'off',
  },
};
