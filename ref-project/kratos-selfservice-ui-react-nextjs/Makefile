.PHONY:kratos-up
kratos-up:
	make -C ./kratos up

.PHONY:kratos-log
kratos-log:
	make -C ./kratos log

.PHONY:kratos-down
kratos-down:
	make -C ./kratos down

.PHONY:kratos-clean
kratos-clean:
	make -C ./kratos clean

.PHONY:open-mailslurper
open-mailslurper:
	make -C ./kratos open-mailslurper

.PHONY:run-original
run-original:
	(cd original && [ -d "node_modules" ] || npm i)
	(cd original && npm run dev)
