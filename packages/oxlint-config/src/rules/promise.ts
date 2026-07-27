import type { DummyRuleMap } from 'oxlint';

/**
 * promise rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const promiseRules = {
  'promise/always-return': [
    'off',
    {
      ignoreAssignmentVariable: ['globalThis'],
      ignoreLastCallback: false,
    },
  ],
  'promise/avoid-new': 'off',
  'promise/catch-or-return': [
    'off',
    {
      allowFinally: false,
      allowThen: false,
      allowThenStrict: false,
      terminationMethod: ['catch'],
    },
  ],
  'promise/no-callback-in-promise': [
    'warn',
    {
      exceptions: [],
      timeoutsErr: false,
    },
  ],
  'promise/no-multiple-resolved': 'off',
  'promise/no-nesting': 'off',
  'promise/no-new-statics': 'warn',
  'promise/no-promise-in-callback': [
    'off',
    {
      exemptDeclarations: false,
    },
  ],
  'promise/no-return-in-finally': 'off',
  'promise/no-return-wrap': [
    'off',
    {
      allowReject: false,
    },
  ],
  'promise/param-names': 'off',
  'promise/prefer-await-to-callbacks': 'off',
  'promise/prefer-await-to-then': [
    'off',
    {
      strict: false,
    },
  ],
  'promise/prefer-catch': 'off',
  'promise/spec-only': 'off',
  'promise/valid-params': 'warn',
} satisfies DummyRuleMap;
