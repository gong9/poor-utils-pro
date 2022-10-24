// import { add } from "lodash";
import add from './index'

describe('add', () => {
  test('1+2', () => {
    expect(add(1, 2)).toBe(3)
  })
  test('0.1+0.2', () => {
    expect(add(0.1, 0.2)).toBe(0.3)
  })
})
