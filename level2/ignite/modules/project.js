const { ethers, upgrades } = require("hardhat");

async function main() {
  const CrowdfundingPlatform = await ethers.getContractFactory("MyCrowdfundingPlatform");
  const platform = await upgrades.deployProxy(CrowdfundingPlatform, [], { initializer: "initialize" });

  await platform.deployed();
  console.log("MyCrowdfundingPlatform deployed to:", platform.address);  
  await platform.waitForDeployment();
 console.log("MyCrowdfundingPlatform deployed to:", platform.target);
}

main();