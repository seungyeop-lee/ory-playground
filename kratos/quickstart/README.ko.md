# Ory Kratos 플레이그라운드

이 프로젝트는 [Ory Kratos 퀵스타트 가이드](https://www.ory.sh/docs/kratos/quickstart)를 직접 실습해볼 수 있도록 구성된 Docker 기반의 플레이그라운드 환경입니다.

Docker Compose를 사용하여 Ory Kratos, 샘플 UI, 이메일 테스트를 위한 MailSlurper 인스턴스를 함께 실행합니다. 실습을 위한 파일은 `ory/kratos` 레포지토리의 `19a41ecd505e1a78dcbefb8c1f264268adfd4415` 커밋 기준으로 작성되었습니다.

## 사전 준비

*   [Docker](https://www.docker.com/get-started)
*   [Make](https://www.gnu.org/software/make/)

## 주요 기술 스택

*   **Ory Kratos:** 사용자 인증, 등록, 계정 복구, 프로필 관리 등 self-service 기능을 제공하는 오픈소스 서비스입니다.
*   **Docker Compose:** 여러 컨테이너를 정의하고 실행하기 위한 도구입니다.
*   **SQLite:** Kratos의 데이터베이스로 사용됩니다.
*   **MailSlurper:** Kratos가 보내는 확인 이메일 등을 테스트하기 위한 SMTP 서버 및 웹 UI입니다.

## 시작하기

모든 서비스를 시작하려면 다음 명령어를 실행하세요.

```bash
make up
```

서비스는 다음 URL에서 사용할 수 있습니다.

*   **Kratos Public API:** `http://127.0.0.1:4433/`
*   **Kratos Admin API:** `http://127.0.0.1:4434/`
*   **셀프 서비스 UI:** `http://127.0.0.1:4455/`
*   **MailSlurper:** `http://127.0.0.1:4436/`

## 디렉토리 구조

*   `config/`: Kratos의 주요 설정(`kratos.yml`) 및 사용자 `traits` 정보 스키마(`identity.schema.json`)가 위치합니다.
*   `scripts/`: `curl`과 `jq`를 사용하여 Kratos API와 상호작용하는 예시 셸 스크립트가 위치합니다.
*   `raw/`: 실습 파일 원본 및 재생성 관련 파일들이 위치합니다.

## 사용 가능한 명령어

`Makefile`을 통해 다음 작업들을 편리하게 실행할 수 있습니다.

*   `make up`: 모든 서비스를 백그라운드에서 시작합니다.
*   `make down`: 모든 서비스를 중지합니다.
*   `make clean`: 모든 서비스와 데이터를 제거합니다.
*   `make log`: Kratos 컨테이너의 로그를 확인합니다.
*   `make open-test-ui`: 브라우저에서 샘플 UI를 엽니다.
*   `make open-mailslurper`: MailSlurper UI를 엽니다.
*   `make get-signin-flow`: Kratos 로그인 흐름을 조회합니다.
*   `make get-signup-flow`: Kratos 회원가입 흐름을 조회합니다.

## 정리하기

모든 서비스를 중지하고 관련 데이터를 모두 제거하려면 다음을 실행하십시오.

```bash
make clean
```
