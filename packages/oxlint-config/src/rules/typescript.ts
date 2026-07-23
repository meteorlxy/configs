import type { Rules } from '../types';

/**
 * TypeScript rules migrated to Oxlint.
 *
 * @see https://oxc.rs/docs/guide/usage/linter/rules
 */
export const typescriptRules = {
  // Unsupported by Oxlint yet: spread configs are ESLint-only.
  //   ...tsPlugin.configs['strict-type-checked'].rules
  // Unsupported by Oxlint yet: spread configs are ESLint-only.
  //   ...tsPlugin.configs['stylistic-type-checked'].rules
  // Unsupported by Oxlint yet: typescript/class-methods-use-this.
  //   // typescript shim rules for builtin rules
  //   'typescript/class-methods-use-this': [
  //     'error',
  //     {
  //       exceptMethods: [],
  //     },
  //   ]
  'typescript/consistent-return': 'off',
  // Unsupported by Oxlint yet: typescript/default-param-last.
  //  // use noImplicitReturns instead
  //   'typescript/default-param-last': 'error'
  'typescript/dot-notation': ['error', { allowKeywords: true }],
  // Unsupported by Oxlint yet: typescript/no-array-constructor.
  //   'typescript/no-array-constructor': 'error'
  // Unsupported by Oxlint yet: typescript/no-empty-function.
  //   'typescript/no-empty-function': [
  //     'error',
  //     {
  //       allow: ['arrowFunctions', 'functions', 'methods'],
  //     },
  //   ]
  'typescript/no-implied-eval': 'error',
  // Unsupported by Oxlint yet: typescript/no-loss-of-precision.
  //   'typescript/no-loss-of-precision': 'error'
  // Unsupported by Oxlint yet: typescript/no-loop-func.
  //   'typescript/no-loop-func': 'error'
  // Unsupported by Oxlint yet: typescript/no-magic-numbers.
  //   'typescript/no-magic-numbers': [
  //     'off',
  //     {
  //       ignore: [],
  //       ignoreArrayIndexes: true,
  //       enforceConst: true,
  //       detectObjects: false,
  //     },
  //   ]
  // Unsupported by Oxlint yet: typescript/no-shadow.
  //   'typescript/no-shadow': 'error'
  // Unsupported by Oxlint yet: typescript/no-unused-expressions.
  //   'typescript/no-unused-expressions': [
  //     'error',
  //     {
  //       allowShortCircuit: false,
  //       allowTernary: false,
  //       allowTaggedTemplates: false,
  //     },
  //   ]
  // Unsupported by Oxlint yet: typescript/no-unused-private-class-members.
  //   'typescript/no-unused-private-class-members': 'error'
  // Unsupported by Oxlint yet: typescript/no-unused-vars.
  //   'typescript/no-unused-vars': [
  //     'error',
  //     { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
  //   ]
  // Unsupported by Oxlint yet: typescript/no-use-before-define.
  //   'typescript/no-use-before-define': [
  //     'error',
  //     { functions: true, classes: true, variables: true },
  //   ]
  // Unsupported by Oxlint yet: typescript/no-useless-constructor.
  //   'typescript/no-useless-constructor': 'error'
  // typescript rules
  'typescript/consistent-type-imports': 'error',
  'typescript/consistent-type-exports': 'error',
  'typescript/explicit-function-return-type': [
    'warn',
    {
      allowExpressions: true,
      allowTypedFunctionExpressions: true,
      allowHigherOrderFunctions: true,
    },
  ],
  'typescript/explicit-member-accessibility': 'warn',
  'typescript/explicit-module-boundary-types': 'warn',
  // Unsupported by Oxlint yet: typescript/init-declarations.
  //   'typescript/init-declarations': 'off'
  // Unsupported by Oxlint yet: typescript/max-params.
  //   'typescript/max-params': 'off'
  // Unsupported by Oxlint yet: typescript/member-ordering.
  //   'typescript/member-ordering': [
  //     'off',
  //     {
  //       default: {
  //         order: 'natural',
  //       },
  //     },
  //   ]
  'typescript/method-signature-style': ['off', 'method'],
  // Unsupported by Oxlint yet: typescript/naming-convention.
  //   'typescript/naming-convention': [
  //     'error',
  //     {
  //       selector: 'variable',
  //       modifiers: ['const', 'exported'],
  //       types: ['array', 'boolean', 'number', 'string'],
  //       format: ['UPPER_CASE'],
  //     },
  //     {
  //       selector: 'variable',
  //       format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
  //     },
  //     {
  //       selector: 'function',
  //       format: ['camelCase', 'PascalCase'],
  //     },
  //     {
  //       selector: 'typeLike',
  //       format: ['PascalCase'],
  //     },
  //   ]
  // Unsupported by Oxlint yet: typescript/no-dupe-class-members.
  //   'typescript/no-dupe-class-members': 'off'
  // checked by typescript
  'typescript/no-duplicate-type-constituents': [
    'error',
    { ignoreIntersections: false, ignoreUnions: false },
  ],
  'typescript/no-empty-interface': 'off',
  // deprecated
  'typescript/no-import-type-side-effects': 'error',
  'typescript/no-inferrable-types': [
    'off',
    { ignoreParameters: false, ignoreProperties: false },
  ],
  // Unsupported by Oxlint yet: typescript/no-invalid-this.
  //   'typescript/no-invalid-this': 'off'
  // checked by typescript
  'typescript/no-invalid-void-type': 'off',
  // Unsupported by Oxlint yet: typescript/no-redeclare.
  //  // @see https://github.com/typescript-eslint/typescript-eslint/issues/8113
  //   'typescript/no-redeclare': 'off'
  // checked by typescript
  'typescript/no-redundant-type-constituents': 'error',
  'typescript/no-require-imports': ['error', { allow: [] }],
  // Unsupported by Oxlint yet: typescript/no-restricted-imports.
  //   'typescript/no-restricted-imports': [
  //     'off',
  //     { paths: [], patterns: [] },
  //   ]
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
  // Unsupported by Oxlint yet: typescript/no-type-alias.
  //   'typescript/no-type-alias': 'off'
  // deprecated
  'typescript/no-unnecessary-parameter-property-assignment': 'error',
  'typescript/no-unnecessary-qualifier': 'off',
  'typescript/no-unnecessary-type-assertion': [
    'warn',
    {
      checkLiteralConstAssertions: false,
      typesToIgnore: [],
    },
  ],
  'typescript/no-unnecessary-type-conversion': 'warn',
  'typescript/no-unsafe-argument': 'warn',
  'typescript/no-unsafe-assignment': 'warn',
  'typescript/no-unsafe-member-access': 'warn',
  'typescript/no-unsafe-return': 'warn',
  'typescript/no-unsafe-type-assertion': 'off',
  'typescript/no-unsafe-unary-minus': 'error',
  'typescript/no-useless-empty-export': 'off',
  'typescript/no-var-requires': 'error',
  'typescript/only-throw-error': 'error',
  'typescript/parameter-properties': [
    'off',
    { allow: [], prefer: 'class-property' },
  ],
  // Unsupported by Oxlint yet: typescript/prefer-destructuring.
  //   'typescript/prefer-destructuring': [
  //     'error',
  //     {
  //       VariableDeclarator: {
  //         array: false,
  //         object: true,
  //       },
  //       AssignmentExpression: {
  //         array: false,
  //         object: false,
  //       },
  //     },
  //     {
  //       enforceForRenamedProperties: false,
  //       enforceForDeclarationWithTypeAnnotation: false,
  //     },
  //   ]
  'typescript/prefer-enum-initializers': 'error',
  'typescript/prefer-find': 'error',
  'typescript/prefer-nullish-coalescing': [
    'error',
    {
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
  'typescript/prefer-promise-reject-errors': [
    'error',
    { allowEmptyReject: true },
  ],
  'typescript/prefer-readonly': ['error', { onlyInlineLambdas: false }],
  'typescript/prefer-readonly-parameter-types': [
    'off',
    {
      allow: [],
      checkParameterProperties: true,
      ignoreInferredTypes: false,
      treatMethodsAsReadonly: false,
    },
  ],
  'typescript/prefer-regexp-exec': 'off',
  'typescript/prefer-ts-expect-error': 'off',
  // deprecated
  'typescript/promise-function-async': 'off',
  'typescript/require-array-sort-compare': [
    'error',
    { ignoreStringArrays: true },
  ],
  'typescript/require-await': 'warn',
  'typescript/restrict-template-expressions': [
    'warn',
    {
      allowNumber: true,
      allowBoolean: true,
      allowAny: true,
      allowNullish: true,
      allowRegExp: true,
    },
  ],
  'typescript/return-await': ['error', 'in-try-catch'],
  // Unsupported by Oxlint yet: typescript/sort-type-constituents.
  //   'typescript/sort-type-constituents': [
  //     'error',
  //     {
  //       checkIntersections: true,
  //       checkUnions: true,
  //       groupOrder: [
  //         'named',
  //         'keyword',
  //         'operator',
  //         'literal',
  //         'function',
  //         'import',
  //         'conditional',
  //         'object',
  //         'tuple',
  //         'intersection',
  //         'union',
  //         'nullish',
  //       ],
  //     },
  //   ]
  'typescript/strict-boolean-expressions': [
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
      requireDefaultForNonUnion: false,
    },
  ],
  // Unsupported by Oxlint yet: typescript/typedef.
  //   'typescript/typedef': [
  //     'off',
  //     {
  //       arrayDestructuring: false,
  //       arrowParameter: false,
  //       memberVariableDeclaration: false,
  //       objectDestructuring: false,
  //       parameter: false,
  //       propertyDeclaration: false,
  //       variableDeclaration: false,
  //       variableDeclarationIgnoreFunction: false,
  //     },
  //   ]
} satisfies Rules;
