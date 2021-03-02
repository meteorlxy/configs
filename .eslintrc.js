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
      files: ['*.ts'],
      extends: '@meteorlxy/prettier-typescript',
    },
    {
      files: ['*.tsx'],
      extends: '@meteorlxy/prettier-typescript-react',
    },
    {
      files: ['*.vue'],
      extends: '@meteorlxy/prettier-typescript-vue',
    },
  ],
};
