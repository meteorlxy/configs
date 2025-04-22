import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore';
// eslint-disable-next-line import/no-rename-default
import gitignorePlugin from 'eslint-config-flat-gitignore';

export interface EslintIgnoresOptions {
  files?: FlatConfig.Config['ignores'];
  gitignore?: FlatGitignoreOptions;
}

/**
 * Ignores configuration for eslint.
 */
export const ignores = ({
  files = [],
  gitignore = {},
}: EslintIgnoresOptions = {}): FlatConfig.Config[] => [
  gitignorePlugin({
    name: 'meteorlxy/gitignore',
    ...gitignore,
  }),
  {
    name: 'meteorlxy/ignores',
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

      ...files,
    ],
  },
];
