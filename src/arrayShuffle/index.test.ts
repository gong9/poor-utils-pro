import arrayShuffle from './index'
const data = [1, 2, 3, 4, 5, 6]

describe('arrayShuffle', () => {
  test('check data length', () => {
    expect(arrayShuffle(data).length).toBe(data.length)
  })

  test('not repeat, at the same time, the value cannot be changed "except for the order"', () => {
    const res = arrayShuffle(data)

    expect(Array.from(new Set(res)).length).toBe(data.length)
    expect(res.map((ele: number) => {
      return data.includes(ele)
    })).toEqual([true, true, true, true, true, true])
  })

  test('random', () => {
    const fn = jest.spyOn(global.Math, 'random')
    fn.mockReturnValue(0)
    // 123456
    // 623451
    // 523461
    // 423561
    // 324561
    // 234561

    expect(arrayShuffle(data)).toEqual([2, 3, 4, 5, 6, 1])
  })
})
