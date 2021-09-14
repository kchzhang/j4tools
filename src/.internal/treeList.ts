// 例子
// const origin = {
//   id: 1,
//   parentId: null,
//   children: [
//     {
//       id: 2,
//       parentId: 1,
//       children: [
//         {
//           id: 3,
//           parentId: 2,
//           children: [
//           ]
//         }
//       ]
//     }
//   ]
// };


// 结果
// const res = [
//   {
//     id: 1, parentId: null, children: [{
//       id: 2,
//       parentId: 1,
//       children: [
//         {
//           id: 3,
//           parentId: 2,
//           children: [
//           ]
//         }
//       ]
//     }]
//   },
//   {
//     id: 2, parentId: 1, children: [{
//       id: 3,
//       parentId: 2,
//       children: []
//     }]
//   },
//   { id: 3, parentId: 2, children: [] }
// ]


type PowerPartial<T> = {
  [U in keyof T]?: T[U] extends object
  ? PowerPartial<T[U]> | undefined[]
  : T[U]
}

function treeList<T>(node: PowerPartial<T>, childrenKey: string): Array<PowerPartial<T>> {
  let nodes: Array<PowerPartial<T>> = [];
  if (node != null) {
    let stack = [];
    stack.push(node);
    while (stack.length != 0) {
      let item: any = stack.pop();
      nodes.push(item);
      let childrens: Array<PowerPartial<T>> = item[childrenKey];
      if (childrens && childrens.length > 0) {
        for (let i = childrens.length - 1; i >= 0; i--)
          stack.push(childrens[i]);
      }
    }
  }
  return nodes;
}

export { treeList, PowerPartial }

