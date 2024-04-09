import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';
import importPlugin from 'eslint-plugin-i';
import globals from 'globals';
import { builtinRules, eslintCommentsRules, importsRules } from '../rules';

export interface EslintJavascriptOptions {
  overrides?: FlatConfig.Config['rules'];
}

/**
 * Javascript configuration for eslint.
 */
export const javascript = ({
  overrides,
}: EslintJavascriptOptions = {}): FlatConfig.Config[] => [
  {
    name: 'meteorlxy/javascript/plugins',
    plugins: {
      'eslint-comments': eslintCommentsPlugin,
      'import': importPlugin,
    },
  },
  {
    name: 'meteorlxy/javascript/rules',
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      sourceType: 'module',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      ...builtinRules,
      ...eslintCommentsRules,
      ...importsRules,
      ...overrides,
    },
  },
  {
    name: 'meteorlxy/javascript/overrides/scripts',
    files: ['**/scripts/**'],
    rules: {
      'no-console': 'off',
    },
  },
];
