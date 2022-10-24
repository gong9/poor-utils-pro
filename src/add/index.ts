/**
 * Add
 * Need to handle floating point number and large number problems
 * @param arg1
 * @param arg2
 */
const add = (arg1: number, arg2: number) => {
  const num1Digits = (arg1.toString().split('.')[1] || '').length
  const num2Digits = (arg2.toString().split('.')[1] || '').length
  const baseNum = 10 ** Math.max(num1Digits, num2Digits)
  return (arg1 * baseNum + arg2 * baseNum) / baseNum
}

export default add
