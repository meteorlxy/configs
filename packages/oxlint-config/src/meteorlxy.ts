import type { OxlintConfig } from 'oxlint';

import { config } from './config';

export const meteorlxy = (userConfig: OxlintConfig = {}): OxlintConfig => ({
  ...config,
  ...userConfig,
  // @ts-expect-error: oxlint type error: https://github.com/oxc-project/oxc/issues/24982
  globals: {
    ...userConfig.globals,
    ...config.globals,
  },
  plugins: userConfig.plugins ?? config.plugins,
  rules: {
    ...config.rules,
    ...userConfig.rules,
  },
  overrides: [...config.overrides, ...(userConfig.overrides ?? [])],
});
