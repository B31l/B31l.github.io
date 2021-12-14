---
layout: post
title: "Recursion"
meta: " 재귀법"
categories: Algorithm
tags: 설계기법
---



* content
{:toc}
# 재귀법

## 💡 개념

재귀 호출을 통해 자기 자신을 참조한다.

- 재귀 호출이 반드시 발생해야 한다.
- **종료조건**(base case)이 존재해야 한다.
- 재귀 호출에 사용되는 입력값의 크기가 줄어들어야 하며, 결국에는 종료조건을 만족하는 상태에 다달해야 한다.

---





# 응용

## 🎲 팩토리얼

```python
def factorial(n):
    if n == 0:      # 종료 조건
        return 1
    else:           # 재귀 호출
        return n * factorial(n - 1)
```

- 종료 조건

  n = 0일 때 n! = 0! = 1

- 재귀 호출

   n! = n * (n - 1)!

## 🎲 진법 변환

```python
def to_str(n, base):                      # n = 변환할 수, base = 진법
    convert_string = "0123456789ABCDEF"   # 종료조건에 사용될 자료
    
    if n < base:                          # 종료조건
        return convert_string[n]
    else:                                 # 재귀호출
        return to_str(n // base, base) + convert_string[n % base]
```

- 종료 조건

  n < base일 때 한 자리 수를 결정한다.
  
- 재귀 호출

  현재 자리수는 나머지(n % base), 다음 자리수는 몫(n // base)에 대해 연산을 수행한 값

---





# 콜 스택

재귀 호출이 발생할 때마다 스택에서는 실행 중인 프레임에 대한 정보를 저장한다.

이를 **콜 스택**(Call Stack)이라 부른다.

---





# 시각화

turtle을 사용해 시각화 할 수 있다. 프랙탈 트리... 시에르핀스키 삼각형... 

