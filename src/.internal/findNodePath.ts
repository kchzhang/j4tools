export type PowerPartial<T> = {
  [U in keyof T]?: T[U] extends object
  ? PowerPartial<T[U]> | undefined[]
  : T[U]
}

export interface Options {
  idKey: string,
  parentIdKey: string,
  childrenKey: string
}

export function findNodePath<T, U>(dataTree: Array<PowerPartial<T>>, nodeId: U, options?: Options): Array<PowerPartial<T>> {
  const { idKey = "id", parentIdKey = "parentId", childrenKey = "children" } = options || {};
  var arrRes: Array<PowerPartial<T>> = [];
  if (dataTree.length == 0) {
    if (!!nodeId) {
      arrRes.unshift(dataTree[0]);
    }
    return arrRes;
  }
  let rev = (data: Array<PowerPartial<T>>, nodeId: U) => {
    for (var i = 0, length = data.length; i < length; i++) {
      let node: any = data[i];
      if (node[idKey] == nodeId) {
        arrRes.unshift(node);
        rev(dataTree, node[parentIdKey]);
        break;
      } else {
        if (!!node[childrenKey]) {
          rev(node[childrenKey], nodeId);
        }
      }
    }
    return arrRes;
  };
  arrRes = rev(dataTree, nodeId);
  return arrRes;
}