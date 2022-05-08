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

## csv 파일 읽기

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

## 데이터 전처리

모든 프로젝트는 최적의 결과를 얻기 위해서 불필요한 데이터를 정리하고, 레이블 수의 균형을 맞추는 **전처리** 과정을 거친다.

- 우선 `drop()` 메서드를 사용해 필요없는 특성을 삭제한다. rice, garlic, ginger는 아시아 요리에 대부분 들어가는 일반적인 재료이므로 삭제한다.

```python
feature_df= df.drop(['cuisine','Unnamed: 0','rice','garlic','ginger'], axis=1)
labels_df = df.cuisine #.unique()
feature_df.head()
```

- 다음으로, `SMOTE`(Synthetic Minority Over-sampling Technique) 객체의 `fit_resample()` 메서드를 사용해 데이터의 균형을 맞춘다.

```python
oversample = SMOTE()
transformed_feature_df, transformed_label_df = oversample.fit_resample(feature_df, labels_df)
print(f'old label count: {df.cuisine.value_counts()}')
print(f'new label count: {transformed_label_df.value_counts()}')
```

```
old label count: korean      799
indian      598
chinese     442
japanese    320
thai        289
Name: cuisine, dtype: int64
new label count: indian      799
thai        799
chinese     799
japanese    799
korean      799
Name: cuisine, dtype: int64
```

- 마지막으로, 전처리 과정이 끝난 데이터를 새 프레임에 저장한다.

```python
transformed_df  =  pd . concat ([ transformed_label_df , transformed_feature_df ], axis = 1 , join = 'outer' )
```

---

# 분류기

