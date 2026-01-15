import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const markdownRules = {
  'markdown/fenced-code-language': 'error',
  'markdown/heading-increment': 'error',
  'markdown/no-bare-urls': 'off',
  'markdown/no-duplicate-definitions': 'error',
  'markdown/no-duplicate-headings': ['error', { checkSiblingsOnly: true }],
  'markdown/no-empty-definitions': 'error',
  'markdown/no-empty-images': 'error',
  'markdown/no-empty-links': 'error',
  'markdown/no-html': 'off',
  'markdown/no-invalid-label-refs': 'error',
  'markdown/no-missing-atx-heading-space': 'error',
  'markdown/no-missing-label-refs': 'error',
  'markdown/no-missing-link-fragments': 'error',
  'markdown/no-multiple-h1': 'error',
  'markdown/no-reference-like-urls': 'error',
  'markdown/no-reversed-media-syntax': 'error',
  'markdown/no-space-in-emphasis': 'error',
  'markdown/no-unused-definitions': 'error',
  'markdown/require-alt-text': 'error',
  'markdown/table-column-count': 'error',
} satisfies FlatConfig.Rules;
