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
**ML-For-Beginners**의 **[Getting started with classification](https://github.com/codingalzi/ML-For-Beginners/tree/main/4-Classification)**문서를 읽고, 요약 정리한 글입니다.

# 1. 개요

분류는 **지도 학습**의 한 형태로, 타깃이 가질 수 있는 값이 2개인 **이진 분류**와, 타깃이 가질 수 있는 값이 3개 이상인  **다중 클래스 분류**로 나눌 수 있다. `scikit-learn` 패키는 다양한 분류 모델을 제공하며, 저자의 문서에서는 이를 활용해 아시아의 요리 데이터셋을 분류하는 작업을 수행한다. 

필요한 패키지를 import한다.

```python
import pandas as pd
import matplotlib.pyplot as plt
import matplotlib as mpl
import numpy as np
from imblearn.over_sampling import SMOTE
```

>  `imblearn`는 전처리 과정을 도와주는 Scikit-learn 패키지다.

## csv 파일 불러오기

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

- 마지막으로, 재사용을 위해 전처리 과정이 끝난 데이터를 저장한다.

```python
transformed_df  =  pd . concat ([ transformed_label_df , transformed_feature_df ], axis = 1 , join = 'outer' )
transformed_df.to_csv('/content/drive/My Drive/data/cleaned_cuisines.csv')
```

---

# 2. 분류 모델 훈련하기

필요한 패키지를 import한다.

```python
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score,precision_score,confusion_matrix,classification_report, precision_recall_curve
from sklearn.svm import SVC
import numpy as np
```

사용 가능한 분류 모델은 다음과 같다.

- `Linear Models` (선형 모델)
- `Support Vector Machines` (서포트 벡터 머신)
- `Stochastic Gradient Descent` (확률적 경사 하강법)
- `Nearest Neighbors` (최근접 이웃)
- `Gaussian Processes` (가우시안 프로세스 )
- `Decision Trees` (결정 트리)
- `Ensemble methods` (앙상블 방법)
- `Multiclass and multioutput algorithms` (다중 클래스 및 다중 출력 알고리즘)

## 분류 모델 선택

적절한 모델을 선택하는 것은 중요하다. 시행착오를 거쳐 찾을 수도 있지만, 더 좋은 방법은 [ML Cheat sheet](https://docs.microsoft.com/azure/machine-learning/algorithm-cheat-sheet?WT.mc_id=academic-15963-cxa)를 참고해서 사용할 모델을 결정하는 것이다.

> [ML Cheat sheet](https://docs.microsoft.com/azure/machine-learning/algorithm-cheat-sheet?WT.mc_id=academic-15963-cxa)
>
> ![](https://docs.microsoft.com/ko-kr/azure/machine-learning/media/algorithm-cheat-sheet/machine-learning-algorithm-cheat-sheet.png)

## 데이터 분할

앞 챕터에서 저장한 전처리 과정이 끝난 데이터를 불러온다.

```python
cuisines_df = pd.read_csv("/content/drive/My Drive/data/cleaned_cuisines.csv")
```

훈련을 위해 전처리 과정이 끝난 데이터를 레이블 데이터프레임과, 레이블이 제거된 데이터프레임으로 분할한다.

```python
cuisines_label_df = cuisines_df['cuisine']
cuisines_feature_df = cuisines_df.drop(['Unnamed: 0', 'cuisine'], axis=1)
```

`train_test_split()` 메서드를 사용해 훈련셋 및 테스트셋으로 분할한다.

```python
X_train, X_test, y_train, y_test = train_test_split(cuisines_feature_df, cuisines_label_df, test_size=0.3)
```

## 로지스틱 회귀

로지스틱 회귀 모델(이는 분류도 수행할 수 있다)을 만들고, 훈련셋에 대해 모델 훈련을 수행한다. 로지스틱 회귀 모델은 80% 이상의 정확도를 보인다.

```
lr = LogisticRegression(multi_class='ovr',solver='liblinear')
model = lr.fit(X_train, np.ravel(y_train))

accuracy = model.score(X_test, y_test)
print ("Accuracy is {}".format(accuracy))
```

```
Accuracy is 0.804837364470392
```

아래 코드는 한 행의 예측 결과를 출력한 것이다. 위 재료들을 사용한 요리는 인도 요리일 가능성이 가장 높다고 예측한다.

```python
print(f'ingredients: {X_test.iloc[50][X_test.iloc[50]!=0].keys()}')
print(f'cuisine: {y_test.iloc[50]}')
```

```
ingredients: Index(['cane_molasses', 'carrot', 'cayenne', 'cilantro', 'cream',
       'grape_juice', 'olive_oil', 'onion', 'pepper', 'tamarind', 'tomato',
       'vegetable', 'vinegar'],
      dtype='object')
cuisine: indian
```

더 깊게 들어가면, 이 예측이 얼마나 정확한지 수치로 확인할 수 있다. 모델은 이 요리가 약 92% 확률로 인도 요리라고 확신한다.

```python
test= X_test.iloc[50].values.reshape(-1, 1).T
proba = model.predict_proba(test)
classes = model.classes_
resultdf = pd.DataFrame(data=proba, columns=classes)

topPrediction = resultdf.T.sort_values(by=[0], ascending = [False])
topPrediction.head()
```

| index    | 0                       |
| -------- | ----------------------- |
| indian   | 0\.9208787078019279     |
| chinese  | 0\.0617848283199795     |
| thai     | 0\.013752989187696432   |
| japanese | 0\.0031463587804134267  |
| korean   | 0\.00043711590998292643 |

아래 코드를 통해 분류 모델에 대한 보고서를 출력할 수도 있다.

```python
y_pred = model.predict(X_test)
print(classification_report(y_test,y_pred))
```

```
              precision    recall  f1-score   support

     chinese       0.73      0.72      0.72       224
      indian       0.88      0.88      0.88       224
    japanese       0.79      0.76      0.78       236
      korean       0.82      0.80      0.81       257
        thai       0.80      0.85      0.83       258

    accuracy                           0.80      1199
   macro avg       0.80      0.80      0.80      1199
weighted avg       0.80      0.80      0.80      1199
```

---

# 3. 다양한 분류 모델 사용하기

필요한 패키지를 import 한다.

```python
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.svm import SVC
from sklearn.ensemble import RandomForestClassifier, AdaBoostClassifier
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.metrics import accuracy_score,precision_score,confusion_matrix,classification_report, precision_recall_curve
import numpy as np
```

## 선형 SVC 분류기

매개변수 `kernel`은 레이블을 클러스터링하는 방법을 결정하며, 매개변수 `C` 는 규제를 의미한다. 아래 코드를 통해 선형 모델 객체를 생성하고, 훈련에 대한 정확도를 구한다.

```python
C = 10
# Create different classifiers.
classifiers = {
    'Linear SVC': SVC(kernel='linear', C=C, probability=True,random_state=0)
}

n_classifiers = len(classifiers)

for index, (name, classifier) in enumerate(classifiers.items()):
    classifier.fit(X_train, np.ravel(y_train))

    y_pred = classifier.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy (train) for %s: %0.1f%% " % (name, accuracy * 100))
    print(classification_report(y_test,y_pred))
```

```
Accuracy (train) for Linear SVC: 78.7% 
              precision    recall  f1-score   support

     chinese       0.65      0.74      0.69       224
      indian       0.86      0.87      0.87       224
    japanese       0.80      0.73      0.76       236
      korean       0.82      0.74      0.78       257
        thai       0.81      0.86      0.83       258

    accuracy                           0.79      1199
   macro avg       0.79      0.79      0.79      1199
weighted avg       0.79      0.79      0.79      1199
```

선형 SVC 분류기는 약 79%의 정확도를 보여준다.

## K-이웃 분류기

`KNeighborsClassifier` 클래스를 사용해 K-이웃 분류기 객체를 생성할 수 있다. 인자는 기본값만 사용한다.

```python
classifiers = {
    'KNN classifier': KNeighborsClassifier(C),
}

n_classifiers = len(classifiers)

for index, (name, classifier) in enumerate(classifiers.items()):
    classifier.fit(X_train, np.ravel(y_train))

    y_pred = classifier.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy (train) for %s: %0.1f%% " % (name, accuracy * 100))
    print(classification_report(y_test,y_pred))
```

```
Accuracy (train) for KNN classifier: 68.8% 
              precision    recall  f1-score   support

     chinese       0.48      0.75      0.59       224
      indian       0.83      0.77      0.80       224
    japanese       0.64      0.83      0.73       236
      korean       0.91      0.50      0.64       257
        thai       0.81      0.62      0.70       258

    accuracy                           0.69      1199
   macro avg       0.74      0.69      0.69      1199
weighted avg       0.74      0.69      0.69      1199
```

K-이웃 분류기는 약 69%의 정확도를 보여준다. 이는 선형 SVC 분류기에 비해 약 10%p 감소한 수치로, 이번에 다루는 주제의 분류에는 적합하지 않을 수 있음을 의미한다.

## 서포트 벡터 분류기

`SVC` 클래스를 사용해 서포트 벡터 분류기 객체를 생성할 수 있다. 인자는 기본값만 사용한다.

```python
'SVC': SVC(),
```

```
Accuracy (train) for SVC: 81.7% 
              precision    recall  f1-score   support

     chinese       0.72      0.75      0.73       224
      indian       0.87      0.89      0.88       224
    japanese       0.84      0.77      0.81       236
      korean       0.86      0.79      0.82       257
        thai       0.80      0.89      0.84       258

    accuracy                           0.82      1199
   macro avg       0.82      0.82      0.82      1199
weighted avg       0.82      0.82      0.82      1199
```

서포트 벡터 분류기는 약 82%의 정확도를 보여준다.

## 앙상블 분류기

앙상블이란 여러 개의 분류기를 생성하고 그 예측을 결합함으로써 보다 정확한 최종 예측을 도출하는 기법이다.

`RFST` 클래스 및 `ADA` 클래스를 사용해 앙상블 분류기 객체를 생성할 수 있다. 인자는 기본값만 사용한다.

```python
classifiers = {
    'RFST': RandomForestClassifier(n_estimators=100),
    'ADA': AdaBoostClassifier(n_estimators=100)
}

n_classifiers = len(classifiers)

for index, (name, classifier) in enumerate(classifiers.items()):
    classifier.fit(X_train, np.ravel(y_train))

    y_pred = classifier.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print("Accuracy (train) for %s: %0.1f%% " % (name, accuracy * 100))
    print(classification_report(y_test,y_pred))
```

```
Accuracy (train) for RFST: 83.5% 
              precision    recall  f1-score   support

     chinese       0.77      0.80      0.79       224
      indian       0.87      0.90      0.88       224
    japanese       0.85      0.83      0.84       236
      korean       0.87      0.79      0.83       257
        thai       0.82      0.86      0.84       258

    accuracy                           0.83      1199
   macro avg       0.84      0.84      0.83      1199
weighted avg       0.84      0.83      0.83      1199

Accuracy (train) for ADA: 69.6% 
              precision    recall  f1-score   support

     chinese       0.57      0.38      0.45       224
      indian       0.85      0.81      0.83       224
    japanese       0.64      0.68      0.66       236
      korean       0.65      0.78      0.71       257
        thai       0.75      0.81      0.78       258

    accuracy                           0.70      1199
   macro avg       0.69      0.69      0.69      1199
weighted avg       0.69      0.70      0.69      1199
```

RFST의 경우 약 84%의 정확도를 보여주며, 이는 지금까지 살펴본 분류기 중 가장 높은 성능을 보여준다.

---

# 4. 활용하기

요리 데이터셋을 분류하는 모델을 생성하고, **Onnx**를 활용하여 이 모델을 사용하는 작은 웹 앱을 빌드한다.

소스 코드는 [여기](https://github.com/codingalzi/ML-For-Beginners/tree/main/4-Classification/4-Applied/solution)를 참조했다.

## 준비하기

**NodeJS**가 설치되어 있어야 웹앱 작동에 필요한 `http-server` 를 사용할 수 있다.

- [NodeJS 공식 사이트](https://nodejs.org/ko/)에서 최신 버전(또는 안정 버전)을 설치한다.

- 작업 공간에 웹 앱 프로젝트 폴더를 만든다.

- 터미널에 다음 명령을 입력한다.

  - > npm init --y

    Node.js 패키지를 사용하기 위한 기초 설정을 한다.

  - > npm install --global http-server

    웹 앱 구동을 위한 `http-server`을 전역 설치한다.

- 다음과 같은 디렉토리 구조로 구성한다.

  ![](https://i.imgur.com/mhaANaK.png)

  - data 폴더 내에는 전처리된 데이터셋인 `cleaned_cuisines.csv`이 위치한다.
  - `index.html`은 웹앱의 프론트엔드를 담당한다. [여기](https://github.com/codingalzi/ML-For-Beginners/blob/main/4-Classification/4-Applied/solution/index.html)의 소스 코드와 동일하다.
  - `notebook.ipynb`는 `model.onnx`로 변환되어 웹앱의 벡엔드를 담당한다.
  - `package.json`은 npm 명령 실행 시 자동으로 생성된다. 따로 신경 쓸 필요는 없다.

## ipynb 파일 작성하기

- 사용할 라이브러리를 import한다.

  ```python
  !pip install skl2onnx
  import pandas as pd 
  ```

  skl2onnx는 ipynb에서 작성된 사이킥런 모델을 Onnx로 포매팅하는 역할을 수행한다.

- 데이터를 불러오고 확인한다.

  ```python
  data = pd.read_csv('./data/cleaned_cuisines.csv')
  data.head()
  ```

- 불필요한 처음 두 열을 제외하고, 데이터를 `X`로 저장한다.

  ```python
  X = data.iloc[:,2:]
  X.head()
  ```

- 레이블을 `y`로 저장한다.

  ```python
  y = data[['cuisine']]
  y.head()
  ```

## 모델 제작하기

- 사용할 라이브러리를 import한다.

  ```python
  from sklearn.model_selection import train_test_split
  from sklearn.svm import SVC
  from sklearn.model_selection import cross_val_score
  from sklearn.metrics import accuracy_score,precision_score,confusion_matrix,classification_report
  ```

- 훈련셋과 테스트셋을 분리한다.

  ```python
  X_train, X_test, y_train, y_test = train_test_split(X,y,test_size=0.3)
  ```

- 전에 배운 SVC(Support Vector Classifier) 객체를 생성하고 훈련시킨다.

  ```python
  model = SVC(kernel='linear', C=10, probability=True,random_state=0)
  model.fit(X_train,y_train.values.ravel())
  ```

- 훈련된 모델로  `predict()` 메서드를 실행한다.

  ```python
  y_pred = model.predict(X_test)
  ```

- 분류 보고서를 출력한다.

  ```python
  print(classification_report(y_test,y_pred))
  ```

  ```
                  precision    recall  f1-score   support
  
       chinese       0.72      0.69      0.70       257
        indian       0.91      0.87      0.89       243
      japanese       0.79      0.77      0.78       239
        korean       0.83      0.79      0.81       236
          thai       0.72      0.84      0.78       224
  
      accuracy                           0.79      1199
     macro avg       0.79      0.79      0.79      1199
  weighted avg       0.79      0.79      0.79      1199
  ```

## Onnx로 변환하기

작성한 모델은 다음 셀을 실행시켜 `model.onnx` 파일로 포매팅할 수 있다.

```python
from skl2onnx import convert_sklearn
from skl2onnx.common.data_types import FloatTensorType

initial_type = [('float_input', FloatTensorType([None, 380]))]
options = {id(model): {'nocl': True, 'zipmap': False}}
onx = convert_sklearn(model, initial_types=initial_type, options=options)
with open("./model.onnx", "wb") as f:
    f.write(onx.SerializeToString())
```

## 실행하기

터미널에 다음 명령을 입력한다.

```
http-server
```

이용 가능한 서버 주소가 출력되며, 그 중 `127.0.0.1:8081`에 접속하면 웹 앱 실행을 확인할 수 있다.

방금 작성한 따끈따끈한 모델은 내게 태국 음식을 추천해 줬다.

![](https://i.imgur.com/BOfniAO.png)

서버를 닫고 싶다면 터미널을 종료하면 된다. 터미널 종료는 Ctrl + C를 입력해도 좋고, 에디터 자체 기능으로 닫아도 무방하다.

