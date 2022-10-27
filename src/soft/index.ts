/**
 * array sort
 * Processing by counting and sorting
 * Time complexity O(n)
 * @param array
 * @returns
 * @example countingSort([1, 9, 3, 6, 70, 56]) // [ 1, 3, 6, 9, 56, 70 ]
 */
const soft = (array: number[]) => {
  const len = array.length
  const result = []
  const cur: number[] = []
  let min = array[0]
  let max = array[0]

  for (let i = 0; i < len; i++) {
    min = min <= array[i] ? min : array[i]
    max = max >= array[i] ? max : array[i]
    cur[array[i]] = cur[array[i]] ? cur[array[i]] + 1 : 1
  }

  for (let j = min; j < max; j++)
    cur[j + 1] = (cur[j + 1] || 0) + (cur[j] || 0)

  for (let k = len - 1; k >= 0; k--) {
    result[cur[array[k]] - 1] = array[k]
    cur[array[k]]--
  }

  return result
}

export default soft

