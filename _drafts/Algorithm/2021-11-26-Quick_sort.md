---
layout: post
title: "Quick sort"
meta: " 정렬 알고리즘 (4) 퀵 정렬"
categories: Algorithm
tags: 문제해결
---



* content
{:toc}
# 퀵 정렬

## 💡 개념

- **피벗 지정**

  ![](https://runestone.academy/runestone/books/published/pythonds3/_images/firstsplit.png)

  여기서는 리스트의 가장 왼쪽 원소를 기준으로 잡는다.

- **분할 정복**

  ![](https://runestone.academy/runestone/books/published/pythonds3/_images/partitionA.png)

  블라블라

- **재귀**

  ![](https://runestone.academy/runestone/books/published/pythonds3/_images/partitionB.png)

  블라블라

## ⏳ 시간 복잡도

|    B(n)    |    A(n)    |  W(n)   |
| :--------: | :--------: | :-----: |
| O(`nlogn`) | O(`nlogn`) | O(`n²`) |

---





# 구현

```python
# 분할과 정복. 피벗은 맨 왼편 항목. 반환값은 피벗의 최종 자리 위치
def partition(a_list, first, last):
    pivot_val = a_list[first]   # 피벗
    left_mark = first + 1       # 탐색 구간 시작
    right_mark = last           # 탐색 구간 끝
    done = False                # 탐색 종료여부 확인

    while not done:
        while left_mark <= right_mark and a_list[left_mark] < pivot_val:
            left_mark = left_mark + 1
        while left_mark <= right_mark and a_list[right_mark] >= pivot_val:
            right_mark = right_mark - 1
        
        # 자리 교환
        if right_mark < left_mark:
            done = True
        else:
            a_list[left_mark], a_list[right_mark] = a_list[right_mark], a_list[left_mark]
            
    # 피벗 자리 교환
    a_list[first], a_list[right_mark] = a_list[right_mark], a_list[first]

    # 피벗 위치 반환
    return right_mark
```

```python
# 재귀 보조함수: 리스트의 지정된 구간에 대해 partion() 함수 재귀적으로 활용

def quick_sort_helper(a_list, first, last):
    if first < last:
        split = partition(a_list, first, last)

        quick_sort_helper(a_list, first, split - 1)
        quick_sort_helper(a_list, split + 1, last)
```

```python
# 재귀 함수
def quick_sort(a_list):
    quick_sort_helper(a_list, 0, len(a_list) - 1)
```

---





# 결론

