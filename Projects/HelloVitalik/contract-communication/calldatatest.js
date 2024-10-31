import { ethers } from "ethers";
// 利用Alchemy的rpc节点连接以太坊测试网络
const ALCHEMY_SEPOLIA_URL = 'https://eth-sepolia.g.alchemy.com/v2/fzFQdDCZyyx907xqFwmdvc7qmKfJs_C0';//我自己的节点
const provider = new ethers.JsonRpcProvider(ALCHEMY_SEPOLIA_URL);

// 利用私钥和provider创建wallet对象(建议用自己的钱包私钥)
const privateKey = '7b785f128054c3be1c3fb56cd9180f981fcc4f1280f8606daf845cbf29e9afc1'
const wallet = new ethers.Wallet(privateKey, provider)

// WETH的ABI
const abiWETH = [
  "function balanceOf(address) public view returns(uint)",
  "function deposit() public payable",
];
// WETH合约地址（sepolia测试网）
const addressWETH = '0x7b79995e5f793a07bc00c21412e50ecae098e7f9'
// 声明WETH合约
const contractWETH = new ethers.Contract(addressWETH, abiWETH, wallet)

const address = await wallet.getAddress()
// 1. 读取WETH合约的链上信息（WETH abi）
console.log("\n1. 读取WETH余额")
// 编码calldata 4 个字节的函数选择器 + 32 字节的地址（一个参数）
const param1 = contractWETH.interface.encodeFunctionData(
    "balanceOf",
    [address]
);
console.log(`编码结果： ${param1}`)
// 创建交易
const tx1 = {
  to: addressWETH,
  data: param1
}
// 发起交易，可读操作（view/pure）可以用 provider.call(tx)
const balanceWETH = await provider.call(tx1)
console.log(`存款前WETH持仓: ${ethers.formatEther(balanceWETH)}\n`)

// 编码calldata
const param2 = contractWETH.interface.encodeFunctionData(
    "deposit"
);
console.log(`编码结果： ${param2}`)
// 创建交易
const tx2 = {
  to: addressWETH,
  data: param2,
  value: ethers.parseEther("0.001")}
// 发起交易，写入操作需要 wallet.sendTransaction(tx)
const receipt1 = await wallet.sendTransaction(tx2)
// 等待交易上链
await receipt1.wait()
console.log(`交易详情：`)
console.log(receipt1)
const balanceWETH_deposit = await contractWETH.balanceOf(address)
console.log(`存款后WETH持仓: ${ethers.formatEther(balanceWETH_deposit)}\n`)
