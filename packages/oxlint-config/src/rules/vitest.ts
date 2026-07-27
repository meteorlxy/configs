import type { DummyRuleMap } from 'oxlint';

/**
 * vitest rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const vitestRules = {
  'vitest/consistent-each-for': 'off',
  'vitest/consistent-test-filename': 'off',
  'vitest/consistent-test-it': [
    'off',
    {
      fn: 'test',
      withinDescribe: 'it',
    },
  ],
  'vitest/consistent-vitest-vi': [
    'off',
    {
      fn: 'vi',
    },
  ],
  'vitest/expect-expect': [
    'warn',
    {
      additionalTestBlockFunctions: [],
      assertFunctionNames: ['expect'],
    },
  ],
  'vitest/hoisted-apis-on-top': 'warn',
  'vitest/max-expects': [
    'off',
    {
      max: 5,
    },
  ],
  'vitest/max-nested-describe': [
    'off',
    {
      max: 5,
    },
  ],
  'vitest/no-alias-methods': 'off',
  'vitest/no-commented-out-tests': 'off',
  'vitest/no-conditional-expect': 'warn',
  'vitest/no-conditional-in-test': 'off',
  'vitest/no-conditional-tests': 'warn',
  'vitest/no-disabled-tests': 'warn',
  'vitest/no-duplicate-hooks': 'off',
  'vitest/no-focused-tests': 'warn',
  'vitest/no-hooks': [
    'off',
    {
      allow: [],
    },
  ],
  'vitest/no-identical-title': 'off',
  'vitest/no-import-node-test': 'off',
  'vitest/no-importing-vitest-globals': 'off',
  'vitest/no-interpolation-in-snapshots': 'off',
  'vitest/no-large-snapshots': [
    'off',
    {
      allowedSnapshots: {},
      inlineMaxSize: 50,
      maxSize: 50,
    },
  ],
  'vitest/no-mocks-import': 'off',
  'vitest/no-restricted-matchers': 'off',
  'vitest/no-restricted-vi-methods': 'off',
  'vitest/no-standalone-expect': [
    'warn',
    {
      additionalTestBlockFunctions: [],
    },
  ],
  'vitest/no-test-prefixes': 'off',
  'vitest/no-test-return-statement': 'off',
  'vitest/no-unneeded-async-expect-function': 'off',
  'vitest/padding-around-after-all-blocks': 'off',
  'vitest/padding-around-test-blocks': 'off',
  'vitest/prefer-called-exactly-once-with': 'off',
  'vitest/prefer-called-once': 'off',
  'vitest/prefer-called-times': 'off',
  'vitest/prefer-called-with': 'off',
  'vitest/prefer-comparison-matcher': 'off',
  'vitest/prefer-describe-function-title': 'off',
  'vitest/prefer-each': 'off',
  'vitest/prefer-equality-matcher': 'off',
  'vitest/prefer-expect-assertions': [
    'off',
    {
      onlyFunctionsWithAsyncKeyword: false,
      onlyFunctionsWithExpectInCallback: false,
      onlyFunctionsWithExpectInLoop: false,
    },
  ],
  'vitest/prefer-expect-resolves': 'off',
  'vitest/prefer-expect-type-of': 'off',
  'vitest/prefer-hooks-in-order': 'off',
  'vitest/prefer-hooks-on-top': 'off',
  'vitest/prefer-import-in-mock': 'off',
  'vitest/prefer-importing-vitest-globals': 'off',
  'vitest/prefer-lowercase-title': 'off',
  'vitest/prefer-mock-promise-shorthand': 'off',
  'vitest/prefer-mock-return-shorthand': 'off',
  'vitest/prefer-snapshot-hint': 'warn',
  'vitest/prefer-spy-on': 'off',
  'vitest/prefer-strict-boolean-matchers': 'off',
  'vitest/prefer-strict-equal': 'off',
  'vitest/prefer-to-be': 'off',
  'vitest/prefer-to-be-falsy': 'off',
  'vitest/prefer-to-be-object': 'off',
  'vitest/prefer-to-be-truthy': 'off',
  'vitest/prefer-to-contain': 'off',
  'vitest/prefer-to-have-been-called-times': 'off',
  'vitest/prefer-to-have-length': 'off',
  'vitest/prefer-todo': 'off',
  'vitest/require-awaited-expect-poll': 'warn',
  'vitest/require-hook': [
    'off',
    {
      allowedFunctionCalls: [],
    },
  ],
  'vitest/require-local-test-context-for-concurrent-snapshots': 'warn',
  'vitest/require-mock-type-parameters': [
    'warn',
    {
      checkImportFunctions: false,
    },
  ],
  'vitest/require-test-timeout': 'off',
  'vitest/require-to-throw-message': 'warn',
  'vitest/require-top-level-describe': [
    'off',
    {
      maxNumberOfTopLevelDescribes: 4294967295,
    },
  ],
  'vitest/valid-describe-callback': 'warn',
  'vitest/valid-expect': [
    'warn',
    {
      alwaysAwait: false,
      asyncMatchers: ['toResolve', 'toReject'],
      maxArgs: 1,
      minArgs: 1,
    },
  ],
  'vitest/valid-expect-in-promise': 'warn',
  'vitest/valid-title': 'warn',
  'vitest/warn-todo': 'warn',
} satisfies DummyRuleMap;
