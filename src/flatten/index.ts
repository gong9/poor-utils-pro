/**
 * Array flatten
 * Different from lodash, recursion is not used here
 * todo can be specified layers
 * @param arr
 * @returns
 * @example flatten([1, 2, [5, [6, [7, [8]]]], 3, 4])  // [1, 2, 5, 6, 7, 8, 3, 4]
 */
const flatten = (arr: unknown[]) => {
  let res: any[] = arr

  do
    res = [].concat(...res)

  while (res.some(item => Array.isArray(item)))

  return res
}

export default flatten

