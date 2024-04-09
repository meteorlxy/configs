import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import prettierConfig from 'eslint-config-prettier';

/**
 * Prettier configuration for eslint.
 */
export const prettier = (): FlatConfig.Config[] => [
  {
    name: 'meteorlxy/prettier',
    rules: prettierConfig.rules,
  },
];
