import { ethers } from "ethers";
// 利用Alchemy的rpc节点连接以太坊测试网络
const ALCHEMY_SEPOLIA_URL = 'https://eth-sepolia.g.alchemy.com/v2/fzFQdDCZyyx907xqFwmdvc7qmKfJs_C0';//我自己的节点
const provider = new ethers.JsonRpcProvider(ALCHEMY_SEPOLIA_URL);

// 利用私钥和provider创建wallet对象(建议用自己的钱包私钥)
const privateKey = '7b785f128054c3be1c3fb56cd9180f981fcc4f1280f8606daf845cbf29e9afc1'
const wallet = new ethers.Wallet(privateKey, provider)
// ERC20的人类可读abi
const abiERC20 = '[\n' +
    '\t{\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "string",\n' +
    '\t\t\t\t"name": "name_",\n' +
    '\t\t\t\t"type": "string"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "string",\n' +
    '\t\t\t\t"name": "symbol_",\n' +
    '\t\t\t\t"type": "string"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"stateMutability": "nonpayable",\n' +
    '\t\t"type": "constructor"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"anonymous": false,\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"indexed": true,\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "owner",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"indexed": true,\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "spender",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"indexed": false,\n' +
    '\t\t\t\t"internalType": "uint256",\n' +
    '\t\t\t\t"name": "value",\n' +
    '\t\t\t\t"type": "uint256"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"name": "Approval",\n' +
    '\t\t"type": "event"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"anonymous": false,\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"indexed": true,\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "from",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"indexed": true,\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "to",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"indexed": false,\n' +
    '\t\t\t\t"internalType": "uint256",\n' +
    '\t\t\t\t"name": "value",\n' +
    '\t\t\t\t"type": "uint256"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"name": "Transfer",\n' +
    '\t\t"type": "event"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"name": "allowance",\n' +
    '\t\t"outputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "uint256",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "uint256"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"stateMutability": "view",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "spender",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "uint256",\n' +
    '\t\t\t\t"name": "amount",\n' +
    '\t\t\t\t"type": "uint256"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"name": "approve",\n' +
    '\t\t"outputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "bool",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "bool"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"stateMutability": "nonpayable",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"name": "balanceOf",\n' +
    '\t\t"outputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "uint256",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "uint256"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"stateMutability": "view",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "uint256",\n' +
    '\t\t\t\t"name": "amount",\n' +
    '\t\t\t\t"type": "uint256"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"name": "burn",\n' +
    '\t\t"outputs": [],\n' +
    '\t\t"stateMutability": "nonpayable",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [],\n' +
    '\t\t"name": "decimals",\n' +
    '\t\t"outputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "uint8",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "uint8"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"stateMutability": "view",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "uint256",\n' +
    '\t\t\t\t"name": "amount",\n' +
    '\t\t\t\t"type": "uint256"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"name": "mint",\n' +
    '\t\t"outputs": [],\n' +
    '\t\t"stateMutability": "nonpayable",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [],\n' +
    '\t\t"name": "name",\n' +
    '\t\t"outputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "string",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "string"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"stateMutability": "view",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [],\n' +
    '\t\t"name": "symbol",\n' +
    '\t\t"outputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "string",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "string"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"stateMutability": "view",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [],\n' +
    '\t\t"name": "totalSupply",\n' +
    '\t\t"outputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "uint256",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "uint256"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"stateMutability": "view",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "recipient",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "uint256",\n' +
    '\t\t\t\t"name": "amount",\n' +
    '\t\t\t\t"type": "uint256"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"name": "transfer",\n' +
    '\t\t"outputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "bool",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "bool"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"stateMutability": "nonpayable",\n' +
    '\t\t"type": "function"\n' +
    '\t},\n' +
    '\t{\n' +
    '\t\t"inputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "sender",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "address",\n' +
    '\t\t\t\t"name": "recipient",\n' +
    '\t\t\t\t"type": "address"\n' +
    '\t\t\t},\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "uint256",\n' +
    '\t\t\t\t"name": "amount",\n' +
    '\t\t\t\t"type": "uint256"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"name": "transferFrom",\n' +
    '\t\t"outputs": [\n' +
    '\t\t\t{\n' +
    '\t\t\t\t"internalType": "bool",\n' +
    '\t\t\t\t"name": "",\n' +
    '\t\t\t\t"type": "bool"\n' +
    '\t\t\t}\n' +
    '\t\t],\n' +
    '\t\t"stateMutability": "nonpayable",\n' +
    '\t\t"type": "function"\n' +
    '\t}\n' +
    ']';
