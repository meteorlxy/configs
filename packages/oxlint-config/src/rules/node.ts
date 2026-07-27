import type { DummyRuleMap } from 'oxlint';

/**
 * node rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const nodeRules = {
  'node/callback-return': 'off',
  'node/global-require': 'off',
  'node/handle-callback-err': 'off',
  'node/no-exports-assign': 'off',
  'node/no-mixed-requires': 'off',
  'node/no-new-require': 'off',
  'node/no-path-concat': 'off',
  'node/no-process-env': [
    'off',
    {
      allowedVariables: [],
    },
  ],
  'node/no-sync': [
    'off',
    {
      allowAtRootLevel: false,
      ignores: [],
    },
  ],
  'node/no-top-level-await': [
    'off',
    {
      ignoreBin: false,
    },
  ],
} satisfies DummyRuleMap;
