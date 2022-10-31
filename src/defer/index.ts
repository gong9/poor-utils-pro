/**
 * defer
 *
 * Asynchronous processing,Defer function calls
 * @param func
 * @param args
 * @returns
 */
const defer = function (this: any, func: Function, time = 0, ...args: unknown[]) {
  const isCanUseRef = requestAnimationFrame && typeof requestAnimationFrame === 'function' && (time === 0)

  if (isCanUseRef) {
    return window.requestAnimationFrame(
      () => {
        func.apply(this, args)
      },
    )
  }
  else {
    return window.setTimeout(
      () => {
        func.apply(this, args)
      }, time,
    )
  }
}

export default defer
