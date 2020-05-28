# ESLint Config for React.js with Prettier

## Install

```sh
npm i -D @meteorlxy/eslint-config-prettier-react
```

## Usage

In `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@meteorlxy/prettier-react"
  }
}
```

For React hooks:

```json
{
  "eslintConfig": {
    "extends": ["@meteorlxy/prettier-react", "@meteorlxy/react/lib/hooks"]
  }
}
```
