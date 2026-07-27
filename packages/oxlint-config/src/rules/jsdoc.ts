import type { DummyRuleMap } from 'oxlint';

/**
 * jsdoc rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const jsdocRules = {
  'jsdoc/check-access': 'off',
  'jsdoc/check-property-names': 'warn',
  'jsdoc/check-tag-names': [
    'warn',
    {
      definedTags: [],
      jsxTags: false,
      typed: false,
    },
  ],
  'jsdoc/empty-tags': [
    'off',
    {
      tags: [],
    },
  ],
  'jsdoc/implements-on-classes': 'warn',
  'jsdoc/no-defaults': [
    'warn',
    {
      noOptionalParamNames: false,
    },
  ],
  'jsdoc/require-param': [
    'off',
    {
      checkConstructors: false,
      checkDestructured: true,
      checkDestructuredRoots: true,
      checkGetters: true,
      checkRestProperty: false,
      checkSetters: true,
      checkTypesPattern:
        '^(?:[oO]bject|[aA]rray|PlainObject|Generic(?:Object|Array))$',
      exemptedBy: ['inheritdoc'],
      ignoreWhenAllParamsMissing: false,
      interfaceExemptsParamsCheck: false,
      useDefaultObjectProperties: false,
    },
  ],
  'jsdoc/require-param-description': [
    'off',
    {
      defaultDestructuredRootDescription: 'The root object',
      setDefaultDestructuredRootDescription: false,
    },
  ],
  'jsdoc/require-param-name': 'off',
  'jsdoc/require-param-type': [
    'off',
    {
      defaultDestructuredRootType: 'object',
      setDefaultDestructuredRootType: false,
    },
  ],
  'jsdoc/require-property': 'warn',
  'jsdoc/require-property-description': 'warn',
  'jsdoc/require-property-name': 'warn',
  'jsdoc/require-property-type': 'warn',
  'jsdoc/require-returns': [
    'off',
    {
      checkConstructors: false,
      checkGetters: true,
      exemptedBy: ['inheritdoc'],
      forceRequireReturn: false,
      forceReturnsWithAsync: false,
    },
  ],
  'jsdoc/require-returns-description': 'off',
  'jsdoc/require-returns-type': 'off',
  'jsdoc/require-throws-description': 'off',
  'jsdoc/require-throws-type': 'off',
  'jsdoc/require-yields': [
    'warn',
    {
      exemptedBy: ['inheritdoc'],
      forceRequireYields: false,
      withGeneratorTag: false,
    },
  ],
  'jsdoc/require-yields-description': 'off',
  'jsdoc/require-yields-type': 'off',
} satisfies DummyRuleMap;
