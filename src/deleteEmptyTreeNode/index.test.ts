import deleteEmptyTreeNode from './index'

interface Node {
  children?: Node[]
  id: number
}

describe('deleteEmptyTreeNode', () => {
  it('base', () => {
    const list: Node[] = [
      {
        id: 1,
        children: [
          {
            id: 2,
            children: [],
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

    expect(deleteEmptyTreeNode(list)).toEqual([
      {
        id: 1,
        children: [
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
    ])
  })
})
