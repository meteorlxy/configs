import { env, meteorlxy } from '@meteorlxy/eslint-config';

export default meteorlxy({
  ignores: env.IS_EDITOR ? [] : ['test/**'],
  react: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
    overrides: {
      '@typescript-eslint/no-non-null-assertion': 'off',
    },
  },
  vue: true,
});
