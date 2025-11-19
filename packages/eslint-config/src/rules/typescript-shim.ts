import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const typescriptShimRules = {
  /**
   * Rules that are checked by typescript or recommended to disable in typescript.
   */
  'constructor-super': 'off',
  'getter-return': 'off',
  'no-const-assign': 'off',
  'no-dupe-args': 'off',
  'no-dupe-class-members': 'off',
  'no-dupe-keys': 'off',
  'no-func-assign': 'off',
  'no-invalid-this': 'off',
  'no-import-assign': 'off',
  'no-new-symbol': 'off',
  'no-obj-calls': 'off',
  'no-redeclare': 'off',
  'no-setter-return': 'off',
  'no-this-before-super': 'off',
  'no-undef': 'off',
  'no-unreachable': 'off',
  'no-unsafe-negation': 'off',
  'valid-typeof': 'off',

  /**
   * Rules from eslint-plugin-import that should be disabled
   *
   * @see https://typescript-eslint.io/troubleshooting/performance-troubleshooting#eslint-plugin-import
   */
  'import/default': 'off',
  'import/named': 'off',
  'import/namespace': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-unresolved': 'off',
  // might run them in CI
  'import/no-cycle': 'off',
  'import/no-deprecated': 'off',
  'import/no-named-as-default': 'off',
  'import/no-unused-modules': 'off',

  /**
   * Rules that have equivalents in typescript-eslint plugin.
   */
  'brace-style': 'off',
  'camelcase': 'off',
  'class-methods-use-this': 'off',
  'comma-dangle': 'off',
  'comma-spacing': 'off',
  'consistent-return': 'off',
  'default-param-last': 'off',
  'dot-notation': 'off',
  'func-call-spacing': 'off',
  'indent': 'off',
  'init-declarations': 'off',
  'keyword-spacing': 'off',
  'lines-between-class-members': 'off',
  'max-params': 'off',
  'no-array-constructor': 'off',
  // 'no-dupe-class-members': 'off',
  'no-empty-function': 'off',
  'no-extra-parens': 'off',
  'no-extra-semi': 'off',
  'no-implied-eval': 'off',
  // 'no-invalid-this': 'off',
  'no-loop-func': 'off',
  'no-loss-of-precision': 'off',
  'no-magic-numbers': 'off',
  'no-new-func': 'off',
  // 'no-redeclare': 'off',
  'no-restricted-imports': 'off',
  'no-return-await': 'off',
  'no-shadow': 'off',
  'no-throw-literal': 'off',
  'no-unused-expressions': 'off',
  'no-unused-private-class-members': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
  'object-curly-spacing': 'off',
  'padding-line-between-statements': 'off',
  'prefer-destructuring': 'off',
  'prefer-promise-reject-errors': 'off',
  'quotes': 'off',
  'require-await': 'off',
  'semi': 'off',
  'space-before-blocks': 'off',
  'space-before-function-paren': 'off',
  'space-infix-ops': 'off',
} satisfies FlatConfig.Rules;
