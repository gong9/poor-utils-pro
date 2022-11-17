/* eslint-disable no-unreachable-loop */
/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */

/**
 * memoize
 * @param callback
 * @returns
 */

const memoize = (callback: Function) => {
  let cache: unknown = null
  let isShouldCall = false
  let callTimes = 0
  let lastArgs: unknown[] = []

  const isEq = (curArg: unknown, lastArg: unknown): boolean => {
    const curArgType = Object.prototype.toString.call(curArg)
    const lastArgType = Object.prototype.toString.call(lastArg)

    if (curArgType !== lastArgType)
      return false

    switch (curArgType) {
      case '[object Object]':
        for (const key in (curArgType as any)) {
          if (Object.prototype.hasOwnProperty.call(curArgType, key)) {
            let lastArgsCurItem
            if (key in (lastArg as { [key: string]: unknown }))
              lastArgsCurItem = (lastArg as { [key: string]: unknown })[key]
            else
              return false

            return isEq((curArg as { [key: string]: unknown })[key], lastArgsCurItem)
          }
        }
      case '[object Array]':
        const curLength = (curArg as unknown[]).length
        const lastLength = (lastArg as unknown[]).length

        if (curLength !== lastLength)
          return false

        for (let i = 0; i < (curArg as unknown[]).length; i++)
          return isEq((curArg as unknown[])[i], (lastArg as unknown[])[i])

      default:
        return curArg === lastArg
    }
  }

  const checkArgsIsChange = (curArgs: unknown[]) => {
    const curArgsLength = curArgs.length
    const lastArgsLength = lastArgs.length

    if (curArgsLength !== lastArgsLength) {
      lastArgs = curArgs
      return true
    }
    else {
      let flag = false

      for (let i = 0; i < curArgs.length; i++) {
        if (!isEq(curArgs[i], lastArgs[i]))
          flag = true
        break
      }

      if (flag) {
        lastArgs = curArgs
        return true
      }
      else {
        return false
      }
    }
  }

  const memoized = function (this: any, ...args: unknown[]) {
    const isArgsChanged = checkArgsIsChange(args)

    if (isShouldCall || callTimes === 0 || isArgsChanged) {
      callTimes++
      cache = callback.apply(this, args)
      isShouldCall = false
      return cache
    }
    else {
      return cache
    }
  }

  return memoized
}

export default memoize
