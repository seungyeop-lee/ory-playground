# Ory Elements - Next.js 앱 라우터 예제 (원본)

이 디렉터리는 Ory Elements Next.js 앱 라우터 예제의 원본 소스 코드를 포함합니다. Ory Elements 저장소에서 원본 프로젝트를 가져오는 데 사용됩니다.

## 목적

이 디렉터리의 주요 목적은 `ory/elements` 저장소를 복제하고 `nextjs-app-router` 예제를 상위 디렉터리로 복사하는 것입니다. 이를 통해 예제가 항상 특정 버전의 Ory Elements 프로젝트를 기반으로 하도록 보장합니다.

## Makefile 명령어

이 디렉터리의 `Makefile`은 다음 명령어를 제공합니다.

*   **`clone`**: GitHub에서 `ory/elements` 저장소를 복제하고 특정 커밋(`f6ee245239783b86fc3205098372a8b67e650c35`)을 체크아웃합니다.
*   **`copy`**: 복제된 `elements` 저장소에서 `nextjs-app-router` 예제를 이 프로젝트 내의 `nextjs-app-router` 디렉터리로 복사합니다.
*   **`reset`**: `clone`과 `copy`를 순서대로 실행하여 예제를 원본 상태로 재설정하는 편의 명령어입니다.

**참고:** 이 디렉터리는 Next.js 애플리케이션을 직접 실행하거나 수정하기 위한 것이 아닙니다. 유일한 목적은 예제의 소스 코드를 관리하는 것입니다.
