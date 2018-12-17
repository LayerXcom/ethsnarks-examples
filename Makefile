CLI = .build/${spec}_preimage_cli

all: $(CLI) test

$(CLI): release
	make -C $(dir $@)

.build:
	mkdir -p $@
	cd $@ && cmake ../circuit/${spec}/ || rm -rf ../$@

debug:
	mkdir -p .build && cd .build && cmake -DCMAKE_BUILD_TYPE=Debug ../circuit/${spec}

release:
	mkdir -p .build && cd .build && cmake -DCMAKE_BUILD_TYPE=Release ../circuit/${spec}

git-submodules:
	git submodule update --init --recursive

clean:
	rm -rf .build

solidity-test:
	make -C solidity test

test: .keys/${spec}_preimage.pk.raw solidity-test

.keys/${spec}_preimage.pk.raw: $(CLI)
	mkdir -p $(dir $@)
	$(CLI) genkeys .keys/${spec}_preimage.pk.raw .keys/${spec}_preimage.vk.json