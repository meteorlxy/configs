import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import eslint from 'eslint/use-at-your-own-risk';
import prettierConfig from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import-x';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import vuePlugin from 'eslint-plugin-vue';
import { rules } from '../src';

// eslint-disable-next-line @typescript-eslint/no-deprecated
const builtinRules = new Set(eslint.builtinRules.keys());
const prettierRules = new Set(Object.keys(prettierConfig.rules!));

const configs = [
  {
    allRules: builtinRules,
    currentRules: new Set(Object.keys(rules.builtinRules)),
  },
  {
    scope: '@typescript-eslint',
    allRules: new Set(Object.keys(typescriptPlugin.rules)),
    currentRules: new Set(Object.keys(rules.typescriptRules)),
  },
  {
    scope: 'import',
    allRules: new Set(Object.keys(importPlugin.rules)),
    currentRules: new Set(Object.keys(rules.importsRules)),
  },
  {
    scope: 'react',
    allRules: new Set(Object.keys(reactPlugin.rules)),
    currentRules: new Set(Object.keys(rules.reactRules)),
  },
  {
    scope: 'react-hooks',
    allRules: new Set(Object.keys(reactHooksPlugin.rules)),
    currentRules: new Set(Object.keys(rules.reactHooksRules)),
  },
  {
    scope: 'vue',
    allRules: new Set(Object.keys(vuePlugin.rules)),
    currentRules: new Set(
      Object.keys({
        ...vuePlugin.configs!.base.rules,
        ...vuePlugin.configs!['vue3-essential'].rules,
        ...vuePlugin.configs!['vue3-strongly-recommended'].rules,
        ...vuePlugin.configs!['vue3-recommended'].rules,
        ...vuePlugin.configs!['no-layout-rules'].rules,
        ...rules.vueRules,
      }),
    ),
  },
];

const addRulesScope = (rawRules: Set<string>, scope: string): Set<string> =>
  new Set(
    [...rawRules].map((item) =>
      item.startsWith(`${scope}/`) ? item : `${scope}/${item}`,
    ),
  );

const checkRulesCoverage = ({
  allRules,
  currentRules,
  scope,
}: {
  allRules: Set<string>;
  currentRules: Set<string>;
  scope?: string;
}): void => {
  const missingRules = [];
  const redundantRules = [];

  for (const rule of allRules) {
    if (!currentRules.has(rule) && !prettierRules.has(rule)) {
      missingRules.push(rule);
    }
  }

  for (const rule of currentRules) {
    if (!allRules.has(rule) && !builtinRules.has(rule)) {
      redundantRules.push(rule);
    }
  }

  if (missingRules.length === 0 && redundantRules.length === 0) {
    return;
  }

  console.log('===========================');
  console.log('Scope:', scope);
  console.log('Missing rules:', missingRules);
  console.log('Redundant rules:', redundantRules);
  console.log('===========================');
};

for (const { scope, allRules, currentRules } of configs) {
  checkRulesCoverage({
    scope,
    allRules: scope ? addRulesScope(allRules, scope) : allRules,
    currentRules,
  });
}
