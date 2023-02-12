const { ethers } = require("hardhat")

const networkConfig = {
    5: {
        name: 'goerli',
        interval: "30"
    },
    31337: {
        name: 'hardhat',
        interval: "30"
    }
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    developmentChains, networkConfig
}