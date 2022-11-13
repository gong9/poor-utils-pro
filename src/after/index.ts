/**
 * after
 * @param n
 * @param func
 * @returns
 * @example
 * const curhandeleFn = () => {}
 * const fn = after(2, curhandeleFn)
 * fn() // not called
 * fn() // more than (or equal) twice called
 */
const after = (n: number, func: Function): Function => {
  return function (this: any, ...args: unknown[]) {
    if (--n < 1)
      return func.apply(this, args)
  }
}

export default after

