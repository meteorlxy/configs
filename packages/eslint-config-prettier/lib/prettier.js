/**
 * Integrate Prettier to ESLint
 *
 * @see https://github.com/prettier/eslint-plugin-prettier
 */
module.exports = {
  extends: [
    // Disable code style rules of `eslint`, which should be handled by `prettier`
    'prettier',
  ],

  plugins: [
    // Use `eslint-plugin-prettier` to integrate prettier into eslint workflow
    'prettier',
  ],

  // Rules overrides
  rules: {
    'prettier/prettier': 'error',
  },
};
