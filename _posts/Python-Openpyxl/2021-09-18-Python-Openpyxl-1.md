---
layout: article
current: post
cover:  B31l.png
navigation: True
title: Openpyxl With HearthStone (1)
date: 2021-09-18 10:18:00
tags: [Pyton-Openpyxl]
class: post-template
subclass: 'post tag-python'
author: B31l
---



## 라이브러리 설치하기

`pip install openpyxl`를 사용해서 라이브러리를 설치해야 합니다.



---




## 파일 만들기

파일을 만들기 위해서는 `Workbook` 를 import 해야 합니다(대문자 주의!).

이후 `save` 을 사용해 엑셀 파일로 저장합니다.

```python
from openpyxl import Workbook
wb = Workbook()
wb.save('2021_그리핀의해.xlsx')
```



---



## 시트 만들기

`active` 을 사용해 현재 활성화된 시트를 가져옵니다. 

`title` 을 사용해 사용해 시트의 이름을 지정할 수 있습니다.

`sheet_properties.tabColor` 을 사용해 시트의 색깔을 지정할 수 있습니다.

`create_sheet` 을 사용해 새로운 시트를 만듭니다. 시트 이름과 삽입 위치를 지정할 수 있습니다.

```python
from openpyxl import Workbook
wb = Workbook()
ws1 = wb.active

ws1.title = '불모의 땅'
ws1.sheet_properties.tabColor = "FF0000"

ws2 = wb.create_sheet('스톰윈드')
ws3 = wb.create_sheet('통곡의 동굴', 2)

wb.save('2021_그리핀의해.xlsx')

```

