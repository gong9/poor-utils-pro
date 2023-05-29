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
(
    data: { [k : string]: unknown }[],
    IdentityAttr: string,
)
```

### 返回值类型

```ts
{ [k : string]: unknown }[]
```

### use example

```ts
import { duplicateRemovalByAttributes } from "poor-utils-pro";

const data = [
        { id: 1, name: 'a' },
        { id: 2, name: 'b' },
        { id: 3, name: 'c' },
        { id: 1, name: 'd' },
      ]

duplicateRemovalByAttributes(data, 'id')

// [
//     { id: 1, name: 'a' },
//     { id: 2, name: 'b' },
//     { id: 3, name: 'c' },
// ]

```


