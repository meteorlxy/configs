let foo = 'foo'

let bar = (
  <Bar>

  </Bar>
)

import map from 'lodash/map';

// not triggered
const Comp1 = () => {
  return map([1, 2, 3], (item) => {
    return <div>{item}</div>;
  });
};

// triggered
const Comp2 = () => {
  return [1, 2, 3].map((item) => {
    return <div>{item}</div>;
  });
};
