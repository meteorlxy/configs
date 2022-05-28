const fs = require('fs');
const path = require('path');

const packages = fs.readdirSync(path.resolve(__dirname, 'packages'));

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [2, 'always', packages],
    'footer-max-line-length': [0],
  },
};
