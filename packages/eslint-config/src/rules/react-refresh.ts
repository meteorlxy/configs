import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const reactRefreshRules: FlatConfig.Rules = {
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
};
