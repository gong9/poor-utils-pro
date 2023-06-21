import splitStringByEmoji from './'

describe('splitStringByEmoji', () => {
  it('😊', () => {
    expect(splitStringByEmoji('😊hello world😊')).toEqual(['hello world', ['😊', '😊']])
  })

  it('not has 😊', () => {
    expect(splitStringByEmoji('hello world')).toEqual(['hello world', []])
  })

  it('not has string', () => {
    expect(splitStringByEmoji('😊😊')).toEqual(['', ['😊', '😊']])
  })
})
