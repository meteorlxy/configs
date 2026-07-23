import type { Rules } from '../types';

/**
 * JSONC rules migrated to Oxlint. Unsupported rules are kept as comments.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const jsoncRules = {
  // Unsupported by Oxlint yet: jsonc/no-bigint-literals.
  //   'jsonc/no-bigint-literals': 'error'
  // Unsupported by Oxlint yet: jsonc/no-binary-expression.
  //   'jsonc/no-binary-expression': 'error'
  // Unsupported by Oxlint yet: jsonc/no-binary-numeric-literals.
  //   'jsonc/no-binary-numeric-literals': 'error'
  // Unsupported by Oxlint yet: jsonc/no-dupe-keys.
  //   'jsonc/no-dupe-keys': 'error'
  // Unsupported by Oxlint yet: jsonc/no-escape-sequence-in-identifier.
  //   'jsonc/no-escape-sequence-in-identifier': 'error'
  // Unsupported by Oxlint yet: jsonc/no-floating-decimal.
  //   'jsonc/no-floating-decimal': 'error'
  // Unsupported by Oxlint yet: jsonc/no-hexadecimal-numeric-literals.
  //   'jsonc/no-hexadecimal-numeric-literals': 'error'
  // Unsupported by Oxlint yet: jsonc/no-infinity.
  //   'jsonc/no-infinity': 'error'
  // Unsupported by Oxlint yet: jsonc/no-multi-str.
  //   'jsonc/no-multi-str': 'error'
  // Unsupported by Oxlint yet: jsonc/no-nan.
  //   'jsonc/no-nan': 'error'
  // Unsupported by Oxlint yet: jsonc/no-number-props.
  //   'jsonc/no-number-props': 'error'
  // Unsupported by Oxlint yet: jsonc/no-numeric-separators.
  //   'jsonc/no-numeric-separators': 'error'
  // Unsupported by Oxlint yet: jsonc/no-octal.
  //   'jsonc/no-octal': 'error'
  // Unsupported by Oxlint yet: jsonc/no-octal-escape.
  //   'jsonc/no-octal-escape': 'error'
  // Unsupported by Oxlint yet: jsonc/no-octal-numeric-literals.
  //   'jsonc/no-octal-numeric-literals': 'error'
  // Unsupported by Oxlint yet: jsonc/no-parenthesized.
  //   'jsonc/no-parenthesized': 'error'
  // Unsupported by Oxlint yet: jsonc/no-plus-sign.
  //   'jsonc/no-plus-sign': 'error'
  // Unsupported by Oxlint yet: jsonc/no-regexp-literals.
  //   'jsonc/no-regexp-literals': 'error'
  // Unsupported by Oxlint yet: jsonc/no-sparse-arrays.
  //   'jsonc/no-sparse-arrays': 'error'
  // Unsupported by Oxlint yet: jsonc/no-template-literals.
  //   'jsonc/no-template-literals': 'error'
  // Unsupported by Oxlint yet: jsonc/no-undefined-value.
  //   'jsonc/no-undefined-value': 'error'
  // Unsupported by Oxlint yet: jsonc/no-unicode-codepoint-escapes.
  //   'jsonc/no-unicode-codepoint-escapes': 'error'
  // Unsupported by Oxlint yet: jsonc/no-useless-escape.
  //   'jsonc/no-useless-escape': 'error'
  // Unsupported by Oxlint yet: jsonc/space-unary-ops.
  //   'jsonc/space-unary-ops': 'error'
  // Unsupported by Oxlint yet: jsonc/valid-json-number.
  //   'jsonc/valid-json-number': 'error'
  // Unsupported by Oxlint yet: jsonc/vue-custom-block/no-parsing-error.
  //   'jsonc/vue-custom-block/no-parsing-error': 'error'
  // Unsupported by Oxlint yet: jsonc/array-bracket-newline.
  //   // stylistic rules
  //   'jsonc/array-bracket-newline': 'off'
  // Unsupported by Oxlint yet: jsonc/array-bracket-spacing.
  //   'jsonc/array-bracket-spacing': 'off'
  // Unsupported by Oxlint yet: jsonc/array-element-newline.
  //   'jsonc/array-element-newline': 'off'
  // Unsupported by Oxlint yet: jsonc/comma-dangle.
  //   'jsonc/comma-dangle': 'off'
  // Unsupported by Oxlint yet: jsonc/comma-style.
  //   'jsonc/comma-style': 'off'
  // Unsupported by Oxlint yet: jsonc/indent.
  //   'jsonc/indent': 'off'
  // Unsupported by Oxlint yet: jsonc/key-name-casing.
  //   'jsonc/key-name-casing': 'off'
  // Unsupported by Oxlint yet: jsonc/key-spacing.
  //   'jsonc/key-spacing': 'off'
  // Unsupported by Oxlint yet: jsonc/no-comments.
  //   'jsonc/no-comments': 'off'
  // Unsupported by Oxlint yet: jsonc/no-irregular-whitespace.
  //   'jsonc/no-irregular-whitespace': 'off'
  // Unsupported by Oxlint yet: jsonc/object-curly-newline.
  //   'jsonc/object-curly-newline': 'off'
  // Unsupported by Oxlint yet: jsonc/object-curly-spacing.
  //   'jsonc/object-curly-spacing': 'off'
  // Unsupported by Oxlint yet: jsonc/object-property-newline.
  //   'jsonc/object-property-newline': 'off'
  // Unsupported by Oxlint yet: jsonc/sort-array-values.
  //   'jsonc/sort-array-values': 'off'
  // Unsupported by Oxlint yet: jsonc/sort-keys.
  //   'jsonc/sort-keys': 'off'
  // Unsupported by Oxlint yet: jsonc/quote-props.
  //   'jsonc/quote-props': 'off'
  // Unsupported by Oxlint yet: jsonc/quotes.
  //   'jsonc/quotes': 'off'
  // Unsupported by Oxlint yet: jsonc/auto.
  //   // other rules
  //   'jsonc/auto': 'off'
} satisfies Rules;
