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

|    B(n)     |    A(n)     |    W(n)     |
| :---------: | :---------: | :---------: |
| O(`n logn`) | O(`n logn`) | O(`n logn`) |

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

## 🌝 개선 알고리즘 1 - 구간 지정 방식

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

