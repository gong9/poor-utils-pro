import soft from './index'

describe('soft', () => {
  test('normal', () => {
    expect(soft([1, 9, 3, 6, 70, 56])).toEqual([1, 3, 6, 9, 56, 70])
  })

  test('empty', () => {
    expect(soft([])).toEqual([])
  })
})
