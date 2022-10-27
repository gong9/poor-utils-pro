import filterEmptyVal from './index'
describe('filterEmptyVal', () => {
  test('has null', () => {
    expect(filterEmptyVal({
      name: 'xxx',
      age: null,
    })).toEqual({
      name: 'xxx',
    })
  })

  test('has undefined', () => {
    expect(filterEmptyVal({
      name: undefined,
      age: 18,
    })).toEqual({
      age: 18,
    })
  })

  test('has null a n d  undefined', () => {
    expect(filterEmptyVal({
      name: 'xxx',
      age: 19,
      other: 0,
      a: false,
    })).toEqual({
      name: 'xxx',
      age: 19,
      other: 0,
      a: false,
    })
  })

  test('no null and  undefined', () => {
    expect(filterEmptyVal({
      name: undefined,
      age: null,
    })).toEqual({})
  })

  test('has null and undefined,deep 3', () => {
    expect(filterEmptyVal({
      name: undefined,
      age: null,
      other: {
        a: 12,
        b: {
          c: null,
        },
      },
    })).toEqual({
      other: {
        a: 12,
        b: {},
      },
    })
  })

  test('has null and undefined,deep 2 also and array', () => {
    expect(filterEmptyVal({
      name: undefined,
      age: null,
      other: [1, 2, 3, null],
    })).toEqual({
      other: [1, 2, 3],
    })
  })
})
