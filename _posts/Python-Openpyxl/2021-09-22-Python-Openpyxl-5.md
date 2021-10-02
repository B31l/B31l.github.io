---
title: "[Openpyxl] 5 - 엑셀 기능 활용하기"
tags: Openpyxl
---





## Code

```python
from openpyxl.chart import Reference, BarChart
from openpyxl.drawing.image import Image
from openpyxl import load_workbook
wb = load_workbook('something.xlsx')
ws = wb.active

# 함수 삽입
ws['B13'] = '=COUNTA(B3:B12)'
ws['C13'] = '=AVERAGE(C3:C12)'
ws['D13'] = '=COUNTIF(D3:D12, "희귀")'

# 차트 삽입
bar_value = Reference(ws, min_row=3, max_row=12, min_col=2, max_col=3)
bar_chart = BarChart()
bar_chart.add_data(bar_value)
bar_chart.title = '성장형 주문의 비용'
bar_chart.x_axis.title = '이름'
bar_chart.y_axis.title = '비용'
bar_chart.style = 15
ws.add_chart(bar_chart, 'G2')

# 이미지 삽입
img = Image('something.png')
ws.add_image(img, 'B16')

wb.save('something.xlsx')
```



## Execution

![](https://github.com/B31l/B31l/blob/main/img-io/Openpyxl/5%EB%A7%88%EB%AC%B4%EB%A6%AC.png?raw=true)





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
from openpyxl.chart import Reference, BarChart
```

차트를 삽입하기 위해 `openpyxl.chart`에서 `Reference`을 import 합니다.

사용할 차트의 종류(ex : `BarChart`, `LineChart`)를 추가로 import 합니다.

[이곳](https://openpyxl.readthedocs.io/en/stable/charts/introduction.html)에서 차트의 종류를 확인할 수 있습니다.



## BarChart

`BarChart`을 사용해 막대그래프를 만들 수 있습니다. `Reference`을 사용해 입력할 데이터의 범위를 지정합니다.

`add_data`을 사용해 만든 차트에 데이터를 입력할 수 있습니다.

`add_chart`을 사용해 위치를 지정해 차트를 삽입할 수 있습니다.

`title`을 사용해 차트의 제목을 설정할 수 있습니다. 

`x_axis.title`과 `y_axis.title`을 사용해 x축과 y축의 제목을 설정할 수 있습니다.

`style`을 사용해 차트 스타일을 설정할 수 있습니다.



```python
bar_value = Reference(ws, min_row=3, max_row=12, min_col=2, max_col=3)
bar_chart = BarChart()
bar_chart.add_data(bar_value)
bar_chart.title = '성장형 주문의 비용'
bar_chart.x_axis.title = '이름'
bar_chart.y_axis.title = '비용'
bar_chart.style = 15
ws.add_chart(bar_chart, 'G2')
```



## LineChart

`LineChart`을 사용해 꺾은선그래프를 만들 수 있습니다.



---



# 3. 이미지 삽입

이미지를 삽입하기 위해 `openpyxl.drawing.image`에서 `Image`을 import 합니다.

```python
from openpyxl.drawing.image import Image
```

[이곳](https://raw.githubusercontent.com/B31l/B31l/main/B31l.png)에 있는 이미지를 다운받은 뒤 something.png로 저장합니다.

`add_image`을 사용해 위치를 지정해 이미지를 삽입할 수 있습니다.

```python
img = Image('something.png')
ws.add_image(img, 'B16')
```



---

