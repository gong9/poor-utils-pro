# getAncestorsNodes

> 获取祖先路径节点

```ts
interface Node {
  children: Node[]
  [k: string]: any
}

<T extends Node>(array: T[], targetId: string | number, key = 'id')

```
-> array 数据源
-> targetId 目标节点id
-> key 节点id的key值，默认为'id'

### 返回值类型

```ts
T[]
```

### use example

```ts
import { getAncestorsNodes } from "poor-utils-pro";

const treeArray = [
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
          }
        ]
      },
      {
        id: 5,
        children: [
          {
            id: 6,
          }
        ]
      }
    ]
  },
  {
    id: 7,
  }
]

getAncestorsNodes(treeArray,6,'id')

=> [
  {
    "id": 5,
    "children": [
      {
        "id": 6
      }
    ]
  },
  {
    "id": 1,
    "children": [
      {
        "id": 2,
        "children": [
          {
            "id": 3
          },
          {
            "id": 4
          }
        ]
      },
      {
        "id": 5,
        "children": [
          {
            "id": 6
          }
        ]
      }
    ]
  }
]
```
