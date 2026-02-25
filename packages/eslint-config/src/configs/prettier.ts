import type { Config } from 'eslint/config';
import prettierConfig from 'eslint-config-prettier/flat';

/**
 * Prettier configuration for eslint.
 */
export const prettier = (): Config[] => [
  {
    name: 'meteorlxy/prettier',
    rules: prettierConfig.rules,
  },
];
