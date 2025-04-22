import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import type {
  EslintIgnoresOptions,
  EslintImportsOptions,
  EslintJavascriptOptions,
  EslintMarkdownOptions,
  EslintReactOptions,
  EslintTypescriptOptions,
  EslintVueOptions,
} from './configs';
import {
  ignores as ignoresConfig,
  imports as importsConfig,
  javascript as javascriptConfig,
  markdown as markdownConfig,
  prettier as prettierConfig,
  react as reactConfig,
  typescript as typescriptConfig,
  vue as vueConfig,
} from './configs';

export interface EslintOptions {
  ignores?: EslintIgnoresOptions;
  imports?: EslintImportsOptions;
  javascript?: EslintJavascriptOptions;
  markdown?: EslintMarkdownOptions | boolean;
  react?: EslintReactOptions | boolean;
  typescript?: EslintTypescriptOptions;
  vue?: EslintVueOptions | boolean;
}

export const meteorlxy = async (
  {
    ignores = {},
    imports = {},
    javascript = {},
    markdown = true,
    react = false,
    typescript = {},
    vue = false,
  }: EslintOptions = {},
  ...customConfigs: FlatConfig.Config[]
): Promise<FlatConfig.Config[]> => [
  // global ignores
  ...ignoresConfig(ignores),

  // javascript core rules
  ...javascriptConfig(javascript),

  // imports rules
  ...importsConfig(imports),

  // react rules - should be placed before typescript rules
  ...(react ? await reactConfig(react === true ? {} : react) : []),

  // typescript rules
  ...typescriptConfig(typescript),

  // vue rules - should be placed after typescript rules
  ...(vue ? await vueConfig(vue === true ? {} : vue) : []),

  // markdown rules
  ...(markdown ? await markdownConfig(markdown === true ? {} : markdown) : []),

  // allow custom configs
  ...customConfigs,

  // prettier rules - should be the last one
  ...prettierConfig(),
];
