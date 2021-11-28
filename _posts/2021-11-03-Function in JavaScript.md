---
layout: post
title: "💎 Function in JavaScript"
meta: " 자바스크립트에서 함수 사용하기"
author: B31l
categories: Note
tags: JavaScript
comments: true
mathjax: true
---



* content
{:toc}
# 함수 선언문

Python과 유사, 매개변수와 리턴값의 타입은 표시하지 않는다.

**Function Hoisting O**

```js
function add(x, y) {
    return x + y;
}
```

>**In [1]**
>
>```js
>console.log(add(10, 20));
>```
>
>**Out [1]**
>
>```
>30
>```

---

# 익명 함수 표현식

함수 리터럴을 변수에 할당

**Function Hoisting X**

```js
var foo = function (x, y) {
    return x + y;
};
```

>**In [2]**
>
>```js
>console.log(foo(10, 20));
>```
>
>**Out [2]**
>
>```
>30
>```

---

# 기명 함수 표현식



함수 이름을 외부 코드에서 접근 불가(변수명으로만 접근 가능)

```js
var foo = function add (x, y) {
    return x + y;
};
```

>**In [3]**
>
>```js
>console.log(add(10, 20));
>```
>
>**Out [3]**
>
>```
>ReferenceError: add is not defined
>```

---

# Function() 생성자 함수

이런 방식도 있다 정도만 알아두자

```js
var foo = new Function('x', 'y', 'return x + y');
```

>**In [4]**
>
>```js
>console.log(foo(10, 20));
>```
>
>**Out [4]**
>
>```
>30
>```

---

# 

