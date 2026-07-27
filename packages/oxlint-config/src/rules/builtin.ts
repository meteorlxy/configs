import confusingBrowserGlobals from 'confusing-browser-globals';
import type { DummyRuleMap } from 'oxlint';

/**
 * Built-in rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const builtinRules = {
  'accessor-pairs': [
    'off',
    {
      enforceForClassMembers: true,
      enforceForTSTypes: false,
      getWithoutSet: false,
      setWithoutGet: true,
    },
  ],
  'array-callback-return': [
    'error',
    {
      allowImplicit: true,
      allowVoid: false,
      checkForEach: false,
    },
  ],
  'arrow-body-style': [
    'off',
    'as-needed',
    {
      requireReturnForObjectLiteral: false,
    },
  ],
  'block-scoped-var': 'error',
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
      enforceForClassFields: true,
      exceptMethods: [],
      ignoreOverrideMethods: false,
    },
  ],
  'complexity': ['off', 20],
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
  'func-style': [
    'off',
    'expression',
    {
      allowArrowFunctions: false,
      allowTypeAnnotation: false,
    },
  ],
  'getter-return': [
    'error',
    {
      allowImplicit: true,
    },
  ],
  'grouped-accessor-pairs': 'error',
  'guard-for-in': 'off',
  'id-length': [
    'off',
    {
      checkGeneric: true,
      exceptions: [],
      max: Number.MAX_SAFE_INTEGER,
      min: 2,
      properties: 'always',
    },
  ],
  'id-match': 'off',
  'init-declarations': 'off',
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
  'new-cap': [
    'error',
    {
      capIsNew: false,
      capIsNewExceptions: [],
      newIsCap: true,
      newIsCapExceptions: [],
      properties: true,
    },
  ],
  'no-alert': 'warn',
  'no-array-constructor': 'error',
  'no-async-promise-executor': 'error',
  'no-await-in-loop': 'off',
  'no-bitwise': [
    'off',
    {
      allow: [],
      int32Hint: false,
    },
  ],
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-class-assign': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': ['error', 'always'],
  'no-console': [
    'warn',
    {
      allow: [],
    },
  ],
  'no-const-assign': 'error',
  'no-constant-binary-expression': [
    'warn',
    {
      checkRelationalComparisons: true,
    },
  ],
  'no-constant-condition': [
    'warn',
    {
      checkLoops: 'allExceptWhileTrue',
    },
  ],
  'no-constructor-return': 'error',
  'no-continue': 'off',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-delete-var': 'warn',
  'no-div-regex': 'off',
  'no-dupe-class-members': 'error',
  'no-dupe-else-if': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-duplicate-imports': [
    'off',
    {
      allowSeparateTypeImports: false,
      includeExports: false,
    },
  ],
  'no-else-return': [
    'error',
    {
      allowElseIf: false,
    },
  ],
  'no-empty': [
    'error',
    {
      allowEmptyCatch: false,
    },
  ],
  'no-empty-character-class': 'error',
  'no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],
  'no-empty-pattern': [
    'error',
    {
      allowObjectPatternsAsParameters: false,
    },
  ],
  'no-empty-static-block': 'error',
  'no-eq-null': 'off',
  'no-eval': [
    'error',
    {
      allowIndirect: true,
    },
  ],
  'no-ex-assign': 'error',
  'no-extend-native': [
    'error',
    {
      exceptions: [],
    },
  ],
  'no-extra-bind': 'error',
  'no-extra-boolean-cast': [
    'error',
    {
      enforceForInnerExpressions: false,
    },
  ],
  'no-extra-label': 'error',
  'no-fallthrough': [
    'error',
    {
      allowEmptyCase: false,
      reportUnusedFallthroughComment: false,
    },
  ],
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
      disallowTemplateShorthand: false,
      number: true,
      string: true,
      allow: [],
    },
  ],
  'no-implicit-globals': [
    'off',
    {
      lexicalBindings: false,
    },
  ],
  'no-implied-eval': 'error',
  'no-import-assign': 'error',
  'no-inline-comments': 'off',
  'no-inner-declarations': 'error',
  'no-invalid-regexp': [
    'error',
    {
      allowConstructorFlags: [],
    },
  ],
  'no-irregular-whitespace': [
    'error',
    {
      skipComments: true,
      skipJSXText: true,
      skipRegExps: true,
      skipStrings: true,
      skipTemplates: true,
    },
  ],
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
      detectObjects: false,
      enforceConst: true,
      ignore: [],
      ignoreArrayIndexes: true,
      ignoreClassFieldInitialValues: false,
      ignoreDefaultValues: false,
      ignoreEnums: false,
      ignoreNumericLiteralTypes: false,
      ignoreReadonlyClassProperties: false,
      ignoreTypeIndexes: false,
    },
  ],
  'no-misleading-character-class': [
    'error',
    {
      allowEscape: false,
    },
  ],
  'no-multi-assign': [
    'error',
    {
      ignoreNonDeclaration: false,
    },
  ],
  'no-multi-str': 'error',
  'no-negated-condition': 'off',
  'no-nested-ternary': 'off',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-native-nonconstructor': 'error',
  'no-new-wrappers': 'error',
  'no-nonoctal-decimal-escape': 'error',
  'no-obj-calls': 'error',
  'no-object-constructor': 'error',
  'no-param-reassign': [
    'error',
    {
      ignorePropertyModificationsFor: [],
      props: false,
    },
  ],
  'no-plusplus': [
    'off',
    {
      allowForLoopAfterthoughts: false,
    },
  ],
  'no-promise-executor-return': [
    'error',
    {
      allowVoid: false,
    },
  ],
  'no-proto': 'error',
  'no-prototype-builtins': 'error',
  'no-redeclare': [
    'error',
    {
      builtinGlobals: true,
    },
  ],
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
  'no-return-assign': ['error', 'always'],
  'no-script-url': 'error',
  'no-self-assign': [
    'error',
    {
      props: true,
    },
  ],
  'no-self-compare': 'error',
  'no-sequences': [
    'error',
    {
      allowInParentheses: true,
    },
  ],
  'no-setter-return': 'error',
  'no-shadow': [
    'error',
    {
      allow: [],
      builtinGlobals: false,
      hoist: 'functions-and-types',
      ignoreFunctionTypeParameterNameValueShadow: true,
      ignoreOnInitialization: false,
      ignoreTypeValueShadow: true,
    },
  ],
  'no-shadow-restricted-names': [
    'error',
    {
      reportGlobalThis: true,
    },
  ],
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-ternary': 'off',
  'no-this-before-super': 'error',
  'no-throw-literal': 'error',
  'no-unassigned-vars': 'error',
  'no-undef': [
    'error',
    {
      typeof: false,
    },
  ],
  'no-undefined': 'off',
  'no-underscore-dangle': [
    'error',
    {
      allow: [],
      allowAfterSuper: false,
      allowAfterThis: false,
      allowAfterThisConstructor: false,
      allowFunctionParams: true,
      allowInArrayDestructuring: true,
      allowInObjectDestructuring: true,
      allowInUsingDeclarations: false,
      enforceInClassFields: false,
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
  'no-unsafe-negation': [
    'error',
    {
      enforceForOrderingRelations: false,
    },
  ],
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
      allowTaggedTemplates: false,
      allowTernary: false,
      enforceForJSX: false,
      ignoreDirectives: false,
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
  'no-useless-computed-key': [
    'error',
    {
      enforceForClassMembers: true,
    },
  ],
  'no-useless-concat': 'error',
  'no-useless-constructor': 'error',
  'no-useless-escape': [
    'error',
    {
      allowRegexCharacters: [],
    },
  ],
  'no-useless-rename': [
    'error',
    {
      ignoreDestructuring: false,
      ignoreExport: false,
      ignoreImport: false,
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
      avoidExplicitReturnArrows: false,
      avoidQuotes: true,
      ignoreConstructors: false,
    },
  ],
  'operator-assignment': ['error', 'always'],
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
      enforceForDeclarationWithTypeAnnotation: false,
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
  'prefer-regex-literals': [
    'error',
    {
      disallowRedundantWrapping: true,
    },
  ],
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'preserve-caught-error': [
    'off',
    {
      requireCatchParameter: false,
    },
  ],
  'radix': 'error',
  'require-await': 'off',
  'require-unicode-regexp': 'off',
  'require-yield': 'error',
  'sort-imports': [
    'error',
    {
      allowSeparatedGroups: false,
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
    },
  ],
  'sort-keys': 'off',
  'sort-vars': [
    'off',
    {
      ignoreCase: false,
    },
  ],
  'symbol-description': 'error',
  'unicode-bom': ['error', 'never'],
  'use-isnan': [
    'error',
    {
      enforceForIndexOf: false,
      enforceForSwitchCase: true,
    },
  ],
  'valid-typeof': [
    'error',
    {
      requireStringLiterals: true,
    },
  ],
  'vars-on-top': 'error',
  'yoda': [
    'error',
    'never',
    {
      exceptRange: false,
      onlyEquality: false,
    },
  ],
} satisfies DummyRuleMap;
