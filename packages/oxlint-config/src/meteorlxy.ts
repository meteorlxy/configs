import type { OxlintConfig } from 'oxlint';

import { config } from './config';

export const meteorlxy = (userConfig: OxlintConfig = {}): OxlintConfig => ({
  ...config,
  ...userConfig,
  extends: [...(config.extends ?? []), ...(userConfig.extends ?? [])],
  plugins: userConfig.plugins ?? config.plugins,
  rules: {
    ...config.rules,
    ...userConfig.rules,
  },
  overrides:
    config.overrides || userConfig.overrides
      ? [...(config.overrides ?? []), ...(userConfig.overrides ?? [])]
      : undefined,
});
