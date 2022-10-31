import flip from './index'

describe('flip', () => {
  test('normal', () => {
    const fn = flip((...args: unknown[]) => {
      return [...args]
    })

    expect(fn(1, 2, 3, 4, 5)).toEqual([5, 4, 3, 2, 1])
  })
})
