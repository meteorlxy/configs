# ESLint Config for TypeScript + Vue.js with Prettier

## Install

```sh
npm i -D @meteorlxy/eslint-config-prettier-typescript-vue
```

## Usage

Create `.eslintrc.cjs`:

```cjs
module.exports = {
  extends: ['@meteorlxy/prettier-typescript-vue'],
  parserOptions: {
    project: ['tsconfig.json'],
  },
  rules: {
    // override rules
  },
};
```
