import type { OxfmtConfig } from 'oxfmt';

import { config } from './config';

export const meteorlxy = (userConfig?: Partial<OxfmtConfig>): OxfmtConfig => ({
  ...config,
  ...userConfig,
  sortImports:
    typeof userConfig?.sortImports !== 'boolean'
      ? {
          ...config.sortImports,
          ...userConfig?.sortImports,
        }
      : userConfig.sortImports,
  sortPackageJson:
    typeof userConfig?.sortPackageJson !== 'boolean'
      ? {
          ...config.sortPackageJson,
          ...userConfig?.sortPackageJson,
        }
      : userConfig.sortPackageJson,
  sortTailwindcss:
    typeof userConfig?.sortTailwindcss !== 'boolean'
      ? {
          ...config.sortTailwindcss,
          ...userConfig?.sortTailwindcss,
        }
      : userConfig.sortTailwindcss,
});
