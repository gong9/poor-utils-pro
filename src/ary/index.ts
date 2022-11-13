/**
 * ary
 * Create a function that calls func. When calling func, you can accept up to n parameters and ignore the extra parameters.
 * @param func
 * @param n
 * @returns
 * @example
 * const mockFn = () => {}
 * const fn = ary(mockFn, 2)
 * fn(1, 2, 3, 4) // => mockFn(1,2)
 */
const ary = (func: Function, n?: number): Function => {
  return function (this: any, ...args: unknown[]) {
    let lastArgsArr = args

    if (n && args.length > n)
      lastArgsArr = [...args].slice(0, n)

    if ((n && n < 0) || n === 0)
      lastArgsArr = []

    return func.apply(this, lastArgsArr)
  }
}

export default ary

