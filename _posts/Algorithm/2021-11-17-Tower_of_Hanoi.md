---
layout: post
meta: "Tower of Hanoi"
title: "하노이의 탑"
categories: Algorithm
tags: Python
mathjax: true
---

* content
{:toc}
# 하노이의 탑

## 구현

```python
def move_tower(height, from_pole, to_pole, with_pole):
    if height >= 1:
        move_tower(height - 1, from_pole, with_pole, to_pole)
        move_disk(from_pole, to_pole)
        move_tower(height - 1, with_pole, to_pole, from_pole)

def move_disk(from_p, to_p):
    print(f"{from_p}에서 {to_p}로 탑 원판 옮기기")
```

- **move_tower**

  - 종료 조건 

    높이가 1 이상이 아니라면 종료한다.

  - 재귀 호출 1

    `from -> with`, 기둥 to를 경유한다.

  - 재귀 호출 2

    `with -> to`, 기둥 from을 경유한다.

- **move_disk**

  원판의 이동을 출력한다.



세 개의 기둥은 나중에 들어간 원판이 먼저 나오는 LIFO 방식으로 작동한다.

따라서 각각의 기둥에 Stack을 적용해 원판의 이동을 Push와 Pop으로 구현할 수도 있다.

```python
foo = ['A', 'B', 'C']
bar = [Stack() for x in range(3)]
temple = dict(zip(foo, bar))
for i in range(4):
    temple['A'].push(4-i)
print(temple)

def move_tower(height, from_pole, to_pole, with_pole):
    if height >= 1:
        move_tower(height - 1, from_pole, with_pole, to_pole)
        move_disk(from_pole, to_pole)
        move_tower(height - 1, with_pole, to_pole, from_pole)

def move_disk(from_p, to_p):
    foo = temple[from_p].pop()
    temple[to_p].push(foo)
    print(temple)

move_tower(4, "A", "B", "C")
```

pop 메서드가 호출될 때 repr로 출력되기 때문에 print를 사용한 별도의 출력은 필요하지 않다.

## 시각화

turtle 모듈로 시각화하였음. 링크 [📎](https://trinket.io/python/356f1f6506) 

