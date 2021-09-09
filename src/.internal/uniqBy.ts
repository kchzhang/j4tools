type UniqBy<T> = (arr: T, key: string) => T;

const uniqBy: UniqBy<any[]> = require("lodash/uniqBy");

export default uniqBy;