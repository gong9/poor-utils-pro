import flatten from './index'

describe('flatten', () => {
  test('deep = 1', () => {
    expect(flatten([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
  })

  test('deep = 2', () => {
    expect(flatten([1, 2, [5, 6], 3, 4])).toEqual([1, 2, 5, 6, 3, 4])
  })

  test('deep = 6', () => {
    expect(flatten([1, 2, [5, [6, [7, [8]]]], 3, 4])).toEqual([1, 2, 5, 6, 7, 8, 3, 4])
  })
})
