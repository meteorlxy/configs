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
    plugins: {
      '@typescript-eslint': tsPlugin as FlatConfig.Plugin,
    },
  },
  {
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
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      },
      'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/resolver': {
        node: {
          extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
        },
      },
    },
  },
];
