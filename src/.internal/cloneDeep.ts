type CloneDeep<T> = (arrObj: T) => T;

const cloneDeep: CloneDeep<any[] | object> = require('lodash/cloneDeep');

export default cloneDeep;
