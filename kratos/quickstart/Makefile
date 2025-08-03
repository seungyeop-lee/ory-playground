.PHONY:up
up:
	docker compose up -d

.PHONY:log
log:
	docker compose logs -f kratos

.PHONY:down
down:
	docker compose down

.PHONY:clean
clean:
	docker compose down -v

.PHONY:open-test-ui
open-test-ui:
	open -a "Google Chrome" http://127.0.0.1:4455/welcome

.PHONY:open-mailslurper
open-mailslurper:
	open -a "Google Chrome" http://127.0.0.1:4436/

.PHONY:get-signin-flow
get-signin-flow:
	./scripts/signin-flow.sh

.PHONY:get-signup-flow
get-signup-flow:
	./scripts/signup-flow.sh
