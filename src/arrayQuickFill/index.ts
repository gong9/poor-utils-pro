/**
 * arrayQuickFill
 *
 * Quickly fill n duplicates to a position in the array
 *
 * Returns a new array
 * When num is less than 0, the returned new array value is consistent with the original array value
 * When there is no index, the default is to prevent the last
 * @param targetArr
 * @param data
 * @param num
 * @param index
 * @example
 * arrayQuickFill([1, 2, 3, 4], 10, 10, 1) =>
 * [1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 2, 3, 4]
 */
const arrayQuickFill = <T>(targetArr: T[], data: T, num: number, index?: number): T[] => {
  let resArr: T[] = [...targetArr]
  let tempArr: T[] = []

  if (num <= 0)
    return resArr

  if (num > 0)
    tempArr = Array(num).fill(data)

  if (index && (index < 0 || index > targetArr.length - 1))
    throw new Error('arrayQuickFill index is not in range')

  if (index || index === 0)
    resArr.splice(index, 0, ...tempArr)
  else
    resArr = [...resArr, ...tempArr]

  return resArr
}

export default arrayQuickFill
