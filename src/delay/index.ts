import defer from '../defer'

/**
 * delay
 *
 * Different from defer,Time delay can be specified
 * @param func
 * @param time
 * @param args
 * @returns
 */
const delay = function (this: any, func: Function, time: number, ...args: unknown[]) {
  return defer.apply(this, [func, time, ...args])
}

export default delay
