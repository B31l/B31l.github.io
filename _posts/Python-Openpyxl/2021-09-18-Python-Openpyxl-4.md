---
title: (4) 엑셀의 기능 활용하기
tags: Openpyxl
---





```python
# 파일 가져오기
from openpyxl import load_workbook
wb = load_workbook('2021_그리핀의해.xlsx')
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

