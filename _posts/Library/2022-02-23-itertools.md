---
title: "파이썬으로 순열과 조합 계산하기"
categories: [Library]
mathjax: true
---

* content
{:toc}
# 개요

```python
import itertools
```

> https://docs.python.org/ko/3/library/itertools.html

---

# 조합형 이터레이터

## 순열

$_n{\rm P}_r = \frac{n!}{(n-r!)}$

permutations(길이 n의 반복 가능한 객체, r)

## 중복 순열

$_n{\rm Π}_r = n^r$

product(길이 n의 반복 가능한 객체, r)

## 조합

$_n{\rm C}_r = \frac{n!}{(n-r)!r!}$

combinations(길이 n의 반복 가능한 객체, r)

## 중복 조합 

$_n{\rm H}_r = _{n+r-1}{\rm C}_r$

combinations_with_replacement(길이 n의 반복 가능한 객체, r)

