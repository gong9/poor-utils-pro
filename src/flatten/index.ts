/**
 * Array flatten
 * Different from lodash, recursion is not used here
 * todo can be specified layers
 * @param arr
 * @returns
 */
const flatten = (arr: unknown[]) => {
  let res: any[] = arr

  do
    res = [].concat(...res)

  while (res.some(item => Array.isArray(item)))

  return res
}

export default flatten

