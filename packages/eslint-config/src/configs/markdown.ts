import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import { mergeProcessors, processorPassThrough } from 'eslint-merge-processors';
import { markdownRules, markdownShimRules } from '../rules';
import { interopDefault } from '../utils';

export interface EslintMarkdownOptions {
  files?: FlatConfig.Config['files'];
  overrides?: FlatConfig.Config['rules'];
  overridesCodeBlocks?: FlatConfig.Config['rules'];
}

/**
 * Markdown configuration for eslint.
 */
export const markdown = async ({
  files = ['**/*.md'],
  overrides,
  overridesCodeBlocks,
}: EslintMarkdownOptions = {}): Promise<FlatConfig.Config[]> => {
  const markdownPlugin = await interopDefault(import('@eslint/markdown'));

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
      processor: mergeProcessors([
        markdownPlugin.processors.markdown,
        processorPassThrough,
      ]),
    },
    {
      name: 'meteorlxy/markdown/rules',
      files,
      language: 'markdown/commonmark',
      rules: {
        ...markdownRules,
        ...overrides,
      },
    },
    {
      name: 'meteorlxy/markdown/rules-code-blocks',
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
        ...overridesCodeBlocks,
      },
    },
  ];
};
