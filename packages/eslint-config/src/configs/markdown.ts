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
      name: 'meteorlxy/markdown/plugins',
      plugins: {
        markdown: markdownPlugin,
      },
    },
    {
      name: 'meteorlxy/markdown/processor',
      files,
      ignores: ['**/*.md/*.md'],
      processor: markdownPlugin.processors!.markdown,
    },
    {
      name: 'meteorlxy/markdown/rules',
      files: ['**/*.md/**'],
      languageOptions: {
        parserOptions: {
          ecmaFeatures: {
            impliedStrict: true,
          },
          // disable type-checking rules
          program: null, // used in typescript-eslint's disable-type-checking config, might be a typo program -> programs
          programs: null,
          project: false,
          projectService: false,
        },
      },
      rules: {
        ...markdownShimRules,
        ...overrides,
      },
    },
  ];
};
