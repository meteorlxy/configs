const airbnbRulesImports = require('eslint-config-airbnb-base/rules/imports');

/**
 * Based on Airbnb JavaScript Base Style
 *
 * @see https://github.com/airbnb/javascript
 * @see https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
 */
module.exports = {
  extends: [
    // Airbnb JavaScript Base Style
    'airbnb-base',
  ],

  // Rules overrides
  rules: {
    /**
     * Disable checking for-in loops guard
     *
     * @see https://eslint.org/docs/rules/guard-for-in
     * @see https://github.com/airbnb/javascript/blob/366bfa66380c08304101c6add46355696e90b348/packages/eslint-config-airbnb-base/rules/best-practices.js#L60-L62
     */
    'guard-for-in': 'off',

    /**
     * Allow await in loop
     *
     * @see https://eslint.org/docs/rules/no-await-in-loop
     * @see https://github.com/airbnb/javascript/blob/366bfa66380c08304101c6add46355696e90b348/packages/eslint-config-airbnb-base/rules/errors.js#L15-L17
     */
    'no-await-in-loop': 'off',

    /**
     * Allow bitwise operators
     *
     * @see https://eslint.org/docs/rules/no-bitwise
     * @see https://github.com/airbnb/javascript/blob/366bfa66380c08304101c6add46355696e90b348/packages/eslint-config-airbnb-base/rules/style.js#L275-L277
     */
    'no-bitwise': 'off',

    /**
     * Allow continue statements
     *
     * @see https://eslint.org/docs/rules/no-continue
     * @see https://github.com/airbnb/javascript/blob/366bfa66380c08304101c6add46355696e90b348/packages/eslint-config-airbnb-base/rules/style.js#L279-L281
     */
    'no-continue': 'off',

    /**
     * Override airbnb-base rules to allow for-of and for-in
     *
     * @see https://eslint.org/docs/rules/no-restricted-syntax
     * @see https://github.com/airbnb/javascript/blob/366bfa66380c08304101c6add46355696e90b348/packages/eslint-config-airbnb-base/rules/style.js#L334-L354
     */
    'no-restricted-syntax': [
      'error',
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],

    /**
     * Override airbnb-base rules to allow reassign params props
     *
     * @see https://eslint.org/docs/rules/no-param-reassign
     * @see https://github.com/airbnb/javascript/issues/1217
     * @see https://github.com/airbnb/javascript#functions--mutate-params
     */
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],

    /**
     * Override airbnb-base rules to ensure import order
     *
     * @see https://eslint.org/docs/rules/sort-imports
     * @see https://github.com/airbnb/javascript/blob/4ee732639396362c6981b1aa4730934c3baa7919/packages/eslint-config-airbnb-base/rules/es6.js#L165-L172
     */
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: false,
      },
    ],

    /**
     * Disable import default check
     *
     * This rule currently does not interpret `module.exports = ...` as a `default` export,
     * which will report error when importing cjs in node esm
     *
     * @see https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/default.md
     */
    'import/default': 'off',

    /**
     * Override airbnb-base rules to enforce .mjs extension
     *
     * @see https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/extensions.md
     * @see https://github.com/airbnb/javascript/blob/1ca21aba799699ba556bed058e3900514a9fbee3/packages/eslint-config-airbnb-base/rules/imports.js#L138-L142
     */
    'import/extensions': [
      airbnbRulesImports.rules['import/extensions'][0],
      airbnbRulesImports.rules['import/extensions'][1],
      {
        ...airbnbRulesImports.rules['import/extensions'][2],
        mjs: 'always',
      },
    ],

    /**
     * Add config files of some other tools
     *
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
     */
    'import/no-extraneous-dependencies': [
      airbnbRulesImports.rules['import/no-extraneous-dependencies'][0],
      {
        ...airbnbRulesImports.rules['import/no-extraneous-dependencies'][1],
        devDependencies: [
          ...airbnbRulesImports.rules['import/no-extraneous-dependencies'][1]
            .devDependencies,
          '**/.vitepress/**',
          '**/.vuepress/**',
          '**/.eslintrc.{cjs,js}',
          '**/.commitlintrc.{cjs,js}',
          '**/build.config.js',
          '**/tsup.config.js',
          '**/vite.config.js',
          '**/vitest.config.js',
          '**/vuepress.config.js',
        ],
      },
    ],

    /**
     * Allow named default
     *
     * Some cjs packages explicitly provide a `exports.default` export, which is required to
     * use `import { default as ... } from ...` syntax to be imported in node esm
     *
     * @see https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
     */
    'import/no-named-default': 'off',

    /**
     * Override airbnb-base rules to ensure import order
     *
     * @see https://github.com/import-js/eslint-plugin-import/blob/master/docs/rules/order.md
     * @see https://github.com/airbnb/javascript/blob/1ca21aba799699ba556bed058e3900514a9fbee3/packages/eslint-config-airbnb-base/rules/imports.js#L144-L147
     */
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'ignore',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
  },
};
