# Prettier Config

## Install

```sh
npm i -D @meteorlxy/prettier-config
```

## Usage

In `package.json`:

```json
{
  "prettier": "@meteorlxy/prettier-config"
}
```

In `prettier.config.js`:

```js
import meteorlxy from '@meteorlxy/prettier-config';

export default {
  ...meteorlxy,
  // options

  overrides: [
    ...meteorlxy.overrides,
    // overrides
  ],
};
```
