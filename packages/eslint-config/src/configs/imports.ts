import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import importPlugin from 'eslint-plugin-import-x';
import { importsRules } from '../rules';

export interface EslintImportsOptions {
  overrides?: FlatConfig.Config['rules'];
  packageDir?: string[] | string;
}

/**
 * Imports configuration for eslint.
 */
export const imports = ({
  overrides,
  packageDir,
}: EslintImportsOptions = {}): FlatConfig.Config[] => [
  {
    name: 'meteorlxy/imports/plugins',
    plugins: {
      import: importPlugin,
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
