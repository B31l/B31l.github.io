---
layout: post
title: "🤝 Merge Sort"
meta: " 정렬 알고리즘 분석 (3) 합병 정렬"
categories: Algorithm
tags: Python JavaScript
comments: true
mathjax: true
---



* content
{:toc}
# 합병 정렬이란?

## 비교

비교한다

## 교환

교환한다

---





# 분석

## ⏳ 시간 복잡도

|  B(n)  |  A(n)  |  W(n)  |
| :----: | :----: | :----: |
| O(n^2) | O(n^2) | O(n^2) |

n개의 요소를 정렬할 때,

- 모든 반복에 대해 `n(n-1)/2`번 비교한다.

- 최대 `n(n-1)/2`번(모든 조건이 참일 경우) 비교한다.

## 📘 Python Code

```python
def bubble_sort(arr):
n = len(arr)
for i in range(n-1):
    for j in range(n-1, i, -1):
        if arr[j-1] > arr[j]:
            arr[j-1], arr[j] = arr[j], arr[j-1]
```

## 🌝 개선 알고리즘 1 - 조기 종료

개선한다.

---





# 결론

T(n) = O(n^2)으로 정렬 알고리즘 중에서 제일 비효율적이다.

최악의 경우 모든 반복에 대해 비교와 교환 연산을 해야 한다.
