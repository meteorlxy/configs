# Markdown Test

### Markdown

#### Duplicate headings

#### Duplicate headings

## Code blocks

```js
let foo = 'foo';
```

```ts
import bar from './test-tsx';
import foo from 'foo';
import * as path from 'path';
import type { TestTsx } from './test-tsx';
import type { Test } from 'foo';
import { type TestBarType, TestBar } from 'bar';
import { type TestBazType } from 'baz';
import baz from '@foo/bar';
import foobar from '#foobar';
import foobarbaz from '#foobar/baz';
import a from '@/a';
import b from '@/b';
import c from '@/c';
import aa from '@/a/a';

let foo = 'foo';
let bar = `${true}${1345}${null}${{}}${[]}${undefined}`;

const baz: boolean = false;
```

```tsx
import type { JSX } from 'react';
import { useState, useMemo } from 'react';
import type { TestTs } from './test-ts';

export type TestTsx = TestTs;

let foo = 'foo';

let bar = <Bar></Bar>;

const TestTsxComponent = (): JSX.Element => {
  const [strState, setStrState] = useState('');

  const strMemo = useMemo(() => {
    return strState;
  }, []);

  return <div>{strState}</div>;
};
```

```vue
<template>
  <h1 v-text="''" class="foo"></h1>
</template>

<script lang="ts">
let foo = 'foo';

export default {
  name: 'Foo',
};
</script>

<style></style>
```
