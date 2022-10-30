/* eslint-disable @typescript-eslint/no-unused-vars */

import defer from './index'

describe('defer', () => {
  test('normal', () => {
    const mockFn = jest.fn()

    const a = 1
    defer(mockFn)

    // now mockFn is should not called
    expect(mockFn).not.toBeCalled()
    const b = 2

    setTimeout(() => {
      expect(mockFn).toBeCalled()
    }, 10)
  })
})
