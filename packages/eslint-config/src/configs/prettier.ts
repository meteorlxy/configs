import prettierConfig from 'eslint-config-prettier/flat';
import type { Config } from 'eslint/config';

/**
 * Prettier configuration for eslint.
 */
export const prettier = (): Config[] => [
  {
    name: 'meteorlxy/prettier',
    rules: prettierConfig.rules,
  },
];
