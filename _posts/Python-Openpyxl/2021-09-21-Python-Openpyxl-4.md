---
title: "[Openpyxl] 4 - 꾸미기"
tags: Openpyxl
---





## Code

```python
from openpyxl.styles import PatternFill, Border, Side, Font, Alignment
from openpyxl import load_workbook
wb = load_workbook('something.xlsx')
ws = wb.active

# 셀 삽입
ws.insert_cols(5)
ws.insert_rows(12, 2)

# 셀 삭제
ws.delete_cols(6)

# 셀 이동
ws.move_range('A1:D11', rows=1, cols=1)
ws.move_range('A14', rows=1, cols=2)

# 셀 병합
ws.merge_cells("B1:E1")

# 너비 및 높이 설정
ws.column_dimensions['B'].width = 30
ws.row_dimensions[1].height = 60

# 특정 셀을 고정
ws.freeze_panes = 'B2'

# 셀 채우기
ws['C15'].fill = PatternFill(fgColor='FFCC33', fill_type='solid')

# 셀 테두리
thin_border = Border(left=Side(style='thin'), right=Side(style='thin'), top=Side(style='thin'), bottom=Side(style='thin'))
ws['B2'].border = thin_border
ws['C2'].border = thin_border
ws['D2'].border = thin_border
ws['E2'].border = thin_border

# 폰트 적용
ws['B2'].font = Font(name='consolas', color='FF0000')
ws['C2'].font = Font(name='arial', size=20)
ws['D2'].font = Font(bold=True, strike=True)
ws['E2'].font = Font(italic=True, underline='single')

# 글자 정렬
ws['B2'].alignment = Alignment(horizontal='center', vertical='center')

wb.save('something.xlsx')
```



## Execution

![](https://github.com/B31l/B31l/blob/main/img-io/Openpyxl/4%EB%A7%88%EB%AC%B4%EB%A6%AC.png?raw=true)





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

`move_range`을 사용해 셀을 이동할 수 있습니다. 만약 이동하려는 자리에 데이터가 있다면 덮어씁니다.

```python
ws.move_range('A1:D11', rows=1, cols=1)
ws.move_range('A14', rows=1, cols=2)
```



---



# 4. 셀 병합

`merge`을 사용해 셀을 병합할 수 있습니다.

```python
ws.merge_cells("B1:E1")
```

만약 병합을 해제하고 싶으면 `unmerge`을 사용합니다.

```python
ws.unmerge_cells("B1:E1")
```



---



# 5. 너비 및 높이 설정

`row_dimensions` 또는 `column_deimensions`을 사용해 높이 또는 너비를 설정할 수 있습니다.

```python
# B열의 너비를 30로 설정
ws.column_dimensions['B'].width = 30
# 1행의 높이를 60으로 설정
ws.row_dimensions[1].height = 60
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

`fgcolor`을 사용해 채울 색을 지정할 수 있습니다.

```python
ws['C15'].fill = PatternFill(fgColor='FFCC33', fill_type='solid')
```



---



# 8. 셀 테두리

셀 테두리를 만들기 위해 `openpyxl.styles`에서 `Border`와 `side`을 import 합니다.

```python
from openpyxl.styles import Border, Side
```

```python
thin_border = Border(left=Side(style='thin'), right=Side(style='thin'), top=Side(style='thin'), bottom=Side(style='thin'))
ws['B2'].border = thin_border
ws['C2'].border = thin_border
ws['D2'].border = thin_border
ws['E2'].border = thin_border
```



---



# 9. 폰트 적용

폰트를 적용하기 위해 `openpyxl.styles`에서 `Font`을 import 합니다.

```python
from openpyxl.styles import Font
```

```python
ws['B2'].font = Font(name='consolas', color='FF0000')
ws['C2'].font = Font(name='arial', size=20)
ws['D2'].font = Font(bold=True, strike=True)
ws['E2'].font = Font(italic=True, underline='single')
```

| 이름      | 기능               |
| --------- | ------------------ |
| name      | 글씨 폰트          |
| color     | 글씨 색상          |
| size      | 글씨 크기          |
| bold      | 볼드체 적용 유무   |
| italic    | 이탤릭체 적용 유무 |
| strike    | 취소선 적용 유무   |
| underline | 밑줄 적용 유무     |



---



# 10. 글자 정렬

글자를 정렬하기 위해 `openpyxl.styles`에서 `Alignment`을 import 합니다.

```python
from openpyxl.styles import Alignment
```

`horizontal`을 사용해 가로 정렬, `vertical`을 사용해 세로 정렬을 할 수 있습니다.

```python
ws['B2'].alignment = Alignment(horizontal='center', vertical='center')
```



---



