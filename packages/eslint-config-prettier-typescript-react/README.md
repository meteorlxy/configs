# ESLint Config for Typescript + React.js with Prettier

## Install

```sh
npm i -D @meteorlxy/eslint-config-prettier-typescript-react
```

## Usage

In `package.json`:

```json
{
  "eslintConfig": {
    "extends": "@meteorlxy/prettier-typescript-react"
  }
}
```

For React hooks:

```json
{
  "eslintConfig": {
    "extends": [
      "@meteorlxy/prettier-typescript-react",
      "@meteorlxy/react/lib/hooks"
    ]
  }
}
```
