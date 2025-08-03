# GEMINI.md

## 프로젝트 개요

이 프로젝트는 [Ory Kratos 퀵스타트 가이드](https://www.ory.sh/docs/kratos/quickstart)를 직접 실습해볼 수 있도록 구성된 플레이그라운드 환경입니다. Docker Compose를 사용하여 Ory Kratos, 샘플 UI, 이메일 테스트를 위한 MailSlurper 인스턴스를 함께 실행합니다.
실습을 위한 파일은 ory/kratos 레포지토리의 19a41ecd505e1a78dcbefb8c1f264268adfd4415 커밋 기준으로 작성되었습니다. (https://github.com/ory/kratos/tree/19a41ecd505e1a78dcbefb8c1f264268adfd4415)
raw 폴더는 실습 파일 원본 및 실습 파일 원본 재생성을 위한 명령어로 구성해되어 있습니다.

주요 기술 스택은 다음과 같습니다.

*   **Ory Kratos:** 사용자 인증, 등록, 계정 복구, 프로필 관리 등 self-service 기능을 제공하는 오픈소스 서비스입니다.
*   **Docker Compose:** 여러 컨테이너를 정의하고 실행하기 위한 도구입니다.
*   **SQLite:** Kratos의 데이터베이스로 사용됩니다.
*   **MailSlurper:** Kratos가 보내는 확인 이메일 등을 테스트하기 위한 SMTP 서버 및 웹 UI입니다.

## 빌드 및 실행

이 프로젝트는 `Makefile`을 통해 주요 작업을 간편하게 수행할 수 있도록 구성되어 있습니다.

*   **모든 서비스 시작:**
    ```bash
    make up
    ```
*   **모든 서비스 중지:**
    ```bash
    make down
    ```
*   **모든 서비스 중지 및 데이터 삭제:**
    ```bash
    make clean
    ```
*   **Kratos 로그 확인:**
    ```bash
    make log
    ```

실행 후 다음 URL을 통해 각 서비스에 접근할 수 있습니다.

*   **Kratos Public API:** `http://127.0.0.1:4433/`
*   **Kratos Admin API:** `http://127.0.0.1:4434/`
*   **Self-Service UI:** `http://127.0.0.1:4455/`
*   **MailSlurper:** `http://127.0.0.1:4436/`

## 개발 컨벤션

*   **설정 관리:** Kratos의 주요 설정은 `config/kratos.yml` 파일에서 관리합니다.
*   **사용자 스키마:** 사용자의 `traits` 정보는 `config/identity.schema.json` 파일에 JSON Schema 형태로 정의됩니다.
*   **API 상호작용:** `scripts` 디렉토리의 셸 스크립트들은 `curl`과 `jq`를 사용하여 Kratos API와 상호작용하는 예시를 보여줍니다.
*   **작업 자동화:** `Makefile`을 사용하여 반복적인 Docker Compose 명령어 및 기타 작업들을 자동화합니다.
