declare module 'eslint-plugin-*' {
  import type { Plugin } from '@eslint/core';

  const plugin: Plugin;
  export default plugin;
}
