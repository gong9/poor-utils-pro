import getUrlParams from './index'

describe('getUrlParams', () => {
  test('a normal path', () => {
    window.location.assign('https://www.baidu.com?a=1&b=2')
    const curUrl = window.location.href

    expect(getUrlParams(curUrl)).toEqual({
      a: '1',
      b: '2',
    })
  })

  test('empty search', () => {
    window.location.assign('https://www.baidu.com')
    const curUrl = window.location.href

    expect(getUrlParams(curUrl)).toEqual({})
  })

  test('param has =', () => {
    window.location.assign('https://www.baidu.com?a===b&c=d')
    const curUrl = window.location.href

    expect(getUrlParams(curUrl)).toEqual({
      a: '==b',
      c: 'd',
    })
  })

  test('urlPath has hash =', () => {
    window.location.assign('https://www.baidu.com?a==#=b&c=d')
    const curUrl = window.location.href

    expect(getUrlParams(curUrl)).toEqual({
      a: '=',
    })
  })
})
