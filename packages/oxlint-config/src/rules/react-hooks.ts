import type { Rules } from '../types';

/**
 * React hooks rules migrated to Oxlint react rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const reactHooksRules = {
  // Unsupported by Oxlint yet: react/component-hook-factories.
  //   'react/component-hook-factories': 'error'
  // Unsupported by Oxlint yet: react/config.
  //   'react/config': 'off'
  // Unsupported by Oxlint yet: react/error-boundaries.
  //   'react/error-boundaries': 'error'
  'react/exhaustive-deps': 'error',
  // Unsupported by Oxlint yet: react/gating.
  //   'react/gating': 'off'
  // Unsupported by Oxlint yet: react/globals.
  //   'react/globals': 'error'
  // Unsupported by Oxlint yet: react/immutability.
  //   'react/immutability': 'error'
  // Unsupported by Oxlint yet: react/incompatible-library.
  //   'react/incompatible-library': 'off'
  // Unsupported by Oxlint yet: react/preserve-manual-memoization.
  //   'react/preserve-manual-memoization': 'off'
  // Unsupported by Oxlint yet: react/purity.
  //   'react/purity': 'error'
  // Unsupported by Oxlint yet: react/refs.
  //   'react/refs': 'error'
  'react/rules-of-hooks': 'error',
  // Unsupported by Oxlint yet: react/set-state-in-effect.
  //   'react/set-state-in-effect': 'error'
  // Unsupported by Oxlint yet: react/set-state-in-render.
  //   'react/set-state-in-render': 'error'
  // Unsupported by Oxlint yet: react/static-components.
  //   'react/static-components': 'error'
  // Unsupported by Oxlint yet: react/unsupported-syntax.
  //   'react/unsupported-syntax': 'error'
  // Unsupported by Oxlint yet: react/use-memo.
  //   'react/use-memo': 'error'
  // Unsupported by Oxlint yet: react/capitalized-calls.
  //   // undocumented rules
  //   'react/capitalized-calls': 'off'
  // Unsupported by Oxlint yet: react/exhaustive-effect-dependencies.
  //   'react/exhaustive-effect-dependencies': 'off'
  // Unsupported by Oxlint yet: react/fbt.
  //   'react/fbt': 'off'
  // Unsupported by Oxlint yet: react/hooks.
  //   'react/hooks': 'off'
  // Unsupported by Oxlint yet: react/invariant.
  //   'react/invariant': 'off'
  // Unsupported by Oxlint yet: react/memo-dependencies.
  //   'react/memo-dependencies': 'off'
  // Unsupported by Oxlint yet: react/memoized-effect-dependencies.
  //   'react/memoized-effect-dependencies': 'off'
  // Unsupported by Oxlint yet: react/no-deriving-state-in-effects.
  //   'react/no-deriving-state-in-effects': 'off'
  // Unsupported by Oxlint yet: react/rule-suppression.
  //   'react/rule-suppression': 'off'
  // Unsupported by Oxlint yet: react/syntax.
  //   'react/syntax': 'off'
  // Unsupported by Oxlint yet: react/todo.
  //   'react/todo': 'off'
  // Unsupported by Oxlint yet: react/void-use-memo.
  //   'react/void-use-memo': 'off'
} satisfies Rules;
