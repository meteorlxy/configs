import type { Rules } from '../types';

/**
 * React rules migrated to Oxlint.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const reactRules = {
  // Unsupported by Oxlint yet: react/boolean-prop-naming.
  //   'react/boolean-prop-naming': [
  //     'off',
  //     {
  //       propTypeNames: ['bool', 'mutuallyExclusiveTrueProps'],
  //       rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
  //       message: '',
  //     },
  //   ]
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
  // Unsupported by Oxlint yet: react/default-props-match-prop-types.
  //   'react/default-props-match-prop-types': [
  //     'error',
  //     { allowRequiredDefaults: false },
  //   ]
  // Unsupported by Oxlint yet: react/destructuring-assignment.
  //   'react/destructuring-assignment': ['error', 'always']
  'react/display-name': ['off', { ignoreTranspilerName: false }],
  'react/forbid-component-props': ['off', { forbid: [] }],
  'react/forbid-dom-props': ['off', { forbid: [] }],
  'react/forbid-elements': ['off', { forbid: [] }],
  // Unsupported by Oxlint yet: react/forbid-foreign-prop-types.
  //   'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }]
  // Unsupported by Oxlint yet: react/forbid-prop-types.
  //   'react/forbid-prop-types': [
  //     'error',
  //     {
  //       forbid: ['any', 'array', 'object'],
  //       checkContextTypes: true,
  //       checkChildContextTypes: true,
  //     },
  //   ]
  'react/forward-ref-uses-ref': 'error',
  // Unsupported by Oxlint yet: react/function-component-definition.
  //   'react/function-component-definition': [
  //     'error',
  //     {
  //       namedComponents: 'arrow-function',
  //       unnamedComponents: 'arrow-function',
  //     },
  //   ]
  'react/hook-use-state': ['error', { allowDestructuredState: false }],
  'react/iframe-missing-sandbox': 'warn',
  'react/jsx-boolean-value': ['error', 'never', { always: [] }],
  // Unsupported by Oxlint yet: react/jsx-child-element-spacing.
  //   'react/jsx-child-element-spacing': 'off'
  // Unsupported by Oxlint yet: react/jsx-closing-bracket-location.
  //   'react/jsx-closing-bracket-location': ['error', 'line-aligned']
  // Unsupported by Oxlint yet: react/jsx-closing-tag-location.
  //   'react/jsx-closing-tag-location': 'error'
  'react/jsx-curly-brace-presence': [
    'error',
    { props: 'never', children: 'never' },
  ],
  // Unsupported by Oxlint yet: react/jsx-curly-newline.
  //   'react/jsx-curly-newline': [
  //     'error',
  //     {
  //       multiline: 'consistent',
  //       singleline: 'consistent',
  //     },
  //   ]
  // Unsupported by Oxlint yet: react/jsx-curly-spacing.
  //   'react/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }]
  // Unsupported by Oxlint yet: react/jsx-equals-spacing.
  //   'react/jsx-equals-spacing': ['error', 'never']
  'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  // Unsupported by Oxlint yet: react/jsx-first-prop-new-line.
  //   'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop']
  'react/jsx-fragments': ['error', 'syntax'],
  'react/jsx-handler-names': [
    'off',
    {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    },
  ],
  // Unsupported by Oxlint yet: react/jsx-indent.
  //   'react/jsx-indent': ['error', 2]
  // Unsupported by Oxlint yet: react/jsx-indent-props.
  //   'react/jsx-indent-props': ['error', 2]
  'react/jsx-key': ['error', { checkFragmentShorthand: true }],
  'react/jsx-max-depth': 'off',
  // Unsupported by Oxlint yet: react/jsx-max-props-per-line.
  //   'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }]
  // Unsupported by Oxlint yet: react/jsx-newline.
  //   'react/jsx-newline': 'off'
  // Unsupported by Oxlint yet: react/jsx-no-bind.
  //   'react/jsx-no-bind': [
  //     'error',
  //     {
  //       ignoreRefs: true,
  //       allowArrowFunctions: true,
  //       allowFunctions: false,
  //       allowBind: false,
  //       ignoreDOMComponents: true,
  //     },
  //   ]
  'react/jsx-no-comment-textnodes': 'error',
  'react/jsx-no-constructed-context-values': 'error',
  'react/jsx-no-duplicate-props': 'error',
  // Unsupported by Oxlint yet: react/jsx-no-leaked-render.
  //   'react/jsx-no-leaked-render': 'off'
  // https://github.com/jsx-eslint/eslint-plugin-react/issues/3292
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
  // Unsupported by Oxlint yet: react/jsx-one-expression-per-line.
  //   'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }]
  'react/jsx-pascal-case': [
    'error',
    {
      allowAllCaps: true,
      ignore: [],
    },
  ],
  // Unsupported by Oxlint yet: react/jsx-props-no-multi-spaces.
  //   'react/jsx-props-no-multi-spaces': 'error'
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
  // Unsupported by Oxlint yet: react/jsx-sort-default-props.
  //   'react/jsx-sort-default-props': 'off'
  // Unsupported by Oxlint yet: react/jsx-sort-props.
  //  // deprecated
  //   'react/jsx-sort-props': [
  //     'warn',
  //     {
  //       ignoreCase: false,
  //       callbacksLast: false,
  //       shorthandFirst: false,
  //       shorthandLast: false,
  //       noSortAlphabetically: false,
  //       reservedFirst: true,
  //     },
  //   ]
  // Unsupported by Oxlint yet: react/jsx-space-before-closing.
  //   'react/jsx-space-before-closing': ['off', 'always']
  // Unsupported by Oxlint yet: react/jsx-tag-spacing.
  //   'react/jsx-tag-spacing': [
  //     'error',
  //     {
  //       closingSlash: 'never',
  //       beforeSelfClosing: 'always',
  //       afterOpening: 'never',
  //       beforeClosing: 'never',
  //     },
  //   ]
  // Unsupported by Oxlint yet: react/jsx-uses-react.
  //   'react/jsx-uses-react': 'off'
  // Unsupported by Oxlint yet: react/jsx-uses-vars.
  //   'react/jsx-uses-vars': 'error'
  // Unsupported by Oxlint yet: react/jsx-wrap-multilines.
  //   'react/jsx-wrap-multilines': [
  //     'error',
  //     {
  //       declaration: 'parens-new-line',
  //       assignment: 'parens-new-line',
  //       return: 'parens-new-line',
  //       arrow: 'parens-new-line',
  //       condition: 'parens-new-line',
  //       logical: 'parens-new-line',
  //       prop: 'parens-new-line',
  //     },
  //   ]
  // Unsupported by Oxlint yet: react/no-access-state-in-setstate.
  //   'react/no-access-state-in-setstate': 'error'
  // Unsupported by Oxlint yet: react/no-adjacent-inline-elements.
  //   'react/no-adjacent-inline-elements': 'off'
  'react/no-array-index-key': 'error',
  // Unsupported by Oxlint yet: react/no-arrow-function-lifecycle.
  //   'react/no-arrow-function-lifecycle': 'error'
  'react/no-children-prop': 'error',
  'react/no-danger': 'warn',
  'react/no-danger-with-children': 'error',
  // Unsupported by Oxlint yet: react/no-deprecated.
  //   'react/no-deprecated': ['error']
  'react/no-did-mount-set-state': 'off',
  'react/no-did-update-set-state': 'error',
  'react/no-direct-mutation-state': 'off',
  'react/no-find-dom-node': 'error',
  // Unsupported by Oxlint yet: react/no-invalid-html-attribute.
  //   'react/no-invalid-html-attribute': 'error'
  'react/no-is-mounted': 'error',
  'react/no-multi-comp': 'off',
  'react/no-namespace': 'error',
  'react/no-object-type-as-default-prop': 'error',
  'react/no-redundant-should-component-update': 'error',
  'react/no-render-return-value': 'error',
  'react/no-set-state': 'off',
  'react/no-string-refs': 'error',
  'react/no-this-in-sfc': 'error',
  // Unsupported by Oxlint yet: react/no-typos.
  //   'react/no-typos': 'error'
  'react/no-unescaped-entities': 'error',
  'react/no-unknown-property': 'error',
  'react/no-unsafe': 'off',
  'react/no-unstable-nested-components': 'error',
  // Unsupported by Oxlint yet: react/no-unused-class-component-methods.
  //   'react/no-unused-class-component-methods': 'error'
  // Unsupported by Oxlint yet: react/no-unused-prop-types.
  //   'react/no-unused-prop-types': [
  //     'error',
  //     {
  //       customValidators: [],
  //       skipShapeProps: true,
  //     },
  //   ]
  // Unsupported by Oxlint yet: react/no-unused-state.
  //   'react/no-unused-state': 'error'
  'react/no-will-update-set-state': 'error',
  'react/prefer-es6-class': ['error', 'always'],
  // Unsupported by Oxlint yet: react/prefer-exact-props.
  //   'react/prefer-exact-props': 'error'
  // Unsupported by Oxlint yet: react/prefer-read-only-props.
  //   'react/prefer-read-only-props': 'off'
  // Unsupported by Oxlint yet: react/prefer-stateless-function.
  //   'react/prefer-stateless-function': ['error', { ignorePureComponents: true }]
  // Unsupported by Oxlint yet: react/prop-types.
  //   'react/prop-types': 'off'
  'react/react-in-jsx-scope': 'off',
  // Unsupported by Oxlint yet: react/require-default-props.
  //   'react/require-default-props': [
  //     'error',
  //     {
  //       functions: 'ignore',
  //       forbidDefaultForRequired: true,
  //     },
  //   ]
  // Unsupported by Oxlint yet: react/require-optimization.
  //   'react/require-optimization': ['off', { allowDecorators: [] }]
  'react/require-render-return': 'error',
  'react/self-closing-comp': 'error',
  // Unsupported by Oxlint yet: react/sort-comp.
  //   'react/sort-comp': 'off'
  // Unsupported by Oxlint yet: react/sort-default-props.
  //   'react/sort-default-props': [
  //     'error',
  //     {
  //       ignoreCase: false,
  //     },
  //   ]
  // Unsupported by Oxlint yet: react/sort-prop-types.
  //   'react/sort-prop-types': [
  //     'error',
  //     {
  //       ignoreCase: false,
  //       callbacksLast: false,
  //       requiredFirst: false,
  //       sortShapeProp: true,
  //     },
  //   ]
  'react/state-in-constructor': ['error', 'always'],
  // Unsupported by Oxlint yet: react/static-property-placement.
  //   'react/static-property-placement': ['error', 'property assignment']
  'react/style-prop-object': 'error',
  'react/void-dom-elements-no-children': 'error',
} satisfies Rules;
