import type { DummyRuleMap } from 'oxlint';

/**
 * jest rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const jestRules = {
  'jest/consistent-test-it': [
    'off',
    {
      fn: 'test',
      withinDescribe: 'it',
    },
  ],
  'jest/expect-expect': [
    'warn',
    {
      additionalTestBlockFunctions: [],
      assertFunctionNames: ['expect'],
    },
  ],
  'jest/max-expects': [
    'off',
    {
      max: 5,
    },
  ],
  'jest/max-nested-describe': [
    'off',
    {
      max: 5,
    },
  ],
  'jest/no-alias-methods': 'off',
  'jest/no-commented-out-tests': 'off',
  'jest/no-conditional-expect': 'warn',
  'jest/no-conditional-in-test': 'off',
  'jest/no-confusing-set-timeout': 'off',
  'jest/no-deprecated-functions': 'off',
  'jest/no-disabled-tests': 'warn',
  'jest/no-done-callback': 'off',
  'jest/no-duplicate-hooks': 'off',
  'jest/no-export': 'warn',
  'jest/no-focused-tests': 'warn',
  'jest/no-hooks': [
    'off',
    {
      allow: [],
    },
  ],
  'jest/no-identical-title': 'off',
  'jest/no-interpolation-in-snapshots': 'off',
  'jest/no-jasmine-globals': 'off',
  'jest/no-large-snapshots': [
    'off',
    {
      allowedSnapshots: {},
      inlineMaxSize: 50,
      maxSize: 50,
    },
  ],
  'jest/no-mocks-import': 'off',
  'jest/no-restricted-jest-methods': 'off',
  'jest/no-restricted-matchers': 'off',
  'jest/no-standalone-expect': [
    'warn',
    {
      additionalTestBlockFunctions: [],
    },
  ],
  'jest/no-test-prefixes': 'off',
  'jest/no-test-return-statement': 'off',
  'jest/no-unneeded-async-expect-function': 'off',
  'jest/no-untyped-mock-factory': 'off',
  'jest/padding-around-after-all-blocks': 'off',
  'jest/padding-around-test-blocks': 'off',
  'jest/prefer-called-with': 'off',
  'jest/prefer-comparison-matcher': 'off',
  'jest/prefer-each': 'off',
  'jest/prefer-ending-with-an-expect': [
    'off',
    {
      additionalTestBlockFunctions: [],
    },
  ],
  'jest/prefer-equality-matcher': 'off',
  'jest/prefer-expect-assertions': [
    'off',
    {
      onlyFunctionsWithAsyncKeyword: false,
      onlyFunctionsWithExpectInCallback: false,
      onlyFunctionsWithExpectInLoop: false,
    },
  ],
  'jest/prefer-expect-resolves': 'off',
  'jest/prefer-hooks-in-order': 'off',
  'jest/prefer-hooks-on-top': 'off',
  'jest/prefer-importing-jest-globals': [
    'off',
    {
      types: ['hook', 'describe', 'test', 'expect', 'jest', 'unknown'],
    },
  ],
  'jest/prefer-jest-mocked': 'off',
  'jest/prefer-lowercase-title': 'off',
  'jest/prefer-mock-promise-shorthand': 'off',
  'jest/prefer-mock-return-shorthand': 'off',
  'jest/prefer-snapshot-hint': 'warn',
  'jest/prefer-spy-on': 'off',
  'jest/prefer-strict-equal': 'off',
  'jest/prefer-to-be': 'off',
  'jest/prefer-to-contain': 'off',
  'jest/prefer-to-have-been-called': 'off',
  'jest/prefer-to-have-been-called-times': 'off',
  'jest/prefer-to-have-length': 'off',
  'jest/prefer-todo': 'off',
  'jest/require-hook': [
    'off',
    {
      allowedFunctionCalls: [],
    },
  ],
  'jest/require-to-throw-message': 'warn',
  'jest/require-top-level-describe': [
    'off',
    {
      maxNumberOfTopLevelDescribes: 4294967295,
    },
  ],
  'jest/valid-describe-callback': 'warn',
  'jest/valid-expect': [
    'warn',
    {
      alwaysAwait: false,
      asyncMatchers: ['toResolve', 'toReject'],
      maxArgs: 1,
      minArgs: 1,
    },
  ],
  'jest/valid-expect-in-promise': 'warn',
  'jest/valid-title': 'warn',
} satisfies DummyRuleMap;
