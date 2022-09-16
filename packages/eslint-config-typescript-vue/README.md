# ESLint Config for TypeScript + Vue.js

## Install

```sh
npm i -D @meteorlxy/eslint-config-typescript-vue
```

## Usage

Create `.eslintrc.cjs`:

```cjs
module.exports = {
  extends: ['@meteorlxy/typescript-vue'],
  parserOptions: {
    project: ['tsconfig.json'],
  },
  rules: {
    // override rules
  },
};
```
