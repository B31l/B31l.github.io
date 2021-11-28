---
layout: post
title: "💍 Simple React"
meta: "간단 리액트"
author: B31l
categories: Note
tags: JavaScript
comments: true
mathjax: true
---



* content
{:toc}
# 개요



리액트의 개념을 이해하기 위해 서부극 영화 한 편을 떠올리자. 왜냐고?

~~~html
<body>
    <div id="root"></div>
</body>
~~~

수많은 태그가 있어야 할 HTML 술집에는 id가 포함된 div 하나 뿐이다.

술집을 쓸어버린 뒤 쪽지 하나만 남기고 홀연히 사라진 서부극의 카우보이가 생각나지 않는가?

말 발자국을 쫓아가 JS 코드를 보니 아니나 다를까, root 상수에 카우보이의 본거지가 있었다.

```js
const root = document.getElementById("root");
```

잠깐! React를 사용하기 위해서는 HTML에 몇 줄의 코드를 남겨야 한다.

~~~html
<script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
<script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
<script type="text/babel"></script>
~~~

마지막 줄 안에 React 코드가 들어간다. 직접 써도 좋고, `src`로 연결해도 좋다.

---

# 리액트에 HTML 남기기

당신이 찾아 헤매던 HTML 태그는 이렇게 전시되어 있었다. 카우보이===악질

```react
const Title = () => (
    <h3 id="title" onMouseEnter={() => console.log("Mouse enter")}>
        Hello I'm a title
    </h3>
);
```

- 태그는 

```react
const Button = () => (
    <button 
        style={{backgroundColor: "tomato",}} 
        onClick={() => console.log("I'm clicked'")}>
        Click me
    </button>
);
```



Title, Button 같은 걸 Component라고 하는데, 주의할 점은 대문자여야 한다. 대문자===죽은애 라고 생각하자.

Hello 얘는 살아있는 놈이다. 그래서 button이 소문자다.

```react
const Container = (
    <div>
        <button>Hello</button> 
        <Title />
        <Button />
    </div>
);
```

사이좋게 컨테이너에 들어간다. 마지막으로 `ReactDOM`로 전시했다.

```react
ReactDOM.render(Container, root);
```

Container는 root로. ㅎㅎ

응애. 글 좀 다듬자 ㅎ

---
