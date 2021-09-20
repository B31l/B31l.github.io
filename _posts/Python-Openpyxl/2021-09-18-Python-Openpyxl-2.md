---
title: "Openpyxl : 2 - 데이터 입력하기"
tags: Openpyxl
---





## Code

```python
from openpyxl import load_workbook
wb = load_workbook('something.xlsx')
ws = wb.active

ws.append(['카드명', '비용', '효과', '등급'])
data = [['체력 단련', 2, '희귀', '전사'],
        ['연쇄 번개', 2, '희귀', '주술사'],
        ['악의가 담긴 찌르기', 2, '희귀', '도적'],
        ['신념', 2, '희귀', '성기사'],
        ['야수 조련', 2, '희귀', '사냥꾼'],
        ['살아있는 씨앗', 2, '희귀', '드루이드'],
        ['임프 군단', 2, '희귀', '흑마법사'],
        ['진눈깨비', 0, '희귀', '마법사'],
        ['규탄', 2, '희귀', '사제'],
        ['분노', 1, '희귀', '악마사냥꾼']]
for i in data:
    ws.append(i)

for i in range(2, 12):
    ws.cell(row=i, column=5, value=i-1)

ws['A12'] = '불모의 땅'

wb.save('something.xlsx')
```



---



이전에 작성했던 파일을 불러옵니다.

```python
# 파일 불러오기
from openpyxl import load_workbook
wb = load_workbook('something.xlsx')
ws = wb.active
```

**입력할 데이터**

| 카드명             | 비용 | 등급 | 직업       |
| ------------------ | ---- | :--- | ---------- |
| 체력 단련          | 2    | 희귀 | 전사       |
| 연쇄 번개          | 2    | 특급 | 주술사     |
| 악의가 담긴 찌르기 | 2    | 일반 | 도적       |
| 신념               | 2    | 특급 | 성기사     |
| 야수 조련          | 2    | 희귀 | 사냥꾼     |
| 살아있는 씨앗      | 2    | 희귀 | 드루이드   |
| 임프 군단          | 2    | 일반 | 흑마법사   |
| 진눈깨비           | 0    | 희귀 | 마법사     |
| 규탄               | 2    | 특급 | 사제       |
| 분노               | 1    | 일반 | 악마사냥꾼 |



---



# 1. `append` 을 사용해 값 입력하기

`append`을 사용해 한꺼번에 값을 입력할 수 있습니다.

```python
ws.append(['카드명', '비용', '효과', '등급'])
```

```python
data = [['체력 단련', 2, '희귀', '전사'],
        ['연쇄 번개', 2, '희귀', '주술사'],
        ['악의가 담긴 찌르기', 2, '희귀', '도적'],
        ['신념', 2, '희귀', '성기사'],
        ['야수 조련', 2, '희귀', '사냥꾼'],
        ['살아있는 씨앗', 2, '희귀', '드루이드'],
        ['임프 군단', 2, '희귀', '흑마법사'],
        ['진눈깨비', 0, '희귀', '마법사'],
        ['규탄', 2, '희귀', '사제'],
        ['분노', 1, '희귀', '악마사냥꾼']]
for i in data:
    ws.append(i)
```



---



# 2. 범위를 지정해 값 입력하기

`for문`을 사용해 범위를 지정해 값을 입력할 수 있습니다. `row`에 행, `column`에 열, `value`에 값을 입력합니다. 

```python
for i in range(2, 12):
    ws.cell(row=i, column=5, value=i-1)
```



---



# 3. 특정 셀에 값 입력하기

엑셀에서 사용하는 좌표를 사용해 특정 셀에 값을 입력할 수 있습니다.

```python
ws['A12'] = '불모의 땅'
```



---



```python
# 파일 저장하기
wb.save('something.xlsx')
```

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FctfewL%2FbtrfDhZ6tcX%2FZTJgv32LZDXyKs2H4qKx51%2Fimg.png)



---

