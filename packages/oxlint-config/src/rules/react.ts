import type { DummyRuleMap } from 'oxlint';

/**
 * react rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const reactRules = {
  'react/button-has-type': [
    'error',
    {
      button: true,
      reset: false,
      submit: true,
    },
  ],
  'react/capitalized-calls': 'off',
  'react/checked-requires-onchange-or-readonly': [
    'error',
    {
      ignoreExclusiveCheckedAttribute: false,
      ignoreMissingProperties: false,
    },
  ],
  'react/display-name': [
    'off',
    {
      checkContextObjects: false,
      ignoreTranspilerName: false,
    },
  ],
  'react/error-boundaries': 'error',
  'react/exhaustive-deps': 'error',
  'react/exhaustive-effect-dependencies': 'off',
  'react/forbid-component-props': ['off', { forbid: [] }],
  'react/forbid-dom-props': ['off', { forbid: [] }],
  'react/forbid-elements': ['off', { forbid: [] }],
  'react/forward-ref-uses-ref': 'error',
  'react/function-component-definition': [
    'off',
    {
      namedComponents: 'function-declaration',
      unnamedComponents: 'function-expression',
    },
  ],
  'react/globals': 'error',
  'react/hook-use-state': [
    'error',
    {
      allowDestructuredState: false,
    },
  ],
  'react/hooks': 'off',
  'react/iframe-missing-sandbox': 'warn',
  'react/immutability': 'error',
  'react/incompatible-library': 'warn',
  'react/invariant': 'off',
  'react/jsx-boolean-value': [
    'error',
    'never',
    {
      always: [],
      assumeUndefinedIsFalse: false,
      never: [],
    },
  ],
  'react/jsx-curly-brace-presence': [
    'error',
    { props: 'never', children: 'never' },
  ],
  'react/jsx-filename-extension': [
    'error',
    {
      allow: 'always',
      extensions: ['.jsx', '.tsx'],
      ignoreFilesWithoutCode: false,
    },
  ],
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-handler-names': [
    'off',
    {
      checkInlineFunction: false,
      checkLocalVariables: false,
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
      ignoreComponentNames: [],
    },
  ],
  'react/jsx-key': [
    'error',
    {
      checkFragmentShorthand: true,
      checkKeyMustBeforeSpread: true,
      warnOnDuplicates: true,
    },
  ],
  'react/jsx-max-depth': [
    'off',
    {
      max: 2,
    },
  ],
  'react/jsx-no-comment-textnodes': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-duplicate-props': 'error',
  'react/jsx-no-literals': [
    'off',
    {
      allowedStrings: [],
      ignoreProps: false,
      noAttributeStrings: false,
      noStrings: true,
      restrictedAttributes: [],
    },
  ],
  'react/jsx-no-script-url': [
    'error',
    [
      {
        name: 'Link',
        props: ['to'],
      },
    ],
  ],
  'react/jsx-no-target-blank': [
    'error',
    {
      allowReferrer: false,
      enforceDynamicLinks: 'always',
      forms: false,
      links: true,
      warnOnSpreadAttributes: false,
    },
  ],
  'react/jsx-no-undef': 'error',
  'react/jsx-no-useless-fragment': [
    'error',
    {
      allowExpressions: false,
    },
  ],
  'react/jsx-pascal-case': [
    'error',
    {
      allowAllCaps: true,
      allowLeadingUnderscore: false,
      allowNamespace: false,
      ignore: [],
    },
  ],
  'react/jsx-props-no-spread-multi': 'error',
  'react/jsx-props-no-spreading': [
    'error',
    {
      custom: 'enforce',
      exceptions: [],
      explicitSpread: 'ignore',
      html: 'enforce',
    },
  ],
  'react/memo-dependencies': 'off',
  'react/no-array-index-key': 'error',
  'react/no-children-prop': 'error',
  'react/no-clone-element': 'off',
  'react/no-danger': 'warn',
  'react/no-danger-with-children': 'error',
  'react/no-deriving-state-in-effects': 'off',
  'react/no-did-mount-set-state': 'warn',
  'react/no-did-update-set-state': 'error',
  'react/no-direct-mutation-state': 'warn',
  'react/no-find-dom-node': 'error',
  'react/no-is-mounted': 'error',
  'react/no-multi-comp': [
    'off',
    {
      ignoreStateless: false,
    },
  ],
  'react/no-namespace': 'error',
  'react/no-object-type-as-default-prop': 'error',
  'react/no-react-children': 'off',
  'react/no-redundant-should-component-update': 'error',
  'react/no-render-return-value': 'error',
  'react/no-set-state': 'off',
  'react/no-string-refs': [
    'error',
    {
      noTemplateLiterals: false,
    },
  ],
  'react/no-this-in-sfc': 'error',
  'react/no-unescaped-entities': 'error',
  'react/no-unknown-property': [
    'error',
    {
      ignore: [],
      requireDataLowercase: false,
    },
  ],
  'react/no-unsafe': [
    'warn',
    {
      checkAliases: false,
    },
  ],
  'react/no-unstable-nested-components': [
    'error',
    {
      allowAsProps: false,
      customValidators: [],
      propNamePattern: 'render*',
    },
  ],
  'react/no-will-update-set-state': 'error',
  'react/only-export-components': [
    'warn',
    {
      allowConstantExport: true,
      allowExportNames: [],
      checkJS: false,
      customHOCs: [],
    },
  ],
  'react/prefer-es6-class': ['error', 'always'],
  'react/prefer-function-component': [
    'off',
    {
      allowErrorBoundary: true,
      allowJsxUtilityClass: false,
    },
  ],
  'react/preserve-manual-memoization': 'warn',
  'react/purity': 'error',
  'react/react-in-jsx-scope': 'off',
  'react/refs': 'error',
  'react/require-render-return': 'error',
  'react/rule-suppression': 'off',
  'react/rules-of-hooks': 'error',
  'react/self-closing-comp': [
    'error',
    {
      component: true,
      html: true,
    },
  ],
  'react/set-state-in-effect': 'error',
  'react/set-state-in-render': 'error',
  'react/state-in-constructor': ['error', 'always'],
  'react/static-components': 'error',
  'react/style-prop-object': [
    'error',
    {
      allow: [],
    },
  ],
  'react/syntax': 'off',
  'react/todo': 'off',
  'react/unsupported-syntax': 'error',
  'react/use-memo': 'error',
  'react/void-dom-elements-no-children': 'error',
  'react/void-use-memo': 'warn',
} satisfies DummyRuleMap;