// 填入合约字节码，在remix中，你可以在两个地方找到Bytecode
// 1. 编译面板的Bytecode按钮
// 2. 文件面板artifact文件夹下与合约同名的json文件中
// 里面"bytecode"属性下的"object"字段对应的数据就是Bytecode，挺长的，608060起始
// "object": "608060405260646000553480156100...
const bytecodeERC20 = "6080604052601260055f6101000a81548160ff021916908360ff16021790555034801561002a575f80fd5b5060405161120e38038061120e833981810160405281019061004c91906101c0565b816003908161005b9190610443565b50806004908161006b9190610443565b505050610512565b5f604051905090565b5f80fd5b5f80fd5b5f80fd5b5f80fd5b5f601f19601f8301169050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b6100d28261008c565b810181811067ffffffffffffffff821117156100f1576100f061009c565b5b80604052505050565b5f610103610073565b905061010f82826100c9565b919050565b5f67ffffffffffffffff82111561012e5761012d61009c565b5b6101378261008c565b9050602081019050919050565b8281835e5f83830152505050565b5f61016461015f84610114565b6100fa565b9050828152602081018484840111156101805761017f610088565b5b61018b848285610144565b509392505050565b5f82601f8301126101a7576101a6610084565b5b81516101b7848260208601610152565b91505092915050565b5f80604083850312156101d6576101d561007c565b5b5f83015167ffffffffffffffff8111156101f3576101f2610080565b5b6101ff85828601610193565b925050602083015167ffffffffffffffff8111156102205761021f610080565b5b61022c85828601610193565b9150509250929050565b5f81519050919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f600282049050600182168061028457607f821691505b60208210810361029757610296610240565b5b50919050565b5f819050815f5260205f209050919050565b5f6020601f8301049050919050565b5f82821b905092915050565b5f600883026102f97fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826102be565b61030386836102be565b95508019841693508086168417925050509392505050565b5f819050919050565b5f819050919050565b5f61034761034261033d8461031b565b610324565b61031b565b9050919050565b5f819050919050565b6103608361032d565b61037461036c8261034e565b8484546102ca565b825550505050565b5f90565b61038861037c565b610393818484610357565b505050565b5b818110156103b6576103ab5f82610380565b600181019050610399565b5050565b601f8211156103fb576103cc8161029d565b6103d5846102af565b810160208510156103e4578190505b6103f86103f0856102af565b830182610398565b50505b505050565b5f82821c905092915050565b5f61041b5f1984600802610400565b1980831691505092915050565b5f610433838361040c565b9150826002028217905092915050565b61044c82610236565b67ffffffffffffffff8111156104655761046461009c565b5b61046f825461026d565b61047a8282856103ba565b5f60209050601f8311600181146104ab575f8415610499578287015190505b6104a38582610428565b86555061050a565b601f1984166104b98661029d565b5f5b828110156104e0578489015182556001820191506020850194506020810190506104bb565b868310156104fd57848901516104f9601f89168261040c565b8355505b6001600288020188555050505b505050505050565b610cef8061051f5f395ff3fe608060405234801561000f575f80fd5b50600436106100a7575f3560e01c806342966c681161006f57806342966c681461016557806370a082311461018157806395d89b41146101b1578063a0712d68146101cf578063a9059cbb146101eb578063dd62ed3e1461021b576100a7565b806306fdde03146100ab578063095ea7b3146100c957806318160ddd146100f957806323b872dd14610117578063313ce56714610147575b5f80fd5b6100b361024b565b6040516100c09190610967565b60405180910390f35b6100e360048036038101906100de9190610a18565b6102d7565b6040516100f09190610a70565b60405180910390f35b6101016103c4565b60405161010e9190610a98565b60405180910390f35b610131600480360381019061012c9190610ab1565b6103ca565b60405161013e9190610a70565b60405180910390f35b61014f61056d565b60405161015c9190610b1c565b60405180910390f35b61017f600480360381019061017a9190610b35565b61057f565b005b61019b60048036038101906101969190610b60565b610651565b6040516101a89190610a98565b60405180910390f35b6101b9610665565b6040516101c69190610967565b60405180910390f35b6101e960048036038101906101e49190610b35565b6106f1565b005b61020560048036038101906102009190610a18565b6107c3565b6040516102129190610a70565b60405180910390f35b61023560048036038101906102309190610b8b565b6108d7565b6040516102429190610a98565b60405180910390f35b6003805461025890610bf6565b80601f016020809104026020016040519081016040528092919081815260200182805461028490610bf6565b80156102cf5780601f106102a6576101008083540402835291602001916102cf565b820191905f5260205f20905b8154815290600101906020018083116102b257829003601f168201915b505050505081565b5f8160015f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f20819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516103b29190610a98565b60405180910390a36001905092915050565b60025481565b5f8160015f8673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f3373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546104529190610c53565b92505081905550815f808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546104a49190610c53565b92505081905550815f808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546104f69190610c86565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161055a9190610a98565b60405180910390a3600190509392505050565b60055f9054906101000a900460ff1681565b805f803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546105ca9190610c53565b925050819055508060025f8282546105e29190610c53565b925050819055505f73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516106469190610a98565b60405180910390a350565b5f602052805f5260405f205f915090505481565b6004805461067290610bf6565b80601f016020809104026020016040519081016040528092919081815260200182805461069e90610bf6565b80156106e95780601f106106c0576101008083540402835291602001916106e9565b820191905f5260205f20905b8154815290600101906020018083116106cc57829003601f168201915b505050505081565b805f803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461073c9190610c86565b925050819055508060025f8282546107549190610c86565b925050819055503373ffffffffffffffffffffffffffffffffffffffff165f73ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516107b89190610a98565b60405180910390a350565b5f815f803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f82825461080f9190610c53565b92505081905550815f808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020015f205f8282546108619190610c86565b925050819055508273ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108c59190610a98565b60405180910390a36001905092915050565b6001602052815f5260405f20602052805f5260405f205f91509150505481565b5f81519050919050565b5f82825260208201905092915050565b8281835e5f83830152505050565b5f601f19601f8301169050919050565b5f610939826108f7565b6109438185610901565b9350610953818560208601610911565b61095c8161091f565b840191505092915050565b5f6020820190508181035f83015261097f818461092f565b905092915050565b5f80fd5b5f73ffffffffffffffffffffffffffffffffffffffff82169050919050565b5f6109b48261098b565b9050919050565b6109c4816109aa565b81146109ce575f80fd5b50565b5f813590506109df816109bb565b92915050565b5f819050919050565b6109f7816109e5565b8114610a01575f80fd5b50565b5f81359050610a12816109ee565b92915050565b5f8060408385031215610a2e57610a2d610987565b5b5f610a3b858286016109d1565b9250506020610a4c85828601610a04565b9150509250929050565b5f8115159050919050565b610a6a81610a56565b82525050565b5f602082019050610a835f830184610a61565b92915050565b610a92816109e5565b82525050565b5f602082019050610aab5f830184610a89565b92915050565b5f805f60608486031215610ac857610ac7610987565b5b5f610ad5868287016109d1565b9350506020610ae6868287016109d1565b9250506040610af786828701610a04565b9150509250925092565b5f60ff82169050919050565b610b1681610b01565b82525050565b5f602082019050610b2f5f830184610b0d565b92915050565b5f60208284031215610b4a57610b49610987565b5b5f610b5784828501610a04565b91505092915050565b5f60208284031215610b7557610b74610987565b5b5f610b82848285016109d1565b91505092915050565b5f8060408385031215610ba157610ba0610987565b5b5f610bae858286016109d1565b9250506020610bbf858286016109d1565b9150509250929050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602260045260245ffd5b5f6002820490506001821680610c0d57607f821691505b602082108103610c2057610c1f610bc9565b5b50919050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b5f610c5d826109e5565b9150610c68836109e5565b9250828203905081811115610c8057610c7f610c26565b5b92915050565b5f610c90826109e5565b9150610c9b836109e5565b9250828201905080821115610cb357610cb2610c26565b5b9291505056fea26469706673582212209afdbfb8d7822bbbdb75050f7d1998bb6c1ac744a8b2070a4645a269df702e6c64736f6c634300081a0033";

