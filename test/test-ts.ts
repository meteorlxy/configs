import bar from './test-tsx'
import foo from 'foo'
import * as path from 'path'
import type { TestTsx } from './test-tsx'
import type { Test } from 'foo'
import baz from '@foo/bar'
import foobar from '#foobar'
import foobarbaz from '#foobar/baz'
import a from '@/a'
import b from '@/b'
import c from '@/c'
import aa from '@/a/a'

let foo = 'foo'

export type TestTs = string

for (const item of []) {
  console.log(item)

  await Promise.resolve()
}

for (const key in {}) {
  console.log(key)
}
