import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import { reactHooksRules, reactRefreshRules, reactRules } from '../rules';
import { interopDefault } from '../utils';

export interface EslintReactOptions {
  files?: FlatConfig.Config['files'];
  overrides?: FlatConfig.Config['rules'];
}

/**
 * React configuration for eslint.
 */
export const react = async ({
  files = ['**/*.ts', '**/*.tsx'],
  overrides,
}: EslintReactOptions = {}): Promise<FlatConfig.Config[]> => {
  // TODO: ensure deps
  const [reactPlugin, reactHooksPlugin, reactRefreshPlugin] = await Promise.all(
    [
      interopDefault(import('eslint-plugin-react')),
      interopDefault(import('eslint-plugin-react-hooks')),
      interopDefault(import('eslint-plugin-react-refresh')),
    ],
  );

  return [
    {
      plugins: {
        'react': reactPlugin,
        'react-hooks': reactHooksPlugin,
        'react-refresh': reactRefreshPlugin,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    {
      files,
      rules: {
        ...reactRules,
        ...reactHooksRules,
        ...reactRefreshRules,
        ...overrides,
      },
      settings: {
        'import/resolver': {
          node: {
            extensions: [
              '.mjs',
              '.js',
              '.jsx',
              '.json',
              '.ts',
              '.tsx',
              '.d.ts',
            ],
          },
        },
      },
    },
  ];
};
