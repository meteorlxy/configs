import tsPlugin from '@typescript-eslint/eslint-plugin';
import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';

export const typescriptRules = {
  ...tsPlugin.configs['strict-type-checked'].rules,
  ...tsPlugin.configs['stylistic-type-checked'].rules,

  // typescript shim rules for builtin rules
  '@typescript-eslint/class-methods-use-this': [
    'error',
    {
      exceptMethods: [],
    },
  ],
  '@typescript-eslint/consistent-return': 'off', // use noImplicitReturns instead
  '@typescript-eslint/default-param-last': 'error',
  '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
  '@typescript-eslint/no-array-constructor': 'error',
  '@typescript-eslint/no-empty-function': [
    'error',
    {
      allow: ['arrowFunctions', 'functions', 'methods'],
    },
  ],
  '@typescript-eslint/no-implied-eval': 'error',
  '@typescript-eslint/no-loss-of-precision': 'error',
  '@typescript-eslint/no-loop-func': 'error',
  '@typescript-eslint/no-magic-numbers': [
    'off',
    {
      ignore: [],
      ignoreArrayIndexes: true,
      enforceConst: true,
      detectObjects: false,
    },
  ],
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: false,
      allowTernary: false,
      allowTaggedTemplates: false,
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    'error',
    { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
  ],
  '@typescript-eslint/no-use-before-define': [
    'error',
    { functions: true, classes: true, variables: true },
  ],
  '@typescript-eslint/no-useless-constructor': 'error',

  // typescript rules
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/consistent-type-exports': 'error',
  '@typescript-eslint/explicit-function-return-type': [
    'warn',
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
    },
  ],
  '@typescript-eslint/explicit-member-accessibility': 'warn',
  '@typescript-eslint/explicit-module-boundary-types': 'warn',
  '@typescript-eslint/init-declarations': 'off',
  '@typescript-eslint/max-params': 'off',
  '@typescript-eslint/member-ordering': [
    'off',
    {
      default: {
        order: 'natural',
      },
    },
  ],
  '@typescript-eslint/method-signature-style': ['off', 'method'],
  '@typescript-eslint/naming-convention': [
    'error',
    {
      selector: 'variable',
      modifiers: ['const', 'exported'],
      types: ['array', 'boolean', 'number', 'string'],
      format: ['UPPER_CASE'],
    },
    {
      selector: 'variable',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    },
    {
      selector: 'function',
      format: ['camelCase', 'PascalCase'],
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
  ],
  '@typescript-eslint/no-dupe-class-members': 'off', // checked by typescript
  '@typescript-eslint/no-duplicate-type-constituents': [
    'error',
    { ignoreIntersections: false, ignoreUnions: false },
  ],
  '@typescript-eslint/no-empty-interface': 'off', // deprecated
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-inferrable-types': [
    'off',
    { ignoreParameters: false, ignoreProperties: false },
  ],
  '@typescript-eslint/no-invalid-this': 'off', // checked by typescript
  '@typescript-eslint/no-invalid-void-type': 'off', // @see https://github.com/typescript-eslint/typescript-eslint/issues/8113
  '@typescript-eslint/no-redeclare': 'off', // checked by typescript
  '@typescript-eslint/no-redundant-type-constituents': 'error',
  '@typescript-eslint/no-require-imports': ['error', { allow: [] }],
  '@typescript-eslint/no-restricted-imports': [
    'off',
    { paths: [], patterns: [] },
  ],
  '@typescript-eslint/no-restricted-types': [
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
  '@typescript-eslint/no-type-alias': 'off', // deprecated
  '@typescript-eslint/no-unnecessary-parameter-property-assignment': 'error',
  '@typescript-eslint/no-unnecessary-qualifier': 'off',
  '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
  '@typescript-eslint/no-unsafe-assignment': 'warn',
  '@typescript-eslint/no-unsafe-unary-minus': 'error',
  '@typescript-eslint/no-useless-empty-export': 'off',
  '@typescript-eslint/no-var-requires': ['error', { allow: [] }],
  '@typescript-eslint/only-throw-error': 'error',
  '@typescript-eslint/parameter-properties': [
    'off',
    { allow: [], prefer: 'class-property' },
  ],
  '@typescript-eslint/prefer-destructuring': [
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
      enforceForDeclarationWithTypeAnnotation: false,
    },
  ],
  '@typescript-eslint/prefer-enum-initializers': 'error',
  '@typescript-eslint/prefer-find': 'error',
  '@typescript-eslint/prefer-nullish-coalescing': [
    'error',
    {
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
      ignoreConditionalTests: true,
      ignoreTernaryTests: false,
      ignoreMixedLogicalExpressions: false,
      ignorePrimitives: {
        bigint: false,
        boolean: false,
        number: false,
        string: true,
      },
    },
  ],
  '@typescript-eslint/prefer-promise-reject-errors': [
    'error',
    { allowEmptyReject: true },
  ],
  '@typescript-eslint/prefer-readonly': ['error', { onlyInlineLambdas: false }],
  '@typescript-eslint/prefer-readonly-parameter-types': [
    'off',
    {
      allow: [],
      checkParameterProperties: true,
      ignoreInferredTypes: false,
      treatMethodsAsReadonly: false,
    },
  ],
  '@typescript-eslint/prefer-regexp-exec': 'off',
  '@typescript-eslint/prefer-ts-expect-error': 'off', // deprecated
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/require-array-sort-compare': [
    'error',
    { ignoreStringArrays: true },
  ],
  '@typescript-eslint/restrict-template-expressions': [
    'warn',
    {
      allowNumber: true,
      allowBoolean: true,
      allowAny: true,
      allowNullish: true,
      allowRegExp: true,
    },
  ],
  '@typescript-eslint/return-await': ['error', 'in-try-catch'],
  '@typescript-eslint/sort-type-constituents': [
    'error',
    {
      checkIntersections: true,
      checkUnions: true,
      groupOrder: [
        'named',
        'keyword',
        'operator',
        'literal',
        'function',
        'import',
        'conditional',
        'object',
        'tuple',
        'intersection',
        'union',
        'nullish',
      ],
    },
  ],
  '@typescript-eslint/strict-boolean-expressions': [
    'off',
    {
      allowString: true,
      allowNumber: true,
      allowNullableObject: true,
      allowNullableBoolean: false,
      allowNullableString: false,
      allowNullableNumber: false,
      allowNullableEnum: false,
      allowAny: false,
      allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing: false,
    },
  ],
  '@typescript-eslint/switch-exhaustiveness-check': [
    'error',
    {
      allowDefaultCaseForExhaustiveSwitch: true,
      requireDefaultForNonUnion: false,
    },
  ],
  '@typescript-eslint/typedef': [
    'off',
    {
      arrayDestructuring: false,
      arrowParameter: false,
      memberVariableDeclaration: false,
      objectDestructuring: false,
      parameter: false,
      propertyDeclaration: false,
      variableDeclaration: false,
      variableDeclarationIgnoreFunction: false,
    },
  ],
} satisfies FlatConfig.Rules;
