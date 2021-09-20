---
title: "Openpyxl : 4 - 꾸미기"
tags: Openpyxl
---





## Code

```python
from openpyxl import load_workbook
wb = load_workbook('something.xlsx')
ws = wb.active

ws.insert_cols(5)
ws.insert_rows(12, 2)

ws.delete_cols(6)

ws.move_range('A1:D11', rows=1, cols=1)

ws.merge_cells("B14:E14")
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

`insert_rows` 또는 `insert_cols`을 사용해 특정 행 또는 열을 삭제할 수 있습니다.

```python
ws.insert_cols(5)
ws.insert_rows(12, 2)
```



---



# 2. 셀 삭제

`delete_rows` 또는 `delete_cols`을 사용해 특정 행 또는 열을 삭제할 수 있습니다.

```python
ws.delete_cols(6)
```



---



# 3. 셀 이동

`move_range`을 사용해 셀을 이동할 수 있습니다.

```python
ws.move_range('A1:D11', rows=1, cols=1)
```



---



# 4. 셀 병합

`merge`을 사용해 셀을 병합할 수 있습니다.

```python
ws.merge_cells("B14:E14")
```

만약 병합을 해제하고 싶으면 `unmerge`을 사용합니다.

```python
ws.unmerge_cells("B14:E14")
```



---



# 5. 너비, 높이 설정

```python

```



---



# 6. 특정 셀을 고정

`freeze_panes`을 사용해 특정 셀을 고정할 수 있습니다.

```python
ws.freeze_panes = 'B2'
```



---



# 7. 셀 채우기

셀을 채우기 위해 `openpyxl.styles`에서 `PatternFill`을 import 합니다.

```python
from openpyxl.styles import PatternFill
```



---



# 8. 셀 테두리

셀 테두리를 만들기 위해 `openpyxl.styles`에서 `Border` 와 `side` 을 import 합니다.

```python
from openpyxl.styles import Border, Side
```

```python
Border(left=Side(style='thin'), right=Side(style='thin'), top=Side(style='thin'), bottom=Side(style='thin'))
```



---



# 9. 폰트 적용

폰트를 적용하기 위해 `openpyxl.styles`에서 `Font`을 import 합니다.

```python
from openpyxl.styles import Font
```



---



# 10. 글자 정렬

글자를 정렬하기 위해 `openpyxl.styles`에서 `Alignment`을 import 합니다.

```python
from openpyxl.styles import Alignment
```



---



```python
# 파일 저장하기
wb.save('something.xlsx')
```



---

