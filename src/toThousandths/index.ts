/**
 * Thousand  conversion
 *
 * TODO: need to optimize later
 * @param number
 * @returns
 * @example toThousandths(1234567)  // '1,234,567'
 */
const toThousandths = (number: number) => {
  let curHandleString = number.toString()
  let res = ''

  while (curHandleString.length > 3) {
    res = `,${curHandleString.substring(curHandleString.length - 3)}${res}`
    curHandleString = curHandleString.substring(0, curHandleString.length - 3)
  }

  return curHandleString + res
}

export default toThousandths

