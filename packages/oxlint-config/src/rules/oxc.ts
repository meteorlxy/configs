import type { DummyRuleMap } from 'oxlint';

/**
 * oxc rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const oxcRules = {
  'oxc/approx-constant': 'off',
  'oxc/bad-array-method-on-arguments': 'warn',
  'oxc/bad-bitwise-operator': 'off',
  'oxc/bad-char-at-comparison': 'warn',
  'oxc/bad-comparison-sequence': 'warn',
  'oxc/bad-min-max-func': 'warn',
  'oxc/bad-object-literal-comparison': 'warn',
  'oxc/bad-replace-all-arg': 'warn',
  'oxc/branches-sharing-code': 'off',
  'oxc/const-comparisons': 'warn',
  'oxc/double-comparisons': 'warn',
  'oxc/erasing-op': 'warn',
  'oxc/misrefactored-assign-op': 'off',
  'oxc/missing-throw': 'warn',
  'oxc/no-accumulating-spread': 'off',
  'oxc/no-async-await': 'off',
  'oxc/no-async-endpoint-handlers': [
    'off',
    {
      allowedNames: [],
    },
  ],
  'oxc/no-barrel-file': [
    'off',
    {
      threshold: 100,
    },
  ],
  'oxc/no-const-enum': 'off',
  'oxc/no-map-spread': [
    'off',
    {
      ignoreArgs: true,
      ignoreRereads: true,
    },
  ],
  'oxc/no-optional-chaining': [
    'off',
    {
      message: '',
    },
  ],
  'oxc/no-rest-spread-properties': [
    'off',
    {
      objectRestMessage: '',
      objectSpreadMessage: '',
    },
  ],
  'oxc/no-this-in-exported-function': 'off',
  'oxc/number-arg-out-of-range': 'warn',
  'oxc/only-used-in-recursion': 'warn',
  'oxc/uninvoked-array-callback': 'warn',
} satisfies DummyRuleMap;
