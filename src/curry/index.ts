/**
 * curry
 * @param callback
 * @returns
 * @example
 * const sum = (a: number, b: number, c: number, d: number) => {
 *  return a + b + c + d
 * }
 * const currySum = curry(sum)
 * currySum(1)(2)(3)(4) // 10
 */
const curry = (callback: Function) => {
  function middle(this: any, ...args: unknown[]) {
    if (args.length >= callback.length)
      return callback.apply(this, args)
    else
      return (...rest: unknown[]) => middle(...args, ...rest)
  }

  return middle
}

export default curry

