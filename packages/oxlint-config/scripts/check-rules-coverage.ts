import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import * as rules from '../src/rules';

interface OxlintSchema {
  definitions?: {
    DummyRuleMap?: {
      properties?: Record<string, unknown>;
    };
  };
}

interface RuleGroup {
  currentRuleConfigs: Record<string, unknown>;
  currentRules: Set<string>;
  prefix?: string;
  scope: string;
}

interface OxlintPrintedConfig {
  rules?: Record<string, string>;
}

const require = createRequire(import.meta.url);
const oxlintPackageJsonPath = require.resolve('oxlint/package.json');
const oxlintPackageDir = dirname(oxlintPackageJsonPath);
const schemaPath = join(oxlintPackageDir, 'configuration_schema.json');
const schema = JSON.parse(readFileSync(schemaPath, 'utf8')) as OxlintSchema;
const schemaRules = schema.definitions?.DummyRuleMap?.properties;

if (!schemaRules) {
  throw new Error('Unable to find DummyRuleMap rules in Oxlint schema');
}

const allRules = Object.keys(schemaRules).sort();

const getRulePrefix = (rule: string): string => {
  if (!rule.includes('/')) {
    return 'builtin';
  }

  const [prefix] = rule.split('/');

  return prefix;
};

const getSchemaRules = (prefix?: string): Set<string> =>
  new Set(
    allRules.filter((rule) =>
      prefix ? rule.startsWith(`${prefix}/`) : !rule.includes('/'),
    ),
  );

const formatRules = (items: string[]): string =>
  items.length === 0 ? '(none)' : items.join(', ');

