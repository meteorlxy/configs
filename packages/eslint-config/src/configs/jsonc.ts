import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import jsoncPlugin from 'eslint-plugin-jsonc';
import jsoncParser from 'jsonc-eslint-parser';
import { jsoncRules } from '../rules';

export interface EslintJsoncOptions {
  files?: FlatConfig.Config['files'];
  overrides?: FlatConfig.Config['rules'];
}

/**
 * JSONC configuration for eslint.
 */
export const jsonc = ({
  files = ['**/*.json', '**/*.json5', '**/*.jsonc'],
  overrides,
}: EslintJsoncOptions = {}): FlatConfig.Config[] => [
  {
    name: 'meteorlxy/jsonc/plugins',
    plugins: {
      jsonc: jsoncPlugin,
    },
  },
  {
    name: 'meteorlxy/jsonc/rules',
    files,
    languageOptions: {
      parser: jsoncParser,
    },
    rules: {
      ...jsoncRules,
      ...overrides,
    },
  },
];
