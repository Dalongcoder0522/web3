# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js

#启动本地网络
npx hardhat node
#部署合约到本地网络
npx hardhat ignition deploy ./ignition/modules/Shipping.js --network localhost 
#运行测试
npx hardhat test test/Shipping.js
