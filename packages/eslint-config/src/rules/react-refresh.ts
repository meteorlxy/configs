import type { Config } from 'eslint/config';

export const reactRefreshRules = {
  'react-refresh/only-export-components': [
    'warn',
    { allowConstantExport: true },
  ],
} satisfies Config['rules'];
