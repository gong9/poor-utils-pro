import after from './index'

describe('after', () => {
  test('called 2', () => {
    const mockFn = jest.fn()
    const fn = after(2, mockFn)

    fn()
    fn()

    // expect mockFn called 1
    expect(mockFn).toBeCalledTimes(1)
  })

  test('not called', () => {
    const mockFn = jest.fn()
    const fn = after(3, mockFn)

    fn()
    fn()

    expect(mockFn).not.toBeCalled
  })

  test('n<0', () => {
    const mockFn = jest.fn()
    const fn = after(-1, mockFn)

    fn()
    fn()

    expect(mockFn).toHaveBeenCalledTimes(2)
  })

  test('check return value', () => {
    const mockFn = (a: number) => a
    const fn = after(2, mockFn)

    fn(1)
    fn(2)
    const res = fn(3)

    expect(res).toBe(3)
  })

  test('check this', () => {
    const mockFn = jest.fn()
    const fn = after(2, mockFn)

    fn()
    fn.call({ name: 'zhangsan' })

    expect((mockFn.mock as any).contexts[0]).toEqual({
      name: 'zhangsan',
    })
  })
})
