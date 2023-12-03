/**
 * Array shuffle
 * @param arr
 * @returns
 * @example
 * arrayShuffle([1,2,3,4,5,6])  => [4,6,1,2,3,5] or [1,3,5,2,4,6] or ...
 */
const arrayShuffle = <T>(arr: T[]) => {
  const res = [...arr]

  for (let i = res.length - 1; i >= 0; i--) {
    const num = Math.floor(Math.random() * res.length)
    const temp = res[i]

    res[i] = res[num]
    res[num] = temp
  }

  return res
}

export default arrayShuffle
