import '@babel/polyfill';
const j4tools = require('../dist/index');
((w, j) => {
  if (typeof w !== 'undefined' && !w.j4tools) {
    w.j4tools = j;
  }
})(window, j4tools);
