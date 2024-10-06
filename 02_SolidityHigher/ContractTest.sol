// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
contract ContractTest{
    bytes4 funcSelector;
    function square(uint x) public pure returns (uint){
        return x*x;
    }
    function double(uint x) public pure returns (uint) {
        return 2*x;
    }

    function setFucSelector (bytes4 selector) public {
        funcSelector = selector;
    }

    function setFucSelector (string calldata funcName) public {
        if(hashCompare(funcName,'square')) {
            funcSelector = this.square.selector;
        } else if(hashCompare(funcName,'double')) {
            funcSelector = this.double.selector;
        }
    }
    function executeFuncSelector(uint x) public returns (uint) {
        require(funcSelector != bytes4(0), "Selector not set");
        (bool success, bytes memory data) = address(this).call(abi.encodeWithSelector(funcSelector, x));
        require(success, "Function call failed");
        return abi.decode(data, (uint));
    }

    function hashCompare(string memory a, string memory b) public pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }   


}