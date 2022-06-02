const baseConfig = require('@meteorlxy/eslint-config');

/**
 * Based on Airbnb JavaScript Style
 *
 * @see https://github.com/airbnb/javascript
 * @see https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
 */
module.exports = {
  extends: [
    // Airbnb JavaScript Style
    'airbnb',
  ],

  // Rules overrides
  rules: {
    ...baseConfig.rules,

    /**
     * Enforce arrow function for function components
     *
     * @see https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/function-component-definition.md
     * @see https://github.com/airbnb/javascript/blob/cbf9ade10a2f6f06c9da6dbfa25b344bee4bbef6/packages/eslint-config-airbnb/rules/react.js#L525-L530
     */
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
  },
};
