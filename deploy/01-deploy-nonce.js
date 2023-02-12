const { network, ethers } = require("hardhat");
const { developmentChains, networkConfig } = require("../helper-hardhat-config")
const { verify } = require("../utills/verify");
module.exports = async function ({ getNamedAccounts, deployments }) {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const args = [];
    const contract = await deploy("Nonce", {
        from: deployer,
        args: args,
        log: true,
        waitconfirmations: network.config.blockconfirmations
    })
    if (!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        log("verifying contract On chain wait a minute...")

        await verify(contract.address, args)
    }
    log("************************ Script Ended *************************")
}

module.exports.tags = ["all", "contract"]