// SPDX-License-Identifier: MIT
// compiler version must be grater than or equal to 0.8.24 and less than 0.9.0
pragma solidity ^0.8.24;

contract HelloWorld {
    int private count;
    function getCount() public view returns (int){
        return count;
    }
    function increment() public payable{
        count++;
    }
    function decrement() public payable{
        count--;
    }
}