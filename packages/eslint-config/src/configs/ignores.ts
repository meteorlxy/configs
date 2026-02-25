import type { Config } from 'eslint/config';
import type { FlatGitignoreOptions } from 'eslint-config-flat-gitignore';
import { interopDefault } from '../utils';

export interface EslintIgnoresOptions {
  files?: Config['ignores'];
  gitignore?: FlatGitignoreOptions;
}

/**
 * Ignores configuration for eslint.
 */
export const ignores = async ({
  files = [],
  gitignore = {},
}: EslintIgnoresOptions = {}): Promise<Config[]> => {
  const gitignorePlugin = await interopDefault(
    import('eslint-config-flat-gitignore'),
  );

  return [
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
};
