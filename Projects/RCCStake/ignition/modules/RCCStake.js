const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");
module.exports = buildModule("RCCStakeModule", (m) => {
const RCCStake = m.contract("RCCStake", []);
return { RCCStake };
});
