import tsPlugin from '@typescript-eslint/eslint-plugin';
import type { Config } from 'eslint/config';

export const markdownShimRules = {
  // builtin rules
  'eol-last': 'off',
  'no-alert': 'off',
  'no-console': 'off',
  'no-labels': 'off',
  'no-lone-blocks': 'off',
  'no-restricted-syntax': 'off',
  'no-undef': 'off',
  'no-underscore-dangle': 'off',
  'no-unused-expressions': 'off',
  'no-unused-labels': 'off',
  'no-unused-vars': 'off',
  'padded-blocks': 'off',
  'strict': 'off',
  'unicode-bom': 'off',

  // import rules
  'import/no-absolute-path': 'off',
  'import/no-extraneous-dependencies': 'off',
  'import/no-unresolved': 'off',

  // typescript-eslint rules, should disable type checking
  ...tsPlugin.configs['disable-type-checked'].rules,
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-vars': 'off',

  // vue rules
  'vue/no-v-html': 'off',
  'vue/require-name-property': 'off',
} satisfies Config['rules'];
