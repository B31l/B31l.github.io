---
layout: post
title: "🚀 Quick sort"
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

  블라블라

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
def bubble_sort(arr):
    n = len(arr)
    for i in range(n-1):
        for j in range(n-1, i, -1):
            if arr[j-1] > arr[j]:
                arr[j-1], arr[j] = arr[j], arr[j-1]
```

---





# 결론

O(n ^ 2)의 높은 시간 복잡도를 가지고 있으며, 모든 반복에 대해 비교와 교환이 이루어질 수 있으므로 같은 시간복잡도를 가진 다른 알고리즘(선택 정렬, 삽입 정렬)에 비해서도 낮은 효율을 보여준다. 그러나 **안정적인 교환(stable)**이 이루어지고 조기 종료를 통해 시간을 단축할 수 있다.

