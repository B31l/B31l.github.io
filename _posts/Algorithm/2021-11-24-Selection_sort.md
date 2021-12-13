---
layout: post
title: "Selection sort"
meta: " 정렬 알고리즘 (2) 선택 정렬"
categories: Algorithm
tags: 문제해결
---



* content
{:toc}
# 선택 정렬

## 💡 개념

![](https://runestone.academy/runestone/books/published/pythonds3/_images/selectionsortnew.png)

**비교** : 인접한 두 요소를 비교한다.

- n개의 요소를 정렬할 때 첫 번째 패스(pass)에서는 n-1번의 비교가 이루어지며, 모든 비교 과정이 끝나면 다음 패스로 넘어간다. 패스의 비교 횟수가 1이 될 때까지 비교하므로 총 **n(n-1)/2번 비교**한다.

- **교환** : 조건을 만족하면 교환한다.

  왼쪽 인덱스의 값이 오른쪽 인덱스의 값보다 크다면 두 요소를 교환하며, 패스가 끝날 때마다 최대값이 가장 오른쪽으로 밀려난다. 역순으로 정렬되어 있는 경우 모든 비교에 대해 교환이 이루어지므로 최대 **n(n-1)/2번 교환**한다.

## ⏳ 시간 복잡도

| B(n) | A(n) | W(n) |
| :--: | :--: | :--: |
|  N²  |  N²  |  N²  |

---





# 구현

```python
def selection_sort(a_list):
    
    for i in range(len(a_list)-1, 0, -1):
        max_idx = 0
        for j in range(i):
            if a_list[j] > a_list[max_idx]:
                max_idx = j
        
        a_list[max_idx], a_list[i] = a_list[i], a_list[max_idx]
```

---





# 결론

