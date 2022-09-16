# ESLint Config for TypeScript + React.js with Prettier

## Install

```sh
npm i -D @meteorlxy/eslint-config-prettier-typescript-react
```

## Usage

Create `.eslintrc.cjs`:

```cjs
module.exports = {
  extends: ['@meteorlxy/prettier-typescript-react'],
  parserOptions: {
    project: ['tsconfig.json'],
  },
  rules: {
    // override rules
  },
};
```
