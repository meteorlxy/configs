import type { Rules } from '../types';

/**
 * TypeScript shim rules migrated to Oxlint.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const typescriptShimRules = {
  /**
   * Rules that are checked by typescript or recommended to disable in typescript.
   */
  'constructor-super': 'off',
  'getter-return': 'off',
  'no-const-assign': 'off',
  // Unsupported by Oxlint yet: no-dupe-args.
  //   'no-dupe-args': 'off'
  'no-dupe-class-members': 'off',
  'no-dupe-keys': 'off',
  'no-func-assign': 'off',
  // Unsupported by Oxlint yet: no-invalid-this.
  //   'no-invalid-this': 'off'
  'no-import-assign': 'off',
  // Unsupported by Oxlint yet: no-new-symbol.
  //   'no-new-symbol': 'off'
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
  // Unsupported by Oxlint yet: import/no-unresolved.
  //   'import/no-unresolved': 'off'
  // might run them in CI
  'import/no-cycle': 'off',
  // Unsupported by Oxlint yet: import/no-deprecated.
  //   'import/no-deprecated': 'off'
  'import/no-named-as-default': 'off',
  // Unsupported by Oxlint yet: import/no-unused-modules.
  //   'import/no-unused-modules': 'off'
  // Unsupported by Oxlint yet: brace-style.
  //   /**
  //    * Rules that have equivalents in typescript-eslint plugin.
  //    */
  //   'brace-style': 'off'
  // Unsupported by Oxlint yet: camelcase.
  //   'camelcase': 'off'
  'class-methods-use-this': 'off',
  // Unsupported by Oxlint yet: comma-dangle.
  //   'comma-dangle': 'off'
  // Unsupported by Oxlint yet: comma-spacing.
  //   'comma-spacing': 'off'
  // Unsupported by Oxlint yet: consistent-return.
  //   'consistent-return': 'off'
  'default-param-last': 'off',
  // Unsupported by Oxlint yet: dot-notation.
  //   'dot-notation': 'off'
  // Unsupported by Oxlint yet: func-call-spacing.
  //   'func-call-spacing': 'off'
  // Unsupported by Oxlint yet: indent.
  //   'indent': 'off'
  'init-declarations': 'off',
  // Unsupported by Oxlint yet: keyword-spacing.
  //   'keyword-spacing': 'off'
  // Unsupported by Oxlint yet: lines-between-class-members.
  //   'lines-between-class-members': 'off'
  'max-params': 'off',
  'no-array-constructor': 'off',
  // 'no-dupe-class-members': 'off',
  'no-empty-function': 'off',
  // Unsupported by Oxlint yet: no-extra-parens.
  //   'no-extra-parens': 'off'
  // Unsupported by Oxlint yet: no-extra-semi.
  //   'no-extra-semi': 'off'
  'no-implied-eval': 'off',
  // 'no-invalid-this': 'off',
  'no-loop-func': 'off',
  'no-loss-of-precision': 'off',
  'no-magic-numbers': 'off',
  'no-new-func': 'off',
  // 'no-redeclare': 'off',
  'no-restricted-imports': 'off',
  // Unsupported by Oxlint yet: no-return-await.
  //   'no-return-await': 'off'
  'no-shadow': 'off',
  'no-throw-literal': 'off',
  'no-unused-expressions': 'off',
  'no-unused-private-class-members': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
  // Unsupported by Oxlint yet: object-curly-spacing.
  //   'object-curly-spacing': 'off'
  // Unsupported by Oxlint yet: padding-line-between-statements.
  //   'padding-line-between-statements': 'off'
  'prefer-destructuring': 'off',
  'prefer-promise-reject-errors': 'off',
  // Unsupported by Oxlint yet: quotes.
  //   'quotes': 'off'
  'require-await': 'off',
  // Unsupported by Oxlint yet: semi.
  //   'semi': 'off'
  // Unsupported by Oxlint yet: space-before-blocks.
  //   'space-before-blocks': 'off'
  // Unsupported by Oxlint yet: space-before-function-paren.
  //   'space-before-function-paren': 'off'
  // Unsupported by Oxlint yet: space-infix-ops.
  //   'space-infix-ops': 'off'
} satisfies Rules;
