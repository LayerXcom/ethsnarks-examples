# ethsnarks-exmaples

## Building
```
$ git clone git@github.com:LayerXcom/ethsnarks-examples.git
$ cd ethsnarks-examples
```

You can run `ethsnarks` on Docker:
```
$ docker pull osuketh/ethsnarks:latest
$ docker run -v `pwd`:/workspace/ethsnarks-examples --rm -it osuketh/ethsnarks /bin/bash
$ cd /workspace/ethsnarks-examples
$ make
```

## Generating proving/verifying keys
```
$ .build/sha256_preimage_cli genkeys .keys/sha256_preimage.pk.raw .keys/sha256_preimage.vk.json
```

## Proving
I am proving that I know a preimage for a digest(`0x06df05371981a237d0ed11472fae7c94c9ac0eff1d05413516710d17b10a4fb6f4517bda4a695f02d0a73dd4db543b4653df28f5d09dab86f92ffb9b86d01e25`) without revealing the preimage(it's 5).
```
.build/sha256_preimage_cli prove ./keys/sha256_preimage.pk.raw 0x06df05371981a237d0ed11472fae7c94c9ac0eff1d05413516710d17b10a4fb6f4517bda4a695f02d0a73dd4db543b4653df28f5d09dab86f92ffb9b86d01e25 proof.json
```

