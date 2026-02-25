import type { Config } from 'eslint/config';

/**
 * React hooks rules
 *
 * @see https://react.dev/reference/eslint-plugin-react-hooks
 */
export const reactHooksRules = {
  'react-hooks/component-hook-factories': 'error',
  'react-hooks/config': 'off',
  'react-hooks/error-boundaries': 'error',
  'react-hooks/exhaustive-deps': 'error',
  'react-hooks/gating': 'off',
  'react-hooks/globals': 'error',
  'react-hooks/immutability': 'error',
  'react-hooks/incompatible-library': 'off',
  'react-hooks/preserve-manual-memoization': 'off',
  'react-hooks/purity': 'error',
  'react-hooks/refs': 'error',
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/set-state-in-effect': 'error',
  'react-hooks/set-state-in-render': 'error',
  'react-hooks/static-components': 'error',
  'react-hooks/unsupported-syntax': 'error',
  'react-hooks/use-memo': 'error',

  // undocumented rules
  'react-hooks/automatic-effect-dependencies': 'off',
  'react-hooks/capitalized-calls': 'off',
  'react-hooks/fbt': 'off',
  'react-hooks/fire': 'off',
  'react-hooks/hooks': 'off',
  'react-hooks/invariant': 'off',
  'react-hooks/memoized-effect-dependencies': 'off',
  'react-hooks/no-deriving-state-in-effects': 'off',
  'react-hooks/rule-suppression': 'off',
  'react-hooks/syntax': 'off',
  'react-hooks/todo': 'off',
  'react-hooks/void-use-memo': 'off',
} satisfies Config['rules'];
