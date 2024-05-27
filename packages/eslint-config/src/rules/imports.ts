import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const importsRules = {
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import/default': 'off',
  'import/export': 'error',
  'import/extensions': 'off',
  'import/first': 'error',
  'import/imports-first': 'off',
  'import/named': 'error',
  'import/namespace': 'off',
  'import/no-commonjs': 'off',
  'import/no-deprecated': 'off',
  'import/no-duplicates': 'error',
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
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-named-default': 'off',
  'import/no-namespace': 'off',
  'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
  'import/no-amd': 'error',
  'import/no-nodejs-modules': 'off',
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

  'import/newline-after-import': 'error',
  'import/prefer-default-export': 'off',
  'import/no-restricted-paths': 'off',
  'import/max-dependencies': 'off',
  'import/no-absolute-path': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-internal-modules': [
    'off',
    {
      allow: [],
    },
  ],
  'import/unambiguous': 'off',
  'import/no-webpack-loader-syntax': 'error',
  'import/no-unassigned-import': 'off',
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
  'import/exports-last': 'off',
  'import/group-exports': 'off',
  'import/no-default-export': 'off',
  'import/no-named-export': 'off',
  'import/no-self-import': 'error',
  'import/no-cycle': ['error', { maxDepth: '∞' }],
  'import/no-useless-path-segments': ['error', { commonjs: true }],
  'import/dynamic-import-chunkname': [
    'off',
    {
      importFunctions: [],
      webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
    },
  ],
  'import/no-relative-parent-imports': 'off',
  'import/no-unused-modules': [
    'off',
    {
      ignoreExports: [],
      missingExports: true,
      unusedExports: true,
    },
  ],
  'import/no-import-module-exports': [
    'error',
    {
      exceptions: [],
    },
  ],
  'import/no-relative-packages': 'error',
} satisfies FlatConfig.Rules;
