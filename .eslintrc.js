module.exports = {
  root: true,
  overrides: [
    {
      files: ['*.js'],
      extends: '@meteorlxy/prettier',
    },
    {
      files: ['*.jsx'],
      extends: '@meteorlxy/prettier-react',
    },
    {
      files: ['*.ts', '*.vue'],
      extends: ['@meteorlxy/prettier-typescript-vue'],
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
    {
      files: ['*.tsx'],
      extends: ['@meteorlxy/prettier-typescript-react'],
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
  ],
};
