# GetValueByKey

> 根据key获取object value

### 参数类型

```ts
interface ObjectType {
    [key: string]: any

}
<T extends ObjectType>(obj: T, key: string)
```

### 返回值类型

```ts
T|undefined
```

### use example

```ts

import { getValueByKey } from "poor-utils-pro";


const obj = {
                a: {
                    b: {
                        c: [1, 2, 3],
                    },
                },
            }
getValueByKey(obj, 'a/b/c/1')  // 2

getValueByKey(obj, 'a/b/c/3')  // undefined
```