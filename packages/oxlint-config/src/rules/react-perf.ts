import type { DummyRuleMap } from 'oxlint';

/**
 * react-perf rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const reactPerfRules = {
  'react-perf/jsx-no-jsx-as-prop': 'off',
  'react-perf/jsx-no-new-array-as-prop': 'off',
  'react-perf/jsx-no-new-function-as-prop': 'off',
  'react-perf/jsx-no-new-object-as-prop': 'off',
} satisfies DummyRuleMap;
