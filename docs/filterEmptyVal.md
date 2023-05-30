# filterEmptyVal

> 过滤掉对象或数组中的null、undefined

### 参数类型

```ts
type TargetObjType = {
  [propName: string]: any
}

<T extends TargetObjType>(resJson: T)
```

### 返回值类型

```ts
T
```

### use example

```ts
import { filterEmptyVal } from "poor-utils-pro";

filterEmptyVal(
  {
    a: null,
    b: {
      c: undefined,
      d: 1,
    },
  }) 

// {b:{d:1}}
```