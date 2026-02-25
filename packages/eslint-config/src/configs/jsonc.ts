import type { Config } from 'eslint/config';
import { jsoncRules } from '../rules';
import { interopDefault } from '../utils';

export interface EslintJsoncOptions {
  files?: Config['files'];
  overrides?: Config['rules'];
}

/**
 * JSONC configuration for eslint.
 */
export const jsonc = async ({
  files = ['**/*.json', '**/*.json5', '**/*.jsonc'],
  overrides,
}: EslintJsoncOptions = {}): Promise<Config[]> => {
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
