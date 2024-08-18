import * as fs from 'node:fs';
import * as path from 'node:path';
import type { UserConfig } from '@commitlint/types';
import { RuleConfigSeverity } from '@commitlint/types';

const packages = fs.readdirSync(path.resolve(__dirname, 'packages'));

const config: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [RuleConfigSeverity.Error, 'always', packages],
    'footer-max-line-length': [RuleConfigSeverity.Disabled],
  },
};

export default config;
