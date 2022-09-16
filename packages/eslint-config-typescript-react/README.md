# ESLint Config for TypeScript + React.js

## Install

```sh
npm i -D @meteorlxy/eslint-config-typescript-react
```

## Usage

Create `.eslintrc.cjs`:

```cjs
module.exports = {
  extends: ['@meteorlxy/typescript-react'],
  parserOptions: {
    project: ['tsconfig.json'],
  },
  rules: {
    // override rules
  },
};
```
