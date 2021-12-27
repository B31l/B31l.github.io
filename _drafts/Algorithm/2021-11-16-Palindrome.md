---
layout: post
title: "Palindrome"
meta: " 회문 판별"
categories: Algorithm
tags: 문제해결
---



* content
{:toc}
# 회문 판별

## 💡 개념

회문(palindrome)은 제대로 읽었을 때와 거꾸로 읽었을 때가 같은 문장을 의미한다. 구현에 필요한 개념은 다음과 같다.

- 문장의 첫 글자와 마지막 글자는 동일해야 한다.

  문장 문자열의 0번 인덱스가 가리키는 값은 -1번 인덱스가 가리키는 값과 동일해야 한다. 두 인덱스를 중앙을 향해 한 칸씩 이동했을 때에도 마찬가지로 가리키는 값이 일치해야 한다. 하나라도 짝이 맞지 않다면 그 문장은 회문이 아니며, **문장 전체에서 비교를 실행했을 때 모든 인덱스의 짝이 일치하면 그 문장은 회문이다.** 

- 공백은 무시한다.

## ⏳ 시간 복잡도

길이가 N인 문자열의 회문을 판별하는 알고리즘은 O(N)의 시간복잡도를 갖는다.

| B(n) | A(n) | W(n) |
| :--: | :--: | :--: |
|  N   |  N   |  N   |

---





# 구현

```python
def pal_checker(a_string):
    d = Deque()
    for i in a_string:          # 문자열의 공백을 제거한 채로, Deque에 순서대로 삽입한다.
        if i != " ":            
            d.add_rear(i)

    while d.size() > 1:         # deque의 모든 항목에 대해 작업 실행
        front = d.remove_front()
        rear = d.remove_rear()
        if front != rear:       # 짝이 맞지 않으면 False 반환
            return False
    return True                 # 모든 front와 rear의 짝이 맞으면 True 반환
```

