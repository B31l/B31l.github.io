---
title: "Tensorflow 작업환경 구성"
categories: [Tensorflow]
mathjax: true
---

* content
{:toc}
딥러닝 실습을 위해 **GPU 가속**을 지원하는 **Tensorflow** 작업환경 구성 방법을 서술한다.

구글 Colab은 제한 사항이 많으므로, 대신 **Ubuntu** 및 **Docker**를 사용해 작업환경을 구성한다.

# WSL 2 및 Ubuntu 셋팅

윈도우(10 이상)에서 Native한 방식으로 리눅스 실행 파일을 실행하기 위해 **WSL 2** 및 **Ubuntu 20.04.4 LTS**([💾](https://apps.microsoft.com/store/detail/ubuntu-20044-lts/9MTTCL66CPXJ?hl=ko-kr&gl=KR))를 설치한다.

Ubuntu 설치가 끝나면 실행하여 사용자 정보(**username** 및 **password**)를 입력한다.

>   *Note*
>
>    **Windows Terminal**([💾](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=ko-kr&gl=KR))은 많은 기능과 우수한 편의성을 자랑하므로 설치를 권장한다.

-   📌 [WSL 설치](https://docs.microsoft.com/ko-kr/windows/wsl/install-manual)

    아래 작업은 PowerShell을 **관리자 권한**으로 실행해야 한다.

    -   **Linux용 Windows 하위 시스템 사용 옵션** 기능을 사용하도록 설정한다.

        ```sh
        > dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart 
        ```

    -   버전업 가능 여부를 확인한다.

        윈도우 빌드가 18362보다 낮으면 WSL 2를 지원하지 않으므로 주의해야 한다.

        (윈도우 빌드는 실행 창(`Windows 로고 키 + R`)에 **winver**을 입력하거나, 설정에서 **PC 정보**를 검색해서 확인)

    -   업데이트가 가능하다면 이어서 **Virtual Machine** 기능을 사용하도록 설정한다.

        ```sh
        > dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
        ```

    -   `--set-default-version` 명령어로 기본 버전을 선택한다.

        (`2`로 설정 시 WSL2를 기본 버전으로 사용)

        ```sh
        > wsl --set-default-version 2
        ```

    -   만약 위 방법이 작동하지 않는다면, Linux 커널 업데이트를 먼저 진행해야 한다.

        [이곳](aka.ms/wsl2kernel)에서 최신 WSL2 Linux 커널 업데이트 패키지를 설치한 후, 다음 명령을 대신 입력한다.

        ```sh
        > wsl --set-default-version Ubuntu-20.04 2
        ```

>    *Note*
>
>   WSL 버전은 `wsl -l -v` 명령으로 확인할 수 있다.
>
>   ```shell
>   > wsl -l -v
>   ```
>
>   ```
>     NAME                   STATE           VERSION
>   * Ubuntu-20.04           Running         2
>   ```
>

---

# Docker 및 GPU 셋팅

Ubuntu에 Docker 엔진 및 GPU 지원을 위해 필요한 패키지를 설치한다.

## Windows용 Docker 데스크톱 설치

WSL 2에서 도커를 사용하기 위해서는 우선 **Windows용 Docker 데스크톱**([💾](https://docs.docker.com/desktop/windows/install/))이 설치되어 있어야 한다.

설치가 완료되면 몇 가지 환경 설정을 진행한다.

-   📌 [Windows에 Docker 데스크톱 설치](https://docs.docker.com/desktop/windows/install/)

    -   General 메뉴의 Use the WSL 2 based engine 옵션에 체크한다.

        ![](https://github.com/B31l/B31l/blob/main/posts/DeepLearning/20220713_01.png?raw=true)

    -   Resources -> WSL Integration 메뉴의 옵션을 다음과 같이 설정한다.

        ![](https://github.com/B31l/B31l/blob/main/posts/DeepLearning/20220713_02.png?raw=true)

## Ubuntu용 Docker 엔진 설치

Ubuntu를 실행하고 Docker 엔진을 설치하기 위해 다음 과정을 진행한다.

-   📌 [Ubuntu에 Docker 엔진 설치](https://docs.docker.com/engine/install/ubuntu/)

    -   먼저 HTTPS를 경유하여 리포지토리를 사용할 수 있도록 apt를 업데이트하고 패키지를 설치한다.

        ```sh
        $ sudo apt-get update
        $ sudo apt-get install \
            ca-certificates \
            curl \
            gnupg \
            lsb-release
        ```

    -   다음으로 Docker와의 암호화된 통신을 위한 Docker의 공식 **GPG 키를 추가**한다.

        ```sh
        $ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
        ```

    -   마지막으로 Docker의 리포지토리를 설정한다.

        ```sh
        $ echo \
          "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
          $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
        ```

모든 준비가 끝났다면 apt를 업데이트하고 Docker 엔진을 설치한다.


```shell
$ sudo apt-get update
$ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

>   **Note**
>
>   특정 버전을 설치하고 싶다면 [이곳](https://docs.docker.com/engine/install/ubuntu/#install-docker-engine)의 두 번째 단락을 참고한다.

테스트 이미지를 실행해 Docker 엔진이 올바르게 설치되었는지 확인한다.

```shell
$ sudo docker run hello-world
```

## (선택적) 설치 후 단계

이 작업은 루트가 아닌 사용자 그룹에 root와 동일한 권한을 부여한다(건너뛰어도 무방). 

-   📌 [(선택적) 설치 후 단계](https://docs.docker.com/engine/install/linux-postinstall/)

    -   먼저, docker 그룹을 생성한다.

        ```sh
        $ sudo groupadd docker
        ```

    -   생성한 docker 그룹에 사용자를 추가한 다음, 재시작한다.

        ```sh
        $ sudo usermod -aG docker $USER
        $ newgrp docker 
        ```

    -   `/var/run/docker.sock` 파일의 권한을 666으로 설정하여 그룹 내 다른 사용자도 접근 가능하게 변경한다.

        ```sh
        $ sudo chmod 666 /var/run/docker.sock
        ```

    -   이제 `sudo` 없이도 docker 명령을 수행할 수 있다.

        ```sh
        $ docker run hello-world
        ```


## NVIDIA Docker 지원 설치

Linux 환경에서 Tensorflow가 **GPU를 지원**할 수 있도록 NVIDIA Docker 지원을 설치한다.

-   📌 [NVIDIA Docker 지원 설치](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/install-guide.html#docker)

    -   NVIDIA 패키지 리포지토리 및 GPG 키를 설치한다.

        ```sh
        $ distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \
              && curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
              && curl -s -L https://nvidia.github.io/libnvidia-container/$distribution/libnvidia-container.list | \
                    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
                    sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
        ```

    -   apt를 업데이트하고 `nvidia-docker2` 패키지를 설치한 다음, 도커 데몬을 재시작해 설치를 완료한다.

        ```sh
        $ sudo apt-get update
        $ sudo apt-get install -y nvidia-docker2
        $ sudo systemctl restart docker
        ```

모든 패키지 설치가 끝났으며, 다음 명령으로 CUDA 컨테이너를 실행해 GPU 작동 성능을 테스트할 수 있다.

```shell
$ sudo docker run --rm --gpus all nvidia/cuda:11.0.3-base-ubuntu20.04 nvidia-smi
```

```
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 510.51       Driver Version: 511.69       CUDA Version: 11.6     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA GeForce ...  On   | 00000000:01:00.0 Off |                  N/A |
| N/A   48C    P8    N/A /  N/A |      0MiB /  4096MiB |      1%      Default |
|                               |                      |                  N/A |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

---

# Tensorflow 셋팅

이번 단락에서는 옵션을 지정해 Tensorflow를 Docker에 설치하고, 실행하여 작동을 확인한다.

## Tensorflow Docker 이미지 다운로드

공식 Tensorflow Docker 이미지는 [tensorflow/tensorflow](https://hub.docker.com/r/tensorflow/tensorflow/) Docker hub 저장소에 있습니다. 

다음 형식을 조합하면 리눅스에서 Tensorflow 이미지를 태그할 수 있다.

-   📌 [Tensorflow Docker 이미지 다운로드](https://www.tensorflow.org/install/docker?hl=ko#download_a_tensorflow_docker_image)

    -   먼저 베이스 태그를 사용해 Tensorflow 이미지의 버전을 지정한다.

        | 베이스 태그 | 설명                                               |
        | ----------- | -------------------------------------------------- |
        | `latest`    | TensorFlow CPU 바이너리 이미지의 최신 출시(기본값) |
        | `version`   | TensorFlow 바이너리 이미지의 버전 지정(예: 2.1.0)  |

    -   태그 변이를 적용하면 각 베이스 태그에는 기능 추가를 할 수 있다.

        (태그 변이는 다른 태그 변이와 함께 사용 가능)

        | 태그 변이     | 설명                  |
        | ------------- | --------------------- |
        | `tag-gpu`     | GPU 지원              |
        | `tag-jupyter` | Jupyter Notebook 포함 |

구성하고자 하는 텐서플로우 작업환경은 GPU를 지원하며 Jupyter Notebook 역시 포함해야 한다.

다음과 같은 형식으로 태그를 만들면 최신 버전의 Tensorflow를 다운로드할 수 있다.

``` shell
$ docker pull tensorflow/tensorflow:latest-gpu-jupyter
```

## Jupyter Notebook 실행

도커를 이용하기 위해서는 **Docker Daemon**이 실행 중이여야 한다.

다음 명령을 통해 Docker Daemon의 상태를 `start`로 변경한다.

```shell
$ sudo service docker start
```

다음 명령으로 지금까지 구성한 작업환경 컨테이너를 실행할 수 있으며, 생성된 링크로 이동하면 주피터 노트북으로 연결된다.

```shell
$ docker run --gpus all -lt -v $(realpath ~/notebooks):/tf/notebooks -p 8888:8888 tensorflow/tensorflow:latest-gpu-jupyter
```

notebooks 폴더로 이동한 뒤, 작동 테스트를 위해 새 ipynb 파일을 생성한다.

-   작동 테스트

    -   Tensorflow 버전 확인

        ```python
        import tensorflow as tf
        
        print(tf.__version__)
        ```

    -   Tensorflow가 GPU를 사용하는지 확인

        ```python
        from tensorflow.python.client import device_lib
        
        print(device_lib.list_local_devices())
        ```
        
        ```
        device_type: "GPU"
        ```

> **Note**
>
> 주피터 노트북을 종료하려면 우측 상단의 `Quit` 버튼을 클릭한다.
