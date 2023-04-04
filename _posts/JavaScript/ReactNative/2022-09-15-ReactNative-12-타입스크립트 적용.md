---
title: "ReactNative에 타입스크립트 적용하기"
categories: [JavaScript-ReactNative]
mathjax: true
---

* content
{:toc}
# 타입스크립트 개요



---

# 타입스크립트 기본 문법



## 기본 타입

## 배열 타입



## 함수 타입

## 인터페이스

## Type Alias

## Generic



---

# ReactNative에 타입스크립트 적용하기

## Props 사용

Props를 사용하는 리액트 네이티브 컴포넌트의 경우, Props의 타입 역시 지정해야 한다.

```tsx
export default function Profile({ name }: IProfile) {
    return (
    	<View>
        	<Text>{name}</Text>
        </View>
    )
}
```

Props의 타입은 인터페이스를 사용해 지정한다.

```tsx
interface IProfile {
    name: string;
}
```

### 생략 가능

Props 중 특정 매개변수를 생략 가능(Optional)하도록 만들 수 있다.

인터페이스 내 해당하는 필드의 타입을 선언할 때, `:` 대신 `?:`을 사용하면 타입을 옵셔널로 선언할 수 있다.

```tsx
interface IProfile {
    name?: string;
}
```

### 기본값 지정

- 방법 1: 매개변수에 기본값을 지정한다.

  ```tsx
  export default function Profile({ name = '홍길동' }: IProfile) {
      return (
      	<View>
          	<Text>{name}</Text>
          </View>
      )
  }
  ```

  기본값을 지정하는 익숙한 방법이다. 단 이 방법을 사용해 기본값을 지정한 필드의 타입은 반드시 `?:`를 사용해 선언해야만 하며, 그렇지 않으면 오류가 발생한다).

- 방법 2: `defaultProps`를 사용한다.

  ```tsx
  Profile.defaultProps = {
  	name: '홍길동'
  }
  ```

  defaultProps을 사용해 기본값을 지정한 경우, 타입을 옵셔널로 선언하지 않아도 오류가 발생하지 않는다.

---

