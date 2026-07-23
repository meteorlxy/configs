import type { Rules } from '../types';

/**
 * React refresh rules migrated to Oxlint react rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const reactRefreshRules = {
  'react/only-export-components': ['warn', { allowConstantExport: true }],
} satisfies Rules;
