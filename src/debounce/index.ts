/**
 * Debounce
 * @param func
 * @param wait
 * @param option
 */
const debounce = (func: Function, wait: number) => {
  let timerId: undefined | number

  const isCanUseRaf = !wait && typeof window.requestAnimationFrame === 'function'

  function startTimer(this: any, func: Function, wait: number, result: unknown, ...args: unknown[]) {
    if (isCanUseRaf) {
      return requestAnimationFrame(() => { result = func.apply(this, args) })
    }
    else {
      return setTimeout(() => {
        result = func.apply(this, args)
      }, wait)
    }
  }

  function clearTimer(timerId: number) {
    if (isCanUseRaf)
      cancelAnimationFrame(timerId)

    else
      clearTimeout(timerId)
  }

  function debounced(this: any, ...args: unknown[]) {
    let result: unknown
    timerId && clearTimer(timerId)
    timerId = startTimer.call(this, func, wait, result, ...args)

    return result
  }

  return debounced
}

export default debounce
