import type { Config } from 'eslint/config';

export const eslintCommentsRules = {
  // best practices
  '@eslint-community/eslint-comments/disable-enable-pair': 'error',
  '@eslint-community/eslint-comments/no-aggregating-enable': 'error',
  '@eslint-community/eslint-comments/no-duplicate-disable': 'error',
  '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
  '@eslint-community/eslint-comments/no-unused-disable': 'error',
  '@eslint-community/eslint-comments/no-unused-enable': 'error',

  // stylistic issues
  '@eslint-community/eslint-comments/no-restricted-disable': 'off',
  '@eslint-community/eslint-comments/no-use': [
    'off',
    {
      allow: [],
    },
  ],
  '@eslint-community/eslint-comments/require-description': [
    'error',
    {
      ignore: [],
    },
  ],
} satisfies Config['rules'];
