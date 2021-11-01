---
layout: post
title:  "📈 Matplotlib로 데이터 그리기"
categories: Python
tags: Py Lib
author: B31l
mathjax: true
---



* content
{:toc}




---





`Matplotlib` 라이브러리는 파이썬 그래프를 표시하며, 다른 데이터 분석 라이브러리인 `Numpy`, `Pandas`와 연계가 가능하다.


```python
import matplotlib.pyplot as plt
```

---





# 막대 그래프


```python
a = [1, 3, 2, 4, 6, 5]
plt.plot(a)
plt.show()
```



![output_3_0](https://user-images.githubusercontent.com/83929217/135742302-f29c6aef-afd3-4b0c-8723-a1bba9587250.png)



```python
X = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
Y1 = [1, 3, 2, 4, 6, 5]
Y2 = [3, 4, 8, 9, 5, 2]

plt.plot(X, Y1, label="Dog")
plt.plot(X, Y2, label="Cat")

plt.xlabel("Month")
plt.ylabel("Activity")

plt.title("Test")
plt.legend(loc="upper left")

plt.show()
```



![output_4_0](https://user-images.githubusercontent.com/83929217/135742316-1cf8925a-dc16-4005-a450-330bb858814a.png)



데이터에 `label`을 붙이고, `legend`로 표시한다.

각 축에 해당하는 값에 `xlabel` `ylabel`을 사용해 이름을 붙인다.

`title`에 제목을 입력한다.

---





# 다양한 그래프

마커의 종류 ( `*`, `.`, `D`, `v` )를 지정해 점 그래프를 그릴 수 있다. 


```python
plt.plot(X, Y1, "o")
plt.title("Dot Graph")
plt.show()
```



![output_7_0](https://user-images.githubusercontent.com/83929217/135742348-ce563518-0c1f-4a3c-afc8-5bdac43451dd.png)



plot 대신 `bar`을 사용해 막대 그래프를 그릴 수 있다.


```python
plt.bar(X, Y1)
plt.title("Bar Graph")
plt.show()
```


![output_9_0](https://user-images.githubusercontent.com/83929217/135742350-09c57e63-9d7a-4b7e-bdaf-9103e3687c5a.png)

---

