# deleteEmptyTreeNode

> 树形结构删除文件夹节点，会进行回溯删除。最深层的文件夹节点会被删除，其父节点如果没有子节点，也会被删除，依次类推。

### 参数类型

```ts
interface Node {
  children?: Node[]
  [k: string]: any
}

<T extends Node>(currentList: T[])
```

### 返回值类型

```ts
<T extends Node>(currentList: T[])
```

### use example

```ts
import { deleteEmptyTreeNode } from 'poor-utils-pro'

interface Node {
  children?: Node[]
  id: number
}

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

deleteEmptyTreeNode(list)

=> [
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
    ]
```