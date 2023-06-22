# DuplicateRemovalByAttributes

> 用于检查对象中是否存在重复的属性值，此方法也会检查属性的引用值

## isDuplicateByAttributes

> 用于检查是否存在重复的属性值

### 参数类型

```ts
(
  data: { [k : string]: unknown }[],
  IdentityAttr: string,
)
```

### 返回值类型

boolean

### use example

```ts
import { isDuplicateByAttributes } from "poor-utils-pro";

// base
const data = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
  { id: 3, name: "c" },
  { id: 1, name: "d" }
];

isDuplicateByAttributes(data, "id"); // true

// complex
const commonChildren = [{ id: 1, name: "a" }];

const data = [
  { id: 1, name: "a", children: commonChildren },
  { id: 2, name: "b", children: commonChildren },
  { id: 3, name: "c", children: [{ id: 1, name: "a" }] },
  { id: 1, name: "d", children: [{ id: 1, name: "a" }] }
];

isDuplicateByAttributes(data, "children"); // true
```

## duplicateRemovalByAttributes

> 用于去除重复的属性值

### 参数类型

```ts
<T>(
  data: T[],
  IdentityAttr: string,
  callback?: (preNode: T, currentNode: T) => T,
)
```
- data: 需要去重的数据
- IdentityAttr: 去重的属性
- callback: 去重时的回调函数，用于自定义去重规则

### 返回值类型

```ts
T[]
```

### use example

```ts
import { duplicateRemovalByAttributes } from "poor-utils-pro";

const data = [
        { id: 1, name: 'a', version: 1 },
        { id: 2, name: 'b', version: 1 },
        { id: 3, name: 'c', version: 1 },
        { id: 1, name: 'd', version: 2 },
      ]

duplicateRemovalByAttributes(data, 'id')

// [
//     { id: 1, name: 'a', version: 1 },
//     { id: 2, name: 'b', version: 1 },
//     { id: 3, name: 'c', version: 1 },
// ]

duplicateRemovalByAttributes(data, 'id', (preNode: Node, nextNode: Node) => {
        return preNode.version > nextNode.version ? preNode : nextNode
}
)

// [
//           { id: 1, name: 'd', version: 2 },
//           { id: 2, name: 'b', version: 1 },
//           { id: 3, name: 'c', version: 1 },
// ]

```


