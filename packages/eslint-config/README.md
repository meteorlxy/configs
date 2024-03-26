# ESLint Config

## Install

```sh
npm i -D @meteorlxy/eslint-config
```

## Usage

Create `eslint.config.js`:

```js
import { meteorlxy } from '@meteorlxy/eslint-config';

export default meteorlxy({
  react: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  vue: true,
});
```

Configure `.vscode/settings.json`:

```jsonc
{
  "eslint.experimental.useFlatConfig": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "markdown",
    "typescript",
    "typescriptreact",
    "vue",
  ],
}
```
