interface ResultType {
  value: unknown
}

/**
 * Debounce
 * @param func
 * @param wait
 * @param option
 */
const debounce = (func: Function, wait: number) => {
  let timerId: undefined | number

  const isCanUseRaf = !wait && typeof window.requestAnimationFrame === 'function'

  function startTimer(this: any, func: Function, wait: number, result: ResultType, ...args: unknown[]) {
    if (isCanUseRaf) {
      return requestAnimationFrame(() => { result.value = func.apply(this, args) })
    }
    else {
      return setTimeout(() => {
        result.value = func.apply(this, args)
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
    const result: ResultType = {
      value: undefined,
    }
    timerId && clearTimer(timerId)
    timerId = startTimer.call(this, func, wait, result, ...args)

    return result.value
  }

  return debounced
}

export default debounce
