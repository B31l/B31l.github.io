---
layout: post
meta: "learn-TS-1"
title: "타입스크립트 (1): 프로젝트 만들기"
categories: TypeScript
tags: Node_js
---

* content
{:toc}


# 타입스크립트 설치하기!

## Requirement

- **VSCode**

  - **Code Runner**

- **Node.js**

- **타입스크립트 컴파일러**

  ```sh
  npm i -g typescript
  ```

## Start

```typescript
console.log("Hello World!")
```

자바스크립트로 변환한다.

```sh
tsc hello.ts
```

변환 후 실행까지

```sh
npm i -g ts-node
```

```sh
ts-node hello.ts
```

---

# 프로젝트 만들기!

```sh
npm init --y
```



<u style="background:#ffcc33">tsconfig.json</u>

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "ES5",
    "moduleResolution": "node",
    "outDir": "dist",
    "baseUrl": ".",
    "sourceMap": true,
    "downlevelIteration": true,
    "noImplicitAny": false,
    "paths": { "*": ["node_modules/*"] }
  },
  "include": ["src/**/*"]
}
```









---

# Ref

![](https://image.aladin.co.kr/product/23421/79/cover500/k092638385_1.jpg)

