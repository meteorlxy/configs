# ESLint Config for Typescript + React.js

## Install

```sh
npm i -D @meteorlxy/eslint-config-typescript-react
```

## Usage

In `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@meteorlxy/typescript-react"
  }
}
```

For React hooks:

```json
{
  "eslintConfig": {
    "extends": ["@meteorlxy/typescript-react", "@meteorlxy/react/lib/hooks"]
  }
}
```
