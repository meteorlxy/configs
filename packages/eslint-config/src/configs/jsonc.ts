import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import { jsoncRules } from '../rules';
import { interopDefault } from '../utils';

export interface EslintJsoncOptions {
  files?: FlatConfig.Config['files'];
  overrides?: FlatConfig.Config['rules'];
}

/**
 * JSONC configuration for eslint.
 */
export const jsonc = async ({
  files = ['**/*.json', '**/*.json5', '**/*.jsonc'],
  overrides,
}: EslintJsoncOptions = {}): Promise<FlatConfig.Config[]> => {
  const [jsoncPlugin, jsoncParser] = await Promise.all([
    interopDefault(import('eslint-plugin-jsonc')),
    interopDefault(import('jsonc-eslint-parser')),
  ]);

  return [
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
};
