# Kratos-NextJS

이 프로젝트는 [spa5k/kratos-next](https://github.com/spa5k/kratos-next)를 최신 버전의 Kratos와 Next.js 앱 라우터를 사용하여 재구성합니다.

## 시작하기

1. **Kratos 환경 시작:**
   ```bash
   make kratos-up
   ```

2. **웹 애플리케이션 실행:**
   ```bash
   make run-webapp
   ```
   웹 애플리케이션은 `http://127.0.0.1:3000`에서 확인할 수 있습니다.

## 명령어

루트 `Makefile`에서 사용할 수 있는 명령어는 다음과 같습니다:

- `make kratos-up`: Docker Compose를 사용하여 Kratos 및 MailSlurper 서비스를 시작합니다.
- `make kratos-log`: Kratos 서비스의 로그를 실시간으로 확인합니다.
- `make kratos-down`: Docker Compose 서비스를 중지합니다.
- `make kratos-clean`: 모든 Docker 리소스(컨테이너, 볼륨)를 중지하고 제거합니다.
- `make open-mailslurper`: 브라우저에서 MailSlurper 웹 인터페이스(`http://127.0.0.1:4436`)를 엽니다.
- `make run-webapp`: 필요한 경우 의존성을 설치하고 웹 애플리케이션의 Next.js 개발 서버를 시작합니다.
