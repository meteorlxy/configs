# Oxfmt Config

## Install

```sh
npm i -D @meteorlxy/oxfmt-config
```

## Usage

In `oxfmt.config.ts`:

```ts
import { meteorlxy } from '@meteorlxy/oxfmt-config';

export default meteorlxy({
  ignorePatterns: ['lerna.json', 'pnpm-lock.yaml', '**/CHANGELOG.md'],
  // override default options
});
```
