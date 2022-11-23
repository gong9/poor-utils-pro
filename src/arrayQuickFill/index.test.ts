import arrayQuickFill from './index'

describe('arrayQuickFill', () => {
  test('normal', () => {
    expect(arrayQuickFill([1, 2, 3, 4], 10, 10, 0)).toEqual(
      [
        10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 1, 2, 3, 4,
      ],
    )
  })

  test('not use index', () => {
    expect(arrayQuickFill([1, 2, 3, 4], 10, 10)).toEqual(
      [
        1, 2, 3, 4, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
      ],
    )
  })

  test('num<0', () => {
    expect(arrayQuickFill([1, 2, 3, 4], 10, -1)).toEqual(
      [
        1, 2, 3, 4,
      ],
    )
  })

  test('index is not in range', () => {
    expect(() => arrayQuickFill([1, 2, 3, 4], 10, 10, 100)).toThrow('arrayQuickFill index is not in range')
  })
})
