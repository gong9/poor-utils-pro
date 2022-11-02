/**
 * memoize
 * @param callback
 * @returns
 */

const memoize = (callback: Function, deps: unknown[]) => {
  let cache: unknown = null
  let isShouldCall = false
  let callTimes = 0

  const observe = (deps: unknown[]) => {
    return new Proxy(deps, {
      set(target, key, value, receiver) {
        isShouldCall = true
        return Reflect.set(target, key, value, receiver)
      },
    })
  }

  const memoized = function (this: any, ...args: unknown[]) {
    if (isShouldCall || callTimes === 0) {
      callTimes++
      cache = callback.apply(this, args)
      isShouldCall = false
      return cache
    }
    else {
      return cache
    }
  }

  return [memoized, observe(deps)] as [Function, unknown[]]
}

// const a = 1

// const [fn, proxyA] = memoize(() => {
//   console.log('hahah')
// }, [a])
// fn()
// // proxyA[0] = 2
// fn()
// fn()
export default memoize
