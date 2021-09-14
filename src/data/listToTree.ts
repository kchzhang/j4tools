import { listTree, PowerPartial, Options } from '../.internal/listTree';

 function listToTree<T>(node: Array<PowerPartial<T>>, option: Options): Array<PowerPartial<T>> {
   return listTree(node, option);
 }
 
 export default listToTree;
 
 