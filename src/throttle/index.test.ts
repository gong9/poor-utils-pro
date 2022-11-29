import throttle from './index'

describe('throttle', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  test('normal', () => {
    const fn = jest.fn()
    const hanldeFn = throttle(fn)

    hanldeFn()
    hanldeFn()

    // called once
    expect(fn).toHaveBeenCalledTimes(1)

    // time advance 20
    setTimeout(() => {
      hanldeFn()
      hanldeFn()
    }, 20)

    jest.runAllTimers()
    expect(fn).toHaveBeenCalledTimes(2)
    // called 2
  })

  test('check return value', () => {
    const fn = jest.fn(a => a)
    const hanldeFn = throttle(fn)

    expect(hanldeFn(1)).toBe(1)
  })

  test('check this', () => {
    const fn = jest.fn()
    const hanldeFn = throttle(fn)

    hanldeFn.apply({ name: 'zs' })
    expect((fn.mock as any).contexts[0]).toEqual({ name: 'zs' })
  })
})
