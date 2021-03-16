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
      files: ['*.ts', '*.tsx', '*.vue'],
      extends: [
        '@meteorlxy/prettier-typescript-react',
        '@meteorlxy/prettier-typescript-vue',
      ],
      parserOptions: {
        project: ['tsconfig.json'],
      },
    },
  ],
};
