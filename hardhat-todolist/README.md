# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
npm init -y 
npm i -D hardhat # 安装hardhat依赖
npx hardhat init # hardhat 初始化JavaScript项⽬
npx hardhat compile
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/TodoList.js --network localhost # 部署到本地测试网络
git rm -r --cached hardhat-todolist/cache  
npm install dotenv --save
npx hardhat ignition deploy ./ignition/modules/TodoList.js --network sepolia # 部署到sepolia测试网络
https://sepolia.etherscan.io/address/trasactionHash  # 查看合约地址
