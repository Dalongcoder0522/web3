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
  "function transfer(address, uint) public returns (bool)",
  "function withdraw(uint) public",
];
// WETH合约地址（sepolia测试网）
const addressWETH = '0x7b79995e5f793a07bc00c21412e50ecae098e7f9'
// WETH Contract

// 声明可写合约
const contractWETH = new ethers.Contract(addressWETH, abiWETH, wallet)
// 也可以声明一个只读合约，再用connect(wallet)函数转换成可写合约。
// const contractWETH = new ethers.Contract(addressWETH, abiWETH, provider)
// contractWETH.connect(wallet)


const address = await wallet.getAddress()
// 读取WETH合约的链上信息（WETH abi）
console.log("\n1. 读取WETH余额")
const balanceWETH = await contractWETH.balanceOf(address)
console.log(`存款前WETH持仓: ${ethers.formatEther(balanceWETH)}\n`)

console.log("\n2. 调用desposit()函数，存入0.001 ETH")
// 发起交易
const tx = await contractWETH.deposit({value: ethers.parseEther("0.001")})
// 等待交易上链
await tx.wait()
console.log(`交易详情：`)
console.log(tx)
const balanceWETH_deposit = await contractWETH.balanceOf(address)
console.log(`存款后WETH持仓: ${ethers.formatEther(balanceWETH_deposit)}\n`)

console.log("\n3. 调用transfer()函数，给vitalik转账0.001 WETH")
// 发起交易
const tx2 = await contractWETH.transfer("vitalik.eth", ethers.parseEther("0.001"))
// 等待交易上链
await tx2.wait()
const balanceWETH_transfer = await contractWETH.balanceOf(address)
console.log(`转账后WETH持仓: ${ethers.formatEther(balanceWETH_transfer)}\n`)

//观察 deposit() 函数和 balanceOf() 函数，为什么他们的返回值不一样？为什么前者返回一堆数据，而后者只返回确定的值？这是因为对于钱包的余额，它是一个只读操作，读到什么就是什么。而对于一次函数的调用，并不知道数据何时上链，所以只会返回这次交易的信息。总结来说，就是对于非 pure/view 函数的调用，会返回交易的信息。如果想知道函数执行过程中合约变量的变化，可以在合约中使用 emit 输出事件，并在返回的 transaction 信息中读取事件信息来获取相应的值。

