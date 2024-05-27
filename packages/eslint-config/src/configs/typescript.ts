import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import { typescriptRules, typescriptShimRules } from '../rules';

export interface EslintTypescriptOptions {
  files?: FlatConfig.Config['files'];
  overrides?: FlatConfig.Config['rules'];
  tsconfigPath?: string[] | string;
}

/**
 * Typescript configuration for eslint.
 */
export const typescript = ({
  files = ['**/*.ts', '**/*.tsx', '**/*.vue'],
  overrides,
  tsconfigPath,
}: EslintTypescriptOptions = {}): FlatConfig.Config[] => [
  {
    name: 'meteorlxy/typescript/plugins',
    plugins: {
      '@typescript-eslint': tsPlugin as FlatConfig.Plugin,
    },
  },
  {
    name: 'meteorlxy/typescript/rules',
    files,
    languageOptions: {
      ecmaVersion: 2022,
      parser: tsParser,
      parserOptions: {
        project: tsconfigPath,
        sourceType: 'module',
      },
      sourceType: 'module',
    },
    rules: {
      ...typescriptShimRules,
      ...typescriptRules,
      ...overrides,
    },
    settings: {
      'import/extensions': ['.js', '.jsx', '.mjs', '.mts', '.ts', '.tsx'],
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.mts', '.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.json', '.jsx', '.mjs', '.mts', '.ts', '.tsx'],
        },
      },
    },
  },
];
