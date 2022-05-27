---
layout: post
meta: "ML*pickle*Flask"
title: "Flask와 pickle을 사용한 머신러닝 웹앱"
categories: ML Flask
tags: Python
comments: true
mathjax: true
---



* content
{:toc}
# 개요

이 글은 **ML-For-Beginners**의 **[Build a web app to use your ML model](https://github.com/codingalzi/ML-For-Beginners/tree/main/3-Web-App)** 문서를 읽고 요약 정리한 것이다.

학습된 모델을 바이너리 파일 **pickle**로 저장할 수 있으며, 백엔드 프레임워크  **Flask**를 활용해 머신러닝 웹앱을 구축할 수 있다.

# 모델 훈련

모델 훈련을 위해 작업 폴더에 **notebook.ipynb** 파일을 생성하고, 필요한 라이브러리를 임포트한다.

```python
import pandas as pd
import numpy as np
```

## 데이터 전처리

[NUFORC](https://nuforc.org/) (National UFO Reporting Cente)에서 수집한 80,000번의 UFO 목격 데이터셋을 사용한다.

```python
ufos = pd.read_csv("./data/ufos.csv")
ufos.head()
```

|      |         datetime |                 city | state | country |    shape | duration (seconds) | duration (hours/min) |                                          comments | date posted |  latitude | longitude   |
| ---: | ---------------: | -------------------: | ----: | ------: | -------: | -----------------: | -------------------: | ------------------------------------------------: | ----------: | --------: | ----------- |
|    0 | 10/10/1949 20:30 |           san marcos |    tx |      us | cylinder |             2700.0 |           45 minutes | This event took place in early fall around 194... |   4/27/2004 | 29.883056 | -97.941111  |
|    1 | 10/10/1949 21:00 |         lackland afb |    tx |     NaN |    light |             7200.0 |              1-2 hrs |  1949 Lackland AFB&#44 TX. Lights racing acros... |  12/16/2005 | 29.384210 | -98.581082  |
|    2 | 10/10/1955 17:00 | chester (uk/england) |   NaN |      gb |   circle |               20.0 |           20 seconds | Green/Orange circular disc over Chester&#44 En... |   1/21/2008 | 53.200000 | -2.916667   |
|    3 | 10/10/1956 21:00 |                 edna |    tx |      us |   circle |               20.0 |             1/2 hour | My older brother and twin sister were leaving ... |   1/17/2004 | 28.978333 | -96.645833  |
|    4 | 10/10/1960 20:00 |              kaneohe |    hi |      us |    light |              900.0 |           15 minutes | AS a Marine 1st Lt. flying an FJ4B fighter/att... |   1/22/2004 | 21.418056 | -157.803611 |

데이터셋의 각 특성에 대한 정보는 다음과 같다.

- city: UFO 목격 장소(시)
- state: UFO 목격 장소(주)
- `country`: UFO 목격 장소(국가)
- shape: UFO 모양
- `duration (seconds)`: UFO 목격 시간(초 단위)
- duration (hours/min): UFO 목격 시간(분~시 단위)
- comments: UFO 목격에 대한 흥미로운 설명
- date posted: 게시일
- `latitude`: 위도
- `longitude`: 경도

모델의 목적은 좌표와 목격 시간을 바탕으로 UFO를 목격한 장소를 예측하는 것이므로, 모델 훈련에 사용할 특성인 `duration (seconds)`, `country`, `latitude`, `longitude`으로 새 데이터프레임(ufos)을 생성한다.

```python
ufos = pd.DataFrame({
    "Seconds": ufos["duration (seconds)"],
    "Country": ufos["country"],
    "Latitude": ufos["latitude"],
    "Longitude": ufos["longitude"]
})
```

>  *Note*
>
> `unique()` 메서드를 사용하면 목격 장소(국가)가 어떤 값들을 가지는지 확인할 수 있다.
>
> ```python
> ufos.Country.unique()
> ```
>
> ```
> array(['us', nan, 'gb', 'ca', 'au', 'de'], dtype=object)
> ```
>

모델의 성능 향상을 위해 데이터 전처리는 필수적이다.

- **결측값 처리**: 결측값이 있는 행을 삭제한다.
- **데이터 축소**: 목격 시간을 1~60초 사이로 제한한다.

```python
ufos.dropna(inplace=True)                                       # 결측값 처리
ufos = ufos[(ufos["Seconds"] >= 1) & (ufos["Seconds"] <= 60)]   # 데이터 축소
ufos.info()
```

```
<class 'pandas.core.frame.DataFrame'>
Int64Index: 25863 entries, 2 to 80330
Data columns (total 4 columns):
 #   Column     Non-Null Count  Dtype  
---  ------     --------------  -----  
 0   Seconds    25863 non-null  float64
 1   Country    25863 non-null  object 
 2   Latitude   25863 non-null  float64
 3   Longitude  25863 non-null  float64
dtypes: float64(3), object(1)
memory usage: 1010.3+ KB
```

|      | Seconds | Country | Latitude  | Longitude   |
| ---- | ------- | ------- | --------- | ----------- |
| 2    | 20.0    | 3       | 53.200000 | -2.916667   |
| 3    | 20.0    | 4       | 28.978333 | -96.645833  |
| 14   | 30.0    | 4       | 35.823889 | -80.253611  |
| 23   | 60.0    | 4       | 45.582778 | -122.352222 |
| 24   | 3.0     | 3       | 51.783333 | -0.783333   |

이제 훈련 준비가 끝났다.

## 학습

ㅇ

```python
from sklearn.model_selection import train_test_split

Selected_features = ["Seconds", "Latitude", "Longitude"]

X = ufos[Selected_features]
y = ufos["Country"]

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
```

예측 모델로 로지스틱 회귀 모델(**ogistic regression model**)을 사용한다.

데이터 전처리를 위해 

```python
from sklearn.metrics import accuracy_score, classification_report
from sklearn.linear_model import LogisticRegression

model = LogisticRegression()
model.fit(X_train, y_train)
predictions = model.predict(X_test)

print(classification_report(y_test, predictions))
print("Predicted labels: ", predictions)
print("Accuracy: ", accuracy_score(y_test, predictions))
```

```
              precision    recall  f1-score   support

           0       1.00      1.00      1.00        41
           1       0.84      0.25      0.38       250
           2       1.00      0.88      0.93         8
           3       0.99      1.00      1.00       131
           4       0.96      1.00      0.98      4743

    accuracy                           0.96      5173
   macro avg       0.96      0.82      0.86      5173
weighted avg       0.96      0.96      0.95      5173

Predicted labels:  [4 4 4 ... 3 4 4]
Accuracy:  0.9611444036342548
```



## pickle로 저장

```python
import pickle
```



> *Note*
>
> Pickle 어쩌구



```python
model_filename = "ufo-model.pkl"
pickle.dump(model, open(model_filename, "wb"))
```

```python
model = pickle.load(open("ufo-model.pkl", "rb"))
print(model.predict([[50, 44, -12]]))
```

```
[1]
```





# 웹앱 빌드

## 디렉토리 구조

![](https://i.imgur.com/S8suea4.png)

## Frontend



```
scikit-learn
pandas
numpy
flask
```



```css
body {
	width: 100%;
	height: 100%;
	font-family: 'Helvetica';
	background: black;
	color: #fff;
	text-align: center;
	letter-spacing: 1.4px;
	font-size: 25px;
}

input {
    width: 90%;
	margin: 5px;
    font-size: 18px;
}

.grid {
	width: 300px;
	border: 1px solid #2d2d2d;
	display: grid;
	justify-content: center;
	margin: 20px auto;
}

.box {
	width: 450px;
	color: #fff;
	background: #2d2d2d;
	padding: 12px;
	display: inline-block;
}

.btn {
	width: 60%;
    height: 50px;
    margin: 20px;
	background: tomato;
	cursor: pointer;
}
```



```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>🛸 UFO Appearance Prediction! 👽</title>
    <link rel="stylesheet" href="{{ url_for('static', filename='css/styles.css') }}">
  </head>

  <body>
    <div class="grid">

      <div class="box">

        <p>According to the number of seconds, latitude and longitude, which country is likely to have reported seeing a UFO?</p>

        <form action="{{ url_for('predict')}}" method="post">
          <input type="number" name="seconds" placeholder="Seconds" required="required" min="0" max="60" />
          <input type="text" name="latitude" placeholder="Latitude" required="required" />
          <input type="text" name="longitude" placeholder="Longitude" required="required" />
          <button type="submit" class="btn">Predict country where the UFO is seen</button>
        </form>

        <p>{{ prediction_text }}</p>

      </div>

    </div>

  </body>
</html>
```





## Backend with Flask



```python
import numpy as np
from flask import Flask, request, render_template
import pickle

app = Flask(__name__)

model = pickle.load(open("./ufo-model.pkl", "rb"))


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/predict", methods=["POST"])
def predict():

    int_features = [int(x) for x in request.form.values()]
    final_features = [np.array(int_features)]
    prediction = model.predict(final_features)

    output = prediction[0]

    countries = ["Australia", "Canada", "Germany", "UK", "US"]

    return render_template(
        "index.html", prediction_text="Likely country: {}".format(countries[output])
    )


if __name__ == "__main__":
    app.run(debug=True)
```



# 실행

![](https://i.imgur.com/TrsXkOt.png)





![](https://i.imgur.com/48HsQ5f.png)