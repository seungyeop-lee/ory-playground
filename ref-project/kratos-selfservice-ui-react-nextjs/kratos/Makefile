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

.PHONY:open-mailslurper
open-mailslurper:
	open -a "Google Chrome" http://127.0.0.1:4436/
