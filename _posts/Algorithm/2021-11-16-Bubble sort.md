---
layout: post
title: "🍺 Bubble Sort"
meta: " 정렬 알고리즘 분석 (1) 버블 정렬"
categories: Algorithm
tags: Python JavaScript
comments: true
mathjax: true
---



* content
{:toc}
# 버블 정렬이란?

맥주 거품이 올라오는 것처럼 요소들이 한 칸씩 밀려난다.

<iframe width="375px" height="325px" src="https://b31l.github.io/bubble_sort/" frameborder="0"></iframe>

> 🍺를 클릭하면 버블 정렬의 진행 과정을 볼 수 있다.



# 코드

## 📘 Python

```python
def bubble_sort(arr):
n = len(arr)
for i in range(n-1):
	for j in range(n-1, i, -1):
		if arr[j-1] > arr[j]:
			arr[j-1], arr[j] = arr[j], arr[j-1]
```

## 📒 JavaScript

```js
function bubble_sort(arr) {
const n = arr.length;
for (let i=0; i<n-1; i++) {
	for (let j=n-1; j>i; j--) {
		if (arr[j-1] > arr[j]) {
			[arr[j-1], arr[j]] = [arr[j], arr[j-1]];
		}
	}
}
```

# 시간 복잡도

|  B(n)  |  A(n)  |  W(n)  |
| :----: | :----: | :----: |
| O(n^2) | O(n^2) | O(n^2) |

n개의 요소를 정렬할 때,

- 모든 반복에 대해 `n(n-1)/2`번 비교한다.

- 최대 `n(n-1)/2`번(모든 조건이 참일 경우) 비교한다.

# 결론

T(n) = O(n^2)으로 정렬 알고리즘 중에서 제일 비효율적이다.

최악의 경우 모든 반복에 대해 비교와 교환 연산을 해야 한다.
