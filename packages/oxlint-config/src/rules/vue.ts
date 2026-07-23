import type { Rules } from '../types';

/**
 * Vue rules migrated to Oxlint.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const vueRules = {
  // Unsupported by Oxlint yet: vue/block-lang.
  //   'vue/block-lang': [
  //     'off',
  //     {
  //       script: { lang: 'ts' },
  //       style: { allowNoLang: true },
  //     },
  //   ]
  // Unsupported by Oxlint yet: vue/block-order.
  //   'vue/block-order': [
  //     'error',
  //     {
  //       order: ['script', 'template', 'style'],
  //     },
  //   ]
  // Unsupported by Oxlint yet: vue/camelcase.
  //   'vue/camelcase': 'off'
  // Unsupported by Oxlint yet: vue/component-api-style.
  //  // builtin extension - checked by typescript
  //   'vue/component-api-style': ['error', ['script-setup', 'composition']]
  // Unsupported by Oxlint yet: vue/component-name-in-template-casing.
  //   'vue/component-name-in-template-casing': [
  //     'error',
  //     'PascalCase',
  //     {
  //       registeredComponentsOnly: false,
  //       ignores: [],
  //     },
  //   ]
  // Unsupported by Oxlint yet: vue/component-options-name-casing.
  //   'vue/component-options-name-casing': ['error', 'PascalCase']
  // Unsupported by Oxlint yet: vue/custom-event-name-casing.
  //   'vue/custom-event-name-casing': [
  //     'error',
  //     'camelCase',
  //     {
  //       ignores: [],
  //     },
  //   ]
  'vue/define-emits-declaration': ['error', 'type-literal'],
  // Unsupported by Oxlint yet: vue/define-macros-order.
  //   'vue/define-macros-order': [
  //     'error',
  //     {
  //       order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
  //     },
  //   ]
  'vue/define-props-declaration': ['error', 'type-based'],
  'vue/define-props-destructuring': [
    'error',
    {
      destructure: 'always',
    },
  ],
  // Unsupported by Oxlint yet: vue/dot-notation.
  //   'vue/dot-notation': 'off'
  // Unsupported by Oxlint yet: vue/enforce-style-attribute.
  //  // builtin extension - checked by typescript?
  //   'vue/enforce-style-attribute': [
  //     'off',
  //     { allow: ['scoped', 'module', 'plain'] },
  //   ]
  // Unsupported by Oxlint yet: vue/eqeqeq.
  //   'vue/eqeqeq': builtinRules.eqeqeq
  // Unsupported by Oxlint yet: vue/html-button-has-type.
  //  // builtin extension
  //   'vue/html-button-has-type': [
  //     'error',
  //     {
  //       button: true,
  //       submit: true,
  //       reset: true,
  //     },
  //   ]
  // Unsupported by Oxlint yet: vue/match-component-file-name.
  //   'vue/match-component-file-name': [
  //     'error',
  //     {
  //       extensions: ['js', 'jsx', 'mjs', 'ts', 'tsx', 'vue'],
  //       shouldMatchCase: false,
  //     },
  //   ]
  // Unsupported by Oxlint yet: vue/match-component-import-name.
  //   'vue/match-component-import-name': 'error'
  // Unsupported by Oxlint yet: vue/max-lines-per-block.
  //   'vue/max-lines-per-block': [
  //     'off',
  //     {
  //       script: 0,
  //       template: 0,
  //       style: 0,
  //       skipBlankLines: true,
  //     },
  //   ]
  'vue/max-props': ['off', { maxProps: 1 }],
  // Unsupported by Oxlint yet: vue/max-template-depth.
  //   'vue/max-template-depth': ['off', { maxDepth: 3 }]
  'vue/next-tick-style': ['error', 'promise'],
  // Unsupported by Oxlint yet: vue/no-bare-strings-in-template.
  //   'vue/no-bare-strings-in-template': ['off']
  // Unsupported by Oxlint yet: vue/no-boolean-default.
  //   'vue/no-boolean-default': ['off', 'no-default']
  // Unsupported by Oxlint yet: vue/no-console.
  //   'vue/no-console': builtinRules['no-console']
  // Unsupported by Oxlint yet: vue/no-constant-condition.
  //  // builtin extension
  //   'vue/no-constant-condition': builtinRules['no-constant-condition']
  // Unsupported by Oxlint yet: vue/no-custom-modifiers-on-v-model.
  //  // builtin extension
  //   'vue/no-custom-modifiers-on-v-model': 'off'
  // vue2?
  'vue/no-deprecated-delete-set': 'error',
  'vue/no-deprecated-model-definition': 'error',
  // Unsupported by Oxlint yet: vue/no-duplicate-attr-inheritance.
  //   'vue/no-duplicate-attr-inheritance': 'error'
  // Unsupported by Oxlint yet: vue/no-duplicate-class-names.
  //   'vue/no-duplicate-class-names': 'error'
  // Unsupported by Oxlint yet: vue/no-empty-component-block.
  //   'vue/no-empty-component-block': 'warn'
  // Unsupported by Oxlint yet: vue/no-empty-pattern.
  //   'vue/no-empty-pattern': builtinRules['no-empty-pattern']
  // Unsupported by Oxlint yet: vue/no-implicit-coercion.
  //  // builtin extension
  //   'vue/no-implicit-coercion': builtinRules['no-implicit-coercion']
  // builtin extension
  'vue/no-import-compiler-macros': 'error',
  // Unsupported by Oxlint yet: vue/no-irregular-whitespace.
  //   'vue/no-irregular-whitespace': builtinRules['no-irregular-whitespace']
  // Unsupported by Oxlint yet: vue/no-literals-in-template.
  //  // builtin extension
  //   'vue/no-literals-in-template': 'error'
  // Unsupported by Oxlint yet: vue/no-loss-of-precision.
  //   'vue/no-loss-of-precision': 'off'
  // Unsupported by Oxlint yet: vue/no-multiple-objects-in-class.
  //  // builtin extension - checked by typescript?
  //   'vue/no-multiple-objects-in-class': 'error'
  // Unsupported by Oxlint yet: vue/no-multiple-template-root.
  //   'vue/no-multiple-template-root': 'off'
  // Unsupported by Oxlint yet: vue/no-negated-condition.
  //  // vue2 - better to have in vue3, too?
  //   'vue/no-negated-condition': builtinRules['no-negated-condition']
  // Unsupported by Oxlint yet: vue/no-negated-v-if-condition.
  //  // builtin extension
  //   'vue/no-negated-v-if-condition': 'off'
  // Unsupported by Oxlint yet: vue/no-potential-component-option-typo.
  //   'vue/no-potential-component-option-typo': 'off'
  // Unsupported by Oxlint yet: vue/no-ref-object-reactivity-loss.
  //  // options api
  //   'vue/no-ref-object-reactivity-loss': 'warn'
  'vue/no-required-prop-with-default': 'warn',
  // Unsupported by Oxlint yet: vue/no-restricted-block.
  //   'vue/no-restricted-block': ['off']
  // Unsupported by Oxlint yet: vue/no-restricted-call-after-await.
  //   'vue/no-restricted-call-after-await': ['off']
  // Unsupported by Oxlint yet: vue/no-restricted-class.
  //   'vue/no-restricted-class': ['off']
  // Unsupported by Oxlint yet: vue/no-restricted-component-names.
  //   'vue/no-restricted-component-names': ['off']
  // Unsupported by Oxlint yet: vue/no-restricted-component-options.
  //   'vue/no-restricted-component-options': ['off']
  // Unsupported by Oxlint yet: vue/no-restricted-custom-event.
  //   'vue/no-restricted-custom-event': ['off']
  // Unsupported by Oxlint yet: vue/no-restricted-html-elements.
  //   'vue/no-restricted-html-elements': ['off']
  // Unsupported by Oxlint yet: vue/no-restricted-props.
  //   'vue/no-restricted-props': ['off']
  // Unsupported by Oxlint yet: vue/no-restricted-static-attribute.
  //   'vue/no-restricted-static-attribute': ['off']
  // Unsupported by Oxlint yet: vue/no-restricted-syntax.
  //   'vue/no-restricted-syntax': builtinRules['no-restricted-syntax']
  // Unsupported by Oxlint yet: vue/no-restricted-v-bind.
  //  // builtin extension
  //   'vue/no-restricted-v-bind': ['off']
  // Unsupported by Oxlint yet: vue/no-restricted-v-on.
  //   'vue/no-restricted-v-on': ['off']
  // Unsupported by Oxlint yet: vue/no-root-v-if.
  //   'vue/no-root-v-if': 'error'
  // Unsupported by Oxlint yet: vue/no-setup-props-reactivity-loss.
  //   'vue/no-setup-props-reactivity-loss': 'error'
  // Unsupported by Oxlint yet: vue/no-sparse-arrays.
  //   'vue/no-sparse-arrays': builtinRules['no-sparse-arrays']
  // Unsupported by Oxlint yet: vue/no-static-inline-styles.
  //  // builtin extension
  //   'vue/no-static-inline-styles': [
  //     'error',
  //     {
  //       allowBinding: false,
  //     },
  //   ]
  // Unsupported by Oxlint yet: vue/no-template-target-blank.
  //   'vue/no-template-target-blank': [
  //     'error',
  //     {
  //       allowReferrer: false,
  //       enforceDynamicLinks: 'always',
  //     },
  //   ]
  'vue/no-this-in-before-route-enter': 'off',
  // Unsupported by Oxlint yet: vue/no-undef-components.
  //  // options api & vue-router
  //   'vue/no-undef-components': 'off'
  // Unsupported by Oxlint yet: vue/no-undef-directives.
  //   'vue/no-undef-directives': [
  //     'error',
  //     {
  //       ignore: [],
  //     },
  //   ]
  // Unsupported by Oxlint yet: vue/no-undef-properties.
  //   'vue/no-undef-properties': 'error'
  // Unsupported by Oxlint yet: vue/no-unsupported-features.
  //   'vue/no-unsupported-features': 'off'
  // Unsupported by Oxlint yet: vue/no-unused-emit-declarations.
  //   'vue/no-unused-emit-declarations': 'error'
  // Unsupported by Oxlint yet: vue/no-unused-properties.
  //   'vue/no-unused-properties': [
  //     'error',
  //     {
  //       groups: ['props'],
  //       deepData: false,
  //       ignorePublicMembers: false,
  //       unreferencedOptions: [],
  //     },
  //   ]
  // Unsupported by Oxlint yet: vue/no-unused-refs.
  //   'vue/no-unused-refs': 'error'
  // Unsupported by Oxlint yet: vue/no-use-v-else-with-v-for.
  //   'vue/no-use-v-else-with-v-for': 'error'
  // Unsupported by Oxlint yet: vue/no-use-v-if-with-v-for.
  //   'vue/no-use-v-if-with-v-for': 'error'
  // Unsupported by Oxlint yet: vue/no-useless-concat.
  //   'vue/no-useless-concat': builtinRules['no-useless-concat']
  // Unsupported by Oxlint yet: vue/no-useless-mustaches.
  //  // builtin extension
  //   'vue/no-useless-mustaches': [
  //     'off',
  //     {
  //       ignoreIncludesComment: false,
  //       ignoreStringEscape: true,
  //     },
  //   ]
  // Unsupported by Oxlint yet: vue/no-useless-v-bind.
  //   'vue/no-useless-v-bind': 'error'
  // Unsupported by Oxlint yet: vue/no-v-for-template-key.
  //   'vue/no-v-for-template-key': 'off'
  // Unsupported by Oxlint yet: vue/no-v-for-template-key-on-child.
  //  // vue2
  //   'vue/no-v-for-template-key-on-child': 'error'
  // Unsupported by Oxlint yet: vue/no-v-model-argument.
  //   'vue/no-v-model-argument': 'off'
  // Unsupported by Oxlint yet: vue/no-v-text.
  //  // vue2
  //   'vue/no-v-text': 'off'
  // Unsupported by Oxlint yet: vue/object-shorthand.
  //   'vue/object-shorthand': builtinRules['object-shorthand']
  // Unsupported by Oxlint yet: vue/prefer-define-options.
  //  // builtin extension
  //   'vue/prefer-define-options': 'error'
  // Unsupported by Oxlint yet: vue/prefer-prop-type-boolean-first.
  //   'vue/prefer-prop-type-boolean-first': 'error'
  // Unsupported by Oxlint yet: vue/prefer-separate-static-class.
  //   'vue/prefer-separate-static-class': 'error'
  // Unsupported by Oxlint yet: vue/prefer-single-event-payload.
  //   'vue/prefer-single-event-payload': 'warn'
  // Unsupported by Oxlint yet: vue/prefer-template.
  //   'vue/prefer-template': builtinRules['prefer-template']
  // Unsupported by Oxlint yet: vue/prefer-true-attribute-shorthand.
  //  // builtin extension
  //   'vue/prefer-true-attribute-shorthand': 'off'
  // Unsupported by Oxlint yet: vue/prefer-use-template-ref.
  //   'vue/prefer-use-template-ref': 'error'
  // Unsupported by Oxlint yet: vue/prefer-v-model.
  //   'vue/prefer-v-model': 'warn'
  'vue/require-default-export': 'warn',
  'vue/require-direct-export': [
    'error',
    {
      disallowFunctionalComponentFunction: false,
    },
  ],
  // Unsupported by Oxlint yet: vue/require-explicit-slots.
  //   'vue/require-explicit-slots': 'error'
  // Unsupported by Oxlint yet: vue/require-expose.
  //   'vue/require-expose': 'off'
  // Unsupported by Oxlint yet: vue/require-emit-validator.
  //   'vue/require-emit-validator': 'off'
  // Unsupported by Oxlint yet: vue/require-macro-variable-name.
  //  // enable?
  //   'vue/require-macro-variable-name': [
  //     'error',
  //     {
  //       defineProps: 'props',
  //       defineEmits: 'emits',
  //       defineSlots: 'slots',
  //       useSlots: 'slots',
  //       useAttrs: 'attrs',
  //     },
  //   ]
  // Unsupported by Oxlint yet: vue/require-name-property.
  //   'vue/require-name-property': 'error'
  // Unsupported by Oxlint yet: vue/require-prop-comment.
  //   'vue/require-prop-comment': [
  //     'warn',
  //     {
  //       type: 'JSDoc',
  //     },
  //   ]
  // Unsupported by Oxlint yet: vue/require-typed-object-prop.
  //   'vue/require-typed-object-prop': 'error'
  'vue/require-typed-ref': 'error',
  // Unsupported by Oxlint yet: vue/restricted-component-names.
  //   'vue/restricted-component-names': [
  //     'off',
  //     {
  //       allow: [],
  //     },
  //   ]
  // Unsupported by Oxlint yet: vue/sort-keys.
  //   'vue/sort-keys': builtinRules['sort-keys']
  // Unsupported by Oxlint yet: vue/slot-name-casing.
  //  // builtin extension
  //   'vue/slot-name-casing': ['warn', 'kebab-case']
  // Unsupported by Oxlint yet: vue/static-class-names-order.
  //   'vue/static-class-names-order': 'error'
  // Unsupported by Oxlint yet: vue/v-if-else-key.
  //   'vue/v-if-else-key': 'off'
  // Unsupported by Oxlint yet: vue/v-on-handler-style.
  //  // vue2
  //   'vue/v-on-handler-style': 'off'
  'vue/valid-define-emits': 'error',
  'vue/valid-define-options': 'error',
  'vue/valid-define-props': 'error',
  // Unsupported by Oxlint yet: vue/valid-model-definition.
  //   'vue/valid-model-definition': 'off'
  // Unsupported by Oxlint yet: vue/valid-v-bind-sync.
  //  // vue2
  //   'vue/valid-v-bind-sync': 'off'
} satisfies Rules;
