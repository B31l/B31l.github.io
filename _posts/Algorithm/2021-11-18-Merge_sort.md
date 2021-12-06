---
layout: post
title: "🤝 Merge sort"
meta: " 정렬 알고리즘 (3) 합병 정렬"
categories: Algorithm
tags: Python JavaScript
comments: true
mathjax: true
---



* content
{:toc}
합병 정렬(Merge sort)

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

- **비교** : 인접한 두 요소를 비교한다.

  n개의 요소를 정렬할 때 첫 번째 패스(pass)에서는 n-1번의 비교가 이루어지며, 모든 비교 과정이 끝나면 다음 패스로 넘어간다. 패스의 비교 횟수가 1이 될 때까지 비교하므로 총 **n(n-1)/2번 비교**한다.

- **교환** : 조건을 만족하면 교환한다.

  왼쪽 인덱스의 값이 오른쪽 인덱스의 값보다 크다면 두 요소를 교환하며, 패스가 끝날 때마다 최대값이 가장 오른쪽으로 밀려난다. 역순으로 정렬되어 있는 경우 모든 비교에 대해 교환이 이루어지므로 최대 **n(n-1)/2번 교환**한다.

## ⏳ 시간 복잡도

|    B(n)    |    A(n)    |    W(n)    |
| :--------: | :--------: | :--------: |
| O(`nlogn`) | O(`nlogn`) | O(`nlogn`) |

---





# 개선 알고리즘

## 🤔 구간 지정

하나의 패스에서 교환이 한 번도 발생하지 않았다면, 정렬이 완료되었음을 의미한다.

```python
def merge_sort(a_list):
    # 합병 정렬을 실행한다.
    # 사용자로부터 정렬되지 않은 리스트를 입력받는다.
    print(a_list)
    left = 0                        # 왼쪽 포인터
    right = len(a_list) - 1         # 오른쪽 포인터
    DM(a_list, left, right)         # 리스트와 포인터를 전달


def DM(a_list, left, right):
    # Divide & Merge
    if left < right:

        # 기준점 설정
        mid = (left + right - 1) // 2

        # 포인터 생성
        front_left, front_right, rear_left, rear_right = left, mid, mid+1, right

        # 재귀 실행
        DM(a_list, front_left, front_right)
        DM(a_list,  rear_left,  rear_right)

        # 포인터 전달
        CM(a_list, front_left, front_right, rear_left, rear_right)
    

def CM(a_list, fl, fr, rl, rr):
    # Compare & Merge
    '''
    fl: front_left
    fr: front_right
    rl: rear_left
    rr: rear_right
    '''
    al, ar = fl, rr                 # fl과 rr의 값이 변경될 수 있으므로 다른 변수에 저장
    arr = [None] * (ar - al + 1)    # 임시 리스트 생성
    pt = 0                          # 임시 리스트의 포인터
    len_front = fr - fl + 1         # front의 길이
    len_rear  = rr - rl + 1         # rear의 길이

    while fl <= fr and rl <= rr:    # a_list[i]의 크기와 a_list[j]의 크기를 비교

        if a_list[fl] <= a_list[rl]:# rear 포인터가 가리키는 요소가 더 크다면
            arr[pt] = a_list[fl]
            fl = fl + 1             # front 포인터 증가

        else:                       # front 포인터가 가리키는 요소가 더 크다면
            arr[pt] = a_list[rl]
            rl = rl + 1             # rear 포인터 증가

        pt= pt + 1                  # 임시 리스트의 포인터 증가

    # front의 남은 요소가 더 많다면 모두 임시 리스트에 저장
    while fl <= fr:
        arr[pt] = a_list[fl]
        fl = fl + 1
        pt = pt + 1

    # rear의 남은 요소가 더 많다면 모두 임시 리스트에 저장
    while rl <= rr:
        arr[pt] = a_list[rl]
        rl = rl + 1
        pt = pt + 1 

    a_list[al : ar+1] = arr     # 치환
    del arr                     # 임시 리스트 제거

    # 정렬 과정 (▼는 화살표)
    print("    " * (al), end="")
    print(" ▼ " * (ar-al+1))
    print(a_list)
```

---





# 결론

O(n ^ 2)의 높은 시간 복잡도를 가지고 있으며, 모든 반복에 대해 비교와 교환이 이루어질 수 있으므로 같은 시간복잡도를 가진 다른 알고리즘(선택 정렬, 삽입 정렬)에 비해서도 낮은 효율을 보여준다. 그러나 **안정적인 교환(stable)**이 이루어지고 조기 종료를 통해 시간을 단축할 수 있다.



