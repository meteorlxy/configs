import tsParser from '@typescript-eslint/parser';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import { vueRules } from '../rules';
import { interopDefault } from '../utils';

export interface EslintVueOptions {
  files?: FlatConfig.Config['files'];
  overrides?: FlatConfig.Config['rules'];
}

/**
 * Vue configuration for eslint.
 */
export const vue = async ({
  files = ['**/*.vue'],
  overrides,
}: EslintVueOptions = {}): Promise<FlatConfig.Config[]> => {
  // TODO: ensure deps
  const [vuePlugin, vueParser] = await Promise.all([
    interopDefault(import('eslint-plugin-vue')),
    interopDefault(import('vue-eslint-parser')),
  ]);

  return [
    {
      name: 'meteorlxy/vue/plugins',
      plugins: {
        vue: vuePlugin,
      },
    },
    {
      name: 'meteorlxy/vue/rules',
      files,
      languageOptions: {
        ecmaVersion: 2022,
        parser: vueParser,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
          extraFileExtensions: ['.vue'],
          parser: tsParser,
          sourceType: 'module',
        },
      },
      processor: vuePlugin.processors!['.vue'],
      rules: {
        ...vuePlugin.configs!.base.rules,
        ...vuePlugin.configs!['vue3-essential'].rules,
        ...vuePlugin.configs!['vue3-strongly-recommended'].rules,
        ...vuePlugin.configs!['vue3-recommended'].rules,
        ...vuePlugin.configs!['no-layout-rules'].rules,
        ...vueRules,
        ...overrides,
      },
    },
  ];
};
