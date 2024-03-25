import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import { markdownShimRules } from '../rules';
import { interopDefault } from '../utils';

export interface EslintMarkdownOptions {
  files?: FlatConfig.Config['files'];
  overrides?: FlatConfig.Config['rules'];
}

/**
 * Markdown configuration for eslint.
 */
export const markdown = async ({
  files = ['**/*.md'],
  overrides,
}: EslintMarkdownOptions = {}): Promise<FlatConfig.Config[]> => {
  const markdownPlugin = await interopDefault(import('eslint-plugin-markdown'));

  return [
    {
      plugins: {
        markdown: markdownPlugin,
      },
    },
    {
      files,
      ignores: ['**/*.md/*.md'],
      processor: markdownPlugin.processors!.markdown,
    },
    {
      files: ['**/*.md/**'],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true,
          },
        },
      },
      rules: {
        ...markdownShimRules,
        ...overrides,
      },
    },
  ];
};
