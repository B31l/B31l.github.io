---
layout: post
meta: "Titanic"
title: "타이타닉 관련 모델 훈련 과정"
categories: ML
tags: Python
comments: true
mathjax: true
---



* content
{:toc}


```python
import numpy as np
import pandas as pd

from sklearn.preprocessing import OneHotEncoder

from sklearn.linear_model import LogisticRegression # 로지스틱 회귀
from sklearn.svm import SVC                         # 서포트 벡터 머신
from sklearn.neighbors import KNeighborsClassifier  # K-최근접 이웃 분류기
from sklearn.ensemble import RandomForestClassifier # 랜덤 포레스트 분류기
from sklearn.naive_bayes import GaussianNB          # 나이브 베이즈 분류기
```

---

# 데이터 전처리


```python
train = pd.read_csv('../input/dataset/train.csv')
test = pd.read_csv('../input/dataset/test.csv')
train.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>PassengerId</th>
      <th>Survived</th>
      <th>Pclass</th>
      <th>Name</th>
      <th>Sex</th>
      <th>Age</th>
      <th>SibSp</th>
      <th>Parch</th>
      <th>Ticket</th>
      <th>Fare</th>
      <th>Cabin</th>
      <th>Embarked</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>0</td>
      <td>3</td>
      <td>Braund, Mr. Owen Harris</td>
      <td>male</td>
      <td>22.0</td>
      <td>1</td>
      <td>0</td>
      <td>A/5 21171</td>
      <td>7.2500</td>
      <td>NaN</td>
      <td>S</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>Cumings, Mrs. John Bradley (Florence Briggs Th...</td>
      <td>female</td>
      <td>38.0</td>
      <td>1</td>
      <td>0</td>
      <td>PC 17599</td>
      <td>71.2833</td>
      <td>C85</td>
      <td>C</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>1</td>
      <td>3</td>
      <td>Heikkinen, Miss. Laina</td>
      <td>female</td>
      <td>26.0</td>
      <td>0</td>
      <td>0</td>
      <td>STON/O2. 3101282</td>
      <td>7.9250</td>
      <td>NaN</td>
      <td>S</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>1</td>
      <td>1</td>
      <td>Futrelle, Mrs. Jacques Heath (Lily May Peel)</td>
      <td>female</td>
      <td>35.0</td>
      <td>1</td>
      <td>0</td>
      <td>113803</td>
      <td>53.1000</td>
      <td>C123</td>
      <td>S</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>0</td>
      <td>3</td>
      <td>Allen, Mr. William Henry</td>
      <td>male</td>
      <td>35.0</td>
      <td>0</td>
      <td>0</td>
      <td>373450</td>
      <td>8.0500</td>
      <td>NaN</td>
      <td>S</td>
    </tr>
  </tbody>
</table>
</div>




```python
train.info()
```

    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 891 entries, 0 to 890
    Data columns (total 12 columns):
     #   Column       Non-Null Count  Dtype  
    ---  ------       --------------  -----  
     0   PassengerId  891 non-null    int64  
     1   Survived     891 non-null    int64  
     2   Pclass       891 non-null    int64  
     3   Name         891 non-null    object 
     4   Sex          891 non-null    object 
     5   Age          714 non-null    float64
     6   SibSp        891 non-null    int64  
     7   Parch        891 non-null    int64  
     8   Ticket       891 non-null    object 
     9   Fare         891 non-null    float64
     10  Cabin        204 non-null    object 
     11  Embarked     889 non-null    object 
    dtypes: float64(2), int64(5), object(5)
    memory usage: 83.7+ KB


각 column은 다음 정보를 가지고 있다.
- PassengerId : 각 승객의 고유 번호
- Survived : 생존 여부(종속 변수)   
0 = 사망   
1 = 생존
- Pclass : 객실 등급 - 승객의 사회적, 경제적 지위   
1st = Upper   
2nd = Middle   
3rd = Lower   
- Name : 이름
- Sex : 성별
- Age : 나이
- SibSp : 동반한 Sibling(형제자매)와 Spouse(배우자)의 수
- Parch : 동반한 Parent(부모) Child(자식)의 수
- Ticket : 티켓의 고유넘버
- Fare : 티켓의 요금
- Cabin : 객실 번호
- Embarked : 승선한 항   
C = Cherbourg   
Q = Queenstown   
S = Southampton   


```python
train.isnull().sum()
```




    PassengerId      0
    Survived         0
    Pclass           0
    Name             0
    Sex              0
    Age            177
    SibSp            0
    Parch            0
    Ticket           0
    Fare             0
    Cabin          687
    Embarked         2
    dtype: int64



정확도 향상을 위해 필요없는 데이터를 drop한다. 고유한 값을 가지는 Object인 `Name`, `Ticket`, `Cabin`이 제거 대상이다.   
그 다음 순서는 결측값 처리다. `Age`, `Embarked`에 결측값이 존재한다. (Cabin is dropped)   
Age의 경우 평균값을, Embarked의 경우 최빈값을 결측값 대신 사용한다.   

`Sex`의 male / female을 정수형 데이터로 변경하는 과정 또한 필요하다. 각각 1 / 0으로 매치시킨다.   
범주형 데이터`Embarked`는 원핫 인코딩을 거친다.


```python
train["Embarked"].value_counts()
```




    S    644
    C    168
    Q     77
    Name: Embarked, dtype: int64




```python
# drop
train = train.drop(["Name", "Ticket", "Cabin"], axis=1)
test = test.drop(["Name", "Ticket", "Cabin"], axis=1)


