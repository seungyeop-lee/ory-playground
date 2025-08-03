# Ory Elements Next.js 앱 라우터 예제 (자체 호스팅)

이 프로젝트는 [Ory Elements Next.js 앱 라우터 예제](https://github.com/ory/elements/tree/main/examples/nextjs-app-router)를 자체 호스팅 환경에서 실행하는 방법을 보여줍니다.

자체 호스팅 설정에서 발생할 수 있는 CORS 문제를 해결하며, 해결 방법은 [ory/elements 이슈 #559](https://github.com/ory/elements/issues/559)의 논의를 기반으로 합니다.

## 구조

* `/kratos`: Ory Kratos 및 MailSlurper를 실행하기 위한 Docker Compose 구성이 포함되어 있습니다.
* `/raw`: 예제의 소스 코드를 관리합니다. `Makefile`을 사용하여 `ory/elements` 저장소에서 특정 버전의 코드를 복제합니다.
* `/webapp`: Next.js 애플리케이션 자체입니다.

## 시작하기

### 사전 요구 사항

* Docker
* Node.js

### 1. Ory Kratos 환경 시작

`kratos` 디렉토리로 이동하여 서비스를 시작합니다.

```bash
cd kratos
make up
```

### 2. 웹 애플리케이션 실행

`webapp` 디렉토리로 이동하여 종속성을 설치하고 개발 서버를 시작합니다.

```bash
cd webapp
npm install
npm run dev
```

애플리케이션은 `http://localhost:3000`에서 사용할 수 있습니다.

## Makefile 명령어

### Kratos (`/kratos/Makefile`)

* `make up`: 분리 모드에서 Docker 컨테이너를 시작합니다.
* `make log`: Kratos 컨테이너의 로그를 봅니다.
* `make down`: Docker 컨테이너를 중지합니다.
* `make clean`: Docker 컨테이너와 볼륨을 중지하고 제거합니다.
* `make open-mailslurper`: 기본 브라우저에서 MailSlurper를 엽니다.

### 원본 소스 (`/raw/Makefile`)

* `make clone`: `ory/elements` 저장소를 복제하고 특정 커밋을 체크아웃합니다.
* `make copy`: 복제된 저장소에서 `nextjs-app-router` 예제를 복사합니다.
* `make reset`: `clone`과 `copy`를 모두 수행하여 소스 코드를 재설정합니다.
