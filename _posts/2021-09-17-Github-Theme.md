---
layout: article
current: post
cover:
navigation: True
title: [Github] Redo 
tags: [Github]
class: post-template
subclass: 
author: B31l
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

# 1. _config.yml 수정하기

```yaml
# Welcome to Jekyll!
#
# This config file is meant for settings that affect your whole blog, values
# which you are expected to set up once and rarely need to edit after that.
# For technical reasons, this file is *NOT* reloaded automatically when you use
# 'jekyll serve'. If you change this file, please restart the server process.
#
# ,--------.      ,--.   ,--. ,--.
# '--.  .--',---.  \  `.'  /,-'  '-.
#    |  |  | .-. :  .'    \ '-.  .-'
#    |  |  \   --. /  .'.  \  |  |
#    `--'   `----''--'   '--' `--'




## => Site Settings
##############################
text_skin: dark # "default" (default), "dark", "forest", "ocean", "chocolate", "orange"
highlight_theme: tomorrow-night-bright # "default" (default), "tomorrow", "tomorrow-night", "tomorrow-night-eighties", "tomorrow-night-blue", "tomorrow-night-bright"
url     : https://B31l.github.io
baseurl : # does not include hostname
title   : BELFRY
description: > # this means to ignore newlines until "Language & timezone"
  


## => Language and Timezone
##############################
lang: # the language of your site, default as "en"
timezone: # see https://en.wikipedia.org/wiki/List_of_tz_database_time_zones for the available values


## => Author and Social
##############################
author:
  type      : # "person" (default), "organization"
  name      : B31l
  url       : https://B31l.github.io
  avatar    : # path or url of avatar image (square)
  bio       : I am an amazing person.
  email     :
  facebook  : # "user_name" the last part of your profile url, e.g. https://www.facebook.com/user_name
  twitter   : # "user_name" the last part of your profile url, e.g. https://twitter.com/user_name
  weibo     : # "user_id"   the last part of your profile url, e.g. https://www.weibo.com/user_id/profile?...
  googleplus: # "user_id"   the last part of your profile url, e.g. https://plus.google.com/u/0/user_id
  telegram  : # "user_name" the last part of your profile url, e.g. https://t.me/user_name
  medium    : # "user_name" the last part of your profile url, e.g. https://medium.com/user_name
  zhihu     : # "user_name" the last part of your profile url, e.g. https://www.zhihu.com/people/user_name
  douban    : # "user_name" the last part of your profile url, e.g. https://www.douban.com/people/user_name
  linkedin  : # "user_name" the last part of your profile url, e.g. https://www.linkedin.com/in/user_name
  github    : B31l
  npm       : # "user_name" the last part of your profile url, e.g. https://www.npmjs.com/~user_name


## => GitHub Repository (if the site is hosted by GitHub)
##############################
repository: B31l/B31l.github.io
repository_tree: master


## => Paths
##############################
paths:
  root    : # title link url, "/" (default)
  home    : # home layout url, "/" (default)
  archive : # "/archive.html" (default)
  rss     : # "/feed.xml" (default)


## => Post
##############################
## excerpt
excerpt_separator: <!--more-->

## license
license: CC-BY-NC-4.0 # "CC-BY-4.0", "CC-BY-SA-4.0", "CC-BY-NC-4.0", "CC-BY-ND-4.0"

## TOC
toc:
  selectors: # "h1,h2,h3" (default)


## => Markdown Enhancements
##############################
## Mathjax
mathjax: # false (default), true
mathjax_autoNumber: # false (default), true

## Mermaid
mermaid: # false (default), true

## Chart
chart: # false (default), true


## => Paginate
##############################
paginate: 8
paginate_path: /page:num # don't change this unless for special need


## => Sources
##############################
sources: # bootcdn (default), unpkg


## => Sharing
##############################
sharing:
  provider: false # false (default), "addtoany", "addthis", "custom"

  ## AddThis
  addthis:
    id: # AddThis pubid, e.g. ra-5xxxxxxxxxxx


