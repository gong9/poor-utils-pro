# arrayQuickFill

> 快速将n个值填充到数组中的某个位置

### 参数类型

```ts
<T>(targetArr: T[], data: T, num: number, index?: number)

```

- targetArr 目标数组
- data 填充的数据
- num 填充的数量
- index 填充的位置（不指定默认放到最后）

### 返回值类型

```ts
T[]
```

### use example

```ts
import { arrayQuickFill } from "poor-utils-pro";

arrayQuickFill([1, 2, 3, 4], 10, 10, 1)

// [1, 10, 10, 10, 10, 10, 10, 10, 10, 10, 2, 3, 4]

```