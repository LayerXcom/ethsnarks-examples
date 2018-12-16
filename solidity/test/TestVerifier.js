const TestableVerifier = artifacts.require("TestableVerifier");

const fs =require("fs");
const ffi = require("ffi");

const sha256VerifyingKeyPath = "../.keys/sha256_preimage.vk.json";
const sha256ProvingKeyPath = "../.keys/sha256_preimage.pk.raw";

const libsha256Preimage = ffi.Library("../.build/libsha256_preimage", {
    "sha256_preimage_prove": [
        "string", [
            "string",  // pk_file
            "string",  // preimage_bytes64
        ]
    ]
});

let listFlatten = (l) => {
    return [].concat.apply([], l);
};

let vkToFlat = (vk) => {
    return [
        listFlatten([
            vk.alpha[0], vk.alpha[1],
            listFlatten(vk.beta),
            listFlatten(vk.gamma),
            listFlatten(vk.delta),
        ]),
        listFlatten(vk.gammaABC)
    ];
};

let proofToFlat = (proof) => {
    return listFlatten([
        proof.A,
        listFlatten(proof.B),
        proof.C
    ]);
};

contract("TestableVerifier", () => {
    it("should be success for verifying", async () => {        

        const preimageBytes64 = "0x0005";

        const proofJson = libsha256Preimage.sha256_preimage_prove(sha256ProvingKeyPath, preimageBytes64);
        const proof = JSON.parse(proofJson);
        console.log(`proof: ${proofJson}`);


        const vk_json = fs.readFileSync(sha256VerifyingKeyPath);
        const vk = JSON.parse(vk_json);
        const [vkFlat, vkFlatIC] = vkToFlat(vk);

        const verifier = await TestableVerifier.new(vkFlat, vkFlatIC);

        console.log(`vkFlat: ${vkFlat}`);
        console.log(`vkFlatIC: ${vkFlatIC}`);
        const testVerifyArgs = [
            vkFlat,
            vkFlatIC,
            proofToFlat(proof),
            [
                proof.input[0],
                proof.input[1]                
            ]
        ];
        
        const verifyResult = await verifier.TestVerify(...testVerifyArgs);

        const gasEstimation = await verifier.TestVerify.estimateGas(...testVerifyArgs);
        console.log(`gas estimation: ${gasEstimation}`);
        
        assert.strictEqual(verifyResult, true);
    });
});