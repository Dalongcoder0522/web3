import { ethers } from "ethers";

// 利用Alchemy的rpc节点连接以太坊测试网络
console.log("\n1. 连接 wss RPC")
const ALCHEMY_SEPOLIA_URL = 'https://eth-sepolia.g.alchemy.com/v2/fzFQdDCZyyx907xqFwmdvc7qmKfJs_C0';
const provider = new ethers.WebSocketProvider(ALCHEMY_SEPOLIA_URL);
let network = provider.getNetwork();
network.then(res => console.log(`[${(new Date).toLocaleTimeString()}] 连接到 chain ID ${res.chainId}`));

console.log("\n2. 限制调用rpc接口速率")
// 2. 限制访问rpc速率，不然调用频率会超出限制，报错。
function throttle(fn, delay) {
  let timer;
  return function(){
    if(!timer) {
      fn.apply(this, arguments)
      timer = setTimeout(()=>{
        clearTimeout(timer)
        timer = null
      },delay)
    }
  }
}

const main = async () => {
  let i = 0;
  // 3. 监听pending交易，获取txHash
  console.log("\n3. 监听pending交易，打印txHash。")
  provider.on("pending", async (txHash) => {
    if (txHash && i < 100) {
      // 打印txHash
      console.log(`[${(new Date).toLocaleTimeString()}] 监听Pending交易 ${i}: ${txHash} \r`);
      i++
    }
  });

  // 4. 监听pending交易，并获取交易详情
  console.log("\n4. 监听pending交易，获取txHash，并输出交易详情。")
  let j = 0
  provider.on("pending", throttle(async (txHash) => {
    if (txHash && j <= 100) {
      // 获取tx详情
      let tx = await provider.getTransaction(txHash);
      console.log(`\n[${(new Date).toLocaleTimeString()}] 监听Pending交易 ${j}: ${txHash} \r`);
      console.log(tx);
      j++
    }
  }, 1000));
};

main()
