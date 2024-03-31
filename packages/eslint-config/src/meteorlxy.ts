import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import type {
  EslintIgnoresOptions,
  EslintJavascriptOptions,
  EslintMarkdownOptions,
  EslintReactOptions,
  EslintTypescriptOptions,
  EslintVueOptions,
} from './configs';
import {
  ignores,
  javascript,
  markdown,
  prettier,
  react,
  typescript,
  vue,
} from './configs';

export interface EslintOptions {
  ignores?: EslintIgnoresOptions;
  javascript?: EslintJavascriptOptions;
  markdown?: EslintMarkdownOptions | boolean;
  react?: EslintReactOptions | boolean;
  typescript?: EslintTypescriptOptions;
  vue?: EslintVueOptions | boolean;
}

export const meteorlxy = async (
  options: EslintOptions,
  ...customConfigs: FlatConfig.Config[]
): Promise<FlatConfig.Config[]> => [
  // global ignores
  ...ignores(options.ignores),

  // javascript core rules
  ...javascript(options.javascript),

  // react rules - should be placed before typescript rules
  ...(options.react
    ? await react(options.react === true ? {} : options.react)
    : []),

  // typescript rules
  ...typescript(options.typescript),

  // vue rules - should be placed after typescript rules
  ...(options.vue ? await vue(options.vue === true ? {} : options.vue) : []),

  // markdown rules
  ...(options.markdown !== false
    ? await markdown(options.markdown === true ? {} : options.markdown)
    : []),

  // allow custom configs
  ...customConfigs,

  // prettier rules - should be the last one
  ...prettier(),
];
