/**
 * Throttle
 * @param cb
 * @param wait
 */
const throttle = (cb: Function, wait = 20) => {
  let lastTime = 0

  return function (this: any, ...args: unknown[]) {
    const curTime = Date.now()

    if (!(curTime - lastTime < wait)) {
      lastTime = curTime
      return cb.apply(this, args)
    }
  }
}

export default throttle

