import type { Rules } from '../types';

/**
 * Import rules migrated to Oxlint.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const importsRules = {
  'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
  'import/default': 'off',
  // Unsupported by Oxlint yet: import/dynamic-import-chunkname.
  //   'import/dynamic-import-chunkname': [
  //     'off',
  //     {
  //       importFunctions: [],
  //       webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
  //     },
  //   ]
  'import/export': 'error',
  'import/exports-last': 'off',
  'import/extensions': 'off',
  'import/first': 'error',
  'import/group-exports': 'off',
  // Unsupported by Oxlint yet: import/imports-first.
  //   'import/imports-first': 'off'
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
  // Unsupported by Oxlint yet: import/no-deprecated.
  //   'import/no-deprecated': 'off'
  'import/no-duplicates': 'error',
  'import/no-dynamic-require': 'error',
  'import/no-empty-named-blocks': 'off',
  // Unsupported by Oxlint yet: import/no-extraneous-dependencies.
  //   'import/no-extraneous-dependencies': [
  //     'warn',
  //     {
  //       devDependencies: [
  //         '**/*.{test,spec}.{js,jsx,ts,tsx}',
  //         ...[
  //           '__mocks__',
  //           '__tests__',
  //           '.vuepress',
  //           '.vitepress',
  //           'dev',
  //           'scripts',
  //           'test',
  //           'tests',
  //         ].map((dir) => `**/${dir}/**`),
  //         ...[
  //           'build',
  //           'commitlint',
  //           'cypress',
  //           'eslint',
  //           'jest',
  //           'oxfmt',
  //           'playwright',
  //           'postcss',
  //           'prettier',
  //           'rolldown',
  //           'rollup',
  //           'stylelint',
  //           'tailwind',
  //           'taze',
  //           'tsdown',
  //           'tsup',
  //           'vite',
  //           'vitest',
  //           'vue',
  //           'vuepress',
  //           'webpack',
  //         ].map((tool) => `**/${tool}.config.{cjs,js,mjs,ts}`),
  //       ],
  //       optionalDependencies: false,
  //     },
  //   ]
  // Unsupported by Oxlint yet: import/no-import-module-exports.
  //   'import/no-import-module-exports': [
  //     'error',
  //     {
  //       exceptions: [],
  //     },
  //   ]
  // Unsupported by Oxlint yet: import/no-internal-modules.
  //   'import/no-internal-modules': [
  //     'off',
  //     {
  //       allow: [],
  //     },
  //   ]
  'import/no-mutable-exports': 'error',
  'import/no-named-as-default': 'off',
  'import/no-named-as-default-member': 'off',
  'import/no-named-default': 'off',
  'import/no-named-export': 'off',
  'import/no-namespace': 'off',
  'import/no-nodejs-modules': 'off',
  // Unsupported by Oxlint yet: import/no-relative-packages.
  //   'import/no-relative-packages': 'error'
  'import/no-relative-parent-imports': 'off',
  // Unsupported by Oxlint yet: import/no-rename-default.
  //   'import/no-rename-default': 'off'
  // Unsupported by Oxlint yet: import/no-restricted-paths.
  //   'import/no-restricted-paths': 'off'
  'import/no-self-import': 'error',
  'import/no-unassigned-import': 'off',
  // Unsupported by Oxlint yet: import/no-unresolved.
  //   'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }]
  // Unsupported by Oxlint yet: import/no-unused-modules.
  //   'import/no-unused-modules': [
  //     'off',
  //     {
  //       ignoreExports: [],
  //       missingExports: true,
  //       unusedExports: true,
  //     },
  //   ]
  // Unsupported by Oxlint yet: import/no-useless-path-segments.
  //   'import/no-useless-path-segments': ['error', { commonjs: true }]
  'import/no-webpack-loader-syntax': 'error',
  // Unsupported by Oxlint yet: import/order.
  //   'import/order': [
  //     'off',
  //     {
  //       'groups': [
  //         'builtin',
  //         'external',
  //         'internal',
  //         'parent',
  //         'sibling',
  //         'index',
  //       ],
  //       'newlines-between': 'ignore',
  //       'alphabetize': {
  //         order: 'asc',
  //         orderImportKind: 'asc',
  //         caseInsensitive: false,
  //       },
  //       'pathGroups': [
  //         {
  //           pattern: '#*',
  //           group: 'internal',
  //         },
  //         {
  //           pattern: '#*/**',
  //           group: 'internal',
  //         },
  //         {
  //           pattern: '@/**',
  //           group: 'internal',
  //         },
  //       ],
  //     },
  //   ]
  'import/prefer-default-export': 'off',
  // Unsupported by Oxlint yet: import/prefer-namespace-import.
  //   'import/prefer-namespace-import': 'off'
  'import/unambiguous': 'off',
} satisfies Rules;
