import '@babel/polyfill';
const j4tools = require('../dist/j4tools.esm');

((w, j) => {
  if (typeof w !== 'undefined' && !w.j4tools) {
    w.j4tools = j;
  }
})(window, j4tools);
