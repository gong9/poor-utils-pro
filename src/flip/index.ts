/**
 * flip
 * @param func
 * @returns
 * @example
 * const fn = flip((...args: unknown[]) => {
 *   return [...args]
 * })
 * fn(1, 2, 3, 4, 5)  // [5, 4, 3, 2, 1]
 */
const flip = (func: Function) => {
  return function (this: any, ...args: unknown[]) {
    const curArgs = [...args].reverse()
    return func.apply(this, curArgs)
  }
}

export default flip

