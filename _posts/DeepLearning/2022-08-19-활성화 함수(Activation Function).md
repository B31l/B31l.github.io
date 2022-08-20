---
title: "활성화 함수(Activation Function)"
categories: [DeepLearning]
tags: Python
mathjax: true
---

* content
{:toc}
# 개념



# 종류

활성화 함수는 모양에 따라 **선형**과 **비선형**으로 나눌 수 있다.

선형 활성화 함수는 은닉층과 출력층에서 사용하기엔 비효율적이므로, 비선형 활성화 함수를 사용해야 한다.

인공 신경망에서 자주 사용되는 비선형 함수는 다음과 같다.

- **로지스틱**(Logistic)

    $$σ(z)=\frac{1}{1+e^{-z}}$$

    (0, 1) 범위의 출력값을 가지는 시그모이드 함수로 이진 분류에 사용된다. 

    일반적으로 시그모이드 함수라고 하면 이 함수를 가리킨다.

    음수 값을 0에 가깝게 표현하기 때문에 많은 음수 값이 입력층에 들어올 경우 신경망 학습이 매우 더디게 진행되며, Vanishing Gradient Problem이 발생하기 쉽다.

    PyTorch에서 사용하려면 `torch.sigmoid`를 호출한다.

- **소프트맥스**(Softmax)

    argmax 함수의 부드러운 형태의 시그모이드 함수로, 다중 분류에 사용되며 [0, 1] 범위의 출력값을 가진다. 

    단일 클래스의 인덱스 대신, 각 클래스에 해당할 확률을 반환한다.  

    PyTorch에서 사용하려면 `torch.sigmoid`를 호출한다.

- **하이퍼볼릭 탄젠트**(Hyperbolic tangent)

    $$σ(z)=\frac{e^{z}-e^{-z}}{e^{z}+e^{-z}}$$

    (-1, 1) 범위의 출력값을 가지며, 로지스틱 함수에 비해 음수를 어느 정도 처리할 수 있어 **Vanishing Gradient Problem**을 어느 정도 해소한다.

    로지스틱 함수와 비교한 하이퍼볼릭 탄젠트의 그래프는 다음과 같다.

    ![](https://i.imgur.com/4zEB4RR.png)

- **렐루**(ReLU)

    $$σ(z)=\begin {cases}0~~~~z<0\\z~~~~z>1\end {cases}$$

    입력에 대한 ReLU의 도함수는 항상 1이므로 Vanishing Gradient Problem을 해결할 수 있다.

    복잡한 함수를 학습할 때 탁월한 성능을 보여주므로 심층 신경망 구현에 적합하다.

    만약 붓꽃 데이터 분류 모델에서 첫 번째 은닉층의 시그모이드 함수를 ReLU 함수로 대체한다면, 더 빠르게 오차가 감소하고 정확도가 급증하는 시점이 앞당겨지는 것을 확인할 수 있다.

    ![](https://i.imgur.com/We3GSJ4.png)
