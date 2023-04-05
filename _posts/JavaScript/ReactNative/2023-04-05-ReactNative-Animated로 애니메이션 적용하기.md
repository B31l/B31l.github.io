---
title: "ReactNative: Animated로 애니메이션 적용하기"
categories: [JavaScript-ReactNative]
mathjax: true
---

* content
{:toc}
먼저, 애니메이션 작업에 필요한 패키지를 import합니다.

> ```jsx
> import React, {useRef} from 'react';
> import {Animated} from 'react-native';
> ```



---

# useRef로 스타일의 초깃값 설정

useRef를 통해 설정한 값은, 함수형 컴포넌트의 멤버 변수처럼 사용할 수 있습니다. 컴포넌트 생성 시에 설정되어, 컴포넌트가 사라질 때까지 재사용할 수 있습니다.

| useState를 사용해도 되지 않을까용?                           |
| ------------------------------------------------------------ |
| useState는 값이 변화할 때마다 리렌더링이 발생하므로, 리렌더링이 필요하면 useState, 그렇지 않으면 useRef ㄱㄱ |

---



# Animated

> ```jsx
> const animation = useRef(new Animated.Value(1)).current;
> ```

useRef를 사용해 선언한 변수 animation의 초깃값은 1입니다. 이 값을 어떻게 사용할지는 바로 다음 코드에서 살펴보겠습니다.



`Animated.` 뒤에 컴포넌트의 이름을 붙이는 방법으로 애니메이션을 적용할 컴포넌트를 지정할 수 있습니다(예제에서는 View 사용).

>```jsx
><Animated.View style={{opacity: animation}}></Animated.View>
>```

방금 전 설정한 대로 opacity 값은 1입니다.

`Animated.timing` 함수를 사용해 이 값을 변경할 수 있습니다.

```jsx
animation.timing(animation, {
    toValue: 0,
    useNativeDriver: true, // 
}).start(() => {
    // 콜백 함수: 애니메이션이 끝나고 호출됨
})
```

`toValue` 및 `useNativeDriver` 값은 필수로 지정해야 합니다.

- **toValue** 어떤 값으로 변경할지 지정합니다.

- **useNativeDriver** 애니메이션 처리 작업 시 네이티브 드라이버를 사용 여부를 지정합니다.

  true로 설정 시 네이티브 레벨인 만큼 퍼포먼스가 향상되지만, non-layout 프로퍼티(ex: transform, opacity 등)에만 적용 가능합니다. layout 프로퍼티(top, width, margin, padding 등)에는 적용할 수 없습니다.

  위 코드는 opacity(투명도)를 변화시키는 애니메이션이므로, useNativeDriver를 true로 지정하겠습니다.

Pressable 등의 컴포넌트에서 버튼을 누르는 동작(onPress)에 animation.timing 함수를 지정하는 식으로 사용할 수 있겠죵?

---