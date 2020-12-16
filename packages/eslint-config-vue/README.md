# ESLint Config for Vue.js

## Install

```sh
npm i -D @meteorlxy/eslint-config-vue
```

## Usage

In `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@meteorlxy/vue"
  }
}
```

### Usage with babel eslint parser

Use `@babel/eslint-parser`:

```sh
npm i -D @babel/core @babel/eslint-parser
```

In `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@meteorlxy/vue",
    "parserOptions": {
      "parser": "@babel/eslint-parser"
    }
  }
}
```
