const airbnbBestPractices = require('eslint-config-airbnb-base/rules/best-practices');
const airbnbErrors = require('eslint-config-airbnb-base/rules/errors');
const airbnbEs6 = require('eslint-config-airbnb-base/rules/es6');
const airbnbImports = require('eslint-config-airbnb-base/rules/imports');
const airbnbStyle = require('eslint-config-airbnb-base/rules/style');
const airbnbVariables = require('eslint-config-airbnb-base/rules/variables');

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

  // Rules overrides
  rules: {
    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/brace-style.md
    'brace-style': 'off',
    '@typescript-eslint/brace-style': airbnbStyle.rules['brace-style'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/camelcase.md
    'camelcase': 'off',
    '@typescript-eslint/camelcase': airbnbStyle.rules.camelcase,

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/func-call-spacing.md
    'func-call-spacing': 'off',
    '@typescript-eslint/func-call-spacing':
      airbnbStyle.rules['func-call-spacing'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md#options
    'indent': 'off',
    '@typescript-eslint/indent': airbnbStyle.rules.indent,

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-array-constructor.md
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor':
      airbnbStyle.rules['no-array-constructor'],

    // allow method overload
    'no-dupe-class-members': 'off',

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-function.md
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function':
      airbnbBestPractices.rules['no-empty-function'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-extra-parens.md
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': airbnbErrors.rules['no-extra-parens'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-magic-numbers.md
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers':
      airbnbBestPractices.rules['no-magic-numbers'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-expressions.md
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions':
      airbnbBestPractices.rules['no-unused-expressions'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars':
      airbnbVariables.rules['no-unused-vars'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define':
      airbnbVariables.rules['no-use-before-define'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-useless-constructor.md#rule-changes
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor':
      airbnbEs6.rules['no-useless-constructor'],

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/quotes.md
    'quotes': 'off',
    '@typescript-eslint/quotes': airbnbStyle.rules.quotes,

    // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/semi.md
    'semi': 'off',
    '@typescript-eslint/semi': airbnbStyle.rules.semi,

    // Add .ts and .tsx extensions
    // @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    'import/extensions': [
      airbnbImports.rules['import/extensions'][0],
      airbnbImports.rules['import/extensions'][1],
      {
        ...airbnbImports.rules['import/extensions'][2],
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Disable no-cycle config
    // @see https://github.com/benmosher/eslint-plugin-import/issues/1453
    'import/no-cycle': 'off',

    // Add .ts and .tsx extensions
    // @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    'import/no-extraneous-dependencies': [
      airbnbImports.rules['import/no-extraneous-dependencies'][0],
      {
        ...airbnbImports.rules['import/no-extraneous-dependencies'][1],
        devDependencies: airbnbImports.rules[
          'import/no-extraneous-dependencies'
        ][1].devDependencies.map((glob) =>
          glob.replace('js,jsx', 'js,jsx,ts,tsx')
        ),
      },
    ],

    // Default export should not be encouraged in typescript
    'import/prefer-default-export': 'off',

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
  },
};
