import type { Plugin } from '@eslint/core';
import type { Config } from 'eslint/config';

import { reactHooksRules, reactRefreshRules, reactRules } from '../rules';
import { interopDefault } from '../utils';

export interface EslintReactOptions {
  files?: Config['files'];
  overrides?: Config['rules'];
  settings?: {
    'react'?: {
      version?: string;
    };
    /**
     * @see https://react.dev/reference/eslint-plugin-react-hooks/lints/rules-of-hooks#options
     */
    'react-hooks'?: {
      additionalEffectHooks?: string;
    };
  };
}

/**
 * React configuration for eslint.
 */
export const react = async ({
  files = ['**/*.ts', '**/*.tsx'],
  overrides,
  settings,
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
        ...settings,
        'react': {
          version: 'detect',
          ...settings?.react,
        },
        'react-hooks': {
          ...settings?.['react-hooks'],
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
