# Ory Kratos Self-Service UI Node.js 참조 구현

이 프로젝트는 https://github.com/ory/kratos-selfservice-ui-node 의 Ory Kratos Self-Service UI Node.js 참조 구현을 로컬에서 실행하기 위한 개발 환경을 제공합니다. Express, Handlebars, TypeScript를 사용하여 작성된 Ory Kratos용 셀프 서비스 UI의 참조 구현입니다.

## 전제 조건

- Docker
- Node.js
- npm

## 시작하기

### 1. Ory Kratos 시작

시작하려면 Ory Kratos를 실행해야 합니다. 제공된 Docker Compose 설정을 사용하여 이 작업을 수행할 수 있습니다.

```sh
make kratos-up
```

이 명령은 데이터베이스와 테스트용 메일 서버를 포함한 Ory Kratos 서비스를 시작합니다.

### 2. 셀프 서비스 UI 실행

Ory Kratos가 실행되면 셀프 서비스 UI를 시작할 수 있습니다.

```sh
make run-original
```

이렇게 하면 필요한 종속성이 설치되고 Node.js 애플리케이션이 시작됩니다. UI는 `http://127.0.0.1:4455`에서 사용할 수 있습니다.

### 3. 애플리케이션 열기

브라우저에서 애플리케이션을 열려면 다음 명령을 사용할 수 있습니다.

```sh
make open-original
```

이렇게 하면 셀프 서비스 UI의 시작 페이지가 열립니다.

## 사용 가능한 명령어

`Makefile`은 환경을 관리하기 위한 여러 명령을 제공합니다.

- `make kratos-up`: Ory Kratos 서비스를 시작합니다.
- `make kratos-log`: Ory Kratos 서비스의 로그를 봅니다.
- `make kratos-down`: Ory Kratos 서비스를 중지합니다.
- `make kratos-clean`: Ory Kratos 서비스 및 관련 볼륨을 중지하고 제거합니다.
- `make open-mailslurper`: MailSlurper UI를 열어 Ory Kratos에서 보낸 이메일을 검사합니다.
- `make run-original`: 종속성을 설치하고 셀프 서비스 UI 애플리케이션을 실행합니다.
- `make open-original`: 브라우저에서 셀프 서비스 UI를 엽니다.
