import confusingBrowserGlobals from 'confusing-browser-globals';

import type { Rules } from '../types';

/**
 * ESLint built-in rules migrated to Oxlint.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const builtinRules = {
  'accessor-pairs': 'off',
  'array-callback-return': [
    'error',
    {
      allowImplicit: true,
    },
  ],
  'arrow-body-style': [
    'off',
    'as-needed',
    {
      requireReturnForObjectLiteral: false,
    },
  ],
  // Unsupported by Oxlint yet: arrow-parens.
  //   'arrow-parens': ['error', 'always']
  // Unsupported by Oxlint yet: arrow-spacing.
  //   'arrow-spacing': [
  //     'error',
  //     {
  //       before: true,
  //       after: true,
  //     },
  //   ]
  'block-scoped-var': 'error',
  // Unsupported by Oxlint yet: camelcase.
  //   'camelcase': ['error', { properties: 'never', ignoreDestructuring: false }]
  // Unsupported by Oxlint yet: callback-return.
  //   'callback-return': 'off'
  'capitalized-comments': [
    'off',
    'never',
    {
      line: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
      block: {
        ignorePattern: '.*',
        ignoreInlineComments: true,
        ignoreConsecutiveComments: true,
      },
    },
  ],
  'class-methods-use-this': [
    'error',
    {
      exceptMethods: [],
    },
  ],
  'complexity': ['off', 20],
  // Unsupported by Oxlint yet: consistent-this.
  //   'consistent-this': 'off'
  // Unsupported by Oxlint yet: consistent-return.
  //   'consistent-return': 'error'
  'constructor-super': 'error',
  'curly': ['error', 'multi-line'],
  'default-case': [
    'error',
    {
      commentPattern: '^no default$',
    },
  ],
  'default-case-last': 'error',
  'default-param-last': 'error',
  // Unsupported by Oxlint yet: dot-location.
  //   'dot-location': ['error', 'property']
  // Unsupported by Oxlint yet: dot-notation.
  //   'dot-notation': [
  //     'error',
  //     {
  //       allowKeywords: true,
  //     },
  //   ]
  'eqeqeq': [
    'error',
    'always',
    {
      null: 'ignore',
    },
  ],
  'for-direction': 'error',
  'func-name-matching': [
    'off',
    'always',
    {
      includeCommonJSModuleExports: false,
      considerPropertyDescriptor: true,
    },
  ],
  'func-names': 'warn',
  'func-style': ['off', 'expression'],
  // Unsupported by Oxlint yet: generator-star-spacing.
  //   'generator-star-spacing': [
  //     'error',
  //     {
  //       before: false,
  //       after: true,
  //     },
  //   ]
  'getter-return': [
    'error',
    {
      allowImplicit: true,
    },
  ],
  // Unsupported by Oxlint yet: global-require.
  //   'global-require': 'off'
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'off',
  // Unsupported by Oxlint yet: handle-callback-err.
  //   'handle-callback-err': 'off'
  // Unsupported by Oxlint yet: id-blacklist.
  //   'id-blacklist': 'off'
  // Unsupported by Oxlint yet: id-denylist.
  //  // deprecated
  //   'id-denylist': 'off'
  'id-length': 'off',
  'id-match': 'off',
  'init-declarations': 'off',
  // Unsupported by Oxlint yet: line-comment-position.
  //   'line-comment-position': [
  //     'off',
  //     {
  //       position: 'above',
  //       ignorePattern: '',
  //       applyDefaultPatterns: true,
  //     },
  //   ]
  // Unsupported by Oxlint yet: lines-around-directive.
  //   'lines-around-directive': [
  //     'error',
  //     {
  //       before: 'always',
  //       after: 'always',
  //     },
  //   ]
  // Unsupported by Oxlint yet: lines-between-class-members.
  //   'lines-between-class-members': [
  //     'error',
  //     'always',
  //     {
  //       exceptAfterSingleLine: false,
  //     },
  //   ]
  'logical-assignment-operators': [
    'off',
    'always',
    {
      enforceForIfStatements: true,
    },
  ],
  'max-classes-per-file': ['error', 1],
  'max-depth': ['off', 4],
  'max-lines': [
    'off',
    {
      max: 300,
      skipBlankLines: true,
      skipComments: true,
    },
  ],
  'max-lines-per-function': [
    'off',
    {
      max: 50,
      skipBlankLines: true,
      skipComments: true,
      IIFEs: true,
    },
  ],
  'max-nested-callbacks': 'off',
  'max-params': ['off', 3],
  'max-statements': ['off', 10],
  // Unsupported by Oxlint yet: multiline-comment-style.
  //   'multiline-comment-style': ['off', 'starred-block']
  'new-cap': [
    'error',
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: [],
    },
  ],
  // Unsupported by Oxlint yet: newline-after-var.
  //   'newline-after-var': 'off'
  // Unsupported by Oxlint yet: newline-before-return.
  //   'newline-before-return': 'off'
  'no-alert': 'warn',
  'no-array-constructor': 'error',
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'off',
  'no-bitwise': 'off',
  // Unsupported by Oxlint yet: no-buffer-constructor.
  //   'no-buffer-constructor': 'error'
  'no-caller': 'error',
  'no-case-declarations': 'error',
  // Unsupported by Oxlint yet: no-catch-shadow.
  //   'no-catch-shadow': 'off'
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': ['error', 'always'],
  // Unsupported by Oxlint yet: no-confusing-arrow.
  //   'no-confusing-arrow': [
  //     'error',
  //     {
  //       allowParens: true,
  //     },
  //   ]
  'no-console': 'warn',
  'no-const-assign': 'error',
  'no-constant-binary-expression': 'warn',
  'no-constant-condition': 'warn',
  'no-constructor-return': 'error',
  'no-continue': 'off',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'off',
  'no-div-regex': 'off',
  // Unsupported by Oxlint yet: no-dupe-args.
  //   'no-dupe-args': 'error'
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': 'off',
  'no-else-return': [
    'error',
    {
      allowElseIf: false,
    },
  ],
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],
  'no-empty-pattern': 'error',
  'no-empty-static-block': 'error',
  'no-eq-null': 'off',
  'no-eval': 'error',
  'no-ex-assign': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-label': 'error',
  'no-fallthrough': 'error',
  // Unsupported by Oxlint yet: no-floating-decimal.
  //   'no-floating-decimal': 'error'
  'no-func-assign': 'error',
  'no-global-assign': [
    'error',
    {
      exceptions: [],
    },
  ],
  'no-implicit-coercion': [
    'warn',
    {
      boolean: false,
      number: true,
      string: true,
      disallowTemplateShorthand: false,
      allow: [],
    },
  ],
  'no-implicit-globals': 'off',
  'no-implied-eval': 'error',
  'no-import-assign': 'error',
  'no-inline-comments': 'off',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': 'error',
  // Unsupported by Oxlint yet: no-invalid-this.
  //   'no-invalid-this': 'off'
  'no-irregular-whitespace': 'error',
  'no-iterator': 'error',
  'no-label-var': 'error',
  'no-labels': [
    'error',
    {
      allowLoop: false,
      allowSwitch: false,
    },
  ],
  'no-lone-blocks': 'error',
  'no-lonely-if': 'error',
  'no-loop-func': 'error',
  'no-loss-of-precision': 'error',
  'no-magic-numbers': [
    'off',
    {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    },
  ],
  'no-misleading-character-class': 'error',
  // Unsupported by Oxlint yet: no-mixed-requires.
  //   'no-mixed-requires': ['off', false]
  'no-multi-assign': 'error',
  // Unsupported by Oxlint yet: no-multi-spaces.
  //   'no-multi-spaces': [
  //     'error',
  //     {
  //       ignoreEOLComments: false,
  //     },
  //   ]
  'no-multi-str': 'error',
  // Unsupported by Oxlint yet: no-native-reassign.
  //   'no-native-reassign': 'off'
  'no-negated-condition': 'off',
  // Unsupported by Oxlint yet: no-negated-in-lhs.
  //   'no-negated-in-lhs': 'off'
  'no-nested-ternary': 'off',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-native-nonconstructor': 'error',
  // Unsupported by Oxlint yet: no-new-object.
  //   'no-new-object': 'error'
  // Unsupported by Oxlint yet: no-new-require.
  //   'no-new-require': 'error'
  // Unsupported by Oxlint yet: no-new-symbol.
  //   'no-new-symbol': 'off'
  // deprecated
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-object-constructor': 'error',
  // Unsupported by Oxlint yet: no-octal.
  //   'no-octal': 'error'
  // Unsupported by Oxlint yet: no-octal-escape.
  //   'no-octal-escape': 'error'
  'no-param-reassign': [
    'error',
    {
      props: false,
    },
  ],
  // Unsupported by Oxlint yet: no-path-concat.
  //   'no-path-concat': 'error'
  'no-plusplus': 'off',
  // Unsupported by Oxlint yet: no-process-env.
  //   'no-process-env': 'off'
  // Unsupported by Oxlint yet: no-process-exit.
  //   'no-process-exit': 'off'
  'no-promise-executor-return': 'error',
  'no-proto': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': 'error',
  'no-regex-spaces': 'error',
  'no-restricted-exports': [
    'error',
    {
      restrictedNamedExports: ['default', 'then'],
    },
  ],
  'no-restricted-globals': [
    'error',
    {
      name: 'isFinite',
      message: 'Use Number.isFinite instead.',
    },
    {
      name: 'isNaN',
      message: 'Use Number.isNaN instead.',
    },
    ...confusingBrowserGlobals.map((name) => ({
      name,
      message: `Use window.${name} instead.`,
    })),
  ],
  'no-restricted-imports': [
    'off',
    {
      paths: [],
      patterns: [],
    },
  ],
  // Unsupported by Oxlint yet: no-restricted-modules.
  //   'no-restricted-modules': 'off'
  'no-restricted-properties': [
    'error',
    {
      object: 'arguments',
      property: 'callee',
      message: 'arguments.callee is deprecated',
    },
    {
      object: 'global',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'self',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'window',
      property: 'isFinite',
      message: 'Please use Number.isFinite instead',
    },
    {
      object: 'global',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'self',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      object: 'window',
      property: 'isNaN',
      message: 'Please use Number.isNaN instead',
    },
    {
      property: '__defineGetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      property: '__defineSetter__',
      message: 'Please use Object.defineProperty instead.',
    },
    {
      object: 'Math',
      property: 'pow',
      message: 'Use the exponentiation operator (**) instead.',
    },
  ],
  // Unsupported by Oxlint yet: no-restricted-syntax.
  //   'no-restricted-syntax': [
  //     'error',
  //     {
  //       selector: 'LabeledStatement',
  //       message:
  //         'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
  //     },
  //     {
  //       selector: 'WithStatement',
  //       message:
  //         '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
  //     },
  //   ]
  'no-return-assign': ['error', 'always'],
  // Unsupported by Oxlint yet: no-return-await.
  //   'no-return-await': 'error'
  'no-shadow': 'error',
  'no-shadow-restricted-names': 'error',
  'no-script-url': 'error',
  'no-self-assign': [
    'error',
    {
      props: true,
    },
  ],
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-setter-return': 'error',
  'no-sparse-arrays': 'error',
  // Unsupported by Oxlint yet: no-sync.
  //   'no-sync': 'off'
  'no-template-curly-in-string': 'error',
  'no-ternary': 'off',
  'no-this-before-super': 'error',
  'no-throw-literal': 'error',
  'no-unassigned-vars': 'error',
  'no-undef': 'error',
  // Unsupported by Oxlint yet: no-undef-init.
  //   'no-undef-init': 'error'
  'no-undefined': 'off',
  'no-underscore-dangle': [
    'error',
    {
      allow: [],
      allowAfterThis: false,
      allowAfterSuper: false,
      enforceInMethodNames: true,
    },
  ],
  'no-unexpected-multiline': 'error',
  'no-unmodified-loop-condition': 'off',
  'no-unneeded-ternary': [
    'error',
    {
      defaultAssignment: false,
    },
  ],
  'no-unreachable': 'error',
  'no-unreachable-loop': [
    'error',
    {
      ignore: [],
    },
  ],
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'no-unsafe-optional-chaining': [
    'error',
    {
      disallowArithmeticOperators: true,
    },
  ],
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],
  'no-unused-labels': 'error',
  'no-unused-private-class-members': 'error',
  'no-unused-vars': [
    'error',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
  ],
  'no-use-before-define': [
    'error',
    { functions: true, classes: true, variables: true },
  ],
  'no-useless-assignment': 'error',
  'no-useless-backreference': 'error',
  'no-useless-call': 'off',
  'no-useless-catch': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-escape': 'error',
  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false,
    },
  ],
  'no-useless-return': 'error',
  'no-var': 'error',
  'no-void': [
    'error',
    {
      allowAsStatement: true,
    },
  ],
  'no-warning-comments': [
    'off',
    {
      terms: ['todo', 'fixme', 'xxx'],
      location: 'start',
    },
  ],
  'no-with': 'error',
  'object-shorthand': [
    'error',
    'always',
    {
      ignoreConstructors: false,
      avoidQuotes: true,
    },
  ],
  // Unsupported by Oxlint yet: one-var.
  //   'one-var': ['error', 'never']
  'operator-assignment': ['error', 'always'],
  // Unsupported by Oxlint yet: padding-line-between-statements.
  //   'padding-line-between-statements': 'off'
  // deprecated
  'prefer-arrow-callback': [
    'error',
    {
      allowNamedFunctions: false,
      allowUnboundThis: true,
    },
  ],
  'prefer-const': [
    'error',
    {
      destructuring: 'any',
      ignoreReadBeforeAssign: true,
    },
  ],
  'prefer-destructuring': [
    'error',
    {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: false,
      },
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  'prefer-exponentiation-operator': 'error',
  'prefer-named-capture-group': 'off',
  'prefer-numeric-literals': 'error',
  'prefer-object-has-own': 'error',
  'prefer-object-spread': 'error',
  'prefer-promise-reject-errors': [
    'error',
    {
      allowEmptyReject: true,
    },
  ],
  // Unsupported by Oxlint yet: prefer-reflect.
  //   'prefer-reflect': 'off'
  'prefer-regex-literals': [
    'error',
    {
      disallowRedundantWrapping: true,
    },
  ],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'preserve-caught-error': 'off',
  'radix': 'error',
  // Unsupported by Oxlint yet: require-atomic-updates.
  //   'require-atomic-updates': 'off'
  'require-await': 'off',
  'require-unicode-regexp': 'off',
  'require-yield': 'error',
  // Unsupported by Oxlint yet: rest-spread-spacing.
  //   'rest-spread-spacing': ['error', 'never']
  'sort-imports': [
    'error',
    {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      allowSeparatedGroups: false,
    },
  ],
  'sort-keys': 'off',
  'sort-vars': 'off',
  // Unsupported by Oxlint yet: spaced-comment.
  //   'spaced-comment': [
  //     'error',
  //     'always',
  //     {
  //       line: {
  //         exceptions: ['-', '+'],
  //         markers: ['=', '!', '/'],
  //       },
  //       block: {
  //         exceptions: ['-', '+'],
  //         markers: ['=', '!', ':', '::'],
  //         balanced: true,
  //       },
  //     },
  //   ]
  // Unsupported by Oxlint yet: strict.
  //   'strict': ['error', 'never']
  'symbol-description': 'error',
  // Unsupported by Oxlint yet: template-curly-spacing.
  //   'template-curly-spacing': 'error'
  'unicode-bom': ['error', 'never'],
  'use-isnan': 'error',
  'valid-typeof': [
    'error',
    {
      requireStringLiterals: true,
    },
  ],
  'vars-on-top': 'error',
  // Unsupported by Oxlint yet: wrap-iife.
  //   'wrap-iife': [
  //     'error',
  //     'outside',
  //     {
  //       functionPrototypeMethods: false,
  //     },
  //   ]
  // Unsupported by Oxlint yet: yield-star-spacing.
  //   'yield-star-spacing': ['error', 'after']
  'yoda': ['error', 'never'],
} satisfies Rules;
