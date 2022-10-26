/**
 * Debounce
 * @param func
 * @param wait
 * @param option
 */
const debounce = (func: Function, wait: number) => {
  let timerId: undefined | number

  const isCanUseRaf = !wait && typeof window.requestAnimationFrame === 'function'

  function startTimer(func: Function, wait: number) {
    if (isCanUseRaf)
      return requestAnimationFrame(func as FrameRequestCallback)

    else
      return setTimeout(func, wait)
  }

  function clearTimer(timerId: number) {
    if (isCanUseRaf)
      cancelAnimationFrame(timerId)

    else
      clearTimeout(timerId)
  }

  function invokeFunc(curThis: any, ...args: unknown[]) {
    func.apply(curThis, args)
  }

  function debounced(this: any, ...args: unknown[]) {
    timerId && clearTimer(timerId)
    timerId = startTimer(() => invokeFunc(this, ...args), wait)
  }

  return debounced
}

export default debounce
