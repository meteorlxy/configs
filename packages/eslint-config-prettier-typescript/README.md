# ESLint Config for TypeScript with Prettier

## Install

```sh
npm i -D @meteorlxy/eslint-config-prettier-typescript
```

## Usage

Create `.eslintrc.cjs`:

```cjs
module.exports = {
  extends: ['@meteorlxy/prettier-typescript'],
  parserOptions: {
    project: ['tsconfig.json'],
  },
  rules: {
    // override rules
  },
};
```
