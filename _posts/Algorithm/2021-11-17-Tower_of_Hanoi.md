---
layout: post
title: "Tower of Hanoi"
meta: " 하노이의 탑"
categories: Algorithm
tags: 문제해결
---



* content
{:toc}
# 하노이의 탑

## 💡 개념





---

# 구현

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

  

- **move_disk**

  원판의 이동을 출력한다.

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
        move_disk(from_pole, to_pole)   # 탑 원판 옮기기
        move_tower(height - 1, with_pole, to_pole, from_pole)

def move_disk(from_p, to_p):
    # print(f"{from_p}에서 {to_p}로 탑 원판 옮기기")
    foo = temple[from_p].pop()
    temple[to_p].push(foo)
    print(temple)

move_tower(4, "A", "B", "C")
```

---





# 시각화

링크 [📎](https://trinket.io/python/356f1f6506) 

```python
import turtle
import time

# 2018225038 Ham_Sujong
# Stack의 __repr__와 turtle의 배경 색상이 trinket에서 작동하지 않아 주석처리
TIME = 0                    # 에니메이션 감상을 위한
BG_COLOR = "#F9F9F9"        # 배경색 (그리고 지우기)
# turtle.bgcolor(BG_COLOR)    # 에러주의
color = ["#FF33CC",         # disk의 색상
         "#FFCC33", 
         "#CCFF33", 
         "#33FFCC", 
         "#33CCFF", 
         "#CC33FF"]

def write_lit(grid, lit):
    temp = turtle.Turtle()
    temp.speed(0); temp.hideturtle()
    temp.up() 
    temp.goto(grid[0], grid[1])
    temp.down()
    temp.write(lit, align="center", font=("Arial", 15))

class Stack:
    # 스택
    def __init__(self):
        self._items = []

    # def __repr__(self): # 에러주의
    #     return f"<{self._items}>"

    def is_empty(self):
        return not bool(self._items)

    def push(self, item):
        self._items.append(item)
        
    def pop(self):
        return self._items.pop()

    def peek(self):
        return self._items[-1]

    def size(self):
        return len(self._items)

class FO:
    # 구역
    def __init__(self, lit):
        self.lit = lit
        self.stk = Stack()
        self.ttl = turtle.Turtle(); 
        self.ttl.speed(0); self.ttl.hideturtle() # 빠르고 은밀하게

class DR:
    # 메인
    def __init__(self, siz, fr, to, wi):
        tower_a = FO(fr)
        tower_b = FO(to)
        tower_c = FO(wi)
        self.lst_stk = [tower_a.stk, tower_b.stk, tower_c.stk]
        self.lst_ttl = [tower_a.ttl, tower_b.ttl, tower_c.ttl]
        self.siz = siz
        write_lit([-125, 50], fr)
        write_lit([0, 50], to)
        write_lit([125, 50], wi)

    def start(self):

        for _ in range(self.siz, 0, -1):        # 초기화
            self.lst_stk[0].push(_)
            self.ttl_push(0, _)
            print(self.lst_stk)
        self.move_tower(self.siz, 0, 1, 2)      # trigger

    def move_tower(self, sz, fr, to, wi):
        if sz >= 1:
            self.move_tower(sz-1, fr, wi, to)
            self.move_disk(fr, to)
            self.move_tower(sz-1, wi, to, fr)

    def move_disk(self, fr, to):        # 표현
        love = self.lst_stk[fr].peek()
        self.lst_stk[to].push(love)     # to의 스택에 push
        self.ttl_pop(fr, love)          # 원반 지우기
        self.ttl_push(to, love)         # 원반 그리기
        self.lst_stk[fr].pop()          # from의 스택에서 pop
        print(self.lst_stk)
        time.sleep(TIME)

    def ttl_pop(self, index, disk):                     # 원반 빼기
        self.lst_ttl[index].pencolor (BG_COLOR)
        self.lst_ttl[index].fillcolor(BG_COLOR)
        self.ttl_drow(index, disk)

    def ttl_push(self, index, disk):                    # 원반 넣기
        self.lst_ttl[index].pencolor (BG_COLOR)
        self.lst_ttl[index].fillcolor(color[disk%6-1])
        self.ttl_drow(index, disk)

    def ttl_drow(self, index, disk):                    # 그리기
        xxx = 125 * (index - 1)
        yyy = disk
        baam = self.siz - self.lst_stk[index].size()
        # 좌표 이동
        self.lst_ttl[index].up() 
        self.lst_ttl[index].goto(xxx, -baam*11)
        self.lst_ttl[index].down()
        # 색칠 시작
        self.lst_ttl[index].begin_fill()       
        self.lst_ttl[index].forward(15+yyy*5);   self.lst_ttl[index].right(90)
        self.lst_ttl[index].forward(10);         self.lst_ttl[index].right(90)
        self.lst_ttl[index].forward(30+yyy*10);  self.lst_ttl[index].right(90)
        self.lst_ttl[index].forward(10);         self.lst_ttl[index].right(90)
        self.lst_ttl[index].forward(15+yyy*5)
        self.lst_ttl[index].end_fill()

k = DR(5, "A", "B", "C")
k.start()
turtle.mainloop()
```

