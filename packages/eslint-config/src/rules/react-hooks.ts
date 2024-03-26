import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const reactHooksRules = {
  'react-hooks/exhaustive-deps': 'error',
  'react-hooks/rules-of-hooks': 'error',
} satisfies FlatConfig.Rules;
