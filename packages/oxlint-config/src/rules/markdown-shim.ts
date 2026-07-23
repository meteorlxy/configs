import type { Rules } from '../types';

/**
 * Markdown shim rules migrated to Oxlint. Unsupported rules are kept as comments.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const markdownShimRules = {
  // Unsupported by Oxlint yet: eol-last.
  //   // builtin rules
  //   'eol-last': 'off'
  'no-alert': 'off',
  'no-console': 'off',
  'no-labels': 'off',
  'no-lone-blocks': 'off',
  // Unsupported by Oxlint yet: no-restricted-syntax.
  //   'no-restricted-syntax': 'off'
  'no-undef': 'off',
  'no-underscore-dangle': 'off',
  'no-unused-expressions': 'off',
  'no-unused-labels': 'off',
  'no-unused-vars': 'off',
  // Unsupported by Oxlint yet: padded-blocks.
  //   'padded-blocks': 'off'
  // Unsupported by Oxlint yet: strict.
  //   'strict': 'off'
  'unicode-bom': 'off',
  // import rules
  'import/no-absolute-path': 'off',
  // Unsupported by Oxlint yet: import/no-extraneous-dependencies.
  //   'import/no-extraneous-dependencies': 'off'
  // Unsupported by Oxlint yet: import/no-unresolved.
  //   'import/no-unresolved': 'off'
  // Unsupported by Oxlint yet: spread configs are ESLint-only.
  //   // typescript-eslint rules, should disable type checking
  //   ...tsPlugin.configs['disable-type-checked'].rules
  'typescript/explicit-function-return-type': 'off',
  'typescript/explicit-module-boundary-types': 'off',
  'typescript/no-explicit-any': 'off',
  // Unsupported by Oxlint yet: typescript/no-unused-expressions.
  //   'typescript/no-unused-expressions': 'off'
  // Unsupported by Oxlint yet: typescript/no-unused-vars.
  //   'typescript/no-unused-vars': 'off'
  // Unsupported by Oxlint yet: vue/no-v-html.
  //   // vue rules
  //   'vue/no-v-html': 'off'
  // Unsupported by Oxlint yet: vue/require-name-property.
  //   'vue/require-name-property': 'off'
} satisfies Rules;
