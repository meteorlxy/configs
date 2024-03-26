import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const eslintCommentsRules = {
  'eslint-comments/no-aggregating-enable': 'error',
  'eslint-comments/no-duplicate-disable': 'error',
  'eslint-comments/no-unlimited-disable': 'error',
  'eslint-comments/no-unused-enable': 'error',
} satisfies FlatConfig.Rules;
