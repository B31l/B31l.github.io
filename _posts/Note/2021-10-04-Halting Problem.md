---
layout: post
title: "💡 Halting Problem"
meta: " 정지 문제란 무엇인가"
categories: Note
tags: Python
comments: true
mathjax: true
---



* content
{:toc}
알고리즘은 주어진 문제를 해결하기 위한 절차나 방법을 의미한다.

이 [영상](https://www.youtube.com/watch?v=92WHN-pAFCs&ab_channel=udiprod)에서는 알고리즘으로 해결할 수 없는 문제에 대해서 소개한다.


---

# 완벽한 기계

`machine_A`는 주어진 연산 문제를 완벽하게 해결하는 알고리즘이다. 

(이 문서에서는 사칙연산을 하는 알고리즘만 작성하겠다.)

```python
def machine_A (num_a, num_b, operator):
    if operator == "+":
        return num_a + num_b;
    if operator == "-":
        return num_a - num_b;
    if operator == "*":
        return num_a * num_b;
    if operator == "/":
        return num_a / num_b;
    else:
        pass
```

> **In [1]**
>
> ```python
> machine_A (3, 5, "+")
> ```
>
> **Out [1]**
>
> ```
> 8
> ```



`machine_C`는 체커판의 현재 상태가 주어지면 최적의 수를 출력하는 알고리즘이다.

다음 수를 예측하는 알고리즘은 매우 복잡하다. 이 문서에서는 print 함수를 통해 간단하게 표현하겠다.


```python
def machine_C (pieces):
    print("Do the best play in player's turn")
```

machine_C에 체커판의 배열을 입력하면, 플레이어가 할 수 있는 최적의 수를 출력한다.

> **In [2]**
>
> ```python
> import numpy as np
> # 0 is blank, 1 is player1, 2 is player 2
> pieces = np.array([
>     [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
>     [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
>     [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
>     [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
>                   
>     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
>     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
>                   
>     [0, 2, 0, 2, 0, 2, 0, 2, 0, 2],
>     [2, 0, 2, 0, 2, 0, 2, 0, 2, 0],
>     [0, 2, 0, 2, 0, 2, 0, 2, 0, 2],
>     [2, 0, 2, 0, 2, 0, 2, 0, 2, 0]
>     ])
> 
> machine_C (pieces)
> ```
>
> **Out [2]**
>
> ```
> Do the best play in player's turn
> ```

---





# 정지 문제

machine_A는 연산 영역에서 완벽해 보인다.

그렇지만 machine_A에 체커판의 배열을 입력하면 문제가 발생한다.

> **In [3]**
>
> ```python
> machine_A (pieces)
> ```
>
> **Out [3]**
>
> ```
> ---------------------------------------------------------------------------
> TypeError                                 Traceback (most recent call last)
> <ipython-input-13-923d387e2ab2> in <module>
> ----> 1 machine_A (pieces)
> 
> TypeError: machine_A() missing 2 required positional arguments: 'num_b' and 'operator'
> ```

machine_A는 이러한 입력을 처리하도록 설계되지 않았기 때문에, machine_A의 작동은 멈춰 버린다. (Stuck)

machine_C에 연산식을 입력해도 같은 문제가 발생한다.



> **In [4]**
>
> ```python
> machine_C (3, 5, "+")
> ```
>
> **Out [4]**
>
> ```
> ---------------------------------------------------------------------------
> TypeError                                 Traceback (most recent call last)
> <ipython-input-15-a5cc8fa42fed> in <module>
> ----> 1 machine_C (3, 5, "+")
> 
> TypeError: machine_C() takes 1 positional argument but 3 were given
> ```

---





# 정지 정리

## 1. machine_H

정지 문제를 검토하는 알고리즘 `machine_H (P, I)`이 있다고 가정하자.

`P`에 테스트할 알고리즘을, `I`에 그 알고리즘에 필요한 입력값을 대입하면, 알고리즘이 멈추지 않을지 결정한다.

machine_A에 [3, 2, "+"]를 입력하면 5를 반환하므로 알고리즘이 멈추지 않는다.

즉, machine_H는 True를 출력한다.

> **In [5]**
>
> ```python
> machine_H (machine_A, [3, 2, "+"])
> ```
>
> **Out [5]**
>
> ```
> True
> ```

귀류법을 통해 machine_H의 존재 여부를 증명할 수 있다.

1. machine_H가 존재한다고 가정한다.
1. machine_H가 잘못된 결과를 출력하는 경우를 찾아낸다.
1. 전제에 모순되므로, machine_H는 존재할 수 없다.

---





## 2. machine_X

machine_H의 존재 여부를 증명하기 위해서, 2개의 machine을 추가로 생성한다.

`machine_P`는 값을 입력받으면, 입력받은 값의 복사본을 두 개 반환한다.

```python
def machine_P (x):
    return x, x
```

> **In [6]**
>
> ```python
> machine_P(2)
> print(machine_P(2)[0])
> print(machine_P(2)[1])
> ```
>
> **Out [6]**
>
> ```
> 2
> 2
> ```



`machine_N`은 True를 입력받으면 False를, False를 입력받으면 True를 리턴한다.

```python
def machine_N (x):
    if x == True:
        return False
    if x == False:
        return True
```

> **In [7]**
>
> ```python
> print(machine_N(True))
> print(machine_N(False))
> ```
>
> **Out [7]**
>
> ```
> False
> True
> ```

3개의 machine을 연결한 뒤, 연결된 machine을 machine_X라고 하자.

machine_X의 입력값에 machine_H를 대입한다.

>**In [8]**
>
>```python
>result_N1, result_N2 = machine_N (machine_H)
>result_H = machine_H (result_N1, result_N2)	# machine_H (machine_H, machine_H)
>result_N = machine_N (result_H)
>```
>
>**Out [8]**
>
>| machine_P의 결과     | muchine_H의 알고리즘                    | machine_H의 결과 | machine_N의 결과 | 가정 결과        |
>| -------------------- | --------------------------------------- | ---------------- | ---------------- | ---------------- |
>| machine_H, machine_H | machine_X가 **True를 반환한다고 가정**  | True             | **False**        | 가정과 다른 결과 |
>| machine_H, machine_H | machine_X가 **False를 반환한다고 가정** | False            | **True**         | 가정과 다른 결과 |

---





## 3. 증명

machine_A나 machine_C가 그랬던 것처럼, machine_H 또한 항상 완벽하게 작동해야만 한다.

그러나 machine_X를 통해 machine_H가 잘못된 값을 찾아내는 경우를 찾아낼 수 있다.

따라서 전제에 모순되는 machine_H는 존재 할 수 없다.

---





# 엄밀한 증명

Turing Machine[[1]](https://www.tutorialspoint.com/automata_theory/turing_machine_halting_problem.htm)을 통해 정지 문제를 증명할 수 있다.

`Turing Machine`은 다른 Turing Machine과 문자열을 입력받는 알고리즘이다.

`Halting machine`은 다음과 같이 작동하는 Turing Machine(이하 HM_1)이다. 

- 입력받은 튜링 머신(이하 H)의 연산이 유한한 시간 내에 완료되면 HM_1은 Yes를 반환한다.
- H의 연산이 유한한 시간 내에 완료되지 않으면 HM_1은 No를 반환한다.

![](https://www.tutorialspoint.com/automata_theory/images/halting_machine.jpg)



`inverted halting machine`은 다음과 같이 동작하는 Turing Machine(이하 HM_2)이다.

- H의 연산이 Yes를 반환하면 HM_2는 무한 루프한다.
- H의 연산이 No를 반환하면 HM_2는 중지한다.

![](https://www.tutorialspoint.com/automata_theory/images/inverted_halting_machine.jpg)

이제 두 Turing Machine을 서로 연결해 새로운 Turing Machine(이하 HM_3)을 만든다.

만약 HM_1이 Yes를 반환하면

1. HM_2는 무한 루프할 것이다.
1. 따라서, HM_1은 No를 반환할 것이다.
1. 전제에 모순된다.

만약 HM_1이 No를 반환하면

1. HM_2는 중지할 것이다.
1. 따라서, HM_1은 Yes를 반환할 것이다.
1. 전제에 모순된다.

따라서 정지 문제는 결정할 수 없다.

---





# 결론

 알고리즘만으로 해결할 수 없는 다른 영역으로는 난수 생성을 예로 들 수 있다. 시스템 시간을 사용해 시드(Seed)를 생성하는 방법이 있지만, 이러한 방법으로 난수를 생성하는 것은 유추가 가능하기에 완전하다고 볼 수 없다. 그렇기 때문에 컴퓨터가 생성한 난수를 의사 난수라고 부른다. 그러나 인간이 생각하는 무작위 수는 예측할 수 없다. 학창 시절, 칠판의 문제를 풀어볼 학생의 학번을 정하는 선생님의 '난수 생성'은 어떠한 알고리즘으로도 예측할 수 없다. [^1]

 machine_H를 만드는 것은 어쩌면 가능하지 않을까? 알파고가 그랬던 것처럼, machine_H를 수많은 데이터와 이를 기반으로 한 학습을 바탕으로 구현한다면 어떤 알고리즘의 청사진이든(심지어 자기 자신까지도) 결과를 예상할 것처럼 보인다. 그러나 이 상상은 모순이라는 벽에 부딪힌다. machine_X에 machine_H의 청사진을 입력하면, 그 안의 machine_H는 항상 잘못된 값을 가정하는 무한 루프에 빠지게 된다. machine_H의 무한 루프를 검토하는 다른 알고리즘을 만든다고 해도, 그 알고리즘이 정확히 판별할 수 없는 함수가 적어도 하나 존재하게 된다.

 인간의 사고 또한 무한 루프에 가로막혀 답을 낼 수 없는 경우가 존재한다. 단적인 예시로 '창조주의 창조주는 누구인가?'라는 물음은 꼬리에 꼬리를 물고 이어진다. 사람들은 이에 대해 저마다의 답을 내놓는다. 그렇지만 정지 문제를 해결할 수 있는 알고리즘이 없듯이, 이 물음에 대해 논리적 증명을 할 수 있는 사람은 없다. 사람과 컴퓨터가 미제를 공유한다는 점이 어쩌면 프로그래밍에 끌리는 이유일지도 모른다.

 

## 1. 각주

[^1]: 최근 들어서 난수 생성의 난관은 양자 난수 등의 기술을 적용한 하드웨어와의 결합으로 극복되고 있다. 



## 2. 참고 링크

- "컴퓨터가 모든 것을 해결할 수 없다는 증명 (정지 문제)", udiprod 유튜브, [Link](https://www.youtube.com/watch?v=92WHN-pAFCs&t=54s&ab_channel=udiprod) (2021.10.04)
- "정지 문제", 기계인간 깃허브 블로그, [Link](https://johngrib.github.io/wiki/halting-problem/) (2021.10.04)

---



