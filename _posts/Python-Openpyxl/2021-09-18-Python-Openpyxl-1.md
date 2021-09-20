---
title: "Openpyxl : 1 - 시작하기"
tags: Openpyxl
---





## Code

```python
from openpyxl import Workbook
wb = Workbook()
ws1 = wb.active

ws1.title = '불모의 땅'
ws1.sheet_properties.tabColor = "FF0000"

ws2 = wb.create_sheet('스톰윈드')
ws3 = wb.create_sheet('통곡의 동굴', 2)

wb.save('something.xlsx')
```





# 1. 라이브러리 설치하기

`pip install openpyxl`을 사용해 라이브러리를 설치합니다.



---




# 2. 파일 만들기

파일을 만들기 위해 `Workbook` 을 import 합니다.

`save` 을 사용해 엑셀 파일로 저장합니다.

```python
# 파일 만들기
from openpyxl import Workbook
wb = Workbook()
wb.save('something.xlsx')
```



<img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FxLWsP%2Fbtrfp3irEBP%2FKC7DZnkoiCX0b1F3D7sADK%2Fimg.png" align="left">



---



# 3. 시트 만들기

`active` 을 사용해 현재 활성화된 시트를 가져옵니다. 

```python
ws1 = wb.active
```

`title` 을 사용해 시트의 이름을, `sheet_properties.tabColor` 을 사용해 시트의 색깔을 지정할 수 있습니다.

```python
ws1.title = '불모의 땅'
ws1.sheet_properties.tabColor = "FF0000"
```

`create_sheet` 을 사용해 새로운 시트를 만들 수 있습니다. 인자를 추가로 지정해 시트 이름과 삽입 위치를 지정할 수 있습니다.

```python
ws2 = wb.create_sheet('스톰윈드')
ws3 = wb.create_sheet('통곡의 동굴', 2)
```

`save`을 사용해 엑셀 파일로 저장합니다.

```python
# 파일 저장하기
wb.save('something.xlsx')
```

![](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fb7lrYa%2Fbtrfo51PhdU%2Fr3g9BCldIFvJESwRNmQm50%2Fimg.png)



---



