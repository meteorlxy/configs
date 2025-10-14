import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import confusingBrowserGlobals from 'confusing-browser-globals';

/**
 * ESLint built-in rules
 *
 * @see https://eslint.org/docs/latest/rules/
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
  'arrow-parens': ['error', 'always'],
  'arrow-spacing': [
    'error',
    {
      before: true,
      after: true,
    },
  ],
  'block-scoped-var': 'error',
  'camelcase': ['error', { properties: 'never', ignoreDestructuring: false }],
  'callback-return': 'off',
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
  'consistent-this': 'off',
  'consistent-return': 'error',
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
  'dot-location': ['error', 'property'],
  'dot-notation': [
    'error',
    {
      allowKeywords: true,
    },
  ],
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
  'generator-star-spacing': [
    'error',
    {
      before: false,
      after: true,
    },
  ],
  'getter-return': [
    'error',
    {
      allowImplicit: true,
    },
  ],
  'global-require': 'off',
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'off',
  'handle-callback-err': 'off',
  'id-blacklist': 'off', // deprecated
  'id-denylist': 'off',
  'id-length': 'off',
  'id-match': 'off',
  'init-declarations': 'off',
  'line-comment-position': [
    'off',
    {
      position: 'above',
      ignorePattern: '',
      applyDefaultPatterns: true,
    },
  ],
  'lines-around-directive': [
    'error',
    {
      before: 'always',
      after: 'always',
    },
  ],
  'lines-between-class-members': [
    'error',
    'always',
    {
      exceptAfterSingleLine: false,
    },
  ],
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
  'multiline-comment-style': ['off', 'starred-block'],
  'new-cap': [
    'error',
    {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: [],
    },
  ],
  'newline-after-var': 'off',
  'newline-before-return': 'off',
  'no-alert': 'warn',
  'no-array-constructor': 'error',
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'off',
  'no-bitwise': 'off',
  'no-buffer-constructor': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-catch-shadow': 'off',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': ['error', 'always'],
  'no-confusing-arrow': [
    'error',
    {
      allowParens: true,
    },
  ],
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
  'no-dupe-args': 'error',
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
  'no-floating-decimal': 'error',
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
  'no-invalid-this': 'off',
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
  'no-mixed-requires': ['off', false],
  'no-multi-assign': 'error',
  'no-multi-spaces': [
    'error',
    {
      ignoreEOLComments: false,
    },
  ],
  'no-multi-str': 'error',
  'no-native-reassign': 'off',
  'no-negated-condition': 'off',
  'no-negated-in-lhs': 'off',
  'no-nested-ternary': 'off',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-new-object': 'error',
  'no-new-require': 'error',
  'no-new-symbol': 'off', // deprecated
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-object-constructor': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': [
    'error',
    {
      props: false,
    },
  ],
  'no-path-concat': 'error',
  'no-plusplus': 'off',
  'no-process-env': 'off',
  'no-process-exit': 'off',
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
  'no-restricted-modules': 'off',
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
  'no-restricted-syntax': [
    'error',
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
    },
  ],
  'no-return-assign': ['error', 'always'],
  'no-return-await': 'error',
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
  'no-sync': 'off',
  'no-template-curly-in-string': 'error',
  'no-ternary': 'off',
  'no-this-before-super': 'error',
  'no-throw-literal': 'error',
  'no-unassigned-vars': 'error',
  'no-undef': 'error',
  'no-undef-init': 'error',
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
  'one-var': ['error', 'never'],
  'operator-assignment': ['error', 'always'],
  'padding-line-between-statements': 'off', // deprecated
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
  'prefer-reflect': 'off',
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
  'require-atomic-updates': 'off',
  'require-await': 'off',
  'require-unicode-regexp': 'off',
  'require-yield': 'error',
  'rest-spread-spacing': ['error', 'never'],
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
  'spaced-comment': [
    'error',
    'always',
    {
      line: {
        exceptions: ['-', '+'],
        markers: ['=', '!', '/'],
      },
      block: {
        exceptions: ['-', '+'],
        markers: ['=', '!', ':', '::'],
        balanced: true,
      },
    },
  ],
  'strict': ['error', 'never'],
  'symbol-description': 'error',
  'template-curly-spacing': 'error',
  'unicode-bom': ['error', 'never'],
  'use-isnan': 'error',
  'valid-typeof': [
    'error',
    {
      requireStringLiterals: true,
    },
  ],
  'vars-on-top': 'error',
  'wrap-iife': [
    'error',
    'outside',
    {
      functionPrototypeMethods: false,
    },
  ],
  'yield-star-spacing': ['error', 'after'],
  'yoda': ['error', 'never'],
} satisfies FlatConfig.Rules;
