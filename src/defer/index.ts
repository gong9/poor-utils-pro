/**
 * defer
 *
 * Asynchronous processing,Defer function calls
 * @param func
 * @param args
 * @returns
 * @example
 * const a = 1
 * defer(() => {})  // The function will not be called first,It can be interpreted as putting into macro task queue
 * const b = 1
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

