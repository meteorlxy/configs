import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const reactHooksRules: FlatConfig.Rules = {
  'react-hooks/exhaustive-deps': 'error',
  'react-hooks/rules-of-hooks': 'error',
};
