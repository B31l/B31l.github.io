---
layout: post
title: "Floyd-Washall"
meta: " 최단 경로"
categories: Algorithm
tags: 문제해결
---



* content
{:toc}
# 최단 경로

![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Mini_Metro_screenshot_5.png/600px-Mini_Metro_screenshot_5.png)

사진 출처 https://ko.wikipedia.org/wiki/%EB%AF%B8%EB%8B%88_%EB%A9%94%ED%8A%B8%EB%A1%9C

지하철 앱에서는 목적지까지의 최단 경로와 소요되는 시간을 보여준다. 이를 가중치 포함 그래프로 표현할 수 있다. 

---





# 행렬 W : 인접행렬

인접행렬 W에서 `W[i][j]`는 i번째 노드에서 j번째 노드로 가는 가중치를 의미한다. 
$$
W[i][j] = 
\begin{cases}
\text{이음선 가중치} & \quad\text{$v_i$ 에서 $v_j$ 로의 이음선이 존재하는 경우} \\
\infty & \quad\text{$v_i$ 에서 $v_j$ 로의 이음선이 존재하지 않는 경우} \\
0 & \quad \text{$i = j$ 인 경우}
\end{cases}
$$

---





# 행렬 D : 최단거리

관건은 W에서 D 구하기. 중간에 거치는 중간지점을 확대해 나가면서 최단경로를 업데이트한다.
$$
\begin{align*}
D^{(k)}[i][j] &= \text{집합 $\{v_1, v_2, \dots, v_k\}$ 에 속하는 마디만을 통해서} \\
& \quad\,\text{$v_i$ 에서 $v_j$ 로 가는 최단경로의 길이}
\end{align*}
$$
$$
\begin{align*}
D^{(0)} &= W \\
D^{(n)} &= D
\end{align*}
$$
$$
D^{(0)} \longrightarrow D^{(1)}\longrightarrow D^{(2)}
\longrightarrow \cdots \longrightarrow D^{(n-1)}\longrightarrow D^{(n)}
$$

이제 재귀적으로 D를 업데이트 해 봅시당

```python
from copy import deepcopy

def floyd_warshall(W):
    n = len(W)

    # D^(0) 지정
    # 주의: 깊은 복사를 사용하지 않으면 W에 혼란을 발생시킴
    D = deepcopy(W)

    # k가 0부터 (n-1)까지 이동하면서 D가 D^(1), ..., D^(n)을 차례대로 모방함.
    # 즉, D를 업데이트하는 방식을 이용하여 최종적으로 D^(n) 생성
    for k in range(0, n):
        # 행렬의 인덱스는 0부터 (n-1)까지 이동
        for i in range(0, n):
            for j in range(0, n):
                D[i][j] = min(D[i][j] , D[i][k]+ D[k][j])	# 기존의 경로와, 새로운 경로 중 최소값
    
    # 최종 완성된 D 반환
    return D
```

---





# 행렬 P : 경로 출력

경로 출력을 위한 P행렬을 추가한다. 

```python
from copy import deepcopy

def floyd_warshall2(W):
    n = len(W)

    # deepcopy를 사용하지 않으면 D에 혼란을 발생시킴
    D = deepcopy(W)
    P = deepcopy(W)
    
    # P 행렬 초기화. 모든 항목을 -1로 설정
    for i in range(n):
        for j in range(n):
            P[i][j] = -1

    # k가 0부터 (n-1)까지 이동하면서 D가 D^(1), ..., D^(n)을 차례대로 모방함.
    # 그와 함께 동시에 P 행렬도 차례대로 업데이트함.
    for k in range(0, n):
        for i in range(0, n):
            for j in range(0, n):
                if D[i][k]+ D[k][j] < D[i][j]:
                    P[i][j] = k
                    D[i][j] = D[i][k]+ D[k][j]
    
    # 최종 완성된 P도 반환
    return D, P
```

```python
def path2(P, q, r, route):
    # 인덱스가 0부터 출발하기에 -1 또는 +1을 적절히 조절해야 함.
    if P[q-1][r-1] != -1:
        v = P[q-1][r-1]

        path2(P, q, v+1, route)
        route.append(v+1)
        path2(P, v+1, r, route)
        
    return route
```

```python
def print_path2(P, i, j):
    route = path2(P, i, j, [])
    route.insert(0, i)
    route.append(j)
    print(" -> ".join([str(v) for v in route]))
```

---





# 순열을 활용하기

```python
from itertools import product

def floyd_warshall3(W):
    n = len(W)

    D = deepcopy(W)
    P = [[0]   * n for i in range(n)]
    
    for i, j in product(range(n), repeat=2):
        if 0 < W[i][j] < inf:
            P[i][j] = j
    
    for k, i, j in product(range(n), repeat=3):
        sum_ik_kj = D[i][k] + D[k][j]
        if D[i][j] > sum_ik_kj:
            D[i][j] = sum_ik_kj
            P[i][j]  = P[i][k]
    return D, P
```

```python
def path3(D, P, i, j):
    # 인덱스가 0부터 출발하기에 -1 또는 +1을 적절히 조절해야 함.
        path = [i-1]
        while path[-1] != j-1:
            path.append(P[path[-1]][j-1])
        route = ' → '.join(str(p + 1) for p in path)
        print(f"최단길이:{D[i-1][j-1]:>2}, 최단경로: {route}")
```

---





# numpy 어레이 활용하기

**np.inf**로 무한을 표현할 수 있다. 그 외에 별 다를건 없음

```python
import numpy as np

def floyd_warshall(W):
    n = len(W)
    D = np.zeros((n+1, n, n))

    # D[0] 지정
    D[0] = W
    
    # 3중 for 반복문을 이용하여 k가 1부터 n까지 이동하면서 D[k-1]를 이용하여 D[k] 지정
    for k in range(0, n):
        for i in range(0, n):
            for j in range(0, n):
                # k의 범위 조정
                D[k+1][i][j] = min(D[k][i][j], D[k][i][k] + D[k][k][j])

    # 완성된 D[n] 반환
    return D[n]
```

순열이랑 np 같이  쓰셈

```python
from itertools import product
from copy import deepcopy

def floyd_warshall3(W):
    n = len(W)
    D = np.zeros((n+1, n, n))
    P = np.zeros((n, n))

    # P 행렬 초기화
    for i, j in product(range(n), repeat=2):
        if 0 < W[i][j] < np.inf:
            P[i][j] = j
    
    D[0] = deepcopy(W)
    # D와 P 업데이트
    for k, i, j in product(range(n), repeat=3):
        D[k+1][i][j] = D[k][i][j]
        sum_ik_kj = D[k][i][k] + D[k][k][j]
        if D[k+1][i][j] > sum_ik_kj:
            D[k+1][i][j] = sum_ik_kj
            P[i][j] = P[i][k]

    return D, P

def path3(D, P, i, j):
    # 인덱스가 0부터 출발하기에 -1 또는 +1을 적절히 조절해야 함.
        path = [i-1]                                    # 리스트 생성
        while path[-1] != j-1:                          # 최근 경로 != 목적지
            temp = P[path[-1]][j-1].astype(np.int64)    # 경로 추가
            path.append(temp)
        route = ' → '.join(str(p + 1) for p in path)
        print(f"최단길이:{int(D[-1][i-1][j-1])}, 최단경로: {route}")
```

