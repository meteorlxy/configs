import * as path from 'path';

import baz from '@foo/bar';
import { type TestBarType, TestBar } from 'bar';
import { type TestBazType } from 'baz';
import foo from 'foo';
import type { Test } from 'foo';
import foo from 'foo/bar';

import foobar from '#foobar';
import foobarbaz from '#foobar/baz';
import a from '@/a';
import aa from '@/a/a';
import b from '@/b';
import c from '@/c';

import bar from './test-tsx';
import type { TestTsx } from './test-tsx';

let foo = 'foo';
let bar = `${true}${1345}${null}${{}}${[]}${undefined}`;

const baz: boolean = false;

export type TestTs = string;

for (const item of []) {
  console.log(item);

  await Promise.resolve();
}

for (const key in {}) {
  console.log(key);
}

interface TestMemberOrderingInterface {
  foo: string;
  bar: number;
  baz: boolean;
}

const testMemberOrderingObject = {
  foo: 'foo',
  bar: 123,
  baz: true,
  a: 'a',
  i18n: 'i18n',
  i2n: 'i2n',
};

class TestMemberOrderingClass {
  getFoo(): string {
    return this.foo;
  }

  foo = 'foo';
}
