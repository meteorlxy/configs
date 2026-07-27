import type { DummyRuleMap } from 'oxlint';

/**
 * import rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const importRules = {
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import/default': 'warn',
  'import/export': 'error',
  'import/exports-last': 'off',
  'import/extensions': 'off',
  'import/first': 'error',
  'import/group-exports': 'off',
  'import/max-dependencies': 'off',
  'import/named': 'error',
  'import/namespace': [
    'warn',
    {
      allowComputed: false,
    },
  ],
  'import/newline-after-import': [
    'error',
    {
      considerComments: false,
      count: 1,
      exactCount: false,
    },
  ],
  'import/no-absolute-path': [
    'error',
    {
      amd: false,
      commonjs: true,
      esmodule: true,
    },
  ],
  'import/no-amd': 'error',
  'import/no-anonymous-default-export': [
    'off',
    {
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowArray: false,
      allowArrowFunction: false,
      allowCallExpression: true,
      allowLiteral: false,
      allowNew: false,
      allowObject: false,
    },
  ],
  'import/no-commonjs': [
    'off',
    {
      allowConditionalRequire: true,
      allowPrimitiveModules: false,
      allowRequire: false,
    },
  ],
  'import/no-cycle': [
    'error',
    {
      allowUnsafeDynamicCyclicDependency: false,
      ignoreExternal: false,
      ignoreTypes: true,
      maxDepth: 2 ** 32 - 1,
    },
  ],
  'import/no-default-export': 'off',
  'import/no-duplicates': [
    'error',
    {
      considerQueryString: false,
      preferInline: false,
    },
  ],
  'import/no-dynamic-require': [
    'error',
    {
      esmodule: false,
    },
  ],
  'import/no-empty-named-blocks': 'off',
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-named-default': 'off',
  'import/no-named-export': 'off',
  'import/no-namespace': [
    'off',
    {
      ignore: [],
    },
  ],
  'import/no-nodejs-modules': 'off',
  'import/no-relative-parent-imports': 'off',
  'import/no-self-import': 'error',
  'import/no-unassigned-import': [
    'off',
    {
      allow: [],
    },
  ],
  'import/no-webpack-loader-syntax': 'error',
  'import/prefer-default-export': [
    'off',
    {
      target: 'single',
    },
  ],
  'import/unambiguous': 'off',
} satisfies DummyRuleMap;
