import type { DummyRuleMap } from 'oxlint';

/**
 * vue rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const vueRules = {
  'vue/component-definition-name-casing': 'off',
  'vue/define-emits-declaration': ['error', 'type-literal'],
  'vue/define-props-declaration': ['error', 'type-based'],
  'vue/define-props-destructuring': [
    'error',
    {
      destructure: 'always',
    },
  ],
  'vue/max-props': [
    'off',
    {
      maxProps: 1,
    },
  ],
  'vue/next-tick-style': ['error', 'promise'],
  'vue/no-arrow-functions-in-watch': 'warn',
  'vue/no-async-in-computed-properties': [
    'warn',
    {
      ignoredObjectNames: [],
    },
  ],
  'vue/no-computed-properties-in-data': 'warn',
  'vue/no-deprecated-data-object-declaration': 'warn',
  'vue/no-deprecated-delete-set': 'error',
  'vue/no-deprecated-destroyed-lifecycle': 'warn',
  'vue/no-deprecated-events-api': 'warn',
  'vue/no-deprecated-model-definition': [
    'error',
    {
      allowVue3Compat: false,
    },
  ],
  'vue/no-deprecated-props-default-this': 'warn',
  'vue/no-deprecated-vue-config-keycodes': 'warn',
  'vue/no-dupe-keys': [
    'warn',
    {
      groups: [],
    },
  ],
  'vue/no-export-in-script-setup': 'warn',
  'vue/no-expose-after-await': 'warn',
  'vue/no-import-compiler-macros': 'error',
  'vue/no-lifecycle-after-await': 'warn',
  'vue/no-multiple-slot-args': 'off',
  'vue/no-required-prop-with-default': 'warn',
  'vue/no-reserved-component-names': [
    'warn',
    {
      disallowVue3BuiltInComponents: false,
      disallowVueBuiltInComponents: false,
      htmlElementCaseSensitive: false,
    },
  ],
  'vue/no-reserved-keys': [
    'warn',
    {
      groups: [],
      reserved: [],
    },
  ],
  'vue/no-reserved-props': [
    'warn',
    {
      vueVersion: 3,
    },
  ],
  'vue/no-shared-component-data': 'warn',
  'vue/no-side-effects-in-computed-properties': 'warn',
  'vue/no-this-in-before-route-enter': 'warn',
  'vue/no-watch-after-await': 'warn',
  'vue/prefer-import-from-vue': 'warn',
  'vue/prop-name-casing': 'off',
  'vue/require-default-export': 'warn',
  'vue/require-default-prop': 'off',
  'vue/require-direct-export': [
    'error',
    {
      disallowFunctionalComponentFunction: false,
    },
  ],
  'vue/require-prop-type-constructor': 'warn',
  'vue/require-prop-types': 'off',
  'vue/require-render-return': 'warn',
  'vue/require-slots-as-functions': 'warn',
  'vue/require-typed-ref': 'error',
  'vue/return-in-computed-property': [
    'warn',
    {
      treatUndefinedAsUnspecified: true,
    },
  ],
  'vue/return-in-emits-validator': 'warn',
  'vue/valid-define-emits': 'error',
  'vue/valid-define-options': 'error',
  'vue/valid-define-props': 'error',
  'vue/valid-next-tick': 'warn',
} satisfies DummyRuleMap;
