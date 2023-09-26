# compareVersions

> 版本号比较， 支持alpha、beta、rc等版本号

### 参数类型

```ts
(version1: string, version2: string)
```

### 返回值类型

```ts
number
``` 

### use example 

```ts
import { compareVersions } from 'poor-utils-pro'

compareVersions('1.0.0', '1.0.1') // -1
compareVersions('1.0.0', '1.0.0') // 0
compareVersions('1.0.1', '1.0.0') // 1

compareVersions('1.0.0-alpha1', '1.0.0-alpha1') // 0
compareVersions('1.0.0-beta1', '1.0.0-alpha0') // 1
compareVersions('1.0.0-beta1', '1.0.0-rc0') // -1
compareVersions('1.0.0', '1.0.0-rc1') // 1

```