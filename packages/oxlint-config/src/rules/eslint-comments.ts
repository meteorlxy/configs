import type { Rules } from '../types';

/**
 * ESLint comments rules migrated to Oxlint. Unsupported rules are kept as comments.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const eslintCommentsRules = {
  // Unsupported by Oxlint yet: eslint-comments/disable-enable-pair.
  //   // best practices
  //   'eslint-comments/disable-enable-pair': [
  //     'error',
  //     {
  //       allowWholeFile: true,
  //     },
  //   ]
  // Unsupported by Oxlint yet: eslint-comments/no-aggregating-enable.
  //   'eslint-comments/no-aggregating-enable': 'error'
  // Unsupported by Oxlint yet: eslint-comments/no-duplicate-disable.
  //   'eslint-comments/no-duplicate-disable': 'error'
  // Unsupported by Oxlint yet: eslint-comments/no-unlimited-disable.
  //   'eslint-comments/no-unlimited-disable': 'error'
  // Unsupported by Oxlint yet: eslint-comments/no-unused-disable.
  //   'eslint-comments/no-unused-disable': 'error'
  // Unsupported by Oxlint yet: eslint-comments/no-unused-enable.
  //   'eslint-comments/no-unused-enable': 'error'
  // Unsupported by Oxlint yet: eslint-comments/no-restricted-disable.
  //   // stylistic issues
  //   'eslint-comments/no-restricted-disable': 'off'
  // Unsupported by Oxlint yet: eslint-comments/no-use.
  //   'eslint-comments/no-use': [
  //     'off',
  //     {
  //       allow: [],
  //     },
  //   ]
  // Unsupported by Oxlint yet: eslint-comments/require-description.
  //   'eslint-comments/require-description': [
  //     'error',
  //     {
  //       ignore: [],
  //     },
  //   ]
} satisfies Rules;
