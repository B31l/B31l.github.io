---
title: "Openpyxl : 3 - 데이터 출력하기"
tags: Openpyxl
---





## Code

```python
from openpyxl import load_workbook
wb = load_workbook('something.xlsx')
ws = wb.active

# 특정 셀의 값 출력하기
print(ws.cell(row=1, column=1).value)
print(ws['A1'])
print(ws['A1'].value)

# 범위를 지정해 값 출력하기
for i in range(2,12):
    for j in range(1,5):
        print(ws.cell(row=i, column=j).value, end=' ')
    print()
print()

col_B = ws['B']
for cell in col_B:
    print(cell.value, end=' ')
print()

col_range = ws['B:C']
for cols in col_range:
    for cell in cols:
        print(cell.value, end=' ')
    print()

for row in ws.iter_rows(min_row=2, max_row=11, min_col=2, max_col=3): 
    print(row[0].value, row[1].value)
for col in ws.iter_cols(min_row=4, max_row=5, min_col=1, max_col=4):
    print(col[0].value, col[1].value)

# 모든 값 출력하기
for x in range(1, ws.max_row+1):
    for y in range(1, ws.max_column+1):
        print(ws.cell(row=x, column=y).value, end=' ')
    print()
print()
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



# 1. 특정 셀의 값 출력하기

## `row`와 `column`을 사용하기

```python
print(ws.cell(row=1, column=1).value) # 1행 1열 (A1)의 값을 출력
```

```
[Execution]
카드명
```





## 좌표를 사용하기

```python
print(ws['A1']) # A1 셀의 정보를 출력
```

```
[Execution]
<Cell '불모의 땅'.A1>
```



끝에 `.value`을 붙여야 셀의 값을 출력합니다.

```python
print(ws['A1'].value) # A1 셀의 값을 출력 / 값이 없다면 None을 출력한다.
```

```
[Execution]
카드명
```



---

# 2. 범위를 지정해 값 출력하기

## 반복문 사용하기

`for문`을 사용해 범위를 지정해 값을 출력할 수 있습니다.

```python
for i in range(2,12):
    for j in range(1,5):
        print(ws.cell(row=i, column=j).value, end=' ')
    print()
print()
```

```
[Execution]
체력 단련 2 희귀 전사 
연쇄 번개 2 특급 주술사        
악의가 담긴 찌르기 2 일반 도적 
신념 2 특급 성기사 
야수 조련 2 희귀 사냥꾼        
살아있는 씨앗 2 희귀 드루이드  
임프 군단 2 일반 흑마법사      
진눈깨비 0 희귀 마법사         
규탄 2 특급 사제 
분노 1 일반 악마사냥꾼   
```



## 좌표를 사용하기

```python
# 인덱싱
col_B = ws['B']
for cell in col_B:
    print(cell.value, end=' ')
print()
```

```
[Execution]
비용 2 2 2 2 2 2 2 0 2 1 None 
```



```python
# 슬라이싱
col_range = ws['B:C']
for cols in col_range:
    for cell in cols:
        print(cell.value, end=' ')
    print()
```

```
[Execution]
비용 2 2 2 2 2 2 2 0 2 1 None
효과 희귀 특급 일반 특급 희귀 희귀 일반 희귀 특급 일반 None
```



## `iter_rows`을 사용하기

시작 행과 끝 행, 시작 열과 끝 열을 지정해 값을 출력할 수 있습니다. 지정하지 않으면 min, max는 각각 처음과 마지막 데이터가 됩니다.

```python
# 좌우로 데이터 출력하기 : iter_rows
for row in ws.iter_rows(min_row=2, max_row=11, min_col=2, max_col=3): 
    print(row[0].value, row[1].value)
```

```
[Execution]
2 희귀
2 특급
2 일반
2 특급
2 희귀
2 희귀
2 일반
0 희귀
2 특급
1 일반
```



```python
# 상하로 데이터 출력하기 : iter_cols
for col in ws.iter_cols(min_row=4, max_row=5, min_col=1, max_col=4):
    print(col[0].value, col[1].value)
```

```
[Execution]
악의가 담긴 찌르기 신념
2 2
일반 특급
도적 성기사
```



---



# 3. 모든 값 출력하기

`max_row`와 `max_column`을 사용해 파일에 있는 모든 값을 출력할 수 있습니다.

```python
for x in range(1, ws.max_row+1):
    for y in range(1, ws.max_column+1):
        print(ws.cell(row=x, column=y).value, end=' ')
    print()
print()
```

```
[Execution]
카드명 비용 효과 등급 None 
체력 단련 2 희귀 전사 1 
연쇄 번개 2 특급 주술사 2
악의가 담긴 찌르기 2 일반 도적 3
신념 2 특급 성기사 4
야수 조련 2 희귀 사냥꾼 5
살아있는 씨앗 2 희귀 드루이드 6
임프 군단 2 일반 흑마법사 7
진눈깨비 0 희귀 마법사 8
규탄 2 특급 사제 9
분노 1 일반 악마사냥꾼 10
불모의 땅 None None None None
```



---

