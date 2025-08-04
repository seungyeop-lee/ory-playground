# Docker 기반 Ory Kratos 셀프 서비스 UI

이 프로젝트는 Docker를 사용하여 [Ory Kratos 셀프 서비스 UI](https://github.com/ory/kratos-selfservice-ui-react-nextjs)를 로컬에서 실행하기 위한 환경을 제공합니다.

## 사전 요구 사항

- Docker
- Node.js 및 npm

## 시작하기

1. **Ory Kratos 및 관련 서비스 시작:**

   ```bash
   make kratos-up
   ```

2. **셀프 서비스 UI 실행:**

   ```bash
   make run-original
   ```

   Next.js 개발 서버가 시작됩니다.

3. **MailSlurper 열기:**

   Ory Kratos에서 보낸 이메일을 확인하려면 MailSlurper를 엽니다.

   ```bash
   make open-mailslurper
   ```

## 사용 가능한 명령어

- `make kratos-up`: Docker에서 Ory Kratos 서비스를 시작합니다.
- `make kratos-log`: Kratos 서비스의 로그를 표시합니다.
- `make kratos-down`: Ory Kratos 서비스를 중지합니다.
- `make kratos-clean`: Docker 볼륨을 제거합니다.
- `make open-mailslurper`: 브라우저에서 MailSlurper UI를 엽니다.
- `make run-original`: 셀프 서비스 UI 애플리케이션을 시작합니다.
