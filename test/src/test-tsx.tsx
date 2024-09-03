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
