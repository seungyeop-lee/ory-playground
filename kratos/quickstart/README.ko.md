# Ory Kratos 퀵스타트 플레이그라운드

이 디렉토리는 [Ory Kratos 퀵스타트 가이드](https://www.ory.sh/docs/kratos/quickstart)를 직접 실습해볼 수 있도록 구성된 플레이그라운드 환경입니다.

Docker Compose를 사용하여 Ory Kratos, 셀프 서비스 UI, 그리고 이메일 테스트를 위한 MailSlurper 인스턴스를 설정합니다.

## 사전 준비

*   [Docker](https://www.docker.com/get-started)
*   [Make](https://www.gnu.org/software/make/)

## 시작하기

### 환경 실행

```bash
make up
```

이 프로젝트에는 실습에 필요한 모든 파일이 포함되어 있으므로, 별도의 빌드나 설정 과정 없이 바로 서비스를 시작할 수 있습니다.

### 실습 환경 업데이트 (선택 사항)

만약 이 실습 환경을 `ory/kratos` 공식 저장소의 최신 버전으로 업데이트하고 싶다면 다음 명령어들을 사용할 수 있습니다.

*   `make clone`: `ory/kratos` 저장소를 새로 복제합니다.
*   `make rebuild`: 로컬의 `kratos` 소스 코드를 기반으로 `compose.yml`과 관련 설정을 다시 생성합니다.
*   `make reset`: `clone`과 `rebuild`를 순차적으로 실행하여 전체 환경을 최신 상태로 초기화합니다.

서비스는 다음 URL에서 사용할 수 있습니다.

*   **Kratos Public API:** `http://127.0.0.1:4433/`
*   **Kratos Admin API:** `http://127.0.0.1:4434/`
*   **셀프 서비스 UI:** `http://127.0.0.1:4455/`
*   **MailSlurper:** `http://127.0.0.1:4436/`

## 사용 가능한 명령어

이 플레이그라운드는 `Makefile`을 통해 편리한 작업 실행을 지원합니다.

*   `make up`: 모든 서비스를 백그라운드에서 시작합니다.
*   `make down`: 모든 서비스를 중지합니다.
*   `make clean`: 모든 서비스와 데이터 볼륨을 제거합니다.
*   `make log`: Kratos 컨테이너의 로그를 확인합니다.
*   `make open-test-ui`: 기본 브라우저에서 셀프 서비스 UI를 엽니다.
*   `make open-mailslurper`: Kratos가 보낸 이메일을 확인할 수 있는 MailSlurper UI를 엽니다.
*   `make get-signin-flow`: Kratos API에서 현재 로그인 흐름을 가져옵니다.
*   `make get-signup-flow`: Kratos API에서 현재 회원가입 흐름을 가져옵니다.

## 정리하기

모든 서비스를 중지하고 컨테이너와 관련 데이터를 제거하려면 다음을 실행하십시오.

```bash
make clean
```
