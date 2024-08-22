// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract Array {
    // Several ways to initialize an array
    uint256[] public arr = new uint256[](3);
    uint256[] public arr2 = [1, 2, 3];
    // Fixed sized array, all elements initialize to 0
    uint256[10] public myFixedSizeArr;

    function get(uint256 i) public returns (uint256,uint256) {
        arr = arr2;
        arr2[i] = 66;
        return (arr[i],arr2[i]);
    }
    function get2(uint256 i) public pure returns (uint256,uint256) {
        uint256[] memory arrR = new uint256[](3);
        arrR[0] = 2;
        uint256[] memory arr2R = new uint256[](3);
        arr2R[0] = 1;
        arrR = arr2R;
        arr2R[i] = 66;
        return (arrR[i],arr2R[i]);
    }
    function bytesArray(uint8 i) public pure returns( bytes1 ,  bytes1 ){
        
        bytes memory a = 'abcd';
        bytes memory b = 'efgh';
        a = b;
        b[i] = '9';
        return (a[i],b[i]);
    }

    function bytesArrayEx(uint8 i) public pure returns( bytes1 ,  bytes1 ){
        bytes memory bts1 = "btc";
        bytes memory bts2 = bts1;
        bts2[i] = 'e'; //这里只改了bts2[0]的值，但是你会发现bts1[0]的值也会跟着变动
        return (bts1[i],bts2[i]);
    }
    // Solidity can return the entire array.
    // But this function should be avoided for
    // arrays that can grow indefinitely in length.
    function getArr() public view returns (uint256[] memory) {
        return arr;
    }

    function push(uint256  i) public {
        // Append to array
        // This will increase the array length by 1.
        arr.push(i);
    }

    function pop() public {
        // Remove last element from array
        // This will decrease the array length by 1
        arr.pop();
    }

    function getLength() public view returns (uint256) {
        return arr.length;
    }

    function remove(uint256 index) public {
        // Delete does not change the array length.
        // It resets the value at index to it's default value,
        // in this case 0
        delete arr[index];
    }

    function examples() external pure{
        // create array in memory, only fixed size can be created
        uint256[] memory a = new uint256[](5);
    }
}