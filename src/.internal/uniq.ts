type Uniq<T> = (arr: T) => T;

const uniq: Uniq<any[]> = require("lodash/uniq");

export default uniq;