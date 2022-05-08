---
layout: post
meta: "Classification"
title: "분류"
categories: ML
tags: Python
comments: true
mathjax: true
---



* content
{:toc}
# 개요

**ML-For-Beginners**의 **[Getting started with classification](https://github.com/codingalzi/ML-For-Beginners/tree/main/4-Classification)**문서를 읽고, 요약 정리한 글입니다.

분류는 **지도 학습**의 한 형태로, 타깃이 가질 수 있는 값이 2개인 **이진 분류**와, 타깃이 가질 수 있는 값이 3개 이상인  **다중 클래스 분류**로 나눌 수 있다. `scikit-learn` 패키는 다양한 분류 모델을 제공하며, 저자의 문서에서는 이를 활용해 아시아의 요리 데이터셋을 분류하는 작업을 수행한다. 우선, 분류에 필요한 패키지를 import한다.

```python
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib as mpl
import numpy as np
from imblearn.over_sampling import SMOTE
```

>  `imblearn`는 전처리 과정을 도와주는 Scikit-learn 패키지다.

csv 파일을 읽고, 이를 저장한다.

```python
df  = pd.read_csv('/content/drive/My Drive/data/cuisines.csv')
```

> 구글 코랩 환경에서 파일에 접근하기 위해서는 다음 코드를 실행해 드라이브 마운트를 설정해야 한다.
>
> ```python
> from google.colab import drive
> drive.mount('/content/drive')
> ```

`head()`및 `info()`를 사용해 데이터셋을 살펴볼 수 있다.

```python
df.head()
```

| index | Unnamed: 0 | cuisine | almond | angelica | anise | anise\_seed | apple | apple\_brandy | apricot | armagnac | artemisia | artichoke | asparagus | avocado | bacon | baked\_potato | balm | banana | barley | bartlett\_pear |
| ----- | ---------- | ------- | ------ | -------- | ----- | ----------- | ----- | ------------- | ------- | -------- | --------- | --------- | --------- | ------- | ----- | ------------- | ---- | ------ | ------ | -------------- |
| 0     | 65         | indian  | 0      | 0        | 0     | 0           | 0     | 0             | 0       | 0        | 0         | 0         | 0         | 0       | 0     | 0             | 0    | 0      | 0      | 0              |
| 1     | 66         | indian  | 1      | 0        | 0     | 0           | 0     | 0             | 0       | 0        | 0         | 0         | 0         | 0       | 0     | 0             | 0    | 0      | 0      | 0              |
| 2     | 67         | indian  | 0      | 0        | 0     | 0           | 0     | 0             | 0       | 0        | 0         | 0         | 0         | 0       | 0     | 0             | 0    | 0      | 0      | 0              |
| 3     | 68         | indian  | 0      | 0        | 0     | 0           | 0     | 0             | 0       | 0        | 0         | 0         | 0         | 0       | 0     | 0             | 0    | 0      | 0      | 0              |
| 4     | 69         | indian  | 0      | 0        | 0     | 0           | 0     | 0             | 0       | 0        | 0         | 0         | 0         | 0       | 0     | 0             | 0    | 0      | 0      | 0              |

```python
df.info()
```

```
<class 'pandas.core.frame.DataFrame'>
RangeIndex: 2448 entries, 0 to 2447
Columns: 385 entries, Unnamed: 0 to zucchini
dtypes: int64(384), object(1)
memory usage: 7.2+ MB
```



---

# 분류기

