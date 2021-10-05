---
title: "[Python] Openpyxl"
tags: Python lib
---







---





`Openpyxl` 라이브러리는 파이썬으로 엑셀 문서를 작성하거나 데이터를 읽어올 수 있다.

```python
from openpyxl import Workbook
```

---





# 시작하기

## 1. 파일 만들기

```python
from openpyxl import Workbook
wb = Workbook()
```



## 2. 시트 만들기

```python
ws = wb.active
ws.title = "S1"
ws.sheet_properties.tabColor = "FFFF00"
```



## 3. 저장하기

```python
wb.save("Data.xlsx")
```



## 4. 불러오기

파일을 불러오기 위해 `load_workbook`을 import 합니다.

```python
from openpyxl import load_workbook
wb = load_workbook("Data.xlsx")
ws = wb.active
```

---





# 데이터 입력하기

**입력할 데이터**

| 요일 | 최고 기온 | 최저 기온 | 강수확률 |
| ---- | --------- | :-------- | -------- |
| 월   | 30        | 25        | 2        |
| 화   | 29        | 24        | 2        |
| 수   | 25        | 22        | 5        |
| 목   | 25        | 22        | 6        |
| 금   | 26        | 22        | 12       |
| 토   | 28        | 23        | 13       |
| 일   | 28        | 20        | 10       |

## 1. 한꺼번에 값 입력하기

`append`을 사용해 한꺼번에 값을 입력할 수 있습니다.

```python
ws.append(["요일", "최고 기온", "최저 기온", "강수확률"])
```

```python
data = [["월", 30, 25, 2],
        ["화", 29, 24, 2],
        ["수", 25, 22, 5],
        ["목", 25, 22, 6],
        ["금", 26, 22, 12],
        ["토", 28, 23, 13],
        ["일", 28, 20, 10]]
for i in data:
    ws.append(i)
```



## 2. 범위를 지정해 값 입력하기

반복문을 사용해 범위를 지정해 값을 입력할 수 있습니다. `row`에 행, `column`에 열, `value`에 값을 입력합니다. 

```python
for i in range(2, 8):
    ws.cell(row=i, column=5, value=i-1)
```



## 3. 특정 셀에 값 입력하기

좌표를 사용해 특정 셀에 값을 입력합니다.

```python
ws["A9"] = "날씨"
```

수식을 입력할 수도 있습니다.

```python
ws["B9"] = "=AVERAGE(B2:B8)"
ws["C9"] = "=AVERAGE(C2:C8)"
ws["D9"] = "=AVERAGE(D2:D8)"
```

---





# 실행하기

## Code

```python
from openpyxl import Workbook
wb = Workbook()

ws = wb.active
ws.title = "S1"
ws.sheet_properties.tabColor = "FFFF00"

ws.append(["요일", "최고 기온", "최저 기온", "강수확률"])
data = [["월", 30, 25, 2],
        ["화", 29, 24, 2],
        ["수", 25, 22, 5],
        ["목", 25, 22, 6],
        ["금", 26, 22, 12],
        ["토", 28, 23, 13],
        ["일", 28, 20, 10]]
for i in data:
    ws.append(i)

for i in range(2, 8):
    ws.cell(row=i, column=5, value=i-1)
    
ws["A9"] = "날씨"
ws["B9"] = "=AVERAGE(B2:B8)"
ws["C9"] = "=AVERAGE(C2:C8)"
ws["D9"] = "=AVERAGE(D2:D8)"

wb.save("Data.xlsx")
```



## Result
![dd2](https://user-images.githubusercontent.com/83929217/135749878-87640f1d-bd36-46ac-8e23-a5b53b653f64.png)

![dd](https://user-images.githubusercontent.com/83929217/135749884-c1a8577d-4846-4700-ae17-dd0a48ae0104.png)

