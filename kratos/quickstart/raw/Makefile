.PHONY:clone
clone:
	rm -rf ./kratos
	git clone https://github.com/ory/kratos.git
	cd kratos && git checkout 19a41ecd505e1a78dcbefb8c1f264268adfd4415

.PHONY:rebuild
rebuild:
	rm -f ./compose.yml
	docker compose -f kratos/quickstart.yml -f kratos/quickstart-standalone.yml config --no-path-resolution > compose.yml

	rm -rf ./contrib/quickstart/kratos
	mkdir -p ./contrib/quickstart/kratos
	cp -r kratos/contrib/quickstart/kratos/email-password ./contrib/quickstart/kratos

.PHONY:reset
reset: clone rebuild
