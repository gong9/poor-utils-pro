import getAncestorsNodes from './index'

interface Node {
  children?: Node[]
  id: number
}

describe('getAncestorsNodes', () => {
  it('should return an array of ancestors nodes', () => {
    const treeArray: Node[] = [
      {
        id: 1,
        children: [
          {
            id: 2,
            children: [
              {
                id: 3,
              },
              {
                id: 4,
              },
            ],
          },
          {
            id: 5,
            children: [
              {
                id: 6,
              },
            ],
          },
        ],
      },
      {
        id: 7,
      },
    ]

    expect(getAncestorsNodes<Node>(treeArray, 6, 'id')).toEqual([
      {
        id: 5,
        children: [
          {
            id: 6,
          },
        ],
      },
      {
        id: 1,
        children: [
          {
            id: 2,
            children: [
              {
                id: 3,
              },
              {
                id: 4,
              },
            ],
          },
          {
            id: 5,
            children: [
              {
                id: 6,
              },
            ],
          },
        ],
      },
    ])
  })
})
