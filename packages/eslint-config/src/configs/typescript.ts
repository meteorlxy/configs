import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import { typescriptRules, typescriptShimRules } from '../rules';

export interface EslintTypescriptOptions {
  files?: FlatConfig.Config['files'];
  overrides?: FlatConfig.Config['rules'];
}

/**
 * Typescript configuration for eslint.
 */
export const typescript = ({
  files = ['**/*.ts', '**/*.tsx', '**/*.vue'],
  overrides,
}: EslintTypescriptOptions = {}): FlatConfig.Config[] => [
  {
    name: 'meteorlxy/typescript/plugins',
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
  },
  {
    name: 'meteorlxy/typescript/rules',
    files,
    languageOptions: {
      ecmaVersion: 2022,
      parser: tsParser,
      parserOptions: {
        projectService: true,
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
      'import/extensions': [
        '.cjs',
        '.cts',
        '.js',
        '.jsx',
        '.mjs',
        '.mts',
        '.ts',
        '.tsx',
      ],
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
      'import/parsers': {
        '@typescript-eslint/parser': ['.cts', '.mts', '.ts', '.tsx'],
      },
      'import/resolver': {
        node: {
          extensions: [
            '.cjs',
            '.cts',
            '.js',
            '.json',
            '.jsx',
            '.mjs',
            '.mts',
            '.ts',
            '.tsx',
          ],
        },
      },
    },
  },
];