# NAN
train_mean = train["Age"].mean()
train["Age"].fillna(train_mean, inplace=True)
train["Embarked"].fillna("S", inplace=True)
test_mean = test["Age"].mean()
test["Age"].fillna(test_mean, inplace=True)
test["Embarked"].fillna("S", inplace=True)
test_median = test["Fare"].median()
test["Fare"].fillna(test_median, inplace=True)


# astype
for i in train.index:
    if train.loc[i, "Sex"] == "male":
        train.loc[i, "Sex"] = 1
    else:
        train.loc[i, "Sex"] = 0
train["Sex"] = train["Sex"].astype(int)
for i in test.index:
    if test.loc[i, "Sex"] == "male":
        test.loc[i, "Sex"] = 1
    else:
        test.loc[i, "Sex"] = 0
test["Sex"] = test["Sex"].astype(int)


# OneHot
ohe = OneHotEncoder(sparse=False)
train_cat = ohe.fit_transform(train[["Embarked"]])
train = pd.concat([train.drop(columns=["Embarked"]),
                   pd.DataFrame(train_cat, columns=["Embarked_" + col for col in ohe.categories_[0]])], axis=1)
test_cat = ohe.fit_transform(test[["Embarked"]])
test = pd.concat([test.drop(columns=["Embarked"]),
                   pd.DataFrame(test_cat, columns=["Embarked_" + col for col in ohe.categories_[0]])], axis=1)
```


```python
train.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }
    
    .dataframe thead th {
        text-align: right;
    }
</style>

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>PassengerId</th>
      <th>Survived</th>
      <th>Pclass</th>
      <th>Sex</th>
      <th>Age</th>
      <th>SibSp</th>
      <th>Parch</th>
      <th>Fare</th>
      <th>Embarked_C</th>
      <th>Embarked_Q</th>
      <th>Embarked_S</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>0</td>
      <td>3</td>
      <td>1</td>
      <td>22.0</td>
      <td>1</td>
      <td>0</td>
      <td>7.2500</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>38.0</td>
      <td>1</td>
      <td>0</td>
      <td>71.2833</td>
      <td>1.0</td>
      <td>0.0</td>
      <td>0.0</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>1</td>
      <td>3</td>
      <td>0</td>
      <td>26.0</td>
      <td>0</td>
      <td>0</td>
      <td>7.9250</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>1</td>
      <td>1</td>
      <td>0</td>
      <td>35.0</td>
      <td>1</td>
      <td>0</td>
      <td>53.1000</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
    <tr>
      <th>4</th>
      <td>5</td>
      <td>0</td>
      <td>3</td>
      <td>1</td>
      <td>35.0</td>
      <td>0</td>
      <td>0</td>
      <td>8.0500</td>
      <td>0.0</td>
      <td>0.0</td>
      <td>1.0</td>
    </tr>
  </tbody>
