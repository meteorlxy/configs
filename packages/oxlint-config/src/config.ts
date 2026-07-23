import type { OxlintConfig } from 'oxlint';

import {
  builtinRules,
  eslintCommentsRules,
  importsRules,
  jsoncRules,
  markdownRules,
  markdownShimRules,
  reactHooksRules,
  reactRefreshRules,
  reactRules,
  typescriptRules,
  typescriptShimRules,
  vueRules,
} from './rules';

/**
 * Oxlint Config
 *
 * @see https://oxc.rs/docs/guide/usage/linter/config
 */
export const config: OxlintConfig = {
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'react', 'vue'],
  rules: {
    ...builtinRules,
    ...eslintCommentsRules,
    ...importsRules,
    ...jsoncRules,
    ...markdownRules,
    ...markdownShimRules,
    ...reactHooksRules,
    ...reactRefreshRules,
    ...reactRules,
    ...typescriptRules,
    ...typescriptShimRules,
    ...vueRules,
  },
};
