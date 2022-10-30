/**
 * before
 * @param n
 * @param func
 */
const before = (n: number, func: Function | undefined) => {
  let res: unknown
  return function (this: any, ...args: unknown[]) {
    if (--n > 0)
      res = (func as Function).apply(this, args)
    else
      func = undefined

    return res
  }
}

export default before
