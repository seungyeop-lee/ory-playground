# Ory Kratos Quickstart

## 프로젝트 개요

이 프로젝트는 [Ory Kratos](https://www.ory.sh/docs/kratos)를 사용하여 사용자 인증 시스템을 빠르게 시작하기 위한 예제입니다. Docker Compose를 사용하여 Kratos, UI 예제, MailSlurper (이메일 서버)를 실행합니다.

주요 기술:

*   **Ory Kratos:** 사용자 인증 및 관리 시스템
*   **Docker Compose:** 다중 컨테이너 Docker 애플리케이션 정의 및 실행
*   **MailSlurper:** 테스트용 SMTP 서버

## 빌드 및 실행

### 초기 설정

```bash
make init
```

`ory/kratos` 저장소를 복제하고 필요한 설정을 구성합니다.

### 실행

```bash
make up
```

Docker Compose를 사용하여 모든 서비스를 시작합니다.

### 종료

```bash
make down
```

실행중인 모든 서비스를 중지합니다.

### 완전 삭제

```bash
make clean
```

모든 서비스와 데이터를 삭제합니다.

## 개발 컨벤션

### API 흐름 테스트

다음 스크립트를 사용하여 로그인 및 회원가입 API 흐름을 테스트할 수 있습니다.

*   **로그인 흐름 가져오기:**

    ```bash
    make get-signin-flow
    ```

*   **회원가입 흐름 가져오기:**

    ```bash
    make get-signup-flow
    ```

### UI 및 이메일 확인

*   **테스트 UI 열기:**

    ```bash
    make open-test-ui
    ```

    브라우저에서 `http://127.0.0.1:4455/welcome` 주소로 테스트 UI를 엽니다.

*   **MailSlurper 열기:**

    ```bash
    make open-mailslurper
    ```

    브라우저에서 `http://127.0.0.1:4436/` 주소로 MailSlurper를 열어 Kratos가 보낸 이메일을 확인할 수 있습니다.
