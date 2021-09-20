---
title: Redo and Custom
tags: TeXt
---





ub 블로그를 구성하는 파일의 수정과 Push를 반복하던 중, 어느 순간 404 에러와 함께 블로그가 맛이 가 버렸다.

그냥 리셋하는게 빠른 것 같아서 리셋했다.

| 이름      | 비고                                                         |
| --------- | ------------------------------------------------------------ |
| 테마      | TeXt 테마                                                    |
| 헤더 사진 | https://cdn.pixabay.com/photo/2018/09/16/22/08/software-3682509_960_720.jpg |
| 메인 색상 | #FFcc33                                                      |



---

TeXt 테마 커스텀에 대한 자료는 거의 찾을 수 없었습니다. 자료를 제공해 주신 `syki66`님께 무한한 감사를 드립니다.

 **참고자료**

- https://syki66.github.io/blog/2020/04/16/TeXt-theme-config.html
- https://syki66.github.io/blog/2020/04/17/TeXt-theme-detailed-customization.html



# 1. 하단의 “Powered by” 문구 제거

`_includes/footer.html` : 제거

```html
, Powered by <a title="Jekyll is a simple, blog-aware, static site generator." href="http://jekyllrb.com/">Jekyll</a> & <a title="TeXt is a super customizable Jekyll theme." href="https://github.com/kitian616/jekyll-TeXt-theme">TeXt Theme</a>.
```



---



# 2. 홈 화면 변경

`_layouts/home.html` : 변경

```html
articles:
  data_source: paginator.posts
  article_type: BlogPosting
  show_cover: false
  show_excerpt: false
  show_readmore: true
  show_info: true
```



---



# 3. [헤더] 발췌문 제거 / 부제목 띄우기

`_layouts/page.html` : 수정

```html
<p class="overlay__excerpt">{{ page.excerpt | strip_html | strip_newlines | strip | truncate: _article_header_excerpt_truncate }}</p>
```

```html
<p class="overlay__excerpt">{{ page.subtitle }}</p>
```



---

# 4. [헤더] 이미지 높이 변경

`_layouts/page.html` : 추가

```html
<div class="hero hero--dark overlay" style="{{ _header_style }} height:50vh;">
```



---



# 5. 테마색 변경

`_sass/skins/_dark.scss` : 수정

```scss
$main-color-1: #ffcc33; // title-hover, read more, archive-tag, 블록지정색 등 대표색 변경
$text-color-theme-dark-l:  #ffcc33; // 마크다운 가로선 색변경
$text-background-color: #000; // 인라인(inline) 코드의 배경색 변경
```



---



# 6. 하이라이터 변경

`_sass/common/_reset.scss` : 수정 및 추가

```scss
code {
  font-size: map-get($base, font-size-xs); // 이 라인 삭제하면 인라인 코드에서 마크다운의 헤더 크기가 정상적으로 적용됨
  line-height: map-get($base, line-height-sm); // 높이 설정
  font-weight: map-get($base, font-weight-bold); // 인라인, 블록 코드의 폰트 굵기 변경 가능
  color: #ffcc33; // 인라인 코드의 폰트 색상 변경
}

// 여기 부분을 추가해줘야 인라인 코드와 블록 코드의 색을 다르게 설정 할수 있다.
pre, code {
  color: #eaeaea; // 블록 코드 색상 변경
}
```



---



# 7. 스크롤바 커스터마이징

`_sass/common/_reset.scss` : 추가

```scss
::-webkit-scrollbar{
  width: 6px; // 세로 스크롤의 너비
  height: 3px; // 가로 스크롤의 너비
  background-color: #121212; // 스크롤의 기본 배경색상
  
}
::-webkit-scrollbar-thumb{
  border-radius: 3px; // 스크롤바 곡률
  background-color: #ffcc33; // 스크롤바 색상
}

::-webkit-scrollbar-track:horizontal{
  background-color: #ffcc33; // 가로 스크롤바 색상
}
```

