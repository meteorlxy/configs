/**
 * React.js Rules with TypeScript Rules
 */
module.exports = {
  extends: ['@meteorlxy/react', '@meteorlxy/typescript'],

  settings: {
    // Append 'ts' extensions to Airbnb 'import/resolver' setting
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
      },
    },
  },

  rules: {
    // Append 'tsx' to Airbnb 'react/jsx-filename-extension' rule
    // @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
  },
};
