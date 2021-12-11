---
layout: post
title: "🔎 Binary Search"
meta: " 검색 알고리즘 (2) 이진 탐색"
categories: Algorithm
tags: 문제해결
---



* content
{:toc}
# 이진 탐색

## 💡 개념

![](https://runestone.academy/runestone/books/published/pythonds3/_images/binsearch.png)

> 이진 탐색은 정렬된 리스트에 대해서만 수행할 수 있다.

- **비교**
- **종료 조건**


## ⏳ 시간 복잡도

|            | B(n) | A(n) | W(n) |
| :--------: | :--: | :--: | :--: |
| Key가 있음 |  1   | logN | logN |
| Key가 없음 | logN | logN | logN |

---





# 구현

```python
def binary_search(a_list, item):
    # 탐색 구간: 전체 리스트
    first = 0
    last = len(a_list) - 1

    # 탐색 구간의 크기가 0이상인 경우 반복
    while first <= last:
        # 탐색 구간의 중앙위치
        midpoint = (first + last) // 2
        
        if a_list[midpoint] == item:   # 항목을 찾은 경우
            return True
        
        # 항목을 아직 찾지 못한 경우
        elif item < a_list[midpoint]:  # 중앙위치 왼편으로 탐색구간 조정
            last = midpoint - 1
        else:                          # 중앙위치 오른편으로 탐색구간 조정
            first = midpoint + 1

    return False
```

---





# 개선 알고리즘

## 🤔 분할정복

```python
def binary_search_rec(a_list, item):
    if len(a_list) == 0:
        return False
    else:
        midpoint = len(a_list) // 2
        if a_list[midpoint] == item:
            return True
        
        # 재귀호출: 탐색구간 조정
        elif item < a_list[midpoint]:
            return binary_search_rec(a_list[:midpoint], item)
        else:
            return binary_search_rec(a_list[midpoint + 1 :], item)
```





# 결론

