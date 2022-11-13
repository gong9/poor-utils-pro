import ary from './index'

describe('ary', () => {
  test('normal, n=2, all args 1,2,3,4', () => {
    const mockFn = jest.fn()
    const fn = ary(mockFn, 2)
    fn(1, 2, 3, 4)

    // expect mockFn last call parameter is 1,2
    expect(mockFn).toHaveBeenLastCalledWith(1, 2)
  })

  test('n = 0', () => {
    const mockFn = jest.fn()
    const fn = ary(mockFn, 0)
    fn(1, 2, 3, 4)

    expect(mockFn).toHaveBeenLastCalledWith()
  })

  test('n = 5', () => {
    const mockFn = jest.fn()
    const fn = ary(mockFn, 5)
    fn(1, 2, 3, 4)

    expect(mockFn).toHaveBeenLastCalledWith(1, 2, 3, 4)
  })

  test('n = -2', () => {
    const mockFn = jest.fn()
    const fn = ary(mockFn, -2)
    fn(1, 2, 3, 4)

    expect(mockFn).toHaveBeenLastCalledWith()
  })

  test('not use n', () => {
    const mockFn = jest.fn()
    const fn = ary(mockFn)
    fn(1, 2, 3, 4)

    expect(mockFn).toHaveBeenLastCalledWith(1, 2, 3, 4)
  })

  test('check this', () => {
    const mockFn = jest.fn()
    const fn = ary(mockFn)
    fn.call({ name: 'zhangsan' }, 1, 2, 3, 4)
    expect((mockFn.mock as any).contexts[0]).toEqual({ name: 'zhangsan' })
  })
})