</table>
</div>




```python
print(train.info())
print(test.info())
```

    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 891 entries, 0 to 890
    Data columns (total 11 columns):
     #   Column       Non-Null Count  Dtype  
    ---  ------       --------------  -----  
     0   PassengerId  891 non-null    int64  
     1   Survived     891 non-null    int64  
     2   Pclass       891 non-null    int64  
     3   Sex          891 non-null    int64  
     4   Age          891 non-null    float64
     5   SibSp        891 non-null    int64  
     6   Parch        891 non-null    int64  
     7   Fare         891 non-null    float64
     8   Embarked_C   891 non-null    float64
     9   Embarked_Q   891 non-null    float64
     10  Embarked_S   891 non-null    float64
    dtypes: float64(5), int64(6)
    memory usage: 76.7 KB
    None
    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 418 entries, 0 to 417
    Data columns (total 10 columns):
     #   Column       Non-Null Count  Dtype  
    ---  ------       --------------  -----  
     0   PassengerId  418 non-null    int64  
     1   Pclass       418 non-null    int64  
     2   Sex          418 non-null    int64  
     3   Age          418 non-null    float64
     4   SibSp        418 non-null    int64  
     5   Parch        418 non-null    int64  
     6   Fare         418 non-null    float64
     7   Embarked_C   418 non-null    float64
     8   Embarked_Q   418 non-null    float64
     9   Embarked_S   418 non-null    float64
    dtypes: float64(5), int64(5)
    memory usage: 32.8 KB
    None


필요 없는 column과 모든 결측치가 제거되었고, 데이터 타입을 숫자형으로 변환하였으며, 원핫 인코딩으로 정확도를 향상시킨다. 이제 학습의 때다.

---

# 학습

target을 분리시킨 뒤, 5가지 모델에 대한 학습을 실시한다.


```python
target = np.ravel(train.Survived)
train.drop(["Survived"], inplace=True, axis=1)
```


```python
def play(model):
    model.fit(train, target)
    prediction = model.predict(test)
    accuracy = round(model.score(train, target) * 100, 2)
    print("Accuracy : ", accuracy, "%")
    return prediction
```


```python
log_pred = play(LogisticRegression())
svm_pred = play(SVC())
knn_pred = play(KNeighborsClassifier(n_neighbors = 4))
rf_pred = play(RandomForestClassifier(n_estimators=100))
nb_pred = play(GaussianNB())
```

    /opt/conda/lib/python3.7/site-packages/sklearn/linear_model/_logistic.py:818: ConvergenceWarning: lbfgs failed to converge (status=1):
    STOP: TOTAL NO. of ITERATIONS REACHED LIMIT.
    
    Increase the number of iterations (max_iter) or scale the data as shown in:
        https://scikit-learn.org/stable/modules/preprocessing.html
    Please also refer to the documentation for alternative solver options:
        https://scikit-learn.org/stable/modules/linear_model.html#logistic-regression
      extra_warning_msg=_LOGISTIC_SOLVER_CONVERGENCE_MSG,


    Accuracy :  79.35 %
    Accuracy :  66.44 %
    Accuracy :  74.75 %
    Accuracy :  100.0 %
    Accuracy :  78.34 %


과대적합이 발생한 랜덤 포레스트 분류기를 제외하면, 로지스틱 회귀를 사용했을 때 가장 높은 정확도를 보인다. 이를 export한다.


```python
submission = pd.DataFrame({
    "PassengerId": test["PassengerId"],
    "Survived": log_pred
})

submission.to_csv('submission_log.csv', index=False)
```
