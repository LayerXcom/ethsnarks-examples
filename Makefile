CLI = .build/sha256_preimage_cli

all: $(CLI) test

$(CLI): release
	make -C $(dir $@)

.build:
	mkdir -p $@
	cd $@ && cmake ../circuit/ || rm -rf ../$@

debug:
	mkdir -p .build && cd .build && cmake -DCMAKE_BUILD_TYPE=Debug ../circuit/

release:
	mkdir -p .build && cd .build && cmake -DCMAKE_BUILD_TYPE=Release ../circuit/

git-submodules:
	git submodule update --init --recursive

clean:
	rm -rf .build

python-test:
	make -C python test

solidity-test:
	make -C solidity test

test: .keys/sha256_preimage.pk.raw solidity-test python-test

.keys/sha256_preimage.pk.raw: $(CLI)
	mkdir -p $(dir $@)
	$(CLI) genkeys .keys/sha256_preimage.pk.raw .keys/sha256_preimage.vk.json
