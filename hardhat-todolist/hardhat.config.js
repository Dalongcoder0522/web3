require("@nomicfoundation/hardhat-toolbox");
/** @type import('hardhat/config').HardhatUserConfig */
require('dotenv').config()
//console.log(process.env.ALCHEMY_API_KEY + ' ' + process.env.PRIVATE_KEY) // remove this after you've confirmed it is working
module.exports = {
  solidity: "0.8.24",
  networks: {
    hardhat: {},
    sepolia: {
      url:"https://eth-sepolia.g.alchemy.com/v2/" + process.env.ALCHEMY_API_KEY,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
