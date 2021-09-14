import { findNodePath, PowerPartial, Options } from '../.internal/findNodePath';

function getNodePath<T, U>(list: Array<PowerPartial<T>>, id: U, options?: Options) {

  return findNodePath(list, id, options);

}

export default getNodePath;