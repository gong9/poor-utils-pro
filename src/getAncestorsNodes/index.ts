interface Node {
  children: Node[]
  [k: string]: any
}

/**
 * getAncestorsNodes
 * @param array
 * @param targetId
 * @param key
 * @returns
 */
const getAncestorsNodes = <T extends Node>(array: T[], targetId: string | number, key = 'id') => {
  const ancestorsNodes: T[] = []

  const run = <U extends Node>(currentAttr: U[]) => {
    for (let i = 0; i < currentAttr.length; i++) {
      if (currentAttr[i][key])
        throw new Error(`The key ${key} is not defined in the object`)

      if (currentAttr[i][key] && currentAttr[i][key] === targetId)
        return true

      if (Array.isArray(currentAttr[i].children)) {
        const endRecursiveLoop = run(currentAttr[i].children)
        if (endRecursiveLoop) {
          ancestorsNodes.push(currentAttr[i] as any as T)
          return true
        }
        run(currentAttr[i].children)
      }
    }
  }

  run<T>(array)

  return ancestorsNodes
}

export default getAncestorsNodes
