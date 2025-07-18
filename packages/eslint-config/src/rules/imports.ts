import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const importsRules = {
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import/default': 'off',
  'import/dynamic-import-chunkname': [
    'off',
    {
      importFunctions: [],
      webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
    },
  ],
  'import/export': 'error',
  'import/exports-last': 'off',
  'import/extensions': 'off',
  'import/first': 'error',
  'import/group-exports': 'off',
  'import/imports-first': 'off',
  'import/max-dependencies': 'off',
  'import/named': 'error',
  'import/namespace': 'off',
  'import/newline-after-import': 'error',
  'import/no-absolute-path': 'error',
  'import/no-amd': 'error',
  'import/no-anonymous-default-export': [
    'off',
    {
      allowArray: false,
      allowArrowFunction: false,
      allowAnonymousClass: false,
      allowAnonymousFunction: false,
      allowLiteral: false,
      allowObject: false,
    },
  ],
  'import/no-commonjs': 'off',
  'import/no-cycle': ['error', { maxDepth: '∞' }],
  'import/no-default-export': 'off',
  'import/no-deprecated': 'off',
  'import/no-duplicates': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-empty-named-blocks': 'off',
  'import/no-extraneous-dependencies': [
    'warn',
    {
      devDependencies: [
        '**/*.{test,spec}.{js,jsx,ts,tsx}',
        ...[
          '__mocks__',
          '__tests__',
          '.vuepress',
          '.vitepress',
          'dev',
          'scripts',
          'test',
          'tests',
        ].map((dir) => `**/${dir}/**`),
        ...[
          'build',
          'commitlint',
          'cypress',
          'eslint',
          'jest',
          'playwright',
          'postcss',
          'prettier',
          'rollup',
          'stylelint',
          'tailwind',
          'taze',
          'tsup',
          'vite',
          'vitest',
          'vue',
          'vuepress',
          'webpack',
        ].map((tool) => `**/${tool}.config.{js,ts}`),
      ],
      optionalDependencies: false,
    },
  ],
  'import/no-import-module-exports': [
    'error',
    {
      exceptions: [],
    },
  ],
  'import/no-internal-modules': [
    'off',
    {
      allow: [],
    },
  ],
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-named-default': 'off',
  'import/no-named-export': 'off',
  'import/no-namespace': 'off',
  'import/no-nodejs-modules': 'off',
  'import/no-relative-packages': 'error',
  'import/no-relative-parent-imports': 'off',
  'import/no-rename-default': 'off',
  'import/no-restricted-paths': 'off',
  'import/no-self-import': 'error',
  'import/no-unassigned-import': 'off',
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
  'import/no-unused-modules': [
    'off',
    {
      ignoreExports: [],
      missingExports: true,
      unusedExports: true,
    },
  ],
  'import/no-useless-path-segments': ['error', { commonjs: true }],
  'import/no-webpack-loader-syntax': 'error',

  'import/order': [
    'error',
    {
      'groups': [
        'builtin',
        'external',
        'internal',
        'parent',
        'sibling',
        'index',
      ],
      'newlines-between': 'ignore',
      'alphabetize': {
        order: 'asc',
        orderImportKind: 'asc',
        caseInsensitive: false,
      },
      'pathGroups': [
        {
          pattern: '#*',
          group: 'internal',
        },
        {
          pattern: '#*/**',
          group: 'internal',
        },
        {
          pattern: '@/**',
          group: 'internal',
        },
      ],
    },
  ],
  'import/prefer-default-export': 'off',
  'import/prefer-namespace-import': 'off',
  'import/unambiguous': 'off',
} satisfies FlatConfig.Rules;
