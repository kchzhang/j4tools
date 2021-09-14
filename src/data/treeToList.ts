import { treeList, PowerPartial } from '../.internal/treeList';

function treeToList<T>(node: PowerPartial<T>, childrenKey: string): Array<PowerPartial<T>> {
  return treeList(node, childrenKey);
}

export default treeToList;

