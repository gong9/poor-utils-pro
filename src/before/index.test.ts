import before from './index'

describe('before', () => {
  test('test last return value', () => {
    const mockFn = (a: number) => a
    const curFn = before(2, mockFn)
    curFn(1)
    const lastRes = curFn(2)

    expect(lastRes).toBe(1)
  })

  test('n < 0', () => {
    const mockFn = jest.fn(a => a)
    const curFn = before(-1, mockFn)

    curFn(1)
    const lastRes = curFn(2)

    expect(lastRes).toBe(undefined)
    expect(mockFn).not.toBeCalled
  })

  test('inspect this', () => {
    const mockFn = jest.fn()
    const curFn = before(2, mockFn)

    curFn.call({ name: 'zhangsan' })

    expect((mockFn.mock as any).contexts[0]).toEqual({ name: 'zhangsan' })
  })
})
