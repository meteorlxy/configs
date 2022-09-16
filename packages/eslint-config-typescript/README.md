# ESLint Config for TypeScript

## Install

```sh
npm i -D @meteorlxy/eslint-config-typescript
```

## Usage

Create `.eslintrc.cjs`:

```cjs
module.exports = {
  extends: ['@meteorlxy/typescript'],
  parserOptions: {
    project: ['tsconfig.json'],
  },
  rules: {
    // override rules
  },
};
```
