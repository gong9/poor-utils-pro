const as = (arr: unknown[]) => {
  const res = [...arr]

  for (let i = res.length - 1; i > 0; i--) {
    const num = Math.floor(Math.random() * res.length)

    const temp = res[i]
    res[i] = res[num]
    res[num] = temp
  }

  return res
}

export default as

