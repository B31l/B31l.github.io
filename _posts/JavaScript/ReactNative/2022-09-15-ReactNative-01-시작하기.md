---
title: "개발 환경 설정: ReactNative"
categories: [JavaScript-ReactNative]
mathjax: true
---

* content
{:toc}
# 개발환경 구축

-   **Node.js** ([💾설치)](https://nodejs.org/ko/)

    Node.js 버전은 다음 명령어로 확인할 수 있다.

    ```sh
    $ node -v
    ```
    
-   **안드로이드 스튜디오** ([💾설치](https://www.google.com/aclk?sa=l&ai=DChcSEwizz4u-mrX6AhVLpJYKHVsJCE4YABAAGgJ0bA&sig=AOD64_1q7XmRg0ee46RKqk1D3SifXgh15g&q&adurl&ved=2ahUKEwjDsoa-mrX6AhXkIaYKHU6kDMUQ0Qx6BAgJEAE))

-   **JDK**

    JDK 11 이상을 권장한다.

-   **환경 변수 설정** (기본 경로 기준)

    | 변수             | 값                                               |
    | ---------------- | ------------------------------------------------ |
    | **ANDROID_HOME** | C:\Users\\**사용자명**\AppData\Local\Android\Sdk |
    | **JAVA_HOME**    | C:\Program Files\Java\\**jdk 버전**              |

-   **프로젝트 생성**

    ```sh
    $ npx react-native init 프로젝트명
    ```


---

# 프로젝트 폴더 구조

| 파일 / 폴더           | 설명                                                         |
| --------------------- | ------------------------------------------------------------ |
| **index.js**          | 프로젝트의 **엔트리 파일**로, 리액트 네이티브 앱의 진입점 역할을 한다. |
| **App.js**            |                                                              |
| **package.json**      |                                                              |
| **package-lock.json** |                                                              |
| **📂node_modules/**    |                                                              |
| **📂android/**         |                                                              |
| **📂ios/**             |                                                              |

---

# 기타 환경설정

## .eslintrc.js

확장 프로그램 **ESLint**이 코드를 교정하는 규칙을 정의한다.

```js
module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
```

## .gitignore

**📂node_modules/** 폴더는 용량이 매우 크기에 Github 저장소에 올리는 것이 부담된다.

**.gitignore** 파일을 생성해 Push하는 파일 또는 폴더에 예외를 적용할 수 있다.

.gitignore 파일의 규칙은 다음과 같다.

-   특정 파일

    ```
    파일명
    ```

-   특정 폴더

    ```
    폴더명/
    ```

-   특정 확장자

    ```
    *.확장자명
    ```

📂node_modules/ 폴더가 없더라도, 다음 명령을 사용하면 **package-lock.json** 파일에 저장된 정보로 패키지를 설치할 수 있다.

```sh
$ npm install
```

---