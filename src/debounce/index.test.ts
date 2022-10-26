import debounce from './index'

describe('debounce', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  test('handle function Called once', () => {
    const mockFn = jest.fn()
    const fn = debounce(mockFn, 1000)

    fn()
    fn()
    fn()

    jest.runAllTimers()

    expect(mockFn).toBeCalledTimes(1)
  })

  test('handle function Called once', () => {
    const mockFn = jest.fn(value => value)
    const fn = jest.fn(debounce(mockFn, 1000))

    fn(1)
    fn(2)
    fn(3)

    jest.runAllTimers()

    expect(fn.mock.results[2].value).toBe(3)
  })
})
