import { meteorlxy } from '@meteorlxy/eslint-config';

export default meteorlxy({
  ignores: {
    files: ['test/**'],
  },
  typescript: {
    overrides: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
});
