---
title: "Openpyxl : 4 - 꾸미기"
tags: Openpyxl
---





## Code

```python
# 파일 불러오기
from openpyxl import load_workbook
wb = load_workbook('something.xlsx')
ws = wb.active
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



# 1. 셀 삽입

```python
ws.insert_cols(5)
ws.insert_rows(12, 2)
```



---



# 2. 셀 삭제

```python
ws.delete_cols(6)
```



---



# 3. 셀 이동

```python
ws.move_range('A1:D11', rows=1, cols=1)
```



---



# 4. 셀 병합

```python
ws.merge_cells("B14:E14")
```

```python
ws.unmerge_cells("B14:E14")
```



---



# 5. 너비, 높이 설정

```python
from openpyxl import Workbook
wb = Workbook()
ws = Wb.active
ws.title = '성장형 주문'
wb.save('불모의 땅')
```



---



# 6. 특정 셀을 고정

```python
ws.freeze_panes = 'B2'
```



---



# 7. 셀 채우기

```python
from openpyxl.styles import PatternFill
```



---



# 8. 셀 테두리

```python
from openpyxl.styles import Border, Side
```

```python
Border(left=Side(style='thin'), right=Side(style='thin'), top=Side(style='thin'), bottom=Side(style='thin'))
```



---



# 9. 글자 스타일 적용

```python
from openpyxl.styles import Font
```



---



# 10. 글자 정렬

```python
from openpyxl.styles import Alignment
```



---



```python
# 파일 저장하기
wb.save('something.xlsx')
```



---

