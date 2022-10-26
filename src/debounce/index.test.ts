import { debounce } from 'lodash'

describe('debounce', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  test('handle function called once', () => {
    const mockFn = jest.fn()
    const fn = debounce(mockFn, 1000)

    fn()
    fn()
    fn()

    jest.runAllTimers()

    expect(mockFn).toBeCalledTimes(1)
  })

  test('last input parameter', () => {
    const mockFn = jest.fn()
    const fn = debounce(mockFn, 1000)

    fn(1)
    fn(2)
    fn(3)

    jest.runAllTimers()

    expect(mockFn).toHaveBeenLastCalledWith(3)
  })
})
