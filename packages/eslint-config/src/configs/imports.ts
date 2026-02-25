import type { Plugin } from '@eslint/core';
import type { Config } from 'eslint/config';
import importPlugin from 'eslint-plugin-import-x';
import { importsRules } from '../rules';

export interface EslintImportsOptions {
  overrides?: Config['rules'];
  packageDir?: string[] | string;
}

/**
 * Imports configuration for eslint.
 */
export const imports = ({
  overrides,
  packageDir,
}: EslintImportsOptions = {}): Config[] => [
  {
    name: 'meteorlxy/imports/plugins',
    plugins: {
      import: importPlugin as unknown as Plugin,
    },
  },
  {
    name: 'meteorlxy/imports/rules',
    rules: {
      ...importsRules,
      'import/no-extraneous-dependencies': [
        importsRules['import/no-extraneous-dependencies'][0],
        {
          ...importsRules['import/no-extraneous-dependencies'][1],
          packageDir,
        },
      ],
      ...overrides,
    },
  },
];