const normalizeRuleName = (rule: string): string =>
  rule.replace(/^jsx_a11y\//, 'jsx-a11y/');

const printDefaultConfig = (): OxlintPrintedConfig => {
  const rawConfig = execFileSync(
    process.execPath,
    [
      join(oxlintPackageDir, 'bin/oxlint'),
      '--import-plugin',
      '--react-plugin',
      '--jsdoc-plugin',
      '--jest-plugin',
      '--vitest-plugin',
      '--jsx-a11y-plugin',
      '--nextjs-plugin',
      '--react-perf-plugin',
      '--promise-plugin',
      '--node-plugin',
      '--vue-plugin',
      '--print-config',
      fileURLToPath(import.meta.url),
    ],
    {
      encoding: 'utf8',
    },
  );

  return JSON.parse(rawConfig) as OxlintPrintedConfig;
};

const getRuleSeverity = (ruleConfig: unknown): string | undefined => {
  if (typeof ruleConfig === 'string') {
    return ruleConfig;
  }

  if (Array.isArray(ruleConfig)) {
    const severity = (ruleConfig as readonly unknown[])[0];

    return typeof severity === 'string' ? severity : undefined;
  }

  return undefined;
};

const defaultEnabledRules = new Set(
  Object.entries(printDefaultConfig().rules ?? {})
    .filter(([, severity]) => severity !== 'off')
    .map(([rule]) => normalizeRuleName(rule)),
);

const ruleGroups: RuleGroup[] = [
  {
    scope: 'builtin',
    currentRuleConfigs: rules.builtinRules,
    currentRules: new Set(Object.keys(rules.builtinRules)),
  },
  {
    scope: 'import',
    prefix: 'import',
    currentRuleConfigs: rules.importRules,
    currentRules: new Set(Object.keys(rules.importRules)),
  },
  {
    scope: 'typescript',
    prefix: 'typescript',
    currentRuleConfigs: rules.typescriptRules,
    currentRules: new Set(Object.keys(rules.typescriptRules)),
  },
  {
    scope: 'react',
    prefix: 'react',
    currentRuleConfigs: rules.reactRules,
    currentRules: new Set(Object.keys(rules.reactRules)),
  },
  {
    scope: 'react-perf',
    prefix: 'react-perf',
    currentRuleConfigs: rules.reactPerfRules,
    currentRules: new Set(Object.keys(rules.reactPerfRules)),
  },
  {
    scope: 'vue',
    prefix: 'vue',
    currentRuleConfigs: rules.vueRules,
    currentRules: new Set(Object.keys(rules.vueRules)),
  },
  {
    scope: 'unicorn',
    prefix: 'unicorn',
    currentRuleConfigs: rules.unicornRules,
    currentRules: new Set(Object.keys(rules.unicornRules)),
  },
  {
    scope: 'oxc',
    prefix: 'oxc',
    currentRuleConfigs: rules.oxcRules,
    currentRules: new Set(Object.keys(rules.oxcRules)),
  },
  {
    scope: 'jsx-a11y',
    prefix: 'jsx-a11y',
    currentRuleConfigs: rules.jsxA11yRules,
    currentRules: new Set(Object.keys(rules.jsxA11yRules)),
  },
  {
    scope: 'nextjs',
    prefix: 'nextjs',
    currentRuleConfigs: rules.nextjsRules,
    currentRules: new Set(Object.keys(rules.nextjsRules)),
  },
  {
    scope: 'jsdoc',
    prefix: 'jsdoc',
    currentRuleConfigs: rules.jsdocRules,
    currentRules: new Set(Object.keys(rules.jsdocRules)),
  },
  {
    scope: 'promise',
    prefix: 'promise',
    currentRuleConfigs: rules.promiseRules,
    currentRules: new Set(Object.keys(rules.promiseRules)),
  },
  {
    scope: 'jest',
    prefix: 'jest',
    currentRuleConfigs: rules.jestRules,
    currentRules: new Set(Object.keys(rules.jestRules)),
  },
  {
    scope: 'vitest',
    prefix: 'vitest',
    currentRuleConfigs: rules.vitestRules,
    currentRules: new Set(Object.keys(rules.vitestRules)),
  },
  {
    scope: 'node',
    prefix: 'node',
    currentRuleConfigs: rules.nodeRules,
    currentRules: new Set(Object.keys(rules.nodeRules)),
  },
];

const schemaPrefixes = new Set(allRules.map(getRulePrefix));
const configuredPrefixes = new Set(
  ruleGroups.map(({ prefix }) => prefix ?? 'builtin'),
);

const missingRuleGroups = [...schemaPrefixes]
  .filter((prefix) => !configuredPrefixes.has(prefix))
  .sort();
const redundantRuleGroups = [...configuredPrefixes]
  .filter((prefix) => !schemaPrefixes.has(prefix))
  .sort();

if (missingRuleGroups.length > 0 || redundantRuleGroups.length > 0) {
  console.log('===========================');
  console.log('Rule groups');
  console.log('Missing groups:', formatRules(missingRuleGroups));
  console.log('Redundant groups:', formatRules(redundantRuleGroups));
  console.log('===========================');
  process.exitCode = 1;
}

for (const { scope, prefix, currentRuleConfigs, currentRules } of ruleGroups) {
  const supportedRules = getSchemaRules(prefix);
  const missingRules = [...supportedRules]
    .filter((rule) => !currentRules.has(rule))
    .sort();
  const redundantRules = [...currentRules]
    .filter((rule) => !supportedRules.has(rule))
    .sort();
  const disabledDefaultRules = Object.entries(currentRuleConfigs)
    .filter(
      ([rule, ruleConfig]) =>
        defaultEnabledRules.has(rule) && getRuleSeverity(ruleConfig) === 'off',
    )
    .map(([rule]) => rule)
    .sort();

  if (
    missingRules.length === 0 &&
    redundantRules.length === 0 &&
    disabledDefaultRules.length === 0
  ) {
    continue;
  }

  console.log('===========================');
  console.log('Scope:', scope);
  console.log('Missing rules:', formatRules(missingRules));
  console.log('Redundant rules:', formatRules(redundantRules));
  console.log('Disabled default rules:', formatRules(disabledDefaultRules));
  console.log('===========================');
  process.exitCode = 1;
}
