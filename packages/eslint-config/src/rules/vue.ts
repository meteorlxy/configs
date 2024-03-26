import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const vueRules = {
  'vue/block-order': [
    'error',
    {
      order: ['script', 'template', 'style'],
    },
  ],
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
  'vue/define-macros-order': [
    'error',
    {
      order: ['defineOptions', 'defineProps', 'defineEmits', 'defineSlots'],
    },
  ],
  'vue/match-component-file-name': [
    'error',
    {
      extensions: ['js', 'jsx', 'mjs', 'ts', 'tsx', 'vue'],
      shouldMatchCase: false,
    },
  ],
  'vue/no-restricted-syntax': [
    'error',
    'DebuggerStatement',
    'LabeledStatement',
    'WithStatement',
  ],
  'vue/no-sparse-arrays': 'error',
  'vue/no-unused-refs': 'error',
  'vue/no-useless-v-bind': 'error',
} satisfies FlatConfig.Rules;
