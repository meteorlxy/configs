# ESLint Config for React.js

## Install

```sh
npm i -D @meteorlxy/eslint-config-react
```

## Usage

In `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@meteorlxy/react"
  }
}
```

For React hooks:

```json
{
  "eslintConfig": {
    "extends": ["@meteorlxy/react", "@meteorlxy/react/lib/hooks"]
  }
}
```
