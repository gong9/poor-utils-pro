/**
 * Two Number Add
 * handle floating point number and large number problems
 * @param {number} arg1
 * @param {number} arg2
 * @example add(0.1,0.2) // 0.3
 */
const add = (arg1: number, arg2: number) => {
  const num1Digits = (arg1.toString().split('.')[1] || '').length
  const num2Digits = (arg2.toString().split('.')[1] || '').length
  const baseNum = 10 ** Math.max(num1Digits, num2Digits)
  return (arg1 * baseNum + arg2 * baseNum) / baseNum
}

export default add

