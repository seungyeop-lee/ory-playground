.PHONY:clone
clone:
	rm -rf ./elements
	git clone https://github.com/ory/elements.git
	cd elements && git checkout f6ee245239783b86fc3205098372a8b67e650c35

.PHONY:copy
copy:
	rm -rf ./nextjs-app-router
	cp -r elements/examples/nextjs-app-router ./

.PHONY:reset
reset: clone copy
