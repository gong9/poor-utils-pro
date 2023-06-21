# GetUrlParams

> 获取url参数

### 参数类型

```ts
url: string
```


### 返回值类型

```ts
{ [key: string]: string }
```


### use example

```ts
import { getUrlParams } from "poor-utils-pro";

// url: https://www.baidu.com?a===b&c=d

getUrlParams(curUrl) 
// {a: "===b", c: "d"}


// has hash value
// url:  https://www.baidu.com?a==#=b&c=d

getUrlParams(curUrl)
// {a: "="}

```