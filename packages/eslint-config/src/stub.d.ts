declare module 'eslint-plugin-*' {
  import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

  const plugin: FlatConfig.Plugin & Required<Pick<FlatConfig.Plugin, 'rules'>>;
  export default plugin;
}

declare module 'vue-eslint-parser' {
  import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

  const plugin: FlatConfig.Parser;
  export default plugin;
}
