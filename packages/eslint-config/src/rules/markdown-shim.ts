import tsPlugin from '@typescript-eslint/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const markdownShimRules: FlatConfig.Rules = {
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

  // typescript-eslint rules
  '@typescript-eslint/no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-vars': 'off',

  // typescript-eslint type-checking rules
  ...Object.fromEntries(
    Object.entries(tsPlugin.rules)
      .filter(([, rule]) => rule.meta.docs?.requiresTypeChecking)
      .map(([name]) => [`@typescript-eslint/${name}`, 'off']),
  ),

  // import rules
  'import/no-extraneous-dependencies': 'off',
  'import/no-unresolved': 'off',
};
