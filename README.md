## Git submodule
```
|--Algorithm-Docs
  |-- docs
  |-- scripts
  |-- try-leetcode // (this is the algorithm repo)
  |-- package.json
  |-- .gitignore
  |-- .gitmodules
  |-- README.md // you are here
```

## Sync child repo and auto compile
see scripts directory

## Pre-Use
clone this repo, then running command:
```bash
$ npm i
$ npm run serve
```
open localhost:3000 for local preview

## The source .ts file written rule
If you want embeding image to .ts file, using:
```typescript
// Be attention for under row comment code !!!
// ![image-alt](image/source/xxx.png)

function foo() {
  // do sth with algorithm
}
```

Then, put the image equal directory with .ts, look like:
```
|--child_directory
  |-- 04.ts
  |-- 04.png
```
Naming the image as index.

**Why**? please look compile code `scripts/compile.ts`

It's helpful for parse markdown image syntax and showing in terminal article!


## Online Docs
[https://zq-jhon.github.io/algorithm-docs](https://zq-jhon.github.io/algorithm-docs)
