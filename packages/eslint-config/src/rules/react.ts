import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const reactRules = {
  'react/boolean-prop-naming': [
    'off',
    {
      propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
      rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
      message: '',
    },
  ],
  'react/button-has-type': [
    'error',
    {
      button: true,
      submit: true,
      reset: false,
    },
  ],
  'react/checked-requires-onchange-or-readonly': [
    'error',
    {
      ignoreMissingProperties: false,
      ignoreExclusiveCheckedAttribute: false,
    },
  ],
  'react/default-props-match-prop-types': [
    'error',
    { allowRequiredDefaults: false },
  ],
  'react/destructuring-assignment': ['error', 'always'],
  'react/display-name': ['off', { ignoreTranspilerName: false }],
  'react/forbid-component-props': ['off', { forbid: [] }],
  'react/forbid-dom-props': ['off', { forbid: [] }],
  'react/forbid-elements': ['off', { forbid: [] }],
  'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
  'react/forbid-prop-types': [
    'error',
    {
      forbid: ['any', 'array', 'object'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    },
  ],
  'react/forward-ref-uses-ref': 'error',
  'react/function-component-definition': [
    'error',
    {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function',
    },
  ],
  'react/hook-use-state': ['error', { allowDestructuredState: false }],
  'react/iframe-missing-sandbox': 'warn',
  'react/jsx-boolean-value': ['error', 'never', { always: [] }],
  'react/jsx-child-element-spacing': 'off',
  'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
  'react/jsx-closing-tag-location': 'error',
  'react/jsx-curly-brace-presence': [
    'error',
    { props: 'never', children: 'never' },
  ],
  'react/jsx-curly-newline': [
    'error',
    {
      multiline: 'consistent',
      singleline: 'consistent',
    },
  ],
  'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
  'react/jsx-equals-spacing': ['error', 'never'],
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-handler-names': [
    'off',
    {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    },
  ],
  'react/jsx-indent': ['error', 2],
  'react/jsx-indent-props': ['error', 2],
  'react/jsx-key': ['error', { checkFragmentShorthand: true }],
  'react/jsx-max-depth': 'off',
  'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
  'react/jsx-newline': 'off',
  'react/jsx-no-bind': [
    'error',
    {
      ignoreRefs: true,
      allowArrowFunctions: true,
      allowFunctions: false,
      allowBind: false,
      ignoreDOMComponents: true,
    },
  ],
  'react/jsx-no-comment-textnodes': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-duplicate-props': ['error', { ignoreCase: true }],
  'react/jsx-no-leaked-render': 'off', // https://github.com/jsx-eslint/eslint-plugin-react/issues/3292
  'react/jsx-no-literals': ['off', { noStrings: true }],
  'react/jsx-no-script-url': [
    'error',
    [
      {
        name: 'Link',
        props: ['to'],
      },
    ],
  ],
  'react/jsx-no-target-blank': ['error', { enforceDynamicLinks: 'always' }],
  'react/jsx-no-undef': 'error',
  'react/jsx-no-useless-fragment': 'error',
  'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
  'react/jsx-pascal-case': [
    'error',
    {
      allowAllCaps: true,
      ignore: [],
    },
  ],
  'react/jsx-props-no-multi-spaces': 'error',
  'react/jsx-props-no-spread-multi': 'error',
  'react/jsx-props-no-spreading': [
    'error',
    {
      html: 'enforce',
      custom: 'enforce',
      explicitSpread: 'ignore',
      exceptions: [],
    },
  ],
  'react/jsx-sort-default-props': 'off', // deprecated
  'react/jsx-sort-props': [
    'warn',
    {
      ignoreCase: false,
      callbacksLast: false,
      shorthandFirst: false,
      shorthandLast: false,
      noSortAlphabetically: false,
      reservedFirst: true,
    },
  ],
  'react/jsx-space-before-closing': ['off', 'always'],
  'react/jsx-tag-spacing': [
    'error',
    {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    },
  ],
  'react/jsx-uses-react': 'off',
  'react/jsx-uses-vars': 'error',
  'react/jsx-wrap-multilines': [
    'error',
    {
      declaration: 'parens-new-line',
      assignment: 'parens-new-line',
      return: 'parens-new-line',
      arrow: 'parens-new-line',
      condition: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
    },
  ],
  'react/no-access-state-in-setstate': 'error',
  'react/no-adjacent-inline-elements': 'off',
  'react/no-array-index-key': 'error',
  'react/no-arrow-function-lifecycle': 'error',
  'react/no-children-prop': 'error',
  'react/no-danger': 'warn',
  'react/no-danger-with-children': 'error',
  'react/no-deprecated': ['error'],
  'react/no-did-mount-set-state': 'off',
  'react/no-did-update-set-state': 'error',
  'react/no-direct-mutation-state': 'off',
  'react/no-find-dom-node': 'error',
  'react/no-invalid-html-attribute': 'error',
  'react/no-is-mounted': 'error',
  'react/no-multi-comp': 'off',
  'react/no-namespace': 'error',
  'react/no-object-type-as-default-prop': 'error',
  'react/no-redundant-should-component-update': 'error',
  'react/no-render-return-value': 'error',
  'react/no-set-state': 'off',
  'react/no-string-refs': 'error',
  'react/no-this-in-sfc': 'error',
  'react/no-typos': 'error',
  'react/no-unescaped-entities': 'error',
  'react/no-unknown-property': 'error',
  'react/no-unsafe': 'off',
  'react/no-unstable-nested-components': 'error',
  'react/no-unused-class-component-methods': 'error',
  'react/no-unused-prop-types': [
    'error',
    {
      customValidators: [],
      skipShapeProps: true,
    },
  ],
  'react/no-unused-state': 'error',
  'react/no-will-update-set-state': 'error',
  'react/prefer-es6-class': ['error', 'always'],
  'react/prefer-exact-props': 'error',
  'react/prefer-read-only-props': 'off',
  'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
  'react/prop-types': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/require-default-props': [
    'error',
    {
      functions: 'ignore',
      forbidDefaultForRequired: true,
    },
  ],
  'react/require-optimization': ['off', { allowDecorators: [] }],
  'react/require-render-return': 'error',
  'react/self-closing-comp': 'error',
  'react/sort-comp': 'off',
  'react/sort-default-props': [
    'error',
    {
      ignoreCase: false,
    },
  ],
  'react/sort-prop-types': [
    'error',
    {
      ignoreCase: false,
      callbacksLast: false,
      requiredFirst: false,
      sortShapeProp: true,
    },
  ],
  'react/state-in-constructor': ['error', 'always'],
  'react/static-property-placement': ['error', 'property assignment'],
  'react/style-prop-object': 'error',
  'react/void-dom-elements-no-children': 'error',
} satisfies FlatConfig.Rules;
