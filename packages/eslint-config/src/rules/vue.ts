import type { Config } from 'eslint/config';
import { builtinRules } from './builtin';

/**
 * Vue rules
 *
 * @see https://eslint.vuejs.org/rules/
 */
export const vueRules = {
  'vue/block-lang': [
    'off',
    {
      script: { lang: 'ts' },
      style: { allowNoLang: true },
    },
  ],
  'vue/block-order': [
    'error',
    {
      order: ['script', 'template', 'style'],
    },
  ],
  'vue/camelcase': 'off', // builtin extension - checked by typescript
  'vue/component-api-style': ['error', ['script-setup', 'composition']],
  'vue/component-name-in-template-casing': [
    'error',
    'PascalCase',
    {
      registeredComponentsOnly: false,
      ignores: [],
    },
  ],
  'vue/component-options-name-casing': ['error', 'PascalCase'],
  'vue/custom-event-name-casing': [
    'error',
    'camelCase',
    {
      ignores: [],
    },
  ],
  'vue/define-emits-declaration': ['error', 'type-literal'],
  'vue/define-macros-order': [
    'error',
    {
      order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
    },
  ],
  'vue/define-props-declaration': ['error', 'type-based'],
  'vue/define-props-destructuring': [
    'error',
    {
      destructure: 'always',
    },
  ],
  'vue/dot-notation': 'off', // builtin extension - checked by typescript?
  'vue/enforce-style-attribute': [
    'off',
    { allow: ['scoped', 'module', 'plain'] },
  ],
  'vue/eqeqeq': builtinRules.eqeqeq, // builtin extension
  'vue/html-button-has-type': [
    'error',
    {
      button: true,
      submit: true,
      reset: true,
    },
  ],
  'vue/match-component-file-name': [
    'error',
    {
      extensions: ['js', 'jsx', 'mjs', 'ts', 'tsx', 'vue'],
      shouldMatchCase: false,
    },
  ],
  'vue/match-component-import-name': 'error',
  'vue/max-lines-per-block': [
    'off',
    {
      script: 0,
      template: 0,
      style: 0,
      skipBlankLines: true,
    },
  ],
  'vue/max-props': ['off', { maxProps: 1 }],
  'vue/max-template-depth': ['off', { maxDepth: 3 }],
  'vue/next-tick-style': ['error', 'promise'],
  'vue/no-bare-strings-in-template': ['off'],
  'vue/no-boolean-default': ['off', 'no-default'],
  'vue/no-console': builtinRules['no-console'], // builtin extension
  'vue/no-constant-condition': builtinRules['no-constant-condition'], // builtin extension
  'vue/no-custom-modifiers-on-v-model': 'off', // vue2?
  'vue/no-deprecated-delete-set': 'error',
  'vue/no-deprecated-model-definition': 'error',
  'vue/no-duplicate-attr-inheritance': 'error',
  'vue/no-duplicate-class-names': 'error',
  'vue/no-empty-component-block': 'warn',
  'vue/no-empty-pattern': builtinRules['no-empty-pattern'], // builtin extension
  'vue/no-implicit-coercion': builtinRules['no-implicit-coercion'], // builtin extension
  'vue/no-import-compiler-macros': 'error',
  'vue/no-irregular-whitespace': builtinRules['no-irregular-whitespace'], // builtin extension
  'vue/no-literals-in-template': 'error',
  'vue/no-loss-of-precision': 'off', // builtin extension - checked by typescript?
  'vue/no-multiple-objects-in-class': 'error',
  'vue/no-multiple-template-root': 'off', // vue2 - better to have in vue3, too?
  'vue/no-negated-condition': builtinRules['no-negated-condition'], // builtin extension
  'vue/no-negated-v-if-condition': 'off',
  'vue/no-potential-component-option-typo': 'off', // options api
  'vue/no-ref-object-reactivity-loss': 'warn',
  'vue/no-required-prop-with-default': ['warn', { autofix: false }],
  'vue/no-restricted-block': ['off'],
  'vue/no-restricted-call-after-await': ['off'],
  'vue/no-restricted-class': ['off'],
  'vue/no-restricted-component-names': ['off'],
  'vue/no-restricted-component-options': ['off'],
  'vue/no-restricted-custom-event': ['off'],
  'vue/no-restricted-html-elements': ['off'],
  'vue/no-restricted-props': ['off'],
  'vue/no-restricted-static-attribute': ['off'],
  'vue/no-restricted-syntax': builtinRules['no-restricted-syntax'], // builtin extension
  'vue/no-restricted-v-bind': ['off'],
  'vue/no-restricted-v-on': ['off'],
  'vue/no-root-v-if': 'error',
  'vue/no-setup-props-reactivity-loss': 'error',
  'vue/no-sparse-arrays': builtinRules['no-sparse-arrays'], // builtin extension
  'vue/no-static-inline-styles': [
    'error',
    {
      allowBinding: false,
    },
  ],
  'vue/no-template-target-blank': [
    'error',
    {
      allowReferrer: false,
      enforceDynamicLinks: 'always',
    },
  ],
  'vue/no-this-in-before-route-enter': 'off', // options api & vue-router
  'vue/no-undef-components': 'off',
  'vue/no-undef-directives': [
    'error',
    {
      ignore: [],
    },
  ],
  'vue/no-undef-properties': 'error',
  'vue/no-unsupported-features': 'off',
  'vue/no-unused-emit-declarations': 'error',
  'vue/no-unused-properties': [
    'error',
    {
      groups: ['props'],
      deepData: false,
      ignorePublicMembers: false,
      unreferencedOptions: [],
    },
  ],
  'vue/no-unused-refs': 'error',
  'vue/no-use-v-else-with-v-for': 'error',
  'vue/no-use-v-if-with-v-for': 'error',
  'vue/no-useless-concat': builtinRules['no-useless-concat'], // builtin extension
  'vue/no-useless-mustaches': [
    'off',
    {
      ignoreIncludesComment: false,
      ignoreStringEscape: true,
    },
  ],
  'vue/no-useless-v-bind': 'error',
  'vue/no-v-for-template-key': 'off', // vue2
  'vue/no-v-for-template-key-on-child': 'error',
  'vue/no-v-model-argument': 'off', // vue2
  'vue/no-v-text': 'off',
  'vue/object-shorthand': builtinRules['object-shorthand'], // builtin extension
  'vue/prefer-define-options': 'error',
  'vue/prefer-prop-type-boolean-first': 'error',
  'vue/prefer-separate-static-class': 'error',
  'vue/prefer-template': builtinRules['prefer-template'], // builtin extension
  'vue/prefer-true-attribute-shorthand': 'off',
  'vue/prefer-use-template-ref': 'error',
  'vue/require-default-export': 'warn',
  'vue/require-direct-export': [
    'error',
    {
      disallowFunctionalComponentFunction: false,
    },
  ],
  'vue/require-explicit-slots': 'error',
  'vue/require-expose': 'off',
  'vue/require-emit-validator': 'off', // enable?
  'vue/require-macro-variable-name': [
    'error',
    {
      defineProps: 'props',
      defineEmits: 'emits',
      defineSlots: 'slots',
      useSlots: 'slots',
      useAttrs: 'attrs',
    },
  ],
  'vue/require-name-property': 'error',
  'vue/require-prop-comment': [
    'warn',
    {
      type: 'JSDoc',
    },
  ],
  'vue/require-typed-object-prop': 'error',
  'vue/require-typed-ref': 'error',
  'vue/restricted-component-names': [
    'off',
    {
      allow: [],
    },
  ],
  'vue/sort-keys': builtinRules['sort-keys'], // builtin extension
  'vue/slot-name-casing': ['warn', 'kebab-case'],
  'vue/static-class-names-order': 'error',
  'vue/v-if-else-key': 'off', // vue2
  'vue/v-on-handler-style': 'off',
  'vue/valid-define-emits': 'error',
  'vue/valid-define-options': 'error',
  'vue/valid-define-props': 'error',
  'vue/valid-model-definition': 'off', // vue2
  'vue/valid-v-bind-sync': 'off', // vue2
} satisfies Config['rules'];
