import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export type EslintIgnoresOptions = FlatConfig.Config['ignores'];

/**
 * Ignores configuration for eslint.
 */
export const ignores = (
  options: EslintIgnoresOptions = [],
): FlatConfig.Config[] => [
  {
    // TODO: uncomment after upgrading to eslint v9
    // name: 'meteorlxy/ignores',
    ignores: [
      // node_modules & lock files
      '**/node_modules',
      '**/package-lock.json',
      '**/yarn.lock',
      '**/pnpm-lock.yaml',
      '**/bun.lockb',

      // dist & output
      '**/*.min.*',
      '**/.output',
      '**/dist',
      '**/output',

      // temp & cache
      '**/.cache',
      '**/.temp',
      '**/.tmp',
      '**/temp',
      '**/tmp',

      // framework & tools
      '**/.changeset',
      '**/.expo',
      '**/.history',
      '**/.idea',
      '**/.next',
      '**/.nx',
      '**/.nyc_output',
      '**/.turbo',
      '**/.vercel',
      '**/.vite-inspect',
      '**/.vitepress/cache',

      // test & coverage
      '**/__snapshots__',
      '**/coverage',

      // docs
      '**/CHANGELOG*.md',
      '**/LICENSE*',

      ...options,
    ],
  },
];
