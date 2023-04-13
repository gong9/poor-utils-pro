/**
 * 用于检测对象数组中是否存在重复项
 * @example isDuplicateByAttributes([{a:1},{a:1}], 'a') // true
 * @example isDuplicateByAttributes([{a:1},{a:2}], 'a') // false
 * @param data
 * @param IdentityAttr
 * @returns
 */
export const isDuplicateByAttributes = (
  data: { [k: string]: any }[],
  IdentityAttr: string,
) => {
  const map = new Map()

  for (let i = 0; i < data.length; i++) {
    if (!map.has(data[i][IdentityAttr]))
      map.set(data[i][IdentityAttr], data[i])

    else
      return true
  }

  return false
}

/**
 * 对象数组去重
 * @example duplicateRemovalByAttributes([{a:1},{a:1}], 'a') // [{a:1}]
 * @param data
 * @param IdentityAttr
 * @returns
 */
export const duplicateRemovalByAttributes = (
  data: { [k: string]: any }[],
  IdentityAttr: string,
) => {
  const map = new Map()

  data.forEach((item) => {
    if (!map.has(item[IdentityAttr]))
      map.set(item[IdentityAttr], item)
  })

  return Array.from(map.values())
}
