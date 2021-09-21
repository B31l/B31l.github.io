---
title: "Openpyxl : 5 - 엑셀 기능 활용하기"
tags: Openpyxl
---





## Code

```python
from openpyxl.chart import Reference, BarChart, LineChart
from openpyxl.drawing.image import Image
from openpyxl import load_workbook
wb = load_workbook('something.xlsx')
ws = wb.active

wb.save('something.xlsx')
```



## Execution



---



# 1. 함수 삽입

엑셀에서 사용하는 것처럼 따옴표 안에 수식을 삽입하면 적용됩니다.

```python
ws['B13'] = '=COUNTA(B3:B12)'
ws['C13'] = '=AVERAGE(C3:C12)'
ws['D13'] = '=COUNTIF(D3:D12, "희귀")'
```

3장에서 했던 것처럼 데이터를 출력하면 수식 자체가 그대로 출력됩니다.

만약 수식의 값을 온전히 출력하고 싶다면 `load_workbook`에 `data_only=True`을 추가해야 합니다.

```python
wb = load_workbook("something.xlsx", data_only=True)
```



---



# 2. 차트 삽입

```python
from openpyxl.chart import Reference, BarChart, LineChart
```

차트를 삽입하기 위해 `openpyxl.chart`에서 `Reference`을 import 합니다.

사용할 차트의 종류(ex : `BarChart`, `LineChart`)를 추가로 import 합니다.



## BarChart

`BarChart`을 사용해 막대그래프를 만들 수 있습니다. `Reference`을 사용해 차트에 입력할 데이터를 입력합니다.

```
bar_value = Reference(ws, min_row=2, max_row=11, min_col=2, max_col=3)
bar_chart = BarChart() # 차트 종류 설정(Bar, Line, Pie, ...)
bar_chart.add_data(bar_value) # 차트 데이터 추가
ws.add_chart(bar_chart, 'E1') # 차트 넣을 위치 정의
```



## LineChart

`LineChart`을 사용해 꺾은선그래프를 만들 수 있습니다. `Reference`을 사용해 차트에 입력할 데이터를 입력합니다.

```python
line_value = Reference(ws, min_row=1, max_row=11, min_col=2, max_col=3)
line_chart = LineChart()
line_chart.add_data(line_value, titles_from_data=True) #게열 -> 영어, 수학
line_chart.title = '성적표'
line_chart.style = 20 # 차트 스타일 적용
line_chart.y_axis.title = '점수' # y축의 제목
line_chart.x_axis.title = '번호' # x축의 제목
ws.add_chart(line_chart, 'M1')
```



---

이전과정 다 수정하고 여기 최적화하고 올리기

# 3. 이미지 삽입

이미지를 삽입하기 위해 `openpyxl.drawing.image`에서 `Image`을 import 합니다.

```python
from openpyxl.drawing.image import Image
```

[여기](https://raw.githubusercontent.com/B31l/B31l/main/B31l.png)에 있는 이미지를 다운받은 뒤 something.png로 저장한 뒤 삽입하겠습니다.

```python
img = Image('image1.png')
ws.add_image(img, 'C3')
```



---

