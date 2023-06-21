# SplitStringByEmoji

> 分割字符串中的emoji, 返回分割后的字符串数组和emoji数组「为什么？ emoji不可以简单以字符串的方式处理」

### 参数类型

```ts
param: string
```

### 返回值类型

```ts
string []
```


### use example

```ts
import { splitStringByEmoji } from "poor-utils-pro";

splitStringByEmoji('😊hello world😊') 
// ['hello world', ['😊', '😊']

splitStringByEmoji('hello world')
// ['hello world', []]

splitStringByEmoji('😊😊')
// ['', ['😊', '😊']]
```

