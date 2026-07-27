import globals from 'globals';
import type { OxlintConfig } from 'oxlint';

import {
  builtinRules,
  importRules,
  jestRules,
  jsdocRules,
  jsxA11yRules,
  nextjsRules,
  nodeRules,
  oxcRules,
  promiseRules,
  reactPerfRules,
  reactRules,
  typescriptRules,
  unicornRules,
  vitestRules,
  vueRules,
} from './rules';

/**
 * Oxlint Config
 *
 * @see https://oxc.rs/docs/guide/usage/linter/config
 */
export const config = {
  // @ts-expect-error: oxlint type error: https://github.com/oxc-project/oxc/issues/24982
  globals: {
    ...globals.browser,
    ...globals.es2021,
    ...globals.node,
  },
  plugins: [
    'eslint',
    'typescript',
    'unicorn',
    'oxc',
    'import',
    // 'react',
    // 'react-perf',
    // 'jsx-a11y',
    // 'nextjs',
    'jsdoc',
    'promise',
    // 'jest',
    'vitest',
    'node',
    // 'vue',
  ],
  rules: {
    ...builtinRules,
    ...importRules,
    ...typescriptRules,
    ...reactRules,
    ...reactPerfRules,
    ...vueRules,
    ...unicornRules,
    ...oxcRules,
    ...jsxA11yRules,
    ...nextjsRules,
    ...jsdocRules,
    ...promiseRules,
    ...jestRules,
    ...vitestRules,
    ...nodeRules,
  },
  overrides: [
    {
      files: ['**/scripts/**'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
} satisfies OxlintConfig;
