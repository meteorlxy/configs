import { meteorlxy } from '@meteorlxy/eslint-config';

export default meteorlxy({
  ignores: ['test/**'],
  typescript: {
    overrides: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
});
