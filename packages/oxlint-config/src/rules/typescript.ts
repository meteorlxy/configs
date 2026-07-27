import type { DummyRuleMap } from 'oxlint';

/**
 * typescript rules.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const typescriptRules = {
  'typescript/adjacent-overload-signatures': 'off',
  'typescript/array-type': [
    'off',
    {
      default: 'array',
    },
  ],
  'typescript/await-thenable': 'warn',
  'typescript/ban-ts-comment': [
    'off',
    {
      minimumDescriptionLength: 3,
    },
  ],
  'typescript/ban-tslint-comment': 'off',
  'typescript/ban-types': 'off',
  'typescript/class-literal-property-style': 'off',
  'typescript/consistent-generic-constructors': 'off',
  'typescript/consistent-indexed-object-style': 'off',
  'typescript/consistent-return': [
    'off',
    {
      treatUndefinedAsUnspecified: false,
    },
  ],
  'typescript/consistent-type-assertions': 'off',
  'typescript/consistent-type-definitions': 'off',
  'typescript/consistent-type-exports': [
    'error',
    {
      fixMixedExportsWithInlineTypeSpecifier: false,
    },
  ],
  'typescript/consistent-type-imports': [
    'error',
    {
      disallowTypeAnnotations: true,
      fixStyle: 'separate-type-imports',
      prefer: 'type-imports',
    },
  ],
  'typescript/dot-notation': [
    'error',
    {
      allowIndexSignaturePropertyAccess: false,
      allowKeywords: true,
      allowPattern: '',
      allowPrivateClassPropertyAccess: false,
      allowProtectedClassPropertyAccess: false,
    },
  ],
  'typescript/explicit-function-return-type': [
    'warn',
    {
      allowConciseArrowFunctionExpressionsStartingWithVoid: false,
      allowDirectConstAssertionInArrowFunctions: true,
      allowExpressions: true,
      allowFunctionsWithoutTypeParameters: false,
      allowHigherOrderFunctions: true,
      allowIIFEs: false,
      allowTypedFunctionExpressions: true,
      allowedNames: [],
    },
  ],
  'typescript/explicit-member-accessibility': [
    'warn',
    {
      ignoredMethodNames: [],
    },
  ],
  'typescript/explicit-module-boundary-types': [
    'warn',
    {
      allowArgumentsExplicitlyTypedAsAny: false,
      allowDirectConstAssertionInArrowFunctions: true,
      allowHigherOrderFunctions: true,
      allowOverloadFunctions: false,
      allowTypedFunctionExpressions: true,
      allowedNames: [],
    },
  ],
  'typescript/method-signature-style': ['off', 'method'],
  'typescript/no-array-delete': 'warn',
  'typescript/no-base-to-string': [
    'warn',
    {
      checkUnknown: false,
      ignoredTypeNames: ['Error', 'RegExp', 'URL', 'URLSearchParams'],
    },
  ],
  'typescript/no-confusing-non-null-assertion': 'off',
  'typescript/no-confusing-void-expression': [
    'off',
    {
      ignoreArrowShorthand: false,
      ignoreVoidOperator: false,
      ignoreVoidReturningFunctions: false,
    },
  ],
  'typescript/no-deprecated': [
    'off',
    {
      allow: [],
    },
  ],
  'typescript/no-duplicate-enum-values': 'warn',
  'typescript/no-duplicate-type-constituents': [
    'error',
    {
      ignoreIntersections: false,
      ignoreUnions: false,
    },
  ],
  'typescript/no-dynamic-delete': 'off',
  'typescript/no-empty-interface': [
    'off',
    {
      allowSingleExtends: false,
    },
  ],
  'typescript/no-empty-object-type': [
    'off',
    {
      allowInterfaces: 'never',
      allowObjectTypes: 'never',
    },
  ],
  'typescript/no-explicit-any': [
    'off',
    {
      fixToUnknown: false,
      ignoreRestArgs: false,
    },
  ],
  'typescript/no-extra-non-null-assertion': 'warn',
  'typescript/no-extraneous-class': [
    'off',
    {
      allowConstructorOnly: false,
      allowEmpty: false,
      allowStaticOnly: false,
      allowWithDecorator: false,
    },
  ],
  'typescript/no-floating-promises': [
    'warn',
    {
      allowForKnownSafeCalls: [],
      allowForKnownSafePromises: [],
      checkThenables: false,
      ignoreIIFE: false,
      ignoreVoid: true,
    },
  ],
  'typescript/no-for-in-array': 'warn',
  'typescript/no-implied-eval': 'error',
  'typescript/no-import-type-side-effects': 'error',
  'typescript/no-inferrable-types': [
    'off',
    {
      ignoreParameters: false,
      ignoreProperties: false,
    },
  ],
  'typescript/no-invalid-void-type': [
    'off',
    {
      allowAsThisParameter: false,
      allowInGenericTypeArguments: true,
    },
  ],
  'typescript/no-meaningless-void-operator': [
    'warn',
    {
      checkNever: false,
    },
  ],
  'typescript/no-misused-new': 'warn',
  'typescript/no-misused-promises': [
    'off',
    {
      checksConditionals: true,
      checksSpreads: true,
      checksVoidReturn: true,
    },
  ],
  'typescript/no-misused-spread': [
    'warn',
    {
      allow: [],
    },
  ],
  'typescript/no-mixed-enums': 'off',
  'typescript/no-namespace': [
    'off',
    {
      allowDeclarations: false,
      allowDefinitionFiles: true,
    },
  ],
  'typescript/no-non-null-asserted-nullish-coalescing': 'off',
  'typescript/no-non-null-asserted-optional-chain': 'warn',
  'typescript/no-non-null-assertion': 'off',
  'typescript/no-redundant-type-constituents': 'error',
  'typescript/no-require-imports': [
    'error',
    {
      allowAsImport: false,
    },
  ],
  'typescript/no-restricted-types': [
    'off',
    {
      types: {
        OldType: "Don't use OldType because it is unsafe",
        OldAPI: {
          message: 'Use NewAPI instead',
          fixWith: 'NewAPI',
        },
        SoonToBeOldAPI: {
          message: 'Use NewAPI instead',
          suggest: ['NewAPIOne', 'NewAPITwo'],
        },
      },
    },
  ],
  'typescript/no-this-alias': [
    'warn',
    {
      allowDestructuring: true,
      allowedNames: [],
    },
  ],
  'typescript/no-unnecessary-boolean-literal-compare': [
    'off',
    {
      allowComparingNullableBooleansToFalse: true,
      allowComparingNullableBooleansToTrue: true,
    },
  ],
  'typescript/no-unnecessary-condition': [
    'off',
    {
      allowConstantLoopConditions: 'never',
      checkTypePredicates: false,
    },
  ],
  'typescript/no-unnecessary-parameter-property-assignment': 'error',
  'typescript/no-unnecessary-qualifier': 'off',
  'typescript/no-unnecessary-template-expression': 'off',
  'typescript/no-unnecessary-type-arguments': 'off',
  'typescript/no-unnecessary-type-assertion': [
    'warn',
    {
      checkLiteralConstAssertions: false,
      typesToIgnore: [],
    },
  ],
  'typescript/no-unnecessary-type-constraint': 'off',
  'typescript/no-unnecessary-type-conversion': 'warn',
  'typescript/no-unnecessary-type-parameters': 'off',
  'typescript/no-unsafe-argument': 'warn',
  'typescript/no-unsafe-assignment': 'warn',
  'typescript/no-unsafe-call': 'off',
  'typescript/no-unsafe-declaration-merging': 'warn',
  'typescript/no-unsafe-enum-comparison': 'off',
  'typescript/no-unsafe-function-type': 'off',
  'typescript/no-unsafe-member-access': [
    'warn',
    {
      allowOptionalChaining: false,
    },
  ],
  'typescript/no-unsafe-return': 'warn',
  'typescript/no-unsafe-type-assertion': 'off',
  'typescript/no-unsafe-unary-minus': 'error',
  'typescript/no-useless-default-assignment': 'warn',
  'typescript/no-useless-empty-export': 'warn',
  'typescript/no-var-requires': 'error',
  'typescript/no-wrapper-object-types': 'warn',
  'typescript/non-nullable-type-assertion-style': 'off',
  'typescript/only-throw-error': [
    'error',
    {
      allow: [],
      allowRethrowing: true,
      allowThrowingAny: true,
      allowThrowingUnknown: true,
    },
  ],
  'typescript/parameter-properties': [
    'off',
    {
      allow: [],
      prefer: 'class-property',
    },
  ],
  'typescript/prefer-as-const': 'warn',
  'typescript/prefer-enum-initializers': 'error',
  'typescript/prefer-find': 'error',
  'typescript/prefer-for-of': 'off',
  'typescript/prefer-function-type': 'off',
  'typescript/prefer-includes': 'off',
  'typescript/prefer-literal-enum-member': [
    'off',
    {
      allowBitwiseExpressions: false,
    },
  ],
  'typescript/prefer-namespace-keyword': 'warn',
  'typescript/prefer-nullish-coalescing': [
    'error',
    {
      ignoreBooleanCoercion: false,
      ignoreConditionalTests: true,
      ignoreIfStatements: false,
      ignoreMixedLogicalExpressions: false,
      ignorePrimitives: false,
      ignoreTernaryTests: false,
    },
  ],
  'typescript/prefer-optional-chain': [
    'off',
    {
      allowPotentiallyUnsafeFixesThatModifyTheReturnTypeIKnowWhatImDoing: false,
      checkAny: true,
      checkBigInt: true,
      checkBoolean: true,
      checkNumber: true,
      checkString: true,
      checkUnknown: true,
      requireNullish: false,
    },
  ],
  'typescript/prefer-promise-reject-errors': [
    'error',
    {
      allow: [],
      allowEmptyReject: true,
      allowThrowingAny: false,
      allowThrowingUnknown: false,
    },
  ],
  'typescript/prefer-readonly': [
    'error',
    {
      onlyInlineLambdas: false,
    },
  ],
  'typescript/prefer-readonly-parameter-types': [
    'off',
    {
      allow: [],
      checkParameterProperties: true,
      ignoreInferredTypes: false,
      treatMethodsAsReadonly: false,
    },
  ],
  'typescript/prefer-reduce-type-parameter': 'off',
  'typescript/prefer-regexp-exec': 'off',
  'typescript/prefer-return-this-type': 'off',
  'typescript/prefer-string-starts-ends-with': [
    'off',
    {
      allowSingleElementEquality: 'never',
    },
  ],
  'typescript/prefer-ts-expect-error': 'off',
  'typescript/promise-function-async': [
    'off',
    {
      allowAny: true,
      allowedPromiseNames: [],
      checkArrowFunctions: true,
      checkFunctionDeclarations: true,
      checkFunctionExpressions: true,
      checkMethodDeclarations: true,
    },
  ],
  'typescript/related-getter-setter-pairs': 'off',
  'typescript/require-array-sort-compare': [
    'error',
    {
      ignoreStringArrays: true,
    },
  ],
  'typescript/require-await': 'warn',
  'typescript/restrict-plus-operands': [
    'off',
    {
      allowAny: true,
      allowBoolean: true,
      allowNullish: true,
      allowNumberAndString: true,
      allowRegExp: true,
      skipCompoundAssignments: false,
    },
  ],
  'typescript/restrict-template-expressions': [
    'warn',
    {
      allow: [{ from: 'lib', name: ['Error', 'URL', 'URLSearchParams'] }],
      allowAny: true,
      allowArray: false,
      allowBoolean: true,
      allowNever: false,
      allowNullish: true,
      allowNumber: true,
      allowRegExp: true,
    },
  ],
  'typescript/return-await': ['error', 'in-try-catch'],
  'typescript/strict-boolean-expressions': [
    'off',
    {
      allowAny: false,
      allowNullableBoolean: false,
      allowNullableEnum: false,
      allowNullableNumber: false,
      allowNullableObject: true,
      allowNullableString: false,
      allowNumber: true,
      allowString: true,
    },
  ],
  'typescript/strict-void-return': [
    'off',
    {
      allowReturnAny: false,
    },
  ],
  'typescript/switch-exhaustiveness-check': [
    'error',
    {
      allowDefaultCaseForExhaustiveSwitch: true,
      considerDefaultExhaustiveForUnions: false,
      requireDefaultForNonUnion: false,
    },
  ],
  'typescript/triple-slash-reference': [
    'warn',
    {
      lib: 'always',
      path: 'never',
      types: 'prefer-import',
    },
  ],
  'typescript/unbound-method': [
    'warn',
    {
      ignoreStatic: false,
    },
  ],
  'typescript/unified-signatures': [
    'off',
    {
      ignoreDifferentlyNamedParameters: false,
      ignoreOverloadsWithDifferentJSDoc: false,
    },
  ],
  'typescript/use-unknown-in-catch-callback-variable': 'off',
} satisfies DummyRuleMap;
