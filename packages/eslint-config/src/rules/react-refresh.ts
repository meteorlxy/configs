import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const reactRefreshRules = {
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
} satisfies FlatConfig.Rules;
