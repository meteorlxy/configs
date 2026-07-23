import type { Rules } from '../types';

/**
 * Markdown rules migrated to Oxlint. Unsupported rules are kept as comments.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const markdownRules = {
  // Unsupported by Oxlint yet: markdown/fenced-code-language.
  //   'markdown/fenced-code-language': 'error'
  // Unsupported by Oxlint yet: markdown/fenced-code-meta.
  //   'markdown/fenced-code-meta': 'off'
  // Unsupported by Oxlint yet: markdown/heading-increment.
  //   'markdown/heading-increment': 'error'
  // Unsupported by Oxlint yet: markdown/no-bare-urls.
  //   'markdown/no-bare-urls': 'off'
  // Unsupported by Oxlint yet: markdown/no-duplicate-definitions.
  //   'markdown/no-duplicate-definitions': 'error'
  // Unsupported by Oxlint yet: markdown/no-duplicate-headings.
  //   'markdown/no-duplicate-headings': ['error', { checkSiblingsOnly: true }]
  // Unsupported by Oxlint yet: markdown/no-empty-definitions.
  //   'markdown/no-empty-definitions': 'error'
  // Unsupported by Oxlint yet: markdown/no-empty-images.
  //   'markdown/no-empty-images': 'error'
  // Unsupported by Oxlint yet: markdown/no-empty-links.
  //   'markdown/no-empty-links': 'error'
  // Unsupported by Oxlint yet: markdown/no-html.
  //   'markdown/no-html': 'off'
  // Unsupported by Oxlint yet: markdown/no-invalid-label-refs.
  //   'markdown/no-invalid-label-refs': 'error'
  // Unsupported by Oxlint yet: markdown/no-missing-atx-heading-space.
  //   'markdown/no-missing-atx-heading-space': 'error'
  // Unsupported by Oxlint yet: markdown/no-missing-label-refs.
  //   'markdown/no-missing-label-refs': 'error'
  // Unsupported by Oxlint yet: markdown/no-missing-link-fragments.
  //   'markdown/no-missing-link-fragments': 'error'
  // Unsupported by Oxlint yet: markdown/no-multiple-h1.
  //   'markdown/no-multiple-h1': 'error'
  // Unsupported by Oxlint yet: markdown/no-reference-like-urls.
  //   'markdown/no-reference-like-urls': 'error'
  // Unsupported by Oxlint yet: markdown/no-reversed-media-syntax.
  //   'markdown/no-reversed-media-syntax': 'error'
  // Unsupported by Oxlint yet: markdown/no-space-in-emphasis.
  //   'markdown/no-space-in-emphasis': 'error'
  // Unsupported by Oxlint yet: markdown/no-unused-definitions.
  //   'markdown/no-unused-definitions': 'error'
  // Unsupported by Oxlint yet: markdown/require-alt-text.
  //   'markdown/require-alt-text': 'error'
  // Unsupported by Oxlint yet: markdown/table-column-count.
  //   'markdown/table-column-count': 'error'
} satisfies Rules;
