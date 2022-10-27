import toThousandths from './index'

describe('toThousandths', () => {
  test('12345', () => {
    expect(toThousandths(12345)).toBe('12,345')
  })

  test('1234567', () => {
    expect(toThousandths(1234567)).toBe('1,234,567')
  })

  test('125', () => {
    expect(toThousandths(125)).toBe('125')
  })

  test('15', () => {
    expect(toThousandths(15)).toBe('15')
  })
})
