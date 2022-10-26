import curry from './index'

const sum = (a: number, b: number, c: number, d: number) => {
  return a + b + c + d
}

describe('curry', () => {
  test('currySum(1, 2, 3, 4)', () => {
    const currySum = curry(sum)
    expect(currySum(1, 2, 3, 4)).toBe(10)
  })

  test('urrySum(1)(2)(3)(4)', () => {
    const currySum = curry(sum)
    expect(currySum(1)(2)(3)(4)).toBe(10)
  })

  test('currySum(1, 2)(3)(4)', () => {
    const currySum = curry(sum)
    expect(currySum(1, 2)(3)(4)).toBe(10)
  })

  test('currySum(1, 2, 3)(4)', () => {
    const currySum = curry(sum)
    expect(currySum(1, 2, 3)(4)).toBe(10)
  })

  test('one parameter less', () => {
    const mockSum = jest.fn(sum)
    const currySum = jest.fn(curry(mockSum))

    currySum(1, 2, 3)

    expect(currySum).toBeCalledTimes(1)
    expect(currySum.mock.results[0].value).toEqual(expect.any(Function))

    expect(mockSum).not.toBeCalled()
  })

  test('one parameter more', () => {
    const mockSum = jest.fn(sum)
    const currySum = curry(mockSum)
    const res = currySum(1, 2, 3)(4, 5)

    expect(mockSum).toHaveBeenLastCalledWith(1, 2, 3, 4, 5)
    expect(res).toBe(10)
  })

  test('inspect this', () => {
    const mockSum = jest.fn(sum)
    const currySum = curry(mockSum)

    currySum.call({ name: 'zhangsan' }, 1, 2, 3, 4)

    expect(mockSum).toBeCalledTimes(1)
    expect((mockSum.mock as any).contexts[0]).toEqual({ name: 'zhangsan' })
  })
})
