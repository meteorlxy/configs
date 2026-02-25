import type { Plugin } from '@eslint/core';
import type { Config } from 'eslint/config';
import { reactHooksRules, reactRefreshRules, reactRules } from '../rules';
import { interopDefault } from '../utils';

export interface EslintReactOptions {
  files?: Config['files'];
  overrides?: Config['rules'];
}

/**
 * React configuration for eslint.
 */
export const react = async ({
  files = ['**/*.ts', '**/*.tsx'],
  overrides,
}: EslintReactOptions = {}): Promise<Config[]> => {
  const [reactPlugin, reactHooksPlugin, reactRefreshPlugin] = await Promise.all(
    [
      interopDefault(import('eslint-plugin-react')),
      interopDefault(import('eslint-plugin-react-hooks')),
      interopDefault(import('eslint-plugin-react-refresh')),
    ],
  );

  return [
    {
      name: 'meteorlxy/react/plugins',
      plugins: {
        'react': reactPlugin,
        'react-hooks': reactHooksPlugin as unknown as Plugin,
        'react-refresh': reactRefreshPlugin,
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
    {
      name: 'meteorlxy/react/rules',
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
