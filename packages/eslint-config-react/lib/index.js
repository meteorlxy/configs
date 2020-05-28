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
  },
};
