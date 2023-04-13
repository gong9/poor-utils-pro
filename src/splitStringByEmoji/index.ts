import emojiRegex from 'emoji-regex'

/**
 * 分割字符串中的emoji
 * @example splitStringByEmoji('😊hello world😊') // ['hello world',['😊','😊']]
 * @param string 
 * @returns 
 */
const splitStringByEmoji = (string: string) => {
  const emojis = []
  const nonEmojis = []

  const regex = emojiRegex()
  let match
  let lastIndex = 0

  while ((match = regex.exec(string))) {
    const emoji = match[0]
    const nonEmoji = string.slice(lastIndex, match.index)

    if (nonEmoji)
      nonEmojis.push(nonEmoji)

    emojis.push(emoji)
    lastIndex = regex.lastIndex
  }

  const nonEmoji = string.slice(lastIndex)

  if (nonEmoji)
    nonEmojis.push(nonEmoji)

  return [nonEmojis.join(','), emojis]
}

export default splitStringByEmoji