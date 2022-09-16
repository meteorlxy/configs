# ESLint Config with Prettier

## Install

```sh
npm i -D @meteorlxy/eslint-config-prettier
```

## Usage

Create `.eslintrc.cjs`:

```cjs
module.exports = {
  extends: ['@meteorlxy/prettier'],
  rules: {
    // override rules
  },
};
```
