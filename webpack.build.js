const path = require('path');
const package = require('./package.json');
module.exports = {
  mode: 'production',
  entry: './example/index.js',
  output: {
    path: path.resolve(__dirname, 'example'),
    filename: `${package.name}.min.js`,
  },
};
