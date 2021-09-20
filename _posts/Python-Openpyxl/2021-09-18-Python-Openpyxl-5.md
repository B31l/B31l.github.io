---
title: "Openpyxl : 5 - 엑셀 기능 활용하기"
tags: Openpyxl
---





## Code

```python
```



---



이전에 작성했던 파일을 불러옵니다.

```python
# 파일 불러오기
from openpyxl import load_workbook
wb = load_workbook('something.xlsx')
ws = wb.active
```



---



# 1. 함수 삽입

```python

```



---



# 2. 차트 삽입

```python
from openpyxl.chart import Reference, BarChart, LineChart
```

BarChart, LineChart를 만들기 위해 import 함



`BarChart`를 사용해 막대그래프를 만들 수 있습니다.

```
```



`LineChart` 를 사용해 꺾은선그래프를 만들 수 있습니다.

```python
```



---



# 3. 이미지 삽입

```python
from openpyxl.drawing.image import Image
```

```python
```



---



```python
# 파일 저장하기
wb.save('something.xlsx')
```



---

