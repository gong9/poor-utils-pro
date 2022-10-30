const after = (n = 0, func: Function) => {
  return function (this: any, ...args: unknown[]) {
    if (--n < 1)
      return func.apply(this, args)
  }
}

export default after
