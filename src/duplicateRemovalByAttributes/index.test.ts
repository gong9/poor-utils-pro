import { duplicateRemovalByAttributes, isDuplicateByAttributes } from './'

describe('duplicateRemovalByAttributes', () => {
  describe('isDuplicateByAttributes', () => {
    it('simple type, repeat ', () => {
      const data = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
        { id: 1, name: 'd' },
      ]

      expect(isDuplicateByAttributes(data, 'id')).toBe(true)
    })

    it('simple type, not repeat', () => {
      const data = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
        { id: 4, name: 'd' },
      ]

      expect(isDuplicateByAttributes(data, 'id')).toBe(false)
    })

    it('complex type, not repeat', () => {
      const data = [
        { id: 1, name: 'a', children: [{ id: 1, name: 'a' }] },
        { id: 2, name: 'b', children: [{ id: 1, name: 'a' }] },
        { id: 3, name: 'c', children: [{ id: 1, name: 'a' }] },
        { id: 1, name: 'd', children: [{ id: 1, name: 'a' }] },
      ]

      expect(isDuplicateByAttributes(data, 'children')).toBe(false)
    })

    it('complex type, repeat', () => {
      const commonChildren = [{ id: 1, name: 'a' }]
      const data = [
        { id: 1, name: 'a', children: commonChildren },
        { id: 2, name: 'b', children: commonChildren },
        { id: 3, name: 'c', children: [{ id: 1, name: 'a' }] },
        { id: 1, name: 'd', children: [{ id: 1, name: 'a' }] },
      ]

      expect(isDuplicateByAttributes(data, 'children')).toBe(true)
    })
  })

  describe('duplicateRemovalByAttributes', () => {
    it('simple type, repeat ', () => {
      const data = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
        { id: 1, name: 'd' },
      ]

      expect(duplicateRemovalByAttributes(data, 'id')).toEqual(
        [
          { id: 1, name: 'a' },
          { id: 2, name: 'b' },
          { id: 3, name: 'c' },
        ],
      )
    })

    it('simple type, not repeat', () => {
      const data = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
        { id: 4, name: 'd' },
      ]

      expect(duplicateRemovalByAttributes(data, 'id')).toEqual([
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
        { id: 4, name: 'd' },
      ])
    })

    it('complex type, not repeat', () => {
      const data = [
        { id: 1, name: 'a', children: [{ id: 1, name: 'a' }] },
        { id: 2, name: 'b', children: [{ id: 1, name: 'a' }] },
        { id: 3, name: 'c', children: [{ id: 1, name: 'a' }] },
        { id: 1, name: 'd', children: [{ id: 1, name: 'a' }] },
      ]

      expect(duplicateRemovalByAttributes(data, 'children')).toEqual(
        [
          { id: 1, name: 'a', children: [{ id: 1, name: 'a' }] },
          { id: 2, name: 'b', children: [{ id: 1, name: 'a' }] },
          { id: 3, name: 'c', children: [{ id: 1, name: 'a' }] },
          { id: 1, name: 'd', children: [{ id: 1, name: 'a' }] },
        ],
      )
    })

    it('complex type, repeat', () => {
      const commonChildren = [{ id: 1, name: 'a' }]
      const data = [
        { id: 1, name: 'a', children: commonChildren },
        { id: 2, name: 'b', children: commonChildren },
        { id: 3, name: 'c', children: [{ id: 1, name: 'a' }] },
        { id: 1, name: 'd', children: [{ id: 1, name: 'a' }] },
      ]

      expect(duplicateRemovalByAttributes(data, 'children')).toEqual([
        { id: 1, name: 'a', children: commonChildren },
        { id: 3, name: 'c', children: [{ id: 1, name: 'a' }] },
        { id: 1, name: 'd', children: [{ id: 1, name: 'a' }] },
      ])
    })
  })

  interface Node {
    id: number
    name: string
    version: number
  }

  describe('test callback', () => {
    it('simple repeat ', () => {
      const data = [
        { id: 1, name: 'a', version: 1 },
        { id: 2, name: 'b', version: 1 },
        { id: 3, name: 'c', version: 1 },
        { id: 1, name: 'd', version: 2 },
      ]
      expect(duplicateRemovalByAttributes(data, 'id', (preNode: Node, nextNode: Node) => {
        return preNode.version > nextNode.version ? preNode : nextNode
      })).toEqual(
        [
          { id: 1, name: 'd', version: 2 },
          { id: 2, name: 'b', version: 1 },
          { id: 3, name: 'c', version: 1 },
        ],
      )
    })
  })
})
