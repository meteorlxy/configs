import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const vueRules = {
  'vue/block-order': [
    'error',
    {
      order: ['script', 'template', 'style'],
    },
  ],
  'vue/camelcase': 'off', // typescript
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
  'vue/component-tags-order': 'off', // deprecated
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
  'vue/dot-notation': 'off', // typescript
  'vue/eqeqeq': [
    'error',
    'always',
    {
      null: 'ignore',
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
  'vue/no-invalid-model-keys': 'off', // deprecated
  'vue/no-ref-object-destructure': 'off', // deprecated
  'vue/no-restricted-syntax': [
    'error',
    'DebuggerStatement',
    'LabeledStatement',
    'WithStatement',
  ],
  'vue/no-setup-props-destructure': 'off', // deprecated
  'vue/no-sparse-arrays': 'error',
  'vue/no-unused-refs': 'error',
  'vue/no-useless-v-bind': 'error',
  'vue/script-setup-uses-vars': 'off', // deprecated
  'vue/v-on-function-call': 'off', // deprecated
} satisfies FlatConfig.Rules;
