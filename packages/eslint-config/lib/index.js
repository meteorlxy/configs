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
     * Override airbnb-base rules to allow for-of
     *
     * @see https://eslint.org/docs/rules/no-restricted-syntax
     * @see https://github.com/airbnb/javascript/blob/1ca21aba799699ba556bed058e3900514a9fbee3/packages/eslint-config-airbnb-base/rules/style.js#L336-L339
     */
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want.',
      },
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
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        allowSeparatedGroups: false,
      },
    ],

    /**
     * Override airbnb-base rules to ensure import order
     *
     * @see https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
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
          caseInsensitive: true,
        },
      },
    ],
  },
};
