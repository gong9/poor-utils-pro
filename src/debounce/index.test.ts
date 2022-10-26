import debounce from './index'

describe('debounce', () => {
  it('debounce', (done) => {
    const mockFn = jest.fn()

    const fn = debounce(mockFn, 10)

    fn(1)
    fn(2)

    setTimeout(() => {
      const calls = mockFn.mock.calls

      expect(calls.length).toBe(1)
      expect(calls[0][0]).toBe(2)
      done()
    }, 50)
  })
})
