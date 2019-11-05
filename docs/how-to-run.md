> ## pre-install

```bash
$ git clone git@github.com:ZQ-jhon/try-leetcode.git
$ yarn i 
```

> ## in-test

```typescript
// import timer tool
import { TimeStatistics } from 'utils/time-log';
const timer = new TimeStatistics(test_method, [test_case1, test_case2...]);
```
then, open cmd and run:
```bash
ts-node your_methodFile.ts_path
```