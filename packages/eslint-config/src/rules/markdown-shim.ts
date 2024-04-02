import tsPlugin from '@typescript-eslint/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const markdownShimRules = {
  // builtin rules
  'no-alert': 'off',
  'no-console': 'off',
  'no-labels': 'off',
  'no-lone-blocks': 'off',
  'no-restricted-syntax': 'off',
  'no-undef': 'off',
  'no-unused-expressions': 'off',
  'no-unused-labels': 'off',
  'no-unused-vars': 'off',
  'strict': 'off',
  'unicode-bom': 'off',

  // import rules
  'import/no-extraneous-dependencies': 'off',
  'import/no-unresolved': 'off',

  // typescript-eslint rules, should disable type checking
  ...tsPlugin.configs['disable-type-checked'].rules,
  '@typescript-eslint/no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-vars': 'off',

  // vue rules
  'vue/require-name-property': 'off',
} satisfies FlatConfig.Rules;
