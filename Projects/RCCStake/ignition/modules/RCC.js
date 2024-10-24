const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
const { ethers, upgrades } = require("hardhat");
module.exports = buildModule("RCCStakeModule", (m) => {
  // 部署 RccToken 合约，传入初始持有者地址作为参数
const RccToken = m.contract("RccToken", []);
return { RccToken };
});
