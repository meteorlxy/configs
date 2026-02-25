import type { Config } from 'eslint/config';
import eslintCommentsPlugin from 'eslint-plugin-eslint-comments';
import globals from 'globals';
import { builtinRules, eslintCommentsRules } from '../rules';

export interface EslintJavascriptOptions {
  overrides?: Config['rules'];
}

/**
 * Javascript configuration for eslint.
 */
export const javascript = ({
  overrides,
}: EslintJavascriptOptions = {}): Config[] => [
  {
    name: 'meteorlxy/javascript/plugins',
    plugins: {
      'eslint-comments': eslintCommentsPlugin,
    },
  },
  {
    name: 'meteorlxy/javascript/rules',
    ignores: ['**/*.md'],
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
