---
layout: post
title: "🔎 Sequential Search"
meta: " 검색 알고리즘 (1) 순차 탐색"
categories: Algorithm
tags: 문제해결
---



* content
{:toc}
# 순차 탐색

## 💡 개념

![](https://runestone.academy/runestone/books/published/pythonds3/_images/seqsearch.png)

- **비교**
- **종료 조건**

## ⏳ 시간 복잡도

|               | B(n) | A(n) | W(n) |
| :-----------: | :--: | :--: | :--: |
| Key가 있을 때 |  1   |  N   |  N   |
| Key가 없을 때 |  N   |  N   |  N   |

---





# 구현

```python
def sequential_search(a_list, item):
    pos = 0

    while pos < len(a_list):
        if a_list[pos] == item:    # 찾은 경우
            return True
        else:
            pos = pos + 1
    
    # 찾지 못한 경우 False 반환
    
    return False
```

---





# 개선 알고리즘

## 🤔 정렬된 리스트

```python
def ordered_sequential_search(a_list, item):
    pos = 0
    
    while pos < len(a_list):
        if a_list[pos] == item:
            return True
        else:
            if a_list[pos] > item:   # 항목이 찾는 값보다 큰 경우 바로 종료
                return False
            else:
                pos = pos + 1

    return False
```

## 😀 보초법

보초법이라는 게 있음

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