## => Comments
##############################
comments:
  provider: false # false (default), "disqus", "gitalk", "valine", "custom"

  ## Disqus
  disqus:
    shortname: B31l

  ## Gitalk
  # please refer to https://github.com/gitalk/gitalk for more info.
  gitalk:
    clientID    : # GitHub Application Client ID
    clientSecret: # GitHub Application Client Secret
    repository  : # GitHub repo
    owner       : # GitHub repo owner
    admin: # GitHub repo owner and collaborators, only these guys can initialize GitHub issues, IT IS A LIST.
      # - your GitHub Id

  ## Valine
  # please refer to https://valine.js.org/en/ for more info.
  valine:
    app_id      : # LeanCloud App id
    app_key     : # LeanCloud App key
    placeholder : # Prompt information
    visitor     : # false (default)
    meta        : # "[nick, mail, link]" (default) nickname, E-mail, Personal-site


## => Pageview
##############################
pageview:
  provider: false # false (default), "leancloud", "custom"

  ## Leancloud
  leancloud:
    app_id    : # LeanCloud App id
    app_key   : # LeanCloud App key
    app_class : # LeanCloud App class


## => Search
##############################
search:
  provider: dispus # "default" (default), false, "google", "custom"

  ## Google Custom Search Engine
  google:
    custom_search_engine_id: # Google Custom Search Engine ID


## => Analytics
##############################
analytics:
  provider: false # false (default), "google", "custom"

  ## Google Analytics
  google:
    tracking_id : # Google Analytics id for the site
    anonymize_ip: false # Anonymize IP tracking for Analytics


## => Build
##############################
markdown    : kramdown
highlighter : rouge
permalink   : date

exclude:
  - CHANGELOG.md
  - HOW_TO_RELEASE.md
  - Gemfile
  - Gemfile.lock
  - LICENSE
  - README-*.md
  - README.md
  - gulpfile.js
  - jekyll-text-theme.gemspec
  - package-lock.json
  - package.json
  - /docs
  - /node_modules
  - /screenshots
  - /test
  - /vendor

defaults:
  - scope:
      path: ""
      type: posts
    values:
      layout: article
      sharing: false
      license: false
      aside:
        toc: true
      show_edit_on_github: false
      show_subscribe: false
      key: anything
      mode: immersive
      header:
        theme: dark
      article_header:
        type: overlay
        theme: dark
        background_image: # 포스트 헤더 배경이미지 경로 및 그라데이션 설정
          src: https://cdn.pixabay.com/photo/2018/09/16/22/08/software-3682509_960_720.jpg
          gradient: 'linear-gradient(rgba(0, 0, 0, .3), rgba(0, 0, 0, .0))'
      pageview: true


## => Plugins
##############################
plugins:
  - jekyll-feed
  - jekyll-paginate
  - jekyll-sitemap
  - jemoji
```



---



# 2. 하단의 “Powered by” 문구 제거

`_includes/footer.html` : 제거

```html
, Powered by <a title="Jekyll is a simple, blog-aware, static site generator." href="http://jekyllrb.com/">Jekyll</a> & <a title="TeXt is a super customizable Jekyll theme." href="https://github.com/kitian616/jekyll-TeXt-theme">TeXt Theme</a>.
```



---



# 3. [헤더] 발췌문 제거 / 부제목 띄우기

`_layouts/page.html` : 수정

```html
<p class="overlay__excerpt">{{ page.excerpt | strip_html | strip_newlines | strip | truncate: _article_header_excerpt_truncate }}</p>
```

수정한다.

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
$main-color-1: ##ffcc33; // title-hover, read more, archive-tag, 블록지정색 등 대표색 변경
$text-color-theme-dark-l:  ##ffcc33; // 마크다운 가로선 색변경
$text-background-color: #000; // 인라인(inline) 코드의 배경색 변경
```



---



# 6. 하이라이터 변경

`_sass/common/_reset.scss` : 수정

```scss
code {
  font-size: map-get($base, font-size-xs); // 이 라인 삭제하면 인라인 코드에서 마크다운의 헤더 크기가 정상적으로 적용됨
  line-height: map-get($base, line-height-sm); // 높이 설정
  font-weight: map-get($base, font-weight-bold); // 인라인, 블록 코드의 폰트 굵기 변경 가능
  color: ##ffcc33; // 인라인 코드의 폰트 색상 변경
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
  background-color: ##ffcc33; // 스크롤바 색상
}

::-webkit-scrollbar-track:horizontal{
  background-color: ##ffcc33; // 가로 스크롤바 색상
}
```

