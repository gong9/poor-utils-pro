import memoize from './index'

describe('memoize', () => {
  it('always use', () => {
    const mockFn = jest.fn()
    const [fn] = memoize(
      mockFn, {})
    fn()
    fn()
    expect(mockFn).toBeCalledTimes(1)
  })

  it('has dep', () => {
    const a = 1
    const mockFn = jest.fn()

    const [fn, dep] = memoize(mockFn, { a })

    fn()
    dep.a = 2
    fn()

    expect(mockFn).toBeCalledTimes(2)
  })

  it('check return value, but args is not changed', () => {
    const mockFn = jest.fn(a => a)

    const [fn] = memoize(mockFn, { })

    expect(fn(1)).toBe(1)
    expect(fn(1)).toBe(1)

    expect(mockFn).toBeCalledTimes(1)
  })

  it('check return value, but args is changed', () => {
    const mockFn = jest.fn(a => a)

    const [fn] = memoize(mockFn, { })

    expect(fn(1)).toBe(1)
    expect(fn(2)).toBe(2)

    expect(mockFn).toBeCalledTimes(2)
  })
})