const factoryERC20 = new ethers.ContractFactory(abiERC20, bytecodeERC20, wallet);
// 1. 利用contractFactory部署ERC20代币合约
console.log("\n1. 利用contractFactory部署ERC20代币合约")
// 部署合约，填入constructor的参数
const contractERC20 = await factoryERC20.deploy("RCC Token", "RCC")
console.log(`合约地址: ${contractERC20.target}`);
console.log("部署合约的交易详情")
console.log(contractERC20.deploymentTransaction())
console.log("\n等待合约部署上链")
await contractERC20.waitForDeployment()
// 也可以用 contractERC20.deployTransaction.wait()
console.log("合约已上链")

// 打印合约的name()和symbol()，然后调用mint()函数，给自己地址mint 10,000代币
console.log("\n2. 调用mint()函数，给自己地址mint 10,000代币")
console.log(`合约名称: ${await contractERC20.name()}`)
console.log(`合约代号: ${await contractERC20.symbol()}`)
let tx = await contractERC20.mint("10000")
console.log("等待交易上链")
await tx.wait()
console.log(`mint后地址中代币余额: ${await contractERC20.balanceOf(wallet)}`)
console.log(`代币总供给: ${await contractERC20.totalSupply()}`)

// 3. 调用transfer()函数，给Vitalik转账1000代币
console.log("\n3. 调用transfer()函数，给Vitalik转账1,000代币")
tx = await contractERC20.transfer("vitalik.eth", "1000")
console.log("等待交易上链")
await tx.wait()
console.log(`Vitalik钱包中的代币余额: ${await contractERC20.balanceOf("vitalik.eth")}`)
