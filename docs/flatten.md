# Flatten
> 数组扁平化

### 参数类型

```ts
arr: unknown[]
```
一层或多层嵌套的数组

### 返回值类型

```ts
arr: unknown[]
```
打平之后的数组
### use example

```ts
import { flatten } from "poor-utils-pro";
flatten([1, 2, [5, [6, [7, [8]]]], 3, 4])
// [1, 2, 5, 6, 7, 8, 3, 4]
```