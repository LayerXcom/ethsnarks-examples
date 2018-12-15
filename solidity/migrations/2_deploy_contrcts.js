const TestableVerifier = artifacts.require("TestableVerifier.sol");

let list_flatten = (l) => {
    return [].concat.apply([], l);
};


let vkToFlat = (vk) => {
    return [
        list_flatten([
            vk.alpha[0], vk.alpha[1],
            list_flatten(vk.beta),
            list_flatten(vk.gamma),
            list_flatten(vk.delta),
        ]),
        list_flatten(vk.gammaABC)
    ];
};

module.exports = function(deployer) {
    const vk = require("../../.keys/sha256_preimage.vk.json");
    const [vkFlat, vkFlatIC] = vkToFlat(vk);

    deployer.deploy(TestableVerifier, vkFlat, vkFlatIC);
};
