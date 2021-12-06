---
layout: post
title: "🔎 Binary Search"
meta: " 검색 알고리즘 (2) 이진 탐색"
categories: Algorithm
tags: Python
comments: true
mathjax: true
---



* content
{:toc}
이진 탐색(Binary search)

# 구현

```python
def bubble_sort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(n-1, i, -1):
            if arr[j-1] > arr[j]:
                arr[j-1], arr[j] = arr[j], arr[j-1]
```

---





# 분석

## 💡 개념

- 비교 : Key를 비교한다.

  n개의 요소에서 Key를 찾을 때 **n번 비교**한다.


## ⏳ 시간 복잡도

|            |  B(n)  |  A(n)  | W(n)   |
| :--------: | :----: | :----: | ------ |
| Key가 있음 | O(`1`) | O(`n`) | O(`n`) |
| Key가 없음 | O(`n`) | O(`n`) | O(`n`) |

---





# 개선 알고리즘

## 🤔 조기 종료

하나의 패스에서 교환이 한 번도 발생하지 않았다면, 정렬이 완료되었음을 의미한다.

```python
def bubble_sort_2(arr):
    n = len(arr)
    for i in range(n-1):
        exchanges = False
        for j in range(n-1, i, -1):
            if arr[j-1] > arr[j]:
                exchanges = True
                arr[j-1], arr[j] = arr[j], arr[j-1]

        if not exchanges:
            break
```

---





# 결론

O(n ^ 2)의 높은 시간 복잡도를 가지고 있으며, 모든 반복에 대해 비교와 교환이 이루어질 수 있으므로 같은 시간복잡도를 가진 다른 알고리즘(선택 정렬, 삽입 정렬)에 비해서도 낮은 효율을 보여준다. 그러나 **안정적인 교환(stable)**이 이루어지고 조기 종료를 통해 시간을 단축할 수 있다.

