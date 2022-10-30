import delay from './index'

describe('delay', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  test('wait 2s', () => {
    const mockFn = jest.fn()
    jest.spyOn(global, 'setTimeout')
    delay(mockFn, 2000)

    expect(mockFn).not.toBeCalled()

    jest.runAllTimers()

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 2000)
    expect(mockFn).toBeCalled()
  })

  test('check this', () => {
    const mockFn = jest.fn()
    delay.call({ name: 'zhangsan' }, mockFn, 2000)

    jest.runAllTimers()

    expect((mockFn.mock as any).contexts[0]).toEqual({ name: 'zhangsan' })
  })
})
