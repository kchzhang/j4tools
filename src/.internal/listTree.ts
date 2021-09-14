export type PowerPartial<T> = {
  [U in keyof T]: T[U]
}

export interface Options {
  idKey: string,
  parentIdKey: string,
  childrenKey: string
}

export function listTree<T>(list: Array<PowerPartial<T>>, options: Options) {
  let info: any = list.reduce((map: any, node: any) => (map[node[options.idKey]] = node, node[options.childrenKey] = [], map), {})
  return list.filter((node: any) => {
    info[node[options.parentIdKey]] && info[node[options.parentIdKey]][options.childrenKey].push(node)
    return !node[options.parentIdKey]
  })
}