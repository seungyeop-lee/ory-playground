.PHONY:clone
clone:
	rm -rf ./kratos
	git clone https://github.com/ory/kratos.git

.PHONY:build
build:
	rm -f ./compose.yml
	docker compose -f kratos/quickstart.yml -f kratos/quickstart-standalone.yml config --no-path-resolution > compose.yml

	rm -rf ./contrib/quickstart/kratos
	mkdir -p ./contrib/quickstart/kratos
	cp -r kratos/contrib/quickstart/kratos/email-password ./contrib/quickstart/kratos

.PHONY:init
init: clone build

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
