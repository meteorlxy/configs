# Oxlint Config

## Install

```sh
npm i -D @meteorlxy/oxlint-config oxlint
```

## Usage

In `oxlint.config.ts`:

```ts
import { meteorlxy } from '@meteorlxy/oxlint-config';

export default meteorlxy({
  ignorePatterns: ['dist/**'],
  // override default options
});
```
