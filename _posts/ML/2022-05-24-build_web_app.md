---
layout: post
meta: "ML*pickle*Flask*"
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

둥둥

필요한 패키지를 import한다.

```python
import pandas as pd
import numpy as np

import matplotlib.pyplot as plt
import matplotlib as mpl
import numpy as np
```

>  `imblearn`는 전처리 과정을 도와주는 Scikit-learn 패키지다.

```python
ufos = pd.read_csv("./data/ufos.csv")
ufos.head()
```

